/// <reference path="Context.ts" />

module App {
    /**
     * Base class For a Module
     */
    export class Module {
        /**
         * The Context for this module
         */
        private context: App.Context;
        /**
         * A Config hash.
         * If the module has a section in the config file, it will
         * be found here
         */
        public config : {[id:string]: any};
        /**
         * A Css selector for where to append this module.. 
         * If the variable is empty, we assume this module is pure business logic
         */
        domAttachSelector: string;
        /**
         * Construct a new Model instance
         */
        constructor() {

        }
        /**
         * Called when the App is ready and config has been loaded
         */
        AppReady():void {

        }
        /**
         * Sets the config hash for this module
         * @param configObj the config subset
         */
        setConfig(configObj : {[id:string]: any}):void {
            this.config = configObj;
        }

    }
}