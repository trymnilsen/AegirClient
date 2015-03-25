var mainApp = new App.Application();
//Timing
var t0 = performance.now();
console.log('Boostrap Start at '+t0+'ms');
mainApp.bootstrap();
var t1 = performance.now();
console.log('Boostrap End at '+t1+'ms');
console.log('Boostrap took '+(t1 - t0)+' milliseconds');
