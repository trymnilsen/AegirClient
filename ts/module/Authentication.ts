/// <reference path="../core/Module.ts" />
/// <reference path="../views/authentication/LoginContainer/LoginContainer.ts"/>

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
        }
        appReady() {
            this.buildViews();
        }
        private buildViews():void {
            this.loginContainer = new App.View.Authentication.LoginContainer(this.context);
            this.loginForm = new App.View.Authentication.LoginForm(this.context);

            this.loginContainer.render();
            this.loginForm.render();

            $('.container').append(this.loginContainer.$el);
            this.loginContainer.$el.append(this.loginForm.$el);
        }
    }
}