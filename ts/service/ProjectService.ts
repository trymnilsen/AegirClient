/// <reference path="../data/model/project/Project.ts" />
/// <reference path="../data/model/project/ProjectCollection.ts" />
/// <reference path="IService.ts" />


module App.Service {

    export class ProjectService implements App.Service.IService<App.Data.Model.Project.Project> {
        public static Collection: App.Data.Model.Project.ProjectCollection;

        public constructor() {
            if(!App.Service.ProjectService.Collection)
            {
                App.Service.ProjectService.Collection = new App.Data.Model.Project.ProjectCollection();
            }
        }
        public create(projectName: string): App.Data.Model.Project.Project {
            let newModel = new App.Data.Model.Project.Project();
            newModel.ProjectName = projectName;

            App.Service.ProjectService.Collection.create(newModel);
            return newModel;
        }
        public findById(id: any): App.Data.Model.Project.Project {
            return new App.Data.Model.Project.Project();
        }
        /**
         * Fetch a project from the server with the given name
         * @param  name                the name to look up
         * @param  successCallback     callback for success
         * @param  notFoundCallback    callback for not found
         * @param  failureCallback     callback for server error
         */
        public fetchByName(name: string,
                           successCallback?: (fetched: App.Data.Model.Project.Project)=>void,
                           notFoundCallback?: ()=> void,
                           failureCallback?: ()=> void):void
        {
            let fetchedModel: App.Data.Model.Project.Project = new App.Data.Model.Project.Project();
            let opts: Object = {
                data: $.param({ projectname: name })
            };

            //Set callbacks
            if (successCallback) { opts['success'] = successCallback; }
            if (notFoundCallback || failureCallback) {
                //Creating a "routing method" to call either not found or failure based on status code
                opts['error'] = (model, response ,options) => {
                    //Log it
                    console.log("[ProjectService::FetchByName] Error fetching project by name:",name);
                    console.group("[ProjectService::FetchByName] Args");
                    console.log("Model", model);
                    console.log("Response", response);
                    console.log("options", options);
                    console.groupEnd();
                    //Route it
                    if(response.status === 404)
                    {
                        notFoundCallback();
                    }
                    else
                    {
                        failureCallback();
                    }
                }
            }
            fetchedModel.fetch(opts);
        }
    }
}