/// <reference path="../typings/backbone.d.ts" />
/// <reference path="../typings/jquery.d.ts" />
/// <reference path="../core/Context.ts"/>
/// <reference path="../config/Constants.ts" />
/// <reference path="../core/IDisposable.ts" />
/// <reference path="IAppViewAppendOptions.ts" />
/// <reference path="IAppViewOptions.ts" />

module App.View {
    /**
     * The AppView is the baseclass for all DOM elements rendered by the application
     * It handles managing childviews and contains a context which triggers
     * rerendering if changed.
     */
    export class AppView extends Backbone.View implements App.Core.IDisposable {
        public template: (data)=> string;
        public appendOptions: App.View.IAppViewAppendOptions;

        protected childApppendOptions: App.View.IAppViewAppendOptions;
        protected context: App.Core.Context = null;

        private childViews: {[id:string] : App.View.AppView} = {};

        constructor(options: App.View.IAppViewOptions){
            //Set options for backbone view, if its set or not
            super(options.backboneOptions || {});

            //Check if context is supplied
            if(!!options.context) {
                this.setContext(options.context);
            } else {
                let newContext : App.Core.Context = new App.Core.Context();
                this.setContext(newContext);
            }
            //Append childviews
            if(!!options.childViews){
                this.addMultipleViews(options.childViews);
            }
        }
        /**
         * Resolves the Append point to a jquery object, abstracting away the implementation
         * of each view.
         * @param view the view we want to append
         */
        public static resolveViewAppendPoint(view:App.View.AppView, jqueryContext ?:JQuery) {

            //If the jquery object is present use it
            if(!!view.appendOptions.JQueryAttachPoint) {
                return view.appendOptions.JQueryAttachPoint;
            //else use the selector
            } else if(!!view.appendOptions.AttachPointSelector) {
                let jqueryObj : JQuery = null;
                if(!!jqueryContext) {
                    jqueryObj = $(view.appendOptions.AttachPointSelector, jqueryContext);
                } else {
                    jqueryObj = $(view.appendOptions.AttachPointSelector);
                }
                if(!jqueryObj[0])
                {
                    console.warn("[APPVIEW:ResolveAppend]No match for selector",view.appendOptions.AttachPointSelector);
                }
                return jqueryObj;
            //Neither? Let us know about it
            } else {
                console.warn("[APPVIEW:ResolveAppend]No way to append, neither selector or jq object present");
            }
        }
        /**
         * Dispose any resources this view holds
         */
        public dispose(domEventsOnly : boolean = false): void {
            for (let childViewId in this.childViews) {
                let childView : App.View.AppView = this.childViews[childViewId];
                childView.dispose(domEventsOnly);
            }
            //Remove dom eveants
            this.undelegateEvents();
            if(!domEventsOnly) {
                this.stopListenForContext();
            }
        }
        public setAppendOptions(options: App.View.IAppViewAppendOptions) {
            if(!options.AttachPointSelector && !options.JQueryAttachPoint) {
                this.appendOptions = options;
            } else {
                console.log("[APPVIEW:AppendOptions]Append options was not valid, was:", options);
            }
        }
        /**
         * Set or change to another context for this view
         */
        public setContext(newContext:App.Core.Context): void {
            //Remove events for old context
            if(!!this.context){
                this.context.stopListening();
            }
            //Add new and listen
            this.context = newContext;
            this.listenForContextChanges();
        }
        /**
         * Render the view, and subviews
         * @return returns self for fluency
         */
        public render(): App.View.AppView {
            //Unlisten any dom events
            this.undelegateEvents();

            //get context
            if(!!this.context) {
                let data : any = this.context.getAllData();
                //Data was not thruthy
                if(!data) {
                    console.warn("[APPVIEW:Render]Data for view rerender was invalid, was:",data);
                }
                if(!!this.template)
                {
                    let renderedContent : string = this.template(data);
                    this.$el.html(renderedContent);
                }

            } else {
                console.warn("[APPVIEW:Render]Context was invalid, was:",this.context);
            }
            //Render childviews
            for (let childViewId in this.childViews) {
                let childView : App.View.AppView = this.childViews[childViewId];
                this.renderChildView(childView);
            }
            this.delegateEvents();
            return this;
        }
        /**
         * We are not guaranteed to have a real dom node ref on render
         * So functions like focus will not work. On post render all dom operations
         * should have been complete, enabling us to use these functions
         * @return {App.View.AppView} [description]
         */
        public postRender(): App.View.AppView {
            for (let childViewId in this.childViews) {
                let childView: App.View.AppView = this.childViews[childViewId];
                childView.postRender();
            }
            return this;
        }
        /**
         * Append a view to this view as a child
         * This gives us the befit of properly disposing the views (removing any
         * events etc) if we destroy the view/remove it, or want to re-render the
         * entire view
         * @param appendOptions options for appending a view to this view
         * @param renderOnAppend should the view also be rendered after appending?
         */
        public appendView(view : App.View.AppView, renderOnAppend: boolean = false): void {
            if(!View) {
                console.warn("[APPVIEW:Append]No childview selected, cannot append.");
                return;
            }
            //Moved to rendering
            // var success : boolean = false;
            // if(!!appendOptions.jqueryObject){ //Jquery was thruthy use it
            //     //Append to object
            //     appendOptions.jqueryObject.append(appendOptions.childView.$el);
            //     //Hey we did it
            //     success = true;
            // } else if(!!appendOptions.attachSelector) {
            //     //Get element with selector,
            //     //we only need to search with this element
            //     var result : JQuery = $(appendOptions.attachSelector, this.$el);
            //     if(!!result[0]){//Check if we got a match
            //         result.append(appendOptions.childView.$el);
            //         //We did it!
            //         success = true;
            //     } else {
            //         console.warn("No element found for childview with selector: ",
            //             appendOptions.attachSelector);
            //     }
            // }
            //
            //Check if already appended
            if(!this.childViews[view.cid]) {
                this.childViews[view.cid] = view;
                if(renderOnAppend)
                {
                    this.renderChildView(view);
                }
            } else {
                console.log("[APPVIEW:Append]View :'"+view.cid+"' Already a childview");
            }
        }
        /**
         * Appends multiple childviews to this view
         */
        public addMultipleViews(views: Array<App.View.AppView>):void {
            //Add childviews
            for (let i = 0; i < views.length; ++i) {
                this.appendView(views[i]);
            }
        }
        private renderChildView(view: App.View.AppView) {
            let appendPoint: JQuery = null;
            view.render();
            //If childview does not have an append point, append it directly to us
            if(!!view.appendOptions) {
                appendPoint = App.View.AppView.resolveViewAppendPoint(view,this.$el);
            } else {
                appendPoint = this.$el;
            }

            appendPoint.append(view.$el);
        }
        protected removeChildView(view: App.View.AppView) {
            view.dispose();
            view.remove();
            delete this.childViews[view.cid];
        }
        /**
         * Sets the template of this view from a given string
         */
        protected setTemplate(templateString :string): void {
            this.template = _.template(templateString);
        }
        /**
         * Start to listen for context changes
         */
        private listenForContextChanges(): void {
            if(!!this.context) {
                this.context.on(App.constants['EVENTS']['CONTEXT']['NOTIFYCONTEXTPROPERTYCHANGED'],
                    this.contextUpdated,this);
            }
        }
        /**
         * Release any event listeners on the current context
         */
        private stopListenForContext(): void {
            if(!!this.context) {
                this.context.off(App.constants['EVENTS']['CONTEXT']['NOTIFYCONTEXTPROPERTYCHANGED']);
            }
        }
        private contextUpdated(): void {
            this.render();
        }
    }
}