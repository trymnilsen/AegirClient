///<reference path="../AppView.ts" />
/// <reference path="BaseModal.html.ts" />
/// <reference path="../../typings/bootstrap.d.ts" />
/// <reference path="IModalView.ts" />
/// <reference path="../../core/Observable.ts" />

module App.View.Modal {

    export interface ModalCloseData {
        title: string;
        content: App.View.Modal.IModalView;
        onSuccess?: (data: { [id: string] : Object }) => void;
        onClose?: () => void;
        successText?: string;
        cancelText?: string;
    }

    export class BaseModal {

        private modalId: string;
        private modalElement: JQuery;
        private onClose: () => void;
        private onSuccess: (data: {[id:string] : Object}) => void;
        private title: string;
        private okText: string;
        private cancelText: string;
        private modalContent: App.View.Modal.IModalView;
        /**
         * Instantiates a new instance of the menu bar
         */
        constructor(opts: ModalCloseData) {
            this.okText = opts.successText ? opts.successText : "Ok";
            this.cancelText = opts.cancelText ? opts.cancelText : "Cancel";
            this.modalId = "modal-" + opts.content.getView().cid;
            this.onClose = opts.onClose ? opts.onClose : null;
            this.onSuccess = opts.onSuccess ? opts.onSuccess : null;
            this.title = opts.title;
            this.modalContent = opts.content;

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
            this.modalContent.getView().render();
            contentRoot.append(this.modalContent.getView().$el);
            this.modalContent.getView().postRender();
            //Set up events
            this.modalElement.on('hidden.bs.modal', (event) => { this.disposeModal(event); });
            let successButtton = $('.success', this.modalElement);
            successButtton.on('click', () => { this.successModal(); });
            //Listen for validation changes
            this.modalContent.getValidationObservable().listen((bool) => {
                this.modalContentInvalid(bool);
            });
            //Start invalid
            this.modalContentInvalid(false);
            return modalElement;
        }
        public show(): void {
            this.modalElement.modal('show');
        }
        private modalContentInvalid(isValid: Boolean): void {
            let successButtton = $('.success', this.modalElement);
            if(isValid)
            {
                successButtton.removeAttr("disabled");
                successButtton.removeClass("btn-warning");
                successButtton.addClass("btn-primary");
            }
            else
            {
                successButtton.attr("disabled","true");
                successButtton.removeClass("btn-primary");
                successButtton.addClass("btn-warning");
            }
        }
        private populateModalData(): void {
            $('.modal-title').append(this.title);
            this.modalElement.attr("id", this.modalId);
            $('.modal-footer .btn.btn-default', this.modalElement).html(this.cancelText);
            $('.modal-footer .btn.btn-primary', this.modalElement).html(this.okText);
        }
        private successModal():void {
            console.log("On Modal Success pressed");
            if(this.onSuccess) {
                console.log("Calling success callback");
                this.onSuccess(this.modalContent.getData());
            }
        }
        private disposeModal(event): void {
            this.modalElement.off();
            this.modalContent.getValidationObservable().removeListeners();
            $('button.btn.btn-primary.success', this.modalElement).off();
            if(this.onClose)
            {
                this.onClose();
            }
            this.modalContent.getView().dispose();
            $('#modals-container').remove(this.modalId);
        }
    }
}