/// <reference path="../typings/backbone.d.ts" />
/// <reference path="IAppCollectionOptions.ts" />
/// <reference path="persistance/PersistanceProvider.ts" />
/// <reference path="../config/Config.ts" />

module App.Data {
    export class AppModel extends Backbone.Model {

        protected urlFragment: string;

        constructor(attributes?: any, options?: any) {
            super(attributes, options);
            this.urlRoot = () => {
                return App.config["HTTP"]["ApiRootUrl"]+"/"+this.urlFragment+"/";
            }
        }

    }
}