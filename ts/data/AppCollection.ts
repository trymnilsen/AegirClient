/// <reference path="../typings/backbone.d.ts" />
/// <reference path="IAppCollectionOptions.ts" />
/// <reference path="persistance/PersistanceProvider.ts" />
/// <reference path="../config/Config.ts" />

module App.Data {
    export class AppCollection<TModel extends Backbone.Model> extends Backbone.Collection<TModel> {

        constructor() {
            super();
            this.url = function() {
                return App.config["HTTP"]["ApiRootUrl"];
            }
        }
    }
}