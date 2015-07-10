module App {

    export var config: {[id:string]: any} = {
        "UI"      : {
            "layoutContainer" : ".app-container"
        },
        "Modules" : {
            "PageRender" : {
                "Pages"   : [
                    {
                        "id"        : "PG_HOME",
                        "name"      : "Home",
                        "routeName" : "home",
                        "panels"    : ["PL_NEWSPANEL"],
                        "icon"      : "cube"
                    },
                    {
                        "id"        : "PG_LOCATION",
                        "name"      : "Location",
                        "routeName" : "location",
                        "panels"    : ["PL_NEWSPANEL"],
                        "icon"      : "history"
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
            "StartupState" : "AppReady",
            "States": {
                "AppReady": {
                    "ContainerClasses" : ["container"],
                    "Events": ["AuthSuccess", "AppBoot"],
                    "Modules": ["PageRender", "Navigation"]
                }
            }
        }
    }
}