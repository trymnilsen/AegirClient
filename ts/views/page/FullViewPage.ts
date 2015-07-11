/// <reference path="../AppView.ts" />
/// <reference path="../../typings/jquery.d.ts" />


module App.Page {

    export class FullViewPage extends App.Page.AppPage {

        constructor() {
            super({
                backboneOptions: {
                    className: "full-view-page"
                }
            });
        }

    }
}
