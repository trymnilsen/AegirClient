module App.View.Editor.Rendering {

    export class RenderingView extends App.AppView {

        private renderingInstance: App.Rendering.RenderInstance;

        constructor() {
            super({});
            this.renderingInstance = new App.Rendering.RenderInstance(this.$el);
            this.renderingInstance.init();
        }
        public dispose(): void {
            this.$el.empty();
            this.renderingInstance.isRunning = false;
        }
        public postRender(): App.AppView {
            this.renderingInstance.attach();
            this.renderingInstance.animate();
            return this;
        }
    }

}