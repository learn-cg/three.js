
	const h_scr = window.innerWidth;
	const v_scr = window.innerHeight; 
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, h_scr/v_scr, 0.1, 1000);
	camera.position.z = 5;

	const renderer = new THREE.WebGLRenderer({canvas: HelloCanvas}); 
	renderer.setSize( h_scr, v_scr ); 

	const geometry = new THREE.BoxGeometry();
	const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
	const cube_wire = new THREE.Line( geometry, material );
	scene.add( cube_wire );

	const animate = function () {
		requestAnimationFrame( animate );
		cube_wire.rotation.x += 0.01;
		cube_wire.rotation.y += 0.01;
		renderer.render( scene, camera );
	};
	animate();
