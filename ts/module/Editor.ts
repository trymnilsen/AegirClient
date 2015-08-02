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
            this.context.getMessengerInstance().subscribe(
                App.constants["MESSAGES"]["FULLVIEWDISPOSE"],
                _.bind(this.onFullViewReady,this)
            );
        }
        private onFullViewReady(message: App.Messaging.Message) {
            if(this.isMessageEditorFullView(message))
            {
                this.renderUI();
            }
        }
        private onFullViewDispose(message: App.Messaging.Message) {
            if(this.isMessageEditorFullView(message))
            {
                this.disposeRenderUI();
            }
        }
        private isMessageEditorFullView(message: App.Messaging.Message) {
            let fullViewPage : App.Page.FullViewPage = <App.Page.FullViewPage>message.getData();
            let pageName : string = fullViewPage.FullViewId;

            return pageName === "FW_EDITOR";
        }
        private disposeRenderUI(): void {
            this.UIRenderView.dispose();
        }
        private renderUI(): void {
            this.UIRenderView.render();

            $('.full-view-page').append(this.UIRenderView.$el);
            this.UIRenderView.postRender();
        }
    }
}