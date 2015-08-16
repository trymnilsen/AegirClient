/// <reference path="../BaseModule.ts" />
/// <reference path="../../layout/ELayoutPosition.ts" />
/// <reference path="../../../typings/dat-gui.d.ts" />

module App.View.Mod {
    export class EditPropertiesModule extends App.View.BaseModule {

        private gui: dat.GUI;

         constructor(){

            super(App.View.Layout.ELayoutPosition.RIGHTCENTER, "Properties");
            this.gui = new dat.GUI({ autoPlace: false });

            var parameters =
            {
                a: 200, // numeric
                b: 200, // numeric slider
                c: "Hello, GUI!", // string
                d: false, // boolean (checkbox)
                e: "#ff8800", // color (hex)
                f: function() { alert("Hello!") },
                g: function() { alert( parameters.c ) },
                v : 0,    // dummy value, only type is important
                w: "...", // dummy value, only type is important
                x: 0, y: 0, z: 0
            };
            // gui.add( parameters )
            this.gui.add( parameters, 'a' ).name('Number');
            this.gui.add( parameters, 'b' ).min(128).max(256).step(16).name('Slider');
            this.gui.add( parameters, 'c' ).name('String');
            this.gui.add( parameters, 'd' ).name('Boolean');

            this.gui.addColor( parameters, 'e' ).name('Color');

            var numberList = [1, 2, 3];
            this.gui.add( parameters, 'v', numberList ).name('List');

            var stringList = ["One", "Two", "Three"];
            this.gui.add( parameters, 'w', stringList ).name('List');

            this.gui.add( parameters, 'f' ).name('Say "Hello!"');
            this.gui.add( parameters, 'g' ).name("Alert Message");

            var folder1 = this.gui.addFolder('Coordinates');
            folder1.add( parameters, 'x' );
            folder1.add( parameters, 'y' );
            folder1.close();
            this.gui.open();
         }
         public postRender():App.View.AppView {
             this.$el.append(this.gui.domElement);
             return this;
         }
    }
}