/// <reference path="../data/model/project/ProjectCollection.ts" />
/// <reference path="../data/model/project/Project.ts" />
/// <reference path="../messenger/AppMessenger.ts" />
/// <reference path="../messenger/Message.ts" />
/// <reference path="../typings/backbone-eventable.d.ts" />
/// <reference path="../config/Constants.ts" />


module App.Editor {
    export class Workspace {

        private openProjects: App.Data.Model.Project.ProjectCollection;
        private currentProject: App.Data.Model.Project.Project;
        private messenger: App.Messaging.AppMessenger;

        public constructor(messenger: App.Messaging.AppMessenger){
            this.openProjects = new App.Data.Model.Project.ProjectCollection();
            this.messenger = messenger;
            this.messenger.on(App.constants['MESSAGES']['ROUTER']['ROUTETOPROJECT'],
            	(projectId) => {
					this.changeProjectById(projectId);
	            }
            );
        }
        public get OpenProjects(): App.Data.Model.Project.ProjectCollection {
            return this.openProjects;
        }
        private changeProjectById(projectId: App.Messaging.Message) {
            console.log("Change to project Id: " + projectId.getData());
        	//Create a project with and get with this id
			let project = new App.Data.Model.Project.Project({id: projectId.getData()});
            this.ChangeProject(project);

        }
        private ChangeProject(project: App.Data.Model.Project.Project) {
            //Add Project to open projects
            this.openProjects.add(project);
            //Set loading in statusbar
            this.messenger.SendMessage(new App.Messaging.Message(
                App.constants['MESSAGES']['STATUSBAR']['QUEUE'], "Loading Project"));
            //dispose/unsubscribe from current project notifications
            if(!!this.currentProject)
            {
                //TO BE IMPLEMENTED
            }
            //fetch project
            //subscribe to notifications
            //TO be implemented
            project.fetch({
                success: _.bind(this.fetchProjectSuccess, this),
                error: _.bind(this.fetchProjectError, this)
            });
        }
        private fetchProjectError(project: App.Data.Model.Project.Project, response: JQueryXHR): void {
            if(response.status === 404) {
                toastr.warning("Project with id: " + project.Id + " does not exist");
            } else {
                toastr.error("A server side error occured loading the project");
            }
        }
        private fetchProjectSuccess(project: App.Data.Model.Project.Project, response: JQueryXHR): void {
            toastr.success("Loaded " + project.ProjectName);
            if(project.IsSimulating) {
                toastr.info("This Project is currently outputting live data", "Here be dragons");
            }
        }

    }
}