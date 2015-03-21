///<reference path="Config.ts" />
class Greeter {
    constructor(public greeting: string) { }
    greet() {
    	console.log(App.config['modules']);
        return "<h1>" + this.greeting + "</h1>";
    }
};
var greeter = new Greeter("Hello, world!");
var str = greeter.greet();

document.body.innerHTML = str;
