/// <reference path="../AppView.ts" />

module App.View.Navigation {
    /**
     * Responsible for rendering and handling dom events
     * of the navigation menu
     */
    export class NavigationContainer extends App.AppView {

        constructor(buttons: Array<App.View.Navigation.NavigationButton>) {
            //Init parent
            super({
                backboneOptions: {
                    className: 'navigation-container'
                },
                childViews: buttons
            });
            //Set up append options
            this.appendOptions = { AttachPointSelector: ".nav" };
            //this.setTemplate(App.Template.LoginForm.html);
            //Lets attach some events
            // this.events = <any>{
            //     "click input[type='button']": "beginAuth",
            //     "keypress input[type='password'],input[type='text']": "enterPressed"
            // };
        }
    }
}