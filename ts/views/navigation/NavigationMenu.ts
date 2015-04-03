/// <reference path="../AppView.ts" />

module App {
	export module View {
		/**
		 * Responsible for rendering and handling dom events
		 * of the navigation menu
		 */
		export class NavigationMenu extends App.AppView {

			constructor(argument: any) {
				this.appendOptions = {AttachPointSelector: "#siteContainer"};
				this.setTemplate(App.Template.NavigationMenu.html);
				super({});
			}
		}
	}
}