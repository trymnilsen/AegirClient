/// <reference path="CanvasShapeTransformation.ts" />

module App.View.Shape {
    export class CanvasShape {
        /**
         * The transformation used
         * @type {App.View.Shape.ICanvasShapeTransformation}
         */
        protected transform: App.View.Shape.ICanvasShapeTransformation;
        /**
         * We need this, but the class "is" abstract
         */
        constructor() {
            this.transform = {
                X        : 0,
                Y        : 0,
                Scale    : 1
            };
        }
        public setTransformation(transformation: App.View.Shape.ICanvasShapeTransformation):void {
            this.transform = transformation;
        }
        public getTransformation(): App.View.Shape.ICanvasShapeTransformation {
            return this.transform;
        }
        public draw(ctx: CanvasRenderingContext2D):void
        {
            console.warn("You need to override me");
        }
        public resize(width: number, height:number)
        {
            //not implemented
        }
    }
}