///<reference path="../messages/AppMessenger.ts" />
/// <reference path="ContextData.ts" />

module App {
	export module Context {
		'use strict';
		export class Context {

			private data 	  : App.Context.ContextData;
	  		private messenger : App.Messaging.AppMessenger;

			constructor() {
				console.log('Test');
			}
			/**
			 * Sets the messenger object for this context
			 * @param {App.Messaging.AppMessenger}
			 */
			setMessengerInstance(instance : App.Messaging.AppMessenger) : void {
				this.messenger = instance;
			}
			/**
			 * Returns the messenger object for this context
			 */
			getMessengerInstance() : App.Messaging.AppMessenger {
				return this.messenger;
			}
	  	}
	}
}