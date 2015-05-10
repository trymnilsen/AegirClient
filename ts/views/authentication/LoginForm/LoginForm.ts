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
                /**
                 * Overidden context with specialized type, TODO: find a better
                 * way as this is only for autocomplete purposes
                 */
                protected context: App.Context.AuthenticationContext = null;

                constructor(authContext: App.Context.AuthenticationContext) {
                    //Init parent
                    super({
                        backboneOptions: {
                            className: 'login-form-container'
                        }
                    });
                    //Set up append options
                    this.appendOptions = {AttachPointSelector: "#navContainer"};
                    this.setTemplate(App.Template.LoginForm.html);

                    //Lets attach some events
                    this.events = <any>{
                        "click input[type='button']": "beginAuth"
                    };
                    this.context = authContext;
                }
                public render(): App.View.Authentication.LoginForm {
                    super.render();
                    //Focus first field
                    $("input[type='text']:first-of-type", this.$el).focus();
                    return this;
                }
                public beginAuth():void {
                    console.info("[LOGINFORM:auth] Starting Authentication");
                    this.disableLoginButton();
                    this.context.authenticateUser(this.getUsername(),
                                                  this.getPassword());
                }
                private getUsername():string {
                    return $("input[type='text']", this.$el).prop("value");
                }
                private getPassword():string {
                    return $("input[type='password']", this.$el).prop("value");
                }
                private disableLoginButton():void {
                    var button: JQuery = $("input[type='button']", this.$el);
                    button.addClass("authentication-await");
                    button.prop("value","Loggin In ...");
                    $("input", this.$el).prop('disabled', "true");
                    //disable all input
                }
            }
        }
    }
}