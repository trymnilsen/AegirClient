///<reference path="../../AppView.ts" />

module App.View.Screen {

    export class ScreentTabContent extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super({backboneOptions : {
                className: "Screen-tab-item"
            }});

            //this.setTemplate(App.Template.StatusbarView.html);
        }

    }
}