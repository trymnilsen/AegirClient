/// <reference path="../AppView.ts" />

module App {
	export module Panel {
	    export class PagePanel extends App.AppView {

	    	protected PanelData : {[id:string]: Object};
	    	/**
	    	 * Amount of columns this panel takes up.
	    	 * Each row has a total of 12 columns available, meaning 6 will be
	    	 * half a screen and 3 a quarter and 12 a full screen...
	    	 * For more info check out http://getbootstrap.com/css/#grid
	    	 * for more info
	    	 */
	    	protected panelWidth : number;

	        constructor() {
                super({});
	        }
	        getPanelWidth():number {
	        	return this.panelWidth;
	        }
	        isApplicable():boolean {
	        	return true;
	        }
	        setData(newData :{[id:string]: Object}) : void
	        {
	        	console.log("Setting Data",newData);
	        }
	        /**
	         * Factory Method returning a new instance of this Page Panel
	         */
	        createNew():App.Panel.PagePanel {
	        	return this;
	        }
	    }
	}
}