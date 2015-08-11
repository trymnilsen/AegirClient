/// <reference path="../typings/backbone.d.ts" />
/// <reference path="IAppCollectionOptions.ts" />
/// <reference path="persistance/IPersistanceProvider.ts" />
//
module App.Data {
    export class AppCollection<TModel extends Backbone.Model> extends Backbone.Collection<TModel> {

        private persistance: App.Data.Persistance.IPersistanceProvider<TModel>;

        constructor(persistance: App.Data.Persistance.IPersistanceProvider<TModel>) {
            super();
            this.persistance = persistance;
        }
        private peristanceSingleUpdated(update: TModel): void {

        }
        private peristanceManyUpdated(updates: Array<TModel>): void {

        }
    }
}l