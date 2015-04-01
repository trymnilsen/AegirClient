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

	        	if(this.pages.length > 0)
	        	{
	        		//TODO//this.navigateToPage(this.pages[0]);
	        	}

	        	this.createRouter();
			}
	        /**
	         * Generates the registred pages set in [[App.config]]
	         */
	        private generatePages() : void {
	        	var pages = this.config['Pages'];
	        	for (var i = 0; i < pages.length; ++i) {
	        		//Create easy access to our page data
	        		var pageDefintion 	: App.Page.AppPageDefinitions = pages[i];
	        		//Create the panels needed
	        		var pagePanels 		: Array<App.Panel.PagePanel>;
	        		//Create the page data
	        		var pageData 		: App.AppPageOptions = {
	        			name : pageDefintion.name,
	        			panels: pagePanels
	        		}
	        		//Instantiate the page
	        		var page : App.AppPage = new App.AppPage(pageData);
	        	}
	        	this.pages = pages;
	        }
	        /**
	         * Navigate to the given page
	         * @param page the page to change to
	         */
	        private navigateToPage(page : App.AppPage) : void {

	        	if(this.activePage) { //if truthy suspend it
	        		this.activePage.suspend();
	        	}
	        	page.resume();
	        	this.activePage = page;
	        }
	        /**
	         * Create the router instance
	         */
            private createRouter(): void {
	            //Create router instance
	            this.router = new App.Core.Router();
	            //Catch all
	            this.router.route("*actions","defaultRoute",_.bind(this.defaultRoute, this));
	            //Store all routes
	            var pages : Array<Object> = App.config["Modules"]["PageRender"]["Pages"];
	            for(var i = 0; i<pages.length; i++)
	            { 
	                var route       : string = pages[i]["routeName"];
	                var name        : string = pages[i]["name"];
	                this.router.route(route+"(/*params)",name,_.bind(this.routeChanged, this, route));
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