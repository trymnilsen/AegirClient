///<reference path="../../AppView.ts" />

module App.View.Mod.Navigation {

    export class NavigationVisualization extends App.View.AppView {

        private ctx: CanvasRenderingContext2D;

        private width: number;
        private height: number;
        /**
         * Instantiates a new instance of the menu bar
         */
        constructor(width: number, height: number) {
            //Init parent
            super({backboneOptions : {
                className: "nav-viz-canvas",
                tagName: "canvas",
                attributes: {
                    width: width,
                    height: height
                }
            }});

            this.width = width;
            this.height = height;

            this.on("mousedown", this.mouseDown, this);
            this.on("onmousedown", this.mouseDown, this);
            this.on("mouseup", this.mouseUp, this);

        }
        private resize(width: number, height:number) {

        }
        private mouseDown(event): void {
            console.log(event);
        }
        private mouseUp(event): void {
            console.log(event);
        }
        private drawShip(): void {

        }
        public render(): App.View.AppView {
            super.render();

            this.ctx = this.el.getContext('2d');
            this.drawGrid();
            return this;
        }
        private drawGrid(): void {
            let ctx = this.ctx;

            //ctx.strokeStyle = "red";
            ctx.strokeStyle = "#303030";
            ctx.beginPath();
            for (let x = 0; x <= this.width; x += 25) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, this.height);
            }
            ctx.lineWidth = 4;
            ctx.stroke();

            ctx.beginPath();
            for (let y = 0; y <= this.height; y += 25) {
                ctx.moveTo(0, y);
                ctx.lineTo(this.width, y);
            }
            ctx.lineWidth = 4;
            ctx.stroke();

            //this.ctx.strokeRect(10, 10, 100, 100);
        }

    }
}