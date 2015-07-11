/// <reference path="AppMessenger.ts" />

module App.Messaging {
    export interface IMessageable  {
        setMessenger(messenger: App.Messaging.AppMessenger);
        getMessenger():App.Messaging.AppMessenger;
    }
}