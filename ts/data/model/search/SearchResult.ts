/// <reference path="../../../typings/backbone.d.ts" />
/// <reference path="../../AppModel.ts" />

module App.Data.Model.Search {

    export class SearchResult extends App.Data.AppModel{
        /**
         * Contains data about a single search result
         */
        constructor() {
            //Init parent
            super({});
            this.urlFragment = "search";
        }
    }
}