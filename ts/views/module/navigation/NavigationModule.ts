/// <reference path="../BaseModule.ts" />
/// <reference path="../../layout/ELayoutPosition.ts" />
/// <reference path="NavigationModule.html.ts" />
/// <reference path="NavigationVisualization.ts" />


module App.View.Mod {
    export class NavigationModule extends App.View.BaseModule {

         constructor(){
             super(App.View.Layout.ELayoutPosition.LEFTCENTER, "Navigation");
             this.setTemplate(App.Template.NavigationModule.html);

             let navCanvas: App.View.Mod.Navigation.NavigationVisualization = new App.View.Mod.Navigation.NavigationVisualization();
             navCanvas.appendOptions = {
                 AttachPointSelector : ".nav-viz-wrapper"
             };
             this.appendView(navCanvas);
         }
    }
}