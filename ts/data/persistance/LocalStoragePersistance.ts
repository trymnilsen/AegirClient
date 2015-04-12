/// <reference path="../../typings/backbone.d.ts" />
/// <reference path="IPersistable.ts" />

module App {
    export module Data {
        export module Persistance {
            export class LocalStoragePersistance implements App.Data.Persistance.IPersistable {
                public persist(model: Backbone.Model): void {
                    console.log("Saving Model", model);
                }
            }
        }
    }
}