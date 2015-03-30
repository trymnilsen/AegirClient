/// <reference path="../typings/backbone.d.ts" />
module App{
    export class AppView extends Backbone.View
    {
        //Disposable

        private childViews: Array<AppView> = [];
        public template: (data: any)=> string;

        //Render
        attachNodeSelector: string;
        constructor(options: Backbone.ViewOptions){
            super(options);
        }

    }
}