/// <reference path="../../AppCollection.ts" />
/// <reference path="LogLine.ts" />
/// <reference path="../../persistance/WebsocketPersistance.ts" />

module App.Data.Model.Log {
    export class LogLineCollection extends App.Data.AppCollection<App.Data.Model.Log.LogLine>  {
        constructor() {
            super(new App.Data.Persistance.WebsocketPersistance<App.Data.Model.Log.LogLine>());
        }
    }
}
