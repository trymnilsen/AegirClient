///<reference path="../../AppView.ts" />
/// <reference path="ScreenTabItem.html.ts" />
/// <reference path="ScreenTabData.ts" />

module App.View.Screen {

    export class ScreenTabItem extends App.View.AppView {

        private tabData: App.View.Screen.ScreenTabData;
        /**
         * Instantiates a new instance of a screen tab item
         */
        constructor(tabData?: App.View.Screen.ScreenTabData) {
            //Init parent
            super({backboneOptions : {
                className: "screen-tab-item"
            }});

            if(!!tabData) {
                this.tabData = tabData;
                this.setTemplate(App.Template.ScreenTabItem.html);
                this.context.resetData({
                    "tab_title" : !! tabData.Title ? tabData.Title : "No Title"
                }, false);

                this.tabData.on("Change:Title",this.onTitleChange,this);
                this.tabData.on("Change:IsSimulating",this.onSimulatingChange,this);
            }
        }
        private onTitleChange(value: string) {
            this.context.setData("tab_title",value);
        }
        private onSimulatingChange(value: boolean) {

        }

    }
}