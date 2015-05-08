/// <reference path="../module/PageRender.ts" />
/// <reference path="../module/Navigation.ts" />
/// <reference path="../module/Authentication.ts"/>
/// <reference path="../core/Module.ts" />

module App {

	export var modDefinitions: {[id:string]: App.Module} = {
		"PageRender" : new App.Modules.PageRender(),
        "Navigation" : new App.Modules.Navigation(),
        "Authentication" : new App.Modules.Authentication()
	};
}