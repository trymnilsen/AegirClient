/// <reference path="../core/Module.ts" />
/// <reference path="../context/AuthenticationContext.ts" />
module App.Modules {
    export class Authentication extends App.Module {

        /**
         * Login Container view handled by this module
         */
        private loginContainer: App.View.Authentication.LoginContainer;

        /**
         * Login Form handled by this module
         */
        private loginForm: App.View.Authentication.LoginForm;

        constructor() {
            super();
            //Create our own context
            this.context = new App.Context.AuthenticationContext();
        }
        appReady() {
            var app: App.Application = window['Application'];
            this.context.setMessengerInstance(app.getMessenger());

            this.buildViews();
        }
        suspend():void {
            this.loginForm.dispose();
        }
        private buildViews():void {
            //this.loginContainer = new App.View.Authentication.LoginContainer(this.context);
            this.loginForm = new App.View.Authentication.LoginForm(<App.Context.AuthenticationContext>this.context);

            //this.loginContainer.render();
            this.loginForm.render();
            var attachPoint: JQuery = App.Application.layoutElement;
            //attachPoint.append(this.loginContainer.$el);
            attachPoint.append(this.loginForm.$el);
            this.loginForm.postRender();
            //Set our nice nebula background
        }
    }
}