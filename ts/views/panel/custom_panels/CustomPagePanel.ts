/// <reference path="../../AppView.ts" />
/// <reference path="../../IAppViewOptions.ts" />

module App {
    export module Panel {
        /**
         * The Custom Page Panel is the base for all content embedded in panels
         * This class has no knowledge of how it is embedded, this is told by
         * the panel it is embedded in.
         */
        export class CustomPagePanel extends App.AppView {
            constructor(options : App.View.IAppViewOptions) {
               super(options);
            }
        }
    }
}
