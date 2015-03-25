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

        constructor(PageOptions: App.AppPageOptions) {
        	super({});
        }

    }
}
