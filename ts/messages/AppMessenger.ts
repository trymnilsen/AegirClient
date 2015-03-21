///<reference path="Message.ts" />

module App {
	export module Messaging {
	    export class AppMessenger {

	        constructor(public greeting: string) {

	        }
	        public greet() :string {
	            return "<h1>" + this.greeting + "</h1>";
	        }
	    }
	}
}