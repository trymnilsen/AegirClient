/// <reference path="../AppView.ts" />

module App {
	export module Panel {
	    export class PagePanel extends App.AppView {

	    	protected PanelData : {[id:string]: Object};

	        constructor() {
                super({});
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