/// <reference path="../BaseModule.ts" />
/// <reference path="OpenScreenDetails.ts" />
/// <reference path="ScreenModule.html.ts" />
/// <reference path="../../../data/model/project/ProjectCollection.ts" />
/// <reference path="../../../data/model/project/Project.ts" />
/// <reference path="IScreenView.ts" />
/// <reference path="ScreenStartupTabItem.ts" />
/// <reference path="../../screen/startup/StartupScreen.ts" />


module App.View.Mod {
    export class ScreenModule extends App.View.BaseModule {

        private Screens: Array<App.View.Screen.OpenScreenDetails>  = [];
        private openProjects: App.Data.Model.Project.ProjectCollection;
        private currentScreen: App.View.Screen.OpenScreenDetails;

        private statupScreenButton: App.View.Screen.ScreenStartupTabItem;

        constructor(openProjects: App.Data.Model.Project.ProjectCollection){
            super(App.View.Layout.ELayoutPosition.CENTER, "Screens");

            this.setTemplate(App.Template.ScreenModule.html);
            this.openProjects = openProjects;

        }

        public postRender(): ScreenModule {
            //Create Startup button
            this.statupScreenButton = new App.View.Screen.ScreenStartupTabItem();
            this.statupScreenButton.render();
            this.statupScreenButton.postRender();
            $(".tabs-item", this.$el).append(this.statupScreenButton.$el);

            //Add the startup screen
            let startupScreen = new App.View.Screen.Startup.StartupScreen();
            let startupScreenDetails = new App.View.Screen.OpenScreenDetails(startupScreen);
            this.appendScreen(startupScreenDetails, true);
            return this;
        }
        private AddNewProjectToScreens(project: App.Data.Model.Project.Project): void {

        }
        private appendScreen(screen: App.View.Screen.OpenScreenDetails, setAsActive: boolean = false):void {
            //Append tab to tabs
            let tabItem: JQuery = $(".tabs-item", this.$el);
            screen.Tab.render();
            screen.Tab.postRender();
            tabItem.append(screen.Tab.$el);
            let tabContent: JQuery = $(".tabs-content", this.$el);
            screen.Content.getView().render();
            screen.Content.getView().postRender();
            tabContent.append(screen.Content.getView().$el);
            screen.Content.getView().$el.addClass("inactive-tab");
            if(setAsActive)
            {
                this.setActiveScreen(screen);
            }
        }
        private setActiveScreen(screen: App.View.Screen.OpenScreenDetails) {
            if(!!this.currentScreen)
            {
                this.currentScreen.Content.suspend();
                this.deactivateElement(this.currentScreen.Content.getView().$el);
                this.deactivateElement(this.currentScreen.Tab.$el);
            }
            this.currentScreen = screen;
            this.activateElement(this.currentScreen.Content.getView().$el);
            this.activateElement(this.currentScreen.Tab.$el);
            if(this.currentScreen.Content.needsInit())
            {
                this.currentScreen.Content.initScreen();
            }
            this.currentScreen.Content.resume();
        }
        private deactivateElement(el: JQuery): void {
            el.removeClass('active-tab');
            el.addClass('inactive-tab');
        }
        private activateElement(el: JQuery): void {
            el.removeClass('inactive-tab');
            el.addClass('active-tab');
        }
    }
}