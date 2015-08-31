///<reference path="../AppView.ts" />
/// <reference path="ProjectInformationCardView.html.ts" />
/// <reference path="../../data/model/project/Project.ts" />


module App.View.Project {

    export class ProjectInformationCardView extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor(project: App.Data.Model.Project.Project) {
            //Init parent
            super({backboneOptions : {
                className: "project-information-card"
            }});
            this.setTemplate(App.Template.ProjectInformationCardView.html);
            this.context.resetData(project.attributes);
        }
    }
}