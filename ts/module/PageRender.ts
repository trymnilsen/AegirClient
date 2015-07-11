/// <reference path="../core/Module.ts" />
/// <reference path="../views/AppPage.ts" />
/// <reference path="../views/page/PanelPage.ts" />
/// <reference path="../views/panel/PagePanel.ts" />
/// <reference path="../core/Router.ts" />

module App {
	export module Modules {
		/**
		 * Class Responsible for displaying the propper page
		 */
	    export class PageRender extends App.Module{

	    	/**
	    	 * The pages this PageRender can display
	    	 */
	    	private pages : {[id:string] : App.Page.AppPage};
	    	/**
	    	 * Currently Active AppPage
	    	 */
	    	private activePage : App.Page.AppPage;

	        constructor() {
	        	super();
	        }
	        appReady() : void {
	        	this.generatePages();

	        	if(!!this.pages && Object.keys(this.pages).length > 0)
	        	{
	        		//TODO//this.navigateToPage(this.pages[0]);
	        	}

                this.navigateToPage(this.pages[Object.keys(this.pages)[0]]);
			}
	        /**
	         * Generates the registred pages set in [[App.config]]
	         */
	        private generatePages() : void {
                var appPages : {[id:string] : App.Page.AppPage} = {};
	        	var pages = this.config['Pages'];
	        	for (var i = 0; i < pages.length; ++i) {
	        		//Create easy access to our page data
	        		var pageDefintion 	: App.Page.AppPageDefinitions = pages[i];
                    var page : App.Page.AppPage = null;
                    //Create page
                    //If panels are defined, it will take presidence
                    if(!!pageDefintion.panels) {
                        page = this.createPanelPage(pageDefintion);
                    } else if(!!pageDefintion.fullView) {
                        page = this.createFullViewPage(pageDefintion);
                    } else {
                        console.error("[PAGERENDER:generatePages] Pagedefinition for "+pageDefintion.id+" not valid, neither fullView or panels present");
                    }
                    appPages[pageDefintion.id] = page;
	        	}
	        	this.pages = appPages;
	        }
            private createPanelPage(pageDefintion: App.Page.AppPageDefinitions) : App.Page.PanelPage {
                //Hold the created panels for this page
                var pagePanels         : Array<App.Panel.PagePanel> = [];

                var panelIds        : Array<string> = pageDefintion.panels;
                //Make sure we dont share our panels and bring in bad data.
                for(var ii = 0; ii<panelIds.length; ii++) {
                    var panelID : string = panelIds[ii];
                    var panel : App.Panel.PagePanel =
                        App.Panel.PagePanel.resolveAndCreatePanel(panelID);
                    if(!!panel) {
                        pagePanels.push(panel);
                    } else {
                        console.warn("[PAGERENDER:createPanelPage]Panel with id: '"+panelID+"' was not added, panel was invalid");
                    }
                }
                //Create the page data
                var pageData : App.Page.PanelPageOptions = {
                        name     : pageDefintion.name,
                        panels   : pagePanels
                }
                //Instantiate the page
                var page : App.Page.PanelPage = new App.Page.PanelPage(pageData);
                return page;
            }
            private createFullViewPage(pageDefintion: App.Page.AppPageDefinitions) : App.Page.FullViewPage {
               var fullViewPage = 
            }
	        /**
	         * Navigate to the given page
	         * @param page the page to change to
	         */
	        private navigateToPage(page : App.Page.AppPage) : void {

	        	if(this.activePage) { //if truthy suspend it
	        		this.activePage.suspend();
                    this.activePage.dispose(true);
                    console.log("[PAGERENDER:Navigate]Suspending View '"+this.activePage.cid+"'");
	        	}
	        	page.resume();
                //Rendering New Page
                console.log("[PAGERENDER:Navigate]Resuming/Rendering Page '"+page.cid+"'");
	        	this.activePage = page;
                this.activePage.render();
                $('.container').append(this.activePage.$el);
	        }
		}
    }
}