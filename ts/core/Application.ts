/// <reference path="../config/Config.ts" />
/// <reference path="../config/ModuleDefinitions.ts" />
/// <reference path="Module.ts" />
/// <reference path="../views/AppView.ts" />
/// <reference path="../typings/jquery.d.ts"/>
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
        /**
         * Static reference to our root dom node, supplied as a jquery object
         */
        static layoutElement: JQuery = null;

        /**
         * Constructs as application instance and fetches configs
         */
        constructor() {
            super();
            //Get config for room dom node
            let layoutRoot: string = App.config['UI']['layoutContainer'];
            //Create jquery object
            App.Core.Application.layoutElement = $(layoutRoot);
            if(!App.Core.Application.layoutElement[0])
            {
                console.error("[APPLICATION:Construct]No match for layoutroot",
                        layoutRoot);
            }
        }
        /**
         * Bootstrap is run on DOM Ready and will init states and modules
         */
        bootstrap(): void {
            //Modules are intialized ahead of states, as the modules gets their
            //optional configs before beeing bootstrapped by the state
            this.createMessenger();
            this.createLayout();
            this.initModules();
        }
        getMessenger(): App.Messaging.AppMessenger {
            return this.messenger;
        }
        private createLayout(): void {

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
            let mods:Array<App.Core.Module> = App.Config.getAllModules();
            //Loop through all and give them the proper configs
            for (let i = 0, l = mods.length; i<l; i++) {
                
            }
        }
    }
}