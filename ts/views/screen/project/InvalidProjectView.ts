/// <reference path="InvalidProjectView.html.ts" />
/// <reference path="../../AppView.ts" />

module App.View.Screen.Project {

    export class InvalidProjectView extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super({
                backboneOptions: {
                    className: "invalid-project-view"
                }
            });
            this.setTemplate(App.Template.InvalidProjectView.html);
        }
    }
}