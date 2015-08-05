/// <reference path="../BaseModule.ts" />
/// <reference path="../layout/ELayoutPosition.ts" />


module App.View.Mod {
    export class MapModule extends App.View.BaseModule {

         constructor(){
             super(App.View.Layout.ELayoutPosition.DOWNCENTER);
             this.Name = "Map";
         }
    }
}