'use strict';

const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas, antialias: true});






//renderer.setPixelRatio( window.devicePixelRatio );

//renderer.physicallyCorrectLights = true;
//renderer.shadowMap.enabled = true;
//renderer.shadowMapSoft = true;
const fov = 45; //45
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 200;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//camera.position.set(-3.5, -0.1, 1.7);
//camera.position.set(-3.84, -0.19, -0.58);


//controls//
const controls = new THREE.OrbitControls(camera, canvas);
-controls.target.set(-0, -0.2	, 0);
controls.minDistance = 2.1;
controls.maxDistance = 5.4; //5
controls.maxPolarAngle = Math.PI / 2;
controls.enableKeys = false;
controls.enablePan = false;
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.031;
controls.screenSpacePanning = false;



//loaders//
const loader = new THREE.TextureLoader();
var scene = new THREE.Scene();
const whiteBack = new THREE.Color('white');
scene.background = whiteBack;
//scene.fog = new THREE.FogExp2(0xffffff, 0.05 );

/*
const textureEquirec = loader.load( "img/hdri.png" );
*/
//textureCube.mapping = THREE.EquirectangularReflectionMapping;
//textureCube.magFilter = THREE.LinearFilter;
//textureCube.minFilter = THREE.LinearMipmapLinearFilter;
//textureCube.encoding = THREE.sRGBEncoding;
					
const textureCube = new THREE.CubeTextureLoader()
	.load([
	'img/px.png',
	'img/nx.png',
	'img/py.png',
	'img/ny.png',
	'img/pz.png',
	'img/nz.png',
]);

const textureCube2 = new THREE.CubeTextureLoader()
	.load([
	'img/New/px.png',
	'img/New/nx.png',
	'img/New/py.png',
	'img/New/ny.png',
	'img/New/pz.png',
	'img/New/nz.png',
]);

//scene.background = textureCube;
//textureCube.center.set(0.1, 33);
//textureCube.rotation = THREE.Math.degToRad(33);
//textureCube.repeat.set(0.1, 0.);







const worldTexture = loader.load('img/hdri.jpg');
const metalRO = loader.load('img/Metal03_SPEC.jpg');
const metalME = loader.load('img//SparkleNoiseMap.jpg');
metalRO.wrapS = THREE.RepeatWrapping;
metalRO.wrapT = THREE.RepeatWrapping;
metalME.wrapS = THREE.RepeatWrapping;
metalME.wrapT = THREE.RepeatWrapping;


const lmap = loader.load('img/lightmap.jpg');

const blueCar = new THREE.MeshPhysicalMaterial( { 
envMap: textureCube,
roughnessMap: metalME ,
//color: 0x2a6996,
//color: 0x1a5682,
color: 0x1e6498,
//color: 0xffffff,
metalness: 1.8,
roughness: 0,
lightMap: lmap,
lightMapIntensity: 1.8,
metalnessMap: metalRO,
} );


const interiorBlack = new THREE.MeshPhysicalMaterial( { 
envMap: textureCube,
roughnessMap: metalME ,
//color: 0x2a6996,
//color: 0x1a5682,
color: 0x111111,
//color: 0xffffff,
metalness: 1.8,
roughness: 0.7,
//lightMap: lmap,
//lightMapIntensity: 1.8,
metalnessMap: metalRO,
} );












const whiteCar = new THREE.MeshPhysicalMaterial( { 
envMap: textureCube,
roughnessMap: metalME ,
color: 0xFEFCFF,
metalness: 0.5,
roughness: 0.1,
lightMap: lmap,
lightMapIntensity: 1.4,
metalnessMap: metalRO,
} );

const darkRedCar = new THREE.MeshPhysicalMaterial( { 
envMap: textureCube,
roughnessMap: metalME ,
color: 0x3c2323,
metalness: 3,
roughness: 0,
lightMap: lmap,
lightMapIntensity: 1.8,
metalnessMap: metalRO,
} );

const silverCar = new THREE.MeshPhysicalMaterial( { 
envMap: textureCube,
roughnessMap: metalME ,
metalnessMap: metalRO,
color: 0x878787,
metalness: 1,
roughness: 0.09,
lightMap: lmap,
lightMapIntensity: 2,
} );

const greyCar = new THREE.MeshPhysicalMaterial( { 
envMap: textureCube,
roughnessMap: metalME ,
color: 0x585151,
metalness: 1,
roughness: 0.15,
lightMap: lmap,
lightMapIntensity: 1.8,
} );
const blackPlastic = new THREE.MeshBasicMaterial( { 
color: 0x000000,
envMap: textureCube,

} );
const blackPlasticInt = new THREE.MeshPhongMaterial( { 
color: 0x111111, roughness: 0.2,
envMap: textureCube,

} );
const redBasic = new THREE.MeshStandardMaterial( { 
color: 0xfb5a2c, roughness: 9
} );


//floorBasediffuse.encoding = THREE.sRGBEncoding;
//floorBasediffuse.wrapS = THREE.RepeatWrapping;
//floorBasediffuse.wrapT = THREE.RepeatWrapping;
//floorBaseNormalMap.wrapS = THREE.RepeatWrapping;
//floorBaseNormalMap.wrapT = THREE.RepeatWrapping;
/*
const floorBase = new THREE.MeshPhysicalMaterial( { 
clearcoat: 1.0,
clearcoatRoughness: 9,
metalness: 0.1,
roughness: 9,
color: 0xdddddd,
map: floorBasediffuse,
normalScale: new THREE.Vector2( 0.8, 0.8 )
} );
*/
/*
const tyres = new THREE.MeshPhysicalMaterial( { 
//clearcoat: 0.7,
//clearcoatRoughness: 1,
//metalness: 0.1,
roughness: 0.1,
color: 0xffffff,
//envMap: textureCube2,
//normalMap: floorBaseNormalMap,
//map: worldTexture,
//normalScale: new THREE.Vector2( 1, 1 ),
envmap: textureCube,
//emission: 0xffffff
});
*/


