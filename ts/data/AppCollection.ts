/// <reference path="../typings/backbone.d.ts" />
/// <reference path="IAppCollectionOptions.ts" />
/// <reference path="persistance/IPersistanceProvider.ts" />

module App {
    export module Data {
        export class AppCollection<TModel extends Backbone.Model> extends Backbone.Collection<TModel> {

            private options : App.IAppCollectionOptions;
            private persistance: App.Data.Persistance.IPersistanceProvider;

            constructor(options: App.IAppCollectionOptions) {
                super();
                this.options = options;

            }
            private bootstrapData():void {
                if( !!this.options.boostrapId
                    || this.options.boostrapId!=="") {

                }
            }
        }
    }
}