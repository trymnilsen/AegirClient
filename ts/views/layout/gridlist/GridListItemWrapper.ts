///<reference path="../../AppView.ts" />

module App.View.Layout.Grid {

    export class GridListItemWrapper extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor(content: App.View.AppView, columnsSize: number) {
            //Init parent
            super({backboneOptions : {
                className: "layout-grid-list-item" + "col-md-"+columnsSize
            }});
        }
    }
}