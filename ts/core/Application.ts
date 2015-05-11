/// <reference path="../config/Config.ts" />
/// <reference path="../config/ModuleDefinitions.ts" />
/// <reference path="AppState.ts"/>
/// <reference path="Module.ts" />
/// <reference path="../views/AppView.ts" />
/// <reference path="../typings/jquery.d.ts"/>
module App {
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
        /**
         * Backing variable for the available states
         */
        private states: { [id: string]: App.Core.AppState } = {};
        /**
         * The currently active state
         */
        private activeState: App.Core.AppState = null;
        /**
         * Creates an internal mapping between messagenames and states,
         * simplifying changing states based on received messages
         * E.G authsucess switches from authstate to main app state
         */
        private statesEventsMapping: { [id: string]: App.Core.AppState } = {};
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
            var layoutRoot: string = App.config['UI']['layoutContainer'];
            //Create jquery object
            App.Application.layoutElement = $(layoutRoot);
            if(!App.Application.layoutElement[0])
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
            this.initModules();
            this.initStates();
        }
        getMessenger(): App.Messaging.AppMessenger {
            return this.messenger;
        }
        /**
         * Creates and listens to the messenger instance for this application
         */
        private createMessenger(): void {
            this.messenger = new App.Messaging.AppMessenger();
            this.messenger.subscribe("*", _.bind(this.receivedMessage,this));
        }
        private receivedMessage(message): void {
            console.log('ReceivedMessage',message);
        }
        /**
         * Init all the givens states and sets state given by
         * the `StatupState`value under AppStates as the active state
         */
        private initStates(): void {
            var stateDefinitions = App.config["AppStates"]["States"];
            var startupState = App.config["AppStates"]["StartupState"];
            //Generate all states
            for (var stateId in stateDefinitions) {
                var statesConfig = stateDefinitions[stateId];

                var state: App.Core.AppState = new App.Core.AppState();
                state.setEvents(statesConfig["Events"]);

                for (var i = 0; i < statesConfig["Events"]; i++) {
                    var eventName = statesConfig["Events"][i];
                    this.statesEventsMapping[eventName] = state;
                }

                state.setModuleIds(statesConfig["Modules"]);
                state.setClassNames(statesConfig["ContainerClasses"]);
                this.states[stateId] = state;
            }
            //Start our AppState
            this.setState(this.states[startupState]);
        }
        /**
         * Set a given state as the active one, suspending any current states
         */
        private setState(state: App.Core.AppState): void {
            //If we have a currently active one, suspend it
            if(!!this.activeState) {
                this.activeState.suspend();
                //Clear container classes
                var toRemove: string = this.activeState.getClassNames().join(" ");
                $('.app-container').removeClass(toRemove);
            }
            //Activate new appstate
            //Add classes
            var toAdd: string = state.getClassNames().join(" ");
            $('.app-container').addClass(toAdd);
            //Resume
            state.resume();
            //Set to current
            this.activeState = state;
        }
        /**
         * Initialize all modules
         */
        private initModules(): void {
            //run bootstrap on each of the modules
            var mods: { [id: string]: App.Module } = App.modDefinitions;
            //Loop through all and give them the proper configs
            for (var modId in mods) {
                //Get the configs if any for this module
                var modConfig: { [id: string]: any } = App.config["Modules"][modId];
                //Set it
                mods[modId].setConfig(modConfig);
                //Set AppReady
                //mods[modId].appReady();
            }
        }
    }
}