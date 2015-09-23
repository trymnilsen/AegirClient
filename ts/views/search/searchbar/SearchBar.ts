/// <reference path="../../AppView.ts" />
/// <reference path="SearchBar.html.ts" />
/// <reference path="../../../data/model/search/SearchResultCollection.ts" />

module App.View.Search {

    export class SearchBar extends App.View.AppView {

        private searchResults: App.Data.Model.Search.SearchResultCollection;

        constructor() {
            //Init parent
            super({
                backboneOptions: {
                    className: 'search-bar'
                }
            });
            this.setTemplate(App.Template.SearchBar.html);
            this.searchResults = new App.Data.Model.Search.SearchResultCollection();
            this.searchResults.on('reset',()=> {
                this.resultsReset();
            });
        }
        public postRender(): App.View.AppView {
            let inputValue: JQuery = $('input', this.$el);
            inputValue.keyup(_.debounce(() => {
                this.doSearch();
            }, 300));
            return this;
        }
        private resultsReset(): void {
            
        }
        private doSearch(): void {
            let searchTerm: string = $('input').val();
            console.log("Search Term: ", searchTerm);
            let opts: Backbone.ModelFetchOptions = {
                reset: true,
                data: $.param({ query: searchTerm })
            };
            this.searchResults.fetch(opts);
        }
    }
}