/// <reference path="../../AppView.ts" />
/// <reference path="../../module/screen/IScreenView.ts" />
/// <reference path="../../../data/model/project/Project.ts" />
/// <reference path="../../module/screen/ScreenTabData.ts" />


module App.View.Screen.Project {
    export class ProjectScreen extends App.View.AppView implements IScreenView {

        private project: App.Data.Model.Project.Project;
        private tabData: App.View.Screen.ScreenTabData;

        constructor(project: App.Data.Model.Project.Project){
            super({});
            this.project = project;
            this.createTabData();
            this.project.on("change:ProjectName", this.projectReset, this);
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
        public getScreenTab(): App.View.Screen.ScreenTabData {
            return this.tabData;
        }
        public initScreen(): void {

        }
        private projectReset(foo,bar,baz,faz): void {
            this.tabData.Title = this.project.ProjectName;
        }
        private createTabData(): void {
            let projectName: string = this.project.ProjectName;
            let isSimulating: boolean = this.project.IsSimulating;

            if(!projectName) {
                //We do not have a projectname yet, set "Loading" as name
                projectName = "Loading";
            }

            this.tabData = new App.View.Screen.ScreenTabData(projectName);
            this.tabData.IsSimulating = isSimulating;
        }
    }
}