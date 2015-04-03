module App {
    export module View {
        /**
         * Defines an interface for creating a new [[App.AppView]]
         */
        export interface IAppViewOptions {
            /**
             * Backbone view options
             */
            backboneOptions ?: Backbone.ViewOptions;
            /**
             * AppViews to append to our view as children
             */
            childViews ?: Array<App.AppView>;
            /**
             * Priove a context for the view, if none is given we create one for you :)
             */
            context ?: App.Core.Context;
        }
    }
}