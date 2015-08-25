/// <reference path="../../../typings/backbone.d.ts" />
/// <reference path="../../AppModel.ts" />

module App.Data.Model.Project {

    export class Project extends App.Data.AppModel{

        /**
         * Contains data about a single search result
         */
        constructor() {
            //Init parent
            super();

        }

        get Id(): number {
            return this.get('Id');
        }
        set ProjectName(value: string) {
            this.set('ProjectName', value);
        }
        get ProjectName(): string {
            return this.get('ProjectName');
        }
        set VesselName(value: string) {
            this.set('VesselName', value);
        }
        get VesselName(): string {
            return this.get('VesselName');
        }
        set VesselLength(value: number) {
            this.set('VesselLength', value);
        }
        get VesselLength(): number {
            return this.get('VesselLength');
        }
        set VesselWidth(value: number) {
            this.set('VesselWidth', value);
        }
        get VesselWidth(): number {
            return this.get('VesselWidth');
        }

    }
}