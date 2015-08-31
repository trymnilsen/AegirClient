/// <reference path="../AppView.ts" />
/// <reference path="../../core/Observable.ts" />

module App.View.Modal {

    export interface IModalView {
        getView(): App.View.AppView;
        getValidationObservable(): App.Core.Observable<Boolean>;
        getData(): { [id: string]: Object };
    }
}