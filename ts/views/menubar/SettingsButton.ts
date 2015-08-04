/// <reference path="../AppView.ts" />
module App.View.Menu {

    export class SettingsButton extends App.View.AppView {

        constructor() {
            //Init parent
            super({
                backboneOptions: {
                    className: "fa fa-cog",
                    tagName: "a"
                }
            });
            this.events = <any>{
                "click": () => { this.openSettings(); }
            };
        }
        public openSettings():void {
            console.log('foo');
        }
    }
}