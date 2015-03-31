/// <reference path="../typings/backbone.d.ts" />
/// <reference path="../core/Context.ts"/>
/// <reference path="../config/Constants.ts" />

module App{
    export class AppView extends Backbone.View
    {
        //Disposable
        private context: App.Core.Context = null;
        private childViews: Array<AppView> = [];

        //Render
        attachNodeSelector: string;
        constructor(options: Backbone.ViewOptions){
            //Listen for context changes
            super(options);
        }
        public SetContext(newContext:App.Core.Context): void{
            //Remove events for old context
            this.context.stopListening();
            //Add new and listen
            this.context = newContext;
            this.listenForContextChanges();
        }
        private listenForContextChanges(): void {
            if(!!this.context)
            {
                this.context.listenTo(this,
                    App.constants['EVENTS']['NOTIFYCONTEXTPROPERTYCHANGED'],
                    this.contextUpdated);
            }
        }
        private contextUpdated(): void {

        }
    }
}