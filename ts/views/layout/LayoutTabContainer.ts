/// <reference path="../../views/Module.ts" />
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

        }
        /**
         * Creates and returns a new tab added to this container with the given name
         * @param          title of this tab
         * @return         newly created tab
         */
        public GetNewTab(name: string): App.View.Layout.LayoutTab {
            let newTab = new App.View.Layout.LayoutTab();
            this.tabs.push(newTab);
            this.appendView(newTab);
            newTab.Title = name;

            return newTab;
        }
    }
}