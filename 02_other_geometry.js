	const h_scr = window.innerWidth;
	const v_scr = window.innerHeight; 
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, h_scr/v_scr, 0.1, 1000);
	camera.position.z = 5;

	const renderer = new THREE.WebGLRenderer({canvas: HelloCanvas}); 
	renderer.setSize( h_scr, v_scr ); 

	// const geometry = new THREE.BoxGeometry();
	// const geometry = new THREE.SphereGeometry();
	// const geometry = new THREE.ConeGeometry();
	// const geometry = new THREE.CircleGeometry();
	const geometry = new THREE.CylinderGeometry(); // try (2,2,4,16);
	// const geometry = new THREE.PlaneGeometry();
	const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
	const geom = new THREE.Mesh( geometry, material ); 
	scene.add( geom );

	const animate = function () {
		requestAnimationFrame( animate );
		geom.rotation.x += 0.01;
		geom.rotation.y += 0.01;
		renderer.render( scene, camera );
	};
	animate();
