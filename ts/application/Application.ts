/// <reference path="../config/Config.ts" />
/// <reference path="../config/ModuleDefinitions.ts" />
/// <reference path="Module.ts" />

module App {
    export class Application {

        constructor() {
            console.log("AppEntryPoint constructor called");
        }
        bootstrap(): void {

            //run bootstrap on each of the modules
            var mods : {[id:string]: App.Module} = App.modDefinitions;
            //Loop through all and give them the proper configs
            for (var modId in mods) {
                //Get the configs if any for this module
                var modConfig = App.config['Modules'][modId];
                //Set it
                mods[modId].setConfig(modConfig);
                //Set AppReady
                mods[modId].AppReady();
            }

        }
    }
}