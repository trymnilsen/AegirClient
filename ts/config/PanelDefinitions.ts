/// <reference path="../views/panel/PagePanel.ts" />
/// <reference path="../views/panel/custom_panels/news/NewsPanel.ts" />
/// <reference path="../views/panel/title_panel/TitlePanel.ts" />

module App {
    export var panelDefinitions: {[id:string]: App.Panel.PagePanel} = {
        "PL_NEWSPANEL" : new App.Panel.TitlePanel("PL_NEWSPANEL","News",{
                childViews: [new App.Panel.CustomPanels.NewsPanel({})]
            })
    };
}
