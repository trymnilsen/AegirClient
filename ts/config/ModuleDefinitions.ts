/// <reference path="../module/PageRender.ts" />
/// <reference path="../application/Module.ts" />

module App {

	export var modDefinitions: {[id:string]: App.Module} = {
		"PageRender" : new App.Modules.PageRender()
	};
}