const floorBaseNormalMap = loader.load( "img/tyres1nrm.jpg" );
const floorBasediffuse = loader.load("img/tyres1.jpg" );

const tyresMat = new THREE.MeshPhysicalMaterial( { 
metalness: 5,
roughness: 4,
map: floorBasediffuse,
//lightMap: lmap,
//lightMapIntensity: 0,
//metalnessMap: metalRO,
envMap: textureCube,
normalMap: floorBaseNormalMap,
normalScale: new THREE.Vector2( 50, 50 )
//roughnessMap: metalME ,
} );




const plastic = new THREE.MeshPhysicalMaterial( { 
clearcoat: 1.0,
clearcoatRoughness: 0.5,
metalness: 0.1,
roughness: 0.5,
color: 0x333333,
envMap: textureCube,
normalMap: floorBaseNormalMap,
map: floorBasediffuse,
normalScale: new THREE.Vector2( 0.7, 0.7 )
});









const plasticMidBlack = new THREE.MeshPhysicalMaterial( { 
clearcoat: 1.0,
clearcoatRoughness: 0.1,
metalness: 0.1,
roughness: 0,
color: 0x222222,
envMap: textureCube,
});


const plasticMidBlackV = new THREE.MeshPhysicalMaterial( { 
clearcoat: 9.0,
clearcoatRoughness: 0.1,
metalness: 3,
roughness: 0,
color: 0x111111,
envMap: textureCube,
});

const metalDetailsForLightsMat = new THREE.MeshPhysicalMaterial( { 
clearcoat: 1.0,
clearcoatRoughness: 0.2,
metalness: 2,
roughness: 0,
color: 0xffffff,
envMap: textureCube,
} );

const metalDetailsForLightsMatV = new THREE.MeshPhysicalMaterial( { 
clearcoat: 1.0,
clearcoatRoughness: 0.1,
metalness: 3,
roughness: 0,
color: 0x222222,
envMap: textureCube,
} );


//metal+ao

const lmap2 = loader.load('img/lightmap2.jpg');

const metalDetailsMat = new THREE.MeshPhysicalMaterial( { 
clearcoat: 3.0,
clearcoatRoughness: 0.1,
metalness: 0.5,
roughness: 0.1,
color: 0xffffff,
lightMap: lmap2,
lightMapIntensity: 1.1,
envMap: textureCube,
} );







const platesTexture = loader.load('img/plates.jpg');
const platesMat = new THREE.MeshBasicMaterial({
map: platesTexture,
transparent: true, opacity: 1,
//depthWrite: false,  
metalness: 2,
roughness: 0, 
//envMap: textureCube,
});


//main_glass
const glassDetailsMat = 
new THREE.MeshPhysicalMaterial( {
color: 0x222222, 
envMap: textureCube, metalness: 0.5, roughness: 0, transparency: 0.29, transparent: true, name: 'smoked', side: THREE.DoubleSide,
envMap: textureCube,
} );

const smoothLightsGlassMat = 
new THREE.MeshPhysicalMaterial( {
color: 0xffffff, 
metalness: 0.1, roughness: 0, transparency: 0.6, transparent: true, name: 'smoked', side: THREE.DoubleSide,
refractionRatio: 9, reflectivity: 1.7,
envMap: textureCube,

} );



const glassDetailsMat_veryTransparent = 
new THREE.MeshPhysicalMaterial( {
clearcoat: 1.0,
clearcoatRoughness: 0.3,
color: 0x000000, 
envMap: textureCube2, metalness: 0, roughness: 0, transparency: 0.9, transparent: true, refractionRatio: 9, reflectivity: 3.1,
//roughnessMap: metalME ,
metalnessMap: metalRO,
roughnessMap: metalME,
} );



const glassDetailsMat_veryTransparentV = 
new THREE.MeshPhysicalMaterial( {
	clearcoat: 1,
clearcoatRoughness: 0,
color: 0x111111, 
metalness: 0, roughness: 0, transparency: 0.2, transparent: true, refractionRatio: 6, reflectivity: 3.1,
roughnessMap: metalME ,
metalnessMap: metalRO,
envMap: textureCube2,

} );











const redGlassDetailsMat_veryTransparent = 
new THREE.MeshPhysicalMaterial( {
	clearcoat: 5,
clearcoatRoughness: 0,
color: 0x9F000F, envMap: textureCube2, metalness: 1, roughness: 0, transparency: 0.5, transparent: true, refractionRatio: 6, reflectivity: 0.9,

envMap: textureCube,
} );







const badgeTexture = loader.load('img/badge.png');
const badgeMat = new THREE.MeshBasicMaterial({
map: badgeTexture,
transparent: true, opacity: 1,
depthWrite: false,   
envMap: textureCube,

});

//shadowshader
const shadowTexture = loader.load('img/shadow.png');
const shadowMat = new THREE.MeshBasicMaterial({
map: shadowTexture,
transparent: true,  
depthWrite: false,  
envMap: textureCube,
 
});

const plasticMidBlackWing = new THREE.MeshPhysicalMaterial( { 
clearcoat: 1.0,
clearcoatRoughness: 0.1,
metalness: 0.1,
roughness: 0,
color: 0x333333,
envMap: textureCube,
transparent: true, opacity: 1
});

