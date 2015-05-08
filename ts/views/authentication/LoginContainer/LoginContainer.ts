/// <reference path="../AppView.ts" />

module App.View.Authentication {
    /**
     * Responsible for rendering and handling dom events
     * of the navigation menu
     */
    export class LoginContainer extends App.AppView {

        constructor(authContext: App.Context.AuthenticationContext) {
            this.appendOptions = {AttachPointSelector: "#navContainer"};
            this.setTemplate(App.Template.NavigationMenu.html);
            super({
                context :authContext
            });
        }
    }
}