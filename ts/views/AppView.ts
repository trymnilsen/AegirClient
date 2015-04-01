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
        constructor(options: Backbone.ViewOptions, context?: App.Core.Context){
            super(options);
            //Check if context is supplied
            if(!!context) {
                this.setContext(context);
            } else {
                var newContext : App.Core.Context = new App.Core.Context();
                this.setContext(newContext);
            }
        }
        public dispose(domEventsOnly : boolean = false): void {
            for(var i = 0; i<this.childViews.length; i++) {
                this.childViews[i].dispose(domEventsOnly);
            }
            //Remove dom eveants
            this.undelegateEvents();
            if(!domEventsOnly) {
                this.stopListenForContext();
            }
        }
        public setContext(newContext:App.Core.Context): void{
            //Remove events for old context
            if(!!this.context){
                this.context.stopListening();
            }
            //Add new and listen
            this.context = newContext;
            this.listenForContextChanges();
        }
        public render(): App.AppView {
            //Clear previous content
            this.dispose(true);
            //get context
            if(!!this.context) {
                var data : any = this.context.getAllData();
                //Data was not thruthy
                if(!data) {
                    console.warn("Data for view rerender was invalid, was:",data);
                }
                var renderedContent : string = this.template(data);
                this.$el.html(renderedContent);
            } else {
                console.warn("Context was invalid, was:",this.context);
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