const metalDetailsMatComp = new THREE.MeshPhysicalMaterial( { 
clearcoat: 1.0,
clearcoatRoughness: 0.1,
metalness: 1.9,
roughness: 0.2,
color: 0xaaaaaa,
envMap: textureCube,
transparent: true, opacity: 1,
side: THREE.DoubleSide
});

const sign1Texture = loader.load('img/sign1.png');
const sign1Mat = new THREE.MeshBasicMaterial({
map: sign1Texture,
transparent: true,  
depthWrite: false,   

});
const sign1Texture2 = loader.load('img/sign2.png');
const sign1Mat2 = new THREE.MeshBasicMaterial({
map: sign1Texture2,
transparent: true,  
depthWrite: false,   
});
const sign1Texture3 = loader.load('img/sign3.png');
const sign1Mat3 = new THREE.MeshBasicMaterial({
map: sign1Texture3,
transparent: true,  
depthWrite: false,   
});
const sign1Texture4 = loader.load('img/sign4.png');
const sign1Mat4 = new THREE.MeshBasicMaterial({
map: sign1Texture4,
transparent: true,  
depthWrite: false,   
});
const sign1Texture5 = loader.load('img/sign5.png');
const sign1Mat5 = new THREE.MeshBasicMaterial({
map: sign1Texture5,
transparent: true,  
depthWrite: false,   
});


const headLampTexture = loader.load('img/headlamp2.jpg');
const headLampMat = new THREE.MeshBasicMaterial({
map: headLampTexture,
transparent: false,
//depthWrite: false, 
envMap: textureCube,
});

const concreteFloorMatTexture = loader.load('img/concrete.jpg');
concreteFloorMatTexture.encoding = THREE.sRGBEncoding;
concreteFloorMatTexture.wrapS = THREE.RepeatWrapping;
concreteFloorMatTexture.wrapT = THREE.RepeatWrapping;
const concreteFloorMat = new THREE.MeshBasicMaterial({
map: concreteFloorMatTexture,
transparent: false,
//depthWrite: false, 
//envMap: textureCube,
});




let plane1, sign1, headLamps, sign2, sign3, sign4, sign5, frontLightsPlastic, frontLightsGlassMini;
let ring; //studio wS
let environmentAround; //white studio
let shadowUnderCar; //shadow car
let carbody; //floor
let walls1; //walls2
let logoParts, logoParts2;
let floor1, floor2,internalBlackParts;
let metalDetails, headLampsGlossy;
let frontLights, interiorDetails, frontLightsGlass, backLightsGlass, smoothLightsGlass;
let backlightsWhiteDetail;
let glassDetails1, interiorGlass;
let wheels, plasticDetails, platesNums, platesBody, frontGridMetal, frontGridPlastic;
let wheelsSteel, wheelsBlack;
let wingSteel, wingBlack, componentsPedalMetal, componentsPedalMetal2, badge, badgeMetal, logoPedal;
let concreteFloor;
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load('gltf/untitled.glb', (gltf) => {

	shadowUnderCar = gltf.scene.children[0];
	shadowUnderCar.material = shadowMat;
	
	plane1 = gltf.scene.children[1];
	//plane1.material = blueCar;

	ring = gltf.scene.children[2];
	ring.material = shadowMat; //walls

	carbody = gltf.scene.children[3];
	carbody.material = shadowMat; //floor
	
	walls1 = gltf.scene.children[4];
	walls1.material = shadowMat; //walls2

	floor1 = gltf.scene.children[5];
	floor1.material = blueCar; 

	floor2 = gltf.scene.children[6];
	floor2.material = tyresMat; 
	
	metalDetails = gltf.scene.children[7];
	metalDetails.material = metalDetailsMat; 
	
	frontLights = gltf.scene.children[8];
	frontLights.material = metalDetailsForLightsMat;
	
	plasticDetails= gltf.scene.children[9];
	plasticDetails.material = plastic; 

	interiorGlass = gltf.scene.children[10];
	interiorGlass.material = glassDetailsMat; 

	interiorDetails = gltf.scene.children[11];
	interiorDetails.material = interiorBlack;

	frontLightsGlass = gltf.scene.children[12];
	frontLightsGlass.material = glassDetailsMat_veryTransparent;

	backlightsWhiteDetail = gltf.scene.children[13];
	backlightsWhiteDetail.material = redBasic;

	backLightsGlass = gltf.scene.children[14];
	backLightsGlass.material = redGlassDetailsMat_veryTransparent;

	smoothLightsGlass = gltf.scene.children[15];
	smoothLightsGlass.material = smoothLightsGlassMat;

	wheels = gltf.scene.children[16];
	wheels.material = metalDetailsMat;

	internalBlackParts = gltf.scene.children[17];
	internalBlackParts.material = blackPlastic;

	logoParts = gltf.scene.children[18];
	logoParts.material = metalDetailsMat;

	logoParts2 = gltf.scene.children[19];
	logoParts2.material = blackPlasticInt;

	platesNums = gltf.scene.children[20];
	platesNums.material = platesMat;
	
	platesBody = gltf.scene.children[21];
	platesBody.material = plastic;
	
	wheelsSteel = gltf.scene.children[22];
	wheelsSteel.material = metalDetailsForLightsMat;
	
	wheelsBlack = gltf.scene.children[23];
	wheelsBlack.material = plastic;
		
	wingSteel = gltf.scene.children[25];
	wingSteel.material = metalDetailsMatComp;
	
	wingBlack = gltf.scene.children[24];
	wingBlack.material = plasticMidBlackWing;
	
	componentsPedalMetal = gltf.scene.children[26];
	componentsPedalMetal.material = metalDetailsMat;
	
	badge = gltf.scene.children[27];
	badge.material = badgeMat;
	
	badgeMetal = gltf.scene.children[28];
	badgeMetal.material = metalDetailsForLightsMat;
	
	frontGridMetal = gltf.scene.children[29];
	frontGridMetal.material = metalDetailsMat;
	
	frontGridPlastic = gltf.scene.children[30];
	frontGridPlastic.material = plasticMidBlack;
	
	logoPedal = gltf.scene.children[31];
	logoPedal.material = badgeMat;
	
	frontLightsPlastic = gltf.scene.children[32];
	frontLightsPlastic.material = plasticMidBlackV;
	
	frontLightsGlassMini = gltf.scene.children[33];
	frontLightsGlassMini.material = glassDetailsMat_veryTransparentV;
	
	headLamps = gltf.scene.children[34];
	headLamps.material = headLampMat;
	
	headLampsGlossy = gltf.scene.children[35];
	headLampsGlossy.material = metalDetailsForLightsMatV;
	
	sign1 = gltf.scene.children[36];
	sign1.material = sign1Mat;
	
	sign2 = gltf.scene.children[37];
	sign2.material = sign1Mat2;
	
	sign3 = gltf.scene.children[38];
	sign3.material = sign1Mat3;
	
	sign4 = gltf.scene.children[39];
	sign4.material = sign1Mat4;
	
	concreteFloor = gltf.scene.children[40];
	concreteFloor.material = concreteFloorMat;
	
	sign5 = gltf.scene.children[41];
	sign5.material = sign1Mat5;
	
	/*
	sign2 = gltf.scene.children[33];
	sign2.material = sign1Mat2;
	*/

	//ring.position.set(0, 3, 0);
	//ring.rotation.y = 0.2;

	scene.add(ring, carbody, shadowUnderCar, walls1, plane1, floor1, floor2, metalDetails, frontLights, interiorGlass,plasticDetails, interiorDetails, frontLightsGlass, backlightsWhiteDetail, backLightsGlass, smoothLightsGlass, wheels, internalBlackParts, wheelsBlack, logoParts, wheelsSteel, frontGridMetal, frontGridPlastic,logoParts2, frontLightsPlastic, frontLightsGlassMini, headLampsGlossy, platesNums,  headLamps, platesBody, concreteFloor);
});

	function sceneaddComponents2() {
	scene.add(componentsPedalMetal, wingSteel, wingBlack, badge, badgeMetal, logoPedal)
}

	function sceneremoveComponents2() {
	scene.remove(componentsPedalMetal, wingSteel, wingBlack, badge, badgeMetal, logoPedal)
}

