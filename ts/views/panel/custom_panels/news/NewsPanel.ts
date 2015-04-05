/// <reference path="NewsPanel.html.ts" />
/// <reference path="../CustomPagePanel.ts" />
/// <reference path="../../../IAppViewOptions.ts" />

module App {
    export module Panel {
        export module CustomPanels {
            export class NewsPanel extends App.Panel.CustomPagePanel {
                constructor(options: App.View.IAppViewOptions) {
                    super(options);
                    this.setTemplate(App.Template.NewsPanel.html);
                }
            }
        }
    }
}