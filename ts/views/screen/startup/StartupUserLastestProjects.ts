///<reference path="../../AppView.ts" />
/// <reference path="StartupPanel.html.ts" />
/// <reference path="../../layout/gridlist/GridList.ts" />
/// <reference path="../../../data/model/project/Project.ts" />
/// <reference path="../../project/ProjectInformationCardView.ts" />

module App.View.Startup {

    export class StartupUserLatestProjects extends App.View.AppView {

        /**
         * Instantiates a new instance of the menu bar
         */
        constructor() {
            //Init parent
            super({backboneOptions : {
                className: "startup-user-latest-projects"
            }});
            this.setTemplate(App.Template.StartupPanel.html);
            let projectCards: Array<App.View.Project.ProjectInformationCardView> =
                App.View.Project.ProjectInformationCardView.GetCardsForProjects(this.getLatestProjects());
            let gridList = new App.View.Layout.Grid.GridList(projectCards, 2, {
                padding: "20px",
                margin: "20px",
                background: "#EAEAEA"
            });
            //Todo Implement this with local storage
            this.appendView(gridList);

            this.context.resetData({
                "title": "Latest Projects"
            });
        }

        private getLatestProjects(): Array<App.Data.Model.Project.Project> {
            //Making up some dummy projects
            let projects = [
                new App.Data.Model.Project.Project({
                    "LastModifiedDate" : "2015-09-05T21:31:01.1312862+02:00",
                    "CreatedDate" : "2015-09-05T21:31:01.1312862+02:00",
                    "ProjectName" : "SimOne",
                    "VesselName"  : "Oasis Of the Land",
                    "VesselLength": "250",
                    "VesselWidth" : "60",
                    "Id"          : "7b6d159c-d515-40d2-a1fd-75ebd9db92b3",
                    "ProjectDescription" : "Testing Stuff with some in this project bluurg",
                    "NumOfOutputs": "5",
                    "isSimulating": "True"
                }),
                new App.Data.Model.Project.Project({
                    "LastModifiedDate" : "2015-09-05T21:31:01.1312862+02:00",
                    "CreatedDate" : "2015-09-05T21:31:01.1312862+02:00",
                    "ProjectName" : "SimOne",
                    "VesselName"  : "Oasis Of the Land",
                    "VesselLength": "250",
                    "VesselWidth" : "60",
                    "Id"          : "7b6d159c-d515-40d2-a1fd-75ebd9db92b3",
                    "ProjectDescription" : "Testing Stuff with some in this project bluurg",
                    "NumOfOutputs": "5",
                    "isSimulating": "True"
                }),
                new App.Data.Model.Project.Project({
                    "LastModifiedDate" : "2015-09-05T21:31:01.1312862+02:00",
                    "CreatedDate" : "2015-09-05T21:31:01.1312862+02:00",
                    "ProjectName" : "SimOne",
                    "VesselName"  : "Oasis Of the Land",
                    "VesselLength": "250",
                    "VesselWidth" : "60",
                    "Id"          : "7b6d159c-d515-40d2-a1fd-75ebd9db92b3",
                    "ProjectDescription" : "Testing Stuff with some in this project bluurg",
                    "NumOfOutputs": "5",
                    "isSimulating": "True"
                })
            ];
            return projects;
        }
    }
}