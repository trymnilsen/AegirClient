module App {

	export var config: {[id:string]: any} = {
		"Modules" : {
			"PageRender" : {
				"Pages"   : [
		        	{
		        		"id"		: "PGHOME",
		            	"name"      : "Home",
		            	"routeName"	: "home",
		            	"panels"    : ["TestPanel"]
		        	},
		        	{
		        		"id"		: "PGLOCATION",
		            	"name"      : "Location",
		            	"routeName"	: "location",
		            	"panels"    : ["TestPanel"]
		        	}
	        	]
			}
		}
	}
}