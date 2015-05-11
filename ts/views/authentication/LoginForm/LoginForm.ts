/// <reference path="../../AppView.ts" />
/// <reference path="../../../context/AuthenticationContext.ts"/>
/// <reference path="../../../typings/bootstrap.d.ts"/>
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
                    this.appendOptions = { AttachPointSelector: "#navContainer" };
                    this.setTemplate(App.Template.LoginForm.html);

                    //Lets attach some events
                    this.events = <any>{
                        "click input[type='button']": "beginAuth",
                        "keypress input[type='password'],input[type='text']": "enterPressed"
                    };
                    this.context = authContext;
                }

                public beginAuth(clickEvent?): boolean {
                    //if (!!clickEvent) { clickEvent.stopPropagation();}
                    if (this.getPassword() == "" || this.getUsername() == "") {
                        console.log('info empty, showing popup');
                        this.showPopup();
                        return false; //Swallow event
                    } else {
                        console.info("[LOGINFORM:auth] Starting Authentication");
                        this.disableLoginButton();
                        this.context.authenticateUser(this.getUsername(),
                            this.getPassword());
                    }
                    return true;
                }
                public postRender(): App.AppView {
                    super.postRender();
                    $("input[type='text']", this.$el).focus();
                    return this;
                }
                private enterPressed(event): void {
                    if (event.keyCode == 13) {
                        if (event.currentTarget.value != "") {
                            switch (event.currentTarget.type) {
                                case "text":
                                    $("input[type='password']", this.$el).focus();
                                    break;
                                case "password":
                                    this.beginAuth();
                                    break;
                            }
                        }
                    }
                }
                private getUsername(): string {
                    return $("input[type='text']", this.$el).prop("value");
                }
                private getPassword(): string {
                    return $("input[type='password']", this.$el).prop("value");
                }
                private showPopup(): void {
                    $("input[type='button']",this.$el).tooltip({
                        placement: 'top',
                        title: 'Enter both username and password',
                        trigger: 'manual'
                    });

                    $("input[type='button']", this.$el).tooltip('show');
                    //Make it go away
                    $('body').one("click", function() {
                        console.log('Hiding tooltip');
                        $("input[type='button']", this.$el).tooltip('hide');
                    });

                }
                private disableLoginButton(): void {
                    var button: JQuery = $("input[type='button']", this.$el);
                    button.addClass("authentication-await");
                    button.prop("value", "Loggin In ...");
                    $("input", this.$el).prop('disabled', "true");
                    //disable all input
                }
            }
        }
    }
}