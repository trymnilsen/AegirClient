///<reference path="../../AppView.ts" />
/// <reference path="ScreenTabItem.html.ts" />

module App.View.Screen {

    export class ScreenTabItem extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor(title?: string) {
            //Init parent
            super({backboneOptions : {
                className: "screen-tab-item"
            }});

            this.setTemplate(App.Template.ScreenTabItem.html);
            this.context.resetData({
                "tab_title" : !!title ? title : "No Title" 
            }, false);
        }

    }
}