/// <reference path="../../core/Module.ts" />
/// <reference path="../menubar/MenubarView.ts" />
/// <reference path="../AppView.ts" />
/// <reference path="LayoutTab.ts" />

module App.View.Layout {

    export class LayoutTabContainer extends App.View.AppView {
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
        public GetNewTab(string: name): App.View.Layout.LayoutTab {

        }
    }
}