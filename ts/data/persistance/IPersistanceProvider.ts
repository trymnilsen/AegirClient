/// <reference path="../../typings/backbone.d.ts" />

module App {
    export module Data {
        export module Persistance {
            export interface IPersistanceProvider {
                persist(model: Backbone.Model): void;
            }
        }
    }
}