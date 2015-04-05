module App {

	export var config: {[id:string]: any} = {
		"Modules" : {
			"PageRender" : {
				"Pages"   : [
		        	{
		        		"id"		: "PG_HOME",
		            	"name"      : "Home",
		            	"routeName"	: "home",
		            	"panels"    : ["PL_NEWSPANEL"]
		        	},
		        	{
		        		"id"		: "PG_LOCATION",
		            	"name"      : "Location",
		            	"routeName"	: "location",
		            	"panels"    : ["PL_NEWSPANEL"]
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