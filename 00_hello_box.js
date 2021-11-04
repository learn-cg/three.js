	const h_scr = window.innerWidth;
	const v_scr = window.innerHeight; 
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera( 45, h_scr/v_scr, 0.1, 1000 );
	camera.position.z = 5;

	const renderer = new THREE.WebGLRenderer({canvas: HelloCanvas}); 
	renderer.setSize( h_scr, v_scr ); 

	const geometry = new THREE.BoxGeometry();
	const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
	const cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	renderer.render( scene, camera );
