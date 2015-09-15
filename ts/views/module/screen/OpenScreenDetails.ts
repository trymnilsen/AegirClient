/// <reference path="ScreenTabItem.ts" />
/// <reference path="ScreenTabContent.ts" />
/// <reference path="../../AppView.ts" />
/// <reference path="IScreenView.ts" />


module App.View.Screen {
    export class OpenScreenDetails {

        private tab: ScreenTabItem;
        private content: IScreenView;

        public constructor(content: IScreenView)
        {
            this.content = content;
            this.tab = new ScreenTabItem(content.getScreenTitle());
        }
        get Tab():ScreenTabItem {
            return this.tab;
        }
        get Content():IScreenView {
            return this.content;
        }
    }
}