/// <reference path="../../core/Context.ts" />
/// <reference path="../../data/model/project/Project.ts" />
/// <reference path="../../service/ProjectService.ts" />

module App.Context {

    export class NewProjectContext extends App.Core.Context {

        constructor() {
            super();
        }

        public checkProjectName(name: string): void {
            let projectService: App.Service.ProjectService = new App.Service.ProjectService();
            projectService.fetchByName(name, (project) => {
                console.log("[NewProjectContext::checkProjectName] Success", project);
                this.trigger("PROJECTLOADED", project);
            },
            ()=>{
                console.log("[NewProjectContext::checkProjectName] Not Found");
                this.trigger("PROJECTLOADED",null);
            },
            ()=> {
                console.log("[NewProjectContext::checkProjectName] Error");
            });
        }
    }
}