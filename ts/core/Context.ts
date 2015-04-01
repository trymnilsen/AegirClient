///<reference path="../messages/AppMessenger.ts" />
///<reference path="../typings/backbone.d.ts" />
///<reference path="../config/Constants.ts" />

module App {
	export module Core {
		'use strict';
		export class Context extends Backbone.Events {

			/**
			 * Internal storage of our data
			 */
			private data : {[id:string] : Object};
	  		private messenger : App.Messaging.AppMessenger;

			constructor() {
				console.log('Test');
				super();
			}
			/**
			 * Sets the messenger object for this context
			 * @param {App.Messaging.AppMessenger}
			 */
			public setMessengerInstance(instance : App.Messaging.AppMessenger) : void {
				this.messenger = instance;
			}
			/**
			 * Returns the messenger object for this context
			 */
			public getMessengerInstance() : App.Messaging.AppMessenger {
				return this.messenger;
			}
			public getAllData(): Object {
				return this.data;
			}
			public getData(dataKey: string): Object {
				if(this.data[dataKey] === undefined)
				{
					console.warn("Tried to get non datakey ",dataKey);
				}
				else
				{
					return this.data[dataKey];
				}
			}
			public setData(dataKey: string, data: Object): void {
				this.data[dataKey] = data;
				//notifyChange
				this.trigger(App.constants['EVENTS']['NOTIFYCONTEXTPROPERTYCHANGED']);
			}
	  	}
	}
}