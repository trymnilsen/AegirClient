/// <reference path="../views/panel/PagePanel.ts" />
/// <reference path="../views/panel/custom_panels/news/NewsPanel.ts" />
/// <reference path="../views/panel/title_panel/TitlePanel.ts" />

module App {
    export var startupState    : String = "AuthState";
    export var stateDefinitions: {[id:string]: Object} = {
        "AuthState" : {
            "Events"  : ["Forbidden"],
            "Modules" : ["Authentication"]
        },
        "AppReady" : {
            "Events" : ["AuthSuccess", "AppBoot"],
            "Modules" : ["PageRender", "Navigation"]
        }
    };
}
