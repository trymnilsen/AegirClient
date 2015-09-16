/// <reference path="../config/Config.ts" />
/// <reference path="../config/ModuleDefinitions.ts" />
/// <reference path="../views/module/BaseModule.ts" />
/// <reference path="../views/AppView.ts" />
/// <reference path="../typings/jquery.d.ts"/>
/// <reference path="LayoutManager.ts"/>
/// <reference path="../editor/Workspace.ts" />
/// <reference path="Router.ts" />

module App.Core {
    'use strict';
    /**
     * This class is the heart of the application during start up
     * it will initialize states and modules. It also has creates and holds
     * the references to the root dom node, active state (as well as handling)
     * changes in states and is responsible for keeping a global messenger
     * instance available, (this will also be the one passed to all of the 
     * available contexts if none is explicitly set)
     */

    export class Application extends Backbone.Eventable {
        /**
         * Backing variable for the messenger instance
         */
        private messenger: App.Messaging.AppMessenger = null;
        private layoutManager: App.View.Layout.LayoutManager = null;
        private workspace: App.Editor.Workspace;
        private router: App.Core.Router;
        /**
         * Constructs as application instance and fetches configs
         */
        constructor() {
            super();
            this.createMessenger();
            this.layoutManager = new App.View.Layout.LayoutManager(this.messenger);
            this.workspace = new App.Editor.Workspace(this.messenger);
            this.router = new App.Core.Router(this.messenger);
        }
        /**
         * Bootstrap is run on DOM Ready and will init states and modules
         */
        bootstrap(): void {
            this.initModules();
            this.layoutManager.render();
        }
        /**
         * Get the application messenger
         * @return the messenger
         */
        getMessenger(): App.Messaging.AppMessenger {
            return this.messenger;
        }
        /**
         * Creates and listens to the messenger instance for this application
         */
        private createMessenger(): void {
            this.messenger = new App.Messaging.AppMessenger();
            //All is a magic word for jquery/backbone

            if(App.config["Messaging"]["DebugDumpAllMessages"]) {
                this.messenger.subscribe("all", _.bind(this.receivedMessage,this));
            }
        }
        private receivedMessage(message, data): void {
            console.debug('[APPLICATION:OnMessage] ReceivedMessage: ',message, data);
        }
        /**
         * Initialize all modules
         */
        private initModules(): void {
            //run bootstrap on each of the modules
            let mods:Array<App.View.BaseModule> = App.Config.getAllModules(this.workspace);
            //Loop through all and give them the proper configs
            for (let i = 0, l = mods.length; i<l; i++) {
                this.layoutManager.addModule(mods[i]);
            }
            Backbone.history.start();
        }
    }
}