	const h_scr = window.innerWidth;
	const v_scr = window.innerHeight; 
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, h_scr/v_scr, 0.1, 1000);
	camera.position.z = 3;

	const renderer = new THREE.WebGLRenderer({canvas: HelloCanvas}); 
	renderer.setSize( h_scr, v_scr ); 

	const geometry = new THREE.BoxGeometry();
		const material1 = new THREE.MeshBasicMaterial( 
		{ color:0xff0000, depthTest:true, 
		  polygonOffset:true, polygonOffsetFactor: 2, 
		  polygonOffsetUnits: 0 } ); 
	const material2 = new THREE.MeshBasicMaterial( 
		{ color:0x00ff00, depthTest:true,  
		  polygonOffset:true, polygonOffsetFactor: -2, 
		  polygonOffsetUnits: -2 } ); 
	const material3 = new THREE.MeshBasicMaterial( 
		{ color:0x0000ff, depthTest:true, 
		  polygonOffset:true, polygonOffsetFactor: -2, 
		  polygonOffsetUnits: -4 } ); 
	const box1 = new THREE.Mesh( geometry, material1 );
	const box2 = new THREE.Mesh( geometry, material2 );
	const box3 = new THREE.Mesh( geometry, material3 );
	box2.position.x = -.6; 
	box3.position.x = .6; 
	scene.add(box1); 
	scene.add(box2); 
	scene.add(box3); 

	const animate = function () {
		requestAnimationFrame( animate );
		box1.rotation.x += 0.01; 
		box2.rotation.x += 0.01; 
		box3.rotation.x += 0.01; 
		box1.rotation.z += 0.01; 
		box2.rotation.z += 0.01; 
		box3.rotation.z += 0.01; 
		renderer.render( scene, camera );
	};
	animate();
