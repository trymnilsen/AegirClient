///<reference path="../AppView.ts" />
/// <reference path="PlaybackView.html.ts" />


module App.View.Menu {

    export class PlaybackView extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super({backboneOptions : {
                className: "playback-view"
            }});
            this.setTemplate(App.Template.PlaybackView.html);
        }
    }
}