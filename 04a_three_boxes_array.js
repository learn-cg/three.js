	const h_scr = window.innerWidth;
	const v_scr = window.innerHeight; 
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, h_scr/v_scr, 0.1, 1000);
	camera.position.z = 5;

	const renderer = new THREE.WebGLRenderer({canvas: HelloCanvas}); 
	renderer.setSize( h_scr, v_scr ); 

	const geometry = new THREE.BoxGeometry();
	function makeInstance(geometry, col, pos_x) {
		const material = new THREE.MeshBasicMaterial( { color: col }); 
		const box = new THREE.Mesh( geometry, material );
		box.position.x = pos_x; 
		scene.add( box ); 
		return box; 
	}
	const boxes = [
		makeInstance(geometry, 0xff0000,  0),
		makeInstance(geometry, 0x00ff00, -2),
		makeInstance(geometry, 0x0000ff,  2),
	];
	scene.add( boxes ); 

	const animate = function () {
		requestAnimationFrame( animate );
		boxes.forEach((box, i) => {
				box.rotation.x += 0.01*(i+1); 
				box.rotation.y += 0.01*(i+1); 
		}); 
		renderer.render( scene, camera );
	};
	animate();
