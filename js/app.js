var AppEntryPoint = (function () {
    function AppEntryPoint() {
    }
    AppEntryPoint.prototype.bootstrap = function () {
    };
    return AppEntryPoint;
})();
$(function () {
    console.log('DomReady at ' + performance.now() + 'ms');
    //Start our app
    var mainApp = new AppEntryPoint();
    //Timing
    var t0 = performance.now();
    console.log('Boostrap Start at ' + t0 + 'ms');
    //Bootstrap Modules, magic happens here
    mainApp.bootstrap();
    var t1 = performance.now();
    console.log('Boostrap End at ' + t1 + 'ms');
    console.log('Boostrap took ' + (t1 - t0) + ' milliseconds');
});
var App;
(function (App) {
    App.config = {
        "modules": ["Navigation", "PageRender"],
        "Pages": [
            {
                "name": "Home",
                "panels": ["TestPanel"]
            }
        ]
    };
})(App || (App = {}));
var App;
(function (App) {
    var Messaging;
    (function (Messaging) {
        var Message = (function () {
            function Message(greeting) {
                this.greeting = greeting;
            }
            Message.prototype.greet = function () {
                return "<h1>" + this.greeting + "</h1>";
            };
            return Message;
        })();
        Messaging.Message = Message;
    })(Messaging = App.Messaging || (App.Messaging = {}));
})(App || (App = {}));
///<reference path="Message.ts" />
var App;
(function (App) {
    var Messaging;
    (function (Messaging) {
        var AppMessenger = (function () {
            function AppMessenger(greeting) {
                this.greeting = greeting;
            }
            AppMessenger.prototype.greet = function () {
                return "<h1>" + this.greeting + "</h1>";
            };
            return AppMessenger;
        })();
        Messaging.AppMessenger = AppMessenger;
    })(Messaging = App.Messaging || (App.Messaging = {}));
})(App || (App = {}));
///<reference path="messages/AppMessenger.ts" />
var App;
(function (App) {
    var Context = (function () {
        function Context() {
            console.log('Test');
        }
        /**
         * Sets the messenger object for this context
         * @param {App.Messaging.AppMessenger}
         */
        Context.prototype.setMessengerInstance = function (instance) {
            this.messenger = instance;
        };
        /**
         * Returns the messenger object for this context
         * @return {App.Messaging.AppMessenger}
         */
        Context.prototype.getMessengerInstance = function () {
            return this.messenger;
        };
        return Context;
    })();
    App.Context = Context;
})(App || (App = {}));
/// <reference path="Context.ts" />
var App;
(function (App) {
    var Module = (function () {
        function Module() {
        }
        Module.prototype.AppReady = function () {
        };
        return Module;
    })();
    App.Module = Module;
})(App || (App = {}));
///<reference path="Config.ts" />
///<reference path="Context.ts" />
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        var test = new App.Context();
        console.log(App.config['modules']);
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
})();
;
var greeter = new Greeter("Hello, world!");
var str = greeter.greet();
document.body.innerHTML = str;
var App;
(function (App) {
    var Panel;
    (function (Panel) {
        var PagePanel = (function () {
            function PagePanel() {
            }
            return PagePanel;
        })();
        Panel.PagePanel = PagePanel;
    })(Panel = App.Panel || (App.Panel = {}));
})(App || (App = {}));
/// <reference path="panel/PagePanel.ts" />
var App;
(function (App) {
    var AppPage = (function () {
        function AppPage() {
        }
        return AppPage;
    })();
    App.AppPage = AppPage;
})(App || (App = {}));
//# sourceMappingURL=app.js.map