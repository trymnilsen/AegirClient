///<reference path="../../AppView.ts" />
/// <reference path="GridListItemOptions.ts" />

module App.View.Layout.Grid {

    export class GridListItemWrapper extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor(content: App.View.AppView, columnsSize: number, opts: GridListItemOptions) {
            //Init parent
            super({
                childViews: [content],
                backboneOptions : {
                    className: "layout-grid-list-item " + "col-md-"+columnsSize
            }});
            let paddingEl: JQuery = $('<div>');
            paddingEl.addClass('layout-grid-list-column-padding');
            if(!!opts.background)
            {
                paddingEl.css("background",opts.background);
            }
            paddingEl.css("padding", opts.padding || "0");
            this.$el.append(paddingEl);
            this.$el.css("padding", opts.margin || "0");
        }
    }
}