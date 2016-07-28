if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

			var camera, scene, renderer;
			var geometry, material, mesh;

			function setup() {

				var W = window.innerWidth, H = window.innerHeight;
				renderer = new THREE.WebGLRenderer();
				renderer.setSize( W, H );
				document.body.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 300, W/H, 1, 10000 );
				camera.position.z = 500;

				scene = new THREE.Scene();


				// paste your code from the geometryGUI here
				geometry = new THREE.CubeGeometry(200, 200, 200);
				material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading});
				mesh = new THREE.Mesh(geometry, material);
				scene.add(mesh);

			}

			function draw() {

				requestAnimationFrame( draw );

				// experiment with code from the snippets menu here
				mesh.rotation.x = Date.now() * 0.0005;
				mesh.rotation.y = Date.now() * 0.0002;
				mesh.rotation.z = Date.now() * 0.001;
				renderer.render( scene, camera );

			}

			setup();
			draw();
