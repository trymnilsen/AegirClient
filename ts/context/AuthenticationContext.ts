/// <reference path="../core/Context.ts" />

module App.Context {
    export class AuthenticationContext extends App.Core.Context {

        constructor() {
            super();
        }
        public authenticateUser(username: string, password: string)
        {
            setTimeout(_.bind(this.authenticationSuccess,this), 600);
        }
        private authenticationSuccess(): void {
            console.log("[AUTHENTICATIONCONTEXT:authuser] Yay, doing work");
            var authMessage: App.Messaging.Message = new App.Messaging.Message("AuthSuccess");
            this.getMessengerInstance().SendMessage(authMessage);
        }
    }
}