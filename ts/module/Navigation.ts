/// <reference path="../core/Module.ts" />
/// <reference path="../views/navigation/NavigationMenu.ts"/>

module App {
	export module Modules {
		export class Navigation extends App.Module {
            /**
             * The navbar view that is rendered and providing user ability to
             * navigate the app
             */
            private navBarView: App.View.NavigationMenu = null;
			constructor() {
				super();
			}
            appReady(): void {
                // this.navBarView = new App.View.NavigationMenu({});
                // this.navBarView.render();
                // //Append it using its attachnode
                // App.AppView.resolveViewAppendPoint(this.navBarView)
                //                         .append(this.navBarView.$el);
            }
		}
	}
}