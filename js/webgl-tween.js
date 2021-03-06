$( document ).ready(function() {
	$( "section" ).hide();
	$( ".view-demo, .close-demo" ).click(function() {
		$( "section" ).toggle( "fast", function() {
		});
	});
});



var container, stats;
var camera, scene, renderer;

var raycaster;
var mouse;

init();
animate();

function init() {

	container = document.createElement( 'section' );
	document.body.appendChild( container );

	var info = document.createElement( 'div' );
	info.style.position = 'absolute';
	info.style.right = '10px';
	info.style.width = '100%';
	info.style.textAlign = 'right';
	info.innerHTML = '<i class="fa fa-times close-demo"></i>';
	container.appendChild( info );

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.y = 300;
	camera.position.z = 500;

	scene = new THREE.Scene();

	var texture = THREE.ImageUtils.loadTexture( 'img/no.png' );
	var texture2 = THREE.ImageUtils.loadTexture( 'img/yes.png' );

	var geometry = new THREE.BoxGeometry( 50, 50, 50 );

	for ( var i = 0; i < 125; i ++ ) {


		var object = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { map: texture, opacity: 0.65 } ) );
		object.position.x = Math.random() * 800 - 400;
		object.position.y = Math.random() * 800 - 400;
		object.position.z = Math.random() * 800 - 400;
		object.scale.x = Math.random() * 2 + 1;
		object.scale.y = Math.random() * 2 + 1;
		object.scale.z = Math.random() * 2 + 1;
		object.rotation.x = Math.random() * 2 * Math.PI;
		object.rotation.y = Math.random() * 2 * Math.PI;
		object.rotation.z = Math.random() * 2 * Math.PI;
		scene.add( object );

	}

	for ( var i = 0; i < 1; i ++ ) {

		var geometry2 = new THREE.SphereGeometry(25, 15, 15);
		var material2 = new THREE.MeshBasicMaterial({shading: THREE.FlatShading, color: 0xdcdcdc, map: texture2});
		var mesh2 = new THREE.Mesh(geometry2, material2);
		texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
		texture2.repeat.set( 1, 1 );
		scene.add(mesh2);
	}

	//

	raycaster = new THREE.Raycaster();
	mouse = new THREE.Vector2();

	renderer = new THREE.CanvasRenderer();
	renderer.setClearColor( 0xf0f0f0 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild(renderer.domElement);

	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	container.appendChild( stats.domElement );

	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	document.addEventListener( 'touchstart', onDocumentTouchStart, false );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentTouchStart( event ) {

	event.preventDefault();

	event.clientX = event.touches[0].clientX;
	event.clientY = event.touches[0].clientY;
	onDocumentMouseDown( event );

}

function onDocumentMouseDown( event ) {

	event.preventDefault();

	mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

	raycaster.setFromCamera( mouse, camera );

	var intersects = raycaster.intersectObjects( scene.children );

	console.log(scene);

	if ( intersects.length > 0 ) {

		new TWEEN.Tween( intersects[ 0 ].object.position ).to( {
			x: Math.random() * 800 - 400,
			y: Math.random() * 800 - 400,
			z: Math.random() * 800 - 400 }, 2000 )
		.easing( TWEEN.Easing.Elastic.Out).start();

		new TWEEN.Tween( intersects[ 0 ].object.rotation ).to( {
			x: Math.random() * 2 * Math.PI,
			y: Math.random() * 2 * Math.PI,
			z: Math.random() * 2 * Math.PI }, 2000 )
		.easing( TWEEN.Easing.Elastic.Out).start();

	}

	/*
	// Parse all the faces
	for ( var i in intersects ) {

		intersects[ i ].face.material[ 0 ].color.setHex( Math.random() * 0xffffff | 0x80000000 );

	}
	*/
}

//

function animate() {

	requestAnimationFrame( animate );

	render();
	stats.update();

}

var radius = 600;
var theta = 0;

function render() {

	TWEEN.update();

	theta += 0.1;

	camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
	camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
	camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
	camera.lookAt( scene.position );

	renderer.render( scene, camera );

}
