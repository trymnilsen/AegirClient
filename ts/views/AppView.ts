/// <reference path="../typings/backbone.d.ts" />
/// <reference path="../typings/jquery.d.ts" />
/// <reference path="../core/Context.ts"/>
/// <reference path="../config/Constants.ts" />


module App{
    export module View {
        /**
         * Defines an interface for describing how to attach a child view to
         * another view. Uses the attach selector (css selector used by jquery)
         * or the direct jquery element to know where to
         * append the given childview.
         *
         *     Note: If both attachSelector
         *     and attachSelector are given, jqueryObject will be used
         *
         */
        export interface AppendChildViewOptions {
            /**
             * The view that we would like to append
             */
            childView : App.AppView;
            /**
             * An css selector to use by jquery to find the node to attach to
             */
            attachSelector ?: string;
            /**
             * jquery object to use as an attach point
             */
            jqueryObject ?: JQuery;
        }
    }
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
        /**
         * Append a view to this view as a child
         * This gives us the befit of properly disposing the views (removing any
         * events etc) if we destroy the view/remove it, or want to re-render the
         * entire view
         * @param appendOptions options for appending a view to this view
         */
        protected appendView(appendOptions : App.View.AppendChildViewOptions): void {
            if(appendOptions.childView) {
                console.warn("No childview selected, cannot append.");
                return;
            }
            var success : boolean = false;
            if(!!appendOptions.jqueryObject){ //Jquery was thruthy use it
                //Append to object
                appendOptions.jqueryObject.append(appendOptions.childView.$el);
                //Hey we did it
                success = true;
            } else if(!!appendOptions.attachSelector) {
                //Get element with selector,
                //we only need to search with this element
                var result : JQuery = $(appendOptions.attachSelector, this.$el);
                if(!!result[0]){//Check if we got a match
                    result.append(appendOptions.childView.$el);
                    //We did it!
                    success = true;
                } else {
                    console.warn("No element found for childview with selector: ",
                        appendOptions.attachSelector);
                }
            }
            if(success){
                this.childViews.push(appendOptions.childView);
            } else {
                console.warn("Appending childview was not successful")
            }

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