/// <reference path="panel/PagePanel.ts" />
/// <reference path="AppView.ts" />
/// <reference path="../typings/jquery.d.ts" />


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
        /**
         * The Max width a panel can have
         * @type {number}
         */
        public static MAX_PANEL_WIDTH : number  = 12;

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
        render(): App.AppPage {
            return this;
        }
        private createPanels(): void {
            var currentPanelWidth : number = 0;
            var panelRow : JQuery = this.createNewPanelRow();
            for(var i = 0; i<this.panels.length; i++) {
                var panel : App.Panel.PagePanel = this.panels[i];
                var panelWidth : number = panel.getPanelWidth();
                if(currentPanelWidth+panelWidth>App.AppPage.MAX_PANEL_WIDTH) {
                    panelRow = this.createNewPanelRow();
                    currentPanelWidth = 0;
                } else {
                    currentPanelWidth += panelWidth;
                }
            }
        }
        private updatePanelState(): void {

        }
        private createNewPanelRow(): JQuery {
            return $('div').addClass('row');
        }
    }
}
