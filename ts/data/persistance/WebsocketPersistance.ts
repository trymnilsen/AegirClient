/// <reference path="IPersistanceProvider.ts" />
module App.Data.Persistance {
    export class WebsocketPersistance<TModel extends Backbone.Model> implements App.Data.Persistance.IPersistanceProvider<TModel> {

        public persist(): void {

        }
    }
}
