/// <reference path="../BaseModule.ts" />
/// <reference path="../layout/ELayoutPosition.ts" />


module App.View.Mod {
    export class VesselConfiguration extends App.View.BaseModule {

         constructor(){
             super(App.View.Layout.ELayoutPosition.RIGHTDOWN);
             this.Name = "Vessel Configuration";
         }
    }
}