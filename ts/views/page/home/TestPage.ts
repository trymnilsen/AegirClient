module App {
	export module Page {
	    export class TestPage {
	        private greeting: string;

	        constructor() {

	        }
	        public greet() :string {
	            return "<h1>" + this.greeting + "</h1>";
	        }
	    }
	}
}	