/// <reference path="../typings/backbone.d.ts" />
/// <reference path="../core/Context.ts"/>
/// <reference path="../config/Constants.ts" />

module App{
    export class AppView extends Backbone.View
    {
        //Disposable
        private context: App.Core.Context = null;
        private childViews: Array<AppView> = [];
        public template: (data)=> string;

        //Render
        attachNodeSelector: string;
        constructor(options: Backbone.ViewOptions){
            //Listen for context changes
            super(options);
        }
        public dispose(domEventsOnly : boolean = false): void {
            for(var i = 0; i<this.childViews.length; i++) {
                this.childViews[i].dispose(domEventsOnly);
            }
            //Remove dom events
            this.undelegateEvents();
            if(!domEventsOnly) {
                this.stopListenForContext();
            }
        }
        public setContext(newContext:App.Core.Context): void{
            //Remove events for old context
            this.context.stopListening();
            //Add new and listen
            this.context = newContext;
            this.listenForContextChanges();
        }
        public render(): App.AppView {
            //Clear previous content
            this.dispose(true);
            //get context
            var data = this.context.getAllData();
            if(!data) {
                console.warn("Data for view rerender was invalid, was:",data);
            }
            return this;
        }
        protected appendView(childView: AppView): void {
            this.childViews.push(childView);
            $(childView.attachNodeSelector,this.$el).append(childView.$el);
        }
        protected setTemplate(templateString :string): void {
            this.template = _.template(templateString);
        }
        private listenForContextChanges(): void {
            if(!!this.context) {
                this.context.listenTo(this,
                    App.constants['EVENTS']['NOTIFYCONTEXTPROPERTYCHANGED'],
                    this.contextUpdated);
            }
        }
        private stopListenForContext(): void {
            if(!!this.context) {
                this.context.stopListening(this,
                    App.constants['EVENTS']['NOTIFYCONTEXTPROPERTYCHANGED']);
            }
        }
        private contextUpdated(): void {
            this.render();
        }
    }
}