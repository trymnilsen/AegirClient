/// <reference path="../core/Module.ts" />
/// <reference path="../views/navigation/NavigationContainer.ts" />

module App {
	export module Modules {
		export class Navigation extends App.Module {
            /**
             * The navbar view that is rendered and providing user ability to
             * navigate the app
             */
            private navBarView: App.View.Navigation.NavigationContainer = null;
			constructor() {
				super();
			}
            appReady(): void {
                this.navBarView = new App.View.Navigation.NavigationContainer();
                this.navBarView.render();
                //Append it using its attachnode
                App.AppView.resolveViewAppendPoint(this.navBarView)
                                        .append(this.navBarView.$el);
            }
		}
	}
}