/// <reference path="Module.ts" />
/// <reference path="../views/menubar/MenubarView.ts" />
/// <reference path="../views/AppView.ts" />
/// <reference path="../views/layout/ELayoutPosition.ts" />
/// <reference path="../typings/jquery-ui-layout.d.ts" />

module App.View.Layout {

    export class LayoutManager {

        private layoutUI: JQueryLayout;
        private topBarUI: App.View.Menu.MenubarView;

        private modules: Array<App.Core.Module>;
        /**
         * Typescript does not yet support enums as the key type, so we use the number value instead
         */
        private modulePositions: { [id: number]: Array<App.Core.Module> };

        constructor() {
            this.modules = [];

        }
        public render(): void {
            this.addLayout();
            this.addTopBar();
        }
        public addModule(mod: App.Core.Module): void {
            //check if this position already has a module
            var modPosNumber: number = mod.LayoutPosition;
            if(!this.modulePositions[modPosNumber])
            {
                this.modulePositions[modPosNumber] = [];
            }
            this.modulePositions[modPosNumber].push(mod);
        }
        private createPanels(): void {

        }
        private addTopBar():void {
            this.topBarUI = new App.View.Menu.MenubarView();
            this.topBarUI.render();
            this.resolveSelector(App.config['UI']['topBarContainer']).append(this.topBarUI.$el);
        }
        private addLayout():void {
            this.layoutUI = this.resolveSelector(App.config['UI']['layoutContainer']).layout({
                defaults: {
                    fxName: 'none',
                    applyDefaultStyles: false,
                },
                east: {
                    childOptions: {
                        defaults: {
                            fxName: 'none',
                            applyDefaultStyles: false
                        },
                        north: {
                            size: 224,
                            paneSelector: '#right-ui-layout-north'
                        },
                        center: {
                            paneSelector: '#right-ui-layout-center'
                        },
                        south: {
                            paneSelector: '#right-ui-layout-south'
                        }
                    }
                },
                west: {
                    childOptions: {
                        defaults: {
                            fxName: 'none',
                            applyDefaultStyles: false
                        },
                        north: {
                            size: 224,
                            paneSelector: '#left-ui-layout-north'
                        },
                        center: {
                            paneSelector: '#left-ui-layout-center'
                        }
                    }
                },
                center: {

                },
                south: {
                    size: 150,
                    minSize: 150,
                    childOptions: {
                        defaults: {
                            fxName: 'none',
                            applyDefaultStyles: false
                        },
                        west: {
                            paneSelector: '#bottom-ui-layout-west',
                            size: 625
                        },
                        center: {
                            paneSelector: '#bottom-ui-layout-center'
                        },
                        east: {
                            paneSelector: '#bottom-ui-layout-east',
                            size: 202
                        }
                    }
                }
                //livePaneResizing    : true,

            });
        }
        private resolveSelector(selector: string): JQuery {
            let selectorResult: JQuery = $(selector);
            //Create jquery object
            if(!selectorResult[0])
            {
                console.error("[LayoutManager::resolveSelector]No match for selector",selector);
                return null;
            }
            return selectorResult;
        }
    }
}