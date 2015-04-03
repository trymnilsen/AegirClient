/// <reference path="../typings/jquery.d.ts" />

module App {
    export module View {
        /**
         * This interface defined a format for letting other parts of the code
         * know how they would like to be added to another view
         * One can define either via a direct JQuery object to attach to or a
         * selector to look for in the target view.
         *
         * If both are set, JQueryAttachPoint takes precidence
         */
        export interface IAppViewAppendOptions {
            JQueryAttachPoint ?: JQuery;
            AttachPointSelector?: string;
        }
    }
}