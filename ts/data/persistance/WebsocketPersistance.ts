/// <reference path="PersistanceProvider.ts" />
/// <reference path="../../typings/backbone.d.ts" />
/// <reference path="../websocket/WebsocketConnection.ts" />

module App.Data.Persistance {
    export class WebsocketPersistance<TModel extends Backbone.Model> 
    	extends App.Data.Persistance.PersistanceProvider<TModel> {

		private socket: App.Data.Connection.WebsocketConnection = null;

    	constructor() {
			super();
    	}
    	

    }
}
