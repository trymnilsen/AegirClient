///<reference path="../../AppView.ts" />
/// <reference path="ScreenStartupTabItem.html.ts" />
/// <reference path="ScreenTabItem.ts" />


module App.View.Screen {

    export class ScreenStartupTabItem extends ScreenTabItem {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super();
            this.setTemplate(App.Template.ScreenStartupTabItem.html);
        }
        public postRender(): ScreenStartupTabItem {
            this.$el.addClass('startup-tab');
            this.$el.attr("title", "Show Startup screen");
            return this;
        }

    }
}