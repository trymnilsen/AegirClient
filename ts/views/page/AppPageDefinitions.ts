module App.Page {
    export interface AppPageDefinitions {
        id            :string;
        name          :string;
        panels       ?:Array<string>;
        fullView     ?:string;
        icon          :string;
        routeName     :string;
    }
}