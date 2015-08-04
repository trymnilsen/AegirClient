/// <reference path="../../AppView.ts" />
/// <reference path="SearchBar.html.ts" />

module App.View.Search {

    export class SearchBar extends App.View.AppView {

        constructor() {
            //Init parent
            super({
                backboneOptions: {
                    className: 'search-bar'
                }
            });
            this.setTemplate(App.Template.SearchBar.html);
        }
    }
}