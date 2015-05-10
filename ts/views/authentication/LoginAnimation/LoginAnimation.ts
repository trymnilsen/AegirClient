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
            //Set container style
            $('.app-container').addClass('full-size-container');

            super({
                context :authContext
            });
        }
    }
}