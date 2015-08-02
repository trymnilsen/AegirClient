/// <reference path="../AppView.ts" />
/// <reference path="../../typings/jquery.d.ts" />


module App.Page {

    export class FullViewPage extends App.Page.AppPage {

        public FullViewId: string;

        constructor(viewId: string) {
            super(App.Page.EPageType.FULLVIEW, {
                backboneOptions: {
                    className: "full-view-page "+viewId
                }
            });
            this.FullViewId = viewId;
        }

    }
}
