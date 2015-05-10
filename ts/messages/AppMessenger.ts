///<reference path="Message.ts" />
/// <reference path="../typings/backbone-eventable.d.ts" />
/// <reference path="../typings/backbone.d.ts" />

module App {
    /**
     * Module containing classes and stuff related to messaging. Messaging is
     * used to communicate between modules and code that has a reference to an 
     * [[App.Messaging.AppMessenger]] instance.
     */
	export module Messaging {
        /**
         * The app messager is basically a pub sub system. Each messenger can hold
         * subscribers for a given type of Message. as wel as sending them. This class mainly handles conversion between 
         * event names and message ids
         */
	    export class AppMessenger extends Backbone.Eventable {
            /**
             * Creates a new AppMessaenger instance
             */
	        constructor() {
                super();
	        }
            SendMessage(message:App.Messaging.Message):void {
                this.trigger(message.getName(),message);
            }
            /**
             * Helper method for listen on this object
             * @param events   events to listen for
             * @param callback callback
             */
            subscribe(events: string, callback: Function): void {
                super.listenTo(this, events, callback);
            }
	    }
	}
}