/// <reference path="../AppView.ts" />
/// <reference path="../IAppViewAppendOptions.ts" />
/// <reference path="../../typings/backbone.d.ts" />
/// <reference path="../../core/IFactory.ts" />
/// <reference path="../../config/Config.ts" />
/// <reference path="../../config/IConfigurable.ts" />
/// <reference path="custom_panels/CustomPagePanel.ts" />


module App {
    export module Panel {
    	/**
    	 * The page panel is the most basic panel, with no padding.. Useful for
    	 * content with its own style, E.G background color etc..
    	 */
        export class PagePanel extends App.AppView
        						implements App.Core.IFactory<App.Panel.PagePanel>,
        									App.Config.IConfigurable {
            private attachSelector : string;
        	private PanelID :string;
            private configData : {[id:string]:Object};
            /**
             * Amount of columns this panel takes up.
             * Each row has a total of 12 columns available, meaning 6 will be
             * half a screen and 3 a quarter and 12 a full screen...
             * For more info check out http://getbootstrap.com/css/#grid
             * for more info
             */
            protected panelWidth : number;
            /**
             * Constructs a new page panel
             * @param options for this view, defaults to no options
             */
            constructor(PanelID: string, options : App.View.IAppViewOptions) {
                super(options);
                this.attachSelector = ".title-panel-content";
                //Get the config for this panel
                this.setConfig(App.config['Panels'][PanelID]);
                //Set the attach point for child views
                //For each subview.. Tell Them to append to us
                if(!!options && !!options.childViews[0])
                {
                    for (var i = 0; i < options.childViews.length; ++i) {
                        options.childViews[i].appendOptions = {
                            AttachPointSelector : this.attachSelector
                        }
                    }
                }
            }
            /**
             * Find the panel and get a new one
             */
            public static resolveAndCreatePanel(panel: string){
            	//First get the instance for this ID
            	var panelInstance = App.panelDefinitions[panel];
            	if(!panelInstance){
            		console.warn("Panel Instance not valid(probs because it did not exist), did you use the propper id? PanelID: '"+panel+"' PanelInstance:", panelInstance);
            		return;
            	}
                var newPanelClone = panelInstance.createNew();
                //Does the panel have specific configs? Like defaults etc..
                if(panelInstance.hasOwnConfig()) //Will return false if no config
                {
                    newPanelClone.setConfig(panelInstance.getAllConfig());
                }
                return newPanelClone;
			}
            public hasOwnConfig() :boolean {
                return (!!this.configData);
            }
            public getAllConfig(): {[id:string]:Object} {
                return this.configData;
            }
            public getConfig(configKey:string): any {
                //No data for this..
            	if(!this.configData){
            		return false;
            	}
            	return this.configData[configKey];
            }
            public setConfig(newConfigData: {[id:string]:Object}){
            	this.configData = newConfigData;
            }
            public getPanelWidth():number {
                return this.panelWidth;
            }
            public isApplicable():boolean {
                return true;
            }
            public setData(newData :{[id:string]: Object}) : void
            {
                console.log("Setting Data",newData);
            }
            /**
             * Factory Method returning a new instance of this Page Panel
             */
            public createNew():App.Panel.PagePanel {
            	//Todo actually implement
                return this;
            }
        }
    }
}