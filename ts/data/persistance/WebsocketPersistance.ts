/// <reference path="PersistanceProvider.ts" />
/// <reference path="../../typings/backbone.d.ts" />
/// <reference path="../connection/WebsocketConnection.ts" />
/// <reference path="../AppCollection.ts" />


module App.Data.Persistance {
    export class WebsocketPersistance<TModel extends Backbone.Model> 
    	extends App.Data.Persistance.PersistanceProvider<TModel> {

		private socket: App.Data.Connection.WebsocketConnection = null;
        private collection: App.Data.AppCollection<TModel> = null;

        constructor(collection: App.Data.AppCollection<TModel>) {
			super();
            this.collection = collection;
            this.socket = App.Data.Connection.WebsocketConnection.getInstance();
            this.listenForWebsocketChanges();
    	}
        public removePersistance():void {

        }
        private listenForCollectionChanges(): void {

        }
        private listenForWebsocketChanges(): void {
            this.socket.on("MODELCHANGE", this.applyWebSocketChanges, this);
        }

        private applyWebSocketChanges(data): void {
            console.log("[WebsocketPersistance::applyWebSocketChanges] applying ", data);
        }

    }
}
