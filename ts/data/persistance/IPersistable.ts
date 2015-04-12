/// <reference path="IPersistanceProvider.ts" />

module App {
    export module Data {
        export module Persistance {
            export interface IPersistable {
                setPeristanceProvider(provider:App.Data.Persistance.IPersistanceProvider):void;
                getPersitanceProvider():App.Data.Persistance.IPersistanceProvider;
            }
        }
    }
}