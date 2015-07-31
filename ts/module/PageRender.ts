/// <reference path="../core/Module.ts" />
/// <reference path="../views/AppPage.ts" />
/// <reference path="../views/page/PanelPage.ts" />
/// <reference path="../views/panel/PagePanel.ts" />
/// <reference path="../core/Router.ts" />
/// <reference path="../messages/Message.ts" />
/// <reference path="../messages/AppMessenger.ts" />



module App {
	export module Modules {
		/**
		 * Class Responsible for displaying the propper page
		 */
	    export class PageRender extends App.Module{

	    	/**
	    	 * The pages this PageRender can display
	    	 */
	    	private pages : Array<App.Page.AppPage>;
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

                //this.navigateToPage(this.pages[Object.keys(this.pages)[0]]);
                this.context.getMessengerInstance().subscribe(
                    App.constants["MESSAGES"]["ROUTECHANGED"],
                    _.bind(this.onRouteChanged,this)
                );
                //
			}
            private onRouteChanged(message: App.Messaging.Message) {
                console.log("[PAGERENDER:onRouteChanged] ",message);
                var pageToChangeTo: App.Page.AppPage = this.resolvePageByRoute(<string>message.getData()["page"]);
                this.navigateToPage(pageToChangeTo);
            }
	        /**
	         * Generates the registred pages set in [[App.config]]
	         */
	        private generatePages() : void {
                var appPages : Array<App.Page.AppPage> = [];
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
                        console.error("[PAGERENDER:generatePages] Pagedefinition for: '"+pageDefintion.id+"' not valid, neither fullView or panels present");
                    }
                    page.setPageData(pageDefintion);
                    appPages.push(page);
	        	}
	        	this.pages = appPages;
	        }
            private createPanelPage(pageDefintion: App.Page.AppPageDefinitions) : App.Page.PanelPage {
                console.log("[PAGERENDER:createPanelPage] Creating PanelPage for id: '"+pageDefintion.id+"'");
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
                //Instantiate the page
                var page : App.Page.PanelPage = new App.Page.PanelPage(pagePanels);
                return page;
            }
            private createFullViewPage(pageDefintion: App.Page.AppPageDefinitions) : App.Page.FullViewPage {
                ///A fullview page is simply a "manual page", you get a div with 100% 100% width height
                console.log("[PAGERENDER:createFullViewPage] Creating FullView Page for: '"+pageDefintion.id+"'");
                return new App.Page.FullViewPage(pageDefintion.fullView);
            }
            private resolvePageByRoute(route: string): App.Page.AppPage
            {
                for (var i = 0; i < this.pages.length; ++i) {
                    if(this.pages[i].PageRoute === route) {
                        return this.pages[i];
                    }
                }
                return null;
            }
	        /**
	         * Navigate to the given page
	         * @param page the page to change to
	         */
	        private navigateToPage(page : App.Page.AppPage) : void {
                var appContainer: JQuery = $('.app-container');
	        	if(this.activePage) { //if truthy suspend it
	        		this.activePage.suspend();
                    this.activePage.dispose(true);
                    console.log("[PAGERENDER:Navigate]Suspending Page '"+this.activePage.PageId+"' with backbone cid:'"+this.activePage.cid+"'");
                    appContainer.empty();
	        	}
	        	page.resume();
                //Rendering New Page
                this.activePage = page;
                this.activePage.render();
                console.log("[PAGERENDER:Navigate]Resuming/Rendering Page '"+this.activePage.PageId+"' with backbone cid:'"+this.activePage.cid+"'");
                appContainer.append(this.activePage.$el);

                //if fullview broadcast that we have the fullview set up
                if(page.PageType === App.Page.EPageType.FULLVIEW) {
                    var message: App.Messaging.Message = new App.Messaging.Message(
                        App.constants["MESSAGES"]["FULLVIEWREADY"],
                        page
                    );
                    this.context.getMessengerInstance().SendMessage(message);
                }
	        }
		}
    }
}