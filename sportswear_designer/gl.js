import * as THREE from '../threejs/build_r132/build/three.module.js';

import { CubeTextureLoader } from '../threejs/build_r132/src/loaders/CubeTextureLoader.js';
import { GLTFLoader } from '../threejs/build_r132/examples/jsm/loaders/GLTFLoader.js';
import { TextureLoader } from '../threejs/build_r132/src/loaders/TextureLoader.js';
import { OrbitControls } from '../threejs/build_r132/examples/jsm/controls/OrbitControls.js';
import { DRACOLoader } from '../threejs/build_r132/examples/jsm/loaders/DRACOLoader.js';

const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
});




renderer.setPixelRatio(window.devicePixelRatio);
var scene = new THREE.Scene();
const fov = 45; //45
const aspect = 2; // the canvas default
const near = 0.1;
const far = 200;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 5);
camera.lookAt(scene.position);
scene.add(camera);

//controls//
const controls = new OrbitControls(camera, canvas);
controls.target.set(-0, -0.2, -0);
controls.minDistance = 3; //2.8
controls.maxDistance = 5; //5
controls.maxPolarAngle = Math.PI / 2;
controls.enableKeys = false;
controls.enablePan = false;
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.autoRotate = false;
controls.autoRotateSpeed = 0.3;
controls.enabled = true;

const textureCube = new CubeTextureLoader().load([
  "img/new/px.png",
  "img/new/nx.png",
  "img/new/py.png",
  "img/new/ny.png",
  "img/new/pz.png",
  "img/new/nz.png",
]);

const loader = new TextureLoader();

const Fabric_Main_NRM = loader.load("img/Fabric_main_NRM.jpg");
Fabric_Main_NRM.flipY = false;
Fabric_Main_NRM.wrapS = THREE.RepeatWrapping;
Fabric_Main_NRM.wrapT = THREE.RepeatWrapping;

const ElasticBlack_textureNRM = loader.load("img/Elastic_blackNRM.jpg");
ElasticBlack_textureNRM.flipY = false;
ElasticBlack_textureNRM.wrapS = THREE.RepeatWrapping;
ElasticBlack_textureNRM.wrapT = THREE.RepeatWrapping;

const ElasticBlack_texture = loader.load("img/Elastic_black.jpg");
ElasticBlack_texture.flipY = false;
ElasticBlack_texture.wrapS = THREE.RepeatWrapping;
ElasticBlack_texture.wrapT = THREE.RepeatWrapping;

const Elastic_main_NRM = loader.load("img/Elastic_main_NRM.jpg");
Elastic_main_NRM.flipY = false;
Elastic_main_NRM.wrapS = THREE.RepeatWrapping;
Elastic_main_NRM.wrapT = THREE.RepeatWrapping;

const Laces_texture = loader.load("img/Laces.jpg");
Laces_texture.flipY = false;
Laces_texture.wrapS = THREE.RepeatWrapping;
Laces_texture.wrapT = THREE.RepeatWrapping;

const Laces_texture_NRM = loader.load("img/Laces_NRM.jpg");
Laces_texture_NRM.flipY = false;
Laces_texture_NRM.wrapS = THREE.RepeatWrapping;
Laces_texture_NRM.wrapT = THREE.RepeatWrapping;

const TextMiniDetails = loader.load("img/TextMiniDetails.png");
TextMiniDetails.flipY = false;

const Logo1_texture = loader.load("img/Logo1.png");
Logo1_texture.flipY = false;

const Logo2_texture = loader.load("img/Logo2.png");
Logo2_texture.flipY = false;

const Logo3_texture = loader.load("img/Logo207x207.png");
Logo3_texture.flipY = false;

const DesignShorts_texture = loader.load("img/Design1_shorts.png");
DesignShorts_texture.flipY = false;

const DesignJersey_texture = loader.load("img/Design1_jersey.png");
DesignJersey_texture.flipY = false;

const JockTag_texture = loader.load("img/Jock-Tag.png");
JockTag_texture.flipY = false;

const SizeLabel_texture = loader.load("img/SizeLabel.png");
SizeLabel_texture.flipY = false;

const SizeLabelWhite_texture = loader.load("img/SizeLabelWhite.png");
SizeLabelWhite_texture.flipY = false;

const empty_texture = loader.load("img/empty.png");
empty_texture.flipY = false;

const testMat = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  wireframe: true,
});

const SticksMat = new THREE.MeshPhongMaterial({
  color: 0xffffff,
});

const Fabric_Main = new THREE.MeshPhongMaterial({
  envMap: textureCube,
  envMapIntensity: 1,
  normalMap: Fabric_Main_NRM,
  normalScale: new THREE.Vector2(2, 2),
  color: 0xffffff,
  shininess: 10,
  reflectivity: 0,
  side: THREE.DoubleSide,
});

const Fabric_Main_Jersey = new THREE.MeshPhongMaterial({
  envMap: textureCube,
  envMapIntensity: 1,
  normalMap: Fabric_Main_NRM,
  normalScale: new THREE.Vector2(2, 2),
  color: 0xffffff,
  shininess: 10,
  reflectivity: 0,
  side: THREE.DoubleSide,
});

const ElasticBlackMat = new THREE.MeshPhongMaterial({
  envMap: textureCube,
  envMapIntensity: 1,
  map: ElasticBlack_texture,
  normalMap: ElasticBlack_textureNRM,
  normalScale: new THREE.Vector2(2, 2),
  reflectivity: 0,
});

const ElasticFabric_Main = new THREE.MeshPhongMaterial({
  envMap: textureCube,
  envMapIntensity: 0,
  normalMap: Elastic_main_NRM,
  normalScale: new THREE.Vector2(10, 10),
  color: 0xffffff,
  reflectivity: 0,
  shininess: 10,
});

const Laces_Mat = new THREE.MeshPhongMaterial({
  envMap: textureCube,
  map: Laces_texture,
  envMapIntensity: 1,
  normalMap: Laces_texture_NRM,
  normalScale: new THREE.Vector2(10, 10),
  color: 0xffffff,
});

const TextMiniDetails_Mat = new THREE.MeshBasicMaterial({
  map: TextMiniDetails,
  transparency: 0,
  transparent: true,
  opacity: 1,
});

const Logo1_Mat = new THREE.MeshBasicMaterial({
  map: Logo1_texture,
  color: 0xffffff,
  transparency: 0,
  transparent: true,
  opacity: 1,
});

const Logo2_Mat = new THREE.MeshBasicMaterial({
  map: Logo2_texture,
  transparency: 0,
  transparent: true,
  opacity: 1,
});

const Logo3_Mat = new THREE.MeshBasicMaterial({
  map: Logo3_texture,
  transparency: 0,
  transparent: true,
  opacity: 1,
  color: 0x676767,
});

const DesignShorts_Mat = new THREE.MeshBasicMaterial({
  map: DesignShorts_texture,
  metalness: 0,
  roughness: 1,
  transparency: 0,
  transparent: true,
  opacity: 1,
});

const DesignJersey_Mat = new THREE.MeshBasicMaterial({
  map: DesignJersey_texture,
  transparency: 0,
  transparent: true,
  opacity: 1,
});

const JockTag_mat = new THREE.MeshBasicMaterial({
  map: JockTag_texture,
  transparency: 0,
  transparent: true,
  opacity: 1,
});

const SizeLabel_mat = new THREE.MeshBasicMaterial({
  map: SizeLabel_texture,
  transparency: 0,
  transparent: true,
  opacity: 1,
});


const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("../threejs/build_r132/examples/js/libs/draco/");
//dracoLoader.setDecoderConfig({type: 'js'});
gltfLoader.setDRACOLoader(dracoLoader);

const Shorts_group = new THREE.Group();
const Jersey_group = new THREE.Group();


/* let testPlaneNumber;
gltfLoader.load("gltf/test1.glb", (gltf) => {
  testPlaneNumber = gltf.scene.children[0];
  testPlaneNumber.material = testMat;
  Jersey_group.add(testPlaneNumber);
}); */

let shorts_mainMaterial, shorts_stiching, shorts_ElasticInsideBlack, shorts_ElasticFrontMain, shorts_Laces, shorts_TextMiniDetails, shorts_Logo1, shorts_Logo2, shorts_Design;
let Jersey_Intucked_mainMaterial, Jersey_Design, Jersey_Intucked_stiching,  Jersey_Outtucked_mainMaterial,  Jersey_Outtucked_stiching, Jersey_SizeLabel, Jersey_JockTag, Plane_LeftChest, Plane_RightChest, Plane_BellowNeck, Plane_BackUnderNumberTucked, Plane_BackUnderNumberUntucked, Plane_LeftLowerShorts, Plane_LeftUpperShorts, Plane_RightLowerShorts, Plane_RightUpperShorts;

gltfLoader.load("gltf/shorts_MainMaterials.glb", (gltf) => {
  shorts_mainMaterial = gltf.scene.children[0];
  shorts_mainMaterial.material = Fabric_Main;
  shorts_mainMaterial.castShadow = true;
  shorts_mainMaterial.receiveShadow = true;
  shorts_mainMaterial.renderOrder = 4;
  Shorts_group.add(shorts_mainMaterial);
  scene.add(Shorts_group);
});

gltfLoader.load("gltf/shorts_Stiching.glb", (gltf) => {
  shorts_stiching = gltf.scene.children[0];
  shorts_stiching.material = SticksMat;
  Shorts_group.add(shorts_stiching);
});

gltfLoader.load("gltf/shorts_MainMaterialsElastic.glb", (gltf) => {
  shorts_ElasticFrontMain = gltf.scene.children[0];
  shorts_ElasticFrontMain.material = ElasticFabric_Main;
  Shorts_group.add(shorts_ElasticFrontMain);
});

gltfLoader.load("gltf/shorts_BlackMaterialsElastic.glb", (gltf) => {
  shorts_ElasticInsideBlack = gltf.scene.children[0];
  shorts_ElasticInsideBlack.material = ElasticBlackMat;
  Shorts_group.add(shorts_ElasticInsideBlack);
});

gltfLoader.load("gltf/shorts_Design.glb", (gltf) => {
  shorts_Design = gltf.scene.children[0];
  shorts_Design.material = DesignShorts_Mat;
  shorts_Design.renderOrder = 2;
  Shorts_group.add(shorts_Design);
});

gltfLoader.load("gltf/shorts_Laces.glb", (gltf) => {
  shorts_Laces = gltf.scene.children[0];
  shorts_Laces.material = Laces_Mat;
  Shorts_group.add(shorts_Laces);
});

gltfLoader.load("gltf/shorts_TextInside.glb", (gltf) => {
  shorts_TextMiniDetails = gltf.scene.children[0];
  shorts_TextMiniDetails.material = TextMiniDetails_Mat;
  Shorts_group.add(shorts_TextMiniDetails);
});

gltfLoader.load("gltf/shorts_Logo1.glb", (gltf) => {
  shorts_Logo1 = gltf.scene.children[0];
  shorts_Logo1.material = Logo1_Mat;
  Shorts_group.add(shorts_Logo1);
});

gltfLoader.load("gltf/shorts_Logo2.glb", (gltf) => {
  shorts_Logo2 = gltf.scene.children[0];
  shorts_Logo2.material = Logo2_Mat;
  Shorts_group.add(shorts_Logo2);
});

gltfLoader.load("gltf/Jersey_Intucked.glb", (gltf) => {
  Jersey_Intucked_mainMaterial = gltf.scene.children[0];
  Jersey_Intucked_mainMaterial.material = Fabric_Main_Jersey;
  Jersey_Intucked_mainMaterial.castShadow = true;
  Jersey_Intucked_mainMaterial.receiveShadow = true;
  Jersey_Intucked_stiching = gltf.scene.children[1];
  Jersey_Intucked_stiching.material = Fabric_Main_Jersey;
});

gltfLoader.load("gltf/Jersey_Outtucked.glb", (gltf) => {
  Jersey_Outtucked_mainMaterial = gltf.scene.children[0];
  Jersey_Outtucked_mainMaterial.material = Fabric_Main_Jersey;
  Jersey_Outtucked_mainMaterial.castShadow = true;
  Jersey_Outtucked_mainMaterial.receiveShadow = true;
  Jersey_Outtucked_stiching = gltf.scene.children[1];
  Jersey_Outtucked_stiching.material = Fabric_Main_Jersey;
  Jersey_group.add(Jersey_Outtucked_mainMaterial, Jersey_Outtucked_stiching);
  scene.add(Jersey_group);
});

gltfLoader.load("gltf/Jersey_Design.glb", (gltf) => {
  Jersey_Design = gltf.scene.children[0];
  Jersey_Design.material = DesignJersey_Mat;
  Jersey_group.add(Jersey_Design);
});

gltfLoader.load("gltf/Jersey_SizeLabel.glb", (gltf) => {
  Jersey_SizeLabel = gltf.scene.children[0];
  Jersey_SizeLabel.material = SizeLabel_mat;
  Jersey_group.add(Jersey_SizeLabel);
});

gltfLoader.load("gltf/Jersey_JockTag.glb", (gltf) => {
  Jersey_JockTag = gltf.scene.children[0];
  Jersey_JockTag.material = JockTag_mat;
  Jersey_group.add(Jersey_JockTag);
});

let Plane_Text_Front_Number_Canterbury;
gltfLoader.load("gltf/Plane_Text_Front_Number_Canterbury.glb", (gltf) => {
  Plane_Text_Front_Number_Canterbury = gltf.scene.children[0];
  Plane_Text_Front_Number_Canterbury.material = Text_Front_Number_mat;
  Plane_Text_Front_Number_Canterbury.renderOrder = 2;
});
let Plane_Text_Front_Number_CanterburyTucked;
gltfLoader.load("gltf/Plane_Text_Front_Number_CanterburyTucked.glb", (gltf) => {
  Plane_Text_Front_Number_CanterburyTucked = gltf.scene.children[0];
  Plane_Text_Front_Number_CanterburyTucked.material = Text_Front_Number_mat;
  Plane_Text_Front_Number_CanterburyTucked.renderOrder = 2;
});
let Plane_Text_Back_Number_Canterbury;
gltfLoader.load("gltf/Plane_Text_Back_Number_Canterbury.glb", (gltf) => {
  Plane_Text_Back_Number_Canterbury = gltf.scene.children[0];
  Plane_Text_Back_Number_Canterbury.material = Text_Front_Number_mat;
  Plane_Text_Back_Number_Canterbury.renderOrder = 2;
});
let Plane_Text_Back_Number_CanterburyTucked;
gltfLoader.load("gltf/Plane_Text_Back_Number_CanterburyTucked.glb", (gltf) => {
  Plane_Text_Back_Number_CanterburyTucked = gltf.scene.children[0];
  Plane_Text_Back_Number_CanterburyTucked.material = Text_Front_Number_mat;
  Plane_Text_Back_Number_CanterburyTucked.renderOrder = 2;
});

let Plane_Text_Front_Number_Emilio19;
gltfLoader.load("gltf/Plane_Text_Front_Number_Emilio19.glb", (gltf) => {
  Plane_Text_Front_Number_Emilio19 = gltf.scene.children[0];
  Plane_Text_Front_Number_Emilio19.renderOrder = 2;
  Plane_Text_Front_Number_Emilio19.material = Text_Front_Number_mat;
});
let Plane_Text_Front_Number_Emilio19Tucked;
gltfLoader.load("gltf/Plane_Text_Front_Number_Emilio19Tucked.glb", (gltf) => {
  Plane_Text_Front_Number_Emilio19Tucked = gltf.scene.children[0];
  Plane_Text_Front_Number_Emilio19Tucked.renderOrder = 2;
  Plane_Text_Front_Number_Emilio19Tucked.material = Text_Front_Number_mat;
});
let Plane_Text_Back_Number_Emilio19;
gltfLoader.load("gltf/Plane_Text_Back_Number_Emilio19.glb", (gltf) => {
  Plane_Text_Back_Number_Emilio19 = gltf.scene.children[0];
  Plane_Text_Back_Number_Emilio19.renderOrder = 2;
  Plane_Text_Back_Number_Emilio19.material = Text_Front_Number_mat;
});
let Plane_Text_Back_Number_Emilio19Tucked;
gltfLoader.load("gltf/Plane_Text_Back_Number_Emilio19Tucked.glb", (gltf) => {
  Plane_Text_Back_Number_Emilio19Tucked = gltf.scene.children[0];
  Plane_Text_Back_Number_Emilio19Tucked.renderOrder = 2;
  Plane_Text_Back_Number_Emilio19Tucked.material = Text_Front_Number_mat;
});

let Plane_Text_Front_Number_COCOGOOSE;
gltfLoader.load("gltf/Plane_Text_Front_Number_COCOGOOSE.glb", (gltf) => {
  Plane_Text_Front_Number_COCOGOOSE = gltf.scene.children[0];
  Plane_Text_Front_Number_COCOGOOSE.renderOrder = 2;
  Plane_Text_Front_Number_COCOGOOSE.material = Text_Front_Number_mat;
  Jersey_group.add(Plane_Text_Front_Number_COCOGOOSE);
});
let Plane_Text_Front_Number_COCOGOOSETucked;
gltfLoader.load("gltf/Plane_Text_Front_Number_COCOGOOSETucked.glb", (gltf) => {
  Plane_Text_Front_Number_COCOGOOSETucked = gltf.scene.children[0];
  Plane_Text_Front_Number_COCOGOOSETucked.renderOrder = 2;
  Plane_Text_Front_Number_COCOGOOSETucked.material = Text_Front_Number_mat;
});
let Plane_Text_Back_Number_COCOGOOSE;
gltfLoader.load("gltf/Plane_Text_Back_Number_COCOGOOSE.glb", (gltf) => {
  Plane_Text_Back_Number_COCOGOOSE = gltf.scene.children[0];
  Plane_Text_Back_Number_COCOGOOSE.renderOrder = 2;
  Plane_Text_Back_Number_COCOGOOSE.material = Text_Front_Number_mat;
  Jersey_group.add(Plane_Text_Back_Number_COCOGOOSE);
});
let Plane_Text_Back_Number_COCOGOOSETucked;
gltfLoader.load("gltf/Plane_Text_Back_Number_COCOGOOSETucked.glb", (gltf) => {
  Plane_Text_Back_Number_COCOGOOSETucked = gltf.scene.children[0];
  Plane_Text_Back_Number_COCOGOOSETucked.renderOrder = 2;
  Plane_Text_Back_Number_COCOGOOSETucked.material = Text_Front_Number_mat;
});

let Plane_Text_Front_Number_CollegeBold;
gltfLoader.load("gltf/Plane_Text_Front_Number_CollegeBold.glb", (gltf) => {
  Plane_Text_Front_Number_CollegeBold = gltf.scene.children[0];
  Plane_Text_Front_Number_CollegeBold.renderOrder = 2;
  Plane_Text_Front_Number_CollegeBold.material = Text_Front_Number_mat;
});
let Plane_Text_Front_Number_CollegeBoldTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_Number_CollegeBoldTucked.glb",
  (gltf) => {
    Plane_Text_Front_Number_CollegeBoldTucked = gltf.scene.children[0];
    Plane_Text_Front_Number_CollegeBoldTucked.renderOrder = 2;
    Plane_Text_Front_Number_CollegeBoldTucked.material = Text_Front_Number_mat;
  }
);
let Plane_Text_Back_Number_CollegeBold;
gltfLoader.load("gltf/Plane_Text_Back_Number_CollegeBold.glb", (gltf) => {
  Plane_Text_Back_Number_CollegeBold = gltf.scene.children[0];
  Plane_Text_Back_Number_CollegeBold.renderOrder = 2;
  Plane_Text_Back_Number_CollegeBold.material = Text_Front_Number_mat;
});
let Plane_Text_Back_Number_CollegeBoldTucked;
gltfLoader.load("gltf/Plane_Text_Back_Number_CollegeBoldTucked.glb", (gltf) => {
  Plane_Text_Back_Number_CollegeBoldTucked = gltf.scene.children[0];
  Plane_Text_Back_Number_CollegeBoldTucked.renderOrder = 2;
  Plane_Text_Back_Number_CollegeBoldTucked.material = Text_Front_Number_mat;
});

let Plane_Text_Front_Number_DeftoneStyles;
gltfLoader.load("gltf/Plane_Text_Front_Number_DeftoneStyles.glb", (gltf) => {
  Plane_Text_Front_Number_DeftoneStyles = gltf.scene.children[0];
  Plane_Text_Front_Number_DeftoneStyles.renderOrder = 2;
  Plane_Text_Front_Number_DeftoneStyles.material = Text_Front_Number_mat;
});
let Plane_Text_Front_Number_DeftoneStylesTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_Number_DeftoneStylesTucked.glb",
  (gltf) => {
    Plane_Text_Front_Number_DeftoneStylesTucked = gltf.scene.children[0];
    Plane_Text_Front_Number_DeftoneStylesTucked.renderOrder = 2;
    Plane_Text_Front_Number_DeftoneStylesTucked.material =
      Text_Front_Number_mat;
  }
);
let Plane_Text_Back_Number_DeftoneStyles;
gltfLoader.load("gltf/Plane_Text_Back_Number_DeftoneStyles.glb", (gltf) => {
  Plane_Text_Back_Number_DeftoneStyles = gltf.scene.children[0];
  Plane_Text_Back_Number_DeftoneStyles.renderOrder = 2;
  Plane_Text_Back_Number_DeftoneStyles.material = Text_Front_Number_mat;
});
let Plane_Text_Back_Number_DeftoneStylesTucked;
gltfLoader.load(
  "gltf/Plane_Text_Back_Number_DeftoneStylesTucked.glb",
  (gltf) => {
    Plane_Text_Back_Number_DeftoneStylesTucked = gltf.scene.children[0];
    Plane_Text_Back_Number_DeftoneStylesTucked.renderOrder = 2;
    Plane_Text_Back_Number_DeftoneStylesTucked.material = Text_Front_Number_mat;
  }
);

let Plane_Text_Front_Number_LEAGUESPARTANTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_Number_LEAGUESPARTANTucked.glb",
  (gltf) => {
    Plane_Text_Front_Number_LEAGUESPARTANTucked = gltf.scene.children[0];
    Plane_Text_Front_Number_LEAGUESPARTANTucked.renderOrder = 2;
    Plane_Text_Front_Number_LEAGUESPARTANTucked.material =
      Text_Front_Number_mat;
  }
);
let Plane_Text_Front_Number_LEAGUESPARTAN;
gltfLoader.load("gltf/Plane_Text_Front_Number_LEAGUESPARTAN.glb", (gltf) => {
  Plane_Text_Front_Number_LEAGUESPARTAN = gltf.scene.children[0];
  Plane_Text_Front_Number_LEAGUESPARTAN.renderOrder = 2;
  Plane_Text_Front_Number_LEAGUESPARTAN.material = Text_Front_Number_mat;
});
let Plane_Text_Back_Number_LEAGUESPARTANTucked;
gltfLoader.load(
  "gltf/Plane_Text_Back_Number_LEAGUESPARTANTucked.glb",
  (gltf) => {
    Plane_Text_Back_Number_LEAGUESPARTANTucked = gltf.scene.children[0];
    Plane_Text_Back_Number_LEAGUESPARTANTucked.renderOrder = 2;
    Plane_Text_Back_Number_LEAGUESPARTANTucked.material = Text_Front_Number_mat;
  }
);
let Plane_Text_Back_Number_LEAGUESPARTAN;
gltfLoader.load("gltf/Plane_Text_Back_Number_LEAGUESPARTAN.glb", (gltf) => {
  Plane_Text_Back_Number_LEAGUESPARTAN = gltf.scene.children[0];
  Plane_Text_Back_Number_LEAGUESPARTAN.renderOrder = 2;
  Plane_Text_Back_Number_LEAGUESPARTAN.material = Text_Front_Number_mat;
});

let Plane_Text_Front_Number_Monoton;
gltfLoader.load("gltf/Plane_Text_Front_Number_Monoton.glb", (gltf) => {
  Plane_Text_Front_Number_Monoton = gltf.scene.children[0];
  Plane_Text_Front_Number_Monoton.renderOrder = 2;
  Plane_Text_Front_Number_Monoton.material = Text_Front_Number_mat;
});
let Plane_Text_Front_Number_MonotonTucked;
gltfLoader.load("gltf/Plane_Text_Front_Number_MonotonTucked.glb", (gltf) => {
  Plane_Text_Front_Number_MonotonTucked = gltf.scene.children[0];
  Plane_Text_Front_Number_MonotonTucked.renderOrder = 2;
  Plane_Text_Front_Number_MonotonTucked.material = Text_Front_Number_mat;
});
let Plane_Text_Back_Number_Monoton;
gltfLoader.load("gltf/Plane_Text_Back_Number_Monoton.glb", (gltf) => {
  Plane_Text_Back_Number_Monoton = gltf.scene.children[0];
  Plane_Text_Back_Number_Monoton.renderOrder = 2;
  Plane_Text_Back_Number_Monoton.material = Text_Front_Number_mat;
});
let Plane_Text_Back_Number_MonotonTucked;
gltfLoader.load("gltf/Plane_Text_Back_Number_MonotonTucked.glb", (gltf) => {
  Plane_Text_Back_Number_MonotonTucked = gltf.scene.children[0];
  Plane_Text_Back_Number_MonotonTucked.renderOrder = 2;
  Plane_Text_Back_Number_MonotonTucked.material = Text_Front_Number_mat;
});

let Plane_Text_Front_Number_Monserrat;
gltfLoader.load("gltf/Plane_Text_Front_Number_Monserrat.glb", (gltf) => {
  Plane_Text_Front_Number_Monserrat = gltf.scene.children[0];
  Plane_Text_Front_Number_Monserrat.renderOrder = 2;
  Plane_Text_Front_Number_Monserrat.material = Text_Front_Number_mat;
});
let Plane_Text_Front_Number_MonserratTucked;
gltfLoader.load("gltf/Plane_Text_Front_Number_MonserratTucked.glb", (gltf) => {
  Plane_Text_Front_Number_MonserratTucked = gltf.scene.children[0];
  Plane_Text_Front_Number_MonserratTucked.renderOrder = 2;
  Plane_Text_Front_Number_MonserratTucked.material = Text_Front_Number_mat;
});
let Plane_Text_Back_Number_Monserrat;
gltfLoader.load("gltf/Plane_Text_Back_Number_Monserrat.glb", (gltf) => {
  Plane_Text_Back_Number_Monserrat = gltf.scene.children[0];
  Plane_Text_Back_Number_Monserrat.renderOrder = 2;
  Plane_Text_Back_Number_Monserrat.material = Text_Front_Number_mat;
});
let Plane_Text_Back_Number_MonserratTucked;
gltfLoader.load("gltf/Plane_Text_Back_Number_MonserratTucked.glb", (gltf) => {
  Plane_Text_Back_Number_MonserratTucked = gltf.scene.children[0];
  Plane_Text_Back_Number_MonserratTucked.renderOrder = 2;
  Plane_Text_Back_Number_MonserratTucked.material = Text_Front_Number_mat;
});

let Plane_Text_Front_Number_PublicEnemy;
gltfLoader.load("gltf/Plane_Text_Front_Number_PublicEnemy.glb", (gltf) => {
  Plane_Text_Front_Number_PublicEnemy = gltf.scene.children[0];
  Plane_Text_Front_Number_PublicEnemy.renderOrder = 2;
  Plane_Text_Front_Number_PublicEnemy.material = Text_Front_Number_mat;
});
let Plane_Text_Front_Number_PublicEnemyTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_Number_PublicEnemyTucked.glb",
  (gltf) => {
    Plane_Text_Front_Number_PublicEnemyTucked = gltf.scene.children[0];
    Plane_Text_Front_Number_PublicEnemyTucked.renderOrder = 2;
    Plane_Text_Front_Number_PublicEnemyTucked.material = Text_Front_Number_mat;
  }
);
let Plane_Text_Back_Number_PublicEnemy;
gltfLoader.load("gltf/Plane_Text_Back_Number_PublicEnemy.glb", (gltf) => {
  Plane_Text_Back_Number_PublicEnemy = gltf.scene.children[0];
  Plane_Text_Back_Number_PublicEnemy.renderOrder = 2;
  Plane_Text_Back_Number_PublicEnemy.material = Text_Front_Number_mat;
});
let Plane_Text_Back_Number_PublicEnemyTucked;
gltfLoader.load("gltf/Plane_Text_Back_Number_PublicEnemyTucked.glb", (gltf) => {
  Plane_Text_Back_Number_PublicEnemyTucked = gltf.scene.children[0];
  Plane_Text_Back_Number_PublicEnemyTucked.renderOrder = 2;
  Plane_Text_Back_Number_PublicEnemyTucked.material = Text_Front_Number_mat;
});

let Plane_Text_Front_Number_SportJersey;
gltfLoader.load("gltf/Plane_Text_Front_Number_SportJersey.glb", (gltf) => {
  Plane_Text_Front_Number_SportJersey = gltf.scene.children[0];
  Plane_Text_Front_Number_SportJersey.renderOrder = 2;
  Plane_Text_Front_Number_SportJersey.material = Text_Front_Number_mat;
});
let Plane_Text_Front_Number_SportJerseyTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_Number_SportJerseyTucked.glb",
  (gltf) => {
    Plane_Text_Front_Number_SportJerseyTucked = gltf.scene.children[0];
    Plane_Text_Front_Number_SportJerseyTucked.renderOrder = 2;
    Plane_Text_Front_Number_SportJerseyTucked.material = Text_Front_Number_mat;
  }
);
let Plane_Text_Back_Number_SportJersey;
gltfLoader.load("gltf/Plane_Text_Back_Number_SportJersey.glb", (gltf) => {
  Plane_Text_Back_Number_SportJersey = gltf.scene.children[0];
  Plane_Text_Back_Number_SportJersey.renderOrder = 2;
  Plane_Text_Back_Number_SportJersey.material = Text_Front_Number_mat;
});
let Plane_Text_Back_Number_SportJerseyTucked;
gltfLoader.load("gltf/Plane_Text_Back_Number_SportJerseyTucked.glb", (gltf) => {
  Plane_Text_Back_Number_SportJerseyTucked = gltf.scene.children[0];
  Plane_Text_Back_Number_SportJerseyTucked.renderOrder = 2;
  Plane_Text_Back_Number_SportJerseyTucked.material = Text_Front_Number_mat;
});


let Plane_LeftUpperShorts_NumberCountrebury,
  Plane_RightLowerShorts_NumberCountrebury,
  Plane_RightUpperShorts_NumberCountrebury,
  Plane_LeftLowerShorts_NumberCountrebury;
gltfLoader.load("gltf/Plane_RightLowerShorts_NumberCountrebury.glb", (gltf) => {
  Plane_RightLowerShorts_NumberCountrebury = gltf.scene.children[0];
  Plane_RightLowerShorts_NumberCountrebury.material = UserLogo_RightLower_Mat;
  Plane_RightLowerShorts_NumberCountrebury.renderOrder = 4;
});
gltfLoader.load("gltf/Plane_LeftUpperShorts_NumberCountrebury.glb", (gltf) => {
  Plane_LeftUpperShorts_NumberCountrebury = gltf.scene.children[0];
  Plane_LeftUpperShorts_NumberCountrebury.material = UserLogo_LeftUpper_Mat;
  Plane_LeftUpperShorts_NumberCountrebury.renderOrder = 2;
});
gltfLoader.load("gltf/Plane_RightUpperShorts_NumberCountrebury.glb", (gltf) => {
  Plane_RightUpperShorts_NumberCountrebury = gltf.scene.children[0];
  Plane_RightUpperShorts_NumberCountrebury.material = UserLogo_RightLower_Mat;
  Plane_RightUpperShorts_NumberCountrebury.renderOrder = 2;
});
gltfLoader.load("gltf/Plane_LeftLowerShorts_NumberCountrebury.glb", (gltf) => {
  Plane_LeftLowerShorts_NumberCountrebury = gltf.scene.children[0];
  Plane_LeftLowerShorts_NumberCountrebury.material = UserLogo_LeftUpper_Mat;
  Plane_LeftLowerShorts_NumberCountrebury.renderOrder = 2;
});

let Plane_LeftUpperShorts_NumberCollegeBold,
  Plane_RightLowerShorts_NumberCollegeBold,
  Plane_RightUpperShorts_NumberCollegeBold,
  Plane_LeftLowerShorts_NumberCollegeBold;
gltfLoader.load("gltf/Plane_RightLowerShorts_NumberCollegeBold.glb", (gltf) => {
  Plane_RightLowerShorts_NumberCollegeBold = gltf.scene.children[0];
  Plane_RightLowerShorts_NumberCollegeBold.material = UserLogo_RightLower_Mat;
  Plane_RightLowerShorts_NumberCollegeBold.renderOrder = 4;
});
gltfLoader.load("gltf/Plane_LeftUpperShorts_NumberCollegeBold.glb", (gltf) => {
  Plane_LeftUpperShorts_NumberCollegeBold = gltf.scene.children[0];
  Plane_LeftUpperShorts_NumberCollegeBold.material = UserLogo_LeftUpper_Mat;
  Plane_LeftUpperShorts_NumberCollegeBold.renderOrder = 2;
});
gltfLoader.load("gltf/Plane_RightUpperShorts_NumberCollegeBold.glb", (gltf) => {
  Plane_RightUpperShorts_NumberCollegeBold = gltf.scene.children[0];
  Plane_RightUpperShorts_NumberCollegeBold.material = UserLogo_RightLower_Mat;
  Plane_RightUpperShorts_NumberCollegeBold.renderOrder = 2;
});
gltfLoader.load("gltf/Plane_LeftLowerShorts_NumberCollegeBold.glb", (gltf) => {
  Plane_LeftLowerShorts_NumberCollegeBold = gltf.scene.children[0];
  Plane_LeftLowerShorts_NumberCollegeBold.material = UserLogo_LeftUpper_Mat;
  Plane_LeftLowerShorts_NumberCollegeBold.renderOrder = 2;
});

let Plane_LeftUpperShorts_NumberDeftoneStyles,
  Plane_RightLowerShorts_NumberDeftoneStyles,
  Plane_RightUpperShorts_NumberDeftoneStyles,
  Plane_LeftLowerShorts_NumberDeftoneStyles;
gltfLoader.load(
  "gltf/Plane_RightLowerShorts_NumberDeftoneStyles.glb",
  (gltf) => {
    Plane_RightLowerShorts_NumberDeftoneStyles = gltf.scene.children[0];
    Plane_RightLowerShorts_NumberDeftoneStyles.material =
      UserLogo_RightLower_Mat;
    Plane_RightLowerShorts_NumberDeftoneStyles.renderOrder = 4;
  }
);
gltfLoader.load(
  "gltf/Plane_LeftUpperShorts_NumberDeftoneStyles.glb",
  (gltf) => {
    Plane_LeftUpperShorts_NumberDeftoneStyles = gltf.scene.children[0];
    Plane_LeftUpperShorts_NumberDeftoneStyles.material = UserLogo_LeftUpper_Mat;
    Plane_LeftUpperShorts_NumberDeftoneStyles.renderOrder = 2;
  }
);
gltfLoader.load(
  "gltf/Plane_RightUpperShorts_NumberDeftoneStyles.glb",
  (gltf) => {
    Plane_RightUpperShorts_NumberDeftoneStyles = gltf.scene.children[0];
    Plane_RightUpperShorts_NumberDeftoneStyles.material =
      UserLogo_RightLower_Mat;
    Plane_RightUpperShorts_NumberDeftoneStyles.renderOrder = 2;
  }
);
gltfLoader.load(
  "gltf/Plane_LeftLowerShorts_NumberDeftoneStyles.glb",
  (gltf) => {
    Plane_LeftLowerShorts_NumberDeftoneStyles = gltf.scene.children[0];
    Plane_LeftLowerShorts_NumberDeftoneStyles.material = UserLogo_LeftUpper_Mat;
    Plane_LeftLowerShorts_NumberDeftoneStyles.renderOrder = 2;
  }
);

let Plane_LeftUpperShorts_NumberEmilio19, Plane_RightLowerShorts_NumberEmilio19, Plane_RightUpperShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberEmilio19;
gltfLoader.load("gltf/Plane_RightLowerShorts_NumberEmilio19.glb", (gltf) => {
  Plane_RightLowerShorts_NumberEmilio19 = gltf.scene.children[0];
  Plane_RightLowerShorts_NumberEmilio19.material = UserLogo_RightLower_Mat;
  Plane_RightLowerShorts_NumberEmilio19.renderOrder = 4;
});
gltfLoader.load("gltf/Plane_LeftUpperShorts_NumberEmilio19.glb", (gltf) => {
  Plane_LeftUpperShorts_NumberEmilio19 = gltf.scene.children[0];
  Plane_LeftUpperShorts_NumberEmilio19.material = UserLogo_LeftUpper_Mat;
  Plane_LeftUpperShorts_NumberEmilio19.renderOrder = 2;
});
gltfLoader.load("gltf/Plane_RightUpperShorts_NumberEmilio19.glb", (gltf) => {
  Plane_RightUpperShorts_NumberEmilio19 = gltf.scene.children[0];
  Plane_RightUpperShorts_NumberEmilio19.material = UserLogo_RightLower_Mat;
  Plane_RightUpperShorts_NumberEmilio19.renderOrder = 2;
});
gltfLoader.load("gltf/Plane_LeftLowerShorts_NumberEmilio19.glb", (gltf) => {
  Plane_LeftLowerShorts_NumberEmilio19 = gltf.scene.children[0];
  Plane_LeftLowerShorts_NumberEmilio19.material = UserLogo_LeftUpper_Mat;
  Plane_LeftLowerShorts_NumberEmilio19.renderOrder = 2;
});

let Plane_LeftUpperShorts_NumberCOCOGOOSE, Plane_RightLowerShorts_NumberCOCOGOOSE, Plane_RightUpperShorts_NumberCOCOGOOSE, Plane_LeftLowerShorts_NumberCOCOGOOSE;
gltfLoader.load("gltf/Plane_RightLowerShorts_NumberCOCOGOOSE.glb", (gltf) => {
  Plane_RightLowerShorts_NumberCOCOGOOSE = gltf.scene.children[0];
  Plane_RightLowerShorts_NumberCOCOGOOSE.material = UserLogo_RightLower_Mat;
  Plane_RightLowerShorts_NumberCOCOGOOSE.renderOrder = 4;
  Shorts_group.add(Plane_RightLowerShorts_NumberCOCOGOOSE);
});
gltfLoader.load("gltf/Plane_LeftUpperShorts_NumberCOCOGOOSE.glb", (gltf) => {
  Plane_LeftUpperShorts_NumberCOCOGOOSE = gltf.scene.children[0];
  Plane_LeftUpperShorts_NumberCOCOGOOSE.material = UserLogo_LeftUpper_Mat;
  Plane_LeftUpperShorts_NumberCOCOGOOSE.renderOrder = 2;
  Shorts_group.add(Plane_LeftUpperShorts_NumberCOCOGOOSE);
});
gltfLoader.load("gltf/Plane_RightUpperShorts_NumberCOCOGOOSE.glb", (gltf) => {
  Plane_RightUpperShorts_NumberCOCOGOOSE = gltf.scene.children[0];
  Plane_RightUpperShorts_NumberCOCOGOOSE.material = UserLogo_RightLower_Mat;
  Plane_RightUpperShorts_NumberCOCOGOOSE.renderOrder = 2;
  Shorts_group.add(Plane_RightUpperShorts_NumberCOCOGOOSE);
});
gltfLoader.load("gltf/Plane_LeftLowerShorts_NumberCOCOGOOSE.glb", (gltf) => {
  Plane_LeftLowerShorts_NumberCOCOGOOSE = gltf.scene.children[0];
  Plane_LeftLowerShorts_NumberCOCOGOOSE.material = UserLogo_LeftUpper_Mat;
  Plane_LeftLowerShorts_NumberCOCOGOOSE.renderOrder = 2;
  Shorts_group.add(Plane_LeftLowerShorts_NumberCOCOGOOSE);
});

let Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberLEAGUESPARTANT;
gltfLoader.load(
  "gltf/Plane_RightLowerShorts_NumberLEAGUESPARTANT.glb",
  (gltf) => {
    Plane_RightLowerShorts_NumberLEAGUESPARTANT = gltf.scene.children[0];
    Plane_RightLowerShorts_NumberLEAGUESPARTANT.material =
      UserLogo_RightLower_Mat;
    Plane_RightLowerShorts_NumberLEAGUESPARTANT.renderOrder = 4;
  }
);
gltfLoader.load(
  "gltf/Plane_LeftUpperShorts_NumberLEAGUESPARTANT.glb",
  (gltf) => {
    Plane_LeftUpperShorts_NumberLEAGUESPARTANT = gltf.scene.children[0];
    Plane_LeftUpperShorts_NumberLEAGUESPARTANT.material =
      UserLogo_LeftUpper_Mat;
    Plane_LeftUpperShorts_NumberLEAGUESPARTANT.renderOrder = 2;
  }
);
gltfLoader.load(
  "gltf/Plane_RightUpperShorts_NumberLEAGUESPARTANT.glb",
  (gltf) => {
    Plane_RightUpperShorts_NumberLEAGUESPARTANT = gltf.scene.children[0];
    Plane_RightUpperShorts_NumberLEAGUESPARTANT.material =
      UserLogo_RightLower_Mat;
    Plane_RightUpperShorts_NumberLEAGUESPARTANT.renderOrder = 2;
  }
);
gltfLoader.load(
  "gltf/Plane_LeftLowerShorts_NumberLEAGUESPARTANT.glb",
  (gltf) => {
    Plane_LeftLowerShorts_NumberLEAGUESPARTANT = gltf.scene.children[0];
    Plane_LeftLowerShorts_NumberLEAGUESPARTANT.material =
      UserLogo_LeftUpper_Mat;
    Plane_LeftLowerShorts_NumberLEAGUESPARTANT.renderOrder = 2;
  }
);

let Plane_LeftUpperShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonoton, Plane_RightUpperShorts_NumberMonoton, Plane_LeftLowerShorts_NumberMonoton;
gltfLoader.load("gltf/Plane_RightLowerShorts_NumberMonoton.glb", (gltf) => {
  Plane_RightLowerShorts_NumberMonoton = gltf.scene.children[0];
  Plane_RightLowerShorts_NumberMonoton.material = UserLogo_RightLower_Mat;
  Plane_RightLowerShorts_NumberMonoton.renderOrder = 4;
});
gltfLoader.load("gltf/Plane_LeftUpperShorts_NumberMonoton.glb", (gltf) => {
  Plane_LeftUpperShorts_NumberMonoton = gltf.scene.children[0];
  Plane_LeftUpperShorts_NumberMonoton.material = UserLogo_LeftUpper_Mat;
  Plane_LeftUpperShorts_NumberMonoton.renderOrder = 2;
});
gltfLoader.load("gltf/Plane_RightUpperShorts_NumberMonoton.glb", (gltf) => {
  Plane_RightUpperShorts_NumberMonoton = gltf.scene.children[0];
  Plane_RightUpperShorts_NumberMonoton.material = UserLogo_RightLower_Mat;
  Plane_RightUpperShorts_NumberMonoton.renderOrder = 2;
});
gltfLoader.load("gltf/Plane_LeftLowerShorts_NumberMonoton.glb", (gltf) => {
  Plane_LeftLowerShorts_NumberMonoton = gltf.scene.children[0];
  Plane_LeftLowerShorts_NumberMonoton.material = UserLogo_LeftUpper_Mat;
  Plane_LeftLowerShorts_NumberMonoton.renderOrder = 2;
});

let Plane_LeftUpperShorts_NumberMonserrat, Plane_RightLowerShorts_NumberMonserrat, Plane_RightUpperShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberMonserrat;
gltfLoader.load("gltf/Plane_RightLowerShorts_NumberMonserrat.glb", (gltf) => {
  Plane_RightLowerShorts_NumberMonserrat = gltf.scene.children[0];
  Plane_RightLowerShorts_NumberMonserrat.material = UserLogo_RightLower_Mat;
  Plane_RightLowerShorts_NumberMonserrat.renderOrder = 4;
});
gltfLoader.load("gltf/Plane_LeftUpperShorts_NumberMonserrat.glb", (gltf) => {
  Plane_LeftUpperShorts_NumberMonserrat = gltf.scene.children[0];
  Plane_LeftUpperShorts_NumberMonserrat.material = UserLogo_LeftUpper_Mat;
  Plane_LeftUpperShorts_NumberMonserrat.renderOrder = 2;
});
gltfLoader.load("gltf/Plane_RightUpperShorts_NumberMonserrat.glb", (gltf) => {
  Plane_RightUpperShorts_NumberMonserrat = gltf.scene.children[0];
  Plane_RightUpperShorts_NumberMonserrat.material = UserLogo_RightLower_Mat;
  Plane_RightUpperShorts_NumberMonserrat.renderOrder = 2;
});
gltfLoader.load("gltf/Plane_LeftLowerShorts_NumberMonserrat.glb", (gltf) => {
  Plane_LeftLowerShorts_NumberMonserrat = gltf.scene.children[0];
  Plane_LeftLowerShorts_NumberMonserrat.material = UserLogo_LeftUpper_Mat;
  Plane_LeftLowerShorts_NumberMonserrat.renderOrder = 2;
});

let Plane_LeftUpperShorts_NumberSportJersey, Plane_RightLowerShorts_NumberSportJersey, Plane_RightUpperShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberSportJersey;
gltfLoader.load("gltf/Plane_RightLowerShorts_NumberSportJersey.glb", (gltf) => {
  Plane_RightLowerShorts_NumberSportJersey = gltf.scene.children[0];
  Plane_RightLowerShorts_NumberSportJersey.material = UserLogo_RightLower_Mat;
  Plane_RightLowerShorts_NumberSportJersey.renderOrder = 4;
});
gltfLoader.load("gltf/Plane_LeftUpperShorts_NumberSportJersey.glb", (gltf) => {
  Plane_LeftUpperShorts_NumberSportJersey = gltf.scene.children[0];
  Plane_LeftUpperShorts_NumberSportJersey.material = UserLogo_LeftUpper_Mat;
  Plane_LeftUpperShorts_NumberSportJersey.renderOrder = 2;
});
gltfLoader.load("gltf/Plane_RightUpperShorts_NumberSportJersey.glb", (gltf) => {
  Plane_RightUpperShorts_NumberSportJersey = gltf.scene.children[0];
  Plane_RightUpperShorts_NumberSportJersey.material = UserLogo_RightLower_Mat;
  Plane_RightUpperShorts_NumberSportJersey.renderOrder = 2;
});
gltfLoader.load("gltf/Plane_LeftLowerShorts_NumberSportJersey.glb", (gltf) => {
  Plane_LeftLowerShorts_NumberSportJersey = gltf.scene.children[0];
  Plane_LeftLowerShorts_NumberSportJersey.material = UserLogo_LeftUpper_Mat;
  Plane_LeftLowerShorts_NumberSportJersey.renderOrder = 2;
});

let Plane_LeftUpperShorts_NumberPublicEnemy, Plane_RightLowerShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberPublicEnemy, Plane_LeftLowerShorts_NumberPublicEnemy;
gltfLoader.load("gltf/Plane_RightLowerShorts_NumberPublicEnemy.glb", (gltf) => {
  Plane_RightLowerShorts_NumberPublicEnemy = gltf.scene.children[0];
  Plane_RightLowerShorts_NumberPublicEnemy.material = UserLogo_RightLower_Mat;
  Plane_RightLowerShorts_NumberPublicEnemy.renderOrder = 4;
});
gltfLoader.load("gltf/Plane_LeftUpperShorts_NumberPublicEnemy.glb", (gltf) => {
  Plane_LeftUpperShorts_NumberPublicEnemy = gltf.scene.children[0];
  Plane_LeftUpperShorts_NumberPublicEnemy.material = UserLogo_LeftUpper_Mat;
  Plane_LeftUpperShorts_NumberPublicEnemy.renderOrder = 2;
});
gltfLoader.load("gltf/Plane_RightUpperShorts_NumberPublicEnemy.glb", (gltf) => {
  Plane_RightUpperShorts_NumberPublicEnemy = gltf.scene.children[0];
  Plane_RightUpperShorts_NumberPublicEnemy.material = UserLogo_RightLower_Mat;
  Plane_RightUpperShorts_NumberPublicEnemy.renderOrder = 2;
});
gltfLoader.load("gltf/Plane_LeftLowerShorts_NumberPublicEnemy.glb", (gltf) => {
  Plane_LeftLowerShorts_NumberPublicEnemy = gltf.scene.children[0];
  Plane_LeftLowerShorts_NumberPublicEnemy.material = UserLogo_LeftUpper_Mat;
  Plane_LeftLowerShorts_NumberPublicEnemy.renderOrder = 2;
});


let Plane_Text_Front_Under, Plane_Text_Front_Upper;
gltfLoader.load("gltf/Plane_Text_Front_Upper.glb", (gltf) => {
  Plane_Text_Front_Upper = gltf.scene.children[0];
  Plane_Text_Front_Upper.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper.renderOrder = 3;
});

let Plane_Text_Front_UpperTucked;
gltfLoader.load("gltf/Plane_Text_Front_UpperTucked.glb", (gltf) => {
  Plane_Text_Front_UpperTucked = gltf.scene.children[0];
  Plane_Text_Front_UpperTucked.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_UpperTucked.renderOrder = 3;
});

let Plane_Text_Front_Upper_CollegeBold;
gltfLoader.load("gltf/Plane_Text_Front_Upper_CollegeBold.glb", (gltf) => {
  Plane_Text_Front_Upper_CollegeBold = gltf.scene.children[0];
  Plane_Text_Front_Upper_CollegeBold.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_CollegeBold.renderOrder = 3;
});
let Plane_Text_Front_Upper_CollegeBoldTucked;
gltfLoader.load("gltf/Plane_Text_Front_Upper_CollegeBoldTucked.glb", (gltf) => {
  Plane_Text_Front_Upper_CollegeBoldTucked = gltf.scene.children[0];
  Plane_Text_Front_Upper_CollegeBoldTucked.material =
    Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_CollegeBoldTucked.renderOrder = 3;
});

let Plane_Text_Front_Upper_DeftoneStyles;
gltfLoader.load("gltf/Plane_Text_Front_Upper_DeftoneStyles.glb", (gltf) => {
  Plane_Text_Front_Upper_DeftoneStyles = gltf.scene.children[0];
  Plane_Text_Front_Upper_DeftoneStyles.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_DeftoneStyles.renderOrder = 3;
});
let Plane_Text_Front_Upper_DeftoneStylesTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_Upper_DeftoneStylesTucked.glb",
  (gltf) => {
    Plane_Text_Front_Upper_DeftoneStylesTucked = gltf.scene.children[0];
    Plane_Text_Front_Upper_DeftoneStylesTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_Upper_DeftoneStylesTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_Upper_Emilio19;
gltfLoader.load("gltf/Plane_Text_Front_Upper_Emilio19.glb", (gltf) => {
  Plane_Text_Front_Upper_Emilio19 = gltf.scene.children[0];
  Plane_Text_Front_Upper_Emilio19.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_Emilio19.renderOrder = 3;
});
let Plane_Text_Front_Upper_Emilio19Tucked;
gltfLoader.load("gltf/Plane_Text_Front_Upper_Emilio19Tucked.glb", (gltf) => {
  Plane_Text_Front_Upper_Emilio19Tucked = gltf.scene.children[0];
  Plane_Text_Front_Upper_Emilio19Tucked.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_Emilio19Tucked.renderOrder = 3;
});

let Plane_Text_Front_Upper_COCOGOOSE;
gltfLoader.load("gltf/Plane_Text_Front_Upper_COCOGOOSE.glb", (gltf) => {
  Plane_Text_Front_Upper_COCOGOOSE = gltf.scene.children[0];
  Plane_Text_Front_Upper_COCOGOOSE.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_COCOGOOSE.renderOrder = 3;
  Jersey_group.add(Plane_Text_Front_Upper_COCOGOOSE);
});
let Plane_Text_Front_Upper_COCOGOOSETucked;
gltfLoader.load("gltf/Plane_Text_Front_Upper_COCOGOOSETucked.glb", (gltf) => {
  Plane_Text_Front_Upper_COCOGOOSETucked = gltf.scene.children[0];
  Plane_Text_Front_Upper_COCOGOOSETucked.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_COCOGOOSETucked.renderOrder = 3;
});

let Plane_Text_Front_Upper_LEAGUESPARTANT;
gltfLoader.load("gltf/Plane_Text_Front_Upper_LEAGUESPARTANT.glb", (gltf) => {
  Plane_Text_Front_Upper_LEAGUESPARTANT = gltf.scene.children[0];
  Plane_Text_Front_Upper_LEAGUESPARTANT.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_LEAGUESPARTANT.renderOrder = 3;
});
let Plane_Text_Front_Upper_LEAGUESPARTANTTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_Upper_LEAGUESPARTANTTucked.glb",
  (gltf) => {
    Plane_Text_Front_Upper_LEAGUESPARTANTTucked = gltf.scene.children[0];
    Plane_Text_Front_Upper_LEAGUESPARTANTTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_Upper_LEAGUESPARTANTTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_Upper_Monoton;
gltfLoader.load("gltf/Plane_Text_Front_Upper_Monoton.glb", (gltf) => {
  Plane_Text_Front_Upper_Monoton = gltf.scene.children[0];
  Plane_Text_Front_Upper_Monoton.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_Monoton.renderOrder = 3;
});
let Plane_Text_Front_Upper_MonotonTucked;
gltfLoader.load("gltf/Plane_Text_Front_Upper_MonotonTucked.glb", (gltf) => {
  Plane_Text_Front_Upper_MonotonTucked = gltf.scene.children[0];
  Plane_Text_Front_Upper_MonotonTucked.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_MonotonTucked.renderOrder = 3;
});

let Plane_Text_Front_Upper_Monserrat;
gltfLoader.load("gltf/Plane_Text_Front_Upper_Monserrat.glb", (gltf) => {
  Plane_Text_Front_Upper_Monserrat = gltf.scene.children[0];
  Plane_Text_Front_Upper_Monserrat.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_Monserrat.renderOrder = 3;
});
let Plane_Text_Front_Upper_MonserratTucked;
gltfLoader.load("gltf/Plane_Text_Front_Upper_MonserratTucked.glb", (gltf) => {
  Plane_Text_Front_Upper_MonserratTucked = gltf.scene.children[0];
  Plane_Text_Front_Upper_MonserratTucked.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_MonserratTucked.renderOrder = 3;
});

let Plane_Text_Front_Upper_SportJersey;
gltfLoader.load("gltf/Plane_Text_Front_Upper_SportJersey.glb", (gltf) => {
  Plane_Text_Front_Upper_SportJersey = gltf.scene.children[0];
  Plane_Text_Front_Upper_SportJersey.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_SportJersey.renderOrder = 3;
});
let Plane_Text_Front_Upper_SportJerseyTucked;
gltfLoader.load("gltf/Plane_Text_Front_Upper_SportJerseyTucked.glb", (gltf) => {
  Plane_Text_Front_Upper_SportJerseyTucked = gltf.scene.children[0];
  Plane_Text_Front_Upper_SportJerseyTucked.material =
    Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_SportJerseyTucked.renderOrder = 3;
});

let Plane_Text_Front_Upper_PublicEnemy;
gltfLoader.load("gltf/Plane_Text_Front_Upper_PublicEnemy.glb", (gltf) => {
  Plane_Text_Front_Upper_PublicEnemy = gltf.scene.children[0];
  Plane_Text_Front_Upper_PublicEnemy.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_PublicEnemy.renderOrder = 3;
});

let Plane_Text_Front_Upper_PublicEnemyTucked;
gltfLoader.load("gltf/Plane_Text_Front_Upper_PublicEnemyTucked.glb", (gltf) => {
  Plane_Text_Front_Upper_PublicEnemyTucked = gltf.scene.children[0];
  Plane_Text_Front_Upper_PublicEnemyTucked.material =
    Plane_Text_Front_Upper_mat;
  Plane_Text_Front_Upper_PublicEnemyTucked.renderOrder = 3;
});


gltfLoader.load("gltf/Plane_Text_Front_Under.glb", (gltf) => {
  Plane_Text_Front_Under = gltf.scene.children[0];
  Plane_Text_Front_Under.material = Plane_Text_Front_Under_mat;
  Plane_Text_Front_Under.renderOrder = 3;
});

let Plane_Text_Front_UnderTucked;
gltfLoader.load("gltf/Plane_Text_Front_UnderTucked.glb", (gltf) => {
  Plane_Text_Front_UnderTucked = gltf.scene.children[0];
  Plane_Text_Front_UnderTucked.material = Plane_Text_Front_Under_mat;
  Plane_Text_Front_UnderTucked.renderOrder = 3;
});

let Plane_Text_Front_Under_CollegeBold;
gltfLoader.load("gltf/Plane_Text_Front_Under_CollegeBold.glb", (gltf) => {
  Plane_Text_Front_Under_CollegeBold = gltf.scene.children[0];
  Plane_Text_Front_Under_CollegeBold.material = Plane_Text_Front_Under_mat;  Plane_Text_Front_Under_CollegeBold.renderOrder = 3;
});
let Plane_Text_Front_Under_CollegeBoldTucked;
gltfLoader.load("gltf/Plane_Text_Front_Under_CollegeBoldTucked.glb", (gltf) => {
  Plane_Text_Front_Under_CollegeBoldTucked = gltf.scene.children[0];
  Plane_Text_Front_Under_CollegeBoldTucked.material =
    Plane_Text_Front_Under_mat;
  Plane_Text_Front_Under_CollegeBoldTucked.renderOrder = 3;
});

let Plane_Text_Front_Under_DeftoneStyles;
gltfLoader.load("gltf/Plane_Text_Front_Under_DeftoneStyles.glb", (gltf) => {
  Plane_Text_Front_Under_DeftoneStyles = gltf.scene.children[0];
  Plane_Text_Front_Under_DeftoneStyles.material = Plane_Text_Front_Under_mat;  Plane_Text_Front_Under_DeftoneStyles.renderOrder = 3;
});
let Plane_Text_Front_Under_DeftoneStylesTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_Under_DeftoneStylesTucked.glb",
  (gltf) => {
    Plane_Text_Front_Under_DeftoneStylesTucked = gltf.scene.children[0];
    Plane_Text_Front_Under_DeftoneStylesTucked.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_Under_DeftoneStylesTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_Under_Emilio19;
gltfLoader.load("gltf/Plane_Text_Front_Under_Emilio19.glb", (gltf) => {
  Plane_Text_Front_Under_Emilio19 = gltf.scene.children[0];
  Plane_Text_Front_Under_Emilio19.material = Plane_Text_Front_Under_mat;  Plane_Text_Front_Under_Emilio19.renderOrder = 3;
});
let Plane_Text_Front_Under_Emilio19Tucked;
gltfLoader.load("gltf/Plane_Text_Front_Under_Emilio19Tucked.glb", (gltf) => {
  Plane_Text_Front_Under_Emilio19Tucked = gltf.scene.children[0];
  Plane_Text_Front_Under_Emilio19Tucked.material = Plane_Text_Front_Under_mat;  Plane_Text_Front_Under_Emilio19Tucked.renderOrder = 3;
});

let Plane_Text_Front_Under_COCOGOOSE;
gltfLoader.load("gltf/Plane_Text_Front_Under_COCOGOOSE.glb", (gltf) => {
  Plane_Text_Front_Under_COCOGOOSE = gltf.scene.children[0];
  Plane_Text_Front_Under_COCOGOOSE.material = Plane_Text_Front_Under_mat;
  Plane_Text_Front_Under_COCOGOOSE.renderOrder = 3;
  Jersey_group.add(Plane_Text_Front_Under_COCOGOOSE);
});
let Plane_Text_Front_Under_COCOGOOSETucked;
gltfLoader.load("gltf/Plane_Text_Front_Under_COCOGOOSETucked.glb", (gltf) => {
  Plane_Text_Front_Under_COCOGOOSETucked = gltf.scene.children[0];
  Plane_Text_Front_Under_COCOGOOSETucked.material = Plane_Text_Front_Under_mat;  Plane_Text_Front_Under_COCOGOOSETucked.renderOrder = 3;
});

let Plane_Text_Front_Under_LEAGUESPARTANT;
gltfLoader.load("gltf/Plane_Text_Front_Under_LEAGUESPARTANT.glb", (gltf) => {
  Plane_Text_Front_Under_LEAGUESPARTANT = gltf.scene.children[0];
  Plane_Text_Front_Under_LEAGUESPARTANT.material = Plane_Text_Front_Under_mat;  Plane_Text_Front_Under_LEAGUESPARTANT.renderOrder = 3;
});
let Plane_Text_Front_Under_LEAGUESPARTANTTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_Under_LEAGUESPARTANTTucked.glb",
  (gltf) => {
    Plane_Text_Front_Under_LEAGUESPARTANTTucked = gltf.scene.children[0];
    Plane_Text_Front_Under_LEAGUESPARTANTTucked.material =
      Plane_Text_Front_Under_mat;  
    Plane_Text_Front_Under_LEAGUESPARTANTTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_Under_Monoton;
gltfLoader.load("gltf/Plane_Text_Front_Under_Monoton.glb", (gltf) => {
  Plane_Text_Front_Under_Monoton = gltf.scene.children[0];
  Plane_Text_Front_Under_Monoton.material = Plane_Text_Front_Under_mat;  Plane_Text_Front_Under_Monoton.renderOrder = 3;
});
let Plane_Text_Front_Under_MonotonTucked;
gltfLoader.load("gltf/Plane_Text_Front_Under_MonotonTucked.glb", (gltf) => {
  Plane_Text_Front_Under_MonotonTucked = gltf.scene.children[0];
  Plane_Text_Front_Under_MonotonTucked.material = Plane_Text_Front_Under_mat;  Plane_Text_Front_Under_MonotonTucked.renderOrder = 3;
});

let Plane_Text_Front_Under_Monserrat;
gltfLoader.load("gltf/Plane_Text_Front_Under_Monserrat.glb", (gltf) => {
  Plane_Text_Front_Under_Monserrat = gltf.scene.children[0];
  Plane_Text_Front_Under_Monserrat.material = Plane_Text_Front_Under_mat;  Plane_Text_Front_Under_Monserrat.renderOrder = 3;
});
let Plane_Text_Front_Under_MonserratTucked;
gltfLoader.load("gltf/Plane_Text_Front_Under_MonserratTucked.glb", (gltf) => {
  Plane_Text_Front_Under_MonserratTucked = gltf.scene.children[0];
  Plane_Text_Front_Under_MonserratTucked.material = Plane_Text_Front_Under_mat;  Plane_Text_Front_Under_MonserratTucked.renderOrder = 3;
});

let Plane_Text_Front_Under_SportJersey;
gltfLoader.load("gltf/Plane_Text_Front_Under_SportJersey.glb", (gltf) => {
  Plane_Text_Front_Under_SportJersey = gltf.scene.children[0];
  Plane_Text_Front_Under_SportJersey.material = Plane_Text_Front_Under_mat;  Plane_Text_Front_Under_SportJersey.renderOrder = 3;
});
let Plane_Text_Front_Under_SportJerseyTucked;
gltfLoader.load("gltf/Plane_Text_Front_Under_SportJerseyTucked.glb", (gltf) => {
  Plane_Text_Front_Under_SportJerseyTucked = gltf.scene.children[0];
  Plane_Text_Front_Under_SportJerseyTucked.material =
    Plane_Text_Front_Under_mat;
  Plane_Text_Front_Under_SportJerseyTucked.renderOrder = 3;
});

let Plane_Text_Front_Under_PublicEnemy;
gltfLoader.load("gltf/Plane_Text_Front_Under_PublicEnemy.glb", (gltf) => {
  Plane_Text_Front_Under_PublicEnemy = gltf.scene.children[0];
  Plane_Text_Front_Under_PublicEnemy.material = Plane_Text_Front_Under_mat;  Plane_Text_Front_Under_PublicEnemy.renderOrder = 3;
});

let Plane_Text_Front_Under_PublicEnemyTucked;
gltfLoader.load("gltf/Plane_Text_Front_Under_PublicEnemyTucked.glb", (gltf) => {
  Plane_Text_Front_Under_PublicEnemyTucked = gltf.scene.children[0];
  Plane_Text_Front_Under_PublicEnemyTucked.material =
    Plane_Text_Front_Under_mat;
  Plane_Text_Front_Under_PublicEnemyTucked.renderOrder = 3;
});


let Plane_Text_Front_UnderCurved2;
gltfLoader.load("gltf/Plane_Text_Front_UnderCurved2.glb", (gltf) => {
  Plane_Text_Front_UnderCurved2 = gltf.scene.children[0];
  Plane_Text_Front_UnderCurved2.material = Plane_Text_Front_Under_mat;Plane_Text_Front_UnderCurved2.renderOrder = 3;
});

let Plane_Text_Front_UnderCurved2Tucked;
gltfLoader.load("gltf/Plane_Text_Front_UnderCurved2Tucked.glb", (gltf) => {
  Plane_Text_Front_UnderCurved2Tucked = gltf.scene.children[0];
  Plane_Text_Front_UnderCurved2Tucked.material = Plane_Text_Front_Under_mat;Plane_Text_Front_UnderCurved2Tucked.renderOrder = 3;
});

let Plane_Text_Front_UnderCurved2_CollegeBold;
gltfLoader.load(
  "gltf/Plane_Text_Front_UnderCurved2_CollegeBold.glb",
  (gltf) => {
    Plane_Text_Front_UnderCurved2_CollegeBold = gltf.scene.children[0];
    Plane_Text_Front_UnderCurved2_CollegeBold.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_UnderCurved2_CollegeBold.renderOrder = 3;
  }
);
let Plane_Text_Front_UnderCurved2_CollegeBoldTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UnderCurved2_CollegeBoldTucked.glb",
  (gltf) => {
    Plane_Text_Front_UnderCurved2_CollegeBoldTucked = gltf.scene.children[0];
    Plane_Text_Front_UnderCurved2_CollegeBoldTucked.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_UnderCurved2_CollegeBoldTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UnderCurved2_DeftoneStyles;
gltfLoader.load(
  "gltf/Plane_Text_Front_UnderCurved2_DeftoneStyles.glb",
  (gltf) => {
    Plane_Text_Front_UnderCurved2_DeftoneStyles = gltf.scene.children[0];
    Plane_Text_Front_UnderCurved2_DeftoneStyles.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_UnderCurved2_DeftoneStyles.renderOrder = 3;
  }
);
let Plane_Text_Front_UnderCurved2_DeftoneStylesTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UnderCurved2_DeftoneStylesTucked.glb",
  (gltf) => {
    Plane_Text_Front_UnderCurved2_DeftoneStylesTucked = gltf.scene.children[0];
    Plane_Text_Front_UnderCurved2_DeftoneStylesTucked.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_UnderCurved2_DeftoneStylesTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UnderCurved2_Emilio19;
gltfLoader.load("gltf/Plane_Text_Front_UnderCurved2_Emilio19.glb", (gltf) => {
  Plane_Text_Front_UnderCurved2_Emilio19 = gltf.scene.children[0];
  Plane_Text_Front_UnderCurved2_Emilio19.material = Plane_Text_Front_Under_mat;Plane_Text_Front_UnderCurved2_Emilio19.renderOrder = 3;
});
let Plane_Text_Front_UnderCurved2_Emilio19Tucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UnderCurved2_Emilio19Tucked.glb",
  (gltf) => {
    Plane_Text_Front_UnderCurved2_Emilio19Tucked = gltf.scene.children[0];
    Plane_Text_Front_UnderCurved2_Emilio19Tucked.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_UnderCurved2_Emilio19Tucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UnderCurved2_COCOGOOSE;
gltfLoader.load("gltf/Plane_Text_Front_UnderCurved2_COCOGOOSE.glb", (gltf) => {
  Plane_Text_Front_UnderCurved2_COCOGOOSE = gltf.scene.children[0];
  Plane_Text_Front_UnderCurved2_COCOGOOSE.material = Plane_Text_Front_Under_mat;
  Plane_Text_Front_UnderCurved2_COCOGOOSE.renderOrder = 3;
});
let Plane_Text_Front_UnderCurved2_COCOGOOSETucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UnderCurved2_COCOGOOSETucked.glb",
  (gltf) => {
    Plane_Text_Front_UnderCurved2_COCOGOOSETucked = gltf.scene.children[0];
    Plane_Text_Front_UnderCurved2_COCOGOOSETucked.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_UnderCurved2_COCOGOOSETucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UnderCurved2_LEAGUESPARTANT;
gltfLoader.load(
  "gltf/Plane_Text_Front_UnderCurved2_LEAGUESPARTANT.glb",
  (gltf) => {
    Plane_Text_Front_UnderCurved2_LEAGUESPARTANT = gltf.scene.children[0];
    Plane_Text_Front_UnderCurved2_LEAGUESPARTANT.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_UnderCurved2_LEAGUESPARTANT.renderOrder = 3;
  }
);
let Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked.glb",
  (gltf) => {
    Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked = gltf.scene.children[0];
    Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UnderCurved2_Monoton;
gltfLoader.load("gltf/Plane_Text_Front_UnderCurved2_Monoton.glb", (gltf) => {
  Plane_Text_Front_UnderCurved2_Monoton = gltf.scene.children[0];
  Plane_Text_Front_UnderCurved2_Monoton.material = Plane_Text_Front_Under_mat;Plane_Text_Front_UnderCurved2_Monoton.renderOrder = 3;
});
let Plane_Text_Front_UnderCurved2_MonotonTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UnderCurved2_MonotonTucked.glb",
  (gltf) => {
    Plane_Text_Front_UnderCurved2_MonotonTucked = gltf.scene.children[0];
    Plane_Text_Front_UnderCurved2_MonotonTucked.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_UnderCurved2_MonotonTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UnderCurved2_Monserrat;
gltfLoader.load("gltf/Plane_Text_Front_UnderCurved2_Monserrat.glb", (gltf) => {
  Plane_Text_Front_UnderCurved2_Monserrat = gltf.scene.children[0];
  Plane_Text_Front_UnderCurved2_Monserrat.material = Plane_Text_Front_Under_mat;
  Plane_Text_Front_UnderCurved2_Monserrat.renderOrder = 3;
});
let Plane_Text_Front_UnderCurved2_MonserratTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UnderCurved2_MonserratTucked.glb",
  (gltf) => {
    Plane_Text_Front_UnderCurved2_MonserratTucked = gltf.scene.children[0];
    Plane_Text_Front_UnderCurved2_MonserratTucked.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_UnderCurved2_MonserratTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UnderCurved2_SportJersey;
gltfLoader.load(
  "gltf/Plane_Text_Front_UnderCurved2_SportJersey.glb",
  (gltf) => {
    Plane_Text_Front_UnderCurved2_SportJersey = gltf.scene.children[0];
    Plane_Text_Front_UnderCurved2_SportJersey.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_UnderCurved2_SportJersey.renderOrder = 3;
  }
);
let Plane_Text_Front_UnderCurved2_SportJerseyTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UnderCurved2_SportJerseyTucked.glb",
  (gltf) => {
    Plane_Text_Front_UnderCurved2_SportJerseyTucked = gltf.scene.children[0];
    Plane_Text_Front_UnderCurved2_SportJerseyTucked.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_UnderCurved2_SportJerseyTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UnderCurved2_PublicEnemy;
gltfLoader.load(
  "gltf/Plane_Text_Front_UnderCurved2_PublicEnemy.glb",
  (gltf) => {
    Plane_Text_Front_UnderCurved2_PublicEnemy = gltf.scene.children[0];
    Plane_Text_Front_UnderCurved2_PublicEnemy.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_UnderCurved2_PublicEnemy.renderOrder = 3;
  }
);

let Plane_Text_Front_UnderCurved2_PublicEnemyTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UnderCurved2_PublicEnemyTucked.glb",
  (gltf) => {
    Plane_Text_Front_UnderCurved2_PublicEnemyTucked = gltf.scene.children[0];
    Plane_Text_Front_UnderCurved2_PublicEnemyTucked.material =
      Plane_Text_Front_Under_mat;
    Plane_Text_Front_UnderCurved2_PublicEnemyTucked.renderOrder = 3;
  }
);


let Plane_Text_Front_UpperCurved1;
gltfLoader.load("gltf/Plane_Text_Front_UpperCurved1.glb", (gltf) => {
  Plane_Text_Front_UpperCurved1 = gltf.scene.children[0];
  Plane_Text_Front_UpperCurved1.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_UpperCurved1.renderOrder = 3;
});

let Plane_Text_Front_UpperCurved1Tucked;
gltfLoader.load("gltf/Plane_Text_Front_UpperCurved1Tucked.glb", (gltf) => {
  Plane_Text_Front_UpperCurved1Tucked = gltf.scene.children[0];
  Plane_Text_Front_UpperCurved1Tucked.material = Plane_Text_Front_Upper_mat;Plane_Text_Front_UpperCurved1Tucked.renderOrder = 3;
});

let Plane_Text_Front_UpperCurved1_CollegeBold;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved1_CollegeBold.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved1_CollegeBold = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved1_CollegeBold.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved1_CollegeBold.renderOrder = 3;
  }
);
let Plane_Text_Front_UpperCurved1_CollegeBoldTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved1_CollegeBoldTucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved1_CollegeBoldTucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved1_CollegeBoldTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved1_CollegeBoldTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved1_DeftoneStyles;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved1_DeftoneStyles.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved1_DeftoneStyles = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved1_DeftoneStyles.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved1_DeftoneStyles.renderOrder = 3;
  }
);
let Plane_Text_Front_UpperCurved1_DeftoneStylesTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved1_DeftoneStylesTucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved1_DeftoneStylesTucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved1_DeftoneStylesTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved1_DeftoneStylesTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved1_Emilio19;
gltfLoader.load("gltf/Plane_Text_Front_UpperCurved1_Emilio19.glb", (gltf) => {
  Plane_Text_Front_UpperCurved1_Emilio19 = gltf.scene.children[0];
  Plane_Text_Front_UpperCurved1_Emilio19.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_UpperCurved1_Emilio19.renderOrder = 3;
});
let Plane_Text_Front_UpperCurved1_Emilio19Tucked;

gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved1_Emilio19Tucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved1_Emilio19Tucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved1_Emilio19Tucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved1_Emilio19Tucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved1_COCOGOOSE;
gltfLoader.load("gltf/Plane_Text_Front_UpperCurved1_COCOGOOSE.glb", (gltf) => {
  Plane_Text_Front_UpperCurved1_COCOGOOSE = gltf.scene.children[0];
  Plane_Text_Front_UpperCurved1_COCOGOOSE.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_UpperCurved1_COCOGOOSE.renderOrder = 3;
});
let Plane_Text_Front_UpperCurved1_COCOGOOSETucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved1_COCOGOOSETucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved1_COCOGOOSETucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved1_COCOGOOSETucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved1_COCOGOOSETucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved1_LEAGUESPARTANT;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved1_LEAGUESPARTANT.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved1_LEAGUESPARTANT = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved1_LEAGUESPARTANT.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved1_LEAGUESPARTANT.renderOrder = 3;
  }
);
let Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved1_Monoton;
gltfLoader.load("gltf/Plane_Text_Front_UpperCurved1_Monoton.glb", (gltf) => {
  Plane_Text_Front_UpperCurved1_Monoton = gltf.scene.children[0];
  Plane_Text_Front_UpperCurved1_Monoton.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_UpperCurved1_Monoton.renderOrder = 3;
});
let Plane_Text_Front_UpperCurved1_MonotonTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved1_MonotonTucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved1_MonotonTucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved1_MonotonTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved1_MonotonTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved1_Monserrat;
gltfLoader.load("gltf/Plane_Text_Front_UpperCurved1_Monserrat.glb", (gltf) => {
  Plane_Text_Front_UpperCurved1_Monserrat = gltf.scene.children[0];
  Plane_Text_Front_UpperCurved1_Monserrat.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_UpperCurved1_Monserrat.renderOrder = 3;
});
let Plane_Text_Front_UpperCurved1_MonserratTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved1_MonserratTucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved1_MonserratTucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved1_MonserratTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved1_MonserratTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved1_SportJersey;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved1_SportJersey.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved1_SportJersey = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved1_SportJersey.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved1_SportJersey.renderOrder = 3;
  }
);
let Plane_Text_Front_UpperCurved1_SportJerseyTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved1_SportJerseyTucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved1_SportJerseyTucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved1_SportJerseyTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved1_SportJerseyTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved1_PublicEnemy;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved1_PublicEnemy.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved1_PublicEnemy = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved1_PublicEnemy.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved1_PublicEnemy.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved1_PublicEnemyTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved1_PublicEnemyTucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved1_PublicEnemyTucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved1_PublicEnemyTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved1_PublicEnemyTucked.renderOrder = 3;
  }
);


let Plane_Text_Front_UpperCurved2;
gltfLoader.load("gltf/Plane_Text_Front_UpperCurved2.glb", (gltf) => {
  Plane_Text_Front_UpperCurved2 = gltf.scene.children[0];
  Plane_Text_Front_UpperCurved2.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_UpperCurved2.renderOrder = 3;
});

let Plane_Text_Front_UpperCurved2Tucked;
gltfLoader.load("gltf/Plane_Text_Front_UpperCurved2Tucked.glb", (gltf) => {
  Plane_Text_Front_UpperCurved2Tucked = gltf.scene.children[0];
  Plane_Text_Front_UpperCurved2Tucked.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_UpperCurved2Tucked.renderOrder = 3;
});

let Plane_Text_Front_UpperCurved2_CollegeBold;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved2_CollegeBold.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved2_CollegeBold = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved2_CollegeBold.material =
      Plane_Text_Front_Upper_mat;
      Plane_Text_Front_UpperCurved2_CollegeBold.renderOrder = 3;
  }
);
let Plane_Text_Front_UpperCurved2_CollegeBoldTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved2_CollegeBoldTucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved2_CollegeBoldTucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved2_CollegeBoldTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved2_CollegeBoldTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved2_DeftoneStyles;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved2_DeftoneStyles.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved2_DeftoneStyles = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved2_DeftoneStyles.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved2_DeftoneStyles.renderOrder = 3;
  }
);
let Plane_Text_Front_UpperCurved2_DeftoneStylesTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved2_DeftoneStylesTucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved2_DeftoneStylesTucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved2_DeftoneStylesTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved2_DeftoneStylesTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved2_Emilio19;
gltfLoader.load("gltf/Plane_Text_Front_UpperCurved2_Emilio19.glb", (gltf) => {
  Plane_Text_Front_UpperCurved2_Emilio19 = gltf.scene.children[0];
  Plane_Text_Front_UpperCurved2_Emilio19.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_UpperCurved2_Emilio19.renderOrder = 3;
});
let Plane_Text_Front_UpperCurved2_Emilio19Tucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved2_Emilio19Tucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved2_Emilio19Tucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved2_Emilio19Tucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved2_Emilio19Tucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved2_COCOGOOSE;
gltfLoader.load("gltf/Plane_Text_Front_UpperCurved2_COCOGOOSE.glb", (gltf) => {
  Plane_Text_Front_UpperCurved2_COCOGOOSE = gltf.scene.children[0];
  Plane_Text_Front_UpperCurved2_COCOGOOSE.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_UpperCurved2_COCOGOOSE.renderOrder = 3;
});
let Plane_Text_Front_UpperCurved2_COCOGOOSETucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved2_COCOGOOSETucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved2_COCOGOOSETucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved2_COCOGOOSETucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved2_COCOGOOSETucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved2_LEAGUESPARTANT;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved2_LEAGUESPARTANT.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved2_LEAGUESPARTANT = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved2_LEAGUESPARTANT.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved2_LEAGUESPARTANT.renderOrder = 3;
  }
);
let Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved2_Monoton;
gltfLoader.load("gltf/Plane_Text_Front_UpperCurved2_Monoton.glb", (gltf) => {
  Plane_Text_Front_UpperCurved2_Monoton = gltf.scene.children[0];
  Plane_Text_Front_UpperCurved2_Monoton.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_UpperCurved2_Monoton.renderOrder = 3;
});
let Plane_Text_Front_UpperCurved2_MonotonTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved2_MonotonTucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved2_MonotonTucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved2_MonotonTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved2_MonotonTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved2_Monserrat;
gltfLoader.load("gltf/Plane_Text_Front_UpperCurved2_Monserrat.glb", (gltf) => {
  Plane_Text_Front_UpperCurved2_Monserrat = gltf.scene.children[0];
  Plane_Text_Front_UpperCurved2_Monserrat.material = Plane_Text_Front_Upper_mat;
  Plane_Text_Front_UpperCurved2_Monserrat.renderOrder = 3;
});
let Plane_Text_Front_UpperCurved2_MonserratTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved2_MonserratTucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved2_MonserratTucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved2_MonserratTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved2_MonserratTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved2_SportJersey;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved2_SportJersey.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved2_SportJersey = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved2_SportJersey.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved2_SportJersey.renderOrder = 3;
  }
);
let Plane_Text_Front_UpperCurved2_SportJerseyTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved2_SportJerseyTucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved2_SportJerseyTucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved2_SportJerseyTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved2_SportJerseyTucked.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved2_PublicEnemy;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved2_PublicEnemy.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved2_PublicEnemy = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved2_PublicEnemy.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved2_PublicEnemy.renderOrder = 3;
  }
);

let Plane_Text_Front_UpperCurved2_PublicEnemyTucked;
gltfLoader.load(
  "gltf/Plane_Text_Front_UpperCurved2_PublicEnemyTucked.glb",
  (gltf) => {
    Plane_Text_Front_UpperCurved2_PublicEnemyTucked = gltf.scene.children[0];
    Plane_Text_Front_UpperCurved2_PublicEnemyTucked.material =
      Plane_Text_Front_Upper_mat;
    Plane_Text_Front_UpperCurved2_PublicEnemyTucked.renderOrder = 3;
  }
);


//LIGHTS
let hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.72);
hemiLight.position.set(0, 90, 0);
scene.add(hemiLight);

const color = 0xffffff;
const intensity = 0.23;
const light = new THREE.DirectionalLight(color, intensity);
light.castShadow = true;
light.position.set(2, 35, 57);
light.target.position.set(4, -11, 0);
scene.add(light);
scene.add(light.target);

const color2 = 0xffffff;
const intensity2 = 0.2;
const light2 = new THREE.DirectionalLight(color2, intensity2);
light2.castShadow = true;
light2.position.set(0, 24, -2);
light2.target.position.set(0, 23.2, -0.4);
scene.add(light2);
scene.add(light2.target);

const color3 = 0xffffff;
const intensity3 = 0.2;
const light3 = new THREE.DirectionalLight(color3, intensity3);
light3.position.set(34.9, -64, -3);
light3.target.position.set(-16, 8.4, -5);
scene.add(light3);
scene.add(light3.target);

// for dat gui
function updateLight() {
  light.target.updateMatrixWorld();
  light2.target.updateMatrixWorld();
  light3.target.updateMatrixWorld();
  helper.update();
}



//VIEWS BUTTONS
let ViewStatus = 0;
let TuckedStatus = 0;

document.getElementById("View360img").addEventListener("click", function () {
  if (ViewStatus == 0) {
    controls.enabled = false;
    ViewStatus = 1;
  } else if (ViewStatus == 1) {
    controls.enabled = true;
    ViewStatus = 0;
  }
});

document.getElementById("Button_Right").addEventListener("click", function () {
  controls.enabled = false;
  camera.position.set(5, 0, 0);
});

document.getElementById("Button_Left").addEventListener("click", function () {
  controls.enabled = false;
  camera.position.set(-5, 0, 0);
});

document.getElementById("Button_Front").addEventListener("click", function () {
  controls.enabled = false;
  camera.position.set(0, 0, 5);
});

document.getElementById("Button_Back").addEventListener("click", function () {
  controls.enabled = false;
  camera.position.set(0, 0, -5);
});

document.getElementById("Button_Jersey").addEventListener("click", function () {
  Jersey_group.add(Jersey_Outtucked_mainMaterial, Jersey_Outtucked_stiching);
  Jersey_group.remove(Jersey_Intucked_mainMaterial, Jersey_Intucked_stiching);
  scene.remove(Shorts_group);
  scene.add(Jersey_group);
  Jersey_group.position.y = -0.15;
  Jersey_group.scale.set(1.35, 1.35, 1.35);
  TuckedStatus = 0;
});

document.getElementById("Button_Shorts").addEventListener("click", function () {
  scene.remove(Jersey_group);
  scene.add(Shorts_group);
  Shorts_group.position.y = 1.3;
  Shorts_group.scale.set(1.9, 1.9, 1.9);
});

document.getElementById("Button_Tucked").addEventListener("click", function () {
  Jersey_group.remove(
    Jersey_Outtucked_mainMaterial, Jersey_Outtucked_stiching, Jersey_JockTag, Plane_BackUnderNumberUntucked, Plane_Text_Front_Upper, Plane_Text_Front_Upper_DeftoneStyles, Plane_Text_Front_Upper_Emilio19, Plane_Text_Front_Upper_COCOGOOSE, Plane_Text_Front_Upper_LEAGUESPARTANT, Plane_Text_Front_Upper_Monoton, Plane_Text_Front_Upper_Monserrat, Plane_Text_Front_Upper_SportJersey, Plane_Text_Front_Upper_PublicEnemy, Plane_Text_Front_Upper_CollegeBold, Plane_Text_Front_UpperCurved1, Plane_Text_Front_UpperCurved1_DeftoneStyles, Plane_Text_Front_UpperCurved1_Emilio19, Plane_Text_Front_UpperCurved1_COCOGOOSE, Plane_Text_Front_UpperCurved1_LEAGUESPARTANT, Plane_Text_Front_UpperCurved1_Monoton, Plane_Text_Front_UpperCurved1_Monserrat, Plane_Text_Front_UpperCurved1_SportJersey, Plane_Text_Front_UpperCurved1_PublicEnemy, Plane_Text_Front_UpperCurved1_CollegeBold, Plane_Text_Front_UpperCurved2, Plane_Text_Front_UpperCurved2_DeftoneStyles, Plane_Text_Front_UpperCurved2_Emilio19, Plane_Text_Front_UpperCurved2_COCOGOOSE, Plane_Text_Front_UpperCurved2_LEAGUESPARTANT, Plane_Text_Front_UpperCurved2_Monoton, Plane_Text_Front_UpperCurved2_Monserrat, Plane_Text_Front_UpperCurved2_SportJersey, Plane_Text_Front_UpperCurved2_PublicEnemy, Plane_Text_Front_UpperCurved2_CollegeBold, Plane_Text_Front_Under, Plane_Text_Front_Under_CollegeBold, Plane_Text_Front_Under_DeftoneStyles, Plane_Text_Front_Under_Emilio19, Plane_Text_Front_Under_COCOGOOSE, Plane_Text_Front_Under_PublicEnemy, Plane_Text_Front_Under_LEAGUESPARTANT, Plane_Text_Front_Under_Monoton, Plane_Text_Front_Under_Monserrat, Plane_Text_Front_Under_SportJersey, Plane_Text_Front_Under_Monserrat, Plane_Text_Front_UnderCurved2, Plane_Text_Front_UnderCurved2_CollegeBold, Plane_Text_Front_UnderCurved2_DeftoneStyles, Plane_Text_Front_UnderCurved2_Emilio19, Plane_Text_Front_UnderCurved2_COCOGOOSE, Plane_Text_Front_UnderCurved2_PublicEnemy, Plane_Text_Front_UnderCurved2_LEAGUESPARTANT, Plane_Text_Front_UnderCurved2_Monoton, Plane_Text_Front_UnderCurved2_Monserrat, Plane_Text_Front_UnderCurved2_SportJersey, Plane_Text_Front_UnderCurved2_Monserrat, Plane_Text_Front_Number_Canterbury, Plane_Text_Front_Number_Emilio19, Plane_Text_Front_Number_COCOGOOSE, Plane_Text_Front_Number_CollegeBold, Plane_Text_Front_Number_DeftoneStyles, Plane_Text_Front_Number_LEAGUESPARTAN, Plane_Text_Front_Number_Monoton, Plane_Text_Front_Number_Monserrat, Plane_Text_Front_Number_PublicEnemy, Plane_Text_Front_Number_SportJersey, Plane_Text_Back_Number_Canterbury, Plane_Text_Back_Number_Emilio19, Plane_Text_Back_Number_COCOGOOSE, Plane_Text_Back_Number_CollegeBold, Plane_Text_Back_Number_DeftoneStyles, Plane_Text_Back_Number_LEAGUESPARTAN, Plane_Text_Back_Number_Monoton, Plane_Text_Back_Number_Monserrat, Plane_Text_Back_Number_PublicEnemy, Plane_Text_Back_Number_SportJersey
  );
  Jersey_group.add(
    Jersey_Intucked_mainMaterial, Jersey_Intucked_stiching, Jersey_SizeLabel
  );
  scene.remove(Jersey_group, Shorts_group);
  scene.add(Shorts_group, Jersey_group);

  switch (document.getElementById("FontTeamNameJersey").innerHTML) {
    case "Canterbury":
      switch (TypeLayOutFrontStatus) {
        case 1:
          Jersey_group.add(Plane_Text_Front_UpperTucked);
          break;
        case 2:
          Jersey_group.add( Plane_Text_Front_UpperTucked, Plane_Text_Front_UnderTucked );
        case 3:
          Jersey_group.add( Plane_Text_Front_UpperCurved2Tucked, Plane_Text_Front_UnderCurved2Tucked );
          break;
        case 4:
          Jersey_group.add(Plane_Text_Front_UpperCurved1Tucked);
          break;
      }
      break;
    case "College_Bold":
      switch (TypeLayOutFrontStatus) {
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_CollegeBoldTucked);
          break;
        case 2:
          Jersey_group.add( Plane_Text_Front_Upper_CollegeBoldTucked, Plane_Text_Front_Under_CollegeBoldTucked );
        case 3:
          Jersey_group.add( Plane_Text_Front_UpperCurved2_CollegeBoldTucked, Plane_Text_Front_UnderCurved2_CollegeBoldTucked );
          break;
        case 4:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_CollegeBoldTucked);
          break;
      }
      break;
    case "Deftone_Stylus":
      switch (TypeLayOutFrontStatus) {
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_DeftoneStylesTucked);
          break;
        case 2:
          Jersey_group.add( Plane_Text_Front_Upper_DeftoneStylesTucked, Plane_Text_Front_Under_DeftoneStylesTucked );
        case 3:
          Jersey_group.add( Plane_Text_Front_UpperCurved2_DeftoneStylesTucked, Plane_Text_Front_UnderCurved2_DeftoneStylesTucked );
          break;
        case 4:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_DeftoneStylesTucked); break; }
      break;
    case "Emilio_19_Regular":
      switch (TypeLayOutFrontStatus) {
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_Emilio19Tucked);
          break;
        case 2:
          Jersey_group.add( Plane_Text_Front_Upper_Emilio19Tucked, Plane_Text_Front_Under_Emilio19Tucked );
        case 3:
          Jersey_group.add( Plane_Text_Front_UpperCurved2_Emilio19Tucked, Plane_Text_Front_UnderCurved2_Emilio19Tucked );
          break;
        case 4:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_Emilio19Tucked); break; }
      break;
    case "CocogooseProItalic":
      switch (TypeLayOutFrontStatus) {
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_COCOGOOSETucked);
          break;
        case 2:
          Jersey_group.add( Plane_Text_Front_Upper_COCOGOOSETucked, Plane_Text_Front_Under_COCOGOOSETucked );
        case 3:
          Jersey_group.add( Plane_Text_Front_UpperCurved2_COCOGOOSETucked, Plane_Text_Front_UnderCurved2_COCOGOOSETucked );
          break;
        case 4:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_COCOGOOSETucked); break; }
      break;
    case "LeagueSpartan_Bold":
      switch (TypeLayOutFrontStatus) {
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_LEAGUESPARTANTTucked);
          break;
        case 2:
          Jersey_group.add( Plane_Text_Front_Upper_LEAGUESPARTANTTucked, Plane_Text_Front_Under_LEAGUESPARTANTTucked );
        case 3:
          Jersey_group.add( Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked, Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked );
          break;
        case 4:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked); break;
      }
      break;
    case "Monoton_Regular":
      switch (TypeLayOutFrontStatus) {
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_MonotonTucked);
          break;
        case 2:
          Jersey_group.add( Plane_Text_Front_Upper_MonotonTucked, Plane_Text_Front_Under_MonotonTucked );
        case 3:
          Jersey_group.add( Plane_Text_Front_UpperCurved2_MonotonTucked, Plane_Text_Front_UnderCurved2_MonotonTucked );
          break;
        case 4:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_MonotonTucked);
          break;
      }
      break;
    case "Montserrat_Regular":
      switch (TypeLayOutFrontStatus) {
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_MonserratTucked);
          break;
        case 2:
          Jersey_group.add( Plane_Text_Front_Upper_MonserratTucked, Plane_Text_Front_Under_MonserratTucked );
        case 3:
          Jersey_group.add( Plane_Text_Front_UpperCurved2_MonserratTucked, Plane_Text_Front_UnderCurved2_MonserratTucked );
          break;
        case 4:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_MonserratTucked);
          break;
      }
      break;
    case "Public_Enemy_Regular":
      switch (TypeLayOutFrontStatus) {
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_PublicEnemyTucked);
          break;
        case 2:
          Jersey_group.add( Plane_Text_Front_Upper_PublicEnemyTucked, Plane_Text_Front_Under_PublicEnemyTucked );
        case 3:
          Jersey_group.add( Plane_Text_Front_UpperCurved2_PublicEnemyTucked, Plane_Text_Front_UnderCurved2_PublicEnemyTucked );
          break;
        case 4:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_PublicEnemyTucked);
          break;
      }
      break;
    case "Sportsjersey":
      switch (TypeLayOutFrontStatus) {
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_SportJerseyTucked);
          break;
        case 2:
          Jersey_group.add( Plane_Text_Front_Upper_SportJerseyTucked, Plane_Text_Front_Under_SportJerseyTucked );
        case 3:
          Jersey_group.add( Plane_Text_Front_UpperCurved2_SportJerseyTucked, Plane_Text_Front_UnderCurved2_SportJerseyTucked );
          break;
        case 4:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_SportJerseyTucked);
          break;
      }
      break;
  }

  switch (document.getElementById("FontNumberJersey").innerHTML) {
    case "Canterbury":
      Jersey_group.add( Plane_Text_Front_Number_CanterburyTucked, Plane_Text_Back_Number_CanterburyTucked );
      break;
    case "College_Bold":
      Jersey_group.add( Plane_Text_Front_Number_CollegeBoldTucked, Plane_Text_Back_Number_CollegeBoldTucked );
      break;
    case "Deftone_Stylus":
      Jersey_group.add( Plane_Text_Front_Number_DeftoneStylesTucked, Plane_Text_Back_Number_DeftoneStylesTucked );
      break;
    case "Emilio_19_Regular":
      Jersey_group.add( Plane_Text_Front_Number_Emilio19Tucked, Plane_Text_Back_Number_Emilio19Tucked );
      break;
    case "CocogooseProItalic":
      Jersey_group.add( Plane_Text_Front_Number_COCOGOOSETucked, Plane_Text_Back_Number_COCOGOOSETucked );
      break;
    case "LeagueSpartan_Bold":
      Jersey_group.add( Plane_Text_Front_Number_LEAGUESPARTANTucked, Plane_Text_Back_Number_LEAGUESPARTANTucked );
      break;
    case "Monoton_Regular":
      Jersey_group.add( Plane_Text_Front_Number_MonotonTucked, Plane_Text_Back_Number_MonotonTucked );
      break;
    case "Montserrat_Regular":
      Jersey_group.add( Plane_Text_Front_Number_MonserratTucked, Plane_Text_Back_Number_MonserratTucked );
      break;
    case "Public_Enemy_Regular":
      Jersey_group.add( Plane_Text_Front_Number_PublicEnemyTucked, Plane_Text_Back_Number_PublicEnemyTucked );
      break;
    case "Sportsjersey":
      Jersey_group.add( Plane_Text_Front_Number_SportJerseyTucked, Plane_Text_Back_Number_SportJerseyTucked );
      break;
  }
  Jersey_group.position.y = 0;
  Jersey_group.scale.set(1, 1, 1);
  Shorts_group.position.y = 0;
  Shorts_group.scale.set(1, 1, 1);
  TuckedStatus = 1;
});

document
  .getElementById("Button_Untucked")
  .addEventListener("click", function () {
    Jersey_group.add( Jersey_Outtucked_mainMaterial, Jersey_Outtucked_stiching, Jersey_SizeLabel, Jersey_JockTag, Plane_BackUnderNumberUntucked );
    Jersey_group.remove( Jersey_Intucked_mainMaterial, Jersey_Intucked_stiching, Plane_BackUnderNumberTucked, Plane_Text_Front_UpperTucked, Plane_Text_Front_Upper_DeftoneStylesTucked, Plane_Text_Front_Upper_Emilio19Tucked, Plane_Text_Front_Upper_COCOGOOSETucked, Plane_Text_Front_Upper_LEAGUESPARTANTTucked, Plane_Text_Front_Upper_MonotonTucked, Plane_Text_Front_Upper_MonserratTucked, Plane_Text_Front_Upper_SportJerseyTucked, Plane_Text_Front_Upper_PublicEnemyTucked, Plane_Text_Front_Upper_CollegeBoldTucked, Plane_Text_Front_UpperCurved1Tucked, Plane_Text_Front_UpperCurved1_DeftoneStylesTucked, Plane_Text_Front_UpperCurved1_Emilio19Tucked, Plane_Text_Front_UpperCurved1_COCOGOOSETucked, Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked, Plane_Text_Front_UpperCurved1_MonotonTucked, Plane_Text_Front_UpperCurved1_MonserratTucked, Plane_Text_Front_UpperCurved1_SportJerseyTucked, Plane_Text_Front_UpperCurved1_PublicEnemyTucked, Plane_Text_Front_UpperCurved1_CollegeBoldTucked, Plane_Text_Front_UpperCurved2Tucked, Plane_Text_Front_UpperCurved2_DeftoneStylesTucked, Plane_Text_Front_UpperCurved2_Emilio19Tucked, Plane_Text_Front_UpperCurved2_COCOGOOSETucked, Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked, Plane_Text_Front_UpperCurved2_MonotonTucked, Plane_Text_Front_UpperCurved2_MonserratTucked, Plane_Text_Front_UpperCurved2_SportJerseyTucked, Plane_Text_Front_UpperCurved2_PublicEnemyTucked, Plane_Text_Front_UpperCurved2_CollegeBoldTucked, Plane_Text_Front_UnderTucked, Plane_Text_Front_Under_CollegeBoldTucked, Plane_Text_Front_Under_DeftoneStylesTucked, Plane_Text_Front_Under_Emilio19Tucked, Plane_Text_Front_Under_COCOGOOSETucked, Plane_Text_Front_Under_PublicEnemyTucked, Plane_Text_Front_Under_LEAGUESPARTANTTucked, Plane_Text_Front_Under_MonotonTucked, Plane_Text_Front_Under_MonserratTucked, Plane_Text_Front_Under_SportJerseyTucked, Plane_Text_Front_Under_MonserratTucked, Plane_Text_Front_UnderCurved2Tucked, Plane_Text_Front_UnderCurved2_CollegeBoldTucked, Plane_Text_Front_UnderCurved2_DeftoneStylesTucked, Plane_Text_Front_UnderCurved2_Emilio19Tucked, Plane_Text_Front_UnderCurved2_COCOGOOSETucked, Plane_Text_Front_UnderCurved2_PublicEnemyTucked, Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked, Plane_Text_Front_UnderCurved2_MonotonTucked, Plane_Text_Front_UnderCurved2_MonserratTucked, Plane_Text_Front_UnderCurved2_SportJerseyTucked, Plane_Text_Front_UnderCurved2_MonserratTucked, Plane_Text_Front_Number_CanterburyTucked, Plane_Text_Front_Number_Emilio19Tucked, Plane_Text_Front_Number_COCOGOOSETucked, Plane_Text_Front_Number_CollegeBoldTucked, Plane_Text_Front_Number_DeftoneStylesTucked, Plane_Text_Front_Number_LEAGUESPARTANTucked, Plane_Text_Front_Number_MonotonTucked, Plane_Text_Front_Number_MonserratTucked, Plane_Text_Front_Number_PublicEnemyTucked, Plane_Text_Front_Number_SportJerseyTucked, Plane_Text_Back_Number_CanterburyTucked, Plane_Text_Back_Number_Emilio19Tucked, Plane_Text_Back_Number_COCOGOOSETucked, Plane_Text_Back_Number_CollegeBoldTucked, Plane_Text_Back_Number_DeftoneStylesTucked, Plane_Text_Back_Number_LEAGUESPARTANTucked, Plane_Text_Back_Number_MonotonTucked, Plane_Text_Back_Number_MonserratTucked, Plane_Text_Back_Number_PublicEnemyTucked, Plane_Text_Back_Number_SportJerseyTucked );
    scene.remove(Jersey_group, Shorts_group);
    scene.add(Shorts_group, Jersey_group);

    switch (document.getElementById("FontTeamNameJersey").innerHTML) {
      case "Canterbury":
        switch (TypeLayOutFrontStatus) {
          case 1:
            Jersey_group.add(Plane_Text_Front_Upper);
            break;
          case 2:
            Jersey_group.add(Plane_Text_Front_Upper, Plane_Text_Front_Under);
          case 3:
            Jersey_group.add( Plane_Text_Front_UpperCurved2, Plane_Text_Front_UnderCurved2 );
            break;
          case 4:
            Jersey_group.add(Plane_Text_Front_UpperCurved1);
            break;
        }
        break;
      case "College_Bold":
        switch (TypeLayOutFrontStatus) {
          case 1:
            Jersey_group.add(Plane_Text_Front_Upper_CollegeBold);
            break;
          case 2:
            Jersey_group.add( Plane_Text_Front_Upper_CollegeBold, Plane_Text_Front_Under_CollegeBold );
          case 3:
            Jersey_group.add( Plane_Text_Front_UpperCurved2_CollegeBold, Plane_Text_Front_UnderCurved2_CollegeBold );
            break;
          case 4:
            Jersey_group.add(Plane_Text_Front_UpperCurved1_CollegeBold);
            break;
        }
        break;
      case "Deftone_Stylus":
        switch (TypeLayOutFrontStatus) {
          case 1:
            Jersey_group.add(Plane_Text_Front_Upper_DeftoneStyles);
            break;
          case 2:
            Jersey_group.add( Plane_Text_Front_Upper_DeftoneStyles, Plane_Text_Front_Under_DeftoneStyles );
          case 3:
            Jersey_group.add( Plane_Text_Front_UpperCurved2_DeftoneStyles, Plane_Text_Front_UnderCurved2_DeftoneStyles );
            break;
          case 4:
            Jersey_group.add(Plane_Text_Front_UpperCurved1_DeftoneStyles);
            break;
        }
        break;
      case "Emilio_19_Regular":
        switch (TypeLayOutFrontStatus) {
          case 1:
            Jersey_group.add(Plane_Text_Front_Upper_Emilio19);
            break;
          case 2:
            Jersey_group.add( Plane_Text_Front_Upper_Emilio19, Plane_Text_Front_Under_Emilio19 );
          case 3:
            Jersey_group.add( Plane_Text_Front_UpperCurved2_Emilio19, Plane_Text_Front_UnderCurved2_Emilio19 );
            break;
          case 4:
            Jersey_group.add(Plane_Text_Front_UpperCurved1_Emilio19);
            break;
        }
        break;
      case "CocogooseProItalic":
        switch (TypeLayOutFrontStatus) {
          case 1:
            Jersey_group.add(Plane_Text_Front_Upper_COCOGOOSE);
            break;
          case 2:
            Jersey_group.add( Plane_Text_Front_Upper_COCOGOOSE, Plane_Text_Front_Under_COCOGOOSE );
          case 3:
            Jersey_group.add( Plane_Text_Front_UpperCurved2_COCOGOOSE, Plane_Text_Front_UnderCurved2_COCOGOOSE );
            break;
          case 4:
            Jersey_group.add(Plane_Text_Front_UpperCurved1_COCOGOOSE);
            break;
        }
        break;
      case "LeagueSpartan_Bold":
        switch (TypeLayOutFrontStatus) {
          case 1:
            Jersey_group.add(Plane_Text_Front_Upper_LEAGUESPARTANT);
            break;
          case 2:
            Jersey_group.add(
              Plane_Text_Front_Upper_LEAGUESPARTANT,
              Plane_Text_Front_Under_LEAGUESPARTANT
            );
          case 3:
            Jersey_group.add(
              Plane_Text_Front_UpperCurved2_LEAGUESPARTANT,
              Plane_Text_Front_UnderCurved2_LEAGUESPARTANT
            );
            break;
          case 4:
            Jersey_group.add(Plane_Text_Front_UpperCurved1_LEAGUESPARTANT);
            break;
        }
        break;
      case "Monoton_Regular":
        switch (TypeLayOutFrontStatus) {
          case 1:
            Jersey_group.add(Plane_Text_Front_Upper_Monoton);
            break;
          case 2:
            Jersey_group.add(
              Plane_Text_Front_Upper_Monoton,
              Plane_Text_Front_Under_Monoton
            );
          case 3:
            Jersey_group.add(
              Plane_Text_Front_UpperCurved2_Monoton,
              Plane_Text_Front_UnderCurved2_Monoton
            );
            break;
          case 4:
            Jersey_group.add(Plane_Text_Front_UpperCurved1_Monoton);
            break;
        }
        break;
      case "Montserrat_Regular":
        switch (TypeLayOutFrontStatus) {
          case 1:
            Jersey_group.add(Plane_Text_Front_Upper_Monserrat);
            break;
          case 2:
            Jersey_group.add(
              Plane_Text_Front_Upper_Monserrat,
              Plane_Text_Front_Under_Monserrat
            );
          case 3:
            Jersey_group.add(
              Plane_Text_Front_UpperCurved2_Monserrat,
              Plane_Text_Front_UnderCurved2_Monserrat
            );
            break;
          case 4:
            Jersey_group.add(Plane_Text_Front_UpperCurved1_Monserrat);
            break;
        }
        break;
      case "Public_Enemy_Regular":
        switch (TypeLayOutFrontStatus) {
          case 1:
            Jersey_group.add(Plane_Text_Front_Upper_PublicEnemy);
            break;
          case 2:
            Jersey_group.add(
              Plane_Text_Front_Upper_PublicEnemy,
              Plane_Text_Front_Under_PublicEnemy
            );
          case 3:
            Jersey_group.add(
              Plane_Text_Front_UpperCurved2_PublicEnemy,
              Plane_Text_Front_UnderCurved2_PublicEnemy
            );
            break;
          case 4:
            Jersey_group.add(Plane_Text_Front_UpperCurved1_PublicEnemy);
            break;
        }
        break;
      case "Sportsjersey":
        switch (TypeLayOutFrontStatus) {
          case 1:
            Jersey_group.add(Plane_Text_Front_Upper_SportJersey);
            break;
          case 2:
            Jersey_group.add(
              Plane_Text_Front_Upper_SportJersey,
              Plane_Text_Front_Under_SportJersey
            );
          case 3:
            Jersey_group.add(
              Plane_Text_Front_UpperCurved2_SportJersey,
              Plane_Text_Front_UnderCurved2_SportJersey
            );
            break;
          case 4:
            Jersey_group.add(Plane_Text_Front_UpperCurved1_SportJersey);
            break;
        }
        break;
    }

    switch (document.getElementById("FontNumberJersey").innerHTML) {
      case "Canterbury":
        Jersey_group.add(
          Plane_Text_Front_Number_Canterbury,
          Plane_Text_Back_Number_Canterbury
        );
        break;
      case "College_Bold":
        Jersey_group.add(
          Plane_Text_Front_Number_CollegeBold,
          Plane_Text_Back_Number_CollegeBold
        );
        break;
      case "Deftone_Stylus":
        Jersey_group.add(
          Plane_Text_Front_Number_DeftoneStyles,
          Plane_Text_Back_Number_DeftoneStyles
        );
        break;
      case "Emilio_19_Regular":
        Jersey_group.add(
          Plane_Text_Front_Number_Emilio19,
          Plane_Text_Back_Number_Emilio19
        );
        break;
      case "CocogooseProItalic":
        Jersey_group.add(
          Plane_Text_Front_Number_COCOGOOSE,
          Plane_Text_Back_Number_COCOGOOSE
        );
        break;
      case "LeagueSpartan_Bold":
        Jersey_group.add(
          Plane_Text_Front_Number_LEAGUESPARTAN,
          Plane_Text_Back_Number_LEAGUESPARTAN
        );
        break;
      case "Monoton_Regular":
        Jersey_group.add(
          Plane_Text_Front_Number_Monoton,
          Plane_Text_Back_Number_Monoton
        );
        break;
      case "Montserrat_Regular":
        Jersey_group.add(
          Plane_Text_Front_Number_Monserrat,
          Plane_Text_Back_Number_Monserrat
        );
        break;
      case "Public_Enemy_Regular":
        Jersey_group.add(
          Plane_Text_Front_Number_PublicEnemy,
          Plane_Text_Back_Number_PublicEnemy
        );
        break;
      case "Sportsjersey":
        Jersey_group.add(
          Plane_Text_Front_Number_SportJersey,
          Plane_Text_Back_Number_SportJersey
        );
        break;
    }

    Jersey_group.position.y = 0;
    Jersey_group.scale.set(1, 1, 1);
    Shorts_group.position.y = 0;
    Shorts_group.scale.set(1, 1, 1);
    TuckedStatus = 0;
  });

//HLOGO

document
  .getElementById("HLogoCheckboxRightSholder")
  .addEventListener("click", function () {
    Plane_RightChest.material = Logo3_Mat;
    Plane_LeftChest.material = UserLogo_JerseyLeftChest_Mat;
    Jersey_group.add(Plane_RightChest);
  });

document
  .getElementById("HLogoCheckboxLeftSholder")
  .addEventListener("click", function () {
    Plane_RightChest.material = UserLogo_JerseyChest_Mat;
    Plane_LeftChest.material = Logo3_Mat;
    Jersey_group.add(Plane_LeftChest);
  });

document
  .getElementById("HLogoLeftUpper")
  .addEventListener("click", function () {
    Plane_LeftUpperShorts.material = Logo3_Mat;
    Plane_LeftLowerShorts.material = UserLogo_LeftLower_Mat;
    Plane_RightUpperShorts.material = UserLogo_RightUpper_Mat;
    Plane_RightLowerShorts.material = UserLogo_RightLower_Mat;
    Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberCOCOGOOSE, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberPublicEnemy, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey );
  });

document
  .getElementById("HLogoLeftLower")
  .addEventListener("click", function () {
    Plane_LeftUpperShorts.material = UserLogo_LeftUpper_Mat;
    Plane_LeftLowerShorts.material = Logo3_Mat;
    Plane_RightUpperShorts.material = UserLogo_RightUpper_Mat;
    Plane_RightLowerShorts.material = UserLogo_RightLower_Mat;
    Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberCOCOGOOSE, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberPublicEnemy, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey );
  });

document
  .getElementById("HLogoRightUpper")
  .addEventListener("click", function () {
    Plane_LeftUpperShorts.material = UserLogo_LeftUpper_Mat;
    Plane_LeftLowerShorts.material = UserLogo_LeftLower_Mat;
    Plane_RightUpperShorts.material = Logo3_Mat;
    Plane_RightLowerShorts.material = UserLogo_RightLower_Mat;
    Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberCOCOGOOSE, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey );
  });

document
  .getElementById("HLogoRightLower")
  .addEventListener("click", function () {
    Plane_LeftUpperShorts.material = UserLogo_LeftUpper_Mat;
    Plane_LeftLowerShorts.material = UserLogo_LeftLower_Mat;
    Plane_RightUpperShorts.material = UserLogo_RightUpper_Mat;
    Plane_RightLowerShorts.material = Logo3_Mat;
    Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberCOCOGOOSE, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberPublicEnemy, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey );
  });




//TEXT 
//MAIN FUNCTION
function drawCircularText(
  canvasInUse,
  text,
  diameter,
  startAngle,
  inwardFacing,
  fName,
  fSize,
  kerning,
  fontColor,
  strokeColor,
  strokeSet
) {
  var ctx = canvasInUse.getContext("2d");
  var clockwise = -1; // draw clockwise for aligned right. Else Anticlockwise
  startAngle = startAngle * (Math.PI / 180); // convert to radians

  // Calc heigt of text in selected font:
  var d = document.createElement("span");
  d.style.fontFamily = fName;
  d.style.fontSize = fSize;
  d.textContent = text;
  document.body.appendChild(d);
  var textHeight = d.offsetHeight;
  document.body.removeChild(d);

  canvasInUse.width = diameter;
  canvasInUse.height = diameter;
  ctx.font = fSize + " " + fName;

  // Reverse letters for align Left inward, align right outward
  // and align center inward.
  if (inwardFacing) {
    text = text.split("").reverse().join("");
  }

  // Setup letters and positioning
  ctx.translate(diameter / 2, diameter / 2); // Move to center
  startAngle += Math.PI * !inwardFacing; // Rotate 180 if outward
  ctx.textBaseline = "middle"; // Ensure we draw in exact center
  ctx.textAlign = "center"; // Ensure we draw in exact center

  // rotate 50% of total angle for center alignment
  for (var j = 0; j < text.length; j++) {
    var charWid = ctx.measureText(text[j]).width;
    startAngle +=
      ((charWid + (j == text.length - 1 ? 0 : kerning)) /
        (diameter / 2 - textHeight) /
        2) *
      -clockwise;
  }

  // Phew... now rotate into final start position
  ctx.rotate(startAngle);

  // Now for the fun bit: draw, rotate, and repeat
  for (var j = 0; j < text.length; j++) {
    var charWid = ctx.measureText(text[j]).width; // half letter
    // rotate half letter
    ctx.rotate((charWid / 2 / (diameter / 2 - textHeight)) * clockwise);
    // draw the character at "top" or "bottom"
    // depending on inward or outward facing

    // !!!
    // Stroke
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeSet;
    ctx.lineJoin = "round"; //Experiment with "bevel" & "round" for the effect you want!
    ctx.miterLimit = 5;
    ctx.strokeText(
      text[j],
      0,
      (inwardFacing ? 1 : -1) * (0 - diameter / 2 + textHeight / 2)
    );

    // Actual text
    ctx.fillStyle = fontColor;
    ctx.fillText(
      text[j],
      0,
      (inwardFacing ? 1 : -1) * (0 - diameter / 2 + textHeight / 2)
    );
    ctx.rotate(
      ((charWid / 2 + kerning) / (diameter / 2 - textHeight)) * clockwise
    ); // rotate half letter
  }
}

//NUMBER FRONT TEXTURE
const FJCanvas_textCanvasJerseyFrontNumber = document.getElementById(
  "textCanvasJerseyFrontNumber"
);
let FJCanvas_textCanvasJerseyFrontNumber2D = new THREE.Texture(
  document.getElementById("textCanvasJerseyFrontNumber")
);
FJCanvas_textCanvasJerseyFrontNumber2D.anisotropy =
  renderer.capabilities.getMaxAnisotropy();
FJCanvas_textCanvasJerseyFrontNumber2D.needsUpdate = true;
FJCanvas_textCanvasJerseyFrontNumber2D.flipY = false;

const Text_Front_Number_mat = new THREE.MeshBasicMaterial({
  map: FJCanvas_textCanvasJerseyFrontNumber2D,
  transparency: 0.5,
  transparent: true,
  opacity: 1,
  depthTest: true,
  depthWrite: true,
  alphaTest: 0,
});




//NUMBER FRONT FUNCTION
let SizeFontFrontNumber, outlineStatusFrontNumber;
function updateTextFrontNumber() {
  SizeFontFrontNumber = "20em";

  //check outline
  if (
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML === "None"
  ) {
    outlineStatusFrontNumber = 0;
  } else if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Canterbury"
  ) {
    outlineStatusFrontNumber = 18;
  } else {
    outlineStatusFrontNumber = 39;
  }
  
  //draw on fabric canvas
  drawCircularText(
    FJCanvas_textCanvasJerseyFrontNumber,
    `${document.getElementById("LineNumber").value}`,
    9000,
    0,
    true,
    `${document.getElementById("FontNumberJersey").innerHTML}`,
    `${SizeFontFrontNumber}`,
    0,
    `${
      document.getElementById("SelectedColorJerseyNumber").style.backgroundColor
    }`,
    `${
      document.getElementById("SelectedColorJerseyNumberOutline").style
        .backgroundColor
    }`,
    `${outlineStatusFrontNumber}`
  );

  //place on 3d object
  FJCanvas_textCanvasJerseyFrontNumber2D = new THREE.Texture(
    document.getElementById("textCanvasJerseyFrontNumber")
  );
  FJCanvas_textCanvasJerseyFrontNumber2D.anisotropy =
    renderer.capabilities.getMaxAnisotropy();
  FJCanvas_textCanvasJerseyFrontNumber2D.needsUpdate = true;
  FJCanvas_textCanvasJerseyFrontNumber2D.flipY = false;

  Text_Front_Number_mat.map = FJCanvas_textCanvasJerseyFrontNumber2D;
}

//NUMBER FRONT event listeners
document .getElementById("ApplyLineNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

//NUMBER FRONT FONT STYLES
document
  .getElementById("CANTERBURYNumber")
  .addEventListener("click", function () {
    switch (TuckedStatus) {
      case 0:
        Jersey_group.add( Plane_Text_Front_Number_Canterbury, Plane_Text_Back_Number_Canterbury );
        Jersey_group.remove( Plane_Text_Front_Number_CanterburyTucked, Plane_Text_Back_Number_CanterburyTucked );
        console.log('canterbury');
        break;
      case 1:
        Jersey_group.add( Plane_Text_Front_Number_CanterburyTucked, Plane_Text_Back_Number_CanterburyTucked );
        Jersey_group.remove( Plane_Text_Front_Number_Canterbury, Plane_Text_Back_Number_Canterbury );
        break;
    }

    if (RightLowerNumberStatus == 1) {
      Shorts_group.add(Plane_RightLowerShorts_NumberCountrebury);
      Plane_RightLowerShorts_NumberCountrebury.material = Text_Front_Number_mat;
      Plane_RightLowerShorts_NumberCountrebury.renderOrder = 2;
      Shorts_group.remove( Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberCOCOGOOSE, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy );
    } else if (RightLowerNumberStatus == 0) {
    }

    if (RightUpperNumberStatus == 1) {
      Shorts_group.add(Plane_RightUpperShorts_NumberCountrebury);
      Plane_RightUpperShorts_NumberCountrebury.material = Text_Front_Number_mat;
      Plane_RightUpperShorts_NumberCountrebury.renderOrder = 2;
      Shorts_group.remove( Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberCOCOGOOSE, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy );
    } else if (RightUpperNumberStatus == 0) {
    }

    if (LeftUpperNumberStatus == 1) {
      Shorts_group.add(Plane_LeftUpperShorts_NumberCountrebury);
      Plane_LeftUpperShorts_NumberCountrebury.material = Text_Front_Number_mat;
      Plane_LeftUpperShorts_NumberCountrebury.renderOrder = 2;
      Shorts_group.remove( Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberCOCOGOOSE, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy );
    } else if (LeftUpperNumberStatus == 0) {
    }

    if (LeftLowerNumberStatus == 1) {
      Shorts_group.add(Plane_LeftLowerShorts_NumberCountrebury);
      Plane_LeftLowerShorts_NumberCountrebury.material = Text_Front_Number_mat;
      Plane_LeftLowerShorts_NumberCountrebury.renderOrder = 2;
      Shorts_group.remove( Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberCOCOGOOSE, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy );
    } else if (LeftLowerNumberStatus == 0) {
    }

    Jersey_group.remove( Plane_Text_Front_Number_Emilio19, Plane_Text_Front_Number_COCOGOOSE, Plane_Text_Front_Number_CollegeBold, Plane_Text_Front_Number_DeftoneStyles, Plane_Text_Front_Number_LEAGUESPARTAN, Plane_Text_Front_Number_Monoton, Plane_Text_Front_Number_Monserrat, Plane_Text_Front_Number_PublicEnemy, Plane_Text_Front_Number_SportJersey, Plane_Text_Front_Number_Emilio19Tucked, Plane_Text_Front_Number_COCOGOOSETucked, Plane_Text_Front_Number_CollegeBoldTucked, Plane_Text_Front_Number_DeftoneStylesTucked, Plane_Text_Front_Number_LEAGUESPARTANTucked, Plane_Text_Front_Number_MonotonTucked, Plane_Text_Front_Number_MonserratTucked, Plane_Text_Front_Number_PublicEnemyTucked, Plane_Text_Front_Number_SportJerseyTucked, Plane_Text_Back_Number_Emilio19, Plane_Text_Back_Number_COCOGOOSE, Plane_Text_Back_Number_CollegeBold, Plane_Text_Back_Number_DeftoneStyles, Plane_Text_Back_Number_LEAGUESPARTAN, Plane_Text_Back_Number_Monoton, Plane_Text_Back_Number_Monserrat, Plane_Text_Back_Number_PublicEnemy, Plane_Text_Back_Number_SportJersey, Plane_Text_Back_Number_Emilio19Tucked, Plane_Text_Back_Number_COCOGOOSETucked, Plane_Text_Back_Number_CollegeBoldTucked, Plane_Text_Back_Number_DeftoneStylesTucked, Plane_Text_Back_Number_LEAGUESPARTANTucked, Plane_Text_Back_Number_MonotonTucked, Plane_Text_Back_Number_MonserratTucked, Plane_Text_Back_Number_PublicEnemyTucked, Plane_Text_Back_Number_SportJerseyTucked );
    updateTextFrontNumber();
  });

document.getElementById("COLLEGENumber").addEventListener("click", function () {
  switch (TuckedStatus) {
    case 0:
      Jersey_group.add(
        Plane_Text_Front_Number_CollegeBold,
        Plane_Text_Back_Number_CollegeBold
      );
      break;
    case 1:
      Jersey_group.add(
        Plane_Text_Front_Number_CollegeBoldTucked,
        Plane_Text_Back_Number_CollegeBoldTucked
      );
      break;
  }

  if (RightLowerNumberStatus == 1) {
    Shorts_group.add(Plane_RightLowerShorts_NumberCollegeBold);
    Plane_RightLowerShorts_NumberCollegeBold.material = Text_Front_Number_mat;
    Plane_RightLowerShorts_NumberCollegeBold.renderOrder = 2;
    Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberCOCOGOOSE, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy );
  } else if (RightLowerNumberStatus == 0) {
  }

  if (RightUpperNumberStatus == 1) {
    Shorts_group.add(Plane_RightUpperShorts_NumberCollegeBold);
    Plane_RightUpperShorts_NumberCollegeBold.material = Text_Front_Number_mat;
    Plane_RightUpperShorts_NumberCollegeBold.renderOrder = 2;
    Shorts_group.remove(
      Plane_RightUpperShorts_NumberCountrebury,
      Plane_RightUpperShorts_NumberDeftoneStyles,
      Plane_RightUpperShorts_NumberEmilio19,
      Plane_RightUpperShorts_NumberCOCOGOOSE,
      Plane_RightUpperShorts_NumberLEAGUESPARTANT,
      Plane_RightUpperShorts_NumberMonoton,
      Plane_RightUpperShorts_NumberMonserrat,
      Plane_RightUpperShorts_NumberSportJersey,
      Plane_RightUpperShorts_NumberPublicEnemy
    );
  } else if (RightUpperNumberStatus == 0) {
  }

  if (LeftUpperNumberStatus == 1) {
    Shorts_group.add(Plane_LeftUpperShorts_NumberCollegeBold);
    Plane_LeftUpperShorts_NumberCollegeBold.material = Text_Front_Number_mat;
    Plane_LeftUpperShorts_NumberCollegeBold.renderOrder = 2;
    Shorts_group.remove(
      Plane_LeftUpperShorts_NumberCountrebury,
      Plane_LeftUpperShorts_NumberDeftoneStyles,
      Plane_LeftUpperShorts_NumberEmilio19,
      Plane_LeftUpperShorts_NumberCOCOGOOSE,
      Plane_LeftUpperShorts_NumberLEAGUESPARTANT,
      Plane_LeftUpperShorts_NumberMonoton,
      Plane_LeftUpperShorts_NumberMonserrat,
      Plane_LeftUpperShorts_NumberSportJersey,
      Plane_LeftUpperShorts_NumberPublicEnemy
    );
  } else if (LeftUpperNumberStatus == 0) {
  }

  if (LeftLowerNumberStatus == 1) {
    Shorts_group.add(Plane_LeftLowerShorts_NumberCollegeBold);
    Plane_LeftLowerShorts_NumberCollegeBold.material = Text_Front_Number_mat;
    Plane_LeftLowerShorts_NumberCollegeBold.renderOrder = 2;
    Shorts_group.remove(
      Plane_LeftLowerShorts_NumberCountrebury,
      Plane_LeftLowerShorts_NumberDeftoneStyles,
      Plane_LeftLowerShorts_NumberEmilio19,
      Plane_LeftLowerShorts_NumberCOCOGOOSE,
      Plane_LeftLowerShorts_NumberLEAGUESPARTANT,
      Plane_LeftLowerShorts_NumberMonoton,
      Plane_LeftLowerShorts_NumberMonserrat,
      Plane_LeftLowerShorts_NumberSportJersey,
      Plane_LeftLowerShorts_NumberPublicEnemy
    );
  } else if (LeftLowerNumberStatus == 0) {
  }

  Jersey_group.remove(
    Plane_Text_Front_Number_Emilio19,
    Plane_Text_Front_Number_COCOGOOSE,
    Plane_Text_Front_Number_Canterbury,
    Plane_Text_Front_Number_DeftoneStyles,
    Plane_Text_Front_Number_LEAGUESPARTAN,
    Plane_Text_Front_Number_Monoton,
    Plane_Text_Front_Number_Monserrat,
    Plane_Text_Front_Number_PublicEnemy,
    Plane_Text_Front_Number_SportJersey,
    Plane_Text_Front_Number_Emilio19Tucked,
    Plane_Text_Front_Number_COCOGOOSETucked,
    Plane_Text_Front_Number_CanterburyTucked,
    Plane_Text_Front_Number_DeftoneStylesTucked,
    Plane_Text_Front_Number_LEAGUESPARTANTucked,
    Plane_Text_Front_Number_MonotonTucked,
    Plane_Text_Front_Number_MonserratTucked,
    Plane_Text_Front_Number_PublicEnemyTucked,
    Plane_Text_Front_Number_SportJerseyTucked,
    Plane_Text_Back_Number_Emilio19,
    Plane_Text_Back_Number_COCOGOOSE,
    Plane_Text_Back_Number_Canterbury,
    Plane_Text_Back_Number_DeftoneStyles,
    Plane_Text_Back_Number_LEAGUESPARTAN,
    Plane_Text_Back_Number_Monoton,
    Plane_Text_Back_Number_Monserrat,
    Plane_Text_Back_Number_PublicEnemy,
    Plane_Text_Back_Number_SportJersey,
    Plane_Text_Back_Number_Emilio19Tucked,
    Plane_Text_Back_Number_COCOGOOSETucked,
    Plane_Text_Back_Number_CanterburyTucked,
    Plane_Text_Back_Number_DeftoneStylesTucked,
    Plane_Text_Back_Number_LEAGUESPARTANTucked,
    Plane_Text_Back_Number_MonotonTucked,
    Plane_Text_Back_Number_MonserratTucked,
    Plane_Text_Back_Number_PublicEnemyTucked,
    Plane_Text_Back_Number_SportJerseyTucked
  );
  updateTextFrontNumber();
});

document.getElementById("DEFTONENumber").addEventListener("click", function () {
  switch (TuckedStatus) {
    case 0:
      Jersey_group.add(
        Plane_Text_Front_Number_DeftoneStyles,
        Plane_Text_Back_Number_DeftoneStyles
      );
      break;
    case 1:
      Jersey_group.add(
        Plane_Text_Front_Number_DeftoneStylesTucked,
        Plane_Text_Back_Number_DeftoneStylesTucked
      );
      break;
  }

  if (RightLowerNumberStatus == 1) {
    Shorts_group.add(Plane_RightLowerShorts_NumberDeftoneStyles);
    Plane_RightLowerShorts_NumberDeftoneStyles.material = Text_Front_Number_mat;
    Plane_RightLowerShorts_NumberDeftoneStyles.renderOrder = 2;
    Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberCOCOGOOSE, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy );
  } else if (RightLowerNumberStatus == 0) {
  }

  if (RightUpperNumberStatus == 1) {
    Shorts_group.add(Plane_RightUpperShorts_NumberDeftoneStyles);
    Plane_RightUpperShorts_NumberDeftoneStyles.material = Text_Front_Number_mat;
    Plane_RightUpperShorts_NumberDeftoneStyles.renderOrder = 2;
    Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberCOCOGOOSE, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy );
  } else if (RightUpperNumberStatus == 0) {
  }

  if (LeftUpperNumberStatus == 1) {
    Shorts_group.add(Plane_LeftUpperShorts_NumberDeftoneStyles);
    Plane_LeftUpperShorts_NumberDeftoneStyles.material = Text_Front_Number_mat;
    Plane_LeftUpperShorts_NumberDeftoneStyles.renderOrder = 2;
    Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberCOCOGOOSE, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy );
  } else if (LeftUpperNumberStatus == 0) {
  }

  if (LeftLowerNumberStatus == 1) {
    Shorts_group.add(Plane_LeftLowerShorts_NumberDeftoneStyles);
    Plane_LeftLowerShorts_NumberDeftoneStyles.material = Text_Front_Number_mat;
    Plane_LeftLowerShorts_NumberDeftoneStyles.renderOrder = 2;
    Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberCOCOGOOSE, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy );
  } else if (LeftLowerNumberStatus == 0) {
  }

  Jersey_group.remove( Plane_Text_Front_Number_Emilio19, Plane_Text_Front_Number_COCOGOOSE, Plane_Text_Front_Number_Canterbury, Plane_Text_Front_Number_CollegeBold, Plane_Text_Front_Number_LEAGUESPARTAN, Plane_Text_Front_Number_Monoton, Plane_Text_Front_Number_Monserrat, Plane_Text_Front_Number_PublicEnemy, Plane_Text_Front_Number_SportJersey, Plane_Text_Front_Number_CanterburyTucked, Plane_Text_Front_Number_Emilio19Tucked, Plane_Text_Front_Number_COCOGOOSETucked, Plane_Text_Front_Number_CollegeBoldTucked, Plane_Text_Front_Number_LEAGUESPARTANTucked, Plane_Text_Front_Number_MonotonTucked, Plane_Text_Front_Number_MonserratTucked, Plane_Text_Front_Number_PublicEnemyTucked, Plane_Text_Front_Number_SportJerseyTucked, Plane_Text_Back_Number_Emilio19, Plane_Text_Back_Number_COCOGOOSE, Plane_Text_Back_Number_Canterbury, Plane_Text_Back_Number_CollegeBold, Plane_Text_Back_Number_LEAGUESPARTAN, Plane_Text_Back_Number_Monoton, Plane_Text_Back_Number_Monserrat, Plane_Text_Back_Number_PublicEnemy, Plane_Text_Back_Number_SportJersey, Plane_Text_Back_Number_CanterburyTucked, Plane_Text_Back_Number_Emilio19Tucked, Plane_Text_Back_Number_COCOGOOSETucked, Plane_Text_Back_Number_CollegeBoldTucked, Plane_Text_Back_Number_LEAGUESPARTANTucked, Plane_Text_Back_Number_MonotonTucked, Plane_Text_Back_Number_MonserratTucked, Plane_Text_Back_Number_PublicEnemyTucked, Plane_Text_Back_Number_SportJerseyTucked );
  updateTextFrontNumber();
});

document.getElementById("EMILIONumber").addEventListener("click", function () {
  switch (TuckedStatus) {
    case 0:
      Jersey_group.add(
        Plane_Text_Front_Number_Emilio19,
        Plane_Text_Back_Number_Emilio19
      );
      break;
    case 1:
      Jersey_group.add(
        Plane_Text_Front_Number_Emilio19Tucked,
        Plane_Text_Back_Number_Emilio19Tucked
      );
      break;
  }

  if (RightLowerNumberStatus == 1) {
    Shorts_group.add(Plane_RightLowerShorts_NumberEmilio19);
    Plane_RightLowerShorts_NumberEmilio19.material = Text_Front_Number_mat;
    Plane_RightLowerShorts_NumberEmilio19.renderOrder = 2;
    Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy, Plane_RightLowerShorts_NumberCOCOGOOSE );
  } else if (RightLowerNumberStatus == 0) {
  }

  if (RightUpperNumberStatus == 1) {
    Shorts_group.add(Plane_RightUpperShorts_NumberEmilio19);
    Plane_RightUpperShorts_NumberEmilio19.material = Text_Front_Number_mat;
    Plane_RightUpperShorts_NumberEmilio19.renderOrder = 2;
    Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberCOCOGOOSE );
  } else if (RightUpperNumberStatus == 0) {
  }

  if (LeftUpperNumberStatus == 1) {
    Shorts_group.add(Plane_LeftUpperShorts_NumberEmilio19);
    Plane_LeftUpperShorts_NumberEmilio19.material = Text_Front_Number_mat;
    Plane_LeftUpperShorts_NumberEmilio19.renderOrder = 2;
    Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy, Plane_LeftUpperShorts_NumberCOCOGOOSE );
  } else if (LeftUpperNumberStatus == 0) {
  }

  if (LeftLowerNumberStatus == 1) {
    Shorts_group.add(Plane_LeftLowerShorts_NumberEmilio19);
    Plane_LeftLowerShorts_NumberEmilio19.material = Text_Front_Number_mat;
    Plane_LeftLowerShorts_NumberEmilio19.renderOrder = 2;
    Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy, Plane_LeftLowerShorts_NumberCOCOGOOSE );
  } else if (LeftLowerNumberStatus == 0) {
  }

  Jersey_group.remove( Plane_Text_Front_Number_Canterbury, Plane_Text_Front_Number_CollegeBold, Plane_Text_Front_Number_DeftoneStyles, Plane_Text_Front_Number_LEAGUESPARTAN, Plane_Text_Front_Number_Monoton, Plane_Text_Front_Number_Monserrat, Plane_Text_Front_Number_PublicEnemy, Plane_Text_Front_Number_SportJersey, Plane_Text_Front_Number_CanterburyTucked, Plane_Text_Front_Number_CollegeBoldTucked, Plane_Text_Front_Number_DeftoneStylesTucked, Plane_Text_Front_Number_LEAGUESPARTANTucked, Plane_Text_Front_Number_MonotonTucked, Plane_Text_Front_Number_MonserratTucked, Plane_Text_Front_Number_PublicEnemyTucked, Plane_Text_Front_Number_SportJerseyTucked, Plane_Text_Back_Number_Canterbury, Plane_Text_Back_Number_CollegeBold, Plane_Text_Back_Number_DeftoneStyles, Plane_Text_Back_Number_LEAGUESPARTAN, Plane_Text_Back_Number_Monoton, Plane_Text_Back_Number_Monserrat, Plane_Text_Back_Number_PublicEnemy, Plane_Text_Back_Number_SportJersey, Plane_Text_Back_Number_CanterburyTucked, Plane_Text_Back_Number_CollegeBoldTucked, Plane_Text_Back_Number_DeftoneStylesTucked, Plane_Text_Back_Number_LEAGUESPARTANTucked, Plane_Text_Back_Number_MonotonTucked, Plane_Text_Back_Number_MonserratTucked, Plane_Text_Back_Number_PublicEnemyTucked, Plane_Text_Back_Number_SportJerseyTucked, Plane_Text_Front_Number_COCOGOOSE, Plane_Text_Front_Number_COCOGOOSETucked, Plane_Text_Back_Number_COCOGOOSE, Plane_Text_Back_Number_COCOGOOSETucked );
  updateTextFrontNumber();
});

document
  .getElementById("COCOGOOSENumber")
  .addEventListener("click", function () {
    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(
          Plane_Text_Front_Number_COCOGOOSE,
          Plane_Text_Back_Number_COCOGOOSE
        );
        break;
      case 1:
        Jersey_group.add(
          Plane_Text_Front_Number_COCOGOOSETucked,
          Plane_Text_Back_Number_COCOGOOSETucked
        );
        break;
    }

    if (RightLowerNumberStatus == 1) {
      Shorts_group.add(Plane_RightLowerShorts_NumberCOCOGOOSE);
      Plane_RightLowerShorts_NumberCOCOGOOSE.material = Text_Front_Number_mat;
      Plane_RightLowerShorts_NumberCOCOGOOSE.renderOrder = 2;
      Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy );
      Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy );
    } else if (RightLowerNumberStatus == 0) {
    }

    if (RightUpperNumberStatus == 1) {
      Shorts_group.add(Plane_RightUpperShorts_NumberCOCOGOOSE);
      Plane_RightUpperShorts_NumberCOCOGOOSE.material = Text_Front_Number_mat;
      Plane_RightUpperShorts_NumberCOCOGOOSE.renderOrder = 2;
      Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberEmilio19 );
    } else if (RightUpperNumberStatus == 0) {
    }

    if (LeftUpperNumberStatus == 1) {
      Shorts_group.add(Plane_LeftUpperShorts_NumberCOCOGOOSE);
      Plane_LeftUpperShorts_NumberCOCOGOOSE.material = Text_Front_Number_mat;
      Plane_LeftUpperShorts_NumberCOCOGOOSE.renderOrder = 2;
      Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy, Plane_LeftUpperShorts_NumberEmilio19 );
    } else if (LeftUpperNumberStatus == 0) {
    }

    if (LeftLowerNumberStatus == 1) {
      Shorts_group.add(Plane_LeftLowerShorts_NumberCOCOGOOSE);
      Plane_LeftLowerShorts_NumberCOCOGOOSE.material = Text_Front_Number_mat;
      Plane_LeftLowerShorts_NumberCOCOGOOSE.renderOrder = 2;
      Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy, Plane_LeftLowerShorts_NumberEmilio19 );
    } else if (LeftLowerNumberStatus == 0) {
    }

    Jersey_group.remove( Plane_Text_Front_Number_Emilio19, Plane_Text_Front_Number_Canterbury, Plane_Text_Front_Number_CollegeBold, Plane_Text_Front_Number_DeftoneStyles, Plane_Text_Front_Number_LEAGUESPARTAN, Plane_Text_Front_Number_Monoton, Plane_Text_Front_Number_Monserrat, Plane_Text_Front_Number_PublicEnemy, Plane_Text_Front_Number_SportJersey, Plane_Text_Front_Number_Emilio19Tucked, Plane_Text_Front_Number_CanterburyTucked, Plane_Text_Front_Number_CollegeBoldTucked, Plane_Text_Front_Number_DeftoneStylesTucked, Plane_Text_Front_Number_LEAGUESPARTANTucked, Plane_Text_Front_Number_MonotonTucked, Plane_Text_Front_Number_MonserratTucked, Plane_Text_Front_Number_PublicEnemyTucked, Plane_Text_Front_Number_SportJerseyTucked, Plane_Text_Back_Number_Canterbury, Plane_Text_Back_Number_Emilio19, Plane_Text_Back_Number_CollegeBold, Plane_Text_Back_Number_DeftoneStyles, Plane_Text_Back_Number_LEAGUESPARTAN, Plane_Text_Back_Number_Monoton, Plane_Text_Back_Number_Monserrat, Plane_Text_Back_Number_PublicEnemy, Plane_Text_Back_Number_SportJersey, Plane_Text_Back_Number_CanterburyTucked, Plane_Text_Back_Number_CollegeBoldTucked, Plane_Text_Back_Number_Emilio19Tucked, Plane_Text_Back_Number_DeftoneStylesTucked, Plane_Text_Back_Number_LEAGUESPARTANTucked, Plane_Text_Back_Number_MonotonTucked, Plane_Text_Back_Number_MonserratTucked, Plane_Text_Back_Number_PublicEnemyTucked, Plane_Text_Back_Number_SportJerseyTucked );
    updateTextFrontNumber();
  });

document
  .getElementById("LEAGUESPARTANNumber")
  .addEventListener("click", function () {
    switch (TuckedStatus) {
      case 0:
        Jersey_group.add( Plane_Text_Front_Number_LEAGUESPARTAN, Plane_Text_Back_Number_LEAGUESPARTAN );
        break;
      case 1:
        Jersey_group.add( Plane_Text_Front_Number_LEAGUESPARTANTucked, Plane_Text_Back_Number_LEAGUESPARTANTucked );
        break;
    }

    if (RightLowerNumberStatus == 1) {
      Shorts_group.add(Plane_RightLowerShorts_NumberLEAGUESPARTANT);
      Plane_RightLowerShorts_NumberLEAGUESPARTANT.material =
        Text_Front_Number_mat;
      Plane_RightLowerShorts_NumberLEAGUESPARTANT.renderOrder = 2;
      Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberCOCOGOOSE, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy );
    } else if (RightLowerNumberStatus == 0) {
    }

    if (RightUpperNumberStatus == 1) {
      Shorts_group.add(Plane_RightUpperShorts_NumberLEAGUESPARTANT);
      Plane_RightUpperShorts_NumberLEAGUESPARTANT.material =
        Text_Front_Number_mat;
      Plane_RightUpperShorts_NumberLEAGUESPARTANT.renderOrder = 2;
      Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberCOCOGOOSE, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy );
    } else if (RightUpperNumberStatus == 0) {
    }

    if (LeftUpperNumberStatus == 1) {
      Shorts_group.add(Plane_LeftUpperShorts_NumberLEAGUESPARTANT);
      Plane_LeftUpperShorts_NumberLEAGUESPARTANT.material =
        Text_Front_Number_mat;
      Plane_LeftUpperShorts_NumberLEAGUESPARTANT.renderOrder = 2;
      Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberCOCOGOOSE, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy );
    } else if (LeftUpperNumberStatus == 0) {
    }

    if (LeftLowerNumberStatus == 1) {
      Shorts_group.add(Plane_LeftLowerShorts_NumberLEAGUESPARTANT);
      Plane_LeftLowerShorts_NumberLEAGUESPARTANT.material =
        Text_Front_Number_mat;
      Plane_LeftLowerShorts_NumberLEAGUESPARTANT.renderOrder = 2;
      Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberCOCOGOOSE, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy );
    } else if (LeftLowerNumberStatus == 0) {
    }

    Jersey_group.remove( Plane_Text_Front_Number_Canterbury, Plane_Text_Front_Number_CollegeBold, Plane_Text_Front_Number_DeftoneStyles, Plane_Text_Front_Number_Emilio19, Plane_Text_Front_Number_COCOGOOSE, Plane_Text_Front_Number_Monoton, Plane_Text_Front_Number_Monserrat, Plane_Text_Front_Number_PublicEnemy, Plane_Text_Front_Number_SportJersey, Plane_Text_Front_Number_CanterburyTucked, Plane_Text_Front_Number_Emilio19Tucked, Plane_Text_Front_Number_COCOGOOSETucked, Plane_Text_Front_Number_CollegeBoldTucked, Plane_Text_Front_Number_DeftoneStylesTucked, Plane_Text_Front_Number_MonotonTucked, Plane_Text_Front_Number_MonserratTucked, Plane_Text_Front_Number_PublicEnemyTucked, Plane_Text_Front_Number_SportJerseyTucked, Plane_Text_Back_Number_Canterbury, Plane_Text_Back_Number_CollegeBold, Plane_Text_Back_Number_DeftoneStyles, Plane_Text_Back_Number_Emilio19, Plane_Text_Back_Number_COCOGOOSE, Plane_Text_Back_Number_Monoton, Plane_Text_Back_Number_Monserrat, Plane_Text_Back_Number_PublicEnemy, Plane_Text_Back_Number_SportJersey, Plane_Text_Back_Number_CanterburyTucked, Plane_Text_Back_Number_Emilio19Tucked, Plane_Text_Back_Number_COCOGOOSETucked, Plane_Text_Back_Number_CollegeBoldTucked, Plane_Text_Back_Number_DeftoneStylesTucked, Plane_Text_Back_Number_MonotonTucked, Plane_Text_Back_Number_MonserratTucked, Plane_Text_Back_Number_PublicEnemyTucked, Plane_Text_Back_Number_SportJerseyTucked );
    updateTextFrontNumber();
  });

document.getElementById("MONOTONNumber").addEventListener("click", function () {
  switch (TuckedStatus) {
    case 0:
      Jersey_group.add( Plane_Text_Front_Number_Monoton, Plane_Text_Back_Number_Monoton );
      break;
    case 1:
      Jersey_group.add( Plane_Text_Front_Number_MonotonTucked, Plane_Text_Back_Number_MonotonTucked );
      break;
  }

  if (RightLowerNumberStatus == 1) {
    Shorts_group.add(Plane_RightLowerShorts_NumberLEAGUESPARTANT);
    Plane_RightLowerShorts_NumberLEAGUESPARTANT.material =
      Text_Front_Number_mat;
    Plane_RightLowerShorts_NumberLEAGUESPARTANT.renderOrder = 2;
    Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberCOCOGOOSE, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy );
  } else if (RightLowerNumberStatus == 0) {
  }

  if (RightUpperNumberStatus == 1) {
    Shorts_group.add(Plane_RightUpperShorts_NumberLEAGUESPARTANT);
    Plane_RightUpperShorts_NumberLEAGUESPARTANT.material =
      Text_Front_Number_mat;
    Plane_RightUpperShorts_NumberLEAGUESPARTANT.renderOrder = 2;
    Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberCOCOGOOSE, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy );
  } else if (RightUpperNumberStatus == 0) {
  }

  if (LeftUpperNumberStatus == 1) {
    Shorts_group.add(Plane_LeftUpperShorts_NumberLEAGUESPARTANT);
    Plane_LeftUpperShorts_NumberLEAGUESPARTANT.material = Text_Front_Number_mat;
    Plane_LeftUpperShorts_NumberLEAGUESPARTANT.renderOrder = 2;
    Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberCOCOGOOSE, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy );
  } else if (LeftUpperNumberStatus == 0) {
  }

  if (LeftLowerNumberStatus == 1) {
    Shorts_group.add(Plane_LeftLowerShorts_NumberLEAGUESPARTANT);
    Plane_LeftLowerShorts_NumberLEAGUESPARTANT.material = Text_Front_Number_mat;
    Plane_LeftLowerShorts_NumberLEAGUESPARTANT.renderOrder = 2;
    Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberCOCOGOOSE, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy );
  } else if (LeftLowerNumberStatus == 0) {
  }

  Jersey_group.remove( Plane_Text_Front_Number_Canterbury, Plane_Text_Front_Number_CollegeBold, Plane_Text_Front_Number_DeftoneStyles, Plane_Text_Front_Number_LEAGUESPARTAN, Plane_Text_Front_Number_Emilio19, Plane_Text_Front_Number_COCOGOOSE, Plane_Text_Front_Number_Monserrat, Plane_Text_Front_Number_PublicEnemy, Plane_Text_Front_Number_SportJersey, Plane_Text_Front_Number_CanterburyTucked, Plane_Text_Front_Number_Emilio19Tucked, Plane_Text_Front_Number_COCOGOOSETucked, Plane_Text_Front_Number_CollegeBoldTucked, Plane_Text_Front_Number_DeftoneStylesTucked, Plane_Text_Front_Number_LEAGUESPARTANTucked, Plane_Text_Front_Number_MonserratTucked, Plane_Text_Front_Number_PublicEnemyTucked, Plane_Text_Front_Number_SportJerseyTucked, Plane_Text_Back_Number_Canterbury, Plane_Text_Back_Number_CollegeBold, Plane_Text_Back_Number_DeftoneStyles, Plane_Text_Back_Number_LEAGUESPARTAN, Plane_Text_Back_Number_Emilio19, Plane_Text_Back_Number_COCOGOOSE, Plane_Text_Back_Number_Monserrat, Plane_Text_Back_Number_PublicEnemy, Plane_Text_Back_Number_SportJersey, Plane_Text_Back_Number_CanterburyTucked, Plane_Text_Back_Number_Emilio19Tucked, Plane_Text_Back_Number_COCOGOOSETucked, Plane_Text_Back_Number_CollegeBoldTucked, Plane_Text_Back_Number_DeftoneStylesTucked, Plane_Text_Back_Number_LEAGUESPARTANTucked, Plane_Text_Back_Number_MonserratTucked, Plane_Text_Back_Number_PublicEnemyTucked, Plane_Text_Back_Number_SportJerseyTucked );
  updateTextFrontNumber();
});

document
  .getElementById("MONTSERRATNumber")
  .addEventListener("click", function () {
    switch (TuckedStatus) {
      case 0:
        Jersey_group.add( Plane_Text_Front_Number_Monserrat, Plane_Text_Back_Number_Monserrat );
        break;
      case 1:
        Jersey_group.add( Plane_Text_Front_Number_MonserratTucked, Plane_Text_Back_Number_MonserratTucked );
        break;
    }

    if (RightLowerNumberStatus == 1) {
      Shorts_group.add(Plane_RightLowerShorts_NumberMonserrat);
      Plane_RightLowerShorts_NumberMonserrat.material = Text_Front_Number_mat;
      Plane_RightLowerShorts_NumberMonserrat.renderOrder = 2;
      Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberCOCOGOOSE, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy );
    } else if (RightLowerNumberStatus == 0) {
    }

    if (RightUpperNumberStatus == 1) {
      Shorts_group.add(Plane_RightUpperShorts_NumberMonserrat);
      Plane_RightUpperShorts_NumberMonserrat.material = Text_Front_Number_mat;
      Plane_RightUpperShorts_NumberMonserrat.renderOrder = 2;
      Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberCOCOGOOSE, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy );
    } else if (RightUpperNumberStatus == 0) {
    }

    if (LeftUpperNumberStatus == 1) {
      Shorts_group.add(Plane_LeftUpperShorts_NumberMonserrat);
      Plane_LeftUpperShorts_NumberMonserrat.material = Text_Front_Number_mat;
      Plane_LeftUpperShorts_NumberMonserrat.renderOrder = 2;
      Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberCOCOGOOSE, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy );
    } else if (LeftUpperNumberStatus == 0) {
    }

    if (LeftLowerNumberStatus == 1) {
      Shorts_group.add(Plane_LeftLowerShorts_NumberMonserrat);
      Plane_LeftLowerShorts_NumberMonserrat.material = Text_Front_Number_mat;
      Plane_LeftLowerShorts_NumberMonserrat.renderOrder = 2;
      Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberCOCOGOOSE, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy );
    } else if (LeftLowerNumberStatus == 0) {
    }

    Jersey_group.remove( Plane_Text_Front_Number_Canterbury, Plane_Text_Front_Number_CollegeBold, Plane_Text_Front_Number_DeftoneStyles, Plane_Text_Front_Number_LEAGUESPARTAN, Plane_Text_Front_Number_Emilio19, Plane_Text_Front_Number_COCOGOOSE, Plane_Text_Front_Number_Monoton, Plane_Text_Front_Number_PublicEnemy, Plane_Text_Front_Number_SportJersey, Plane_Text_Front_Number_CanterburyTucked, Plane_Text_Front_Number_Emilio19Tucked, Plane_Text_Front_Number_COCOGOOSETucked, Plane_Text_Front_Number_CollegeBoldTucked, Plane_Text_Front_Number_DeftoneStylesTucked, Plane_Text_Front_Number_LEAGUESPARTANTucked, Plane_Text_Front_Number_MonotonTucked, Plane_Text_Front_Number_PublicEnemyTucked, Plane_Text_Front_Number_SportJerseyTucked, Plane_Text_Back_Number_Canterbury, Plane_Text_Back_Number_CollegeBold, Plane_Text_Back_Number_DeftoneStyles, Plane_Text_Back_Number_LEAGUESPARTAN, Plane_Text_Back_Number_Emilio19, Plane_Text_Back_Number_COCOGOOSE, Plane_Text_Back_Number_Monoton, Plane_Text_Back_Number_PublicEnemy, Plane_Text_Back_Number_SportJersey, Plane_Text_Back_Number_CanterburyTucked, Plane_Text_Back_Number_Emilio19Tucked, Plane_Text_Back_Number_COCOGOOSETucked, Plane_Text_Back_Number_CollegeBoldTucked, Plane_Text_Back_Number_DeftoneStylesTucked, Plane_Text_Back_Number_LEAGUESPARTANTucked, Plane_Text_Back_Number_MonotonTucked, Plane_Text_Back_Number_PublicEnemyTucked, Plane_Text_Back_Number_SportJerseyTucked );
    updateTextFrontNumber();
  });

document
  .getElementById("PUBLICENEMYNumber")
  .addEventListener("click", function () {
    switch (TuckedStatus) {
      case 0:
        Jersey_group.add( Plane_Text_Front_Number_PublicEnemy, Plane_Text_Back_Number_PublicEnemy );
        break;
      case 1:
        Jersey_group.add( Plane_Text_Front_Number_PublicEnemyTucked, Plane_Text_Back_Number_PublicEnemyTucked );
        break;
    }

    if (RightLowerNumberStatus == 1) {
      Shorts_group.add(Plane_RightLowerShorts_NumberPublicEnemy);
      Plane_RightLowerShorts_NumberPublicEnemy.material = Text_Front_Number_mat;
      Plane_RightLowerShorts_NumberPublicEnemy.renderOrder = 2;
      Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberCOCOGOOSE, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberMonserrat );
    } else if (RightLowerNumberStatus == 0) {
    }

    if (RightUpperNumberStatus == 1) {
      Shorts_group.add(Plane_RightUpperShorts_NumberPublicEnemy);
      Plane_RightUpperShorts_NumberPublicEnemy.material = Text_Front_Number_mat;
      Plane_RightUpperShorts_NumberPublicEnemy.renderOrder = 2;
      Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberCOCOGOOSE, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberMonserrat );
    } else if (RightUpperNumberStatus == 0) {
    }

    if (LeftUpperNumberStatus == 1) {
      Shorts_group.add(Plane_LeftUpperShorts_NumberPublicEnemy);
      Plane_LeftUpperShorts_NumberPublicEnemy.material = Text_Front_Number_mat;
      Plane_LeftUpperShorts_NumberPublicEnemy.renderOrder = 2;
      Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberCOCOGOOSE, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberMonserrat );
    } else if (LeftUpperNumberStatus == 0) {
    }

    if (LeftLowerNumberStatus == 1) {
      Shorts_group.add(Plane_LeftLowerShorts_NumberPublicEnemy);
      Plane_LeftLowerShorts_NumberPublicEnemy.material = Text_Front_Number_mat;
      Plane_LeftLowerShorts_NumberPublicEnemy.renderOrder = 2;
      Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberCOCOGOOSE, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberMonserrat );
    } else if (LeftLowerNumberStatus == 0) {
    }

    Jersey_group.remove( Plane_Text_Front_Number_Canterbury, Plane_Text_Front_Number_CollegeBold, Plane_Text_Front_Number_DeftoneStyles, Plane_Text_Front_Number_LEAGUESPARTAN, Plane_Text_Front_Number_Emilio19, Plane_Text_Front_Number_COCOGOOSE, Plane_Text_Front_Number_Monoton, Plane_Text_Front_Number_Monserrat, Plane_Text_Front_Number_SportJersey, Plane_Text_Front_Number_CanterburyTucked, Plane_Text_Front_Number_Emilio19Tucked, Plane_Text_Front_Number_COCOGOOSETucked, Plane_Text_Front_Number_CollegeBoldTucked, Plane_Text_Front_Number_DeftoneStylesTucked, Plane_Text_Front_Number_LEAGUESPARTANTucked, Plane_Text_Front_Number_MonotonTucked, Plane_Text_Front_Number_MonserratTucked, Plane_Text_Front_Number_SportJerseyTucked, Plane_Text_Back_Number_Canterbury, Plane_Text_Back_Number_CollegeBold, Plane_Text_Back_Number_DeftoneStyles, Plane_Text_Back_Number_LEAGUESPARTAN, Plane_Text_Back_Number_Emilio19, Plane_Text_Back_Number_COCOGOOSE, Plane_Text_Back_Number_Monoton, Plane_Text_Back_Number_Monserrat, Plane_Text_Back_Number_SportJersey, Plane_Text_Back_Number_CanterburyTucked, Plane_Text_Back_Number_Emilio19Tucked, Plane_Text_Back_Number_COCOGOOSETucked, Plane_Text_Back_Number_CollegeBoldTucked, Plane_Text_Back_Number_DeftoneStylesTucked, Plane_Text_Back_Number_LEAGUESPARTANTucked, Plane_Text_Back_Number_MonotonTucked, Plane_Text_Back_Number_MonserratTucked, Plane_Text_Back_Number_SportJerseyTucked );
    updateTextFrontNumber();
  });

document
  .getElementById("SPORTJERSEYNumber")
  .addEventListener("click", function () {
    switch (TuckedStatus) {
      case 0:
        Jersey_group.add( Plane_Text_Front_Number_SportJersey, Plane_Text_Back_Number_SportJersey );
        break;
      case 1:
        Jersey_group.add( Plane_Text_Back_Number_SportJerseyTucked, Plane_Text_Front_Number_SportJerseyTucked );
        break;
    }

    if (RightLowerNumberStatus == 1) {
      Shorts_group.add(Plane_RightLowerShorts_NumberSportJersey);
      Plane_RightLowerShorts_NumberSportJersey.material = Text_Front_Number_mat;
      Plane_RightLowerShorts_NumberSportJersey.renderOrder = 2;
      Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberCOCOGOOSE, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberPublicEnemy, Plane_RightLowerShorts_NumberMonserrat );
    } else if (RightLowerNumberStatus == 0) {
    }

    if (RightUpperNumberStatus == 1) {
      Shorts_group.add(Plane_RightUpperShorts_NumberSportJersey);
      Plane_RightUpperShorts_NumberSportJersey.material = Text_Front_Number_mat;
      Plane_RightUpperShorts_NumberSportJersey.renderOrder = 2;
      Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberCOCOGOOSE, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberMonserrat );
    } else if (RightUpperNumberStatus == 0) {
    }

    if (LeftUpperNumberStatus == 1) {
      Shorts_group.add(Plane_LeftUpperShorts_NumberSportJersey);
      Plane_LeftUpperShorts_NumberSportJersey.material = Text_Front_Number_mat;
      Plane_LeftUpperShorts_NumberSportJersey.renderOrder = 2;
      Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberCOCOGOOSE, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberPublicEnemy, Plane_LeftUpperShorts_NumberMonserrat );
    } else if (LeftUpperNumberStatus == 0) {
    }

    if (LeftLowerNumberStatus == 1) {
      Shorts_group.add(Plane_LeftLowerShorts_NumberSportJersey);
      Plane_LeftLowerShorts_NumberSportJersey.material = Text_Front_Number_mat;
      Plane_LeftLowerShorts_NumberSportJersey.renderOrder = 2;
      Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberCOCOGOOSE, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberPublicEnemy, Plane_LeftLowerShorts_NumberMonserrat );
    } else if (LeftLowerNumberStatus == 0) {
    }

    Jersey_group.remove( Plane_Text_Front_Number_Canterbury, Plane_Text_Front_Number_CollegeBold, Plane_Text_Front_Number_DeftoneStyles, Plane_Text_Front_Number_LEAGUESPARTAN, Plane_Text_Front_Number_Emilio19, Plane_Text_Front_Number_COCOGOOSE, Plane_Text_Front_Number_Monoton, Plane_Text_Front_Number_Monserrat, Plane_Text_Front_Number_PublicEnemy, Plane_Text_Front_Number_CanterburyTucked, Plane_Text_Front_Number_Emilio19Tucked, Plane_Text_Front_Number_COCOGOOSETucked, Plane_Text_Front_Number_CollegeBoldTucked, Plane_Text_Front_Number_DeftoneStylesTucked, Plane_Text_Front_Number_LEAGUESPARTANTucked, Plane_Text_Front_Number_MonotonTucked, Plane_Text_Front_Number_MonserratTucked, Plane_Text_Front_Number_PublicEnemyTucked, Plane_Text_Back_Number_Canterbury, Plane_Text_Back_Number_CollegeBold, Plane_Text_Back_Number_DeftoneStyles, Plane_Text_Back_Number_LEAGUESPARTAN, Plane_Text_Back_Number_Emilio19, Plane_Text_Back_Number_COCOGOOSE, Plane_Text_Back_Number_Monoton, Plane_Text_Back_Number_Monserrat, Plane_Text_Back_Number_PublicEnemy, Plane_Text_Back_Number_CanterburyTucked, Plane_Text_Back_Number_Emilio19Tucked, Plane_Text_Back_Number_COCOGOOSETucked, Plane_Text_Back_Number_CollegeBoldTucked, Plane_Text_Back_Number_DeftoneStylesTucked, Plane_Text_Back_Number_LEAGUESPARTANTucked, Plane_Text_Back_Number_MonotonTucked, Plane_Text_Back_Number_MonserratTucked, Plane_Text_Back_Number_PublicEnemyTucked );
    updateTextFrontNumber();
  });

// COLORS

document .getElementById("BlackJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("WhiteJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); 
});

document .getElementById("GraphiteJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("GreyJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("MaroonJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("CardinalJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("BrownJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("BurntOrangeJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("ScarletJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("DarkOrangeJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("FluorescentOrangeJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("GoldJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("TaxiJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("VegasGoldJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("FluorescentYellowJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("PinkJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("FluorescentPinkJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("PurpleJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("SkyBlueJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("CarpiJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("SeafoamGreenJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("TealJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("FluorescentGreenJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("KellyGreenJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("ForestGreenJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("RoyalJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("NavyJerseyNumber") .addEventListener("click", function () { updateTextFrontNumber(); });

//outline color
document .getElementById("BlackJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("WhiteJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("GraphiteJerseyText") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("GreyJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("MaroonJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("CardinalJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("BrownJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("ScarletJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("BurntOrangeJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("DarkOrangeJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("FluorescentOrangeJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("GoldJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("TaxiJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("VegasGoldJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("FluorescentYellowJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("PinkJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("FluorescentPinkJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("PurpleJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("SkyBlueJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("CarpiJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("SeafoamGreenJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("TealJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("FluorescentGreenJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("KellyGreenJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("ForestGreenJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("RoyalJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("NavyJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });

document .getElementById("NoneJerseyNumberOutline") .addEventListener("click", function () { updateTextFrontNumber(); });


//NUMBER SHORTS
let LeftUpperNumberStatus = 0;
document
  .getElementById("LeftUpperCheckboxNumber")
  .addEventListener("click", function () {
    if (LeftUpperNumberStatus == 0) {
      switch (document.getElementById("FontTeamNameJersey").innerHTML) {
        case "Canterbury":
          Shorts_group.add(Plane_LeftUpperShorts_NumberCountrebury);
          Plane_LeftUpperShorts_NumberCountrebury.material =
            Text_Front_Number_mat;
          Plane_LeftUpperShorts_NumberCountrebury.renderOrder = 2;
          Shorts_group.remove( Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberCOCOGOOSE, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy );
          break;
        case "College_Bold":
          Shorts_group.add(Plane_LeftUpperShorts_NumberCollegeBold);
          Plane_LeftUpperShorts_NumberCollegeBold.material =
            Text_Front_Number_mat;
          Plane_LeftUpperShorts_NumberCollegeBold.renderOrder = 2;
          Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberCOCOGOOSE, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy );
          break;
        case "Deftone_Stylus":
          Shorts_group.add(Plane_LeftUpperShorts_NumberDeftoneStyles);
          Plane_LeftUpperShorts_NumberDeftoneStyles.material =
            Text_Front_Number_mat;
          Plane_LeftUpperShorts_NumberDeftoneStyles.renderOrder = 2;
          Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberCOCOGOOSE, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy );
          break;
        case "Emilio_19_Regular":
          Shorts_group.add(Plane_LeftUpperShorts_NumberEmilio19);
          Plane_LeftUpperShorts_NumberEmilio19.material = Text_Front_Number_mat;
          Plane_LeftUpperShorts_NumberEmilio19.renderOrder = 2;
          Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy, Plane_LeftUpperShorts_NumberCOCOGOOSE );
          break;
        case "CocogooseProItalic":
          Shorts_group.add(Plane_LeftUpperShorts_NumberCOCOGOOSE);
          Plane_LeftUpperShorts_NumberCOCOGOOSE.material =
            Text_Front_Number_mat;
          Plane_LeftUpperShorts_NumberCOCOGOOSE.renderOrder = 2;
          Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy, Plane_LeftUpperShorts_NumberEmilio19 );
          break;
        case "LeagueSpartan_Bold":
          Shorts_group.add(Plane_LeftUpperShorts_NumberLEAGUESPARTANT);
          Plane_LeftUpperShorts_NumberLEAGUESPARTANT.material =
            Text_Front_Number_mat;
          Plane_LeftUpperShorts_NumberLEAGUESPARTANT.renderOrder = 2;
          Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberCOCOGOOSE, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy );
          break;
        case "Monoton_Regular":
          Shorts_group.add(Plane_LeftUpperShorts_NumberMonoton);
          Plane_LeftUpperShorts_NumberMonoton.material = Text_Front_Number_mat;
          Plane_LeftUpperShorts_NumberMonoton.renderOrder = 2;
          Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy, Plane_LeftUpperShorts_NumberCOCOGOOSE );
          break;
        case "Montserrat_Regular":
          Shorts_group.add(Plane_LeftUpperShorts_NumberMonserrat);
          Plane_LeftUpperShorts_NumberMonserrat.material =
            Text_Front_Number_mat;
          Plane_LeftUpperShorts_NumberMonserrat.renderOrder = 2;
          Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberPublicEnemy, Plane_LeftUpperShorts_NumberCOCOGOOSE );
          break;
        case "Public_Enemy_Regular":
          Shorts_group.add(Plane_LeftUpperShorts_NumberPublicEnemy);
          Plane_LeftUpperShorts_NumberPublicEnemy.material =
            Text_Front_Number_mat;
          Plane_LeftUpperShorts_NumberPublicEnemy.renderOrder = 2;
          Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberSportJersey, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberCOCOGOOSE );
          break;
        case "Sportsjersey":
          Shorts_group.add(Plane_LeftUpperShorts_NumberSportJersey);
          Plane_LeftUpperShorts_NumberSportJersey.material =
            Text_Front_Number_mat;
          Plane_LeftUpperShorts_NumberSportJersey.renderOrder = 2;
          Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberPublicEnemy, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberCOCOGOOSE );
          break;
      }
      LeftUpperNumberStatus = 1;
    } else if (LeftUpperNumberStatus == 1) {
      Shorts_group.remove( Plane_LeftUpperShorts_NumberCountrebury, Plane_LeftUpperShorts_NumberCollegeBold, Plane_LeftUpperShorts_NumberDeftoneStyles, Plane_LeftUpperShorts_NumberEmilio19, Plane_LeftUpperShorts_NumberCOCOGOOSE, Plane_LeftUpperShorts_NumberLEAGUESPARTANT, Plane_LeftUpperShorts_NumberMonoton, Plane_LeftUpperShorts_NumberPublicEnemy, Plane_LeftUpperShorts_NumberMonserrat, Plane_LeftUpperShorts_NumberSportJersey );
      LeftUpperNumberStatus = 0;
    }
  });

let LeftLowerNumberStatus = 0;
document .getElementById("LeftLowerCheckboxNumber") .addEventListener("click", function () {
    if (LeftLowerNumberStatus == 0) {
      switch (document.getElementById("FontNumberJersey").innerHTML) {
        case "Canterbury":
          Shorts_group.add(Plane_LeftLowerShorts_NumberCountrebury);
          Plane_LeftLowerShorts_NumberCountrebury.material =
            Text_Front_Number_mat;
          Plane_LeftLowerShorts_NumberCountrebury.renderOrder = 2;
          Shorts_group.remove( Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberCOCOGOOSE, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy );
          break;
        case "College_Bold":
          Shorts_group.add(Plane_LeftLowerShorts_NumberCollegeBold);
          Plane_LeftLowerShorts_NumberCollegeBold.material =
            Text_Front_Number_mat;
          Plane_LeftLowerShorts_NumberCollegeBold.renderOrder = 2;
          Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy, Plane_LeftLowerShorts_NumberCOCOGOOSE );
          break;
        case "Deftone_Stylus":
          Shorts_group.add(Plane_LeftLowerShorts_NumberDeftoneStyles);
          Plane_LeftLowerShorts_NumberDeftoneStyles.material =
            Text_Front_Number_mat;
          Plane_LeftLowerShorts_NumberDeftoneStyles.renderOrder = 2;
          Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy, Plane_LeftLowerShorts_NumberCOCOGOOSE );
          break;
        case "Emilio_19_Regular":
          Shorts_group.add(Plane_LeftLowerShorts_NumberEmilio19);
          Plane_LeftLowerShorts_NumberEmilio19.material = Text_Front_Number_mat;
          Plane_LeftLowerShorts_NumberEmilio19.renderOrder = 2;
          Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy, Plane_LeftLowerShorts_NumberCOCOGOOSE );
          break;
        case "CocogooseProItalic":
          Shorts_group.add(Plane_LeftLowerShorts_NumberCOCOGOOSE);
          Plane_LeftLowerShorts_NumberCOCOGOOSE.material =
            Text_Front_Number_mat;
          Plane_LeftLowerShorts_NumberCOCOGOOSE.renderOrder = 2;
          Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy, Plane_LeftLowerShorts_NumberEmilio19 );
          break;
        case "LeagueSpartan_Bold":
          Shorts_group.add(Plane_LeftLowerShorts_NumberLEAGUESPARTANT);
          Plane_LeftLowerShorts_NumberLEAGUESPARTANT.material =
            Text_Front_Number_mat;
          Plane_LeftLowerShorts_NumberLEAGUESPARTANT.renderOrder = 2;
          Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy, Plane_LeftLowerShorts_NumberCOCOGOOSE );
          break;
        case "Monoton_Regular":
          Shorts_group.add(Plane_LeftLowerShorts_NumberMonoton);
          Plane_LeftLowerShorts_NumberMonoton.material = Text_Front_Number_mat;
          Plane_LeftLowerShorts_NumberMonoton.renderOrder = 2;
          Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy, Plane_LeftLowerShorts_NumberCOCOGOOSE );
          break;
        case "Montserrat_Regular":
          Shorts_group.add(Plane_LeftLowerShorts_NumberMonserrat);
          Plane_LeftLowerShorts_NumberMonserrat.material =
            Text_Front_Number_mat;
          Plane_LeftLowerShorts_NumberMonserrat.renderOrder = 2;
          Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberPublicEnemy, Plane_LeftLowerShorts_NumberCOCOGOOSE );
          break;
        case "Public_Enemy_Regular":
          Shorts_group.add(Plane_LeftLowerShorts_NumberPublicEnemy);
          Plane_LeftLowerShorts_NumberPublicEnemy.material =
            Text_Front_Number_mat;
          Plane_LeftLowerShorts_NumberPublicEnemy.renderOrder = 2;
          Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberSportJersey, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberCOCOGOOSE );
          break;
        case "Sportsjersey":
          Shorts_group.add(Plane_LeftLowerShorts_NumberSportJersey);
          Plane_LeftLowerShorts_NumberSportJersey.material =
            Text_Front_Number_mat;
          Plane_LeftLowerShorts_NumberSportJersey.renderOrder = 2;
          Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberPublicEnemy, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberCOCOGOOSE );
          break;
      }
      LeftLowerNumberStatus = 1;
    } else if (LeftLowerNumberStatus == 1) {
      Shorts_group.remove( Plane_LeftLowerShorts_NumberCountrebury, Plane_LeftLowerShorts_NumberCollegeBold, Plane_LeftLowerShorts_NumberDeftoneStyles, Plane_LeftLowerShorts_NumberEmilio19, Plane_LeftLowerShorts_NumberCOCOGOOSE, Plane_LeftLowerShorts_NumberLEAGUESPARTANT, Plane_LeftLowerShorts_NumberMonoton, Plane_LeftLowerShorts_NumberPublicEnemy, Plane_LeftLowerShorts_NumberMonserrat, Plane_LeftLowerShorts_NumberSportJersey );
      LeftLowerNumberStatus = 0;
    }
  });

let RightUpperNumberStatus = 0;
document .getElementById("RightUpperCheckboxNumber") .addEventListener("click", function () {
    if (RightUpperNumberStatus == 0) {
      switch (document.getElementById("FontNumberJersey").innerHTML) {
        case "Canterbury":
          Shorts_group.add(Plane_RightUpperShorts_NumberCountrebury);
          Plane_RightUpperShorts_NumberCountrebury.material =
            Text_Front_Number_mat;
          Plane_RightUpperShorts_NumberCountrebury.renderOrder = 2;
          Shorts_group.remove( Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberCOCOGOOSE );
          break;
        case "College_Bold":
          Shorts_group.add(Plane_RightUpperShorts_NumberCollegeBold);
          Plane_RightUpperShorts_NumberCollegeBold.material =
            Text_Front_Number_mat;
          Plane_RightUpperShorts_NumberCollegeBold.renderOrder = 2;
          Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberCOCOGOOSE );
          break;
        case "Deftone_Stylus":
          Shorts_group.add(Plane_RightUpperShorts_NumberDeftoneStyles);
          Plane_RightUpperShorts_NumberDeftoneStyles.material =
            Text_Front_Number_mat;
          Plane_RightUpperShorts_NumberDeftoneStyles.renderOrder = 2;
          Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberCOCOGOOSE );
          break;
        case "Emilio_19_Regular":
          Shorts_group.add(Plane_RightUpperShorts_NumberEmilio19);
          Plane_RightUpperShorts_NumberEmilio19.material =
            Text_Front_Number_mat;
          Plane_RightUpperShorts_NumberEmilio19.renderOrder = 2;
          Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberCOCOGOOSE );
          break;
        case "CocogooseProItalic":
          Shorts_group.add(Plane_RightUpperShorts_NumberCOCOGOOSE);
          Plane_RightUpperShorts_NumberCOCOGOOSE.material =
            Text_Front_Number_mat;
          Plane_RightUpperShorts_NumberCOCOGOOSE.renderOrder = 2;
          Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberEmilio19 );
          break;
        case "LeagueSpartan_Bold":
          Shorts_group.add(Plane_RightUpperShorts_NumberLEAGUESPARTANT);
          Plane_RightUpperShorts_NumberLEAGUESPARTANT.material =
            Text_Front_Number_mat;
          Plane_RightUpperShorts_NumberLEAGUESPARTANT.renderOrder = 2;
          Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberCOCOGOOSE );
          break;
        case "Monoton_Regular":
          Shorts_group.add(Plane_RightUpperShorts_NumberMonoton);
          Plane_RightUpperShorts_NumberMonoton.material = Text_Front_Number_mat;
          Plane_RightUpperShorts_NumberMonoton.renderOrder = 2;
          Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberCOCOGOOSE );
          break;
        case "Montserrat_Regular":
          Shorts_group.add(Plane_RightUpperShorts_NumberMonserrat);
          Plane_RightUpperShorts_NumberMonserrat.material =
            Text_Front_Number_mat;
          Plane_RightUpperShorts_NumberMonserrat.renderOrder = 2;
          Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberCOCOGOOSE );
          break;
        case "Public_Enemy_Regular":
          Shorts_group.add(Plane_RightUpperShorts_NumberPublicEnemy);
          Plane_RightUpperShorts_NumberPublicEnemy.material =
            Text_Front_Number_mat;
          Plane_RightUpperShorts_NumberPublicEnemy.renderOrder = 2;
          Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberCOCOGOOSE );
          break;
        case "Sportsjersey":
          Shorts_group.add(Plane_RightUpperShorts_NumberSportJersey);
          Plane_RightUpperShorts_NumberSportJersey.material =
            Text_Front_Number_mat;
          Plane_RightUpperShorts_NumberSportJersey.renderOrder = 2;
          Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberCOCOGOOSE );
          break;
      }
      RightUpperNumberStatus = 1;
    } else if (RightUpperNumberStatus == 1) {
      Shorts_group.remove( Plane_RightUpperShorts_NumberCountrebury, Plane_RightUpperShorts_NumberCollegeBold, Plane_RightUpperShorts_NumberDeftoneStyles, Plane_RightUpperShorts_NumberEmilio19, Plane_RightUpperShorts_NumberLEAGUESPARTANT, Plane_RightUpperShorts_NumberMonoton, Plane_RightUpperShorts_NumberPublicEnemy, Plane_RightUpperShorts_NumberMonserrat, Plane_RightUpperShorts_NumberSportJersey, Plane_RightUpperShorts_NumberCOCOGOOSE );
      RightUpperNumberStatus = 0;
    }
  });

let RightLowerNumberStatus = 0;
document .getElementById("RightLowerCheckboxNumber") .addEventListener("click", function () {
    if (RightLowerNumberStatus == 0) {
      switch (document.getElementById("FontNumberJersey").innerHTML) {
        case "Canterbury":
          Shorts_group.add(Plane_RightLowerShorts_NumberCountrebury);
          Plane_RightLowerShorts_NumberCountrebury.material =
            Text_Front_Number_mat;
          Plane_RightLowerShorts_NumberCountrebury.renderOrder = 2;
          Shorts_group.remove( Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy, Plane_RightLowerShorts_NumberCOCOGOOSE );
           break;
        case "College_Bold":
          Shorts_group.add(Plane_RightLowerShorts_NumberCollegeBold);
          Plane_RightLowerShorts_NumberCollegeBold.material =
            Text_Front_Number_mat;
          Plane_RightLowerShorts_NumberCollegeBold.renderOrder = 2;
          Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy, Plane_RightLowerShorts_NumberCOCOGOOSE );
           break;
        case "Deftone_Stylus":
          Shorts_group.add(Plane_RightLowerShorts_NumberDeftoneStyles);
          Plane_RightLowerShorts_NumberDeftoneStyles.material =
            Text_Front_Number_mat;
          Plane_RightLowerShorts_NumberDeftoneStyles.renderOrder = 2;
          Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy, Plane_RightLowerShorts_NumberCOCOGOOSE );
          break;
        case "Emilio_19_Regular":
          Shorts_group.add(Plane_RightLowerShorts_NumberEmilio19);
          Plane_RightLowerShorts_NumberEmilio19.material =
            Text_Front_Number_mat;
          Plane_RightLowerShorts_NumberEmilio19.renderOrder = 2;
          Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy, Plane_RightLowerShorts_NumberCOCOGOOSE );
          break;
        case "CocogooseProItalic":
          Shorts_group.add(Plane_RightLowerShorts_NumberCOCOGOOSE);
          Plane_RightLowerShorts_NumberCOCOGOOSE.material =
            Text_Front_Number_mat;
          Plane_RightLowerShorts_NumberCOCOGOOSE.renderOrder = 2;
          Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy, Plane_RightLowerShorts_NumberEmilio19 );
          break;
        case "LeagueSpartan_Bold":
          Shorts_group.add(Plane_RightLowerShorts_NumberLEAGUESPARTANT);
          Plane_RightLowerShorts_NumberLEAGUESPARTANT.material =
            Text_Front_Number_mat;
          Plane_RightLowerShorts_NumberLEAGUESPARTANT.renderOrder = 2;
          Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy, Plane_RightLowerShorts_NumberCOCOGOOSE );
          break;
        case "Monoton_Regular":
          Shorts_group.add(Plane_RightLowerShorts_NumberMonoton);
          Plane_RightLowerShorts_NumberMonoton.material = Text_Front_Number_mat;
          Plane_RightLowerShorts_NumberMonoton.renderOrder = 2;
          Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy, Plane_RightLowerShorts_NumberCOCOGOOSE );
          break;
        case "Montserrat_Regular":
          Shorts_group.add(Plane_RightLowerShorts_NumberMonserrat);
          Plane_RightLowerShorts_NumberMonserrat.material =
            Text_Front_Number_mat;
          Plane_RightLowerShorts_NumberMonserrat.renderOrder = 2;
          Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberPublicEnemy, Plane_RightLowerShorts_NumberCOCOGOOSE );
          break;
        case "Public_Enemy_Regular":
          Shorts_group.add(Plane_RightLowerShorts_NumberPublicEnemy);
          Plane_RightLowerShorts_NumberPublicEnemy.material =
            Text_Front_Number_mat;
          Plane_RightLowerShorts_NumberPublicEnemy.renderOrder = 2;
          Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberCOCOGOOSE );
          break;
        case "Sportsjersey":
          Shorts_group.add(Plane_RightLowerShorts_NumberSportJersey);
          Plane_RightLowerShorts_NumberSportJersey.material =
            Text_Front_Number_mat;
          Plane_RightLowerShorts_NumberSportJersey.renderOrder = 2;
          Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberPublicEnemy, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberCOCOGOOSE );
          break;
      }
      RightLowerNumberStatus = 1;
    } else if (RightLowerNumberStatus == 1) {
      Shorts_group.remove( Plane_RightLowerShorts_NumberCountrebury, Plane_RightLowerShorts_NumberCollegeBold, Plane_RightLowerShorts_NumberDeftoneStyles, Plane_RightLowerShorts_NumberEmilio19, Plane_RightLowerShorts_NumberLEAGUESPARTANT, Plane_RightLowerShorts_NumberMonoton, Plane_RightLowerShorts_NumberPublicEnemy, Plane_RightLowerShorts_NumberMonserrat, Plane_RightLowerShorts_NumberSportJersey, Plane_RightLowerShorts_NumberCOCOGOOSE );
      RightLowerNumberStatus = 0;
    }
  });




//TEXT TEAM NAME
//LAYOUT BUTTONS
let TypeLayOutFrontStatus = 1;

document.getElementById("TypeLayOut1").addEventListener("click", function () {
  updateTextFrontTeamName1();
  TypeLayOutFrontStatus = 1;
  switch (document.getElementById("FontTeamNameJersey").innerHTML) {
    case "Canterbury":
      Jersey_group.remove( Plane_Text_Front_UnderTucked, Plane_Text_Front_Under, Plane_Text_Front_UpperCurved1, Plane_Text_Front_UpperCurved1Tucked, Plane_Text_Front_UpperCurved2, Plane_Text_Front_UpperCurved2Tucked, Plane_Text_Front_UnderCurved2, Plane_Text_Front_UnderCurved2Tucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_Upper);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_UpperTucked);
          break;
      }
      break;
    case "College_Bold":
      Jersey_group.remove( Plane_Text_Front_Under_CollegeBoldTucked, Plane_Text_Front_Under_CollegeBold, Plane_Text_Front_UpperCurved1_CollegeBold, Plane_Text_Front_UpperCurved1_CollegeBoldTucked, Plane_Text_Front_UpperCurved2_CollegeBold, Plane_Text_Front_UpperCurved2_CollegeBoldTucked, Plane_Text_Front_UnderCurved2_CollegeBold, Plane_Text_Front_UnderCurved2_CollegeBoldTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_Upper_CollegeBold);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_CollegeBoldTucked);
          break;
      }
      break;
    case "Deftone_Stylus":
      Jersey_group.remove( Plane_Text_Front_Under_DeftoneStylesTucked, Plane_Text_Front_Under_DeftoneStyles, Plane_Text_Front_UpperCurved1_DeftoneStylesTucked, Plane_Text_Front_UpperCurved1_DeftoneStyles, Plane_Text_Front_UpperCurved2_DeftoneStyles, Plane_Text_Front_UpperCurved2_DeftoneStylesTucked, Plane_Text_Front_UnderCurved2_DeftoneStyles, Plane_Text_Front_UnderCurved2_DeftoneStylesTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_Upper_DeftoneStyles);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_DeftoneStylesTucked);
          break;
      }
      break;
    case "Emilio_19_Regular":
      Jersey_group.remove( Plane_Text_Front_Under_Emilio19Tucked, Plane_Text_Front_Under_Emilio19, Plane_Text_Front_UpperCurved1_Emilio19, Plane_Text_Front_UpperCurved1_Emilio19Tucked, Plane_Text_Front_UpperCurved2_Emilio19, Plane_Text_Front_UpperCurved2_Emilio19Tucked, Plane_Text_Front_UnderCurved2_Emilio19, Plane_Text_Front_UnderCurved2_Emilio19Tucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_Upper_Emilio19);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_Emilio19Tucked);
          break;
      }
      break;
    case "CocogooseProItalic":
      Jersey_group.remove( Plane_Text_Front_Under_COCOGOOSETucked, Plane_Text_Front_Under_COCOGOOSE, Plane_Text_Front_UpperCurved1_COCOGOOSE, Plane_Text_Front_UpperCurved1_COCOGOOSETucked, Plane_Text_Front_UpperCurved2_COCOGOOSE, Plane_Text_Front_UpperCurved2_COCOGOOSETucked, Plane_Text_Front_UnderCurved2_COCOGOOSE, Plane_Text_Front_UnderCurved2_COCOGOOSETucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_Upper_COCOGOOSE);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_COCOGOOSETucked);
          break;
      }
      break;
    case "LeagueSpartan_Bold":
      Jersey_group.remove( Plane_Text_Front_Under_LEAGUESPARTANTTucked, Plane_Text_Front_Under_LEAGUESPARTANT, Plane_Text_Front_UpperCurved1_LEAGUESPARTANT, Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked, Plane_Text_Front_UpperCurved2_LEAGUESPARTANT, Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked, Plane_Text_Front_UnderCurved2_LEAGUESPARTANT, Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_Upper_LEAGUESPARTANT);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_LEAGUESPARTANTTucked);
          break;
      }
      break;
    case "Monoton_Regular":
      Jersey_group.remove( Plane_Text_Front_Under_MonotonTucked, Plane_Text_Front_Under_Monoton, Plane_Text_Front_UpperCurved1_Monoton, Plane_Text_Front_UpperCurved1_MonotonTucked, Plane_Text_Front_UpperCurved2_Monoton, Plane_Text_Front_UpperCurved2_MonotonTucked, Plane_Text_Front_UnderCurved2_Monoton, Plane_Text_Front_UnderCurved2_MonotonTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_Upper_Monoton);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_MonotonTucked);
          break;
      }
      break;
    case "Montserrat_Regular":
      Jersey_group.remove( Plane_Text_Front_Under_MonserratTucked, Plane_Text_Front_Under_Monserrat, Plane_Text_Front_UpperCurved1_Monserrat, Plane_Text_Front_UpperCurved1_MonserratTucked, Plane_Text_Front_UpperCurved2_Monserrat, Plane_Text_Front_UpperCurved2_MonserratTucked, Plane_Text_Front_UnderCurved2_Monserrat, Plane_Text_Front_UnderCurved2_MonserratTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_Upper_Monserrat);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_MonserratTucked);
          break;
      }
      break;
    case "Public_Enemy_Regular":
      Jersey_group.remove( Plane_Text_Front_Under_PublicEnemyTucked, Plane_Text_Front_Under_PublicEnemy, Plane_Text_Front_UpperCurved1_PublicEnemy, Plane_Text_Front_UpperCurved1_PublicEnemyTucked, Plane_Text_Front_UpperCurved2_PublicEnemy, Plane_Text_Front_UpperCurved2_PublicEnemyTucked, Plane_Text_Front_UnderCurved2_PublicEnemy, Plane_Text_Front_UnderCurved2_PublicEnemyTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_Upper_PublicEnemy);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_PublicEnemyTucked);
          break;
      }
      break;
    case "Sportsjersey":
      Jersey_group.remove( Plane_Text_Front_Under_SportJerseyTucked, Plane_Text_Front_Under_SportJersey, Plane_Text_Front_UpperCurved1_SportJersey, Plane_Text_Front_UpperCurved1_SportJerseyTucked, Plane_Text_Front_UpperCurved2_SportJersey, Plane_Text_Front_UpperCurved2_SportJerseyTucked, Plane_Text_Front_UnderCurved2_SportJersey, Plane_Text_Front_UnderCurved2_SportJerseyTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_Upper_SportJersey);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_Upper_SportJerseyTucked);
          break;
      }
      break;
  }
});

document.getElementById("TypeLayOut2").addEventListener("click", function () {
  updateTextFrontTeamName1();
  updateTextFrontTeamName2();
  TypeLayOutFrontStatus = 2;
  switch (document.getElementById("FontTeamNameJersey").innerHTML) {
    case "Canterbury":
      Jersey_group.remove( Plane_Text_Front_UpperCurved1, Plane_Text_Front_UpperCurved1Tucked, Plane_Text_Front_UpperCurved2, Plane_Text_Front_UpperCurved2Tucked, Plane_Text_Front_UnderCurved2, Plane_Text_Front_UnderCurved2Tucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_Upper, Plane_Text_Front_Under);
          break;
        case 1:
          Jersey_group.add(
            Plane_Text_Front_UpperTucked,
            Plane_Text_Front_UnderTucked
          );
          break;
      }
      break;
    case "College_Bold":
      Jersey_group.remove( Plane_Text_Front_UpperCurved1_CollegeBold, Plane_Text_Front_UpperCurved1_CollegeBoldTucked, Plane_Text_Front_UpperCurved2_CollegeBold, Plane_Text_Front_UpperCurved2_CollegeBoldTucked, Plane_Text_Front_UnderCurved2_CollegeBold, Plane_Text_Front_UnderCurved2_CollegeBoldTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add( Plane_Text_Front_Upper_CollegeBold, Plane_Text_Front_Under_CollegeBold );
          break;
        case 1:
          Jersey_group.add( Plane_Text_Front_Upper_CollegeBoldTucked, Plane_Text_Front_Under_CollegeBoldTucked );
          break;
      }
      break;
    case "Deftone_Stylus":
      Jersey_group.remove( Plane_Text_Front_UpperCurved1_DeftoneStylesTucked, Plane_Text_Front_UpperCurved1_DeftoneStyles, Plane_Text_Front_UpperCurved2_DeftoneStyles, Plane_Text_Front_UpperCurved2_DeftoneStylesTucked, Plane_Text_Front_UnderCurved2_DeftoneStyles, Plane_Text_Front_UnderCurved2_DeftoneStylesTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add( Plane_Text_Front_Upper_DeftoneStyles, Plane_Text_Front_Under_DeftoneStyles );
          break;
        case 1:
          Jersey_group.add( Plane_Text_Front_Upper_DeftoneStylesTucked, Plane_Text_Front_Under_DeftoneStylesTucked );
          break;
      }
      break;
    case "Emilio_19_Regular":
      Jersey_group.remove( Plane_Text_Front_UpperCurved1_Emilio19, Plane_Text_Front_UpperCurved1_Emilio19Tucked, Plane_Text_Front_UpperCurved2_Emilio19, Plane_Text_Front_UpperCurved2_Emilio19Tucked, Plane_Text_Front_UnderCurved2_Emilio19, Plane_Text_Front_UnderCurved2_Emilio19Tucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add( Plane_Text_Front_Upper_Emilio19, Plane_Text_Front_Under_Emilio19 );
          break;
        case 1:
          Jersey_group.add( Plane_Text_Front_Upper_Emilio19Tucked, Plane_Text_Front_Under_Emilio19Tucked );
          break;
      }
      break;
    case "CocogooseProItalic":
      Jersey_group.remove( Plane_Text_Front_UpperCurved1_COCOGOOSE, Plane_Text_Front_UpperCurved1_COCOGOOSETucked, Plane_Text_Front_UpperCurved2_COCOGOOSE, Plane_Text_Front_UpperCurved2_COCOGOOSETucked, Plane_Text_Front_UnderCurved2_COCOGOOSE, Plane_Text_Front_UnderCurved2_COCOGOOSETucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add( Plane_Text_Front_Upper_COCOGOOSE, Plane_Text_Front_Under_COCOGOOSE );
          break;
        case 1:
          Jersey_group.add( Plane_Text_Front_Upper_COCOGOOSETucked, Plane_Text_Front_Under_COCOGOOSETucked );
          break;
      }
      break;
    case "LeagueSpartan_Bold":
      Jersey_group.remove( Plane_Text_Front_UpperCurved1_LEAGUESPARTANT, Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked, Plane_Text_Front_UpperCurved2_LEAGUESPARTANT, Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked, Plane_Text_Front_UnderCurved2_LEAGUESPARTANT, Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add( Plane_Text_Front_Upper_LEAGUESPARTANT, Plane_Text_Front_Under_LEAGUESPARTANT );
          break;
        case 1:
          Jersey_group.add( Plane_Text_Front_Upper_LEAGUESPARTANTTucked, Plane_Text_Front_Under_LEAGUESPARTANTTucked );
          break;
      }
      break;
    case "Monoton_Regular":
      Jersey_group.remove( Plane_Text_Front_UpperCurved1_Monoton, Plane_Text_Front_UpperCurved1_MonotonTucked, Plane_Text_Front_UpperCurved2_Monoton, Plane_Text_Front_UpperCurved2_MonotonTucked, Plane_Text_Front_UnderCurved2_Monoton, Plane_Text_Front_UnderCurved2_MonotonTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add( Plane_Text_Front_Upper_Monoton, Plane_Text_Front_Under_Monoton );
          break;
        case 1:
          Jersey_group.add( Plane_Text_Front_Upper_MonotonTucked, Plane_Text_Front_Under_MonotonTucked );
          break;
      }
      break;
    case "Montserrat_Regular":
      Jersey_group.remove( Plane_Text_Front_UpperCurved1_Monserrat, Plane_Text_Front_UpperCurved1_MonserratTucked, Plane_Text_Front_UpperCurved2_Monserrat, Plane_Text_Front_UpperCurved2_MonserratTucked, Plane_Text_Front_UnderCurved2_Monserrat, Plane_Text_Front_UnderCurved2_MonserratTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add( Plane_Text_Front_Upper_Monserrat, Plane_Text_Front_Under_Monserrat );
          break;
        case 1:
          Jersey_group.add( Plane_Text_Front_Upper_MonserratTucked, Plane_Text_Front_Under_MonserratTucked );
          break;
      }
      break;
    case "Public_Enemy_Regular":
      Jersey_group.remove( Plane_Text_Front_UpperCurved1_PublicEnemy, Plane_Text_Front_UpperCurved1_PublicEnemyTucked, Plane_Text_Front_UpperCurved2_PublicEnemy, Plane_Text_Front_UpperCurved2_PublicEnemyTucked, Plane_Text_Front_UnderCurved2_PublicEnemy, Plane_Text_Front_UnderCurved2_PublicEnemyTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add( Plane_Text_Front_Upper_PublicEnemy, Plane_Text_Front_Under_PublicEnemy );
          break;
        case 1:
          Jersey_group.add( Plane_Text_Front_Upper_PublicEnemyTucked, Plane_Text_Front_Under_PublicEnemyTucked );
          break;
      }
      break;
    case "Sportsjersey":
      Jersey_group.remove( Plane_Text_Front_UpperCurved1_SportJersey, Plane_Text_Front_UpperCurved1_SportJerseyTucked, Plane_Text_Front_UpperCurved2_SportJersey, Plane_Text_Front_UpperCurved2_SportJerseyTucked, Plane_Text_Front_UnderCurved2_SportJersey, Plane_Text_Front_UnderCurved2_SportJerseyTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add( Plane_Text_Front_Upper_SportJersey, Plane_Text_Front_Under_SportJersey );
          break;
        case 1:
          Jersey_group.add( Plane_Text_Front_Upper_SportJerseyTucked, Plane_Text_Front_Under_SportJerseyTucked );
          break;
      }
      break;
  }
});

document.getElementById("TypeLayOut3").addEventListener("click", function () {
  updateTextFrontTeamName1Curved2();
  updateTextFrontTeamName2Curved2();
  TypeLayOutFrontStatus = 3;
  switch (document.getElementById("FontTeamNameJersey").innerHTML) {
    case "Canterbury":
      Jersey_group.remove( Plane_Text_Front_UnderTucked, Plane_Text_Front_Under, Plane_Text_Front_Upper, Plane_Text_Front_UpperTucked, Plane_Text_Front_UpperCurved1, Plane_Text_Front_UpperCurved1Tucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add( Plane_Text_Front_UpperCurved2, Plane_Text_Front_UnderCurved2 );
          break;
        case 1:
          Jersey_group.add( Plane_Text_Front_UpperCurved2Tucked, Plane_Text_Front_UnderCurved2Tucked );
          break;
      }
      break;
    case "College_Bold":
      Jersey_group.remove( Plane_Text_Front_Under_CollegeBoldTucked, Plane_Text_Front_Upper_CollegeBoldTucked, Plane_Text_Front_Upper_CollegeBold, Plane_Text_Front_Under_CollegeBold, Plane_Text_Front_UpperCurved1_CollegeBold, Plane_Text_Front_UpperCurved1_CollegeBoldTucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add( Plane_Text_Front_UpperCurved2_CollegeBold, Plane_Text_Front_UnderCurved2_CollegeBold );
          break;
        case 1:
          Jersey_group.add( Plane_Text_Front_UpperCurved2_CollegeBoldTucked, Plane_Text_Front_UnderCurved2_CollegeBoldTucked );
          break;
      }
      break;
    case "Deftone_Stylus":
      Jersey_group.remove( Plane_Text_Front_Upper_DeftoneStylesTucked, Plane_Text_Front_Under_DeftoneStylesTucked, Plane_Text_Front_Under_DeftoneStyles, Plane_Text_Front_Upper_DeftoneStyles, Plane_Text_Front_UpperCurved1_DeftoneStylesTucked, Plane_Text_Front_UpperCurved1_DeftoneStyles );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add( Plane_Text_Front_UpperCurved2_DeftoneStyles, Plane_Text_Front_UnderCurved2_DeftoneStyles );
          break;
        case 1:
          Jersey_group.add( Plane_Text_Front_UpperCurved2_DeftoneStylesTucked, Plane_Text_Front_UnderCurved2_DeftoneStylesTucked );
          break;
      }
      break;
    case "Emilio_19_Regular":
      Jersey_group.remove( Plane_Text_Front_Under_Emilio19Tucked, Plane_Text_Front_Under_Emilio19, Plane_Text_Front_Upper_Emilio19Tucked, Plane_Text_Front_Upper_Emilio19, Plane_Text_Front_UpperCurved1_Emilio19, Plane_Text_Front_UpperCurved1_Emilio19Tucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(
            Plane_Text_Front_UpperCurved2_Emilio19,
            Plane_Text_Front_UnderCurved2_Emilio19
          );
          break;
        case 1:
          Jersey_group.add(
            Plane_Text_Front_UpperCurved2_Emilio19Tucked,
            Plane_Text_Front_UnderCurved2_Emilio19Tucked
          );
          break;
      }
      break;
    case "CocogooseProItalic":
      Jersey_group.remove( Plane_Text_Front_Under_COCOGOOSETucked, Plane_Text_Front_Under_COCOGOOSE, Plane_Text_Front_Upper_COCOGOOSETucked, Plane_Text_Front_Upper_COCOGOOSE, Plane_Text_Front_UpperCurved1_COCOGOOSE, Plane_Text_Front_UpperCurved1_COCOGOOSETucked );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(
            Plane_Text_Front_UpperCurved2_COCOGOOSE,
            Plane_Text_Front_UnderCurved2_COCOGOOSE
          );
          break;
        case 1:
          Jersey_group.add(
            Plane_Text_Front_UpperCurved2_COCOGOOSETucked,
            Plane_Text_Front_UnderCurved2_COCOGOOSETucked
          );
          break;
      }
      break;
    case "LeagueSpartan_Bold":
      Jersey_group.remove(
        Plane_Text_Front_Upper_LEAGUESPARTANTTucked,
        Plane_Text_Front_Upper_LEAGUESPARTANT,
        Plane_Text_Front_Under_LEAGUESPARTANTTucked,
        Plane_Text_Front_Under_LEAGUESPARTANT,
        Plane_Text_Front_UpperCurved1_LEAGUESPARTANT,
        Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(
            Plane_Text_Front_UpperCurved2_LEAGUESPARTANT,
            Plane_Text_Front_UnderCurved2_LEAGUESPARTANT
          );
          break;
        case 1:
          Jersey_group.add(
            Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked,
            Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked
          );
          break;
      }
      break;
    case "Monoton_Regular":
      Jersey_group.remove(
        Plane_Text_Front_Upper_MonotonTucked,
        Plane_Text_Front_Upper_Monoton,
        Plane_Text_Front_Under_MonotonTucked,
        Plane_Text_Front_Under_Monoton,
        Plane_Text_Front_UpperCurved1_Monoton,
        Plane_Text_Front_UpperCurved1_MonotonTucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(
            Plane_Text_Front_UpperCurved2_Monoton,
            Plane_Text_Front_UnderCurved2_Monoton
          );
          break;
        case 1:
          Jersey_group.add(
            Plane_Text_Front_UpperCurved2_MonotonTucked,
            Plane_Text_Front_UnderCurved2_MonotonTucked
          );
          break;
      }
      break;
    case "Montserrat_Regular":
      Jersey_group.remove(
        Plane_Text_Front_Upper_MonserratTucked,
        Plane_Text_Front_Upper_Monserrat,
        Plane_Text_Front_Under_MonserratTucked,
        Plane_Text_Front_Under_Monserrat,
        Plane_Text_Front_UpperCurved1_Monserrat,
        Plane_Text_Front_UpperCurved1_MonserratTucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(
            Plane_Text_Front_UpperCurved2_Monserrat,
            Plane_Text_Front_UnderCurved2_Monserrat
          );
          break;
        case 1:
          Jersey_group.add(
            Plane_Text_Front_UpperCurved2_MonserratTucked,
            Plane_Text_Front_UnderCurved2_MonserratTucked
          );
          break;
      }
      break;
    case "Public_Enemy_Regular":
      Jersey_group.remove(
        Plane_Text_Front_Upper_PublicEnemyTucked,
        Plane_Text_Front_Upper_PublicEnemy,
        Plane_Text_Front_Under_PublicEnemyTucked,
        Plane_Text_Front_Under_PublicEnemy,
        Plane_Text_Front_UpperCurved1_PublicEnemy,
        Plane_Text_Front_UpperCurved1_PublicEnemyTucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(
            Plane_Text_Front_UpperCurved2_PublicEnemy,
            Plane_Text_Front_UnderCurved2_PublicEnemy
          );
          break;
        case 1:
          Jersey_group.add(
            Plane_Text_Front_UpperCurved2_PublicEnemyTucked,
            Plane_Text_Front_UnderCurved2_PublicEnemyTucked
          );
          break;
      }
      break;
    case "Sportsjersey":
      Jersey_group.remove(
        Plane_Text_Front_Upper_SportJerseyTucked,
        Plane_Text_Front_Upper_SportJersey,
        Plane_Text_Front_Under_SportJerseyTucked,
        Plane_Text_Front_Under_SportJersey,
        Plane_Text_Front_UpperCurved1_SportJersey,
        Plane_Text_Front_UpperCurved1_SportJerseyTucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(
            Plane_Text_Front_UpperCurved2_SportJersey,
            Plane_Text_Front_UnderCurved2_SportJersey
          );
          break;
        case 1:
          Jersey_group.add(
            Plane_Text_Front_UpperCurved2_SportJerseyTucked,
            Plane_Text_Front_UnderCurved2_SportJerseyTucked
          );
          break;
      }
      break;
  }
});

document.getElementById("TypeLayOut4").addEventListener("click", function () {
  updateTextFrontTeamName1Curved();
  TypeLayOutFrontStatus = 4;
  switch (document.getElementById("FontTeamNameJersey").innerHTML) {
    case "Canterbury":
      Jersey_group.remove(
        Plane_Text_Front_UnderTucked,
        Plane_Text_Front_Under,
        Plane_Text_Front_Upper,
        Plane_Text_Front_UpperTucked,
        Plane_Text_Front_UpperCurved2,
        Plane_Text_Front_UpperCurved2Tucked,
        Plane_Text_Front_UnderCurved2,
        Plane_Text_Front_UnderCurved2Tucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_UpperCurved1);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_UpperCurved1Tucked);
          break;
      }
      break;
    case "College_Bold":
      Jersey_group.remove(
        Plane_Text_Front_Under_CollegeBoldTucked,
        Plane_Text_Front_Upper_CollegeBoldTucked,
        Plane_Text_Front_Upper_CollegeBold,
        Plane_Text_Front_Under_CollegeBold,
        Plane_Text_Front_UpperCurved2_CollegeBold,
        Plane_Text_Front_UpperCurved2_CollegeBoldTucked,
        Plane_Text_Front_UnderCurved2_CollegeBold,
        Plane_Text_Front_UnderCurved2_CollegeBoldTucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_CollegeBold);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_CollegeBoldTucked);
          break;
      }
      break;
    case "Deftone_Stylus":
      Jersey_group.remove(
        Plane_Text_Front_Upper_DeftoneStylesTucked,
        Plane_Text_Front_Under_DeftoneStylesTucked,
        Plane_Text_Front_Under_DeftoneStyles,
        Plane_Text_Front_Upper_DeftoneStyles,
        Plane_Text_Front_UpperCurved2_DeftoneStylesTucked,
        Plane_Text_Front_UpperCurved2_DeftoneStyles,
        Plane_Text_Front_UnderCurved2_DeftoneStyles,
        Plane_Text_Front_UnderCurved2_DeftoneStylesTucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_DeftoneStyles);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_DeftoneStylesTucked);
          break;
      }
      break;
    case "Emilio_19_Regular":
      Jersey_group.remove(
        Plane_Text_Front_Under_Emilio19Tucked,
        Plane_Text_Front_Under_Emilio19,
        Plane_Text_Front_Upper_Emilio19Tucked,
        Plane_Text_Front_Upper_Emilio19,
        Plane_Text_Front_UpperCurved2_Emilio19,
        Plane_Text_Front_UpperCurved2_Emilio19Tucked,
        Plane_Text_Front_UnderCurved2_Emilio19,
        Plane_Text_Front_UnderCurved2_Emilio19Tucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_Emilio19);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_Emilio19Tucked);
          break;
      }
      break;
    case "CocogooseProItalic":
      Jersey_group.remove(
        Plane_Text_Front_Under_COCOGOOSETucked,
        Plane_Text_Front_Under_COCOGOOSE,
        Plane_Text_Front_Upper_COCOGOOSETucked,
        Plane_Text_Front_Upper_COCOGOOSE,
        Plane_Text_Front_UpperCurved2_COCOGOOSE,
        Plane_Text_Front_UpperCurved2_COCOGOOSETucked,
        Plane_Text_Front_UnderCurved2_COCOGOOSE,
        Plane_Text_Front_UnderCurved2_COCOGOOSETucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_COCOGOOSE);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_COCOGOOSETucked);
          break;
      }
      break;
    case "LeagueSpartan_Bold":
      Jersey_group.remove(
        Plane_Text_Front_Upper_LEAGUESPARTANTTucked,
        Plane_Text_Front_Upper_LEAGUESPARTANT,
        Plane_Text_Front_Under_LEAGUESPARTANTTucked,
        Plane_Text_Front_Under_LEAGUESPARTANT,
        Plane_Text_Front_UpperCurved2_LEAGUESPARTANT,
        Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked,
        Plane_Text_Front_UnderCurved2_LEAGUESPARTANT,
        Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_LEAGUESPARTANT);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked);
          break;
      }
      break;
    case "Monoton_Regular":
      Jersey_group.remove(
        Plane_Text_Front_Upper_MonotonTucked,
        Plane_Text_Front_Upper_Monoton,
        Plane_Text_Front_Under_MonotonTucked,
        Plane_Text_Front_Under_Monoton,
        Plane_Text_Front_UpperCurved2_Monoton,
        Plane_Text_Front_UpperCurved2_MonotonTucked,
        Plane_Text_Front_UnderCurved2_Monoton,
        Plane_Text_Front_UnderCurved2_MonotonTucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_Monoton);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_MonotonTucked);
          break;
      }
      break;
    case "Montserrat_Regular":
      Jersey_group.remove(
        Plane_Text_Front_Upper_MonserratTucked,
        Plane_Text_Front_Upper_Monserrat,
        Plane_Text_Front_Under_MonserratTucked,
        Plane_Text_Front_Under_Monserrat,
        Plane_Text_Front_UpperCurved2_Monserrat,
        Plane_Text_Front_UpperCurved2_MonserratTucked,
        Plane_Text_Front_UnderCurved2_Monserrat,
        Plane_Text_Front_UnderCurved2_MonserratTucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_Monserrat);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_MonserratTucked);
          break;
      }
      break;
    case "Public_Enemy_Regular":
      Jersey_group.remove(
        Plane_Text_Front_Upper_PublicEnemyTucked,
        Plane_Text_Front_Upper_PublicEnemy,
        Plane_Text_Front_Under_PublicEnemyTucked,
        Plane_Text_Front_Under_PublicEnemy,
        Plane_Text_Front_UpperCurved2_PublicEnemy,
        Plane_Text_Front_UpperCurved2_PublicEnemyTucked,
        Plane_Text_Front_UnderCurved2_PublicEnemy,
        Plane_Text_Front_UnderCurved2_PublicEnemyTucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_PublicEnemy);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_PublicEnemyTucked);
          break;
      }
      break;
    case "Sportsjersey":
      Jersey_group.remove(
        Plane_Text_Front_Upper_SportJerseyTucked,
        Plane_Text_Front_Upper_SportJersey,
        Plane_Text_Front_Under_SportJerseyTucked,
        Plane_Text_Front_Under_SportJersey,
        Plane_Text_Front_UpperCurved2_SportJersey,
        Plane_Text_Front_UpperCurved2_SportJerseyTucked,
        Plane_Text_Front_UnderCurved2_SportJersey,
        Plane_Text_Front_UnderCurved2_SportJerseyTucked
      );
      switch (TuckedStatus) {
        case 0:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_SportJersey);
          break;
        case 1:
          Jersey_group.add(Plane_Text_Front_UpperCurved1_SportJerseyTucked);
          break;
      }
      break;
  }
});

//FONT NAME UPPER, STYLE 1

const FJCanvas_textCanvasJerseyFrontTeamName1 = document.getElementById(
  "textCanvasJerseyFrontTeamName1"
);
//MESH MATERIAl AND TEXTURE FOR NUMBER FRONT
let FJCanvas_textCanvasJerseyFrontTeamName12D = new THREE.Texture(
  document.getElementById("textCanvasJerseyFrontTeamName1")
);
FJCanvas_textCanvasJerseyFrontTeamName12D.anisotropy =
  renderer.capabilities.getMaxAnisotropy();
FJCanvas_textCanvasJerseyFrontTeamName12D.needsUpdate = true;
FJCanvas_textCanvasJerseyFrontTeamName12D.flipY = false;

const Plane_Text_Front_Upper_mat = new THREE.MeshBasicMaterial({
  map: FJCanvas_textCanvasJerseyFrontTeamName12D,
  transparency: 0.5,
  transparent: true,
  opacity: 1,
  depthTest: true,
  depthWrite: true,
});

//universal function for updating textureTEXT on front TOP
let SizeFontFrontTeamName1, outlineStatusFrontTeamName1, startAngleStatusCurved2;
function updateTextFrontTeamName1() {
  SizeFontFrontTeamName1 = "8em";

  //check outline
  if (
    document.getElementById("TextOutlineJerseyNameColor").innerHTML === "None"
  ) {
    outlineStatusFrontTeamName1 = 0;
  } else if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Canterbury"
  ) {
    outlineStatusFrontTeamName1 = 9;
  } else {
    outlineStatusFrontTeamName1 = 10;
  }

  if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Sportsjersey"
  ) {
    SizeFontFrontTeamName1 = "11em";
  }

  //draw on fabric canvas
  drawCircularText(
    FJCanvas_textCanvasJerseyFrontTeamName1,
    `${document.getElementById("Line1TeamName").value}`,
    10000,
    0,
    true,
    `${document.getElementById("FontTeamNameJersey").innerHTML}`,
    `${SizeFontFrontTeamName1}`,
    0,
    `${
      document.getElementById("SelectedColorJerseyText").style.backgroundColor
    }`,
    `${
      document.getElementById("SelectedColorJerseyTextOutline").style
        .backgroundColor
    }`,
    `${outlineStatusFrontTeamName1}`
  );

  //place on 3d object
  FJCanvas_textCanvasJerseyFrontTeamName12D = new THREE.Texture(
    document.getElementById("textCanvasJerseyFrontTeamName1")
  );
  FJCanvas_textCanvasJerseyFrontTeamName12D.anisotropy =
    renderer.capabilities.getMaxAnisotropy();
  FJCanvas_textCanvasJerseyFrontTeamName12D.needsUpdate = true;
  FJCanvas_textCanvasJerseyFrontTeamName12D.flipY = false;
  Plane_Text_Front_Upper_mat.map = FJCanvas_textCanvasJerseyFrontTeamName12D;
}

//event listeners

//input
document.getElementById("Line1TeamName").addEventListener("input", function () {
  if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Deftone_Stylus"
  ) {
  } else {
    document.getElementById("Line1TeamName").value = document
      .getElementById("Line1TeamName")
      .value.toUpperCase();
  }
});

document
  .getElementById("ApplyLine1TeamName")
  .addEventListener("click", function () {
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        break;
    }
  });

// FONT STYLES
document .getElementById("CANTERBURYTeamName") .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1();
    updateTextFrontTeamName2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Upper);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperTucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_Upper_CollegeBold, Plane_Text_Front_Upper_DeftoneStyles, Plane_Text_Front_Upper_Emilio19, Plane_Text_Front_Upper_COCOGOOSE, Plane_Text_Front_Upper_LEAGUESPARTANT, Plane_Text_Front_Upper_Monoton, Plane_Text_Front_Upper_Monserrat, Plane_Text_Front_Upper_SportJersey, Plane_Text_Front_Upper_PublicEnemy, Plane_Text_Front_Upper_CollegeBoldTucked, Plane_Text_Front_Upper_DeftoneStylesTucked, Plane_Text_Front_Upper_Emilio19Tucked, Plane_Text_Front_Upper_COCOGOOSETucked, Plane_Text_Front_Upper_LEAGUESPARTANTTucked, Plane_Text_Front_Upper_MonotonTucked, Plane_Text_Front_Upper_MonserratTucked, Plane_Text_Front_Upper_SportJerseyTucked, Plane_Text_Front_Upper_PublicEnemyTucked );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Under);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UnderTucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_Under_CollegeBold, Plane_Text_Front_Under_DeftoneStyles, Plane_Text_Front_Under_Emilio19, Plane_Text_Front_Under_COCOGOOSE, Plane_Text_Front_Under_LEAGUESPARTANT, Plane_Text_Front_Under_Monoton, Plane_Text_Front_Under_Monserrat, Plane_Text_Front_Under_SportJersey, Plane_Text_Front_Under_PublicEnemy, Plane_Text_Front_Under_CollegeBoldTucked, Plane_Text_Front_Under_DeftoneStylesTucked, Plane_Text_Front_Under_Emilio19Tucked, Plane_Text_Front_Under_COCOGOOSETucked, Plane_Text_Front_Under_LEAGUESPARTANTTucked, Plane_Text_Front_Under_MonotonTucked, Plane_Text_Front_Under_MonserratTucked, Plane_Text_Front_Under_SportJerseyTucked, Plane_Text_Front_Under_PublicEnemyTucked );
  });

document
  .getElementById("COLLEGETeamName")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1();
    updateTextFrontTeamName2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Upper_CollegeBold);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Upper_CollegeBoldTucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_Upper, Plane_Text_Front_Upper_DeftoneStyles, Plane_Text_Front_Upper_Emilio19, Plane_Text_Front_Upper_COCOGOOSE, Plane_Text_Front_Upper_LEAGUESPARTANT, Plane_Text_Front_Upper_Monoton, Plane_Text_Front_Upper_Monserrat, Plane_Text_Front_Upper_SportJersey, Plane_Text_Front_Upper_PublicEnemy, Plane_Text_Front_UpperTucked, Plane_Text_Front_Upper_DeftoneStylesTucked, Plane_Text_Front_Upper_Emilio19Tucked, Plane_Text_Front_Upper_COCOGOOSETucked, Plane_Text_Front_Upper_LEAGUESPARTANTTucked, Plane_Text_Front_Upper_MonotonTucked, Plane_Text_Front_Upper_MonserratTucked, Plane_Text_Front_Upper_SportJerseyTucked, Plane_Text_Front_Upper_PublicEnemyTucked );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Under_CollegeBold);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Under_CollegeBoldTucked);
        break;
    }

    Jersey_group.remove( Plane_Text_Front_Under, Plane_Text_Front_Under_DeftoneStyles, Plane_Text_Front_Under_Emilio19, Plane_Text_Front_Under_COCOGOOSE, Plane_Text_Front_Under_LEAGUESPARTANT, Plane_Text_Front_Under_Monoton, Plane_Text_Front_Under_Monserrat, Plane_Text_Front_Under_SportJersey, Plane_Text_Front_Under_PublicEnemy, Plane_Text_Front_UnderTucked, Plane_Text_Front_Under_DeftoneStylesTucked, Plane_Text_Front_Under_Emilio19Tucked, Plane_Text_Front_Under_COCOGOOSETucked, Plane_Text_Front_Under_LEAGUESPARTANTTucked, Plane_Text_Front_Under_MonotonTucked, Plane_Text_Front_Under_MonserratTucked, Plane_Text_Front_Under_SportJerseyTucked, Plane_Text_Front_Under_PublicEnemyTucked );
  });

document
  .getElementById("DEFTONETeamName")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1();
    updateTextFrontTeamName2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Upper_DeftoneStyles);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Upper_DeftoneStylesTucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_Upper_CollegeBold, Plane_Text_Front_Upper, Plane_Text_Front_Upper_Emilio19, Plane_Text_Front_Upper_COCOGOOSE, Plane_Text_Front_Upper_LEAGUESPARTANT, Plane_Text_Front_Upper_Monoton, Plane_Text_Front_Upper_Monserrat, Plane_Text_Front_Upper_SportJersey, Plane_Text_Front_Upper_PublicEnemy, Plane_Text_Front_UpperTucked, Plane_Text_Front_Upper_CollegeBoldTucked, Plane_Text_Front_Upper_Emilio19Tucked, Plane_Text_Front_Upper_COCOGOOSETucked, Plane_Text_Front_Upper_LEAGUESPARTANTTucked, Plane_Text_Front_Upper_MonotonTucked, Plane_Text_Front_Upper_MonserratTucked, Plane_Text_Front_Upper_SportJerseyTucked, Plane_Text_Front_Upper_PublicEnemyTucked );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Under_DeftoneStyles);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Under_DeftoneStylesTucked);
        break;
    }

    Jersey_group.remove( Plane_Text_Front_Under_CollegeBold, Plane_Text_Front_Under, Plane_Text_Front_Under_Emilio19, Plane_Text_Front_Under_COCOGOOSE, Plane_Text_Front_Under_LEAGUESPARTANT, Plane_Text_Front_Under_Monoton, Plane_Text_Front_Under_Monserrat, Plane_Text_Front_Under_SportJersey, Plane_Text_Front_Under_PublicEnemy, Plane_Text_Front_UnderTucked, Plane_Text_Front_Under_CollegeBoldTucked, Plane_Text_Front_Under_Emilio19Tucked, Plane_Text_Front_Under_COCOGOOSETucked, Plane_Text_Front_Under_LEAGUESPARTANTTucked, Plane_Text_Front_Under_MonotonTucked, Plane_Text_Front_Under_MonserratTucked, Plane_Text_Front_Under_SportJerseyTucked, Plane_Text_Front_Under_PublicEnemyTucked );
  });

document
  .getElementById("EMILIOTeamName")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1();
    updateTextFrontTeamName2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Upper_Emilio19);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Upper_Emilio19Tucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_Upper_CollegeBold, Plane_Text_Front_Upper, Plane_Text_Front_Upper_DeftoneStyles, Plane_Text_Front_Upper_LEAGUESPARTANT, Plane_Text_Front_Upper_Monoton, Plane_Text_Front_Upper_Monserrat, Plane_Text_Front_Upper_SportJersey, Plane_Text_Front_Upper_PublicEnemy, Plane_Text_Front_UpperTucked, Plane_Text_Front_Upper_CollegeBoldTucked, Plane_Text_Front_Upper_DeftoneStylesTucked, Plane_Text_Front_Upper_LEAGUESPARTANTTucked, Plane_Text_Front_Upper_MonotonTucked, Plane_Text_Front_Upper_MonserratTucked, Plane_Text_Front_Upper_SportJerseyTucked, Plane_Text_Front_Upper_PublicEnemyTucked, Plane_Text_Front_Upper_COCOGOOSE,Plane_Text_Front_Upper_COCOGOOSETucked );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Under_Emilio19);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Under_Emilio19Tucked);
        break;
    }

    Jersey_group.remove( Plane_Text_Front_Under_CollegeBold, Plane_Text_Front_Under, Plane_Text_Front_Under_DeftoneStyles, Plane_Text_Front_Under_LEAGUESPARTANT, Plane_Text_Front_Under_Monoton, Plane_Text_Front_Under_Monserrat, Plane_Text_Front_Under_SportJersey, Plane_Text_Front_Under_PublicEnemy, Plane_Text_Front_UnderTucked, Plane_Text_Front_Under_CollegeBoldTucked, Plane_Text_Front_Under_DeftoneStylesTucked, Plane_Text_Front_Under_LEAGUESPARTANTTucked, Plane_Text_Front_Under_MonotonTucked, Plane_Text_Front_Under_MonserratTucked, Plane_Text_Front_Under_SportJerseyTucked, Plane_Text_Front_Under_PublicEnemyTucked, Plane_Text_Front_Under_COCOGOOSE, Plane_Text_Front_Under_COCOGOOSETucked );
  });

document
  .getElementById("COCOGOOSETeamName")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1();
    updateTextFrontTeamName2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Upper_COCOGOOSE);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Upper_COCOGOOSETucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_Upper_CollegeBold, Plane_Text_Front_Upper, Plane_Text_Front_Upper_DeftoneStyles, Plane_Text_Front_Upper_LEAGUESPARTANT, Plane_Text_Front_Upper_Monoton, Plane_Text_Front_Upper_Monserrat, Plane_Text_Front_Upper_SportJersey, Plane_Text_Front_Upper_PublicEnemy, Plane_Text_Front_UpperTucked, Plane_Text_Front_Upper_CollegeBoldTucked, Plane_Text_Front_Upper_DeftoneStylesTucked, Plane_Text_Front_Upper_LEAGUESPARTANTTucked, Plane_Text_Front_Upper_MonotonTucked, Plane_Text_Front_Upper_MonserratTucked, Plane_Text_Front_Upper_SportJerseyTucked, Plane_Text_Front_Upper_PublicEnemyTucked, Plane_Text_Front_Upper_Emilio19, Plane_Text_Front_Upper_Emilio19Tucked );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Under_COCOGOOSE);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Under_COCOGOOSETucked);
        break;
    }

    Jersey_group.remove( Plane_Text_Front_Under_CollegeBold, Plane_Text_Front_Under, Plane_Text_Front_Under_DeftoneStyles, Plane_Text_Front_Under_LEAGUESPARTANT, Plane_Text_Front_Under_Monoton, Plane_Text_Front_Under_Monserrat, Plane_Text_Front_Under_SportJersey, Plane_Text_Front_Under_PublicEnemy, Plane_Text_Front_UnderTucked, Plane_Text_Front_Under_CollegeBoldTucked, Plane_Text_Front_Under_DeftoneStylesTucked, Plane_Text_Front_Under_LEAGUESPARTANTTucked, Plane_Text_Front_Under_MonotonTucked, Plane_Text_Front_Under_MonserratTucked, Plane_Text_Front_Under_SportJerseyTucked, Plane_Text_Front_Under_PublicEnemyTucked, Plane_Text_Front_Under_Emilio19, Plane_Text_Front_Under_Emilio19Tucked );
  });

document
  .getElementById("LEAGUESPARTANTeamName")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1();
    updateTextFrontTeamName2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Upper_LEAGUESPARTANT);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Upper_LEAGUESPARTANTTucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_Upper, Plane_Text_Front_Upper_DeftoneStyles, Plane_Text_Front_Upper_Emilio19, Plane_Text_Front_Upper_COCOGOOSE, Plane_Text_Front_Upper_CollegeBold, Plane_Text_Front_Upper_Monoton, Plane_Text_Front_Upper_Monserrat, Plane_Text_Front_Upper_SportJersey, Plane_Text_Front_Upper_PublicEnemy, Plane_Text_Front_UpperTucked, Plane_Text_Front_Upper_CollegeBoldTucked, Plane_Text_Front_Upper_DeftoneStylesTucked, Plane_Text_Front_Upper_Emilio19Tucked, Plane_Text_Front_Upper_COCOGOOSETucked, Plane_Text_Front_Upper_MonotonTucked, Plane_Text_Front_Upper_MonserratTucked, Plane_Text_Front_Upper_SportJerseyTucked, Plane_Text_Front_Upper_PublicEnemyTucked );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Under_LEAGUESPARTANT);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Under_LEAGUESPARTANTTucked);
        break;
    }

    Jersey_group.remove( Plane_Text_Front_Under, Plane_Text_Front_Under_DeftoneStyles, Plane_Text_Front_Under_Emilio19, Plane_Text_Front_Under_COCOGOOSE, Plane_Text_Front_Under_CollegeBold, Plane_Text_Front_Under_Monoton, Plane_Text_Front_Under_Monserrat, Plane_Text_Front_Under_SportJersey, Plane_Text_Front_Under_PublicEnemy, Plane_Text_Front_UnderTucked, Plane_Text_Front_Under_CollegeBoldTucked, Plane_Text_Front_Under_DeftoneStylesTucked, Plane_Text_Front_Under_Emilio19Tucked, Plane_Text_Front_Under_COCOGOOSETucked, Plane_Text_Front_Under_MonotonTucked, Plane_Text_Front_Under_MonserratTucked, Plane_Text_Front_Under_SportJerseyTucked, Plane_Text_Front_Under_PublicEnemyTucked );
  });

document
  .getElementById("MONOTONTeamName")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1();
    updateTextFrontTeamName2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Upper_Monoton);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Upper_MonotonTucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_Upper, Plane_Text_Front_Upper_DeftoneStyles, Plane_Text_Front_Upper_Emilio19, Plane_Text_Front_Upper_COCOGOOSE, Plane_Text_Front_Upper_LEAGUESPARTANT, Plane_Text_Front_Upper_CollegeBold, Plane_Text_Front_Upper_Monserrat, Plane_Text_Front_Upper_SportJersey, Plane_Text_Front_Upper_PublicEnemy, Plane_Text_Front_UpperTucked, Plane_Text_Front_Upper_CollegeBoldTucked, Plane_Text_Front_Upper_DeftoneStylesTucked, Plane_Text_Front_Upper_Emilio19Tucked, Plane_Text_Front_Upper_COCOGOOSETucked, Plane_Text_Front_Upper_LEAGUESPARTANTTucked, Plane_Text_Front_Upper_MonserratTucked, Plane_Text_Front_Upper_SportJerseyTucked, Plane_Text_Front_Upper_PublicEnemyTucked );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Under_Monoton);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Under_MonotonTucked);
        break;
    }

    Jersey_group.remove( Plane_Text_Front_Under, Plane_Text_Front_Under_DeftoneStyles, Plane_Text_Front_Under_Emilio19, Plane_Text_Front_Under_COCOGOOSE, Plane_Text_Front_Under_LEAGUESPARTANT, Plane_Text_Front_Under_CollegeBold, Plane_Text_Front_Under_Monserrat, Plane_Text_Front_Under_SportJersey, Plane_Text_Front_Under_PublicEnemy, Plane_Text_Front_UnderTucked, Plane_Text_Front_Under_CollegeBoldTucked, Plane_Text_Front_Under_DeftoneStylesTucked, Plane_Text_Front_Under_Emilio19Tucked, Plane_Text_Front_Under_COCOGOOSETucked, Plane_Text_Front_Under_LEAGUESPARTANTTucked, Plane_Text_Front_Under_MonserratTucked, Plane_Text_Front_Under_SportJerseyTucked, Plane_Text_Front_Under_PublicEnemyTucked );
  });

document
  .getElementById("MONTSERRATTeamName")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1();
    updateTextFrontTeamName2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Upper_Monserrat);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Upper_MonserratTucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_Upper, Plane_Text_Front_Upper_DeftoneStyles, Plane_Text_Front_Upper_Emilio19, Plane_Text_Front_Upper_COCOGOOSE, Plane_Text_Front_Upper_CollegeBold, Plane_Text_Front_Upper_LEAGUESPARTANT, Plane_Text_Front_Upper_Monoton, Plane_Text_Front_Upper_SportJersey, Plane_Text_Front_Upper_PublicEnemy, Plane_Text_Front_UpperTucked, Plane_Text_Front_Upper_CollegeBoldTucked, Plane_Text_Front_Upper_DeftoneStylesTucked, Plane_Text_Front_Upper_Emilio19Tucked, Plane_Text_Front_Upper_COCOGOOSETucked, Plane_Text_Front_Upper_LEAGUESPARTANTTucked, Plane_Text_Front_Upper_MonotonTucked, Plane_Text_Front_Upper_SportJerseyTucked, Plane_Text_Front_Upper_PublicEnemyTucked );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Under_Monserrat);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Under_MonserratTucked);
        break;
    }

    Jersey_group.remove( Plane_Text_Front_Under, Plane_Text_Front_Under_DeftoneStyles, Plane_Text_Front_Under_Emilio19, Plane_Text_Front_Under_COCOGOOSE, Plane_Text_Front_Under_CollegeBold, Plane_Text_Front_Under_LEAGUESPARTANT, Plane_Text_Front_Under_Monoton, Plane_Text_Front_Under_SportJersey, Plane_Text_Front_Under_PublicEnemy, Plane_Text_Front_UnderTucked, Plane_Text_Front_Under_CollegeBoldTucked, Plane_Text_Front_Under_DeftoneStylesTucked, Plane_Text_Front_Under_Emilio19Tucked, Plane_Text_Front_Under_COCOGOOSETucked, Plane_Text_Front_Under_LEAGUESPARTANTTucked, Plane_Text_Front_Under_MonotonTucked, Plane_Text_Front_Under_SportJerseyTucked, Plane_Text_Front_Under_PublicEnemyTucked );
  });

document
  .getElementById("PUBLICENEMYTeamName")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1();
    updateTextFrontTeamName2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Upper_PublicEnemy);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Upper_PublicEnemyTucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_Upper, Plane_Text_Front_Upper_DeftoneStyles, Plane_Text_Front_Upper_Emilio19, Plane_Text_Front_Upper_COCOGOOSE, Plane_Text_Front_Upper_CollegeBold, Plane_Text_Front_Upper_Monserrat, Plane_Text_Front_Upper_SportJersey, Plane_Text_Front_Upper_Monoton, Plane_Text_Front_Upper_LEAGUESPARTANT, Plane_Text_Front_UpperTucked, Plane_Text_Front_Upper_CollegeBoldTucked, Plane_Text_Front_Upper_DeftoneStylesTucked, Plane_Text_Front_Upper_Emilio19Tucked, Plane_Text_Front_Upper_COCOGOOSETucked, Plane_Text_Front_Upper_LEAGUESPARTANTTucked, Plane_Text_Front_Upper_MonotonTucked, Plane_Text_Front_Upper_SportJerseyTucked, Plane_Text_Front_Upper_MonserratTucked );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Under_PublicEnemy);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Under_PublicEnemyTucked);
        break;
    }

    Jersey_group.remove( Plane_Text_Front_Under, Plane_Text_Front_Under_DeftoneStyles, Plane_Text_Front_Under_Emilio19, Plane_Text_Front_Under_COCOGOOSE, Plane_Text_Front_Under_CollegeBold, Plane_Text_Front_Under_Monserrat, Plane_Text_Front_Under_SportJersey, Plane_Text_Front_Under_Monoton, Plane_Text_Front_Under_LEAGUESPARTANT, Plane_Text_Front_UnderTucked, Plane_Text_Front_Under_CollegeBoldTucked, Plane_Text_Front_Under_DeftoneStylesTucked, Plane_Text_Front_Under_Emilio19Tucked, Plane_Text_Front_Under_COCOGOOSETucked, Plane_Text_Front_Under_LEAGUESPARTANTTucked, Plane_Text_Front_Under_MonotonTucked, Plane_Text_Front_Under_SportJerseyTucked, Plane_Text_Front_Under_MonserratTucked );
  });

document
  .getElementById("SPORTJERSEYTeamName")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1();
    updateTextFrontTeamName2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Upper_SportJersey);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Upper_SportJerseyTucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_Upper, Plane_Text_Front_Upper_DeftoneStyles, Plane_Text_Front_Upper_Emilio19, Plane_Text_Front_Upper_COCOGOOSE, Plane_Text_Front_Upper_CollegeBold, Plane_Text_Front_Upper_Monserrat, Plane_Text_Front_Upper_Monoton, Plane_Text_Front_Upper_PublicEnemy, Plane_Text_Front_Upper_LEAGUESPARTANT, Plane_Text_Front_UpperTucked, Plane_Text_Front_Upper_CollegeBoldTucked, Plane_Text_Front_Upper_DeftoneStylesTucked, Plane_Text_Front_Upper_Emilio19Tucked, Plane_Text_Front_Upper_COCOGOOSETucked, Plane_Text_Front_Upper_LEAGUESPARTANTTucked, Plane_Text_Front_Upper_MonotonTucked, Plane_Text_Front_Upper_PublicEnemyTucked, Plane_Text_Front_Upper_MonserratTucked );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_Under_SportJersey);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_Under_SportJerseyTucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_Under, Plane_Text_Front_Under_DeftoneStyles, Plane_Text_Front_Under_Emilio19, Plane_Text_Front_Under_COCOGOOSE, Plane_Text_Front_Under_CollegeBold, Plane_Text_Front_Under_Monserrat, Plane_Text_Front_Under_Monoton, Plane_Text_Front_Under_PublicEnemy, Plane_Text_Front_Under_LEAGUESPARTANT, Plane_Text_Front_UnderTucked, Plane_Text_Front_Under_CollegeBoldTucked, Plane_Text_Front_Under_DeftoneStylesTucked, Plane_Text_Front_Under_Emilio19Tucked, Plane_Text_Front_Under_COCOGOOSETucked, Plane_Text_Front_Under_LEAGUESPARTANTTucked, Plane_Text_Front_Under_MonotonTucked, Plane_Text_Front_Under_PublicEnemyTucked, Plane_Text_Front_Under_MonserratTucked );
  });

// COLORS

document .getElementById("BlackJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("WhiteJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("GraphiteJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("GreyJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("MaroonJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("CardinalJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("BrownJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("BurntOrangeJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("ScarletJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("DarkOrangeJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("FluorescentOrangeJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("GoldJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("TaxiJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("VegasGoldJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("FluorescentYellowJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("PinkJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("FluorescentPinkJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("PurpleJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("SkyBlueJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("CarpiJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("SeafoamGreenJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("TealJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("FluorescentGreenJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("KellyGreenJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("ForestGreenJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("RoyalJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("NavyJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

//outline color

document .getElementById("BlackJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("WhiteJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("GraphiteJerseyText") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("GreyJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("MaroonJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });
  
document .getElementById("CardinalJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("BrownJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("ScarletJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("BurntOrangeJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("DarkOrangeJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("FluorescentOrangeJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("GoldJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("TaxiJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("VegasGoldJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("FluorescentYellowJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("PinkJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("FluorescentPinkJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("PurpleJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("SkyBlueJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("CarpiJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("SeafoamGreenJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("TealJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("FluorescentGreenJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("KellyGreenJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("ForestGreenJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("RoyalJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("NavyJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

document .getElementById("NoneJerseyTextOutline") .addEventListener("click", function () {
    updateTextNameTeamName();
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName1();
        updateTextFrontTeamName2();
        break;
      case 2:
        updateTextFrontTeamName1Curved();
        break;
      case 3:
        updateTextFrontTeamName1Curved2();
        updateTextFrontTeamName2Curved2();
        break;
    }
  });

//FONT NAME UNDER, STYLE 1

const FJCanvas_textCanvasJerseyFrontTeamName2 = document.getElementById(
  "textCanvasJerseyFrontTeamName2"
);
//MESH MATERIAl AND TEXTURE FOR NUMBER FRONT
let FJCanvas_textCanvasJerseyFrontTeamName22D = new THREE.Texture(
  document.getElementById("textCanvasJerseyFrontTeamName2")
);
FJCanvas_textCanvasJerseyFrontTeamName22D.anisotropy =
  renderer.capabilities.getMaxAnisotropy();
FJCanvas_textCanvasJerseyFrontTeamName22D.needsUpdate = true;
FJCanvas_textCanvasJerseyFrontTeamName22D.flipY = false;

const Plane_Text_Front_Under_mat = new THREE.MeshBasicMaterial({
  map: FJCanvas_textCanvasJerseyFrontTeamName22D,
  transparency: 0.5,
  transparent: true,
  opacity: 1,
  depthTest: true,
  depthWrite: true,
});


let SizeFontFrontTeamName2, outlineStatusFrontTeamName2;
function updateTextFrontTeamName2() {
  SizeFontFrontTeamName2 = "8em";

  //check outline
  if (
    document.getElementById("TextOutlineJerseyNameColor").innerHTML === "None"
  ) {
    outlineStatusFrontTeamName2 = 0;
  } else if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Canterbury"
  ) {
    outlineStatusFrontTeamName2 = 9;
  } else {
    outlineStatusFrontTeamName2 = 10;
  }

  if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Sportsjersey"
  ) {
    SizeFontFrontTeamName2 = "11em";
  }

  //draw on fabric canvas
  drawCircularText(
    FJCanvas_textCanvasJerseyFrontTeamName2,
    `${document.getElementById("Line2TeamName").value}`,
    10000,
    0,
    true,
    `${document.getElementById("FontTeamNameJersey").innerHTML}`,
    `${SizeFontFrontTeamName2}`,
    0,
    `${
      document.getElementById("SelectedColorJerseyText").style.backgroundColor
    }`,
    `${
      document.getElementById("SelectedColorJerseyTextOutline").style
        .backgroundColor
    }`,
    `${outlineStatusFrontTeamName2}`
  );

  //place on 3d object
  FJCanvas_textCanvasJerseyFrontTeamName22D = new THREE.Texture(
    document.getElementById("textCanvasJerseyFrontTeamName2")
  );
  FJCanvas_textCanvasJerseyFrontTeamName22D.anisotropy =
    renderer.capabilities.getMaxAnisotropy();
  FJCanvas_textCanvasJerseyFrontTeamName22D.needsUpdate = true;
  FJCanvas_textCanvasJerseyFrontTeamName22D.flipY = false;
  Plane_Text_Front_Under_mat.map = FJCanvas_textCanvasJerseyFrontTeamName22D;
}

//event listeners
document.getElementById("Line2TeamName").addEventListener("input", function () {
  if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Deftone_Stylus"
  ) {
  } else {
    document.getElementById("Line2TeamName").value = document .getElementById("Line2TeamName") .value.toUpperCase(); }
});
document .getElementById("ApplyLine2TeamName") .addEventListener("click", function () {
    switch (LayOutStatus) {
      case 1:
        updateTextFrontTeamName2();
        break;
      case 3:
        updateTextFrontTeamName2Curved2();
        break;
    }
  });


//FONT NAME UNDER, STYLE 2
function updateTextFrontTeamName2Curved2() {
  SizeFontFrontTeamName2 = "9em";
  startAngleStatusCurved2 = "180";

  //check outline
  if (
    document.getElementById("TextOutlineJerseyNameColor").innerHTML === "None"
  ) {
    outlineStatusFrontTeamName2 = 0;
  } else if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Canterbury"
  ) {
    outlineStatusFrontTeamName2 = 9;
  } else {
    outlineStatusFrontTeamName2 = 10;
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML ===
    "CocogooseProItalic"
  ) {
    SizeFontFrontTeamName2 = "8em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML ===
    "Monoton_Regular"
  ) {
    SizeFontFrontTeamName2 = "7.5em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML === "College_Bold"
  ) {
    SizeFontFrontTeamName2 = "10em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML ===
    "Emilio_19_Regular"
  ) {
    SizeFontFrontTeamName2 = "6.5em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML ===
    "LeagueSpartan_Bold"
  ) {
    SizeFontFrontTeamName2 = "7.5em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML ===
    "Montserrat_Regular"
  ) {
    SizeFontFrontTeamName2 = "8em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML ===
    "Public_Enemy_Regular"
  ) {
    SizeFontFrontTeamName2 = "9.6em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Sportsjersey"
  ) {
    SizeFontFrontTeamName2 = "10em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Deftone_Stylus"
  ) {
    SizeFontFrontTeamName1 = "8.6em";
    startAngleStatusCurved2 = "181";
  }

  //draw on fabric canvas
  drawCircularText(
    FJCanvas_textCanvasJerseyFrontTeamName2,
    `${document.getElementById("Line2TeamName").value}`,
    1000,
    startAngleStatusCurved2,
    false,
    `${document.getElementById("FontTeamNameJersey").innerHTML}`,
    `${SizeFontFrontTeamName2}`,
    -8,
    `${
      document.getElementById("SelectedColorJerseyText").style.backgroundColor
    }`,
    `${
      document.getElementById("SelectedColorJerseyTextOutline").style
        .backgroundColor
    }`,
    `${outlineStatusFrontTeamName2}`
  );

  //place on 3d object
  FJCanvas_textCanvasJerseyFrontTeamName22D = new THREE.Texture(
    document.getElementById("textCanvasJerseyFrontTeamName2")
  );
  FJCanvas_textCanvasJerseyFrontTeamName22D.anisotropy =
    renderer.capabilities.getMaxAnisotropy();
  FJCanvas_textCanvasJerseyFrontTeamName22D.needsUpdate = true;
  FJCanvas_textCanvasJerseyFrontTeamName22D.flipY = false;
  Plane_Text_Front_Under_mat.map = FJCanvas_textCanvasJerseyFrontTeamName22D;
}

//CURVED 1LINE
function updateTextFrontTeamName1Curved() {
  SizeFontFrontTeamName1 = "3.8em";

  //check outline
  if (
    document.getElementById("TextOutlineJerseyNameColor").innerHTML === "None"
  ) {
    outlineStatusFrontTeamName1 = 0;
  } else if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Canterbury"
  ) {
    outlineStatusFrontTeamName1 = 9;
  } else {
    outlineStatusFrontTeamName1 = 10;
  }

  if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Deftone_Stylus"
  ) {
    SizeFontFrontTeamName1 = "3.3em";
  }

  //draw on fabric canvas
  drawCircularText(
    FJCanvas_textCanvasJerseyFrontTeamName1,
    `${document.getElementById("Line1TeamName").value}`,
    1300,
    1,
    true,
    `${document.getElementById("FontTeamNameJersey").innerHTML}`,
    `${SizeFontFrontTeamName1}`,
    0,
    `${
      document.getElementById("SelectedColorJerseyText").style.backgroundColor
    }`,
    `${
      document.getElementById("SelectedColorJerseyTextOutline").style
        .backgroundColor
    }`,
    `${outlineStatusFrontTeamName1}`
  );

  //place on 3d object
  FJCanvas_textCanvasJerseyFrontTeamName12D = new THREE.Texture(
    document.getElementById("textCanvasJerseyFrontTeamName1")
  );
  FJCanvas_textCanvasJerseyFrontTeamName12D.anisotropy =
    renderer.capabilities.getMaxAnisotropy();
  FJCanvas_textCanvasJerseyFrontTeamName12D.needsUpdate = true;
  FJCanvas_textCanvasJerseyFrontTeamName12D.flipY = false;
  Plane_Text_Front_Upper_mat.map = FJCanvas_textCanvasJerseyFrontTeamName12D;
}

// FONT STYLES
document .getElementById("CANTERBURYTeamNameCurved1") .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved1);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved1Tucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_UpperCurved1_CollegeBold, Plane_Text_Front_UpperCurved1_DeftoneStyles, Plane_Text_Front_UpperCurved1_Emilio19, Plane_Text_Front_UpperCurved1_COCOGOOSE, Plane_Text_Front_UpperCurved1_LEAGUESPARTANT, Plane_Text_Front_UpperCurved1_Monoton, Plane_Text_Front_UpperCurved1_Monserrat, Plane_Text_Front_UpperCurved1_SportJersey, Plane_Text_Front_UpperCurved1_PublicEnemy, Plane_Text_Front_UpperCurved1_CollegeBoldTucked, Plane_Text_Front_UpperCurved1_DeftoneStylesTucked, Plane_Text_Front_UpperCurved1_Emilio19Tucked, Plane_Text_Front_UpperCurved1_COCOGOOSETucked, Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked, Plane_Text_Front_UpperCurved1_MonotonTucked, Plane_Text_Front_UpperCurved1_MonserratTucked, Plane_Text_Front_UpperCurved1_SportJerseyTucked, Plane_Text_Front_UpperCurved1_PublicEnemyTucked );
  });

document .getElementById("COLLEGETeamNameCurved1") .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_CollegeBold);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_CollegeBoldTucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_UpperCurved1, Plane_Text_Front_UpperCurved1_DeftoneStyles, Plane_Text_Front_UpperCurved1_Emilio19, Plane_Text_Front_UpperCurved1_COCOGOOSE, Plane_Text_Front_UpperCurved1_LEAGUESPARTANT, Plane_Text_Front_UpperCurved1_Monoton, Plane_Text_Front_UpperCurved1_Monserrat, Plane_Text_Front_UpperCurved1_SportJersey, Plane_Text_Front_UpperCurved1_PublicEnemy, Plane_Text_Front_UpperCurved1Tucked, Plane_Text_Front_UpperCurved1_DeftoneStylesTucked, Plane_Text_Front_UpperCurved1_Emilio19Tucked, Plane_Text_Front_UpperCurved1_COCOGOOSETucked, Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked, Plane_Text_Front_UpperCurved1_MonotonTucked, Plane_Text_Front_UpperCurved1_MonserratTucked, Plane_Text_Front_UpperCurved1_SportJerseyTucked, Plane_Text_Front_UpperCurved1_PublicEnemyTucked );
  });

document
  .getElementById("DEFTONETeamNameCurved1")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_DeftoneStyles);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_DeftoneStylesTucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_UpperCurved1_CollegeBold, Plane_Text_Front_UpperCurved1, Plane_Text_Front_UpperCurved1_Emilio19, Plane_Text_Front_UpperCurved1_COCOGOOSE, Plane_Text_Front_UpperCurved1_LEAGUESPARTANT, Plane_Text_Front_UpperCurved1_Monoton, Plane_Text_Front_UpperCurved1_Monserrat, Plane_Text_Front_UpperCurved1_SportJersey, Plane_Text_Front_UpperCurved1_PublicEnemy, Plane_Text_Front_UpperCurved1Tucked, Plane_Text_Front_UpperCurved1_CollegeBoldTucked, Plane_Text_Front_UpperCurved1_Emilio19Tucked, Plane_Text_Front_UpperCurved1_COCOGOOSETucked, Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked, Plane_Text_Front_UpperCurved1_MonotonTucked, Plane_Text_Front_UpperCurved1_MonserratTucked, Plane_Text_Front_UpperCurved1_SportJerseyTucked, Plane_Text_Front_UpperCurved1_PublicEnemyTucked );
  });

document
  .getElementById("EMILIOTeamNameCurved1")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_Emilio19);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_Emilio19Tucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved1_CollegeBold,
      Plane_Text_Front_UpperCurved1,
      Plane_Text_Front_UpperCurved1_DeftoneStyles,
      Plane_Text_Front_UpperCurved1_LEAGUESPARTANT,
      Plane_Text_Front_UpperCurved1_Monoton,
      Plane_Text_Front_UpperCurved1_Monserrat,
      Plane_Text_Front_UpperCurved1_SportJersey,
      Plane_Text_Front_UpperCurved1_PublicEnemy,
      Plane_Text_Front_UpperCurved1Tucked,
      Plane_Text_Front_UpperCurved1_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved1_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked,
      Plane_Text_Front_UpperCurved1_MonotonTucked,
      Plane_Text_Front_UpperCurved1_MonserratTucked,
      Plane_Text_Front_UpperCurved1_SportJerseyTucked,
      Plane_Text_Front_UpperCurved1_PublicEnemyTucked,
      Plane_Text_Front_UpperCurved1_COCOGOOSE,
      Plane_Text_Front_UpperCurved1_COCOGOOSETucked
    );
  });

document
  .getElementById("COCOGOOSETeamNameCurved1")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_COCOGOOSE);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_COCOGOOSETucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved1_CollegeBold,
      Plane_Text_Front_UpperCurved1,
      Plane_Text_Front_UpperCurved1_DeftoneStyles,
      Plane_Text_Front_UpperCurved1_LEAGUESPARTANT,
      Plane_Text_Front_UpperCurved1_Monoton,
      Plane_Text_Front_UpperCurved1_Monserrat,
      Plane_Text_Front_UpperCurved1_SportJersey,
      Plane_Text_Front_UpperCurved1_PublicEnemy,
      Plane_Text_Front_UpperCurved1Tucked,
      Plane_Text_Front_UpperCurved1_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved1_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked,
      Plane_Text_Front_UpperCurved1_MonotonTucked,
      Plane_Text_Front_UpperCurved1_MonserratTucked,
      Plane_Text_Front_UpperCurved1_SportJerseyTucked,
      Plane_Text_Front_UpperCurved1_PublicEnemyTucked,
      Plane_Text_Front_UpperCurved1_Emilio19,
      Plane_Text_Front_UpperCurved1_Emilio19Tucked
    );
  });

document
  .getElementById("LEAGUESPARTANTeamNameCurved1")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_LEAGUESPARTANT);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved1,
      Plane_Text_Front_UpperCurved1_DeftoneStyles,
      Plane_Text_Front_UpperCurved1_Emilio19,
      Plane_Text_Front_UpperCurved1_COCOGOOSE,
      Plane_Text_Front_UpperCurved1_CollegeBold,
      Plane_Text_Front_UpperCurved1_Monoton,
      Plane_Text_Front_UpperCurved1_Monserrat,
      Plane_Text_Front_UpperCurved1_SportJersey,
      Plane_Text_Front_UpperCurved1_PublicEnemy,
      Plane_Text_Front_UpperCurved1Tucked,
      Plane_Text_Front_UpperCurved1_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved1_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved1_Emilio19Tucked,
      Plane_Text_Front_UpperCurved1_COCOGOOSETucked,
      Plane_Text_Front_UpperCurved1_MonotonTucked,
      Plane_Text_Front_UpperCurved1_MonserratTucked,
      Plane_Text_Front_UpperCurved1_SportJerseyTucked,
      Plane_Text_Front_UpperCurved1_PublicEnemyTucked
    );
  });

document
  .getElementById("MONOTONTeamNameCurved1")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_Monoton);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_MonotonTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved1,
      Plane_Text_Front_UpperCurved1_DeftoneStyles,
      Plane_Text_Front_UpperCurved1_Emilio19,
      Plane_Text_Front_UpperCurved1_COCOGOOSE,
      Plane_Text_Front_UpperCurved1_LEAGUESPARTANT,
      Plane_Text_Front_UpperCurved1_CollegeBold,
      Plane_Text_Front_UpperCurved1_Monserrat,
      Plane_Text_Front_UpperCurved1_SportJersey,
      Plane_Text_Front_UpperCurved1_PublicEnemy,
      Plane_Text_Front_UpperCurved1Tucked,
      Plane_Text_Front_UpperCurved1_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved1_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved1_Emilio19Tucked,
      Plane_Text_Front_UpperCurved1_COCOGOOSETucked,
      Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked,
      Plane_Text_Front_UpperCurved1_MonserratTucked,
      Plane_Text_Front_UpperCurved1_SportJerseyTucked,
      Plane_Text_Front_UpperCurved1_PublicEnemyTucked
    );
  });

document
  .getElementById("MONTSERRATTeamNameCurved1")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_Monserrat);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_MonserratTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved1,
      Plane_Text_Front_UpperCurved1_DeftoneStyles,
      Plane_Text_Front_UpperCurved1_Emilio19,
      Plane_Text_Front_UpperCurved1_COCOGOOSE,
      Plane_Text_Front_UpperCurved1_CollegeBold,
      Plane_Text_Front_UpperCurved1_LEAGUESPARTANT,
      Plane_Text_Front_UpperCurved1_Monoton,
      Plane_Text_Front_UpperCurved1_SportJersey,
      Plane_Text_Front_UpperCurved1_PublicEnemy,
      Plane_Text_Front_UpperCurved1Tucked,
      Plane_Text_Front_UpperCurved1_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved1_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved1_Emilio19Tucked,
      Plane_Text_Front_UpperCurved1_COCOGOOSETucked,
      Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked,
      Plane_Text_Front_UpperCurved1_MonotonTucked,
      Plane_Text_Front_UpperCurved1_SportJerseyTucked,
      Plane_Text_Front_UpperCurved1_PublicEnemyTucked
    );
  });

document
  .getElementById("PUBLICENEMYTeamNameCurved1")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_PublicEnemy);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_PublicEnemyTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved1,
      Plane_Text_Front_UpperCurved1_DeftoneStyles,
      Plane_Text_Front_UpperCurved1_Emilio19,
      Plane_Text_Front_UpperCurved1_COCOGOOSE,
      Plane_Text_Front_UpperCurved1_CollegeBold,
      Plane_Text_Front_UpperCurved1_Monserrat,
      Plane_Text_Front_UpperCurved1_SportJersey,
      Plane_Text_Front_UpperCurved1_Monoton,
      Plane_Text_Front_UpperCurved1_LEAGUESPARTANT,
      Plane_Text_Front_UpperCurved1Tucked,
      Plane_Text_Front_UpperCurved1_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved1_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved1_Emilio19Tucked,
      Plane_Text_Front_UpperCurved1_COCOGOOSETucked,
      Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked,
      Plane_Text_Front_UpperCurved1_MonotonTucked,
      Plane_Text_Front_UpperCurved1_SportJerseyTucked,
      Plane_Text_Front_UpperCurved1_MonserratTucked
    );
  });

document
  .getElementById("SPORTJERSEYTeamNameCurved1")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_SportJersey);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved1_SportJerseyTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved1,
      Plane_Text_Front_UpperCurved1_DeftoneStyles,
      Plane_Text_Front_UpperCurved1_Emilio19,
      Plane_Text_Front_UpperCurved1_COCOGOOSE,
      Plane_Text_Front_UpperCurved1_CollegeBold,
      Plane_Text_Front_UpperCurved1_Monserrat,
      Plane_Text_Front_UpperCurved1_Monoton,
      Plane_Text_Front_UpperCurved1_PublicEnemy,
      Plane_Text_Front_UpperCurved1_LEAGUESPARTANT,
      Plane_Text_Front_UpperCurved1Tucked,
      Plane_Text_Front_UpperCurved1_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved1_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved1_Emilio19Tucked,
      Plane_Text_Front_UpperCurved1_COCOGOOSETucked,
      Plane_Text_Front_UpperCurved1_LEAGUESPARTANTTucked,
      Plane_Text_Front_UpperCurved1_MonotonTucked,
      Plane_Text_Front_UpperCurved1_PublicEnemyTucked,
      Plane_Text_Front_UpperCurved1_MonserratTucked
    );
  });

//FRONT LOAD CURVED2 1LINE

function updateTextFrontTeamName1Curved2() {
  SizeFontFrontTeamName1 = "9em";
  startAngleStatusCurved2 = "0";

  //check outline
  if (
    document.getElementById("TextOutlineJerseyNameColor").innerHTML === "None"
  ) {
    outlineStatusFrontTeamName1 = 0;
  } else if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Canterbury"
  ) {
    outlineStatusFrontTeamName1 = 9;
  } else {
    outlineStatusFrontTeamName1 = 10;
  }

  if (
    document.getElementById("FontTeamNameJersey").innerHTML ===
    "CocogooseProItalic"
  ) {
    SizeFontFrontTeamName1 = "8em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML ===
    "Monoton_Regular"
  ) {
    SizeFontFrontTeamName1 = "7.5em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML === "College_Bold"
  ) {
    SizeFontFrontTeamName1 = "10em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML ===
    "Emilio_19_Regular"
  ) {
    SizeFontFrontTeamName1 = "6.5em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML ===
    "LeagueSpartan_Bold"
  ) {
    SizeFontFrontTeamName1 = "7.5em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML ===
    "Montserrat_Regular"
  ) {
    SizeFontFrontTeamName1 = "8em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML ===
    "Public_Enemy_Regular"
  ) {
    SizeFontFrontTeamName1 = "9.6em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Sportsjersey"
  ) {
    SizeFontFrontTeamName1 = "10em";
  }
  if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Deftone_Stylus"
  ) {
    SizeFontFrontTeamName1 = "8.6em";
    //startAngleStatusCurved2 = "-3.6";
  }

  //draw on fabric canvas
  drawCircularText(
    FJCanvas_textCanvasJerseyFrontTeamName1,
    `${document.getElementById("Line1TeamName").value}`,
    1000,
    startAngleStatusCurved2,
    true,
    `${document.getElementById("FontTeamNameJersey").innerHTML}`,
    `${SizeFontFrontTeamName1}`,
    -10,
    `${
      document.getElementById("SelectedColorJerseyText").style.backgroundColor
    }`,
    `${
      document.getElementById("SelectedColorJerseyTextOutline").style
        .backgroundColor
    }`,
    `${outlineStatusFrontTeamName1}`
  );

  //place on 3d object
  FJCanvas_textCanvasJerseyFrontTeamName12D = new THREE.Texture(
    document.getElementById("textCanvasJerseyFrontTeamName1")
  );
  FJCanvas_textCanvasJerseyFrontTeamName12D.anisotropy =
    renderer.capabilities.getMaxAnisotropy();
  FJCanvas_textCanvasJerseyFrontTeamName12D.needsUpdate = true;
  FJCanvas_textCanvasJerseyFrontTeamName12D.flipY = false;
  Plane_Text_Front_Upper_mat.map = FJCanvas_textCanvasJerseyFrontTeamName12D;
}

// FONT STYLES

document
  .getElementById("CANTERBURYTeamNameCurved2")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved2();
    updateTextFrontTeamName2Curved2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved2);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved2Tucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved2_CollegeBold,
      Plane_Text_Front_UpperCurved2_DeftoneStyles,
      Plane_Text_Front_UpperCurved2_Emilio19,
      Plane_Text_Front_UpperCurved2_COCOGOOSE,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UpperCurved2_Monoton,
      Plane_Text_Front_UpperCurved2_Monserrat,
      Plane_Text_Front_UpperCurved2_SportJersey,
      Plane_Text_Front_UpperCurved2_PublicEnemy,
      Plane_Text_Front_UpperCurved2_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved2_Emilio19Tucked,
      Plane_Text_Front_UpperCurved2_COCOGOOSETucked,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UpperCurved2_MonotonTucked,
      Plane_Text_Front_UpperCurved2_MonserratTucked,
      Plane_Text_Front_UpperCurved2_SportJerseyTucked,
      Plane_Text_Front_UpperCurved2_PublicEnemyTucked
    );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UnderCurved2);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UnderCurved2Tucked);
        break;
    }

    Jersey_group.remove(
      Plane_Text_Front_UnderCurved2_CollegeBold,
      Plane_Text_Front_UnderCurved2_DeftoneStyles,
      Plane_Text_Front_UnderCurved2_Emilio19,
      Plane_Text_Front_UnderCurved2_COCOGOOSE,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UnderCurved2_Monoton,
      Plane_Text_Front_UnderCurved2_Monserrat,
      Plane_Text_Front_UnderCurved2_SportJersey,
      Plane_Text_Front_UnderCurved2_PublicEnemy,
      Plane_Text_Front_UnderCurved2_CollegeBoldTucked,
      Plane_Text_Front_UnderCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UnderCurved2_Emilio19Tucked,
      Plane_Text_Front_UnderCurved2_COCOGOOSETucked,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UnderCurved2_MonotonTucked,
      Plane_Text_Front_UnderCurved2_MonserratTucked,
      Plane_Text_Front_UnderCurved2_SportJerseyTucked,
      Plane_Text_Front_UnderCurved2_PublicEnemyTucked
    );
  });

document
  .getElementById("COLLEGETeamNameCurved2")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved2();
    updateTextFrontTeamName2Curved2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_CollegeBold);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_CollegeBoldTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved2,
      Plane_Text_Front_UpperCurved2_DeftoneStyles,
      Plane_Text_Front_UpperCurved2_Emilio19,
      Plane_Text_Front_UpperCurved2_COCOGOOSE,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UpperCurved2_Monoton,
      Plane_Text_Front_UpperCurved2_Monserrat,
      Plane_Text_Front_UpperCurved2_SportJersey,
      Plane_Text_Front_UpperCurved2_PublicEnemy,
      Plane_Text_Front_UpperCurved2Tucked,
      Plane_Text_Front_UpperCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved2_Emilio19Tucked,
      Plane_Text_Front_UpperCurved2_COCOGOOSETucked,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UpperCurved2_MonotonTucked,
      Plane_Text_Front_UpperCurved2_MonserratTucked,
      Plane_Text_Front_UpperCurved2_SportJerseyTucked,
      Plane_Text_Front_UpperCurved2_PublicEnemyTucked
    );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_CollegeBold);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_CollegeBoldTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UnderCurved2,
      Plane_Text_Front_UnderCurved2_DeftoneStyles,
      Plane_Text_Front_UnderCurved2_Emilio19,
      Plane_Text_Front_UnderCurved2_COCOGOOSE,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UnderCurved2_Monoton,
      Plane_Text_Front_UnderCurved2_Monserrat,
      Plane_Text_Front_UnderCurved2_SportJersey,
      Plane_Text_Front_UnderCurved2_PublicEnemy,
      Plane_Text_Front_UnderCurved2Tucked,
      Plane_Text_Front_UnderCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UnderCurved2_Emilio19Tucked,
      Plane_Text_Front_UnderCurved2_COCOGOOSETucked,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UnderCurved2_MonotonTucked,
      Plane_Text_Front_UnderCurved2_MonserratTucked,
      Plane_Text_Front_UnderCurved2_SportJerseyTucked,
      Plane_Text_Front_UnderCurved2_PublicEnemyTucked
    );
  });

document
  .getElementById("DEFTONETeamNameCurved2")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved2();
    updateTextFrontTeamName2Curved2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_DeftoneStyles);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_DeftoneStylesTucked);
        break;
    }
    Jersey_group.remove( Plane_Text_Front_UpperCurved2_CollegeBold, Plane_Text_Front_UpperCurved2, Plane_Text_Front_UpperCurved2_Emilio19, Plane_Text_Front_UpperCurved2_COCOGOOSE, Plane_Text_Front_UpperCurved2_LEAGUESPARTANT, Plane_Text_Front_UpperCurved2_Monoton, Plane_Text_Front_UpperCurved2_Monserrat, Plane_Text_Front_UpperCurved2_SportJersey, Plane_Text_Front_UpperCurved2_PublicEnemy, Plane_Text_Front_UpperCurved2Tucked, Plane_Text_Front_UpperCurved2_CollegeBoldTucked, Plane_Text_Front_UpperCurved2_Emilio19Tucked, Plane_Text_Front_UpperCurved2_COCOGOOSETucked, Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked, Plane_Text_Front_UpperCurved2_MonotonTucked, Plane_Text_Front_UpperCurved2_MonserratTucked, Plane_Text_Front_UpperCurved2_SportJerseyTucked, Plane_Text_Front_UpperCurved2_PublicEnemyTucked );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_DeftoneStyles);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_DeftoneStylesTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UnderCurved2_CollegeBold,
      Plane_Text_Front_UnderCurved2,
      Plane_Text_Front_UnderCurved2_Emilio19,
      Plane_Text_Front_UnderCurved2_COCOGOOSE,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UnderCurved2_Monoton,
      Plane_Text_Front_UnderCurved2_Monserrat,
      Plane_Text_Front_UnderCurved2_SportJersey,
      Plane_Text_Front_UnderCurved2_PublicEnemy,
      Plane_Text_Front_UnderCurved2Tucked,
      Plane_Text_Front_UnderCurved2_CollegeBoldTucked,
      Plane_Text_Front_UnderCurved2_Emilio19Tucked,
      Plane_Text_Front_UnderCurved2_COCOGOOSETucked,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UnderCurved2_MonotonTucked,
      Plane_Text_Front_UnderCurved2_MonserratTucked,
      Plane_Text_Front_UnderCurved2_SportJerseyTucked,
      Plane_Text_Front_UnderCurved2_PublicEnemyTucked
    );
  });

document
  .getElementById("EMILIOTeamNameCurved2")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved2();
    updateTextFrontTeamName2Curved2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_Emilio19);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_Emilio19Tucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved2_CollegeBold,
      Plane_Text_Front_UpperCurved2,
      Plane_Text_Front_UpperCurved2_DeftoneStyles,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UpperCurved2_Monoton,
      Plane_Text_Front_UpperCurved2_Monserrat,
      Plane_Text_Front_UpperCurved2_SportJersey,
      Plane_Text_Front_UpperCurved2_PublicEnemy,
      Plane_Text_Front_UpperCurved2Tucked,
      Plane_Text_Front_UpperCurved2_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UpperCurved2_MonotonTucked,
      Plane_Text_Front_UpperCurved2_MonserratTucked,
      Plane_Text_Front_UpperCurved2_SportJerseyTucked,
      Plane_Text_Front_UpperCurved2_PublicEnemyTucked, Plane_Text_Front_UpperCurved2_COCOGOOSE, Plane_Text_Front_UpperCurved2_COCOGOOSETucked
    );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_Emilio19);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_Emilio19Tucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UnderCurved2_CollegeBold,
      Plane_Text_Front_UnderCurved2,
      Plane_Text_Front_UnderCurved2_DeftoneStyles,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UnderCurved2_Monoton,
      Plane_Text_Front_UnderCurved2_Monserrat,
      Plane_Text_Front_UnderCurved2_SportJersey,
      Plane_Text_Front_UnderCurved2_PublicEnemy,
      Plane_Text_Front_UnderCurved2Tucked,
      Plane_Text_Front_UnderCurved2_CollegeBoldTucked,
      Plane_Text_Front_UnderCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UnderCurved2_MonotonTucked,
      Plane_Text_Front_UnderCurved2_MonserratTucked,
      Plane_Text_Front_UnderCurved2_SportJerseyTucked,
      Plane_Text_Front_UnderCurved2_PublicEnemyTucked, Plane_Text_Front_UnderCurved2_COCOGOOSETucked, Plane_Text_Front_UnderCurved2_COCOGOOSE
    );
  });

document
  .getElementById("COCOGOOSETeamNameCurved2")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved2();
    updateTextFrontTeamName2Curved2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_COCOGOOSE);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_COCOGOOSETucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved2_CollegeBold,
      Plane_Text_Front_UpperCurved2,
      Plane_Text_Front_UpperCurved2_DeftoneStyles,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UpperCurved2_Monoton,
      Plane_Text_Front_UpperCurved2_Monserrat,
      Plane_Text_Front_UpperCurved2_SportJersey,
      Plane_Text_Front_UpperCurved2_PublicEnemy,
      Plane_Text_Front_UpperCurved2Tucked,
      Plane_Text_Front_UpperCurved2_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UpperCurved2_MonotonTucked,
      Plane_Text_Front_UpperCurved2_MonserratTucked,
      Plane_Text_Front_UpperCurved2_SportJerseyTucked,
      Plane_Text_Front_UpperCurved2_PublicEnemyTucked,
      Plane_Text_Front_UpperCurved2_Emilio19,
      Plane_Text_Front_UpperCurved2_Emilio19Tucked
    );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_COCOGOOSE);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_COCOGOOSETucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UnderCurved2_CollegeBold,
      Plane_Text_Front_UnderCurved2,
      Plane_Text_Front_UnderCurved2_DeftoneStyles,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UnderCurved2_Monoton,
      Plane_Text_Front_UnderCurved2_Monserrat,
      Plane_Text_Front_UnderCurved2_SportJersey,
      Plane_Text_Front_UnderCurved2_PublicEnemy,
      Plane_Text_Front_UnderCurved2Tucked,
      Plane_Text_Front_UnderCurved2_CollegeBoldTucked,
      Plane_Text_Front_UnderCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UnderCurved2_MonotonTucked,
      Plane_Text_Front_UnderCurved2_MonserratTucked,
      Plane_Text_Front_UnderCurved2_SportJerseyTucked,
      Plane_Text_Front_UnderCurved2_PublicEnemyTucked,
      Plane_Text_Front_UnderCurved2_Emilio19,
      Plane_Text_Front_UnderCurved2_Emilio19Tucked
    );
  });

document
  .getElementById("LEAGUESPARTANTeamNameCurved2")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved2();
    updateTextFrontTeamName2Curved2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_LEAGUESPARTANT);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved2,
      Plane_Text_Front_UpperCurved2_DeftoneStyles,
      Plane_Text_Front_UpperCurved2_Emilio19,
      Plane_Text_Front_UpperCurved2_COCOGOOSE,
      Plane_Text_Front_UpperCurved2_CollegeBold,
      Plane_Text_Front_UpperCurved2_Monoton,
      Plane_Text_Front_UpperCurved2_Monserrat,
      Plane_Text_Front_UpperCurved2_SportJersey,
      Plane_Text_Front_UpperCurved2_PublicEnemy,
      Plane_Text_Front_UpperCurved2Tucked,
      Plane_Text_Front_UpperCurved2_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved2_Emilio19Tucked,
      Plane_Text_Front_UpperCurved2_COCOGOOSETucked,
      Plane_Text_Front_UpperCurved2_MonotonTucked,
      Plane_Text_Front_UpperCurved2_MonserratTucked,
      Plane_Text_Front_UpperCurved2_SportJerseyTucked,
      Plane_Text_Front_UpperCurved2_PublicEnemyTucked
    );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_LEAGUESPARTANT);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UnderCurved2,
      Plane_Text_Front_UnderCurved2_DeftoneStyles,
      Plane_Text_Front_UnderCurved2_Emilio19,
      Plane_Text_Front_UnderCurved2_COCOGOOSE,
      Plane_Text_Front_UnderCurved2_CollegeBold,
      Plane_Text_Front_UnderCurved2_Monoton,
      Plane_Text_Front_UnderCurved2_Monserrat,
      Plane_Text_Front_UnderCurved2_SportJersey,
      Plane_Text_Front_UnderCurved2_PublicEnemy,
      Plane_Text_Front_UnderCurved2Tucked,
      Plane_Text_Front_UnderCurved2_CollegeBoldTucked,
      Plane_Text_Front_UnderCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UnderCurved2_Emilio19Tucked,
      Plane_Text_Front_UnderCurved2_COCOGOOSETucked,
      Plane_Text_Front_UnderCurved2_MonotonTucked,
      Plane_Text_Front_UnderCurved2_MonserratTucked,
      Plane_Text_Front_UnderCurved2_SportJerseyTucked,
      Plane_Text_Front_UnderCurved2_PublicEnemyTucked
    );
  });

document
  .getElementById("MONOTONTeamNameCurved2")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved2();
    updateTextFrontTeamName2Curved2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_Monoton);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_MonotonTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved2,
      Plane_Text_Front_UpperCurved2_DeftoneStyles,
      Plane_Text_Front_UpperCurved2_Emilio19,
      Plane_Text_Front_UpperCurved2_COCOGOOSE,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UpperCurved2_CollegeBold,
      Plane_Text_Front_UpperCurved2_Monserrat,
      Plane_Text_Front_UpperCurved2_SportJersey,
      Plane_Text_Front_UpperCurved2_PublicEnemy,
      Plane_Text_Front_UpperCurved2Tucked,
      Plane_Text_Front_UpperCurved2_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved2_Emilio19Tucked,
      Plane_Text_Front_UpperCurved2_COCOGOOSETucked,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UpperCurved2_MonserratTucked,
      Plane_Text_Front_UpperCurved2_SportJerseyTucked,
      Plane_Text_Front_UpperCurved2_PublicEnemyTucked
    );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_Monoton);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_MonotonTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UnderCurved2,
      Plane_Text_Front_UnderCurved2_DeftoneStyles,
      Plane_Text_Front_UnderCurved2_Emilio19,
      Plane_Text_Front_UnderCurved2_COCOGOOSE,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UnderCurved2_CollegeBold,
      Plane_Text_Front_UnderCurved2_Monserrat,
      Plane_Text_Front_UnderCurved2_SportJersey,
      Plane_Text_Front_UnderCurved2_PublicEnemy,
      Plane_Text_Front_UnderCurved2Tucked,
      Plane_Text_Front_UnderCurved2_CollegeBoldTucked,
      Plane_Text_Front_UnderCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UnderCurved2_Emilio19Tucked,
      Plane_Text_Front_UnderCurved2_COCOGOOSETucked,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UnderCurved2_MonserratTucked,
      Plane_Text_Front_UnderCurved2_SportJerseyTucked,
      Plane_Text_Front_UnderCurved2_PublicEnemyTucked
    );
  });

document
  .getElementById("MONTSERRATTeamNameCurved2")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved2();
    updateTextFrontTeamName2Curved2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_Monserrat);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_MonserratTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved2,
      Plane_Text_Front_UpperCurved2_DeftoneStyles,
      Plane_Text_Front_UpperCurved2_Emilio19,
      Plane_Text_Front_UpperCurved2_COCOGOOSE,
      Plane_Text_Front_UpperCurved2_CollegeBold,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UpperCurved2_Monoton,
      Plane_Text_Front_UpperCurved2_SportJersey,
      Plane_Text_Front_UpperCurved2_PublicEnemy,
      Plane_Text_Front_UpperCurved2Tucked,
      Plane_Text_Front_UpperCurved2_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved2_Emilio19Tucked,
      Plane_Text_Front_UpperCurved2_COCOGOOSETucked,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UpperCurved2_MonotonTucked,
      Plane_Text_Front_UpperCurved2_SportJerseyTucked,
      Plane_Text_Front_UpperCurved2_PublicEnemyTucked
    );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_Monserrat);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_MonserratTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UnderCurved2,
      Plane_Text_Front_UnderCurved2_DeftoneStyles,
      Plane_Text_Front_UnderCurved2_Emilio19,
      Plane_Text_Front_UnderCurved2_COCOGOOSE,
      Plane_Text_Front_UnderCurved2_CollegeBold,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UnderCurved2_Monoton,
      Plane_Text_Front_UnderCurved2_SportJersey,
      Plane_Text_Front_UnderCurved2_PublicEnemy,
      Plane_Text_Front_UnderCurved2Tucked,
      Plane_Text_Front_UnderCurved2_CollegeBoldTucked,
      Plane_Text_Front_UnderCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UnderCurved2_Emilio19Tucked,
      Plane_Text_Front_UnderCurved2_COCOGOOSETucked,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UnderCurved2_MonotonTucked,
      Plane_Text_Front_UnderCurved2_SportJerseyTucked,
      Plane_Text_Front_UnderCurved2_PublicEnemyTucked
    );
  });

document
  .getElementById("PUBLICENEMYTeamNameCurved2")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved2();
    updateTextFrontTeamName2Curved2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_PublicEnemy);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_PublicEnemyTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved2,
      Plane_Text_Front_UpperCurved2_DeftoneStyles,
      Plane_Text_Front_UpperCurved2_Emilio19,
      Plane_Text_Front_UpperCurved2_COCOGOOSE,
      Plane_Text_Front_UpperCurved2_CollegeBold,
      Plane_Text_Front_UpperCurved2_Monserrat,
      Plane_Text_Front_UpperCurved2_SportJersey,
      Plane_Text_Front_UpperCurved2_Monoton,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UpperCurved2Tucked,
      Plane_Text_Front_UpperCurved2_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved2_Emilio19Tucked,
      Plane_Text_Front_UpperCurved2_COCOGOOSETucked,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UpperCurved2_MonotonTucked,
      Plane_Text_Front_UpperCurved2_SportJerseyTucked,
      Plane_Text_Front_UpperCurved2_MonserratTucked
    );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_PublicEnemy);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_PublicEnemyTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UnderCurved2,
      Plane_Text_Front_UnderCurved2_DeftoneStyles,
      Plane_Text_Front_UnderCurved2_Emilio19,
      Plane_Text_Front_UnderCurved2_COCOGOOSE,
      Plane_Text_Front_UnderCurved2_CollegeBold,
      Plane_Text_Front_UnderCurved2_Monserrat,
      Plane_Text_Front_UnderCurved2_SportJersey,
      Plane_Text_Front_UnderCurved2_Monoton,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UnderCurved2Tucked,
      Plane_Text_Front_UnderCurved2_CollegeBoldTucked,
      Plane_Text_Front_UnderCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UnderCurved2_Emilio19Tucked,
      Plane_Text_Front_UnderCurved2_COCOGOOSETucked,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UnderCurved2_MonotonTucked,
      Plane_Text_Front_UnderCurved2_SportJerseyTucked,
      Plane_Text_Front_UnderCurved2_MonserratTucked
    );
  });

document
  .getElementById("SPORTJERSEYTeamNameCurved2")
  .addEventListener("click", function () {
    updateTextNameTeamName();
    updateTextFrontTeamName1Curved2();
    updateTextFrontTeamName2Curved2();

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_SportJersey);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UpperCurved2_SportJerseyTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UpperCurved2,
      Plane_Text_Front_UpperCurved2_DeftoneStyles,
      Plane_Text_Front_UpperCurved2_Emilio19,
      Plane_Text_Front_UpperCurved2_COCOGOOSE,
      Plane_Text_Front_UpperCurved2_CollegeBold,
      Plane_Text_Front_UpperCurved2_Monserrat,
      Plane_Text_Front_UpperCurved2_Monoton,
      Plane_Text_Front_UpperCurved2_PublicEnemy,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UpperCurved2Tucked,
      Plane_Text_Front_UpperCurved2_CollegeBoldTucked,
      Plane_Text_Front_UpperCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UpperCurved2_Emilio19Tucked,
      Plane_Text_Front_UpperCurved2_COCOGOOSETucked,
      Plane_Text_Front_UpperCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UpperCurved2_MonotonTucked,
      Plane_Text_Front_UpperCurved2_PublicEnemyTucked,
      Plane_Text_Front_UpperCurved2_MonserratTucked
    );

    switch (TuckedStatus) {
      case 0:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_SportJersey);
        break;
      case 1:
        Jersey_group.add(Plane_Text_Front_UnderCurved2_SportJerseyTucked);
        break;
    }
    Jersey_group.remove(
      Plane_Text_Front_UnderCurved2,
      Plane_Text_Front_UnderCurved2_DeftoneStyles,
      Plane_Text_Front_UnderCurved2_Emilio19,
      Plane_Text_Front_UnderCurved2_COCOGOOSE,
      Plane_Text_Front_UnderCurved2_CollegeBold,
      Plane_Text_Front_UnderCurved2_Monserrat,
      Plane_Text_Front_UnderCurved2_Monoton,
      Plane_Text_Front_UnderCurved2_PublicEnemy,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANT,
      Plane_Text_Front_UnderCurved2Tucked,
      Plane_Text_Front_UnderCurved2_CollegeBoldTucked,
      Plane_Text_Front_UnderCurved2_DeftoneStylesTucked,
      Plane_Text_Front_UnderCurved2_Emilio19Tucked,
      Plane_Text_Front_UnderCurved2_COCOGOOSETucked,
      Plane_Text_Front_UnderCurved2_LEAGUESPARTANTTucked,
      Plane_Text_Front_UnderCurved2_MonotonTucked,
      Plane_Text_Front_UnderCurved2_PublicEnemyTucked,
      Plane_Text_Front_UnderCurved2_MonserratTucked
    );
  });

//NAME-TEXT BACK

const FJCanvas_textCanvasJerseyNameTeamName = document.getElementById(
  "textCanvasJerseyNameTeamName"
);

//MESH MATERIAl AND TEXTURE FOR NAME-TEXT BACK
let FJCanvas_textCanvasJerseyNameTeamName2D = new THREE.Texture(
  document.getElementById("textCanvasJerseyNameTeamName")
);
FJCanvas_textCanvasJerseyNameTeamName2D.anisotropy =
  renderer.capabilities.getMaxAnisotropy();
FJCanvas_textCanvasJerseyNameTeamName2D.needsUpdate = true;
FJCanvas_textCanvasJerseyNameTeamName2D.flipY = false;

const Plane_Text_Back_Name_mat = new THREE.MeshBasicMaterial({
  map: FJCanvas_textCanvasJerseyNameTeamName2D,
  transparency: 0.5,
  transparent: true,
  opacity: 1,
  depthTest: true,
  depthWrite: true,
});

//universal function for updating textureTEXT on NAME-TEXT BACK
let SizeFontNameTeamName, outlineStatusNameTeamName;
function updateTextNameTeamName() {
  SizeFontNameTeamName = "5.5em";

  //check outline
  if (
    document.getElementById("TextOutlineJerseyNameColor").innerHTML === "None"
  ) {
    outlineStatusNameTeamName = 0;
  } else if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Canterbury"
  ) {
    outlineStatusNameTeamName = 9;
  } else {
    outlineStatusNameTeamName = 10;
  }

  if (
    document.getElementById("FontTeamNameJersey").innerHTML === "Sportsjersey"
  ) {
    SizeFontNameTeamName = "8em";
  }

  //draw on fabric canvas
  drawCircularText(
    FJCanvas_textCanvasJerseyNameTeamName,
    `${document.getElementById("TextTeamName").value}`,
    10000,
    0,
    true,
    `BigNoodleTitling`,
    `${SizeFontNameTeamName}`,
    0,
    `${
      document.getElementById("SelectedColorJerseyText").style.backgroundColor
    }`,
    `${
      document.getElementById("SelectedColorJerseyTextOutline").style
        .backgroundColor
    }`,
    `${outlineStatusNameTeamName}`
  );

  //place on 3d object
  FJCanvas_textCanvasJerseyNameTeamName2D = new THREE.Texture(
    document.getElementById("textCanvasJerseyNameTeamName")
  );
  FJCanvas_textCanvasJerseyNameTeamName2D.anisotropy =
    renderer.capabilities.getMaxAnisotropy();
  FJCanvas_textCanvasJerseyNameTeamName2D.needsUpdate = true;
  FJCanvas_textCanvasJerseyNameTeamName2D.flipY = false;
  Plane_Text_Back_Name_mat.map = FJCanvas_textCanvasJerseyNameTeamName2D;
}

document.getElementById("TextTeamName").addEventListener("input", function () {
    document.getElementById("TextTeamName").value = document
      .getElementById("TextTeamName")
      .value.toUpperCase();
}); 

//input
document.getElementById("ApplyLineName").addEventListener("click", function () {
  updateTextNameTeamName();
});


// NAME-TEXT BACK LOAD
let Plane_Text_Back_Name;
gltfLoader.load("gltf/Plane_Text_Back_Name.glb", (gltf) => {
  Plane_Text_Back_Name = gltf.scene.children[0];
  Plane_Text_Back_Name.material = Plane_Text_Back_Name_mat;
  Jersey_group.add(Plane_Text_Back_Name);
});

let Plane_Text_Back_NameTucked;
gltfLoader.load("gltf/Plane_Text_Back_NameTucked.glb", (gltf) => {
  Plane_Text_Back_NameTucked = gltf.scene.children[0];
  Plane_Text_Back_NameTucked.material = Plane_Text_Back_Name_mat;
});

//USER LOGO
//FABRICJS - Canvas1 (RightChest)

//loading models what will takes' fabrics js
gltfLoader.load("gltf/Plane_RightChest.glb", (gltf) => {
  Plane_RightChest = gltf.scene.children[0];
  Plane_RightChest.material = UserLogo_JerseyChest_Mat;
  Jersey_group.add(Plane_RightChest);
});

//defining canvas
const canvas1 = new fabric.Canvas("fabricCanvas");
canvas1.backgroundColor = null;
document.getElementById("fabricCanvas").style.display = "none";

// & texture  for rightchest
var textureF = new THREE.Texture(document.getElementById("fabricCanvas"));
textureF.anisotropy = renderer.capabilities.getMaxAnisotropy();
textureF.needsUpdate = true;
textureF.flipY = true;

// & material  for rightchest
const UserLogo_JerseyChest_Mat = new THREE.MeshBasicMaterial({
  map: textureF,
  transparency: 0,
  transparent: true,
  opacity: 1,
  depthTest: true,
  depthWrite: true,
});

//HTML UPLOADING OF RIGHT CHEST LOGO

var statusEitherUploadedCanvas1OrNot = 0;
var fabricCanvasInput1_statusWidth;
document
  .getElementById("fileInputRightShoulderPreview")
  .addEventListener("change", function (e) {
    swapImage(this, document.getElementById("fabricCanvasInput1"));
  });

document
  .getElementById("UploadRightShoulderPrint")
  .addEventListener("click", function () {
    applyImageFabricCanvas1();
  });

document
  .getElementById("RemoveRightShoulderPrint")
  .addEventListener("click", function () {
    removeImageFabricCanvas1();
  });

var imgInstance, imgElement;
function applyImageFabricCanvas1() {
  document.getElementById("fabricCanvas").style.display = "block";
  document.getElementById("fabricCanvasInput1").style.display = "block";

  UserLogo_JerseyChest_Mat.map.needsUpdate = true;
  UserLogo_JerseyChest_Mat.map.flipY = true;

  imgElement = document.getElementById("fabricCanvasInput1");

  imgInstance = new fabric.Image(imgElement, {
    top: 0,
    left: 0,
    width: imgElement.width,
    height: imgElement.height,
    centeredScaling: true,
    borderColor: "#ffffff00",
    cornerColor: "ffffff00",
    cornerStrokeColor: "ffffff00",
    //objectCaching: false,
  });

  canvas1.on("after:render", function () {
    UserLogo_JerseyChest_Mat.map.needsUpdate = true;
    UserLogo_JerseyChest_Mat.map.flipY = false;
  });

  //calculate scaling of image
  if (imgElement.width >= 1100) {
    console.log("more 800");
    console.log(document.getElementById("fabricCanvasInput1").width);
    imgInstance.scaleX = 0.1;
    imgInstance.scaleY = 0.1;
  } else if (imgElement.width <= 1100) {
    console.log("less 800");
    console.log(document.getElementById("fabricCanvasInput1").width);
    imgInstance.scaleX = 0.9;
    imgInstance.scaleY = 0.9;
  }

  canvas1.add(imgInstance);
  canvas1.centerObject(imgInstance);
  statusEitherUploadedCanvas1OrNot = 1;
}

function removeImageFabricCanvas1() {
  canvas1.remove(imgInstance);
}

function swapImage(input, image) {
  var reader = new FileReader();
  reader.onload = function (readingEvent) {
    // get loaded data and render thumbnail.
    image.src = readingEvent.target.result;
  };
  // read the image file as a data URL.
  reader.readAsDataURL(input.files[0]);
}

//FABRICJS - Canvas2:
gltfLoader.load("gltf/Plane_LeftChest.glb", (gltf) => {
  Plane_LeftChest = gltf.scene.children[0];
  Plane_LeftChest.material = Logo3_Mat;
  Jersey_group.add(Plane_LeftChest);
});

//defining canvas2
const canvas2 = new fabric.Canvas("fabricCanvas2");
canvas2.backgroundColor = null;
document.getElementById("fabricCanvas2").style.display = "none";

// & texture  for rightchest
var textureFCanvas2 = new THREE.Texture(
  document.getElementById("fabricCanvas2")
);
textureFCanvas2.anisotropy = renderer.capabilities.getMaxAnisotropy();
textureFCanvas2.needsUpdate = true;
textureFCanvas2.flipY = true;

// & material  for rightchest
const UserLogo_JerseyLeftChest_Mat = new THREE.MeshBasicMaterial({
  map: textureFCanvas2,
  transparency: 0,
  transparent: true,
  opacity: 1,
  depthTest: true,
  depthWrite: true,
});

//HTML UPLOADING OF LEFT CHEST LOGO CANVAS2
var statusEitherUploadedCanvas1OrNotCanvas2 = 0;
var fabricCanvasInput1_statusWidthCanvas2;
document
  .getElementById("fileInputLeftShoulderPreview")
  .addEventListener("change", function (e) {
    swapImageCanvas2(this, document.getElementById("fabricCanvas2Input"));
  });

document
  .getElementById("UploadLeftShoulderPrint")
  .addEventListener("click", function () {
    applyImageFabricCanvas2();
  });

document
  .getElementById("RemoveLeftShoulderPrint")
  .addEventListener("click", function () {
    removeImageFabricCanvas2();
  });

var imgInstanceCanvas2, imgElementCanvas2;
function applyImageFabricCanvas2() {
  document.getElementById("fabricCanvas2").style.display = "block";
  document.getElementById("fabricCanvas2Input").style.display = "block";

  UserLogo_JerseyLeftChest_Mat.map.needsUpdate = true;
  UserLogo_JerseyLeftChest_Mat.map.flipY = true;

  imgElementCanvas2 = document.getElementById("fabricCanvas2Input");

  imgInstanceCanvas2 = new fabric.Image(imgElementCanvas2, {
    top: 0,
    left: 0,
    width: imgElementCanvas2.width,
    height: imgElementCanvas2.height,
    centeredScaling: true,
    borderColor: "black",
    cornerColor: "black",
    //objectCaching: false,
  });

  canvas2.on("after:render", function () {
    UserLogo_JerseyLeftChest_Mat.map.needsUpdate = true;
    UserLogo_JerseyLeftChest_Mat.map.flipY = false;
  });

  //calculate scaling of image
  if (imgElementCanvas2.width >= 1100) {
    imgInstanceCanvas2.scaleX = 0.1;
    imgInstanceCanvas2.scaleY = 0.1;
  } else if (imgElementCanvas2.width <= 1100) {
    imgInstanceCanvas2.scaleX = 0.9;
    imgInstanceCanvas2.scaleY = 0.9;
  }

  canvas2.add(imgInstanceCanvas2);
  canvas2.centerObject(imgInstanceCanvas2);
  statusEitherUploadedCanvas1OrNotCanvas2 = 1;
}

function removeImageFabricCanvas2() {
  canvas2.remove(imgInstanceCanvas2);
}

function swapImageCanvas2(input, image) {
  var reader = new FileReader();
  reader.onload = function (readingEvent) {
    // get loaded data and render thumbnail.
    image.src = readingEvent.target.result;
  };
  // read the image file as a data URL.
  reader.readAsDataURL(input.files[0]);
}

//FABRICJS - Canvas3:
gltfLoader.load("gltf/Plane_BellowNeck.glb", (gltf) => {
  Plane_BellowNeck = gltf.scene.children[0];
  Plane_BellowNeck.material = UserLogo_BellowNeck_Mat;
  Jersey_group.add(Plane_BellowNeck);
});

//defining Canvas3
const Canvas3 = new fabric.Canvas("fabricCanvas3");
Canvas3.backgroundColor = null;
document.getElementById("fabricCanvas3").style.display = "none";

// & texture  for rightchest
var textureFCanvas3 = new THREE.Texture(
  document.getElementById("fabricCanvas3")
);
textureFCanvas3.anisotropy = renderer.capabilities.getMaxAnisotropy();
textureFCanvas3.needsUpdate = true;
textureFCanvas3.flipY = true;

// & material  for rightchest
const UserLogo_BellowNeck_Mat = new THREE.MeshBasicMaterial({
  map: textureFCanvas3,
  transparency: 0,
  transparent: true,
  opacity: 1,
  depthTest: true,
  depthWrite: true,
});

//HTML UPLOADING OF LEFT CHEST LOGO Canvas3
var statusEitherUploadedCanvas1OrNotCanvas3 = 0;
var fabricCanvasInput1_statusWidthCanvas3;
document
  .getElementById("fileInputBackBelowNeckPreview")
  .addEventListener("change", function (e) {
    swapImageCanvas3(this, document.getElementById("fabricCanvas3Input"));
  });

document
  .getElementById("UploadBackBelowNeckPrint")
  .addEventListener("click", function () {
    applyImageFabricCanvas3();
  });

document
  .getElementById("RemoveBackBelowNeckPrint")
  .addEventListener("click", function () {
    removeImageFabricCanvas3();
  });

var imgInstanceCanvas3, imgElementCanvas3;
function applyImageFabricCanvas3() {
  document.getElementById("fabricCanvas3").style.display = "block";
  document.getElementById("fabricCanvas3Input").style.display = "block";

  UserLogo_BellowNeck_Mat.map.needsUpdate = true;
  UserLogo_BellowNeck_Mat.map.flipY = true;

  imgElementCanvas3 = document.getElementById("fabricCanvas3Input");

  imgInstanceCanvas3 = new fabric.Image(imgElementCanvas3, {
    top: 0,
    left: 0,
    width: imgElementCanvas3.width,
    height: imgElementCanvas3.height,
    centeredScaling: true,
    borderColor: "black",
    cornerColor: "black",
    //objectCaching: false,
  });

  Canvas3.on("after:render", function () {
    UserLogo_BellowNeck_Mat.map.needsUpdate = true;
    UserLogo_BellowNeck_Mat.map.flipY = false;
  });

  //calculate scaling of image
  if (imgElementCanvas3.width >= 1100) {
    console.log("more 800");
    console.log(document.getElementById("fabricCanvas3Input").width);
    imgInstanceCanvas3.scaleX = 0.1;
    imgInstanceCanvas3.scaleY = 0.1;
  } else if (imgElementCanvas3.width <= 1100) {
    console.log("less 800");
    console.log(document.getElementById("fabricCanvas3Input").width);
    imgInstanceCanvas3.scaleX = 0.9;
    imgInstanceCanvas3.scaleY = 0.9;
  }

  Canvas3.add(imgInstanceCanvas3);
  Canvas3.centerObject(imgInstanceCanvas3);
  statusEitherUploadedCanvas1OrNotCanvas3 = 1;
}

function removeImageFabricCanvas3() {
  Canvas3.remove(imgInstanceCanvas3);
}

function swapImageCanvas3(input, image) {
  var reader = new FileReader();
  reader.onload = function (readingEvent) {
    // get loaded data and render thumbnail.
    image.src = readingEvent.target.result;
  };
  // read the image file as a data URL.
  reader.readAsDataURL(input.files[0]);
}

//FABRICJS - Canvas4:

gltfLoader.load("gltf/Plane_BackUnderNumberTucked.glb", (gltf) => {
  Plane_BackUnderNumberTucked = gltf.scene.children[0];
  Plane_BackUnderNumberTucked.material = UserLogo_BackUnderNumber_Mat;
});

gltfLoader.load("gltf/Plane_BackUnderNumberUntucked.glb", (gltf) => {
  Plane_BackUnderNumberUntucked = gltf.scene.children[0];
  Plane_BackUnderNumberUntucked.material = UserLogo_BackUnderNumber_Mat;
  Jersey_group.add(Plane_BackUnderNumberUntucked);
});

//defining Canvas4
const Canvas4 = new fabric.Canvas("fabricCanvas4");
Canvas4.backgroundColor = null;
document.getElementById("fabricCanvas4").style.display = "none";

// & texture  for rightchest
var textureFCanvas4 = new THREE.Texture(
  document.getElementById("fabricCanvas4")
);
textureFCanvas4.anisotropy = renderer.capabilities.getMaxAnisotropy();
textureFCanvas4.needsUpdate = true;
textureFCanvas4.flipY = true;

// & material  for rightchest
const UserLogo_BackUnderNumber_Mat = new THREE.MeshBasicMaterial({
  map: textureFCanvas4,
  transparency: 0,
  transparent: true,
  opacity: 1,
  depthTest: true,
  depthWrite: true,
});

//HTML UPLOADING OF LEFT CHEST LOGO Canvas4
var statusEitherUploadedCanvas1OrNotCanvas4 = 0;
var fabricCanvasInput1_statusWidthCanvas4;
document
  .getElementById("fileInputBackUnderNumberPreview")
  .addEventListener("change", function (e) {
    swapImageCanvas4(this, document.getElementById("fabricCanvas4Input"));
  });

document
  .getElementById("UploadBackUnderNumberPrint")
  .addEventListener("click", function () {
    applyImageFabricCanvas4();
  });

document
  .getElementById("RemoveBackUnderNumberPrint")
  .addEventListener("click", function () {
    removeImageFabricCanvas4();
  });

var imgInstanceCanvas4, imgElementCanvas4;
function applyImageFabricCanvas4() {
  document.getElementById("fabricCanvas4").style.display = "block";
  document.getElementById("fabricCanvas4Input").style.display = "block";

  UserLogo_BackUnderNumber_Mat.map.needsUpdate = true;
  UserLogo_BackUnderNumber_Mat.map.flipY = true;

  imgElementCanvas4 = document.getElementById("fabricCanvas4Input");

  imgInstanceCanvas4 = new fabric.Image(imgElementCanvas4, {
    top: 0,
    left: 0,
    width: imgElementCanvas4.width,
    height: imgElementCanvas4.height,
    centeredScaling: true,
    borderColor: "black",
    cornerColor: "black",
    //objectCaching: false,
  });

  Canvas4.on("after:render", function () {
    UserLogo_BackUnderNumber_Mat.map.needsUpdate = true;
    UserLogo_BackUnderNumber_Mat.map.flipY = false;
  });

  //calculate scaling of image
  if (imgElementCanvas4.width >= 1100) {
    console.log("more 800");
    console.log(document.getElementById("fabricCanvas4Input").width);
    imgInstanceCanvas4.scaleX = 0.1;
    imgInstanceCanvas4.scaleY = 0.1;
  } else if (imgElementCanvas4.width <= 1100) {
    console.log("less 800");
    console.log(document.getElementById("fabricCanvas4Input").width);
    imgInstanceCanvas4.scaleX = 0.9;
    imgInstanceCanvas4.scaleY = 0.9;
  }

  Canvas4.add(imgInstanceCanvas4);
  Canvas4.centerObject(imgInstanceCanvas4);
  statusEitherUploadedCanvas1OrNotCanvas4 = 1;
}

function removeImageFabricCanvas4() {
  Canvas4.remove(imgInstanceCanvas4);
}

function swapImageCanvas4(input, image) {
  var reader = new FileReader();
  reader.onload = function (readingEvent) {
    // get loaded data and render thumbnail.
    image.src = readingEvent.target.result;
  };
  // read the image file as a data URL.
  reader.readAsDataURL(input.files[0]);
}

//FABRICJS - Canvas5:
gltfLoader.load("gltf/Plane_LeftUpperShorts.glb", (gltf) => {
  Plane_LeftUpperShorts = gltf.scene.children[0];
  Plane_LeftUpperShorts.material = UserLogo_LeftUpper_Mat;
  Plane_LeftUpperShorts.renderOrder = 3;
  Shorts_group.add(Plane_LeftUpperShorts);
});

//defining Canvas5
const Canvas5 = new fabric.Canvas("fabricCanvas5");
Canvas5.backgroundColor = null;
document.getElementById("fabricCanvas5").style.display = "none";

// & texture  for rightchest
var textureFCanvas5 = new THREE.Texture(
  document.getElementById("fabricCanvas5")
);
textureFCanvas5.anisotropy = renderer.capabilities.getMaxAnisotropy();
textureFCanvas5.needsUpdate = true;
textureFCanvas5.flipY = true;

// & material  for rightchest
const UserLogo_LeftUpper_Mat = new THREE.MeshBasicMaterial({
  map: textureFCanvas5,
  transparency: 0,
  transparent: true,
  opacity: 1,
  depthTest: true,
  depthWrite: true,
});

//HTML UPLOADING OF LEFT CHEST LOGO Canvas5
var statusEitherUploadedCanvas1OrNotCanvas5 = 0;
var fabricCanvasInput1_statusWidthCanvas5;
document
  .getElementById("fileInputLeftUpperPreview")
  .addEventListener("change", function (e) {
    swapImageCanvas5(this, document.getElementById("fabricCanvas5Input"));
  });

document
  .getElementById("UploadLeftUpperPrint")
  .addEventListener("click", function () {
    applyImageFabricCanvas5();
  });

document
  .getElementById("RemoveLeftUpperPrint")
  .addEventListener("click", function () {
    removeImageFabricCanvas5();
  });

var imgInstanceCanvas5, imgElementCanvas5;
function applyImageFabricCanvas5() {
  document.getElementById("fabricCanvas5").style.display = "block";
  document.getElementById("fabricCanvas5Input").style.display = "block";

  UserLogo_LeftUpper_Mat.map.needsUpdate = true;
  UserLogo_LeftUpper_Mat.map.flipY = true;

  imgElementCanvas5 = document.getElementById("fabricCanvas5Input");

  imgInstanceCanvas5 = new fabric.Image(imgElementCanvas5, {
    top: 0,
    left: 0,
    width: imgElementCanvas5.width,
    height: imgElementCanvas5.height,
    centeredScaling: true,
    borderColor: "black",
    cornerColor: "black",
    //objectCaching: false,
  });

  Canvas5.on("after:render", function () {
    UserLogo_LeftUpper_Mat.map.needsUpdate = true;
    UserLogo_LeftUpper_Mat.map.flipY = false;
  });

  //calculate scaling of image
  if (imgElementCanvas5.width >= 1100) {
    console.log("more 800");
    console.log(document.getElementById("fabricCanvas5Input").width);
    imgInstanceCanvas5.scaleX = 0.1;
    imgInstanceCanvas5.scaleY = 0.1;
  } else if (imgElementCanvas5.width <= 1100) {
    console.log("less 800");
    console.log(document.getElementById("fabricCanvas5Input").width);
    imgInstanceCanvas5.scaleX = 0.9;
    imgInstanceCanvas5.scaleY = 0.9;
  }

  Canvas5.add(imgInstanceCanvas5);
  Canvas5.centerObject(imgInstanceCanvas5);
  statusEitherUploadedCanvas1OrNotCanvas5 = 1;
}

function removeImageFabricCanvas5() {
  Canvas5.remove(imgInstanceCanvas5);
}

function swapImageCanvas5(input, image) {
  var reader = new FileReader();
  reader.onload = function (readingEvent) {
    // get loaded data and render thumbnail.
    image.src = readingEvent.target.result;
  };
  // read the image file as a data URL.
  reader.readAsDataURL(input.files[0]);
}

//FABRICJS - Canvas6:
gltfLoader.load("gltf/Plane_LeftLowerShorts.glb", (gltf) => {
  Plane_LeftLowerShorts = gltf.scene.children[0];
  Plane_LeftLowerShorts.material = UserLogo_LeftLower_Mat;
  Plane_LeftLowerShorts.renderOrder = 3;
  Shorts_group.add(Plane_LeftLowerShorts);
});

//defining Canvas6
const Canvas6 = new fabric.Canvas("fabricCanvas6");
Canvas6.backgroundColor = null;
document.getElementById("fabricCanvas6").style.display = "none";

// & texture  for rightchest
var textureFCanvas6 = new THREE.Texture(
  document.getElementById("fabricCanvas6")
);
textureFCanvas6.anisotropy = renderer.capabilities.getMaxAnisotropy();
textureFCanvas6.needsUpdate = true;
textureFCanvas6.flipY = true;

// & material  for rightchest
const UserLogo_LeftLower_Mat = new THREE.MeshBasicMaterial({
  map: textureFCanvas6,
  transparency: 0,
  transparent: true,
  opacity: 1,
  depthTest: true,
  depthWrite: true,
});

//HTML UPLOADING OF LEFT CHEST LOGO Canvas6
var statusEitherUploadedCanvas1OrNotCanvas6 = 0;
var fabricCanvasInput1_statusWidthCanvas6;
document
  .getElementById("fileInputLeftLowerPreview")
  .addEventListener("change", function (e) {
    swapImageCanvas6(this, document.getElementById("fabricCanvas6Input"));
  });

document
  .getElementById("UploadLeftLowerPrint")
  .addEventListener("click", function () {
    applyImageFabricCanvas6();
  });

document
  .getElementById("RemoveLeftLowerPrint")
  .addEventListener("click", function () {
    removeImageFabricCanvas6();
  });

var imgInstanceCanvas6, imgElementCanvas6;
function applyImageFabricCanvas6() {
  document.getElementById("fabricCanvas6").style.display = "block";
  document.getElementById("fabricCanvas6Input").style.display = "block";

  UserLogo_LeftLower_Mat.map.needsUpdate = true;
  UserLogo_LeftLower_Mat.map.flipY = true;

  imgElementCanvas6 = document.getElementById("fabricCanvas6Input");

  imgInstanceCanvas6 = new fabric.Image(imgElementCanvas6, {
    top: 0,
    left: 0,
    width: imgElementCanvas6.width,
    height: imgElementCanvas6.height,
    centeredScaling: true,
    borderColor: "black",
    cornerColor: "black",
    //objectCaching: false,
  });

  Canvas6.on("after:render", function () {
    UserLogo_LeftLower_Mat.map.needsUpdate = true;
    UserLogo_LeftLower_Mat.map.flipY = false;
  });

  //calculate scaling of image
  if (imgElementCanvas6.width >= 1100) {
    console.log("more 800");
    console.log(document.getElementById("fabricCanvas6Input").width);
    imgInstanceCanvas6.scaleX = 0.1;
    imgInstanceCanvas6.scaleY = 0.1;
  } else if (imgElementCanvas6.width <= 1100) {
    console.log("less 800");
    console.log(document.getElementById("fabricCanvas6Input").width);
    imgInstanceCanvas6.scaleX = 0.9;
    imgInstanceCanvas6.scaleY = 0.9;
  }

  Canvas6.add(imgInstanceCanvas6);
  Canvas6.centerObject(imgInstanceCanvas6);
  statusEitherUploadedCanvas1OrNotCanvas6 = 1;
}

function removeImageFabricCanvas6() {
  Canvas6.remove(imgInstanceCanvas6);
}

function swapImageCanvas6(input, image) {
  var reader = new FileReader();
  reader.onload = function (readingEvent) {
    // get loaded data and render thumbnail.
    image.src = readingEvent.target.result;
  };
  // read the image file as a data URL.
  reader.readAsDataURL(input.files[0]);
}

//FABRICJS - Canvas7:
gltfLoader.load("gltf/Plane_RightUpperShorts.glb", (gltf) => {
  Plane_RightUpperShorts = gltf.scene.children[0];
  Plane_RightUpperShorts.material = UserLogo_RightUpper_Mat;
  Plane_RightUpperShorts.renderOrder = 3;
  Shorts_group.add(Plane_RightUpperShorts);
});

//defining Canvas7
const Canvas7 = new fabric.Canvas("fabricCanvas7");
Canvas7.backgroundColor = null;
document.getElementById("fabricCanvas7").style.display = "none";

// & texture  for rightchest
var textureFCanvas7 = new THREE.Texture(
  document.getElementById("fabricCanvas7")
);
textureFCanvas7.anisotropy = renderer.capabilities.getMaxAnisotropy();
textureFCanvas7.needsUpdate = true;
textureFCanvas7.flipY = true;

// & material  for rightchest
const UserLogo_RightUpper_Mat = new THREE.MeshBasicMaterial({
  map: textureFCanvas7,
  transparency: 0,
  transparent: true,
  opacity: 1,
  depthTest: true,
  depthWrite: true,
});

//HTML UPLOADING OF LEFT CHEST LOGO Canvas7
var statusEitherUploadedCanvas1OrNotCanvas7 = 0;
var fabricCanvasInput1_statusWidthCanvas7;
document
  .getElementById("fileInputRightUpperPreview")
  .addEventListener("change", function (e) {
    swapImageCanvas7(this, document.getElementById("fabricCanvas7Input"));
  });

document
  .getElementById("UploadRightUpperPrint")
  .addEventListener("click", function () {
    applyImageFabricCanvas7();
  });

document
  .getElementById("RemoveRightUpperPrint")
  .addEventListener("click", function () {
    removeImageFabricCanvas7();
  });

var imgInstanceCanvas7, imgElementCanvas7;
function applyImageFabricCanvas7() {
  document.getElementById("fabricCanvas7").style.display = "block";
  document.getElementById("fabricCanvas7Input").style.display = "block";

  UserLogo_RightUpper_Mat.map.needsUpdate = true;
  UserLogo_RightUpper_Mat.map.flipY = true;

  imgElementCanvas7 = document.getElementById("fabricCanvas7Input");

  imgInstanceCanvas7 = new fabric.Image(imgElementCanvas7, {
    top: 0,
    left: 0,
    width: imgElementCanvas7.width,
    height: imgElementCanvas7.height,
    centeredScaling: true,
    borderColor: "black",
    cornerColor: "black",
    //objectCaching: false,
  });

  Canvas7.on("after:render", function () {
    UserLogo_RightUpper_Mat.map.needsUpdate = true;
    UserLogo_RightUpper_Mat.map.flipY = false;
  });

  //calculate scaling of image
  if (imgElementCanvas7.width >= 1100) {
    console.log("more 800");
    console.log(document.getElementById("fabricCanvas7Input").width);
    imgInstanceCanvas7.scaleX = 0.1;
    imgInstanceCanvas7.scaleY = 0.1;
  } else if (imgElementCanvas7.width <= 1100) {
    console.log("less 800");
    console.log(document.getElementById("fabricCanvas7Input").width);
    imgInstanceCanvas7.scaleX = 0.9;
    imgInstanceCanvas7.scaleY = 0.9;
  }

  Canvas7.add(imgInstanceCanvas7);
  Canvas7.centerObject(imgInstanceCanvas7);
  statusEitherUploadedCanvas1OrNotCanvas7 = 1;
}

function removeImageFabricCanvas7() {
  Canvas7.remove(imgInstanceCanvas7);
}

function swapImageCanvas7(input, image) {
  var reader = new FileReader();
  reader.onload = function (readingEvent) {
    // get loaded data and render thumbnail.
    image.src = readingEvent.target.result;
  };
  // read the image file as a data URL.
  reader.readAsDataURL(input.files[0]);
}

//FABRICJS - Canvas8:
gltfLoader.load("gltf/Plane_RightLowerShorts.glb", (gltf) => {
  Plane_RightLowerShorts = gltf.scene.children[0];
  Plane_RightLowerShorts.material = Logo3_Mat;
  Plane_RightLowerShorts.renderOrder = 3;
  Shorts_group.add(Plane_RightLowerShorts);
});

//defining Canvas8
const Canvas8 = new fabric.Canvas("fabricCanvas8");
Canvas8.backgroundColor = null;
document.getElementById("fabricCanvas8").style.display = "none";

// & texture  for rightchest
var textureFCanvas8 = new THREE.Texture(
  document.getElementById("fabricCanvas8")
);
textureFCanvas8.anisotropy = renderer.capabilities.getMaxAnisotropy();
textureFCanvas8.needsUpdate = true;
textureFCanvas8.flipY = true;

// & material  for rightchest
const UserLogo_RightLower_Mat = new THREE.MeshBasicMaterial({
  map: textureFCanvas8,
  transparency: 0,
  transparent: true,
  opacity: 1,
  depthTest: true,
  depthWrite: true,
});

//HTML UPLOADING OF LEFT CHEST LOGO Canvas8
var statusEitherUploadedCanvas1OrNotCanvas8 = 0;
var fabricCanvasInput1_statusWidthCanvas8;
document
  .getElementById("fileInputRightLowerPreview")
  .addEventListener("change", function (e) {
    swapImageCanvas8(this, document.getElementById("fabricCanvas8Input"));
  });

document
  .getElementById("UploadRightLowerPrint")
  .addEventListener("click", function () {
    applyImageFabricCanvas8();
  });

document
  .getElementById("RemoveRightLowerPrint")
  .addEventListener("click", function () {
    removeImageFabricCanvas8();
  });

var imgInstanceCanvas8, imgElementCanvas8;
function applyImageFabricCanvas8() {
  document.getElementById("fabricCanvas8").style.display = "block";
  document.getElementById("fabricCanvas8Input").style.display = "block";

  UserLogo_RightLower_Mat.map.needsUpdate = true;
  UserLogo_RightLower_Mat.map.flipY = true;

  imgElementCanvas8 = document.getElementById("fabricCanvas8Input");

  imgInstanceCanvas8 = new fabric.Image(imgElementCanvas8, {
    top: 0,
    left: 0,
    width: imgElementCanvas8.width,
    height: imgElementCanvas8.height,
    centeredScaling: true,
    borderColor: "black",
    cornerColor: "black",
    //objectCaching: false,
  });

  Canvas8.on("after:render", function () {
    UserLogo_RightLower_Mat.map.needsUpdate = true;
    UserLogo_RightLower_Mat.map.flipY = false;
  });

  //calculate scaling of image
  if (imgElementCanvas8.width >= 1100) {
    console.log("more 800");
    console.log(document.getElementById("fabricCanvas8Input").width);
    imgInstanceCanvas8.scaleX = 0.1;
    imgInstanceCanvas8.scaleY = 0.1;
  } else if (imgElementCanvas8.width <= 1100) {
    console.log("less 800");
    console.log(document.getElementById("fabricCanvas8Input").width);
    imgInstanceCanvas8.scaleX = 0.9;
    imgInstanceCanvas8.scaleY = 0.9;
  }

  Canvas8.add(imgInstanceCanvas8);
  Canvas8.centerObject(imgInstanceCanvas8);
  statusEitherUploadedCanvas1OrNotCanvas8 = 1;
}

function removeImageFabricCanvas8() {
  Canvas8.remove(imgInstanceCanvas8);
}

function swapImageCanvas8(input, image) {
  var reader = new FileReader();
  reader.onload = function (readingEvent) {
    // get loaded data and render thumbnail.
    image.src = readingEvent.target.result;
  };
  // read the image file as a data URL.
  reader.readAsDataURL(input.files[0]);
}

//BASE COLOR SHORTS
document
  .getElementById("BlackShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x1c1c1c);
    ElasticFabric_Main.color = new THREE.Color(0x1c1c1c);
    SticksMat.color = new THREE.Color(0x1c1c1c);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("WhiteShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0xffffff);
    ElasticFabric_Main.color = new THREE.Color(0xffffff);
    SticksMat.color = new THREE.Color(0xffffff);
    ElasticFabric_Main.metalness = 0.2;
  });

document
  .getElementById("GraphiteShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x676767);
    ElasticFabric_Main.color = new THREE.Color(0x676767);
    SticksMat.color = new THREE.Color(0x676767);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("GreyShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0xc4c5c7);
    ElasticFabric_Main.color = new THREE.Color(0xc4c5c7);
    SticksMat.color = new THREE.Color(0xc4c5c7);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("MaroonShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x4f1719);
    ElasticFabric_Main.color = new THREE.Color(0x4f1719);
    SticksMat.color = new THREE.Color(0x4f1719);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("CardinalShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x5e070c);
    ElasticFabric_Main.color = new THREE.Color(0x5e070c);
    SticksMat.color = new THREE.Color(0x5e070c);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("BrownShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x5e3013);
    ElasticFabric_Main.color = new THREE.Color(0x5e3013);
    SticksMat.color = new THREE.Color(0x5e3013);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("BurntOrangeShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0xc06628);
    ElasticFabric_Main.color = new THREE.Color(0xc06628);
    SticksMat.color = new THREE.Color(0xc06628);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("ScarletShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0xb72025);
    ElasticFabric_Main.color = new THREE.Color(0xb72025);
    SticksMat.color = new THREE.Color(0xb72025);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("DarkOrangeShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0xdd6426);
    ElasticFabric_Main.color = new THREE.Color(0xdd6426);
    SticksMat.color = new THREE.Color(0xdd6426);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("FluorescentOrangeShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0xf6923c);
    ElasticFabric_Main.color = new THREE.Color(0xf6923c);
    SticksMat.color = new THREE.Color(0xf6923c);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("GoldShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0xecad1f);
    ElasticFabric_Main.color = new THREE.Color(0xecad1f);
    SticksMat.color = new THREE.Color(0xecad1f);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("TaxiShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0xffcc05);
    ElasticFabric_Main.color = new THREE.Color(0xffcc05);
    SticksMat.color = new THREE.Color(0xffcc05);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("VegasGoldShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0xd5bc6c);
    ElasticFabric_Main.color = new THREE.Color(0xd5bc6c);
    SticksMat.color = new THREE.Color(0xd5bc6c);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("FluorescentYellowShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0xdde11d);
    ElasticFabric_Main.color = new THREE.Color(0xdde11d);
    SticksMat.color = new THREE.Color(0xdde11d);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("PinkShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0xeebcd6);
    ElasticFabric_Main.color = new THREE.Color(0xeebcd6);
    SticksMat.color = new THREE.Color(0xeebcd6);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("FluorescentPinkShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0xec228f);
    ElasticFabric_Main.color = new THREE.Color(0xec228f);
    SticksMat.color = new THREE.Color(0xec228f);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("PurpleShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x5d2a77);
    ElasticFabric_Main.color = new THREE.Color(0x5d2a77);
    SticksMat.color = new THREE.Color(0x5d2a77);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("SkyBlueShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x7c9fd3);
    ElasticFabric_Main.color = new THREE.Color(0x7c9fd3);
    SticksMat.color = new THREE.Color(0x7c9fd3);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("CarpiShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x0098cc);
    ElasticFabric_Main.color = new THREE.Color(0x0098cc);
    SticksMat.color = new THREE.Color(0x0098cc);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("SeafoamGreenShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x9dd4b6);
    ElasticFabric_Main.color = new THREE.Color(0x9dd4b6);
    SticksMat.color = new THREE.Color(0x9dd4b6);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("TealShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x177269);
    ElasticFabric_Main.color = new THREE.Color(0x177269);
    SticksMat.color = new THREE.Color(0x177269);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("FluorescentGreenShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x69bc45);
    ElasticFabric_Main.color = new THREE.Color(0x69bc45);
    SticksMat.color = new THREE.Color(0x69bc45);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("KellyGreenShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x3a6d34);
    ElasticFabric_Main.color = new THREE.Color(0x3a6d34);
    SticksMat.color = new THREE.Color(0x3a6d34);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("ForestGreenShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x1a2c17);
    ElasticFabric_Main.color = new THREE.Color(0x1a2c17);
    SticksMat.color = new THREE.Color(0x1a2c17);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("RoyalShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x283a88);
    ElasticFabric_Main.color = new THREE.Color(0x283a88);
    SticksMat.color = new THREE.Color(0x283a88);
    ElasticFabric_Main.metalness = 0;
  });

document
  .getElementById("NavyShortsBase")
  .addEventListener("click", function () {
    Fabric_Main.color = new THREE.Color(0x1e3160);
    ElasticFabric_Main.color = new THREE.Color(0x1e3160);
    SticksMat.color = new THREE.Color(0x1e3160);
    ElasticFabric_Main.metalness = 0;
  });

//ACCENT1 COLOR
document
  .getElementById("BlackShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x191919);
    Logo1_Mat.color = new THREE.Color(0x191919);
  });

document
  .getElementById("WhiteShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0xffffff);
    Logo1_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("GraphiteShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x676767);
    Logo1_Mat.color = new THREE.Color(0x676767);
  });

document
  .getElementById("GreyShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0xc4c5c7);
    Logo1_Mat.color = new THREE.Color(0xc4c5c7);
  });

document
  .getElementById("MaroonShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x4f1719);
    Logo1_Mat.color = new THREE.Color(0x4f1719);
  });

document
  .getElementById("CardinalShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x5e070c);
    Logo1_Mat.color = new THREE.Color(0x5e070c);
  });

document
  .getElementById("BrownShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x5e3013);
    Logo1_Mat.color = new THREE.Color(0x5e3013);
  });

document
  .getElementById("BurntOrangeShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0xc06628);
    Logo1_Mat.color = new THREE.Color(0xc06628);
  });

document
  .getElementById("ScarletShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0xb72025);
    Logo1_Mat.color = new THREE.Color(0xb72025);
  });

document
  .getElementById("DarkOrangeShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0xdd6426);
    Logo1_Mat.color = new THREE.Color(0xdd6426);
  });

document
  .getElementById("FluorescentOrangeShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0xf6923c);
    Logo1_Mat.color = new THREE.Color(0xf6923c);
  });

document
  .getElementById("GoldShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0xecad1f);
    Logo1_Mat.color = new THREE.Color(0xecad1f);
  });

document
  .getElementById("TaxiShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0xffcc05);
    Logo1_Mat.color = new THREE.Color(0xffcc05);
  });

document
  .getElementById("VegasGoldShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0xd5bc6c);
    Logo1_Mat.color = new THREE.Color(0xd5bc6c);
  });

document
  .getElementById("FluorescentYellowShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0xdde11d);
    Logo1_Mat.color = new THREE.Color(0xdde11d);
  });

document
  .getElementById("PinkShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0xeebcd6);
    Logo1_Mat.color = new THREE.Color(0xeebcd6);
  });

document
  .getElementById("FluorescentPinkShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0xec228f);
    Logo1_Mat.color = new THREE.Color(0xec228f);
  });

document
  .getElementById("PurpleShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x5d2a77);
    Logo1_Mat.color = new THREE.Color(0x5d2a77);
  });

document
  .getElementById("SkyBlueShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x7c9fd3);
    Logo1_Mat.color = new THREE.Color(0x7c9fd3);
  });

document
  .getElementById("CarpiShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x0098cc);
    Logo1_Mat.color = new THREE.Color(0x0098cc);
  });

document
  .getElementById("SeafoamGreenShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x9dd4b6);
    Logo1_Mat.color = new THREE.Color(0x9dd4b6);
  });

document
  .getElementById("TealShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x177269);
    Logo1_Mat.color = new THREE.Color(0x177269);
  });

document
  .getElementById("FluorescentGreenShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x69bc45);
    Logo1_Mat.color = new THREE.Color(0x69bc45);
  });

document
  .getElementById("KellyGreenShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x3a6d34);
    Logo1_Mat.color = new THREE.Color(0x3a6d34);
  });

document
  .getElementById("ForestGreenShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x1a2c17);
    Logo1_Mat.color = new THREE.Color(0x1a2c17);
  });

document
  .getElementById("RoyalShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x283a88);
    Logo1_Mat.color = new THREE.Color(0x283a88);
  });

document
  .getElementById("NavyShortsAccent1")
  .addEventListener("click", function () {
    DesignShorts_Mat.color = new THREE.Color(0x1e3160);
    Logo1_Mat.color = new THREE.Color(0x1e3160);
  });

//BASE COLOR JERSEY
document
  .getElementById("BlackJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x1c1c1c);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabelWhite_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("WhiteJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0xffffff);
    Fabric_Main_Jersey.metalness = 0.2;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0x676767);
  });

document
  .getElementById("GraphiteJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x676767);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("GreyJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0xc4c5c7);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("MaroonJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x4f1719);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("CardinalJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x5e070c);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("BrownJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x5e3013);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("BurntOrangeJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0xc06628);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("ScarletJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0xb72025);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("DarkOrangeJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0xdd6426);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("FluorescentOrangeJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0xf6923c);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("GoldJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0xecad1f);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("TaxiJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0xffcc05);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0x676767);
  });

document
  .getElementById("VegasGoldJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0xd5bc6c);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("FluorescentYellowJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0xdde11d);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0x676767);
  });

document
  .getElementById("PinkJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0xeebcd6);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("FluorescentPinkJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0xec228f);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("PurpleJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x5d2a77);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("SkyBlueJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x7c9fd3);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("CarpiJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x0098cc);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("SeafoamGreenJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x9dd4b6);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("TealJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x177269);
    Fabric_Main_Jersey.metalness = 0;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("FluorescentGreenJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x69bc45);
    Fabric_Main_Jersey.metalness = 0;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("KellyGreenJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x3a6d34);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("ForestGreenJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x1a2c17);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("RoyalJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x283a88);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("NavyJerseyBase")
  .addEventListener("click", function () {
    Fabric_Main_Jersey.color = new THREE.Color(0x1e3160);
    Fabric_Main_Jersey.metalness = 0;
    SizeLabel_mat.map = SizeLabel_texture;
    Logo3_Mat.color = new THREE.Color(0xffffff);
  });

//ACCENT1 COLOR JERSEY
document
  .getElementById("BlackJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x191919);
  });

document
  .getElementById("WhiteJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0xffffff);
  });

document
  .getElementById("GraphiteJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x676767);
  });

document
  .getElementById("GreyJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0xc4c5c7);
  });

document
  .getElementById("MaroonJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x4f1719);
  });

document
  .getElementById("CardinalJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x5e070c);
  });

document
  .getElementById("BrownJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x5e3013);
  });

document
  .getElementById("BurntOrangeJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0xc06628);
  });

document
  .getElementById("ScarletJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0xb72025);
  });

document
  .getElementById("DarkOrangeJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0xdd6426);
  });

document
  .getElementById("FluorescentOrangeJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0xf6923c);
  });

document
  .getElementById("GoldJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0xecad1f);
  });

document
  .getElementById("TaxiJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0xffcc05);
  });

document
  .getElementById("VegasGoldJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0xd5bc6c);
  });

document
  .getElementById("FluorescentYellowJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0xdde11d);
  });

document
  .getElementById("PinkJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0xeebcd6);
  });

document
  .getElementById("FluorescentPinkJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0xec228f);
  });

document
  .getElementById("PurpleJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x5d2a77);
  });

document
  .getElementById("SkyBlueJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x7c9fd3);
  });

document
  .getElementById("CarpiJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x0098cc);
  });

document
  .getElementById("SeafoamGreenJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x9dd4b6);
  });

document
  .getElementById("TealJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x177269);
  });

document
  .getElementById("FluorescentGreenJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x69bc45);
  });

document
  .getElementById("KellyGreenJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x3a6d34);
  });

document
  .getElementById("ForestGreenJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x1a2c17);
  });

document
  .getElementById("RoyalJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x283a88);
  });

document
  .getElementById("NavyJerseyAccent1")
  .addEventListener("click", function () {
    DesignJersey_Mat.color = new THREE.Color(0x1e3160);
  });

let SpinStatus = 0;
document.getElementById("Button_Spin").addEventListener("click", function () {
  if (SpinStatus == 0) {
    controls.autoRotate = true;
    document.getElementById("Button_Spin").innerHTML = "Stop Spin";
    SpinStatus = 1;
  } else if (SpinStatus == 1) {
    document.getElementById("Button_Spin").innerHTML = "Start Spin";
    controls.autoRotate = false;
    SpinStatus = 0;
  }
});

var elem = document.documentElement;
let FullScreenStatus = 0;
function Fullscreen() {
  if (FullScreenStatus == 0) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }

    FullScreenStatus = 1;
  } else if (FullScreenStatus == 1) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    FullScreenStatus = 0;
  }
}

/*
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
*/

console.clear()

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

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
  }

  //camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
  controls.update();
  //updateLight();
}

requestAnimationFrame(render);
render();
