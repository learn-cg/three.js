	const h_scr = window.innerWidth;
	const v_scr = window.innerHeight; 
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, h_scr/v_scr, 0.1, 1000);
	camera.position.z = 5;

	const renderer = new THREE.WebGLRenderer({canvas: HelloCanvas}); 
	renderer.setSize( h_scr, v_scr ); 

	const geometry = new THREE.SphereGeometry();
	const material1 = new THREE.MeshPhongMaterial( { 
				color: 0xff0000, shininess : 90.0 });
	const material2 = new THREE.MeshPhongMaterial( { 
				color: 0x00ff00, shininess : 90.0 });
	const material3 = new THREE.MeshPhongMaterial( { 
				color: 0x0000ff, shininess : 90.0 });

	const ball1 = new THREE.Mesh( geometry, material1 );
	const ball2 = new THREE.Mesh( geometry, material2 );
	const ball3 = new THREE.Mesh( geometry, material3 );
	ball2.position.x = -2; 
	ball3.position.x = 2; 
	scene.add(ball1); 
	scene.add(ball2); 
	scene.add(ball3); 

	const light1 = new THREE.DirectionalLight(0xffffff, 1.0); 
	light1.position.set (2,2,2); 
	scene.add( light1 ); 
	const light2 = new THREE.AmbientLight(0x444444);  
	scene.add( light2 ); 
	const light3 = new THREE.PointLight (0xffffff, 1.0);
	light3.position.set (0,1.3,1.3); 
	scene.add( light3 ); 

	const animate = function () {
		requestAnimationFrame( animate );
		ball1.rotation.x += 0.01; 
		ball2.rotation.x += 0.02; 
		ball3.rotation.x += 0.03; 
		ball1.rotation.y += 0.01; 
		ball2.rotation.y += 0.02; 
		ball3.rotation.y += 0.03; 
		renderer.render( scene, camera );
	};
	animate();
