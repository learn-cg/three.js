	const h_scr = window.innerWidth;
	const v_scr = window.innerHeight; 
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, h_scr/v_scr, 0.1, 1000);
	camera.position.z = 5;

	const renderer = new THREE.WebGLRenderer({canvas: HelloCanvas}); 
	renderer.setSize( h_scr, v_scr ); 

	const geometry = new THREE.BufferGeometry();
	const vertices = new Float32Array( [
		-1.0, -1.0,  1.0,
		 1.0, -1.0,  1.0,
		 1.0,  1.0,  1.0,

		 1.0,  1.0,  1.0,
		-1.0,  1.0,  1.0,
		-1.0, -1.0,  1.0
	] );

	// itemSize = 3 because there are 3 values (components) per vertex
	geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
	const mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	const animate = function () {
		requestAnimationFrame( animate );
		mesh.rotation.x += 0.01;
		mesh.rotation.y += 0.01;
		renderer.render( scene, camera );
	};
	animate();
