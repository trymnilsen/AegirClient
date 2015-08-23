///<reference path="../AppView.ts" />
/// <reference path="BaseModal.html.ts" />
/// <reference path="../../typings/bootstrap.d.ts" />


module App.View.Modal {

    export interface ModalCloseData {

    }

    export class BaseModal {

        private contentView: App.View.AppView;
        private modalId: string;
        private modalElement: JQuery;
        private closeInfo: (closeInfo: Object) => void;
        private title: string;
        private okButtonText: string;
        private cancelButtonText: string;
        /**
         * Instantiates a new instance of the menu bar
         */
        constructor(title: string,
                    content: App.View.AppView,
                    close: (closeInfo: Object) => void,
                    okButtonText: string = "Ok",
                    cancelButtonText: string= "Cancel") {
            this.okButtonText = okButtonText;
            this.cancelButtonText = cancelButtonText;
            this.modalId = "modal-" + content.cid;
            this.title = title;
            this.contentView = content;
            this.closeInfo = close;
        }
        /**
         * Adds the given content to the dom and returns the JQUERY ref of the
         * root node
         * @return root node
         */
        render(): JQuery {
            let modalElement: JQuery = $(App.Template.BaseModal.html);
            this.modalElement = modalElement;
            //Add the modal layout html
            $('#modals-container').append(modalElement);
            this.populateModalData();
            //Add content
            let contentRoot: JQuery = $('.modal-body', this.modalElement);
            //set an id, if none is supplied we use the content views client id
            //Render contentview
            this.contentView.render();
            contentRoot.append(this.contentView.$el);
            this.contentView.postRender();
            //Set up close event
            this.modalElement.on('hidden.bs.modal', (event) => { this.disposeModal(event); });
            return modalElement;
        }
        public show(): void {
            this.modalElement.modal('show');
        }
        private populateModalData(): void {
            $('.modal-title').append(this.title);
            this.modalElement.attr("id", this.modalId);
            $('.modal-footer .btn.btn-default', this.modalElement).html(this.cancelButtonText);
            $('.modal-footer .btn.btn-primary', this.modalElement).html(this.okButtonText);
        }
        private disposeModal(event): void {
            this.modalElement.off();
            this.closeInfo(event);
            this.contentView.dispose();
            $('#modals-container').remove(this.modalId);
        }
    }
}