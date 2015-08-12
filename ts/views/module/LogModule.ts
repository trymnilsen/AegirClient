/// <reference path="BaseModule.ts" />
/// <reference path="../layout/ELayoutPosition.ts" />
/// <reference path="../../data/model/log/LogLineCollection.ts" />


module App.View.Mod {
    export class LogModule extends App.View.BaseModule {

         constructor(){
             super(App.View.Layout.ELayoutPosition.DOWNLEFT, "Log");
             new App.Data.Model.Log.LogLineCollection();
         }
    }
}