/// <reference path="../config/Config.ts" />
/// <reference path="../config/ModuleDefinitions.ts" />
/// <reference path="Module.ts" />
/// <reference path="../views/AppView.ts" />

module App.Core {
    'use strict';
    export class AppState {
        private triggerEvents: Array<string>;
        private moduleIds: Array<string>;
        private classNames: Array<string>;
        constructor() {

        }

        public setEvents(events: Array<string>): void {
            this.triggerEvents = events;
        }
        public setClassNames(classes: Array<string>): void {
            this.classNames = classes;
        }
        public setModuleIds(modules: Array<string>): void {
            this.moduleIds = modules;
        }
        public getEvents(): Array<string> {
            return this.triggerEvents;
        }
        public getModuleIds(): Array<string> {
            return this.moduleIds;
        }
        public getClassNames(): Array<string> {
            return this.classNames;
        }
        public resume(): void {
            //Suspend each module
            this.runOnAllModules(function(mod: App.Module) {
                mod.appReady();
            });
        }
        public suspend(): void {
            //Suspend each module
            this.runOnAllModules(function(mod: App.Module) {
                mod.suspend();
            });
        }
        private runOnAllModules(callback:(mod: App.Module) => void) {
                        //Pass each module to the supplied function
            for (var i = 0; i < this.moduleIds.length; i++) {
                //Get the mod instance
                var mod: App.Module = App.modDefinitions[this.moduleIds[i]];
                    if(mod === undefined) {
                    console.warn("[APPSTATE:runOnAllMods]Module "+this.moduleIds[i]+" not defined in:",
                                                            App.modDefinitions);
                    //Jump top next
                    continue;
                }
                //Module is valid, call our method
                callback(mod);
            }
        }
    }
}