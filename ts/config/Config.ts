module App {

    export var config: {[id:string]: any} = {
        "Messaging" : {
            "DebugDumpAllMessages" : true
        },
        "UI"      : {
            "layoutContainer" : ".app-container"
        },
        "Modules" : {
            "PageRender" : {
                "Pages"   : [
                    {
                        "id"        : "PG_SIM",
                        "name"      : "Show Simulation",
                        "routeName" : "Simulate",
                        "fullView"  : "FW_EDITOR",
                        "icon"      : "cube"
                    },
                    {
                        "id"        : "PG_REPLAY",
                        "name"      : "Replay",
                        "routeName" : "replay",
                        "panels"    : ["PL_NEWSPANEL"],
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
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
                                       "PL_NEWSPANEL",
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