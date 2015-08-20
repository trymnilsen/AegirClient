/// <reference path="CanvasShape.ts" />

module App.View.Shape {
    export class Grid extends App.View.Shape.CanvasShape {
        private gridSize: number;

        private totalGridWidth: number;
        private totalGridHeight: number;
        constructor(width: number, height: number, gridSize: number) {
            super();
            this.totalGridWidth = width;
            this.totalGridHeight = height;
            this.gridSize = gridSize;

            if(gridSize%width !== 0 || gridSize%height !== 0)
            {
                console.log("TotalGridWidth or height not perfectly devidable by gridsize, you might get a ugly grid");
            }
        }
        public draw(ctx: CanvasRenderingContext2D) {

            //ctx.strokeStyle = "red";
            ctx.strokeStyle = "#303030";
            ctx.beginPath();
            for (let x = 0; x <= this.totalGridWidth; x += this.gridSize) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, this.totalGridHeight);
            }
            ctx.lineWidth = 4;
            ctx.stroke();

            ctx.beginPath();
            for (let y = 0; y <= this.totalGridHeight; y += this.gridSize) {
                ctx.moveTo(0, y);
                ctx.lineTo(this.totalGridWidth, y);
            }
            ctx.lineWidth = 4;
            ctx.stroke();
        }
        public resize(width: number, height:number)
        {
            this.totalGridWidth = width;
            this.totalGridHeight = height;
        }
    }
}