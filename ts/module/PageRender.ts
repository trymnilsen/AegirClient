/// <reference path="../application/Module.ts" />
/// <reference path="../views/AppPage.ts" />
/// <reference path="../views/panel/PagePanel.ts" />

module App {
	export module Modules {
		/**
		 * Class Responsible for displaying the propper page
		 */
	    export class PageRender extends App.Module{

	    	/**
	    	 * The pages this PageRender can display
	    	 */
	    	private pages : Array<App.AppPage>;
	    	/**
	    	 * Currently Active AppPage
	    	 */
	    	private activePage : App.AppPage;
	    	/**
	    	 * Creates a new PageRender Module
	    	 */
	        constructor() {
	        	super();
	        }
	        appReady() : void {
	        	this.generatePages();

	        	if(this.pages.length > 0)
	        	{
	        		this.navigateToPage(this.pages[0]);
	        	}
	        }
	        /**
	         * Generates the registred pages set in [[App.config]]
	         */
	        private generatePages() : void {
	        	var pages = this.config['pages'];
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
	        }
	        private navigateToPage(page : string|App.AppPage) : void {

	        	var targetPage : App.AppPage;
	        	if(this.activePage) { //if truthy suspend it
	        		this.activePage.suspend();
	        	}
	        	targetPage.resume();
	        	this.activePage = targetPage;
	        }
		}
    }
}