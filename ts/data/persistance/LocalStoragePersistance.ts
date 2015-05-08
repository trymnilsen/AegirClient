/// <reference path="../../typings/backbone.d.ts" />
/// <reference path="IPersistanceProvider.ts" />

module App {
    export module Data {
        export module Persistance {
            export class LocalStoragePersistance implements App.Data.Persistance.IPersistanceProvider {
                public persist(model: Backbone.Model): void {
                    console.log("[LOCALSTORAGEPERSIST:persist]Saving Model", model);
                }
            }
        }
    }
}