const h_scr = window.innerWidth;
const v_scr = window.innerHeight; 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, h_scr/v_scr, 0.1, 1000);
camera.position.z = 5;

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

var rM = new THREE.Matrix4; 
var tM1 = new THREE.Matrix4; 
var tM2 = new THREE.Matrix4; 

tM1.makeTranslation(2,0,0);
tM2.makeTranslation(-2,0,0);
var rot = 0.0; 

box1.matrixAutoUpdate = false; 
box2.matrixAutoUpdate = false; 
box3.matrixAutoUpdate = false; 

const animate = function () {
	requestAnimationFrame( animate );

	box1.matrix.identity(); 
	box2.matrix.identity(); 
	box3.matrix.identity(); 

	rot += 0.01;
	rM.makeRotationY(rot);

	box1.matrix.multiply(rM); 

	box2.matrix.multiply(tM1); 
	box2.matrix.multiply(rM); 

	box3.matrix.multiply(tM2); 
	box3.matrix.multiply(rM); 

	renderer.render( scene, camera );
};
animate();
