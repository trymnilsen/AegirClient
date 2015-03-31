/// <reference path="../config/Config.ts" />
/// <reference path="../config/ModuleDefinitions.ts" />
/// <reference path="Module.ts" />
/// <reference path="../views/AppView.ts" />

module App {
    'use strict';
    export class Application {

        constructor() {
            console.log("AppEntryPoint constructor called");
        }
        bootstrap() : void {

            //run bootstrap on each of the modules
            var mods : {[id : string] : App.Module} = App.modDefinitions;
            //Loop through all and give them the proper configs
            for (var modId in mods) {
                //Get the configs if any for this module
                var modConfig : {[id : string] : any} = App.config["Modules"][modId];
                //Set it
                mods[modId].setConfig(modConfig);
                //Set AppReady
                mods[modId].appReady();
            }
        }

    }
}