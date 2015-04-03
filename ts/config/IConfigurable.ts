module App {
    export module Config {
        export interface IConfigurable  {
            hasOwnConfig():boolean;
            setConfig(configData : {[id:string]:Object});
            getConfig(configKey : string) : any;
            getAllConfig(): {[id:string]:Object};
        }
    }
}