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
                //Get all pages
                var pages = App.config['Modules']['PageRender']['Pages'];
                var buttons: Array<App.View.Navigation.NavigationButton> = [];
                for (var i = 0; i < pages.length; ++i) {
                    //Generate buttons
                    var buttonId      : string = <string>pages[i]['id'];
                    var buttonTitle   : string = <string>pages[i]['name'];
                    var buttonIcon    : string = <string>pages[i]['icon'];
                    var button: App.View.Navigation.NavigationButton = new App.View.Navigation.NavigationButton(buttonId,buttonTitle,buttonIcon);
                    buttons.push(button);
                }
                this.navBarView = new App.View.Navigation.NavigationContainer(buttons);
                this.navBarView.render();
                //Append it using its attachnode
                App.AppView.resolveViewAppendPoint(this.navBarView)
                                        .append(this.navBarView.$el);
            }
		}
	}
}