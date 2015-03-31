/// <reference path="core/Application.ts" />

/**
 * Run on Dom Ready
 */
$(() => {
	/**
	 * Holds the reference to our application object
	 */
	var mainApp : App.Application = new App.Application();
	/**
	 * Calls startup methods and dependencies in the Application
	 */
 	console.log('Fooooo');
	mainApp.bootstrap();
});
