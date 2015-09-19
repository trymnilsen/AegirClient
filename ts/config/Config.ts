module App {

    export var config: {[id:string]: any} = {
        "HTTP": {
            "ApiRootUrl" : "http://localhost:8090"
        },
        "Messaging" : {
            "DebugDumpAllMessages" : true
        },
        "UI"      : {
            "topBarContainer" : "#topbar-content",
            "layoutContainer" : "#editor-content",
            "statusbar" : "#statusbar-wrapper"
        },
        "Modules" : {
            "PageRender" : {
                "Pages"   : [
                    {
                        "id"        : "PG_HOME",
                        "name"      : "Show recents and info",
                        "routeName" : "home",
                        "panels"    : ["PL_RECENT"],
                        "icon"      : "home"
                    },
                    {
                        "id"        : "PG_SEARCH",
                        "name"      : "Show search results",
                        "routeName" : "search",
                        "panels"    : ["PL_RESULTS"],
                        "icon"      : "search"
                    },
                    {
                        "id"        : "PG_SIM",
                        "name"      : "Show Simulation",
                        "routeName" : "Simulate",
                        "fullView"  : "FW_EDITOR",
                        "icon"      : "cube"
                    },
                    {
                        "id"        : "PG_MAP",
                        "name"      : "Map",
                        "routeName" : "map",
                        "panels"    : ["PL_NEWSPANEL"],
                        "icon"      : "map-o"
                    },
                    {
                        "id"        : "PG_REPLAY",
                        "name"      : "Replay",
                        "routeName" : "replay",
                        "panels"    : ["PL_REPLAY_SHIP","PL_FILE_BROWSER","PL_FILE_BROWSER","PL_START_REPLAY"],
                        "icon"      : "history"
                    },
                    {
                        "id"        : "PG_OUTPUT",
                        "name"      : "Outputs",
                        "routeName" : "output",
                        "panels"    : ["PL_NEWSPANEL"],
                        "icon"      : "plug"
                    },
                    {
                        "id"        : "PG_VESSEL",
                        "name"      : "Vessel Configurations",
                        "routeName" : "vessel",
                        "panels"    : [
                                       "PL_NEWSPANEL"
                                       ],
                        "icon"      : "anchor"
                    },
                    {
                        "id"        : "PG_LOG",
                        "name"      : "Logging",
                        "routeName" : "log",
                        "panels"    : ["PL_NEWSPANEL"],
                        "icon"      : "terminal"
                    },
                    {
                        "id"        : "PG_STATS",
                        "name"      : "Statistics",
                        "routeName" : "stats",
                        "panels"    : ["PL_NEWSPANEL"],
                        "icon"      : "area-chart"
                    },
                    {
                        "id"        : "PG_SETTINGS",
                        "name"      : "Settings",
                        "routeName" : "settings",
                        "panels"    : ["PL_NEWSPANEL"],
                        "icon"      : "cog"
                    }
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
                    "ContainerClasses" : [],
                    "Events": ["AuthSuccess", "AppBoot"],
                    "Modules": ["Editor","PageRender", "Navigation"]
                }
            }
        }
    }
}
