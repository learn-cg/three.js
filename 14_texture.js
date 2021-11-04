	const h_scr = window.innerWidth;
	const v_scr = window.innerHeight; 
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, h_scr/v_scr, 0.1, 1000);
	camera.position.z = 3;

	const renderer = new THREE.WebGLRenderer({canvas: HelloCanvas}); 
	renderer.setSize( h_scr, v_scr ); 
	
	const geometry = new THREE.BoxGeometry();
	const loader = new THREE.TextureLoader();
	const tex = loader.load('https://raw.githubusercontent.com/learn-cg/three.js/main/image/mucha1.jpg'); 
	const material1 = new THREE.MeshBasicMaterial( 
	{ // color: 0xff0000, 
		map: tex });
	const material2 = new THREE.MeshPhongMaterial( 
	{ 	//color: 0x00ff00, 
		map: tex, 
		flatShading: false, specular: 0xffffff, shininess : 90.0, 
		wireframe: false, emissive: 0x000000 });
	const material3 = new THREE.MeshLambertMaterial( 
	{	// color:0x0000ff
		bumpMap: tex, bumpScale: 0.02, 
		map: tex 	} ); 
	const box1 = new THREE.Mesh( geometry, material1 );
	const box2 = new THREE.Mesh( geometry, material2 );
	const box3 = new THREE.Mesh( geometry, material3 );
	box2.position.x = -1.5; 
	box3.position.x = 1.5; 
	scene.add(box1); 
	scene.add(box2); 
	scene.add(box3); 

const light = new THREE.DirectionalLight(0xffffff, 1.0); 
const ambient = new THREE.AmbientLight(0x222222, 1.0); 
light.position.set (2,2,2); 
scene.add( light );
scene.add( ambient );

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
