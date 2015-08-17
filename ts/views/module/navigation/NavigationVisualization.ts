///<reference path="../../AppView.ts" />

module App.View.Mod.Navigation {

    export class NavigationVisualization extends App.View.AppView {

        private ctx: CanvasRenderingContext2D;

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super({backboneOptions : {
                className: "nav-viz-canvas",
                tagName: "canvas",
                attributes: {
                    width: "250px",
                    height: "350px"
                }
            }});

            this.ctx = this.el.getContext('2d');

            this.on("mousedown", this.mouseDown, this);
            this.on("mouseup", this.mouseUp, this);
        }
        private mouseDown(event): void {
            console.log(event);
        }
        private mouseUp(event): void {
            console.log(event);
        }
        private drawShip(): void {

        }
        private drawGrid(): void {
            for (var x = 0; x <= 250; x += 40) {
                this.ctx.moveTo(0.5 + x, 0);
                this.ctx.lineTo(0.5 + x, 350);
            }


            for (var x = 0; x <= 350; x += 40) {
                this.ctx.moveTo(0, 0.5 + x );
                this.ctx.lineTo(250, 0.5 + x);
            }

            this.ctx.strokeStyle = "black";
            this.ctx.stroke();
        }

    }
}