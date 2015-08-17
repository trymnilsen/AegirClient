module App.Messaging.Messages {
    export enum NotificationLevel {
        NOTIFICATION,
        WARNING,
        ERROR
    }
    export interface INotifcationMessage {
        sender: string,
        content: string,
        level: App.Messaging.Messages.NotificationLevel;
    }
}