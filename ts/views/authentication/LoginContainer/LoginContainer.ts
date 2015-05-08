/// <reference path="../../AppView.ts" />
/// <reference path="../../../context/AuthenticationContext.ts"/>
/// <refrence path="LoginContainer.html.ts"/>

module App.View.Authentication {
    /**
     * Responsible for rendering and handling dom events
     * of the navigation menu
     */
    export class LoginContainer extends App.AppView {

        constructor(authContext: App.Context.AuthenticationContext) {
            this.appendOptions = {AttachPointSelector: "#navContainer"};
            this.setTemplate(App.Template.LoginContainer.html);
            super({
                context :authContext
            });
        }
    }
}