function addSign1() {
	scene.add(sign1);
	scene.remove(sign2,sign3,sign4,sign5)
}
function addSign2() {
	scene.add(sign2);
	scene.remove(sign1,sign3,sign4,sign5)
}
function addSign3() {
	scene.add(sign3);
	scene.remove(sign1,sign2,sign4,sign5)
}
function addSign4() {
	scene.add(sign4);
	scene.remove(sign1,sign2,sign3,sign5)
}

function addSign5() {
	scene.add(sign5);
	scene.remove(sign1,sign4, sign2,sign3,)
}




const worldMat = new THREE.MeshBasicMaterial({
map: worldTexture,
transparent: false,    // so we can see the ground
depthWrite: true,    // so we don't have to sort
});

let worldd;
gltfLoader.load('gltf/world.gtlf.glb', (Egltf) => {
worldd = Egltf.scene.children[0];
worldd.material = worldMat;
scene.add(worldd);
});














const anchorMat = new THREE.MeshBasicMaterial({
transparent: true, opacity: 0
//side: THREE.DoubleSide
});
let anchor1;
gltfLoader.load('gltf/anchor1.glb', (Zgltf) => {
	anchor1 = Zgltf.scene.children[0];
	anchor1.material = anchorMat;
	scene.add(anchor1);
});
let anchor2;
gltfLoader.load('gltf/anchor2.glb', (Xgltf) => {
	anchor2 = Xgltf.scene.children[0];
	anchor2.material = anchorMat;
	scene.add(anchor2);
});
let anchor3;
gltfLoader.load('gltf/anchor3.glb', (Xgltf) => {
	anchor3 = Xgltf.scene.children[0];
	anchor3.material = anchorMat;
	scene.add(anchor3);
});
let anchor4;
gltfLoader.load('gltf/anchor4.glb', (Xgltf) => {
	anchor4 = Xgltf.scene.children[0];
	anchor4.material = anchorMat;
	scene.add(anchor4);
});
let anchor5;
gltfLoader.load('gltf/anchor5.glb', (Xgltf) => {
	anchor5 = Xgltf.scene.children[0];
	anchor5.material = anchorMat;
	scene.add(anchor5);
});
let anchor6;
gltfLoader.load('gltf/anchor6.glb', (Xgltf) => {
	anchor6 = Xgltf.scene.children[0];
	anchor6.material = anchorMat;
	scene.add(anchor6);
});
let anchor7;
gltfLoader.load('gltf/anchor7.glb', (Xgltf) => {
	anchor7 = Xgltf.scene.children[0];
	anchor7.material = anchorMat;
	scene.add(anchor7);
});

