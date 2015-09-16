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
            FULLVIEWDISPOSE: "FW_DISPOSE",
            NOTIFICATION: "GENERIC_NOTIFICATION",
            ROUTER: {
            	CHANGEROUTE: "CHANGE_ROUTE",
            	ROUTETOPROJECT: "ROUTER_REQUEST_PROJECT_CHANGE"
            },
            WORKSPACE : {
            	CURRENTPROJECTCHANGED: "PROJECT_CHANGE"
            },
            STATUSBAR: {
            	QUEUE: "QUEUE_STATUS_BARMESSAGE"
            }
		}

	}
}