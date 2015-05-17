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
		            	"panels"    : [
                             {
                                    "type" : "TITLE_PANEL",
                                    "name" : "News",
                                    "columnsize" : "12",
                                    "opts": {
                                        "refresh":true,
                                        "dismissable":false,
                                        "dissmiss_time":"session",
                                        "padd":true,
                                    },
                                    "components" : [
                                        {
                                            "id":"PL_NEWSPANEL",
                                            "localConfig" : {

                                            }
                                        }
                                    ]
                             }
                        ]
		        	},
		        	{
		        		"id"		: "PG_LOCATION",
		            	"name"      : "Location",
		            	"routeName"	: "location",
		            	"panels"    : {}
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