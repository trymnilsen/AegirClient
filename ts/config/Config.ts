module App {

	export var config: {[id:string]: any} = {
		"Modules" : {
			"PageRender" : {
				"Pages"   : [
		        	{
		        		"id"		: "PG_HOME",
		            	"name"      : "Home",
		            	"routeName"	: "home",
		            	"panels"    : ["TestPanel"]
		        	},
		        	{
		        		"id"		: "PG_LOCATION",
		            	"name"      : "Location",
		            	"routeName"	: "location",
		            	"panels"    : ["TestPanel"]
		        	},
	        	]
			}
		},
        "Panels" : {
            "PL_NEWSPANEL" : {
                "Configstuffhere":"Todo"
            }
        }
	}
}