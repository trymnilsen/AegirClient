/// <reference path="../../typings/backbone.d.ts" />
/// <reference path="PersistanceProvider.ts" />

module App.Data.Persistance {
    export class RESTPeristance<TModel extends Backbone.Model> extends App.Data.Persistance.PersistanceProvider<TModel> {
        public persist(model: TModel, ...arg: any[]): void {
            //For Rest peristance we already have this functionality in
            //backbone so we simply use this little wrapper
            model.sync(arg);
        }
    }
}