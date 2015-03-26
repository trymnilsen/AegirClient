/// <reference path="panel/PagePanel.ts" />
/// <reference path="AppView.ts" />

module App {
    export module Page {
        export interface AppPageDefinitions {
            name    :string;
            panels  :Array<string>;
        }
    }
	export interface AppPageOptions {
		name: string;
		panels: Array<App.Panel.PagePanel>;
	}
    export class AppPage extends App.AppView {

        private panels : Array<App.Panel.PagePanel>;
        private name : string;
        constructor(PageOptions: App.AppPageOptions) {
            this.panels = PageOptions.panels;
            this.name = PageOptions.name;
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

        private createPanels(): void {

        }
        private updatePanelState(): void {

        }
    }
}
