module App {
    export module Messaging {
	    export class Message {
	        private greeting: string;

	        constructor(public greeting: string) {

	        }
	        public greet() :string {
	            return "<h1>" + this.greeting + "</h1>";
	        }
	    }
    }
}