let anchor_rigid;
gltfLoader.load('gltf/anchor_rigid.glb', (Xgltf) => {
	anchor_rigid = Xgltf.scene.children[0];
	anchor_rigid.material = anchorMat;
	scene.add(anchor_rigid);
})


const labelContainerElem = document.querySelector('#labels');
const elem = document.createElement('div');
elem.textContent = '1';
labelContainerElem.appendChild(elem);
const tempVLEFT = new THREE.Vector3( );

const labelContainerElem2 = document.querySelector('#labels2');
const elem2 = document.createElement('div');
elem2.textContent = '2';
labelContainerElem2.appendChild(elem2);
const tempV2 = new THREE.Vector3( );

const labelContainerElem3 = document.querySelector('#labels3');
const elem3 = document.createElement('div');
elem3.textContent = '3';
labelContainerElem3.appendChild(elem3);
const tempV3 = new THREE.Vector3( );

const labelContainerElem4 = document.querySelector('#labels4');
const elem4 = document.createElement('div');
elem4.textContent = '4';
labelContainerElem4.appendChild(elem4);
const tempV4 = new THREE.Vector3( );

const labelContainerElem5 = document.querySelector('#labels5');
const elem5 = document.createElement('div');
elem5.textContent = '1';
labelContainerElem5.appendChild(elem5);
const tempV5 = new THREE.Vector3( );

const labelContainerElem6 = document.querySelector('#labels6');
const elem6 = document.createElement('div');
elem6.textContent = '2';
labelContainerElem6.appendChild(elem6);
const tempV6 = new THREE.Vector3( );

const labelContainerElem7 = document.querySelector('#labels7');
const elem7 = document.createElement('div');
elem7.textContent = '3';
labelContainerElem7.appendChild(elem7);
const tempV7 = new THREE.Vector3( );

let elemBehindObject, elem2BehindObject, elem3BehindObject, elem4BehindObject, elem5BehindObject, elem6BehindObject, elem7BehindObject;

	function updateAnnotationOpacity() {
	const ringDistance = camera.position.distanceTo(anchor_rigid.position);
	const elemDistance = camera.position.distanceTo(anchor1.position);
	elemBehindObject = ringDistance > elemDistance;
	elem.style.opacity = elemBehindObject ? 1: 0.1;
 }

	function updateAnnotationOpacity2() {
	const ring2Distance = camera.position.distanceTo(anchor_rigid.position);
	const elem2Distance = camera.position.distanceTo(anchor2.position);
	elem2BehindObject = ring2Distance > elem2Distance;
	elem2.style.opacity = elem2BehindObject ? 1: 0.1;
 }
 
	function updateAnnotationOpacity3() {
	const ring3Distance = camera.position.distanceTo(anchor_rigid.position);
	const elem3Distance = camera.position.distanceTo(anchor3.position);
	elem3BehindObject = ring3Distance > elem3Distance;
	elem3.style.opacity = elem3BehindObject ? 1: 0.1;
 }

	function updateAnnotationOpacity4() {
	const ring4Distance = camera.position.distanceTo(anchor_rigid.position);
	const elem4Distance = camera.position.distanceTo(anchor4.position);
	elem4BehindObject = ring4Distance > elem4Distance;
	elem4.style.opacity = elem4BehindObject ? 1: 0.1;
 }
     
	function updateAnnotationOpacity5() {
	const ring5Distance = camera.position.distanceTo(anchor_rigid.position);
	const elem5Distance = camera.position.distanceTo(anchor5.position);
	elem5BehindObject = ring5Distance > elem5Distance;
	elem5.style.opacity = elem5BehindObject ? 1: 0.1;
 }

	function updateAnnotationOpacity6() {
	const ring6Distance = camera.position.distanceTo(anchor_rigid.position);
	const elem6Distance = camera.position.distanceTo(anchor6.position);
	elem6BehindObject = ring6Distance > elem6Distance;
	elem6.style.opacity = elem6BehindObject ? 1: 0.1;
 }

	function updateAnnotationOpacity7() {
	const ring7Distance = camera.position.distanceTo(anchor_rigid.position);
	const elem7Distance = camera.position.distanceTo(anchor7.position);
	elem7BehindObject = ring7Distance > elem7Distance;
	elem7.style.opacity = elem7BehindObject ? 1: 0.1;
 }
     
     




    
/* PRE  LIGHTS
const color = 0xFFFFFF;
const intensity = 0;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-50.6, 34, -100);
light.target.position.set(-24, 100, 16);
scene.add(light);
scene.add(light.target);
//const helper = new THREE.DirectionalLightHelper(light);
//scene.add(helper);


const color2 = 0xFFFFFF;
const intensity2 = 0;
const light2 = new THREE.DirectionalLight(color2, intensity2);
light2.position.set(-18, 14, -6);
light2.target.position.set(0, 0, 0);
scene.add(light2);
scene.add(light2.target);
//const helper = new THREE.DirectionalLightHelper(light2);
//scene.add(helper);

const color3 = 0xFFFFFF;
const intensity3 = 0; 
const light3 = new THREE.DirectionalLight(color3, intensity3);
//light3.position.set(-11, 5, 6.7);
//light3.target.position.set(0, 0, 0);
light3.position.set(-20, 18.1, 6.7);
light3.target.position.set(-11, 20, 0);
scene.add(light3);
scene.add(light3.target);

//const helper = new THREE.DirectionalLightHelper(light3);
//scene.add(helper);

var light4 = new THREE.DirectionalLight( 0xffffff, );
const intensity4 = 0; 
light4.position.set( 8, 3, 5 );
scene.add(light4); 

// for dat gui 
function updateLight() {
light.target.updateMatrixWorld();
light2.target.updateMatrixWorld();
light3.target.updateMatrixWorld();
helper.update();
}

*/





