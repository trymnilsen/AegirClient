/// <reference path="../AppView.ts" />
/// <reference path="NavigationButton.html.ts" />

module App.View.Navigation {
    /**
     * Responsible for rendering and handling dom events
     * of the navigation menu
     */
    export class NavigationButton extends App.AppView {

        /**
         * A unique id for this button
         */
        public buttonId: string;
        /**
         * Printed name of button
         */
        public buttonTitle: string;
        /**
         * Font awesome icon to use for this button
         */
        public buttonIcon: string;

        constructor(buttonId: string, buttonTitle: string, buttonIcon: string) {
            //Init parent
            super({
                backboneOptions: {
                    className: 'navigation-button'
                }
            });
            //Set value
            this.buttonId    = buttonId;
            this.buttonTitle = buttonTitle;
            this.buttonIcon  = buttonIcon;
            //Set up append options
            this.setTemplate(App.Template.NavigationButton.html);
            //Lets attach some events
            // this.events = <any>{
            //     "click input[type='button']": "beginAuth",
            //     "keypress input[type='password'],input[type='text']": "enterPressed"
            // };
        }
        public render(): App.AppView {
            super.render();
            $('.fa',this.$el).addClass("fa-"+this.buttonIcon);
            $('.fa',this.$el).tooltip({
                    placement: "right",
                    title: this.buttonTitle,
                    trigger: "hover",
                    container: "body",
                    delay: {
                        "show": 500,
                        "hide": 100
                    }
                });
            return this;
        }
    }
}