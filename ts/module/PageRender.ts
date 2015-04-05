/// <reference path="../core/Module.ts" />
/// <reference path="../views/AppPage.ts" />
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
	    	private pages : {[id:string] : App.AppPage};
	    	/**
	    	 * Currently Active AppPage
	    	 */
	    	private activePage : App.AppPage;
	    	/**
	    	 * Creates a new PageRender Module
	    	 */
	    	private router : App.Core.Router;
	        constructor() {
	        	super();
	        }
	        appReady() : void {
	        	this.generatePages();

	        	if(Object.keys(this.pages).length > 0)
	        	{
	        		//TODO//this.navigateToPage(this.pages[0]);
	        	}

	        	this.createRouter();
                this.navigateToPage(this.pages[Object.keys(this.pages)[0]]);
			}
	        /**
	         * Generates the registred pages set in [[App.config]]
	         */
	        private generatePages() : void {
                var appPages : {[id:string] : App.AppPage} = {};
	        	var pages = this.config['Pages'];
	        	for (var i = 0; i < pages.length; ++i) {
	        		//Create easy access to our page data
	        		var pageDefintion 	: App.Page.AppPageDefinitions = pages[i];
	        		//Hold the created panels for this page
	        		var pagePanels 		: Array<App.Panel.PagePanel> = [];
                    //The IDs of panels we need
                    var panelIds        : Array<string> = pageDefintion.panels;
                    //Make sure we dont share our panels and bring in bad data.
                    for(var ii = 0; ii<panelIds.length; ii++) {
                        var panelID : string = panelIds[ii];
                        var panel : App.Panel.PagePanel =
                            App.Panel.PagePanel.resolveAndCreatePanel(panelID);
                        if(!!panel) {
                            pagePanels.push(panel); 
                        } else {
                            console.warn("Panel with id: '"+panelID+"' was not added, panel was invalid");
                        }
                    }
                    //Create the page data
                    var pageData : App.AppPageOptions = {
                            name     : pageDefintion.name,
                            panels   : pagePanels
                    }
	        		//Instantiate the page
	        		var page : App.AppPage = new App.AppPage(pageData);
                    appPages[pageDefintion.name] = page;
	        	}
	        	this.pages = appPages;
	        }
	        /**
	         * Navigate to the given page
	         * @param page the page to change to
	         */
	        private navigateToPage(page : App.AppPage) : void {

	        	if(this.activePage) { //if truthy suspend it
	        		this.activePage.suspend();
                    this.activePage.dispose(true);
                    console.log("Suspending View '"+this.activePage.cid+"'");
	        	}
	        	page.resume();
                //Rendering New Page
                console.log("Resuming/Rendering Page '"+page.cid+"'");
	        	this.activePage = page;
                this.activePage.render();
                $('#content').append(this.activePage.$el);
	        }
	        /**
	         * Create the router instance
	         */
            private createRouter(): void {
	            //Create router instance
	            this.router = new App.Core.Router();
	            //Catch all
	            this.router.route("*actions",
                                  "defaultRoute",
                                  _.bind(this.defaultRoute, this));
	            //Store all routes
	            var pages : Array<Object> = App.config["Modules"]
                                                      ["PageRender"]
                                                      ["Pages"];

	            for(var i = 0; i<pages.length; i++)
	            { 
	                var route       : string = pages[i]["routeName"];
	                var name        : string = pages[i]["name"];
	                this.router.route(route+"(/*params)",
                        name,_.bind(this.routeChanged, this, route));
	            }

	            this.router.initialize();
	            Backbone.history.start();
        	}
        	private defaultRoute(attempedRoute: any): void
        	{
        		console.log("DefaultRoute",attempedRoute);
        	}
        	private routeChanged(pageId: string, params: string):void {
        		//The params is delivered on the format /xxx/yyy/zzz, 
        		//I.E just the last part of the url. 
        		
        	}
		}
    }
}