/*
class ColorGUIHelper {
constructor(object, prop) {
this.object = object;
this.prop = prop;
}
get value() {
return `#${this.object[this.prop].getHexString()}`;
}
set value(hexString) {
this.object[this.prop].set(hexString);
}
}
function makeXYZGUI(gui, vector3, name, onChangeFn) {
const folder = gui.addFolder(name);
folder.add(vector3, 'x', -100, 100).onChange(onChangeFn);
folder.add(vector3, 'y', 0, 100).onChange(onChangeFn);
folder.add(vector3, 'z', -100, 100).onChange(onChangeFn);
folder.open();
}
  
const gui = new dat.GUI();
gui.addColor(new ColorGUIHelper(blueCar, 'color'), 'value').name('color');
//gui.add(light, 'intensity', 0, 2, 0.01);

//makeXYZGUI(gui, light.position, 'position', updateLight);
//makeXYZGUI(gui, light.target.position, 'target', updateLight);
*/


















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

function render() {
	renderer.render(scene, camera);
	requestAnimationFrame(render);
	
	controls.update();
	TWEEN.update();
	
 
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
  }
    camera.updateProjectionMatrix();


	anchor1.updateWorldMatrix(true, false);
	anchor1.getWorldPosition(tempVLEFT); 
	tempVLEFT.project(camera);
	const x = (tempVLEFT.x * .5 + .5) * canvas.clientWidth;
	const y = (tempVLEFT.y * -.5 + .5) * canvas.clientHeight;
	elem.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
	updateAnnotationOpacity();

	anchor2.updateWorldMatrix(true, false);
	anchor2.getWorldPosition(tempV2); 
	tempV2.project(camera);
	const x2 = (tempV2.x * .5 + .5) * canvas.clientWidth;
	const y2 = (tempV2.y * -.5 + .5) * canvas.clientHeight;
	elem2.style.transform = `translate(-50%, -50%) translate(${x2}px,${y2}px)`;
	updateAnnotationOpacity2();

	anchor3.updateWorldMatrix(true, false);
	anchor3.getWorldPosition(tempV3); 
	tempV3.project(camera);
	const x3 = (tempV3.x * .5 + .5) * canvas.clientWidth;
	const y3 = (tempV3.y * -.5 + .5) * canvas.clientHeight;
	elem3.style.transform = `translate(-50%, -50%) translate(${x3}px,${y3}px)`;
	updateAnnotationOpacity3();

	anchor4.updateWorldMatrix(true, false);
	anchor4.getWorldPosition(tempV4); 
	tempV4.project(camera);
	const x4 = (tempV4.x * .5 + .5) * canvas.clientWidth;
	const y4 = (tempV4.y * -.5 + .5) * canvas.clientHeight;
	elem4.style.transform = `translate(-50%, -50%) translate(${x4}px,${y4}px)`;
	updateAnnotationOpacity4();

	anchor5.updateWorldMatrix(true, false);
	anchor5.getWorldPosition(tempV5); 
	tempV5.project(camera);
	const x5 = (tempV5.x * .5 + .5) * canvas.clientWidth;
	const y5 = (tempV5.y * -.5 + .5) * canvas.clientHeight;
	elem5.style.transform = `translate(-50%, -50%) translate(${x5}px,${y5}px)`;
	updateAnnotationOpacity5();

	anchor6.updateWorldMatrix(true, false);
	anchor6.getWorldPosition(tempV6); 
	tempV6.project(camera);
	const x6 = (tempV6.x * .5 + .5) * canvas.clientWidth;
	const y6 = (tempV6.y * -.5 + .5) * canvas.clientHeight;
	elem6.style.transform = `translate(-50%, -50%) translate(${x6}px,${y6}px)`;
	updateAnnotationOpacity6();

	anchor7.updateWorldMatrix(true, false);
	anchor7.getWorldPosition(tempV7); 
	tempV7.project(camera);
	const x7 = (tempV7.x * .5 + .5) * canvas.clientWidth;
	const y7 = (tempV7.y * -.5 + .5) * canvas.clientHeight;
	elem7.style.transform = `translate(-50%, -50%) translate(${x7}px,${y7}px)`;
	updateAnnotationOpacity7();


	console.clear()
	controls.update();
	TWEEN.update();
	//updateLight();

	//console.log(camera.position.x, camera.position.y, camera.position.z)
}
   
requestAnimationFrame(render);
render();

























function funct1() {
		floor1.material = whiteCar;
}

function funct2() {
		floor1.material = darkRedCar;
}

function funct3() {
		floor1.material = blueCar;
}

function funct4() {
		floor1.material = silverCar;
}

function funct5() {
		floor1.material = greyCar;
}




















function componentOnCameraAnimation() {
TWEEN.removeAll();
controls.enableRotate = false;
controls.enableZoom = false;
controls.enablePan = false;
var camNewPosition= {x : 1.16, y : -0.04, z : 1.85};
var ct2 = new TWEEN.Tween(camera.position).to(camNewPosition, 100)
.start();

top2_1_component.style.color = "darkgrey";
top2_1_component.style.cursor = "default";
top2_1_component.style.textDecoration = "underline";

top2_2_component.style.color = "black";
top2_2_component.style.cursor = "pointer";
top2_2_component.style.textDecoration = "none";

top2_3_component.style.color = "black";
top2_3_component.style.cursor = "pointer";
top2_3_component.style.textDecoration = "none";

top2_4_component.style.color = "black";
top2_4_component.style.cursor = "pointer";
top2_4_component.style.textDecoration = "none";

top2_5_component.style.color = "black";
top2_5_component.style.cursor = "pointer";
top2_5_component.style.textDecoration = "none";

top2_6_component.style.color = "black";
top2_6_component.style.cursor = "pointer";
top2_6_component.style.textDecoration = "none";
};



