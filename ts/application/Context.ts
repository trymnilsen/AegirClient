///<reference path="../messages/AppMessenger.ts" />


module App {
	'use strict';
	export class Context {

  		private messenger : App.Messaging.AppMessenger;
  		private data : {[id:string] : Object};
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