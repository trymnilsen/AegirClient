/// <reference path="../../typings/backbone-eventable.d.ts" />

module App.Data.Connection {
    /**
     * Singleton class for websocket connection
     */
    export class WebsocketConnection extends Backbone.Eventable{

		static instance: App.Data.Connection.WebsocketConnection = null;
		static isOpen: boolean = false;

		private connection: WebSocket;

        constructor() {
            super();
			this.connection = new WebSocket("ws:\\localhost:8888");
			this.connection.onmessage = (data) => { this.websocketMessageReceived(data);}
            this.connection.onerror = (data) => { console.log("WS error: ", data);}
        }
        /**
         * Singleton method for returing one instance of this object
         */
        public static getInstance(): App.Data.Connection.WebsocketConnection {
            if(!App.Data.Connection.WebsocketConnection.instance)
            {
                App.Data.Connection.WebsocketConnection.instance = new App.Data.Connection.WebsocketConnection();
            }
            return App.Data.Connection.WebsocketConnection.instance;
        }
        /**
         * Callback for message received from the websocket interface
         */
        private websocketMessageReceived(data): void {
            this.trigger("MODELCHANGE", data);
        }
    }
}