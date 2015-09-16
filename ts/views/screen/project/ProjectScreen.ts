/// <reference path="../../AppView.ts" />
/// <reference path="../../module/screen/IScreenView.ts" />
/// <reference path="../../../data/model/project/Project.ts" />


module App.View.Screen.Project {
    export class ProjectScreen extends App.View.AppView implements IScreenView {

        private project: App.Data.Model.Project.Project;

        constructor(project: App.Data.Model.Project.Project){
            super({});
            this.project = project;
        }

        public getView(): App.View.AppView {
            return this;
        }
        public suspend(): void {

        }
        public resume(): void {

        }
        public needsInit(): boolean {
            return false;
        }
        public getScreenTitle(): string {
            return "Project Loading";
        }
        public initScreen(): void {

        }
    }
}