///<reference path="../../AppView.ts" />
/// <reference path="../../project/ProjectInformationCardView.ts" />
/// <reference path="NewProjectCardWarning.html.ts" />
/// <reference path="../../../data/model/project/Project.ts" />


module App.View.Project {

    export class NewProjectCardWarning extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor(project: App.Data.Model.Project.Project) {
            //Init parent
            super({});
            this.setTemplate(App.Template.NewProjectCardWarning.html);

            let projectCard = new App.View.Project.ProjectInformationCardView(project);
            projectCard.appendOptions = {
                AttachPointSelector: ".bs-callout"
            };
            this.appendView(projectCard);
        }
    }
}