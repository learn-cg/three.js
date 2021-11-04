	const h_scr = window.innerWidth;
	const v_scr = window.innerHeight; 
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, h_scr/v_scr, 0.1, 1000);
	camera.position.z = 5;

	const renderer = new THREE.WebGLRenderer({canvas: HelloCanvas}); 
	renderer.setSize( h_scr, v_scr ); 

	const points = [ new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,0), 
		new THREE.Vector3(1,0,0), new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0) ]; 
	const geometry = new THREE.BufferGeometry().setFromPoints(points);
	const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
	const wire = new THREE.Line( geometry, material );
	scene.add( wire );
	const curve = new THREE.EllipseCurve(0, 0, 2, 1.4, 0,  2 * Math.PI, false, 0);
	const points2 = curve.getPoints( 50 );
	const geometry2 = new THREE.BufferGeometry().setFromPoints(points2);
	const material2 = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
	const wire2 = new THREE.Line( geometry2, material2 );
	wire.add( wire2 );


	const animate = function () {
		requestAnimationFrame( animate );
		wire.rotation.x += 0.01;
		wire.rotation.y += 0.01;
		renderer.render( scene, camera );
	};
	animate();
