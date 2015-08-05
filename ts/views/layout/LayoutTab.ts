/// <reference path="../AppView.ts" />
/// <reference path="LayoutTab.html.ts" />
module App.View.Layout {

    export class LayoutTab {
        /**
         * The view contained in this tab
         */
        private view: App.View.AppView;
        /**
         * Title used for this tab
         * @type {string}
         */
        public Title: string;
        /**
         * Creates a new instance of a layouttab 
         * for use with the {App.View.Layout.LayoutTabContainer}
         */
        constructor(view: App.View.AppView) {
            this.view = view;
        }
    }
}