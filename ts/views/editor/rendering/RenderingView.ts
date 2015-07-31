module App.View.Editor.Rendering {

    export class RenderingView extends App.AppView {

        private renderingInstance: App.Rendering.RenderInstance;

        constructor() {
            super({});
        }
        public postRender(): App.AppView {
            this.renderingInstance = new App.Rendering.RenderInstance(this.$el);
            this.renderingInstance.init();
            this.renderingInstance.animate();
            return this;
        }
    }

}