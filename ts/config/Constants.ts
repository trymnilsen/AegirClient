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
			CONTEXT : {
				NOTIFYCONTEXTPROPERTYCHANGED : "ECONTEXTPROPCHANGED"
			},
			PERSISTANCE: {
				ONEUPDATED : ""
			}
		},
		MESSAGES: {
			MESSAGETEST : "TESTTESTMESSAGE",
            ROUTECHANGED: "ROUTECHANGE",
            FULLVIEWREADY: "FW_READY",
            FULLVIEWDISPOSE: "FW_DISPOSE"
		}

	}
}