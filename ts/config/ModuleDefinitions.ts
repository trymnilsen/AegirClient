/// <reference path="../views/module/BaseModule" />
/// <reference path="../views/module/properties/EditPropertiesModule.ts" />
/// <reference path="../views/module/LogModule.ts" />
/// <reference path="../views/module/OutputModule.ts" />
/// <reference path="../views/module/replay/ReplayModule.ts" />
/// <reference path="../views/module/StatisticsModule.ts" />
/// <reference path="../views/module/VesselConfigurationModule.ts" />
/// <reference path="../views/module/map/MapModule.ts" />
/// <reference path="../views/module/waypoint/WaypointsModule.ts" />
/// <reference path="../views/module/navigation/NavigationModule.ts" />
/// <reference path="../views/module/screen/ScreenModule.ts" />
/// <reference path="../editor/Workspace.ts" />

module App.Config {
    export function getAllModules(workspace: App.Editor.Workspace) {
        let modules: Array<App.View.BaseModule> = [];
        //Set up all modules and add
        modules.push(new App.View.Mod.EditPropertiesModule());
        modules.push(new App.View.Mod.LogModule());
        modules.push(new App.View.Mod.MapModule());
        modules.push(new App.View.Mod.OutputModule());
        modules.push(new App.View.Mod.ReplayModule());
        modules.push(new App.View.Mod.StatisticsModule());
        modules.push(new App.View.Mod.VesselConfiguration());
        //modules.push(new App.View.Mod.PreviewModule());
        modules.push(new App.View.Mod.NavigationModule());
        modules.push(new App.View.Mod.ScreenModule(workspace.OpenProjects));
        //modules.push(new App.View.Mod.WaypointsModule());
        return modules;
    }
}