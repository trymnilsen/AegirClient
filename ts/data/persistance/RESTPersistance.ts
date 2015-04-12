/// <reference path="../../typings/backbone.d.ts" />
/// <reference path="IPersistable.ts" />

module App {
    export module Data {
        export module Persistance {
            export class RESTPeristance implements App.Data.Persistance.IPersistable {
                public persist(model: Backbone.Model, ...arg: any[]): void {
                    //For Rest peristance we already have this functionality in
                    //backbone so we simply use this little wrapper
                    model.sync(arg);
                }
            }
        }
    }
}