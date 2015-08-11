/// <reference path="../../messenger/AppMessenger.ts" />

module App.Data.Connection {
    export class WebsocketConnection {

		static instance: App.Data.Connection.WebsocketConnection = null;
		static isOpen: boolean = false;

		private connection: WebSocket;
		private messenger: App.Messaging.AppMessenger;

        constructor(messenger: App.Messaging.AppMessenger) {
			this.messenger = messenger;
			this.connection = new WebSocket("ws:\\localhost:8888");
			this.connection.onmessage = (data) => { this.websocketMessageReceived(data);}
        }

        public static connect(messenger: App.Messaging.AppMessenger): void {
        	if(!App.Data.Connection.WebsocketConnection.instance)
        	{
				App.Data.Connection.WebsocketConnection.instance = new App.Data.Connection.WebsocketConnection(messenger);
        	}
        }

        private websocketMessageReceived(data): void {

        }
    }
}