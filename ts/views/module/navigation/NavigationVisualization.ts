///<reference path="../../AppView.ts" />

module App.View.Mod.Navigation {

    export class PlaybackView extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super({backboneOptions : {
                className: "nav-viz-canvas",
                tagName: "canvas"
            }});
        }
    }
}