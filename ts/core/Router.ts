/// <reference path="../typings/backbone.d.ts" />
module App {
	export module Core {
		export class Router extends Backbone.Router{
			constructor() {
				super({"routes": {}});
			}
		}
	}
}