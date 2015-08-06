/// <reference path="../views/module/BaseModule.ts" />
/// <reference path="../views/menubar/MenubarView.ts" />
/// <reference path="../views/AppView.ts" />
/// <reference path="../views/layout/ELayoutPosition.ts" />
/// <reference path="../typings/jquery-ui-layout.d.ts" />
/// <reference path="../views/layout/LayoutTabContainer.ts" />
/// <reference path="../views/layout/LayoutTab.ts" />

module App.View.Layout {

    export class LayoutManager {

        private layoutUI: any;
        private topBarUI: App.View.Menu.MenubarView;

        private modules: Array<App.View.BaseModule>;
        private positionSelectors: {[id: number]: string} = {
            [App.View.Layout.ELayoutPosition.CENTER]      : '#ui-layout-center',
            [App.View.Layout.ELayoutPosition.LEFTUP]      : '#left-ui-layout-north',
            [App.View.Layout.ELayoutPosition.LEFTDOWN]    : '#left-ui-layout-center',
            [App.View.Layout.ELayoutPosition.DOWNLEFT]    : '#bottom-ui-layout-west',
            [App.View.Layout.ELayoutPosition.DOWNCENTER]  : '#bottom-ui-layout-center',
            [App.View.Layout.ELayoutPosition.DOWNRIGHT]   : '#bottom-ui-layout-east',
            [App.View.Layout.ELayoutPosition.RIGHTUP]     : '#right-ui-layout-north',
            [App.View.Layout.ELayoutPosition.RIGHTCENTER] : '#right-ui-layout-center',
            [App.View.Layout.ELayoutPosition.RIGHTDOWN]   : '#right-ui-layout-south'
        }
        /**
         * Typescript does not yet support enums as the key type, so we use the number value instead
         */
        private modulePositions: { [id: number]: Array<App.View.BaseModule> } = {};

        constructor() {
            this.modules = [];

        }
        public render(): void {
            this.addLayout();
            this.addTopBar();
            this.createPanels();
        }
        public addModule(mod: App.View.BaseModule): void {
            //check if this position already has a module
            var modPosNumber: number = mod.LayoutPosition;
            if(!this.modulePositions[modPosNumber])
            {
                this.modulePositions[modPosNumber] = [];
            }
            this.modulePositions[modPosNumber].push(mod);
        }
        private createPanels(): void {
            for(let key in this.modulePositions) {
                //Get modules
                let modules: Array<App.View.BaseModule> = this.modulePositions[key];
                //Create container
                let tabContainer: App.View.Layout.LayoutTabContainer = new App.View.Layout.LayoutTabContainer();
                for (let i = 0, l = modules.length; i < l; i++) {
                    let title: string = modules[i].Name;
                    let tab: App.View.Layout.LayoutTab = tabContainer.getNewTab(title);
                    //Append our view to this tab
                    tab.view = modules[i];
                }
                //Get element to append container to
                let element: JQuery = this.resolveSelectorByPosition(key);
                tabContainer.render();
                element.append(tabContainer.$el);
                tabContainer.postRender();
            }
        }
        private addTopBar():void {
            this.topBarUI = new App.View.Menu.MenubarView();
            this.topBarUI.render();
            this.resolveSelector(App.config['UI']['topBarContainer']).append(this.topBarUI.$el);
        }
        private addLayout():void {
            this.layoutUI = this.resolveSelector(App.config['UI']['layoutContainer']);
            this.layoutUI.layout({
                defaults: { 
                    fxName              : 'none',
                },
                east: {
                    childOptions : {
                        defaults: {
                            fxName              : 'none',
                        },
                        north: {
                            size : 224,
                            paneSelector : '#right-ui-layout-north'
                        },
                        center: {
                            paneSelector : '#right-ui-layout-center'
                        },
                        south: {
                            paneSelector: '#right-ui-layout-south',
                            size: 100
                        }
                    }
                },
                center: {
                    onresize    : function(evt) {console.log(evt);}
                },
                south : {
                    size            : 150,
                    minSize         : 150,
                    childOptions    : {
                        defaults: {
                            fxName              : 'none',
                        },
                        west    : {
                            paneSelector    : '#bottom-ui-layout-west',
                            size: 625
                        },
                        center  : {
                            paneSelector    : '#bottom-ui-layout-center'
                        },
                        east    : {
                            paneSelector    : '#bottom-ui-layout-east',
                            size: 202
                        }
                    }
                },
                west: {
                    size: 300,
                    //closable    : false,
                    childOptions: {
                        defaults: {
                            fxName: 'none',
                            //applyDefaultStyles: false
                        },
                        north: {
                            size: 224,
                            paneSelector: '#left-ui-layout-north'
                        },
                        center: {
                            paneSelector: '#left-ui-layout-center'
                        }
                    }
                }
                //livePaneResizing    : true,

            });
        }
        private resolveSelectorByPosition(pos: App.View.Layout.ELayoutPosition, useContainer: boolean = true)
        {
            let selectorString = this.positionSelectors[pos];
            if(useContainer)
            {
                selectorString = selectorString + " div.layout-full-size-container";
            }
            let jqueryObj = this.resolveSelector(selectorString);
            return jqueryObj;
        }
        /**
         * Resolves a selector string into a jquery object
         * @param  {string} selector [description]
         * @return {JQuery}          [description]
         */
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