/// <reference path="../BaseModule.ts" />
/// <reference path="../../layout/ELayoutPosition.ts" />
/// <reference path="../../../typings/leaflet.d.ts" />


module App.View.Mod {
    export class MapModule extends App.View.BaseModule {
        private map: L.Map = null;
        constructor(){
            super(App.View.Layout.ELayoutPosition.DOWNCENTER, "Map");
        }
        public postRender(): App.View.AppView {
            super.postRender();
            this.map = L.map(this.el).setView([51.505, -0.09], 13);

            // create the tile layer with correct attribution
            var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
            var osm = new L.TileLayer(osmUrl, { attribution: osmAttrib});

            this.map.addLayer(osm);
            return this;
        }
    }
}

