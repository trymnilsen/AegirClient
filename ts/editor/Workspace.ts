/// <reference path="../data/model/project/ProjectCollection.ts" />

module App.Editor {
    export class Workspace {
        private openProjects: App.Data.Model.Project.ProjectCollection;

        public Workspace(){
            this.openProjects = new App.Data.Model.Project.ProjectCollection();
        }
        public get OpenProjects(): App.Data.Model.Project.ProjectCollection {
            return this.openProjects;
        }
    }
}