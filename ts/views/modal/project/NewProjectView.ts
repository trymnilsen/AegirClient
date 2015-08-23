///<reference path="../../AppView.ts" />
/// <reference path="NewProjectView.html.ts" />
//

module App.View.Project {

    export class NewProjectView extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super({backboneOptions : {
                className: "toolbar"
            }});

            this.setTemplate(App.Template.NewProjectView.html);

        }

    }
}