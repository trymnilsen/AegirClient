/// <reference path="../BaseModule.ts" />
/// <reference path="../layout/ELayoutPosition.ts" />


module App.View.Mod {
    export class ReplayModule extends App.View.BaseModule {

         constructor(){
             super(App.View.Layout.ELayoutPosition.RIGHTUP);
             this.Name = "Replay";
         }
    }
}