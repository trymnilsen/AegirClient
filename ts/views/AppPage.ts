/// <reference path="panel/PagePanel.ts" />
/// <reference path="AppView.ts" />
/// <reference path="../typings/jquery.d.ts" />


module App.Page {

    export class AppPage extends App.AppView {

        constructor() {
            super({});
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
