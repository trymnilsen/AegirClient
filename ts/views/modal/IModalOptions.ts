/// <reference path="../AppView.ts" />

module App.View.Modal {

    export interface IModalOptions {
        title: string;
        okButtonText: string;
        cancelButtonText: string;
        
        closeCallback?: (closeInfo: Object) => void;
    }
}