function backDecOnCameraAnimation() {
TWEEN.removeAll();
controls.enableRotate = false;
controls.enableZoom = false;
controls.enablePan = false;
var camNewPosition= {x : 2.3, y : -0.03, z : 0.27};
var ct3 = new TWEEN.Tween(camera.position).to(camNewPosition, 100)
.easing( TWEEN.Easing.Quadratic.EaseOut)
.start();

top2_1_component.style.color = "black";
top2_1_component.style.cursor = "pointer";
top2_1_component.style.textDecoration = "none";

top2_2_component.style.color = "darkgrey";
top2_2_component.style.cursor = "default";
top2_2_component.style.textDecoration = "underline";

top2_3_component.style.color = "black";
top2_3_component.style.cursor = "pointer";
top2_3_component.style.textDecoration = "none";

top2_4_component.style.color = "black";
top2_4_component.style.cursor = "pointer";
top2_4_component.style.textDecoration = "none";

top2_5_component.style.color = "black";
top2_5_component.style.cursor = "pointer";
top2_5_component.style.textDecoration = "none";

top2_6_component.style.color = "black";
top2_6_component.style.cursor = "pointer";
top2_6_component.style.textDecoration = "none";

 /*
var ct2 = new TWEEN.Tween( camera.position)
.to( camNewTopPosition, 1200 )
.onComplete(function(){
 var ct3 = new TWEEN.Tween(camera.position).to(camNewPosition, 1400).start();
})
.start();
*/
};

function componentOnCameraAnimation2() {
TWEEN.removeAll();
controls.enableRotate = false;
controls.enableZoom = false;
controls.enablePan = false;
var camNewPosition= {x : 0.34, y : -0.009, z : -2.16};
var ct2 = new TWEEN.Tween(camera.position).to(camNewPosition, 100)
.start();

top2_6_component.style.color = "darkgrey";
top2_6_component.style.cursor = "default";
top2_6_component.style.textDecoration = "underline";

top2_2_component.style.color = "black";
top2_2_component.style.cursor = "pointer";
top2_2_component.style.textDecoration = "none";

top2_3_component.style.color = "black";
top2_3_component.style.cursor = "pointer";
top2_3_component.style.textDecoration = "none";

top2_4_component.style.color = "black";
top2_4_component.style.cursor = "pointer";
top2_4_component.style.textDecoration = "none";

top2_5_component.style.color = "black";
top2_5_component.style.cursor = "pointer";
top2_5_component.style.textDecoration = "none";

top2_1_component.style.color = "black";
top2_1_component.style.cursor = "pointer";
top2_1_component.style.textDecoration = "none";
};

function wingOnCameraAnimation() {
TWEEN.removeAll();
//controls.minDistance = 1.2;
controls.enableRotate = false;
controls.enableZoom = false;
controls.enablePan = false;
//var camNewPosition= {x : 1.7, y : -0.1, z : 1.3};
//var camNewPosition= {x : -0.981, y : 0.008, z : 0.658};
var camNewPosition= {x : -1.62, y : 0.14, z : 1.44};

var camNewTopPosition = {
x: camera.position.x,
y: 1.3,
z: camera.position.z,
};
var ct3 = new TWEEN.Tween(camera.position).to(camNewPosition, 100)
.easing( TWEEN.Easing.Quadratic.EaseOut)
.start();

top2_1_component.style.color = "black";
top2_1_component.style.cursor = "pointer";
top2_1_component.style.textDecoration = "none";

top2_4_component.style.color = "darkgrey";
top2_4_component.style.cursor = "default";
top2_4_component.style.textDecoration = "underline";

top2_3_component.style.color = "black";
top2_3_component.style.cursor = "pointer";
top2_3_component.style.textDecoration = "none";

top2_2_component.style.color = "black";
top2_2_component.style.cursor = "pointer";
top2_2_component.style.textDecoration = "none";

top2_5_component.style.color = "black";
top2_5_component.style.cursor = "pointer";
top2_5_component.style.textDecoration = "none";

top2_6_component.style.color = "black";
top2_6_component.style.cursor = "pointer";
top2_6_component.style.textDecoration = "none";

/*
var ct2 = new TWEEN.Tween( camera.position)
.to( camNewTopPosition, 1200 )
.onComplete(function(){
var ct3 = new TWEEN.Tween(camera.position).to(camNewPosition, 1400).start();
})
.start();
*/
};



function badgeOnCameraAnimation() {

controls.enableRotate = false;
controls.enableZoom = false;
controls.enablePan = false;
var camNewPosition= {x : 1.80, y : 0.271, z : 0.972};
var ct2 = new TWEEN.Tween(camera.position).to(camNewPosition, 100)
.start();

top2_1_component.style.color = "black";
top2_1_component.style.cursor = "pointer";
top2_1_component.style.textDecoration = "none";

top2_5_component.style.color = "darkgrey";
top2_5_component.style.cursor = "default";
top2_5_component.style.textDecoration = "underline";

top2_3_component.style.color = "black";
top2_3_component.style.cursor = "pointer";
top2_3_component.style.textDecoration = "none";

top2_4_component.style.color = "black";
top2_4_component.style.cursor = "pointer";
top2_4_component.style.textDecoration = "none";

top2_2_component.style.color = "black";
top2_2_component.style.cursor = "pointer";
top2_2_component.style.textDecoration = "none";

top2_6_component.style.color = "black";
top2_6_component.style.cursor = "pointer";
top2_6_component.style.textDecoration = "none";

};








