///<reference path="messages/AppMessenger.ts" />


module App {
  export class Context {
  		
  		private messenger: App.Messaging.AppMessenger;

		constructor() {
			console.log('Test');
		}
		/**
		 * Sets the messenger object for this context
		 * @param {App.Messaging.AppMessenger}
		 */
		setMessengerInstance(instance: App.Messaging.AppMessenger): void {
			this.messenger = instance;
		}
		/**
		 * Returns the messenger object for this context
		 * @return {App.Messaging.AppMessenger}
		 */
		getMessengerInstance(): App.Messaging.AppMessenger {
			return this.messenger;
		}
  }
}