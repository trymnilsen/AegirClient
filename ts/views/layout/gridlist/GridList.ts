///<reference path="../../AppView.ts" />
/// <reference path="IGridListItem.ts" />


module App.View.Layout.Grid {

    export class GridList extends App.View.AppView {

        private content: Array<App.View.AppView>;
        /**
         * Instantiates a new instance of the menu bar
         */
        constructor(content: Array<App.View.AppView>, itemsPerLineRow: number) {
            //Init parent
            super({backboneOptions : {
                className: "layout-grid-list"
            }});
            this.content = content;
            this.invalidateLayout();
        }
        private invalidateLayout(): void {
            
        }
    }
}