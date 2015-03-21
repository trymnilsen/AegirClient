var App;
(function (App) {
    App.config = {
        "modules": ['foo', 'bar']
    };
})(App || (App = {}));
///<reference path="Config.ts" />
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        console.log(App.config['modules']);
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
})();
;
var greeter = new Greeter("Hello, world!");
var str = greeter.greet();
document.body.innerHTML = str;
//# sourceMappingURL=app.js.map