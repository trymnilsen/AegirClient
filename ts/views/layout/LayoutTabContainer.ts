/// <reference path="../../views/module/BaseModule.ts" />
/// <reference path="../menubar/MenubarView.ts" />
/// <reference path="../AppView.ts" />
/// <reference path="LayoutTab.ts" />
/// <reference path="LayoutTabContainer.html.ts" />


module App.View.Layout {

    export class LayoutTabContainer extends App.View.AppView {
        /**
         * The tabs used in thos tabcontainer
         */
        private tabs: Array<App.View.Layout.LayoutTab> = [];
        /**
         * Instantiates a new instance of layout tab container
         */
        constructor() {
            //Init parent
            super({});
            this.events = <any>{
                "click .layout-tab-container": (event) => { this.tabPressed(event);}
            }

            this.setTemplate(App.Template.LayoutTabContainer.html);
        }
        /**
         * Creates and returns a new tab added to this container with the given name
         * @param          title of this tab
         * @return         newly created tab
         */
        public getNewTab(name: string): App.View.Layout.LayoutTab {
            let newTab = new App.View.Layout.LayoutTab();
            this.tabs.push(newTab);
            newTab.Title = name;

            return newTab;
        }
        public render(): App.View.AppView {
            this.undelegateEvents();
            this.$el.empty();

            var renderedContent: string = this.template({
                tabs: this.tabs
            });
            this.$el.html(renderedContent);
            this.tabs[0].view.render();
            $('.layout-container-active-tab', this.$el).append(this.tabs[0].view.el);
            return this;
        }
        public postRender(): App.View.AppView {
            //For now we only have one view
            this.tabs[0].view.postRender();
            return this;
        }
        private tabPressed(event) {

        }
    }
}