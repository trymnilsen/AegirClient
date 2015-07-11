/// <reference path="../../AppView.ts" />
/// <reference path="../../../typings/jquery-ui-layout.d.ts" />

module App.View.Editor.Layout {
    /**
     * Responsible for rendering and handling dom events
     * of the navigation menu
     */
    export class EditorContainer extends App.AppView {

        constructor() {
            //Init parent
            super({
                backboneOptions: {
                    className: 'editor-layout-container'
                }
            });
            //Set up append options
            //this.appendOptions = { AttachPointSelector: ".nav" };
            this.setTemplate(App.Template.EditorLayout.html);
            //Lets attach some events
            // this.events = <any>{
            //     "click input[type='button']": "beginAuth",
            //     "keypress input[type='password'],input[type='text']": "enterPressed"
            // };
        }
        public postRender(): App.AppView {
            super.postRender();
            this.$el.layout({
                defaults: {
                    fxName: 'none',
                },
                west: {
                    paneSelector: '#uiWest',
                    childOptions: {
                        defaults: {
                            fxName: 'none',
                        },
                        north: {
                            paneSelector: '#uiWestNorth'
                        },
                        center: {
                            paneSelector: '#uiWestCenter'
                        }
                    }
                },
                center: {
                    paneSelector: '#uiCenter',
                    childOptions: {
                        defaults: {
                            fxName: 'none',
                        },
                        center: {
                            paneSelector: '#uiCenterCenter'
                        },
                        south: {
                            paneSelector: '#uiCenterSouth'
                        }
                    }
                }
                //livePaneResizing    : true,
            });
            return this;
        }
    }
}