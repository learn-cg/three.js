const h_scr = window.innerWidth;
const v_scr = window.innerHeight; 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, h_scr/v_scr, 0.1, 1000);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer(
	{canvas: HelloCanvas, antialias:true}); // Try false
renderer.setSize( h_scr, v_scr ); 

const geometry = new THREE.BoxGeometry();
const material1 = new THREE.MeshLambertMaterial( { 
	opacity: 0.5, transparent: true,
	//side: THREE.DoubleSide, alphaToCoverage:false,
	color:0xff0000} ); 
const material2 = new THREE.MeshPhongMaterial( { 
	opacity: 0.5, transparent: true,
	//side: THREE.DoubleSide, alphaToCoverage:false,
	color: 0x00ff00, flatShading: false, 
	specular: 0xffffff, shininess : 90.0 });
const material3 = new THREE.MeshLambertMaterial( { 
	opacity: 0.5, transparent: true,
	//side: THREE.DoubleSide, alphaToCoverage:false,
	color:0x0000ff} ); 
const box1 = new THREE.Mesh( geometry, material1 );
const box2 = new THREE.Mesh( geometry, material2 );
const box3 = new THREE.Mesh( geometry, material3 );
box2.position.x = -2; 
box3.position.x = 2; 
scene.add(box1); 
box1.add(box2); 
box1.add(box3); 

const light = new THREE.DirectionalLight(0xffffff, 1.0); 
light.position.set (5,5,5); 
scene.add( light ); 
const ambient = new THREE.AmbientLight(0x333333, 1.0); 
scene.add( ambient ); 

const animate = function () {
	requestAnimationFrame( animate );
	box1.rotation.x += 0.00; 
	box2.rotation.x += 0.03; 
	box3.rotation.x += 0.03; 
	box1.rotation.y += 0.01; 
	box2.rotation.y += 0.03; 
	box3.rotation.y += 0.03; 
	renderer.render( scene, camera );
};
animate();
