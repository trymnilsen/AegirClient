module App {

	export var config: {[id:string]: any} = {
        "UI"      : {
            "layoutContainer" : ".app-container"
        },
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
        },
        "AppStates" : {
            "StartupState" : "AuthState",
            "States": {
                "AuthState": {
                    "ContainerClasses" : ["full-size-container"],
                    "Events": ["Forbidden"],
                    "Modules": ["Authentication"]
                },
                "AppReady": {
                    "ContainerClasses" : ["container"],
                    "Events": ["AuthSuccess", "AppBoot"],
                    "Modules": ["PageRender", "Navigation"]
                }
            }
        }
	}
}