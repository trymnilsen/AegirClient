/// <reference path="../views/panel/PagePanel.ts" />

module App {
    export var panelDefinitions: {[id:string]: App.Panel.PagePanel} = {
        "TestPanel" : new App.Panel.PagePanel("TestPanel",{})
    };
}
