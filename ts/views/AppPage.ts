/// <reference path="panel/PagePanel.ts" />
/// <reference path="AppView.ts" />
/// <reference path="../typings/jquery.d.ts" />


module App.Page {

    export class AppPage extends App.AppView {

        public PageName: string;
        public PageId: string;
        public PageIcon: string;
        public PageRoute: string;
        public PageType: App.Page.EPageType;

        constructor(viewType: App.Page.EPageType, viewOptions: App.View.IAppViewOptions) {
            super(viewOptions || {});
            this.PageType = viewType;
        }
        public setPageData(pageData: App.Page.AppPageDefinitions)
        {
            this.PageName = pageData.name;
            this.PageId = pageData.id;
            this.PageIcon = pageData.icon;
            this.PageRoute = pageData.routeName;

            //Add pageid to class
            this.$el.addClass("page-"+this.PageId);
        }
        /**
         * Suspend the appPage includes but not limited to
         * - Unbind events
         * - Run suspend method on children panes
         *
         * Basically we want to make sure this page does not execute in any way
         * if we are not currently looking at it
         */
        suspend(): void {

        }
        /**
         * Resume the Page
         * Includes
         * - Checking that our state is correct
         * - If not, rebuilding based on state
         * - rebinding events
         */
        resume(): void {

        }
    }
}
