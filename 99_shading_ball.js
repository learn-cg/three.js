
	const h_scr = window.innerWidth;
	const v_scr = window.innerHeight; 
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, h_scr/v_scr, 0.1, 1000);
	camera.position.z = 5;

	const renderer = new THREE.WebGLRenderer({canvas: HelloCanvas}); 
	renderer.setSize( h_scr, v_scr ); 

	const geometry = new THREE.SphereGeometry();
	const material = new THREE.MeshPhongMaterial( { 
		color: 0xffff00, flatShading: false, 
		specular: 0xff0000, shininess : 90.0, 
		wireframe: false, emissive: 0x000000 });
	const ball = new THREE.Mesh( geometry, material );
	scene.add( ball );
	const light = new THREE.DirectionalLight(0xffffff, 1.0); 
	light.position.set (2,2,2); 
	scene.add( light ); 

	const animate = function () {
		requestAnimationFrame( animate );
		ball.rotation.x += 0.01;
		ball.rotation.y += 0.01;
		renderer.render( scene, camera );
	};
	animate();
