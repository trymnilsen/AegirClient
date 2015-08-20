///<reference path="../../AppView.ts" />
/// <reference path="../../shape/CanvasShape.ts" />
/// <reference path="../../shape/Ship.ts" />
/// <reference path="../../shape/Grid.ts" />
/// <reference path="../../shape/CanvasShapeTransformation.ts" />

module App.View.Mod.Navigation {
    /**
     * Definitions of force types
     */
    enum ForcePointType {
        ACCELERATION,
        VELOCITY
    }
    enum DraggingMode {
        FORCEDRAG,
        CAMERADRAG,
        NODRAG
    }
    interface DraggingState {
        dragMode: DraggingMode,
        dragTarget?: ForcePoint,
        offsetStartX?: number,
        offsetStartY?: number
    }
    /**
     * Internal interface for defining a generic forcepoint
     */
    interface ForcePoint {
        transform: App.View.Shape.ICanvasShapeTransformation
        forceType: ForcePointType
    }
    interface ForcePointHitResult {
        point: ForcePoint,
        offsetX?: number,
        offsetY?: number
    }
    /**
     * Representing the navigation visualization camera
     */
    class NavigationVisualizationCamera {
        private X: number;
        private Y: number;

        constructor() {

        }
    }
    /**
     * Visualizes the navigation
     */
    export class NavigationVisualization extends App.View.AppView {

        public static FORCEPOINT_RADIUS:number = 30;

        private ctx: CanvasRenderingContext2D;

        private width: number;
        private height: number;

        private sizeIsDirty: boolean;
        private canvasW: number;
        private canvasH: number;

        private shipShape: App.View.Shape.CanvasShape;
        private gridShape: App.View.Shape.CanvasShape;

        private forcePoints: Array<ForcePoint> = [];

