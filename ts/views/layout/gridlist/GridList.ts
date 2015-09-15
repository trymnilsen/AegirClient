///<reference path="../../AppView.ts" />
/// <reference path="GridListItemWrapper.ts" />
/// <reference path="GridListItemOptions.ts" />


module App.View.Layout.Grid {

    export class GridList extends App.View.AppView {

        //Max column size set by bootstrap framework
        public static MAX_COLUMN_SIZE = 12;

        private content: Array<App.View.AppView>;
        private columnSize: number;
        private itemOpts: App.View.Layout.Grid.GridListItemOptions;
        /**
         * Instantiates a new instance of the menu bar
         */
        constructor(content: Array<App.View.AppView>, itemsPerLineRow: number,
                    opts: App.View.Layout.Grid.GridListItemOptions) {
            //Init parent
            super({backboneOptions : {
                className: "layout-grid-list"
            }});
            this.columnSize = 12 / itemsPerLineRow;
            this.content = content;
            this.itemOpts = opts;
        }
        public render(): App.View.AppView {
            let currentColumnSize: number = 0;
            let rowElement: JQuery = this.getRow();
            for (let i:number = 0; i < this.content.length; ++i) {
                //If this would cause us to go over the column size limit
                //jump to a new row
                if(currentColumnSize+this.columnSize>GridList.MAX_COLUMN_SIZE)
                {
                    this.$el.append(rowElement);
                    rowElement = this.getRow();
                    currentColumnSize = 0;
                }
                currentColumnSize += this.columnSize;
                //We have to hack our way around this a little until i fix the way
                //child views are appended
                this.content[i].appendOptions = {
                    AttachPointSelector: ".layout-grid-list-column-padding"
                };
                let view = new App.View.Layout.Grid.GridListItemWrapper(this.content[i],
                                                        this.columnSize, this.itemOpts);
                view.render();
                rowElement.append(view.$el);
            }
            this.$el.append(rowElement);
            return this;
        }

        private getRow(): JQuery {
            let row: JQuery = $('<div>');
            row.addClass("row");
            return row;
        }
    }
}