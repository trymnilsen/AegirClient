/// <reference path="../../typings/backbone.d.ts" />
/// <reference path="PersistanceProvider.ts" />

module App.Data.Persistance {
    export class RESTPeristance extends App.Data.Persistance.PersistanceProvider {
        public persist(model: Backbone.Model, ...arg: any[]): void {
            //For Rest peristance we already have this functionality in
            //backbone so we simply use this little wrapper
            model.sync(arg);
        }
    }
}