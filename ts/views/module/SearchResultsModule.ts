/// <reference path="../BaseModule.ts" />
/// <reference path="../layout/ELayoutPosition.ts" />


module App.View.Mod {
    export class SearchResultsModule extends App.View.BaseModule {

         constructor(){
             super(App.View.Layout.ELayoutPosition.DOWNLEFT);
             this.Name = "Search Results";
         }
    }
}