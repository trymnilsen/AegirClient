/// <reference path="core/Application.ts" />
var t0 = performance.now();
console.log('[APPENTRY:EXEC]App Start at '+t0+'ms');

//We have some time to do non-dom related logic
var mainApp : App.Core.Application = new App.Core.Application();

/**
 * Run on Dom Ready
 */
$(() => {
 	var t1 = performance.now();
    console.log('[APPENTRY:DOMLOAD]Dom Start at '+t1+'ms');
    console.log('[APPENTRY:DOMLOAD]DomReady took '+(t1 - t0)+' milliseconds');
    //setTimeout(function() {
        var t2 = performance.now();
        console.log('[APPENTRY:DOMLOAD+500ms]timeout at '+t2+'ms');
        /**
         * Holds the reference to our application object
         */

        mainApp.bootstrap();

        var t3 = performance.now();
        console.log('[APPENTRY:DOMLOAD+500ms]Boostrap End at '+t3+'ms');
        console.log('[APPENTRY:DOMLOAD+500ms]Boostrap took '+(t3 - t2)+' milliseconds');
   // }, 500);

});
