/// <reference path="../config/Config.ts" />
/// <reference path="../config/ModuleDefinitions.ts" />
/// <reference path="../config/StateDefinitions.ts" />
/// <reference path="AppState.ts"/>
/// <reference path="Module.ts" />
/// <reference path="../views/AppView.ts" />

module App {
    'use strict';
    export class Application extends Backbone.Eventable {
        /**
         * Backing variable for the available states
         */
        private states: { [id: string]: App.Core.AppState } = {};

        private activeState: App.Core.AppState = null;
        constructor() {
            super();
        }

        bootstrap(): void {
            this.initModules();
            this.initStates();
        }
        private initStates(): void {
            //Generate all states
            for (var stateId in App.stateDefinitions) {
                var statesConfig = App.stateDefinitions[stateId];

                var state: App.Core.AppState = new App.Core.AppState();
                state.setEvents(statesConfig["Events"]);
                state.setModuleIds(statesConfig["Modules"]);

                this.states[stateId] = state;
            }
            //Start our AppState
            this.activeState = this.states[App.startupState];
            this.activeState.Resume();
        }
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