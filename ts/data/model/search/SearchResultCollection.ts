/// <reference path="../../../typings/backbone.d.ts" />
/// <reference path="../../AppCollection.ts" />
/// <reference path="SearchResult.ts" />

module App.Data.Model.Search {

    export class SearchResultCollection extends App.Data.AppCollection<App.Data.Model.Search.SearchResult>{
        /**
         * Contains data about a single search result
         */
        constructor() {
            //Init parent
            super();

        }
    }
}