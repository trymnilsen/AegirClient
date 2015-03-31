module App {

	export var config: {[id:string]: any} = {
		"Modules" : {
			"PageRender" : {
				"Pages"   : [
		        	{
		            	"name"      : "Home",
		            	"routeName"	: "home",
		            	"panels"    : ["TestPanel"]
		        	},
		        	{
		            	"name"      : "Location",
		            	"routeName"	: "location",
		            	"panels"    : ["TestPanel"]
		        	}
	        	]
			}
		}
	}
}