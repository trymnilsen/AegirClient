/// <reference path="../PagePanel.ts" />
/// <reference path="TitlePanel.html.ts" />

module App {
    export module Panel {
        export class TitlePanel extends App.Panel.PagePanel {

            constructor(PanelID: string,title: string, options: App.View.IAppViewOptions) {
                super(PanelID, options);
                //Set the name in our context, this way we can automate
                //the process of updating it if the name is later changed
                this.context.setData("Title", title, false);
                this.setTemplate(App.Template.TitlePanel.html);
                //Add class : TODO find a cleaner way to do this
                this.$el.addClass("pad-all");
            }
        }
    }
}
