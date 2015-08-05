/// <reference path="../../views/BaseModule.ts" />
/// <reference path="../menubar/MenubarView.ts" />
/// <reference path="../AppView.ts" />
/// <reference path="LayoutTab.ts" />

module App.View.Layout {

    export class LayoutTabContainer extends App.View.AppView {
        /**
         * The tabs used in thos tabcontainer
         */
        private tabs: Array<App.View.Layout.LayoutTab> = [];
        /**
         * Instantiates a new instance of layout tab container
         */
        constructor() {
            //Init parent
            super({});
            this.events = {
                "click .layout-tab-container": (event) => { this.tabPressed(event);}
            }
        }
        /**
         * Creates and returns a new tab added to this container with the given name
         * @param          title of this tab
         * @return         newly created tab
         */
        public getNewTab(name: string): App.View.Layout.LayoutTab {
            let newTab = new App.View.Layout.LayoutTab();
            this.tabs.push(newTab);
            newTab.Title = name;

            return newTab;
        }
        public tabPressed(event) {

        }
    }
}