/// <reference path="../BaseModule.ts" />
/// <reference path="../../layout/ELayoutPosition.ts" />
/// <reference path="ReplayModule.html.ts" />


module App.View.Mod {
    export class ReplayModule extends App.View.BaseModule {

         constructor(){
             super(App.View.Layout.ELayoutPosition.LEFTUP, "Replay");
             this.setTemplate(App.Template.ReplayModule.html);
         }
    }
}