        private dragState: DraggingState;
        /**
         * Instantiates a new instance of the menu bar
         */
        constructor(width: number, height: number) {
            //Init parent
            super({
                backboneOptions: {
                    className: "nav-viz-canvas",
                    tagName: "canvas",
                    attributes: {
                        width: width,
                        height: height
                    }
                }
            });

            this.width = width;
            this.height = height;

            this.shipShape = new App.View.Shape.Ship(60, 180);
            this.gridShape = new App.View.Shape.Grid(this.width, this.height, 25);

            this.shipShape.setTransformation({
                X: this.width / 2 - 40,
                Y: 80,
                Scale: 1
            });

            this.setUpForcePoints();

        }
        private setUpForcePoints(): void {
            this.forcePoints = [{
                    transform: {
                        X: 0,
                        Y: 0,
                        Scale: 1
                    },
                    forceType: ForcePointType.VELOCITY
                },
                {
                    transform: {
                        X: 0,
                        Y: 0,
                        Scale: 1
                    },
                    forceType: ForcePointType.VELOCITY
                },
                {
                    transform: {
                        X: 0,
                        Y: 0,
                        Scale: 1
                    },
                    forceType: ForcePointType.ACCELERATION
                },
                {
                    transform: {
                        X: 0,
                        Y: 0,
                        Scale: 1
                    },
                    forceType: ForcePointType.ACCELERATION
                }];
        }
        private resize(width: number, height: number) {

        }
        private mouseDown(event: JQueryMouseEventObject): void {
            //check if forcepoint
            let hit:ForcePointHitResult = this.checkIfMouseOnForcePoint(event.offsetX, event.offsetY);
            if(!!hit.point)
            {
                this.dragState = {
                    dragMode: DraggingMode.FORCEDRAG,
                    offsetStartX: hit.offsetX,
                    offsetStartY: hit.offsetY,
                    dragTarget: hit.point
                };
                console.log("DragState ",this.dragState);
            }

            $(".nav-viz-wrapper").on("mousemove", (event) => { this.mouseDrag(event); });

            console.log("Mouse DOwn",event);
        }
        private mouseUp(event: JQueryMouseEventObject): void {
            console.log("Mouse Up",event);
            $(".nav-viz-wrapper").off("mousemove");
        }
        private mouseDrag(event: JQueryMouseEventObject): void {
            console.log("dragging ", event.offsetX, event.offsetY);
            let target: ForcePoint = this.dragState.dragTarget;
            target.transform.X = event.offsetX + this.dragState.offsetStartX;
            target.transform.Y = event.offsetY + this.dragState.offsetStartY;

            this.renderCanvas();
        }
        /**
         * Checks if the mouse is on any of the given force points
         * @param mouseX X pos of cursor
         * @param mouseY Y pos of cursor
         */
        private checkIfMouseOnForcePoint(mouseX: number, mouseY: number): ForcePointHitResult {
            let hit: ForcePoint = null;
            for (let i:number = 0; i < this.forcePoints.length; ++i) {
                let fp: ForcePoint = this.forcePoints[i];
                let dx: number = mouseX - fp.transform.X;
                let dy: number = mouseY - fp.transform.Y;
                let distance: number = Math.sqrt(dx * dx + dy * dy);

                if(distance<=App.View.Mod.Navigation.NavigationVisualization.FORCEPOINT_RADIUS) {
                    return {
                        point  : fp,
                        offsetX: dx,
                        offsetY: dy
                    }
                }
            }
            return {
                point: null
            }
        }
        /**
         * Checks if the distance between the mouse and
         * the forcepoint is less than its radius = hit
         * @param mouseX     X position of the cursor
         * @param mouseY     Y position of the cursor
         * @param forcePoint the point to check against
         */
        private forceDistance(mouseX: number, mouseY: number, forcePoint: ForcePoint) {
            let dx: number = mouseX - forcePoint.transform.X;
            let dy: number = mouseY - forcePoint.transform.Y;
            let distance: number = Math.sqrt(dx * dx + dy * dy);
            return distance;
        }
        /**
         * Renders the DOM element and attaches DOM events
         */
        public render(): App.View.AppView {
            super.render();

            this.ctx = this.el.getContext('2d');

            // this.on("onmousedown", this.mouseDown);
            // this.on("mouseup", this.mouseUp, this);

            this.renderCanvas();
            return this;
        }
        public postRender(): App.View.AppView {
            this.delegateEvents({
                "mousedown": (event) => {
                    this.mouseDown(event);
                },
                "mouseup": (event) => {
                    this.mouseUp(event);
                }
            });
            return this;
        }
        /**
         * Re renders any items on the canvas
         */
        private renderCanvas(): void {
            this.ctx.clearRect(0, 0, this.width, this.height);
            //Draw Grid
            this.drawShape(this.gridShape);
            //Draw Ship
            this.drawShape(this.shipShape);

            for (let i:number = 0; i < this.forcePoints.length; ++i) {
                this.drawForcePoint(this.forcePoints[i]);
            }
        }
        private drawShape(shape: App.View.Shape.CanvasShape): void {
            let transform: App.View.Shape.ICanvasShapeTransformation = shape.getTransformation();
            this.ctx.save();
            this.ctx.translate(transform.X, transform.Y);
            if (this.sizeIsDirty) {
                shape.resize(this.canvasW, this.canvasH);
            }
            shape.draw(this.ctx);
            this.ctx.restore();
        }

        private drawForcePoint(force: ForcePoint): void {

            let color: string = "";
            let radius: number = App.View.Mod.
                Navigation.NavigationVisualization
                .FORCEPOINT_RADIUS;

            this.ctx.beginPath();
            this.ctx.arc(force.transform.X, force.transform.Y,radius, 0, Math.PI * 2, true);


            if (force.forceType == ForcePointType.ACCELERATION) {
                color = "#e61d5f";
            } else if (force.forceType == ForcePointType.VELOCITY) {
                color = "#1ed36f";
            }

            this.ctx.closePath();
            this.ctx.fillStyle = color;
            this.ctx.fill();
            this.ctx.strokeStyle = "#1C1C1E";
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        }
    }
}