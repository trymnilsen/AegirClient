///<reference path="../AppView.ts" />
/// <reference path="StatusbarView.html.ts" />

module App.View.Status {

    export class StatusbarView extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super({backboneOptions : {
                className: "statusbar"
            }});

            this.setTemplate(App.Template.StatusbarView.html);
        }

    }
}