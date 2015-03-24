module App {

	export var config: {[id:string]: any} = {
		"Modules" : ["Navigation", "PageRender"],
		"Pages"   : [
        {
            "name"      : "Home",
            "panels"    : ["TestPanel"]
        }]
	};
}