/// <reference path="../../../typings/backbone.d.ts" />
/// <reference path="../../AppCollection.ts" />
/// <reference path="Project.ts" />

module App.Data.Model.Project {

    export class ProjectCollection extends App.Data.AppCollection<App.Data.Model.Project.Project> {
        /**
         * Contains data about a single search result
         */
        constructor() {
            //Init parent
            super();

        }
    }
}