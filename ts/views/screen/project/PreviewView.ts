/// <reference path="../../AppView.ts" />
/// <reference path="../../../rendering/RenderInstance.ts" />


module App.View.Screen.Project {
    export class PreviewView extends App.View.AppView {
        /**
         * The rendering instance backing this preview module
         */
        private renderer: App.Rendering.RenderInstance;

         constructor(){
             super({
                 backboneOptions: {
                     className: "preview-visualizaton"
                 }
             });
             this.renderer = new App.Rendering.RenderInstance(this.$el);
         }

         public render(): App.View.AppView {
             return this;
         }
         public postRender(): App.View.AppView {
             this.renderer.init();
             this.renderer.attach();
             this.renderer.animate();
             return this;
         }
    }
}