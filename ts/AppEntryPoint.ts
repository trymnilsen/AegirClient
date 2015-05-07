/// <reference path="core/Application.ts" />
var t0 = performance.now();
console.log('App Start at '+t0+'ms');
/**
 * Run on Dom Ready
 */
$(() => {
 	var t1 = performance.now();
    console.log('Dom Start at '+t1+'ms');
    console.log('DomReady took '+(t1 - t0)+' milliseconds');
    setTimeout(function() {
        var t2 = performance.now();
        console.log('timeout at '+t2+'ms');
        /**
         * Holds the reference to our application object
         */
        var mainApp : App.Application = new App.Application();
        /**
         * Calls startup methods and dependencies in the Application
         */
        mainApp.bootstrap();

        var t3 = performance.now();
        console.log('Boostrap End at '+t3+'ms');
        console.log('Boostrap took '+(t3 - t2)+' milliseconds');

    }, 500);

});
