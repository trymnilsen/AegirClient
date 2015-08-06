/// <reference path="../BaseModule.ts" />
/// <reference path="../layout/ELayoutPosition.ts" />


module App.View.Mod {
    export class SceneItemsModule extends App.View.BaseModule {

         constructor(){
             super(App.View.Layout.ELayoutPosition.LEFTUP);
             this.Name = "Simulation Scene";
         }
    }
}