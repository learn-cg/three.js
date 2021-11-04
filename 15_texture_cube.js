	const h_scr = window.innerWidth;
	const v_scr = window.innerHeight; 
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, h_scr/v_scr, 0.1, 1000);
	camera.position.z = 3;

	const renderer = new THREE.WebGLRenderer({canvas: HelloCanvas}); 
	renderer.setSize( h_scr, v_scr ); 
	
	const geometry = new THREE.BoxGeometry();
	//cubemap
	const path = 'https://threejs.org/examples/textures/cube/SwedishRoyalCastle/';
	const urls = [
					path+'px.jpg', path+'nx.jpg', 
					path+'py.jpg', path+'ny.jpg', 
					path+'pz.jpg', path+'nz.jpg'
				];

	const reflectionCube = new THREE.CubeTextureLoader().load( urls );
	scene.background = reflectionCube;
	const material1 = new THREE.MeshPhongMaterial( 
	{ color: 0x00ffff, envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.5 } );
	const material2 = new THREE.MeshLambertMaterial( 
	{ color: 0xffffff, envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.5 } );
	const material3 = new THREE.MeshLambertMaterial( 
	{ color: 0xffff00, envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.5 } );
	const box1 = new THREE.Mesh( geometry, material1 );
	const box2 = new THREE.Mesh( geometry, material2 );
	const box3 = new THREE.Mesh( geometry, material3 );
	box2.position.x = -1.5; 
	box3.position.x = 1.5; 
	scene.add(box1); 
	scene.add(box2); 
	scene.add(box3); 

	const ambient = new THREE.AmbientLight( 0xffffff );
	scene.add( ambient );
	pointLight = new THREE.PointLight( 0xffffff, 2 );
	scene.add( pointLight );

	const animate = function () {
		requestAnimationFrame( animate );
		box1.rotation.x += 0.02; 
		box2.rotation.x += 0.01; 
		box3.rotation.x += 0.01; 
		box1.rotation.y += 0.02; 
		box2.rotation.y += 0.01; 
		box3.rotation.y += 0.01; 
		renderer.render( scene, camera );
	};
	animate();
