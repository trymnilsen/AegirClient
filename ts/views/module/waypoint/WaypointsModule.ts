/// <reference path="../BaseModule.ts" />
/// <reference path="../../layout/ELayoutPosition.ts" />


module App.View.Mod {
    export class WaypointsModule extends App.View.BaseModule {

         constructor(){
             super(App.View.Layout.ELayoutPosition.LEFTCENTER, "Waypoints");
         }
    }
}