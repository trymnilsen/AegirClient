/// <reference path="../Module.ts" />
/// <reference path="../typings/backbone.d.ts" />
module App{
    export class AppView extends Backbone.View
    {
        //Disposable

        private childViews: Array<AppView> = [];
        public template: (data)=> string;

        //Render
        attachNodeSelector: string;
        constructor(options: Backbone.ViewOptions){
            super(options);
        }

        //Sets up our dom structure
        render(): AppView {
            return this;
        }
        //Resets the content of our view
        resetContent(content: any): AppView {
            return this;
        }
        protected appendView(childView: AppView): void
        {
            this.childViews.push(childView);
            $(childView.attachNodeSelector,this.$el).append(childView.$el);
        }

    }
}