function carSign1() {
top2_1_carsign.style.color = "darkgrey";
top2_1_carsign.style.cursor = "default";
top2_1_carsign.style.textDecoration = "underline";

top2_2_carsign.style.color = "black";
top2_2_carsign.style.cursor = "pointer";
top2_2_carsign.style.textDecoration = "none";
	
top2_3_carsign.style.color = "black";
top2_3_carsign.style.cursor = "pointer";
top2_3_carsign.style.textDecoration = "none";
	
top2_4_carsign.style.color = "black";
top2_4_carsign.style.cursor = "pointer";
top2_4_carsign.style.textDecoration = "none";

top2_5_carsign.style.color = "black";
top2_5_carsign.style.cursor = "pointer";
top2_5_carsign.style.textDecoration = "none";
}

function carSign2() {
top2_2_carsign.style.color = "darkgrey";
top2_2_carsign.style.cursor = "default";
top2_2_carsign.style.textDecoration = "underline";

top2_1_carsign.style.color = "black";
top2_1_carsign.style.cursor = "pointer";
top2_1_carsign.style.textDecoration = "none";
	
top2_3_carsign.style.color = "black";
top2_3_carsign.style.cursor = "pointer";
top2_3_carsign.style.textDecoration = "none";
	
top2_4_carsign.style.color = "black";
top2_4_carsign.style.cursor = "pointer";
top2_4_carsign.style.textDecoration = "none";

top2_5_carsign.style.color = "black";
top2_5_carsign.style.cursor = "pointer";
top2_5_carsign.style.textDecoration = "none";
}

function carSign3() {
top2_3_carsign.style.color = "darkgrey";
top2_3_carsign.style.cursor = "default";
top2_3_carsign.style.textDecoration = "underline";

top2_1_carsign.style.color = "black";
top2_1_carsign.style.cursor = "pointer";
top2_1_carsign.style.textDecoration = "none";
	
top2_2_carsign.style.color = "black";
top2_2_carsign.style.cursor = "pointer";
top2_2_carsign.style.textDecoration = "none";
	
top2_4_carsign.style.color = "black";
top2_4_carsign.style.cursor = "pointer";
top2_4_carsign.style.textDecoration = "none";

top2_5_carsign.style.color = "black";
top2_5_carsign.style.cursor = "pointer";
top2_5_carsign.style.textDecoration = "none";
}

function carSign4() {
top2_4_carsign.style.color = "darkgrey";
top2_4_carsign.style.cursor = "default";
top2_4_carsign.style.textDecoration = "underline";

top2_1_carsign.style.color = "black";
top2_1_carsign.style.cursor = "pointer";
top2_1_carsign.style.textDecoration = "none";
	
top2_2_carsign.style.color = "black";
top2_2_carsign.style.cursor = "pointer";
top2_2_carsign.style.textDecoration = "none";
	
top2_3_carsign.style.color = "black";
top2_3_carsign.style.cursor = "pointer";
top2_3_carsign.style.textDecoration = "none";

top2_5_carsign.style.color = "black";
top2_5_carsign.style.cursor = "pointer";
top2_5_carsign.style.textDecoration = "none";
}

function carSign5() {
top2_5_carsign.style.color = "darkgrey";
top2_5_carsign.style.cursor = "default";
top2_5_carsign.style.textDecoration = "underline";

top2_1_carsign.style.color = "black";
top2_1_carsign.style.cursor = "pointer";
top2_1_carsign.style.textDecoration = "none";
	
top2_2_carsign.style.color = "black";
top2_2_carsign.style.cursor = "pointer";
top2_2_carsign.style.textDecoration = "none";
	
top2_3_carsign.style.color = "black";
top2_3_carsign.style.cursor = "pointer";
top2_3_carsign.style.textDecoration = "none";

top2_4_carsign.style.color = "black";
top2_4_carsign.style.cursor = "pointer";
top2_4_carsign.style.textDecoration = "none";
}






function offCameraAnimation() {
TWEEN.removeAll();

controls.enableRotate = true;
controls.enableZoom = true;
controls.enablePan = true;

var camNewTopPosition = {
  x: camera.position.x,
  y: camera.position.y,
  z: camera.position.z,
 };
//var camNewPosition = {x : -3.2, y : -0.19, z : 2};
var camTween = new TWEEN.Tween(camera.position).to(camNewTopPosition, 1)
.start();

top2_1_component.style.color = "black";
top2_1_component.style.cursor = "pointer";
top2_1_component.style.textDecoration = "none";
top2_2_component.style.color = "black";
top2_2_component.style.cursor = "pointer";
top2_2_component.style.textDecoration = "none";
top2_3_component.style.color = "black";
top2_3_component.style.cursor = "pointer";
top2_3_component.style.textDecoration = "none";
top2_4_component.style.color = "black";
top2_4_component.style.cursor = "pointer";
top2_4_component.style.textDecoration = "none";
top2_5_component.style.color = "black";
top2_5_component.style.cursor = "pointer";
top2_5_component.style.textDecoration = "none";
top2_6_component.style.color = "black";
top2_6_component.style.cursor = "pointer";
top2_6_component.style.textDecoration = "none";

sceneremoveComponents2();
scene.remove(sign1,sign2,sign3,sign4,sign5);
};


