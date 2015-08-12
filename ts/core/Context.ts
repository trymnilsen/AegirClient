///<reference path="../messenger/AppMessenger.ts" />
///<reference path="../typings/backbone.d.ts" />
///<reference path="../config/Constants.ts" />

/**
 * App Module is the place for all our other modules :)
 */
module App {
    /**
     * The core modules contains the main files needed for our application
     */
	export module Core {
		'use strict';
		export class Context extends Backbone.Eventable {
			/**
			 * Internal storage of our data
			 */
			private data : {[id:string] : Object} = {};
            /**
             * Internal storage of our messenger instance
             */
	  		private messenger : App.Messaging.AppMessenger;
            /**
             * Creates a new context
             */
			constructor() {
				super();
			}
			/**
			 * Sets the messenger object for this context
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
            /**
             * Get all the data stored in the context
             * @return all of the data in the context
             */
			public getAllData(): Object {
				return this.data;
			}
            /**
             * Returns the data for a specified key in the context
             * @param  dataKey the key the data is stored under
             * @return         the data for this key
             */
			public getData(dataKey: string): Object {
				if(this.data[dataKey] === undefined) {
					console.warn("[CONTEXT:getData]Tried to get non datakey ",dataKey);
				} else {
					return this.data[dataKey];
				}
			}
            /**
             * Set a single data entry in this context
             * @param      dataKey datakey
             * @param      data    the data to set
             * @param      notify  Set if the context should notify listeners
             */
			public setData(dataKey: string, data: Object, notify: boolean = true): void {
				this.data[dataKey] = data;
				//notifyChange
                //dont notify it we are batch updating it
                if(notify)
                {
    				this.trigger(App.constants['EVENTS']['NOTIFYCONTEXTPROPERTYCHANGED']);
                }
			}
	  	}
	}
}