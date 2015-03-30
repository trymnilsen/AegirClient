/// <reference path="../typings/backbone.d.ts" />
/// <reference path="../application/Context.ts"/>
module App{
    export class AppView extends Backbone.View
    {
        //Disposable
        private context: App.Context = null;
        private childViews: Array<AppView> = [];

        //Render
        attachNodeSelector: string;
        constructor(options: Backbone.ViewOptions){
            super(options);
        }

    }
}