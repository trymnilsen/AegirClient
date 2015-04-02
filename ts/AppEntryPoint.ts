/// <reference path="core/Application.ts" />

/**
 * Run on Dom Ready
 */
$(() => {
 	var t0 = performance.now();
    console.log('App Start at '+t0+'ms');
	/**
	 * Holds the reference to our application object
	 */
	var mainApp : App.Application = new App.Application();
	/**
	 * Calls startup methods and dependencies in the Application
	 */
    mainApp.bootstrap();

    var t1 = performance.now();
    console.log('Boostrap End at '+t1+'ms');
    console.log('Boostrap took '+(t1 - t0)+' milliseconds');
});
