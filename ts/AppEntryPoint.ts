module foo {
    export class Foobar {
        constructor() {
            console.log("Foobar class constructor called");
        }
    }
}
class AppEntryPoint {
    classes : Array<string> = ["Foobar"];
    constructor() {
        console.log("AppEntryPoint constructor called");
    }
    bootstrap(): void {

        //run bootstrap on each of the modules
        var mods : Array<App.Module> = App.config["Modules"];
        for (var i = 0; i < mods.length; ++i) {
            mods[i].AppReady();
        }

    }
}

var mainApp = new AppEntryPoint();
//Timing
var t0 = performance.now();
console.log('Boostrap Start at '+t0+'ms');
mainApp.bootstrap();
var t1 = performance.now();
console.log('Boostrap End at '+t1+'ms');
console.log('Boostrap took '+(t1 - t0)+' milliseconds');
