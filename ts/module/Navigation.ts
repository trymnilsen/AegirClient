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
            /**
             * Router instance this navigation uses
             * @type {App.Core.Router}
             */
            private router: App.Core.Router;
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
                    var buttonRoute   : string = <string>pages[i]['routeName'];
                    var button: App.View.Navigation.NavigationButton = new App.View.Navigation.NavigationButton(buttonId,buttonTitle,buttonIcon,buttonRoute);
                    buttons.push(button);
                }
                this.navBarView = new App.View.Navigation.NavigationContainer(buttons);
                this.navBarView.render();
                //Append it using its attachnode
                App.AppView.resolveViewAppendPoint(this.navBarView)
                                        .append(this.navBarView.$el);

                this.createRouter();
            }
            /**
             * Create the router instance
             */
            private createRouter(): void {
                //Create router instance
                this.router = new App.Core.Router();
                //Catch all
                this.router.route("*actions",
                                  "defaultRoute",
                                  _.bind(this.defaultRoute, this));
                //Store all routes
                var pages : Array<Object> = App.config["Modules"]
                                                      ["PageRender"]
                                                      ["Pages"];

                for(var i = 0; i<pages.length; i++)
                { 
                    var route       : string = pages[i]["routeName"];
                    var name        : string = pages[i]["name"];
                    this.router.route(route+"(/*params)",
                        name,_.bind(this.routeChanged, this, route));
                }

                this.router.initialize();
                Backbone.history.start();
            }
            private defaultRoute(attempedRoute: any): void
            {
                console.log("[NAVIGATION:routing]DefaultRoute",attempedRoute);
            }
            private routeChanged(pageId: string, params: string):void {
                //The params is delivered on the format /xxx/yyy/zzz,
                //I.E just the last part of the url.
                console.log(pageId,params);
                var message: App.Messaging.Message = new App.Messaging.Message(
                        App.constants["MESSAGES"]["ROUTECHANGED"],
                        {
                            page: pageId,
                            extra: params
                        }
                    );
                this.context.getMessengerInstance().SendMessage(message);

            }
		}
	}
}