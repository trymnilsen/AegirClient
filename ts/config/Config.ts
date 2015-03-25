module App {

	export var config: {[id:string]: any} = {
		"modules" : ["Navigation", "PageRender"],
		"Pages"   : [
        {
            "name"      : "Home",
            "panels"    : ["TestPanel"]
        }]
	};
}