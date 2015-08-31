///<reference path="../../AppView.ts" />
/// <reference path="NewProjectVesselSelect.html.ts" />

module App.View.Project {

    export class NewProjectVesselSelect extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super({});
            this.setTemplate(App.Template.NewProjectVesselSelect.html);
            this.appendOptions = {
                AttachPointSelector : ".vessel-select"
            }
        }
        public render(): App.View.AppView {
            super.render();
            let selectElement: JQuery = $('#selectVesselConfiguration', this.$el);
            selectElement.selectize({
                create: true,
                sortField: 'text'
            });
            return this;
        }
    }
}