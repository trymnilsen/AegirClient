///<reference path="../../AppView.ts" />
///<reference path="NewProjectView.html.ts" />
/// <reference path="../../../typings/selectize.d.ts" />
/// <reference path="../../../context/project/NewProjectContext.ts" />
/// <reference path="NewProjectCardWarning.ts" />
/// <reference path="../IModalView.ts" />
/// <reference path="../../../core/Observable.ts" />

module App.View.Project {

    enum FormState {
        NORMAL,
        LOADING,
        EXISTS,
        NEW
    }
    export class NewProjectView extends App.View.AppView implements App.View.Modal.IModalView {

        private projectName: string = "";
        private projectExistingView: App.View.AppView;
        private validationObservable: App.Core.Observable<Boolean>;
        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super({
                context: new App.Context.NewProjectContext(),
                backboneOptions: {
                    className: "new-project-view"
                }
            });

            this.validationObservable = new App.Core.Observable<Boolean>();

            this.setTemplate(App.Template.NewProjectView.html);
            this.events = <any> {
                "blur #newProjectNameInput": this.projectNameEntered
            };

            this.context.on("PROJECTLOADED", (project) => {
                console.log('projectloadedevent', project);

                if(this.projectExistingView)
                {
                    this.removeChildView(this.projectExistingView);
                    this.projectExistingView = null;
                }

                if(project)
                {
                    this.setFormNameState(FormState.EXISTS);
                    this.showProjectInformation(project);
                    this.validationObservable.notify(false);
                }
                else
                {
                    this.setFormNameState(FormState.NEW);
                    this.validationObservable.notify(true);
                }
            });
        }
        public render(): App.View.AppView {
            super.render();
            // let element: JQuery = $('#select-beast', this.$el);
            // element.selectize({
            //     create: true,
            //     sortField: 'text'
            // });
            this.setFormNameState(FormState.NORMAL);
            return this;
        }

        private projectNameEntered(): void {
            let inputEl: JQuery = $('#newProjectNameInput', this.$el);
            let projectName: string = inputEl.val();
            if(projectName.length > 0 && projectName !== this.projectName)
            {
                console.log("Checking if project exists", projectName);
                (<App.Context.NewProjectContext>this.context).checkProjectName(projectName);
                this.setFormNameState(FormState.LOADING);
            }
            this.projectName = projectName;
        }

        private showProjectInformation(project: App.Data.Model.Project.Project) {
            let projectInformation = new App.View.Project.NewProjectCardWarning(project);
            projectInformation.appendOptions = {
                AttachPointSelector: ".project-card-wrapper"
            };
            this.appendView(projectInformation, true);
            this.projectExistingView = projectInformation;
        }
        private setFormNameState(state: FormState)
        {
            let iconClasses: string = "fa fa-fx new-project-name ";
            let inputLabelWrapperClasses: string = "form-group new-project-name-input ";

            switch(state)
            {
                case FormState.EXISTS:
                    iconClasses += 'fa-exclamation-triangle';
                    inputLabelWrapperClasses+= 'has-warning';
                    break;
                case FormState.LOADING:
                    iconClasses += 'fa-spinner fa-pulse';
                    break;
                case FormState.NORMAL:
                    iconClasses += 'hiddenIcon';
                    break;
                case FormState.NEW:
                    iconClasses += 'fa-check';
                    inputLabelWrapperClasses +="has-success"
            }

            let icon: JQuery = $('.new-project-name-input i.fa', this.$el);
            let wrapper: JQuery = $('div.form-group.new-project-name-input', this.$el);

            icon.removeClass();
            wrapper.removeClass();

            icon.addClass(iconClasses);
            wrapper.addClass(inputLabelWrapperClasses);
        }
        public getView(): App.View.AppView {
            return this;
        }
        public getValidationObservable(): App.Core.Observable<Boolean> {
            return this.validationObservable;
        }
        public getData(): { [id: string]: Object } {
            return { "ProjectName": this.projectName };
        }
    }
}