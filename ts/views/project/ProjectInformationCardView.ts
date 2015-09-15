///<reference path="../AppView.ts" />
/// <reference path="ProjectInformationCardView.html.ts" />
/// <reference path="../../data/model/project/Project.ts" />


module App.View.Project {

    export class ProjectInformationCardView extends App.View.AppView {

        private project: App.Data.Model.Project.Project;
        /**
         * Instantiates a new instance of the menu bar
         */
        constructor(project: App.Data.Model.Project.Project) {
            //Init parent
            super({backboneOptions : {
                className: "project-information-card"
            }});
            this.project = project;
            this.setTemplate(App.Template.ProjectInformationCardView.html);
            this.context.resetData(project.attributes);
            this.events = <any> {
                "click .project-link a" : this.project
            };
        }
        public static GetCardsForProjects(projects: Array<App.Data.Model.Project.Project>)
            : Array<ProjectInformationCardView> {
            let views: Array<ProjectInformationCardView> = [];

            for (let i:number = 0; i < projects.length; ++i) {
                views.push(new ProjectInformationCardView(projects[i]));
            }
            return views;
        }
        private openProject(event: JQueryEventObject): void {
            event.preventDefault();

            //Trigger on Messenger..
            //Need new Messenger "DomEVENT" message type
            //E.G OpenProjectLinkClicks should be listened for in create project modal
            //yet we are only interested in links pressed from the this view hmm 
        }
    }
}