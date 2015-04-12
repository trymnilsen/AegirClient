/// <reference path="../../typings/backbone.d.ts" />

module App {
    export module Data {
        export module Persistance {
            export interface IPersistable {
                persist(model: Backbone.Model): void;
            }
        }
    }
}