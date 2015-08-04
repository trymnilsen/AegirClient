///<reference path="../AppView.ts" />
///<reference path="../search/searchbar/SearchBar.ts" />
/// <reference path="Menubar.html.ts" />
/// <reference path="SettingsButton.ts" />


module App.View.Menu {

    export class MenubarView extends App.View.AppView {
        /**
         * The searchfield for the menubar
         */
        private searchfield: App.View.Search.SearchBar;
        private settingsButton: App.View.Menu.SettingsButton;
        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super({});
            this.searchfield = new App.View.Search.SearchBar();
            this.settingsButton = new App.View.Menu.SettingsButton();
            this.appendView(this.searchfield);
            this.appendView(this.settingsButton);
            this.settingsButton.appendOptions = {
                AttachPointSelector: ".right-topbar"
            };
            this.searchfield.appendOptions = {
                AttachPointSelector : ".right-topbar"
            };
            this.setTemplate(App.Template.Menubar.html);
        }
    }
}