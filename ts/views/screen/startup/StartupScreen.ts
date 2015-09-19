/// <reference path="../../module/BaseModule.ts" />
/// <reference path="../../AppView.ts" />
/// <reference path="StartupRecentProject.ts" />
/// <reference path="StartupUserLastestProjects.ts" />
/// <reference path="../../module/screen/IScreenView.ts" />
/// <reference path="../../module/screen/ScreenTabData.ts" />


module App.View.Screen.Startup {
    export class StartupScreen extends App.View.AppView implements IScreenView {

        private startupPanels: Array<App.View.AppView>;

        constructor(){
            super({});
            this.setUpPanels();
        }
        private setUpPanels(): void {
            let userProjects = new App.View.Startup.StartupUserLatestProjects();
            let recentProjects = new App.View.Startup.StartupRecentProjects();

            this.appendView(userProjects);
            this.appendView(recentProjects);
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
            return new App.View.Screen.ScreenTabData("Startup");
        }
        public initScreen(): void {

        }
    }
}