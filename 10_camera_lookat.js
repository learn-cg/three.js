const h_scr = window.innerWidth;
const v_scr = window.innerHeight; 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, h_scr/v_scr, 0.1, 1000);
camera.position.z = 5; 
camera.lookAt(2,0,0); 

const renderer = new THREE.WebGLRenderer({canvas: HelloCanvas}); 
renderer.setSize( h_scr, v_scr ); 

const geometry = new THREE.BoxGeometry();
const material1 = new THREE.MeshPhongMaterial( { 
		color: 0xff0000, shininess : 90.0 });
const material2 = new THREE.MeshPhongMaterial( { 
		color: 0x00ff00, shininess : 90.0 });
const material3 = new THREE.MeshPhongMaterial( { 
		color: 0x0000ff, shininess : 90.0 });

const light1 = new THREE.DirectionalLight(0xffffff, 1.0); 
light1.position.set (2,2,2); 
scene.add( light1 ); 
const light2 = new THREE.AmbientLight(0x303030);  
scene.add( light2 ); 

const box1 = new THREE.Mesh( geometry, material1 );
const box2 = new THREE.Mesh( geometry, material2 );
const box3 = new THREE.Mesh( geometry, material3 );

scene.add(box1); 
scene.add(box2); 
scene.add(box3); 

box2.position.x = -2; 
box3.position.x = 2; 
var rot = 0.0; 

const animate = function () {
	requestAnimationFrame( animate );

	rot += 0.01;
	box1.rotation.y = rot;
	box2.rotation.y = rot;
	box3.rotation.y = rot;

	renderer.render( scene, camera );
};
animate();
