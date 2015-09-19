/// <reference path="../../AppView.ts" />
/// <reference path="ScreenTabData.ts" />

module App.View.Screen {
    export interface IScreenView {
        getView(): App.View.AppView;
        suspend(): void;
        resume(): void;
        needsInit(): boolean;
        initScreen(): void;
        getScreenTab(): App.View.Screen.ScreenTabData;
    }
}