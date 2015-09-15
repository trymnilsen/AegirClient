///<reference path="../../AppView.ts" />

module App.View.Startup {

    export class StartupRecentProjects extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super({backboneOptions : {
                className: "startup-recent-projects"
            }});

        }
    }
}