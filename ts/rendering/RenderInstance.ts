/// <reference path="../typings/jquery.d.ts" />
/// <reference path="../typings/three.d.ts" />
/// <reference path="../typings/three-orbitcontrols.d.ts" />
/// <reference path="../typings/stats.d.ts" />
/// <reference path="../typings/three-canvasrenderer.d.ts" />
/// <reference path="../typings/detector.d.ts" />
/// <reference path="../typings/dat-gui.d.ts" />


module App.Rendering {
    export class RenderInstance {
        private container: JQuery;
        private scene: THREE.Scene;
        private camera: THREE.Camera;
        private renderer: THREE.Renderer;
        private controls: THREE.OrbitControls;
        private stats: Stats;
        private mesh: THREE.Mesh;
        private gui: dat.GUI;
        public isRunning: boolean;
        constructor(attachPoint: JQuery) {
            this.container = attachPoint;
        }
        public init(): void {
            // this.scene
            this.scene = new THREE.Scene();
            // CAMERA
            var SCREEN_WIDTH = this.container.width();
            var SCREEN_HEIGHT = this.container.height();
            console.log(SCREEN_WIDTH, SCREEN_HEIGHT);
            console.log("Inner", this.container.innerWidth(), this.container.innerHeight());
            console.log("outer", this.container.outerWidth(), this.container.outerHeight());
            var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
            this.camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
            this.scene.add(this.camera);
            this.camera.position.set(0,150,400);
            this.camera.lookAt(this.scene.position);
            // RENDERER
            if (Detector.webgl)
                this.renderer = new THREE.WebGLRenderer( {antialias:true} );
            else
                this.renderer = new THREE.CanvasRenderer();
            this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
            // this.controls
            this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
            // STATS
            this.stats = new Stats();
            this.stats.domElement.style.position = 'absolute';
            this.stats.domElement.style.bottom = '0px';
            this.stats.domElement.style.zIndex = '100';
            this.container.append( this.stats.domElement );
            // LIGHT


            var light = new THREE.PointLight(0xffffff);
            light.position.set(100,250,100);
            this.scene.add(light);
            /*
            // FLOOR
            var floorTexture = new THREE.ImageUtils.loadTexture( 'images/checkerboard.jpg' );
            floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
            floorTexture.repeat.set( 10, 10 );
            var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
            var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
            var floor = new THREE.Mesh(floorGeometry, floorMaterial);
            floor.position.y = -0.5;
            floor.rotation.x = Math.PI / 2;
            scene.add(floor);
            */
            // SKYBOX
            var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
            var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff, side: THREE.BackSide } );
            var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
            this.scene.add(skyBox);

            ////////////
            // CUSTOM //
            ////////////

            var geometry = new THREE.SphereGeometry( 30, 32, 16 );
            var material = new THREE.MeshLambertMaterial( { color: 0x000088 } );
            this.mesh = new THREE.Mesh( geometry, material );
            this.mesh.position.set(40,40,40);
            this.scene.add(this.mesh);

            var axes = new THREE.AxisHelper(50);
            axes.position = this.mesh.position;
            this.scene.add(axes);

            var gridXZ = new THREE.GridHelper(100, 10);
            gridXZ.setColors( new THREE.Color(0x006600).getHex(), new THREE.Color(0x006600).getHex() );
            gridXZ.position.set( 100,0,100 );
            this.scene.add(gridXZ);

            var gridXY = new THREE.GridHelper(100, 10);
            gridXY.position.set( 100,100,0 );
            gridXY.rotation.x = Math.PI/2;
            gridXY.setColors( new THREE.Color(0x000066).getHex(), new THREE.Color(0x000066).getHex() );
            this.scene.add(gridXY);

            var gridYZ = new THREE.GridHelper(100, 10);
            gridYZ.position.set( 0,100,100 );
            gridYZ.rotation.z = Math.PI/2;
            gridYZ.setColors( new THREE.Color(0x660000).getHex(), new THREE.Color(0x660000).getHex() );
            this.scene.add(gridYZ);

            // direction (normalized), origin, length, color(hex)
            var origin = new THREE.Vector3(50,100,50);
            var terminus  = new THREE.Vector3(75,75,75);
            var direction = new THREE.Vector3().subVectors(terminus, origin).normalize();
            var arrow = new THREE.ArrowHelper(direction, origin, 50, 0x884400);
            this.scene.add(arrow);

        }
        public attach(): void {
            this.container.append(this.renderer.domElement);
            // this.container.append(this.gui.domElement);
            // this.gui.open();
            this.isRunning = true;
        }
        public animate(): void {
            if(this.isRunning){
                window.requestAnimationFrame(()=> {this.animate();});
            }
            this.update();
            this.render();
        }
        public update(): void {
            this.controls.update();
            this.stats.update();
        }
        public render(): void {
            this.renderer.render(this.scene,this.camera);
        }
    }
}