///<reference path="../../AppView.ts" />
/// <reference path="ScreenTabItem.html.ts" />
/// <reference path="../../../typings/backbone-eventable.d.ts" />

module App.View.Screen {

    export class ScreenTabData extends Backbone.Eventable{

        private title: string;
        private isSimulating: boolean;
        /**
         * Instantiates a new instance of the menu bar
         */
        constructor(title: string) {
            //Init parent
            super();
            this.title = title;
            this.isSimulating = false;
        }
        public get Title(): string {
            return this.title;
        }
        public get IsSimulating(): boolean {
            return this.isSimulating;
        }
        public set Title(value: string) {
            this.title = value;
            this.trigger("Change:Title", value);
        }
        public set IsSimulating(value: boolean) {
            this.isSimulating = value;
            this.trigger("Change:IsSimulating", value);
        }

    }
}