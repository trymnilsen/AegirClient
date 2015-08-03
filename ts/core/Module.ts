/// <reference path="Context.ts" />
/// <reference path="../config/IConfigurable.ts" />
/// <reference path="../views/layout/ELayoutPosition.ts" />

module App.Core {
    /**
     * Base class For a Module
     */
    export class Module implements App.Config.IConfigurable,
                                   App.Messaging.IMessageable {
        /**
         * The Context for this module
         */
        protected context: App.Core.Context;
        /**
         * A Config hash.
         * If the module has a section in the config file, it will
         * be found here
         */
        protected config: { [id: string]: any };
        /**
         * Defines the position of the module in the layout
         */
        protected layoutPosition: App.View.Layout.ELayoutPosition;
        /**
         * Construct a new Model instance
         */
        constructor(layoutPosition: App.View.Layout.ELayoutPosition) {
            this.context = new App.Core.Context();
            this.layoutPosition = layoutPosition;
        }
        /**
         * Called when the App is ready and config has been loaded
         */
        appReady(): void {

        }
        public setMessenger(messenger: App.Messaging.AppMessenger) {
            this.context.setMessengerInstance(messenger);
        }
        public getMessenger():App.Messaging.AppMessenger {
            return this.context.getMessengerInstance();
        }
        public get LayoutPosition(): App.View.Layout.ELayoutPosition {
            return this.layoutPosition;
        }
        public suspend(): void {

        }
        public hasOwnConfig(): boolean {
            return (!!this.config);
        }
        public getAllConfig(): { [id: string]: Object } {
            return this.config;
        }
        getConfig(configKey: string): any {
            return this.config[configKey];
        }
        /**
         * Sets the config hash for this module
         * @param configObj the config subset
         */
        setConfig(configObj: { [id: string]: any }): void {
            this.config = configObj;
        }

    }
}