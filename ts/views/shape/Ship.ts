/// <reference path="CanvasShape.ts" />

module App.View.Shape {
    export class Ship extends App.View.Shape.CanvasShape {
        /**
         * A number from 0-1 indicating the amout of space 
         * the bow occupies of our total height
         */
        public static BOW_SIZE: number = 0.2;
        /**
         * Width of the ship graphics
         */
        public width: number;
        /**
         * Height of the ship graphics
         */
        public height: number;

        public bowPosition: number;

        public sternPosition: number;
        constructor(width: number, height: number) {
            super();
            this.height = height;
            this.width = width;

            this.bowPosition = this.height * App.View.Shape.Ship.BOW_SIZE;
            this.sternPosition = this.height * 0.9;
        }
        public draw(ctx: CanvasRenderingContext2D) {

            let bowEnd: number = this.height * App.View.Shape.Ship.BOW_SIZE;

            ctx.strokeStyle = "#1C1C1E";
            ctx.beginPath();
            //Bow
            ctx.moveTo(this.width/2, 0);
            //Bow to port
            ctx.lineTo(0, bowEnd);
            //Port to stern
            ctx.lineTo(0, this.height);
            //Stern port to stern starboard
            ctx.lineTo(this.width, this.height);
            //stern starboard to starboard
            ctx.lineTo(this.width, bowEnd);
            //Starboard to bow
            ctx.lineTo(this.width/2, 0);
            ctx.lineWidth = 4;
            ctx.stroke();
        }
    }
}