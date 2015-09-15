/// <reference path="../../AppView.ts" />

module App.View.Screen {
    export interface IScreenView {
        getView(): App.View.AppView;
        suspend(): void;
        resume(): void;
        needsInit(): boolean;
        initScreen(): void;
        getScreenTitle(): string;
    }
}