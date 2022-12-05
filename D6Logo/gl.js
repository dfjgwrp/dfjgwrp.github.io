//'use strict';

const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
renderer.setPixelRatio( window.devicePixelRatio );


const fov = 45; //45
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 200;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(-5.5, -0.5, 1.7);

var scene = new THREE.Scene();
const whiteBack = new THREE.Color('#011F5A');
scene.background = whiteBack;




//controls//
const controls = new THREE.OrbitControls(camera, canvas);
controls.target.set(-0, 0, 0);
controls.minDistance = 3.5;
controls.maxDistance = 6; //5
controls.maxPolarAngle = Math.PI / 2;
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





const loader = new THREE.TextureLoader();

const shadow1 = loader.load('img/shadow01.png');
const pvc_nrml = loader.load('img/powderblue_NRM.jpg');
const pvc_spec = loader.load('img/powderblue_SPEC2.jpg');
pvc_nrml.wrapS = THREE.RepeatWrapping;
pvc_nrml.wrapT = THREE.RepeatWrapping;
pvc_spec.wrapS = THREE.RepeatWrapping;
pvc_spec.wrapT = THREE.RepeatWrapping;






const pvc1016 = new THREE.MeshPhysicalMaterial( { 
envMap: textureCube,
normalScale: new THREE.Vector2(2, 2 ),
color: 0xffffff,
//metalness: 0,
roughness: 1.4,
} );



const shadow1Mat = new THREE.MeshBasicMaterial({
map: shadow1,
transparent: false,
opacity: 0,
});


const redTest = new THREE.MeshBasicMaterial({
color: 'red',
});






let glbLogo;
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load('gltf/logo_D6.glb', (gltf) => {
	glbLogo = gltf.scene.children[0];
	glbLogo.material = shadow1Mat;
	scene.add(glbLogo);
});







const color = 0xF66DD2;
const intensity = 0.39;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-37.4, 58, -33);
light.target.position.set(-79, 100, -95);
scene.add(light);
scene.add(light.target);
const helper = new THREE.DirectionalLightHelper(light);
//scene.add(helper);


const color2 = 0xDAECF6;
const intensity2 = 1.27;
const light2 = new THREE.DirectionalLight(color2, intensity2);
light2.position.set(62, 60, 24);
light2.target.position.set(88, 50, 80);
scene.add(light2);
scene.add(light2.target);
//const helper = new THREE.DirectionalLightHelper(light2);
//scene.add(helper);


const color3 = 0x3CC0F6;
const intensity3 = 0.7; 
const light3 = new THREE.DirectionalLight(color3, intensity3);
light3.position.set( 22.2, 14, 11);
light3.target.position.set(42, 8, -35);
scene.add(light3);
scene.add(light3.target);
//const helper = new THREE.DirectionalLightHelper(light3);
//scene.add(helper);






















var time;






//чтобы окно ресайзилось
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
//чтобы окно ресайзилось}





function render(time) {
	renderer.render(scene, camera);
	requestAnimationFrame(render);
	
	if (resizeRendererToDisplaySize(renderer)) {
	const canvas = renderer.domElement;
	camera.aspect = canvas.clientWidth / canvas.clientHeight;
	}
    camera.updateProjectionMatrix();

	controls.update();
	
	
	glbLogo.rotation.y += 0.001;
	console.clear();


}
   

requestAnimationFrame(render);
render();




