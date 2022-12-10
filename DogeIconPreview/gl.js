//'use strict';
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true,});
renderer.setPixelRatio( window.devicePixelRatio );


//CAMERA
const fov = 45; //45
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 200;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 1);



var mouseX = 0;
var mouseY = 0;
var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var scene = new THREE.Scene();



//controls//
const controls = new THREE.OrbitControls(camera, canvas);
controls.target.set(0, 0, 0);
controls.minDistance = 10.5;
controls.maxDistance = 10.5; //5
controls.maxPolarAngle = Math.PI / 2;
//controls.maxPolarAngle = Math.PI / 1 ;
controls.enableKeys = false;
controls.enablePan = false;
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.031;
controls.screenSpacePanning = false;




const textureCube = new THREE.CubeTextureLoader()
	.load([
	'img/px.png',
	'img/nx.png',
	'img/py.png',
	'img/ny.png',
	'img/pz.png',
	'img/nz.png',
]);




//загрузка всех текстур в сцене
const loader = new THREE.TextureLoader();

const dogetexture = loader.load('img/DegeWebTex.png');
dogetexture.flipY = false;

const dogeMat = new THREE.MeshStandardMaterial( { 
	envMap: textureCube,
	envMapIntensity: 0.8,
	map: dogetexture,
	/* emissive: 0x2c2c2c,
	emissiveIntensity : 0.2, */
	roughness: 0.8,
} );


const redTest = new THREE.MeshBasicMaterial({
color: 'red',
});



let GogeIcon;
const gltfLoader = new THREE.GLTFLoader();

gltfLoader.load('gltf/GogeIcon.glb', (gltf) => {

	GogeIcon = gltf.scene.children[0];
	GogeIcon.material = dogeMat;

	scene.add(GogeIcon);
});







const color = 0x474BF6;
const intensity = 0.4;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-37.4, 30, 10);
light.target.position.set(-79, 50, -95);
scene.add(light);
scene.add(light.target);
//const helper = new THREE.DirectionalLightHelper(light);
//scene.add(helper);


const color2 = 0xDAECF6;
const intensity2 = 0.5;
const light2 = new THREE.DirectionalLight(color2, intensity2);
light2.position.set(62, 30, 24);
light2.target.position.set(88, 50, 80);
scene.add(light2);
scene.add(light2.target);
//const helper = new THREE.DirectionalLightHelper(light2);
//scene.add(helper);


const color3 = 0xFF9D29;
const intensity3 = 0.5; 
const light3 = new THREE.DirectionalLight(color3, intensity3);
light3.position.set( 22.2, 44, 11);
light3.target.position.set(42, 40, -35);
scene.add(light3);
scene.add(light3.target);
//const helper = new THREE.DirectionalLightHelper(light3);
//scene.add(helper);





//resize windows
function resizeRendererToDisplaySize(renderer) {
	const canvas = renderer.domElement;
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;
	const needResize = canvas.width !== width || canvas.height !== height;
	if (needResize) {
	renderer.setSize(width, height, false);
	}
	return needResize;
}
//resize windows


function onDocumentMouseMove(event) {
	mouseX = (event.clientX - windowHalfX) / 300;
	mouseY = (event.clientY - windowHalfY) / 300;
};
document.addEventListener( 'mousemove', onDocumentMouseMove, false );



function render(time) {
	renderer.render(scene, camera);
	requestAnimationFrame(render);

	camera.position.x += (mouseX - camera.position.x) * .01;
	camera.position.y += (- mouseY - camera.position.y) * .01;
	camera.lookAt(scene.position);
	
	if (resizeRendererToDisplaySize(renderer)) {
	const canvas = renderer.domElement;
	camera.aspect = canvas.clientWidth / canvas.clientHeight;
	}
    camera.updateProjectionMatrix();

	controls.update();


}
   

requestAnimationFrame(render);
render();




