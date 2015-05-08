/// <reference path="../config/Config.ts" />
/// <reference path="../config/ModuleDefinitions.ts" />
/// <reference path="Module.ts" />
/// <reference path="../views/AppView.ts" />

module App.Core {
    'use strict';
    export class AppState {
        private triggerEvents: Array<string>;
        private moduleIds: Array<string>;

        constructor() {

        }

        public setEvents(events: Array<string>): void {
            this.triggerEvents = events;
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
        public Resume(): void {
            //For each module run ready
            for (var i = 0; i < this.moduleIds.length; i++) {
                //Get the mod instance
                var mod: App.Module = App.modDefinitions[this.moduleIds[i]];
                if(mod === undefined) {
                    console.warn("[APPSTATE:Resume]Module "+this.moduleIds[i]+" not defined in:",
                                                            App.modDefinitions);
                    //Jump top next
                    continue;
                }
                //Ready set go!
                mod.appReady();
            }
        }
    }
}