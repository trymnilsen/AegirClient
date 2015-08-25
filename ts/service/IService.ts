/// <reference path="../typings/backbone.d.ts" />

module App.Service {

    export interface IService<TModel extends Backbone.Model> {
        create(...args: any []): TModel;
        findById(id: any): TModel;
    }
}