/// <reference path="../../AppView.ts" />
/// <reference path="../../module/screen/IScreenView.ts" />
/// <reference path="../../../data/model/project/Project.ts" />
/// <reference path="../../module/screen/ScreenTabData.ts" />
/// <reference path="InvalidProjectView.ts" />


module App.View.Screen.Project {
    export class ProjectScreen extends App.View.AppView implements IScreenView {

        private project: App.Data.Model.Project.Project;
        private tabData: App.View.Screen.ScreenTabData;
        private screenContent: App.View.AppView;
        constructor(project: App.Data.Model.Project.Project){
            super({});
            this.project = project;
            this.createTabData();
            this.project.on("error", this.projectError, this);
            this.project.on("reset", this.projectReset, this);
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
        private projectError(project: App.Data.Model.Project.Project,
                             response: JQueryXHR) {
            if(response.status === 404) {
                let errorView = new App.View.Screen.Project.InvalidProjectView();
                this.setContent(errorView);
            }
        }
        private projectReset(): void {
            this.tabData.Title = this.project.ProjectName;
        }
        private setContent(view: App.View.AppView) {
            if(!!this.screenContent)
            {
                this.screenContent.dispose();
                this.screenContent.$el.remove();
            }
            this.screenContent = view;
            this.screenContent.render();
            this.$el.append(view.$el);
            this.screenContent.postRender();
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