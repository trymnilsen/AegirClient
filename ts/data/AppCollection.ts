/// <reference path="../typings/backbone.d.ts" />
/// <reference path="IAppCollectionOptions.ts" />
/// <reference path="persistance/PersistanceProvider.ts" />
//
module App.Data {
    export class AppCollection<TModel extends Backbone.Model> extends Backbone.Collection<TModel> {

        private persistance: Array<App.Data.Persistance.PersistanceProvider<TModel>> = [];

        constructor() {
            super();
        }
        public addPersistance(persistOption: App.Data.Persistance.PersistanceProvider<TModel>) {
            this.persistance.push(persistOption);
        }
        private peristanceSingleUpdated(update: TModel): void {

        }
        private peristanceManyUpdated(updates: Array<TModel>): void {

        }
    }
}