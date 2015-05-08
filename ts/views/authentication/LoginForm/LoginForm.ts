/// <reference path="../../AppView.ts" />
/// <reference path="../../../context/AuthenticationContext.ts"/>
///
module App {
    export module View {
        export module Authentication {
            /**
             * Responsible for rendering and handling dom events
             * of the navigation menu
             */
            export class LoginForm extends App.AppView {

                constructor(authContext: App.Context.AuthenticationContext) {
                    this.appendOptions = {AttachPointSelector: "#navContainer"};
                    this.setTemplate(App.Template.LoginForm.html);
                    super({});
                }
            }
        }
    }
}