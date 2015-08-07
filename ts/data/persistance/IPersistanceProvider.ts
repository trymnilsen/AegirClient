/// <reference path="../../typings/backbone.d.ts" />

module App {
    export module Data {
        export module Persistance {
            export interface IPersistanceProvider<TModel extends Backbone.Model> {
                persist(): void;
            }
        }
    }
}