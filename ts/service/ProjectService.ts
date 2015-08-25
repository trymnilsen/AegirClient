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
        public create(projectName: string, veselName:string, length: number, width: number): App.Data.Model.Project.Project {
            let newModel = new App.Data.Model.Project.Project();
            newModel.ProjectName = projectName;
            newModel.VesselName = veselName;
            newModel.VesselLength = length;
            newModel.VesselWidth = width;

            App.Service.ProjectService.Collection.create(newModel);
            return newModel;
        }
        public findById(id: any): App.Data.Model.Project.Project {
            return new App.Data.Model.Project.Project();
        }
    }
}