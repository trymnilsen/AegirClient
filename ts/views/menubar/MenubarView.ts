///<reference path="../AppView.ts" />
///<reference path="../search/searchbar/SearchBar.ts" />
module App.View.Menu {

    export class MenubarView extends App.View.AppView {
        /**
         * The searchfield for the menubar
         */
        private searchfield: App.View.Search.SearchBar;
        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super({});
            this.searchfield = new App.View.Search.SearchBar();
            this.appendView(this.searchfield);
        }
    }
}