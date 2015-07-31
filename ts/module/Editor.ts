/// <reference path="../core/Module.ts" />

module App.Modules {
    export class Editor extends App.Module {
        private UIRenderView: App.View.Editor.Rendering.RenderingView;
        constructor() {
            super();
        }
        appReady(): void {
            this.UIRenderView = new App.View.Editor.Rendering.RenderingView();

            this.context.getMessengerInstance().subscribe(
                App.constants["MESSAGES"]["FULLVIEWREADY"],
                _.bind(this.onFullViewReady,this)
            );
        }
        private onFullViewReady(message: App.Messaging.Message) {
            this.renderUI();
        }
        private renderUI(): void {
            this.UIRenderView.render();

            $('.full-view-page').append(this.UIRenderView.$el);
            this.UIRenderView.postRender();
        }
    }
}