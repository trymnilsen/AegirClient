///<reference path="../AppView.ts" />
///<reference path="../search/searchbar/SearchBar.ts" />
/// <reference path="Menubar.html.ts" />
/// <reference path="SettingsButton.ts" />
/// <reference path="../playback/PlaybackView.ts" />
/// <reference path="../../messenger/AppMessenger.ts" />
/// <reference path="../../messenger/messages/Notification.ts" />
/// <reference path="../../config/Constants.ts" />
/// <reference path="../../typings/toastr.d.ts" />
/// <reference path="../toolbar/ToolbarView.ts" />

module App.View.Menu {

    export class MenubarView extends App.View.AppView {
        /**
         * The searchfield for the menubar
         */
        private searchfield: App.View.Search.SearchBar;
        private settingsButton: App.View.Menu.SettingsButton;
        private playbackControls: App.View.Playback.PlaybackView;
        private toolbarUi: App.View.Toolbar.ToolbarView;
        private messenger: App.Messaging.AppMessenger;
        /**
         * Instantiates a new instance of the menu bar
         */
        constructor(messenger: App.Messaging.AppMessenger) {
            //Init parent
            super({});
            this.searchfield = new App.View.Search.SearchBar();
            this.settingsButton = new App.View.Menu.SettingsButton();
            this.playbackControls = new App.View.Playback.PlaybackView();
            this.toolbarUi = new App.View.Toolbar.ToolbarView();
            this.appendView(this.searchfield);
            this.appendView(this.settingsButton);
            this.appendView(this.playbackControls);
            this.appendView(this.toolbarUi);
            this.toolbarUi.appendOptions = {
                AttachPointSelector: ".left-topbar"
            };
            this.playbackControls.appendOptions = {
                AttachPointSelector: ".middle-topbar"
            };
            this.settingsButton.appendOptions = {
                AttachPointSelector: ".right-topbar"
            };
            this.searchfield.appendOptions = {
                AttachPointSelector: ".right-topbar"
            };
            this.setTemplate(App.Template.Menubar.html);

            //Messaging Setup
            this.messenger = messenger;
            this.messenger.on(App.constants['MESSAGES']['NOTIFICATION'], this.showNotification, this);
        }
        private showNotification(event)
        {
            toastr.info("foobar");
            console.log(event);
        }
    }
}