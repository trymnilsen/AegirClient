/// <reference path="backbone.d.ts" />
/**
 * Create the definition for our backbone eventable extention
 */
declare module Backbone {
	class Eventable extends Backbone.Events {
		constructor();
	}
}
