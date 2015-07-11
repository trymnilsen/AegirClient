module App {
	/**
	 * Defines constants for the application
	 * Constants include
	 *   - Event Names
	 *   - API paths
	 *   - Name of messages
	 */
	export var constants: {[id:string]: any} = {
		EVENTS : {
			NOTIFYCONTEXTPROPERTYCHANGED : "ECONTEXTPROPCHANGED"
		},
		MESSAGES: {
			MESSAGETEST : "TESTTESTMESSAGE",
            ROUTECHANGED: "ROUTECHANGE"
		}
	}
}