/// <reference path="../typings/backbone.d.ts" />
/// <reference path="../messenger/AppMessenger.ts" />
/// <reference path="../config/Constants.ts" />
/// <reference path="../messenger/Message.ts" />

module App {
	export module Core {
		export class Router extends Backbone.Router{
			private messenger: App.Messaging.AppMessenger;
			constructor(messenger: App.Messaging.AppMessenger) {
				super();
				this.messenger = messenger;
				this.messenger.on(App.constants['MESSAGES']['ROUTER']['CHANGEROUTE'], this.onRouteMessageReceived);
				this.route("project/:projectId", "project", (projectid) => {
					this.projectRoute(projectid);
				});
			}

			private projectRoute(project: string) {
				this.messenger.SendMessage(new App.Messaging.Message(
					App.constants['MESSAGES']['ROUTER']['ROUTETOPROJECT'],project));
			}
			private onRouteMessageReceived(message: App.Messaging.Message) {
				let newRoute: string = <string>message.getData();

				this.navigate(newRoute, { trigger: true });
			}
		}
	}
}