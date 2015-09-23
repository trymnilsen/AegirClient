/// <reference path="../../module/BaseModule.ts" />
/// <reference path="../../layout/ELayoutPosition.ts" />
/// <reference path="../../../rendering/RenderInstance.ts" />


module App.View.Mod {
    export class PreviewModule extends App.View.BaseModule {
        /**
         * The rendering instance backing this preview module
         */
        private renderer: App.Rendering.RenderInstance;

         constructor(){
             super(App.View.Layout.ELayoutPosition.CENTER, "Simulation");
             this.renderer = new App.Rendering.RenderInstance(this.$el);
         }
         public appReady(): void {
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