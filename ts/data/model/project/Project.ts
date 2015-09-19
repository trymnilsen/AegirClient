/// <reference path="../../../typings/backbone.d.ts" />
/// <reference path="../../AppModel.ts" />

module App.Data.Model.Project {

    export class Project extends App.Data.AppModel{

        /**
         * Contains data about a single search result
         */
        constructor(attributes: any = {}) {
            //Init parent
            super(attributes || {});
            this.urlFragment = "project";
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
        get IsSimulating(): boolean {
            return this.get('IsSimulating');
        }
        set IsSimulating(value: boolean) {
            this.set('IsSimulating',value);
        }

        public parse(response, options)
        {
            //If we got no response there is nothing to parse
            if(!response)
            {
                return {};
            }
            //Model Might be returned wrapped in an array
            if(response.constructor == Array)
            {
                response = response[0];
            }
            let attributes: { [id: string]: string } = {};
            //Fill in attributes
            attributes['LastModifiedDate'] = response['LastModifiedDate'];
            attributes['CreatedDate'] = response['CreatedDate'];
            attributes['ProjectName'] = response['ProjectName'];
            attributes['Id'] = response['Id'];
            //Demo - not yet implemented
            attributes['VesselName'] = "Name";
            attributes['VesselLength'] = "50";
            attributes['VesselWidth'] = "300";
            attributes['ProjectDescription'] = "Testing some stuff with bla";
            attributes['NumOfOutputs'] = "4";
            attributes['IsSimulating'] = "true"; //Just for testing and will be truthy anyway

            return attributes;
        }
    }
}