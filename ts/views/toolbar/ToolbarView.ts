///<reference path="../AppView.ts" />
/// <reference path="ToolbarView.html.ts" />
/// <reference path="../modal/project/NewProjectView" />
/// <reference path="../modal/BaseModal.ts" />
/// <reference path="../../typings/sweetalert.d.ts" />
/// <reference path="../../service/ProjectService.ts" />


module App.View.Toolbar {

    export class ToolbarView extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super({backboneOptions : {
                className: "toolbar"
            }});
            this.setTemplate(App.Template.ToolbarView.html);

            this.events = <any> {
                "click .fa-file-o" : this.newProjectClick,
                "click .fa-trash-o" : this.deleteProject
            }
        }
        private newProjectClick(): void {
            let content: App.View.Project.NewProjectView = new App.View.Project.NewProjectView();
            let modal: App.View.Modal.BaseModal = new App.View.Modal.BaseModal({
                content : content,
                successText : "Create Project",
                onSuccess: () => { this.onNewProjectSuccess(); },
                title: "Create New Project"
            });

            modal.render();
            modal.show();
        }
        private onNewProjectSuccess(): void {
            let projService: App.Service.ProjectService = new App.Service.ProjectService();
            let result = projService.create("FoobarProject", "FshipName", 300, 60);
            console.log("New Project", result);
        }
        private deleteProject(): void {
            sweetAlert({
                title: "Are you sure?",
                text: "You will not be able to recover this project!",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
                function(isConfirm) {
                    if (isConfirm) {
                        swal("Deleted!", "Your project has been deleted.", "success");
                    } else {
                        swal("Cancelled", "Your project is safe :)", "error");
                    }
                });
        }
    }
}