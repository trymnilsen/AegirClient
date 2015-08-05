/// <reference path="../BaseModule.ts" />
/// <reference path="../layout/ELayoutPosition.ts" />


module App.View.Mod {
    export class OutputModule extends App.View.BaseModule {

         constructor(){
             super(App.View.Layout.ELayoutPosition.DOWNRIGHT);
             this.Name = "Outputs";
         }
    }
}