import * as THREE from './three.module.js';
import { FBXLoader } from './FBXLoader.js';
import { OrbitControls } from './OrbitControls.js';

//import { DRACOLoader } from "./DRACOLoader.js";
//import { GLTFLoader } from "./GLTFLoader.js";
//let meshobj;
var group1 = new THREE.Object3D();
var id_f = 0;

//canvas1 = new fabric.Canvas("canvas1");
//canvas1 = new fabric.Canvas("canvas1", {renderOnAddRemove: false});
canvas1 = new fabric.Canvas("canvas1", {width: 2560, height: 2560,  /* renderOnAddRemove: false */  });
canvas1.backgroundColor = "#ffffff";
canvas1.selection = false;

//newGFX(canvas1, 'logos/ball.png', 300, 200, 0.5, 0.5, 0);
//newVec(canvas2, 200, 500, 0.2, 210, 45, "#666666");

var containerHeight = document.getElementById('c').clientHeight;
var containerWidth = document.getElementById('c').clientWidth; 

//var containerHeight = "2560";
//var containerWidth = "2560";  

var renderer, container, scene, geometry, cube;
var texture1, texturen1, material1;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var onClickPosition = new THREE.Vector2();
var canvas;

//camera
var camera, controls;
const fov = 30; 
const near = 0.1;
const far = 200;

//for placing new fabricjs object, status
let positioningRequired = true; 

init();
animate();


function init() {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, near, far);
	camera.position.set(0, 0.1, 5);
	scene.position.set(0,0.9,0);
	camera.lookAt(scene.position);
	
	container = document.getElementById(containerName);
	containerWidth = container.offsetWidth;
	containerHeight = container.offsetHeight; 
	canvas = container;

	renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true,});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(containerWidth, containerWidth);
	camera.aspect = 1.0; //container.clientWidth / container.clientHeight;
	//scene.background = new THREE.Color(0xffffff) 
	//camera.updateProjectionMatrix();

	//orbitcontrols
	controls = new OrbitControls( camera, renderer.domElement );
	controls.target.set(0, 0.2, -0);
	controls.minDistance = 9; //2.8
	controls.maxDistance = 12; //5
	//enable 'from' bottom view ⬇️
	//controls.maxPolarAngle = Math.PI / 2;
	controls.enableDamping = false;
	controls.dampingFactor = 0.05;
	controls.autoRotate = false;
	controls.autoRotateSpeed = 3;
	controls.enabled = true;
	//disable right mouse move
	controls.enableKeys = true;
	controls.enablePan = true;
	controls.screenSpacePanning = true;

	//lights
	
	//var light = new THREE.DirectionalLight(0xffffff, 0.5);
	//light.position.setScalar(10,2,-5);
	//scene.add(light);
	
	const hemiLight = new THREE.HemisphereLight( 0xdfdfdf, 0x495359 );
	hemiLight.position.set( 0, 200, 0 );
	scene.add( hemiLight );

	/*
	const color = 0xffffff;
	const intensity = 0;
	const light = new THREE.DirectionalLight(color, intensity);
	light.castShadow = true;
	light.position.set(18, 2, 0);
	light.target.position.set(35, 9, -15);
	scene.add(light);
	scene.add(light.target); 
	*/
	
	const color2 = 0xffffff;
	const intensity2 = 0.39;
	const light2 = new THREE.DirectionalLight(color2, intensity2);
	light2.castShadow = false;
	light2.position.set(-20, 0, 18);
	light2.target.position.set(-18, 5, 4.5);
	scene.add(light2);
	scene.add(light2.target);
	//const helper = new THREE.DirectionalLightHelper(light);
	//scene.add(helper);
	
	const color3 = 0xffffff;
	const intensity3 = 0.399;
	const light3 = new THREE.DirectionalLight(color3, intensity3);
	//light3.position.set(2, 1, -1.99);
	light3.position.set(2.19, -1.15, -1.99);
	light3.target.position.set(0, 0, 0);
	scene.add(light3);
	scene.add(light3.target);
				
	
	//3d models loading

	scene.add(group1);
	
	const loader = new FBXLoader();
	
	var canvasForManRoundNeck;
	loader.load( './models/manRoundneck.fbx', function ( object ) {
		object.traverse( function ( child ) {
			if ( child.isMesh ) {
				child.material = material1;
				child.material.side = THREE.DoubleSide;
			}
		} );
		group1.add(object);
		id_f = object.id+1;
		object.renderOrder = 3; 
		canvasForManRoundNeck = object;
	} ); 


	var canvasForManRoundNeckInside;
	loader.load( './models/manRoundneckInside.fbx', function ( object ) {
		object.traverse( function ( child ) {
			if ( child.isMesh ) {
				child.material = material_clean;
				//child.material.side = THREE.DoubleSide;
			}
		} );
		scene.add(object);
		//id_f = object.id+1;
		object.renderOrder = 2; 
		canvasForManRoundNeckInside = object;
	} ); 


	var canvasFormanRoundneckKnitTrimColar;
	loader.load( './models/manRoundneckKnitTrimColar.fbx', function ( object ) {
		object.traverse( function ( child ) {
			if ( child.isMesh ) {
				child.material = material_cleanKnitTreamColar;
				//child.material.side = THREE.DoubleSide;
			}
		} );
		scene.add(object);
		//id_f = object.id+1;
		object.renderOrder = 2; 
		canvasFormanRoundneckKnitTrimColar = object;
	} ); 


	var canvasFormanRoundneckKnitTrimSleeve;
	loader.load( './models/manRoundneckKnitTrimSleeve.fbx', function ( object ) {
		object.traverse( function ( child ) {
			if ( child.isMesh ) {
				child.material = material_cleanKnitTreamSleeve;
				//child.material.side = THREE.DoubleSide;
			} 
		} );
		scene.add(object);
		//id_f = object.id+1;
		object.renderOrder = 2; 
		canvasFormanRoundneckKnitTrimSleeve = object;
	} ); 



	/* 
	var canvasForWomanRoundNeck;
	loader.load( './models/womanRoundneck.fbx', function ( object ) {
		object.traverse( function ( child ) {
			if ( child.isMesh ) {
				child.material = material1;
				child.material.side = THREE.DoubleSide;
			}
		} );
		canvasForWomanRoundNeck = object;
		object.renderOrder = 3; 

	} );
	

	var canvasForWomanVNeck;
	loader.load( './models/womanVneck.fbx', function ( object ) {
		object.traverse( function ( child ) {
			if ( child.isMesh ) {
				child.material = material1;
				child.material.side = THREE.DoubleSide;
			}
		} );
		canvasForWomanVNeck = object;
		object.renderOrder = 3; 
	} );
	

	var canvasForManVNeck;
	loader.load( './models/manVneck.fbx', function ( object ) {
		object.traverse( function ( child ) {
			if ( child.isMesh ) {
				child.material = material1;
				child.material.side = THREE.DoubleSide;
			}
		} );
		canvasForManVNeck = object;
		object.renderOrder = 3; 
	} );	
	 */



	
	// textures  for 3d models  

	const textureLoader = new THREE.TextureLoader();
	texture1 = new THREE.Texture(document.getElementById("canvas1"));
	texture1.anisotropy = renderer.capabilities.getMaxAnisotropy();
	texture1.magFilter =  THREE.LinearFilter;
	//THREE. THREE.NearestFilter
	texture1.minFilter = THREE.LinearFilter;

	material1 = new THREE.MeshStandardMaterial({
		map: texture1,
		//normalMap: Fabric_Main_NRM,
		/*normalMap: Fabric_Main_NRM,
		normalScale: new THREE.Vector2(1, 1), */
		//color: 0x3F8BBC,
		//transparency: 0,
		//transparent: false,
		//opacity: 1,
		depthTest: true,
		depthWrite: true,
		side: THREE.FrontSide,
	});



	var material_clean = new THREE.MeshStandardMaterial({
		//normalMap: Fabric_Main_NRM,
		/*normalMap: Fabric_Main_NRM,
		normalScale: new THREE.Vector2(1, 1), */
		color: 0xffffff,
		//transparency: 0,
		//transparent: false,
		//opacity: 1,
		depthTest: true,
		depthWrite: true,
		side: THREE.FrontSide
	});



	material_cleanKnitTreamColar = new THREE.MeshStandardMaterial({
		color: 0x434345,
		side: THREE.FrontSide,
		depthTest: true,
		depthWrite: true,
	});

	material_cleanKnitTreamSleeve = new THREE.MeshStandardMaterial({
		color: 0x494349,
		side: THREE.FrontSide,
		depthTest: true,
		depthWrite: true,
	});




















	//optional (not finished) solution to restore canvas from saved cookie in real time 

	/* 	document.getElementById("deliverDesignData").addEventListener("click", function () {

		//UI.JS 1245 line 
		//var json_str = getCookie('mycookie');
		//var arr = JSON.parse(json_str);
		canvas1.loadFromJSON(json);

		// re-render the canvas
		canvas1.renderAll();
	  
		// optional
		canvas1.calculateOffset();

		chooseMenMesh_func();

	}); */











/* 
	document.getElementById("BlockType_Man").addEventListener("click", function () {
		GenderStatus = 0;
	});

	document.getElementById("BlockType_Woman").addEventListener("click", function () {
		GenderStatus = 1;
	});

	document.getElementById("BlockType_RoundNeck").addEventListener("click", function () {
		NeckStatus = 0;
	});      

	document.getElementById("BlockType_VNeck").addEventListener("click", function () {
		NeckStatus = 1;
	});

 */












	


	document.getElementById("BlockDesign0").addEventListener("click", function () {
		BlockDesign0.style.background = "#e4f7ff";
		BlockDesign1.style.background = "#0000000f";
		BlockDesign2.style.background = "#0000000f";
		BlockDesign3.style.background = "#0000000f";
		BlockDesign4.style.background = "#0000000f";
		BlockDesign5.style.background = "#0000000f";
		BlockDesign6.style.background = "#0000000f";
		BlockDesign7.style.background = "#0000000f";
		SelectedKnitTrimSleeve.style.background = "#FFFFFF";
		SelectedKnitTrimColar.style.background = "#FFFFFF";
	
		BlockSelectorForSolidColor.style.display = "block";
		BlockSelectorForDesignColor.style.display = "none";

		choosenDesign = 0;

		material_cleanKnitTreamColar.color = new THREE.Color (0xFFFFFF);
		material_cleanKnitTreamColar.needsUpdate = true;
		material_cleanKnitTreamSleeve.color = new THREE.Color (0xFFFFFF);
		material_cleanKnitTreamSleeve.needsUpdate = true;

		canvas1.remove(MenONeckDesign1SvgGroup, MenONeckDesign2SvgGroup, MenONeckDesign3SvgGroup, MenONeckDesign4SvgGroup, MenONeckDesign5SvgGroup, MenONeckDesign6SvgGroup, MenONeckDesign7SvgGroup);
		canvas1.add(MenONeckDesign0SvgGroup);
		MenONeckDesign0SvgGroup.sendBackwards()
		MenONeckDesign0SvgGroup.sendBackwards()
		MenONeckDesign0SvgGroup.sendBackwards()
		MenONeckDesign0SvgGroup.sendBackwards()
		MenONeckDesign0SvgGroup.sendBackwards()
		MenONeckDesign0SvgGroup.sendBackwards()
		MenONeckDesign0SvgGroup.sendBackwards()
		MenONeckDesign0SvgGroup.sendBackwards()
		MenONeckDesign0SvgGroup.sendBackwards()
		MenONeckDesign0SvgGroup.sendBackwards() 
		MenONeckDesign0SvgGroup.sendBackwards()

		canvas1.renderAll();
	})





	document.getElementById("BlockDesign1").addEventListener("click", function () {
		BlockDesign1.style.background = "#e4f7ff";
		BlockDesign0.style.background = "#0000000f";
		BlockDesign2.style.background = "#0000000f";
		BlockDesign3.style.background = "#0000000f";
		BlockDesign4.style.background = "#0000000f";
		BlockDesign5.style.background = "#0000000f";
		BlockDesign6.style.background = "#0000000f";
		BlockDesign7.style.background = "#0000000f";

		SelectedColorFarbe1.style.background = "#FFFFFF";
		SelectedColorFarbe2.style.background = "#75B6D2";
		SelectedColorFarbe3.style.background = "#02234C";
		SelectedKnitTrimSleeve.style.background = "#02234C";
		SelectedKnitTrimColar.style.background = "#FFFFFF";
	
		BlockSelectorForSolidColor.style.display = "none";
		BlockSelectorForDesignColor.style.display = "block";
		Farbe2.style.display = "flex";
		Farbe3.style.display = "flex";
		Farbe4.style.display = "none";
		Farbe5.style.display = "none";


		MenONeckDesign1SvgGroup.item(6).set('fill', "#FFFFFF");
		MenONeckDesign1SvgGroup.item(0).set('fill', "#FFFFFF");
		MenONeckDesign1SvgGroup.item(1).set('fill', "#FFFFFF");
		MenONeckDesign1SvgGroup.item(2).set('fill', "#FFFFFF");
		MenONeckDesign1SvgGroup.item(11).set('fill',"#FFFFFF");
		MenONeckDesign1SvgGroup.item(7).set('fill', "#75B6D2");
		MenONeckDesign1SvgGroup.item(12).set('fill', "#75B6D2");
		MenONeckDesign1SvgGroup.item(3).set('fill', "#02234C");
		MenONeckDesign1SvgGroup.item(4).set('fill', "#02234C");
		MenONeckDesign1SvgGroup.item(5).set('fill', "#02234C");
		MenONeckDesign1SvgGroup.item(8).set('fill', "#02234C");
		MenONeckDesign1SvgGroup.item(9).set('fill', "#02234C");
		MenONeckDesign1SvgGroup.item(13).set('fill', "#02234C");
		material_cleanKnitTreamColar.color = new THREE.Color (0xFFFFFF);
		material_cleanKnitTreamColar.needsUpdate = true;
		material_cleanKnitTreamSleeve.color = new THREE.Color (0x02234C);
		material_cleanKnitTreamSleeve.needsUpdate = true;
	
		choosenDesign = 1;

		//canvas1.clear()
		canvas1.remove( MenONeckDesign0SvgGroup, MenONeckDesign2SvgGroup, MenONeckDesign3SvgGroup, MenONeckDesign4SvgGroup, MenONeckDesign5SvgGroup, MenONeckDesign6SvgGroup, MenONeckDesign7SvgGroup);
		canvas1.add(MenONeckDesign1SvgGroup);
		MenONeckDesign1SvgGroup.sendBackwards()
		MenONeckDesign1SvgGroup.sendBackwards()
		MenONeckDesign1SvgGroup.sendBackwards()
		MenONeckDesign1SvgGroup.sendBackwards()
		MenONeckDesign1SvgGroup.sendBackwards()
		MenONeckDesign1SvgGroup.sendBackwards()
		MenONeckDesign1SvgGroup.sendBackwards()
		MenONeckDesign1SvgGroup.sendBackwards()
		MenONeckDesign1SvgGroup.sendBackwards()
		MenONeckDesign1SvgGroup.sendBackwards()
		MenONeckDesign1SvgGroup.sendBackwards() 
		MenONeckDesign1SvgGroup.sendBackwards()


		canvas1.renderAll();
	})


	document.getElementById("BlockDesign2").addEventListener("click", function () {
		BlockDesign2.style.background = "#e4f7ff";
		BlockDesign0.style.background = "#0000000f";
		BlockDesign1.style.background = "#0000000f";
		BlockDesign3.style.background = "#0000000f";
		BlockDesign4.style.background = "#0000000f";
		BlockDesign5.style.background = "#0000000f";
		BlockDesign6.style.background = "#0000000f";
		BlockDesign7.style.background = "#0000000f";

		SelectedColorFarbe1.style.background = "#FFFFFF";
		SelectedColorFarbe2.style.background = "#75B6D2";
		SelectedColorFarbe3.style.background = "#116196";
		SelectedKnitTrimSleeve.style.background = "#116196";
		SelectedKnitTrimColar.style.background = "#116196";
	
		BlockSelectorForSolidColor.style.display = "none";
		BlockSelectorForDesignColor.style.display = "block";
		Farbe2.style.display = "flex";
		Farbe3.style.display = "flex";
		Farbe4.style.display = "none";
		Farbe5.style.display = "none";
	
		choosenDesign = 2;

		MenONeckDesign2SvgGroup.item(5).set('fill', "#FFFFFF");
		MenONeckDesign2SvgGroup.item(6).set('fill', "#FFFFFF");
		MenONeckDesign2SvgGroup.item(0).set('fill', "#75B6D2");
		MenONeckDesign2SvgGroup.item(3).set('fill',"#75B6D2");
		MenONeckDesign2SvgGroup.item(1).set('fill', "#116196");
		MenONeckDesign2SvgGroup.item(2).set('fill', "#116196");
		MenONeckDesign2SvgGroup.item(4).set('fill', "#116196");
		MenONeckDesign2SvgGroup.item(8).set('fill', "#116196");
		MenONeckDesign2SvgGroup.item(10).set('fill', "#116196");

		//canvas1.clear()
		canvas1.remove( MenONeckDesign0SvgGroup, MenONeckDesign1SvgGroup, MenONeckDesign3SvgGroup, MenONeckDesign4SvgGroup, MenONeckDesign5SvgGroup, MenONeckDesign6SvgGroup, MenONeckDesign7SvgGroup);
		canvas1.add(MenONeckDesign2SvgGroup);
		MenONeckDesign2SvgGroup.sendBackwards()
		MenONeckDesign2SvgGroup.sendBackwards()
		MenONeckDesign2SvgGroup.sendBackwards()
		MenONeckDesign2SvgGroup.sendBackwards()
		MenONeckDesign2SvgGroup.sendBackwards()
		MenONeckDesign2SvgGroup.sendBackwards()
		MenONeckDesign2SvgGroup.sendBackwards()
		MenONeckDesign2SvgGroup.sendBackwards()
		MenONeckDesign2SvgGroup.sendBackwards()
		MenONeckDesign2SvgGroup.sendBackwards()
		MenONeckDesign2SvgGroup.sendBackwards() 
		MenONeckDesign2SvgGroup.sendBackwards()

		material_cleanKnitTreamColar.color = new THREE.Color (0x116196);
		material_cleanKnitTreamColar.needsUpdate = true;
		material_cleanKnitTreamSleeve.color = new THREE.Color (0x116196);
		material_cleanKnitTreamSleeve.needsUpdate = true;
		canvas1.renderAll();
	})



	document.getElementById("BlockDesign3").addEventListener("click", function () {
		BlockDesign3.style.background = "#e4f7ff";
		BlockDesign0.style.background = "#0000000f";
		BlockDesign1.style.background = "#0000000f";
		BlockDesign2.style.background = "#0000000f";
		BlockDesign4.style.background = "#0000000f";
		BlockDesign5.style.background = "#0000000f";
		BlockDesign6.style.background = "#0000000f";
		BlockDesign7.style.background = "#0000000f";

		SelectedColorFarbe1.style.background = "#75B6D2";
		SelectedColorFarbe2.style.background = "#116196";
		SelectedColorFarbe3.style.background = "#02234C";
		SelectedKnitTrimSleeve.style.background = "#02234C";
		SelectedKnitTrimColar.style.background = "#02234C";
	
		BlockSelectorForSolidColor.style.display = "none";
		BlockSelectorForDesignColor.style.display = "block";
		Farbe2.style.display = "flex";
		Farbe3.style.display = "flex";
		Farbe4.style.display = "none";
		Farbe5.style.display = "none";
	
		choosenDesign = 3;

		MenONeckDesign3SvgGroup.item(0).set('fill', '#02234C');
		MenONeckDesign3SvgGroup.item(1).set('fill', '#75B6D2');
		MenONeckDesign3SvgGroup.item(4).set('fill', '#75B6D2');
		MenONeckDesign3SvgGroup.item(7).set('fill', '#75B6D2');
		MenONeckDesign3SvgGroup.item(10).set('fill', '#75B6D2');
		MenONeckDesign3SvgGroup.item(2).set('fill', '#116196');
		MenONeckDesign3SvgGroup.item(5).set('fill', '#116196');
		MenONeckDesign3SvgGroup.item(8).set('fill', '#116196');
		MenONeckDesign3SvgGroup.item(11).set('fill', '#116196');
		MenONeckDesign3SvgGroup.item(3).set('fill', "#116196");
		MenONeckDesign3SvgGroup.item(6).set('fill', '#02234C');
		MenONeckDesign3SvgGroup.item(9).set('fill', '#02234C');
		MenONeckDesign3SvgGroup.item(12).set('fill', '#02234C');
		MenONeckDesign3SvgGroup.item(13).set('fill', '#02234C');
		MenONeckDesign3SvgGroup.item(14).set('fill', '#02234C');


		//canvas1.clear()
		canvas1.remove(MenONeckDesign0SvgGroup, MenONeckDesign1SvgGroup, MenONeckDesign2SvgGroup, MenONeckDesign4SvgGroup, MenONeckDesign5SvgGroup, MenONeckDesign6SvgGroup, MenONeckDesign7SvgGroup);
		canvas1.add(MenONeckDesign3SvgGroup);
		MenONeckDesign3SvgGroup.sendBackwards()
		MenONeckDesign3SvgGroup.sendBackwards()
		MenONeckDesign3SvgGroup.sendBackwards()
		MenONeckDesign3SvgGroup.sendBackwards()
		MenONeckDesign3SvgGroup.sendBackwards()
		MenONeckDesign3SvgGroup.sendBackwards()
		MenONeckDesign3SvgGroup.sendBackwards()
		MenONeckDesign3SvgGroup.sendBackwards()
		MenONeckDesign3SvgGroup.sendBackwards()
		MenONeckDesign3SvgGroup.sendBackwards()
		MenONeckDesign3SvgGroup.sendBackwards() 
		MenONeckDesign3SvgGroup.sendBackwards()

		material_cleanKnitTreamColar.color = new THREE.Color (0x02234C);
		material_cleanKnitTreamColar.needsUpdate = true;
		material_cleanKnitTreamSleeve.color = new THREE.Color (0x02234C);
		material_cleanKnitTreamSleeve.needsUpdate = true;
		canvas1.renderAll();
	})



	document.getElementById("BlockDesign4").addEventListener("click", function () {
		BlockDesign4.style.background = "#e4f7ff";
		BlockDesign0.style.background = "#0000000f";
		BlockDesign1.style.background = "#0000000f";
		BlockDesign2.style.background = "#0000000f";
		BlockDesign3.style.background = "#0000000f";
		BlockDesign5.style.background = "#0000000f";
		BlockDesign6.style.background = "#0000000f";
		BlockDesign7.style.background = "#0000000f";

		SelectedColorFarbe1.style.background = "#02234C";
		SelectedColorFarbe2.style.background = "#75B6D2";
		SelectedKnitTrimSleeve.style.background = "#75B6D2";
		SelectedKnitTrimColar.style.background = "#02234C";
	
		BlockSelectorForSolidColor.style.display = "none";
		BlockSelectorForDesignColor.style.display = "block";
		Farbe2.style.display = "flex";
		Farbe3.style.display = "none";
		Farbe4.style.display = "none";
		Farbe5.style.display = "none";
	
		choosenDesign = 4;

		MenONeckDesign4SvgGroup.item(0).set('fill', '#02234C');
		MenONeckDesign4SvgGroup.item(3).set('fill', '#75B6D2');
		MenONeckDesign4SvgGroup.item(4).set('fill', '#75B6D2');
		MenONeckDesign4SvgGroup.item(1).set('fill', '#02234C');
		MenONeckDesign4SvgGroup.item(2).set('fill', '#02234C');
		MenONeckDesign4SvgGroup.item(5).set('fill', '#02234C');
		MenONeckDesign4SvgGroup.item(7).set('fill', '#02234C');
		MenONeckDesign4SvgGroup.item(9).set('fill', '#02234C');
		MenONeckDesign4SvgGroup.item(11).set('fill', '#02234C');
		MenONeckDesign4SvgGroup.item(6).set('fill', '#75B6D2');
		MenONeckDesign4SvgGroup.item(8).set('fill', '#75B6D2');
		MenONeckDesign4SvgGroup.item(10).set('fill', '#75B6D2');
		MenONeckDesign4SvgGroup.item(12).set('fill', '#75B6D2');



		//canvas1.clear()
		canvas1.remove(MenONeckDesign0SvgGroup, MenONeckDesign1SvgGroup, MenONeckDesign2SvgGroup, MenONeckDesign3SvgGroup, MenONeckDesign5SvgGroup, MenONeckDesign6SvgGroup, MenONeckDesign7SvgGroup);
		canvas1.add(MenONeckDesign4SvgGroup);
		MenONeckDesign4SvgGroup.sendBackwards()
		MenONeckDesign4SvgGroup.sendBackwards()
		MenONeckDesign4SvgGroup.sendBackwards()
		MenONeckDesign4SvgGroup.sendBackwards()
		MenONeckDesign4SvgGroup.sendBackwards()
		MenONeckDesign4SvgGroup.sendBackwards()
		MenONeckDesign4SvgGroup.sendBackwards()
		MenONeckDesign4SvgGroup.sendBackwards()
		MenONeckDesign4SvgGroup.sendBackwards()
		MenONeckDesign4SvgGroup.sendBackwards()
		MenONeckDesign4SvgGroup.sendBackwards() 
		MenONeckDesign4SvgGroup.sendBackwards()

		material_cleanKnitTreamColar.color = new THREE.Color (0x02234C);
		material_cleanKnitTreamColar.needsUpdate = true;
		material_cleanKnitTreamSleeve.color = new THREE.Color (0x75B6D2);
		material_cleanKnitTreamSleeve.needsUpdate = true;
		canvas1.renderAll();
	})




	document.getElementById("BlockDesign5").addEventListener("click", function () {
		BlockDesign5.style.background = "#e4f7ff";
		BlockDesign0.style.background = "#0000000f";
		BlockDesign1.style.background = "#0000000f";
		BlockDesign2.style.background = "#0000000f";
		BlockDesign3.style.background = "#0000000f";
		BlockDesign4.style.background = "#0000000f";
		BlockDesign6.style.background = "#0000000f";
		BlockDesign7.style.background = "#0000000f";

		SelectedColorFarbe1.style.background = "#FFFFFF";
		SelectedColorFarbe2.style.background = "#02234C";
		SelectedColorFarbe3.style.background = "#3E8BB9";
		SelectedColorFarbe4.style.background = "#116196";
		SelectedColorFarbe5.style.background = "#75B6D2";
		SelectedKnitTrimSleeve.style.background = "#3E8BB9";
		SelectedKnitTrimColar.style.background = "#75B6D2";
	
		BlockSelectorForSolidColor.style.display = "none";
		BlockSelectorForDesignColor.style.display = "block";
		Farbe2.style.display = "flex";
		Farbe3.style.display = "flex";
		Farbe4.style.display = "flex";
		Farbe5.style.display = "flex";
	
		choosenDesign = 5;

		MenONeckDesign5SvgGroup.item(3).set('fill', "#3e8bb9");
		MenONeckDesign5SvgGroup.item(6).set('fill', "#3e8bb9");
		MenONeckDesign5SvgGroup.item(11).set('fill', "#3e8bb9");
		MenONeckDesign5SvgGroup.item(16).set('fill', "#3e8bb9");
		MenONeckDesign5SvgGroup.item(2).set('fill', "#ffffff");
		MenONeckDesign5SvgGroup.item(5).set('fill', "#ffffff");
		MenONeckDesign5SvgGroup.item(7).set('fill', "#ffffff");
		MenONeckDesign5SvgGroup.item(8).set('fill', "#ffffff");
		MenONeckDesign5SvgGroup.item(13).set('fill', "#ffffff");
		MenONeckDesign5SvgGroup.item(18).set('fill', "#ffffff");
		MenONeckDesign5SvgGroup.item(17).set('fill', "#02234c");
		MenONeckDesign5SvgGroup.item(1).set('fill', "#02234c");
		MenONeckDesign5SvgGroup.item(4).set('fill', "#02234c");
		MenONeckDesign5SvgGroup.item(12).set('fill', "#02234c");
		MenONeckDesign5SvgGroup.item(15).set('fill', "#116196");
		MenONeckDesign5SvgGroup.item(10).set('fill', "#116196");
		MenONeckDesign5SvgGroup.item(0).set('fill', "#75b6d2");
		MenONeckDesign5SvgGroup.item(14).set('fill', "#75b6d2");
		MenONeckDesign5SvgGroup.item(9).set('fill', "#75b6d2");


		//canvas1.clear()
		canvas1.remove(MenONeckDesign0SvgGroup, MenONeckDesign1SvgGroup, MenONeckDesign2SvgGroup, MenONeckDesign3SvgGroup, MenONeckDesign4SvgGroup, MenONeckDesign6SvgGroup, MenONeckDesign7SvgGroup);
		canvas1.add(MenONeckDesign5SvgGroup);
		MenONeckDesign5SvgGroup.sendBackwards()
		MenONeckDesign5SvgGroup.sendBackwards()
		MenONeckDesign5SvgGroup.sendBackwards()
		MenONeckDesign5SvgGroup.sendBackwards()
		MenONeckDesign5SvgGroup.sendBackwards()
		MenONeckDesign5SvgGroup.sendBackwards()
		MenONeckDesign5SvgGroup.sendBackwards()
		MenONeckDesign5SvgGroup.sendBackwards()
		MenONeckDesign5SvgGroup.sendBackwards()
		MenONeckDesign5SvgGroup.sendBackwards()
		MenONeckDesign5SvgGroup.sendBackwards() 
		MenONeckDesign5SvgGroup.sendBackwards()

		material_cleanKnitTreamColar.color = new THREE.Color (0x75B6D2);
		material_cleanKnitTreamColar.needsUpdate = true;
		material_cleanKnitTreamSleeve.color = new THREE.Color (0x75B6D2);
		material_cleanKnitTreamSleeve.needsUpdate = true;
		canvas1.renderAll();
	})



	document.getElementById("BlockDesign6").addEventListener("click", function () {
		BlockDesign6.style.background = "#e4f7ff";
		BlockDesign0.style.background = "#0000000f";
		BlockDesign1.style.background = "#0000000f";
		BlockDesign2.style.background = "#0000000f";
		BlockDesign3.style.background = "#0000000f";
		BlockDesign4.style.background = "#0000000f";
		BlockDesign5.style.background = "#0000000f";
		BlockDesign7.style.background = "#0000000f";

		SelectedColorFarbe1.style.background = "#FFFFFF";
		SelectedColorFarbe2.style.background = "#02234C";
		SelectedColorFarbe3.style.background = "#116196";
		SelectedColorFarbe4.style.background = "#3E8BB9";
		SelectedColorFarbe5.style.background = "#75B6D2";
		SelectedKnitTrimSleeve.style.background = "#75B6D2";
		SelectedKnitTrimColar.style.background = "#75B6D2";
	
		BlockSelectorForSolidColor.style.display = "none";
		BlockSelectorForDesignColor.style.display = "block";
		Farbe2.style.display = "flex";
		Farbe3.style.display = "flex";
		Farbe4.style.display = "flex";
		Farbe5.style.display = "flex";
	
		choosenDesign = 6;

		MenONeckDesign6SvgGroup.item(0).set('fill', "#75B6D2");
		MenONeckDesign6SvgGroup.item(5).set('fill', "#75B6D2");
		MenONeckDesign6SvgGroup.item(6).set('fill', "#75B6D2");
		MenONeckDesign6SvgGroup.item(13).set('fill', "#75B6D2");
		MenONeckDesign6SvgGroup.item(8).set('fill', "#75B6D2");
		MenONeckDesign6SvgGroup.item(3).set('fill', "#75B6D2");
		MenONeckDesign6SvgGroup.item(4).set('fill', "#75B6D2");
		MenONeckDesign6SvgGroup.item(7).set('fill', "#FFFFFF");
		MenONeckDesign6SvgGroup.item(12).set('fill', "#FFFFFF");
		MenONeckDesign6SvgGroup.item(1).set('fill', "#02234C");
		MenONeckDesign6SvgGroup.item(2).set('fill', "#02234C");
		MenONeckDesign6SvgGroup.item(11).set('fill', "#02234C");
		MenONeckDesign6SvgGroup.item(16).set('fill', "#02234C");
		MenONeckDesign6SvgGroup.item(10).set('fill', "#116196");
		MenONeckDesign6SvgGroup.item(15).set('fill', "#116196");
		MenONeckDesign6SvgGroup.item(9).set('fill', "#3E8BB9");
		MenONeckDesign6SvgGroup.item(14).set('fill', "#3E8BB9");


		//canvas1.clear()
		canvas1.remove(MenONeckDesign0SvgGroup, MenONeckDesign1SvgGroup, MenONeckDesign2SvgGroup, MenONeckDesign3SvgGroup, MenONeckDesign4SvgGroup, MenONeckDesign5SvgGroup, MenONeckDesign7SvgGroup);
		canvas1.add(MenONeckDesign6SvgGroup);
		MenONeckDesign6SvgGroup.sendBackwards()
		MenONeckDesign6SvgGroup.sendBackwards()
		MenONeckDesign6SvgGroup.sendBackwards()
		MenONeckDesign6SvgGroup.sendBackwards()
		MenONeckDesign6SvgGroup.sendBackwards()
		MenONeckDesign6SvgGroup.sendBackwards()
		MenONeckDesign6SvgGroup.sendBackwards()
		MenONeckDesign6SvgGroup.sendBackwards()
		MenONeckDesign6SvgGroup.sendBackwards()
		MenONeckDesign6SvgGroup.sendBackwards()
		MenONeckDesign6SvgGroup.sendBackwards() 
		MenONeckDesign6SvgGroup.sendBackwards()

		material_cleanKnitTreamColar.color = new THREE.Color (0x75B6D2);
		material_cleanKnitTreamColar.needsUpdate = true;
		material_cleanKnitTreamSleeve.color = new THREE.Color (0x75B6D2);
		material_cleanKnitTreamSleeve.needsUpdate = true;
		canvas1.renderAll();
	})



	document.getElementById("BlockDesign7").addEventListener("click", function () {
		BlockDesign7.style.background = "#e4f7ff";
		BlockDesign0.style.background = "#0000000f";
		BlockDesign1.style.background = "#0000000f";
		BlockDesign2.style.background = "#0000000f";
		BlockDesign3.style.background = "#0000000f";
		BlockDesign4.style.background = "#0000000f";
		BlockDesign5.style.background = "#0000000f";
		BlockDesign6.style.background = "#0000000f";

		SelectedColorFarbe1.style.background = "#FFFFFF";
		SelectedColorFarbe2.style.background = "#75b6d2";
		SelectedKnitTrimSleeve.style.background = "#75b6d2";
		SelectedKnitTrimColar.style.background = "#75b6d2";
	
		BlockSelectorForSolidColor.style.display = "none";
		BlockSelectorForDesignColor.style.display = "block";
		Farbe2.style.display = "flex";
		Farbe3.style.display = "none";
		Farbe4.style.display = "none";
		Farbe5.style.display = "none";
	
		choosenDesign = 7;


		MenONeckDesign7SvgGroup.item(2).set('fill', "#75b6d2");
		MenONeckDesign7SvgGroup.item(4).set('fill', "#75b6d2");
		MenONeckDesign7SvgGroup.item(0).set('fill', "#75b6d2");
		MenONeckDesign7SvgGroup.item(5).set('fill', "#75b6d2");
		MenONeckDesign7SvgGroup.item(6).set('fill', "#75b6d2");
		MenONeckDesign7SvgGroup.item(8).set('fill', "#75b6d2");
		MenONeckDesign7SvgGroup.item(10).set('fill', "#75b6d2");
		MenONeckDesign7SvgGroup.item(1).set('fill', "#FFFFFF");
		MenONeckDesign7SvgGroup.item(3).set('fill', "#FFFFFF");
		MenONeckDesign7SvgGroup.item(7).set('fill', "#FFFFFF");
		MenONeckDesign7SvgGroup.item(9).set('fill', "#FFFFFF");


		//canvas1.clear()
		canvas1.remove(MenONeckDesign0SvgGroup, MenONeckDesign1SvgGroup, MenONeckDesign2SvgGroup, MenONeckDesign3SvgGroup, MenONeckDesign4SvgGroup, MenONeckDesign5SvgGroup, MenONeckDesign6SvgGroup);
		canvas1.add(MenONeckDesign7SvgGroup);
		MenONeckDesign7SvgGroup.sendBackwards()
		MenONeckDesign7SvgGroup.sendBackwards()
		MenONeckDesign7SvgGroup.sendBackwards()
		MenONeckDesign7SvgGroup.sendBackwards()
		MenONeckDesign7SvgGroup.sendBackwards()
		MenONeckDesign7SvgGroup.sendBackwards()
		MenONeckDesign7SvgGroup.sendBackwards()
		MenONeckDesign7SvgGroup.sendBackwards()
		MenONeckDesign7SvgGroup.sendBackwards()
		MenONeckDesign7SvgGroup.sendBackwards()
		MenONeckDesign7SvgGroup.sendBackwards() 
		MenONeckDesign7SvgGroup.sendBackwards()

		material_cleanKnitTreamColar.color = new THREE.Color (0x75B6D2);
		material_cleanKnitTreamColar.needsUpdate = true;
		material_cleanKnitTreamSleeve.color = new THREE.Color (0x75B6D2);
		material_cleanKnitTreamSleeve.needsUpdate = true;
		canvas1.renderAll();
	})





	//applying colors from HTML hue whell to three.js model via cavnas1 - design 1
	/* document.getElementById("SelectedColorFarbe1").addEventListener('input', (e) => {
		document.getElementById("selectedHueFarbe1").innerHTML = e.target.value
		
		//MenONeckDesign1FrontColor1
		MenONeckDesign1SvgGroup.item(6).set('fill', e.target.value);

		//MenONeckDesign1KnitTrimTop
		MenONeckDesign1SvgGroup.item(0).fill = e.target.value;

		//MenONeckDesign1SleeveRight
		MenONeckDesign1SvgGroup.item(1).fill = e.target.value;

		//MenONeckDesign1SleeveLeft
		MenONeckDesign1SvgGroup.item(2).fill = e.target.value;

		//MenONeckDesign1BackColor1
		MenONeckDesign1SvgGroup.item(11).fill = e.target.value;

		canvas1.renderAll();
	})

	document.getElementById("SelectedColorFarbe2").addEventListener('input', (e) => {
		document.getElementById("selectedHueFarbe2").innerHTML = e.target.value

		//MenONeckDesign1FrontColor2
		MenONeckDesign1SvgGroup.item(7).set('fill', e.target.value);
		//MenONeckDesign1BackColor2
		MenONeckDesign1SvgGroup.item(12).fill = e.target.value;

		canvas1.renderAll();
	})

	document.getElementById("SelectedColorFarbe3").addEventListener('input', (e) => {
		document.getElementById("selectedHueFarbe3").innerHTML = e.target.value;

		//MenONeckDesign1SideLeft
		MenONeckDesign1SvgGroup.item(3).set('fill', e.target.value);

		//MenONeckDesign1SleeveLeftKnitTrim
		MenONeckDesign1SvgGroup.item(4).fill = e.target.value;

		//MenONeckDesign1SleeveRightKnitTrim
		MenONeckDesign1SvgGroup.item(5).fill = e.target.value;

		//MenONeckDesign1FrontColor3
		MenONeckDesign1SvgGroup.item(8).fill = e.target.value;

		//MenONeckDesign1SideRight
		MenONeckDesign1SvgGroup.item(9).fill = e.target.value;

		//MenONeckDesign1BackColor3
		MenONeckDesign1SvgGroup.item(13).fill = e.target.value;

		canvas1.renderAll();
	})
	 */
	








	setHelperFuncs(canvas1);
}
//end of function init()















function animate() {
	requestAnimationFrame(animate);

	texture1.needsUpdate = true;
	material_cleanKnitTreamSleeve.needsUpdate = true;
	material_cleanKnitTreamColar.needsUpdate = true;

	//Fabric_Simple_Front.needsUpdate = true;

	/* if (resizeRendererToDisplaySize(renderer)) {
		const canvas = renderer.domElement;
		camera.aspect = canvas.clientWidth / canvas.clientHeight;
	} */
		
	container = document.getElementById(containerName);
	
	if (container.offsetWidth != containerWidth || container.offsetHeight != containerHeight) {
		containerWidth = container.clientWidth;
		containerHeight = container.clientHeight;
		renderer.setSize(containerWidth, containerWidth);
		camera.aspect = 1.0; //container.clientWidth / container.clientHeight;
		camera.updateProjectionMatrix();
	}

	//camera.updateProjectionMatrix(); 
	controls.update();
	renderer.render(scene, camera);
}
























//fabricjs customiseControls customization

fabric.Canvas.prototype.customiseControls({
    tl: {
        action: 'move',
    },
    tr: {
        action: 'rotate'
    },
    bl: {
        action: 'remove',
        //cursor: 'pointer'
    },
    br: {
        action: 'scale',
    },
    mb: {
        action: 'move',
        //cursor: 'pointer'
    },
	ml: {
		action: 'move',
        //action: 'rotate',
        //cursor: 'cow.png'
    },

    mr: {
		action: 'move',
        /* action: function( e, target ) {
            target.set( {
                left: 200
            } );
            canvas.renderAll();
        } */
     },
     // only is hasRotatingPoint is not set to false
     mt: {
		action: 'move',
        //action: 'rotate',
        //cursor: 'cow.png'
     },
}, function() {
    canvas.renderAll();
} );




fabric.Object.prototype.customiseCornerIcons({
	ssettings: {
		borderColor: '#44444400',
		cornerSize: 25,
		//cornerBackgroundColor: 'red',
		cornerShape: 'circle',
		cornerPadding: 10,
	},
	tl: {
		icon: './icons/move.png',
		settings: {
			cornerShape: 'circle',
			cornerBackgroundColor: '#44444455',
			cornerPadding: 10,
			cornerSize: 25,
		},
	},
	tr: {

		icon: './icons/rotate.png',
		settings: {
			cornerShape: 'circle',
			cornerBackgroundColor: '#44444455',
			cornerPadding: 10,
			cornerSize: 25,
		},
	},
	bl: {
		icon: './icons/trash.png',
		settings: {
			cornerShape: 'circle',
			cornerBackgroundColor: '#44444455',
			cornerPadding: 10,
			cornerSize: 25,
		},
	},
	br: {
		icon: './icons/expand-solid.png',
		settings: {
			cornerShape: 'circle',
			cornerBackgroundColor: '#44444455',
			cornerPadding: 10,
			cornerSize: 25,
		},
	},

	/////////////////////////////////////////
	// only is hasRotatingPoint is not set to false
	mt: {
		icon: './icons/empty.png',
		settings: {
			cornerShape: 'rect',
			cornerBackgroundColor: '#44444400',
		},
	},

	//hidden middle points
	mb: {
		icon: './icons/empty.png',
		settings: {
			cornerShape: 'rect',
			cornerBackgroundColor: '#44444400',
		},
	},

	mt: {
		icon: './icons/empty.png',
		settings: {
			cornerShape: 'rect',
			cornerBackgroundColor: '#44444400',
		},
	},
	mr: {
		icon: './icons/empty.png',
		settings: {
			cornerShape: 'rect',
			cornerBackgroundColor: '#44444400',
		},
	},

	mr: {
		icon: './icons/empty.png',
		settings: {
			cornerShape: 'rect',
			cornerBackgroundColor: '#44444400',
		},
	},

	ml: {
		icon: './icons/empty.png',
		settings: {
			cornerShape: 'rect',
			cornerBackgroundColor: '#44444400',
		},
	},


}, function() {
	canvas1.renderAll();
} );

//fabricjs customiseControls customization





//to prevent fliping of fabricjs object on model when scaling
fabric.Object.prototype.lockScalingFlip = true;

























// Fabric.js patch
fabric.Canvas.prototype.getPointer =  function (e, ignoreZoom) {
	var obb;
	if (this._absolutePointer && !ignoreZoom) {
		return this._absolutePointer;
	}
	if (this._pointer && ignoreZoom) {
		return this._pointer;
	}
	var pointer = fabric.util.getPointer(e),
		upperCanvasEl = this.upperCanvasEl,
		bounds = upperCanvasEl.getBoundingClientRect(),
		boundsWidth = bounds.width || 0,
		boundsHeight = bounds.height || 0,
		cssScale;

	if (!boundsWidth || !boundsHeight ) {
		if ('top' in bounds && 'bottom' in bounds) {
			boundsHeight = Math.abs( bounds.top - bounds.bottom );
		}
		if ('right' in bounds && 'left' in bounds) {
			boundsWidth = Math.abs( bounds.right - bounds.left );
		}
	}
	


	this.calcOffset();
	pointer.x = pointer.x - this._offset.left;
	pointer.y = pointer.y - this._offset.top;
	/* BEGIN PATCH CODE */
	if (e.target !== this.upperCanvasEl) {
		var positionOnScene = getPositionOnScene(container, e);
		if(positionOnScene) {
			pointer.x = positionOnScene.x;
			pointer.y = positionOnScene.y;
			activeID = positionOnScene.id;
			
			if (activeCanvas) {
				obb = activeCanvas.getActiveObject();
				if (obb) {
					if (activeID!=oldCanvas) {
					
						obb.lockMovementX = true; 
						obb.lockMovementY = true;
					} else {
						obb.lockMovementX = false; 
						obb.lockMovementY = false;
					}
				}
			}
		}
	}
	  /* END PATCH CODE */
	if (!ignoreZoom) {
		pointer = this.restorePointerVpt(pointer);
	}

	if (boundsWidth === 0 || boundsHeight === 0) {
		cssScale = { width: 1, height: 1 };
	}
	else {
		cssScale = {
			width: upperCanvasEl.width / boundsWidth,
			height: upperCanvasEl.height / boundsHeight
		};
	}

	return {
		x: pointer.x * cssScale.width,
		y: pointer.y * cssScale.height
	};
}





//new uploader may 2022

var targetFiles, userimageURL;
function attachUserSelectedPictureToCanvas1(e) {

	targetFiles = e.target.files[0];     
	userimageURL = URL.createObjectURL( targetFiles );

	newGFX(canvas1, userimageURL, 200, 700, 0.2, 0.2, 0)

}



















/**
* Zoom in and out of the model
*/

const evt = new Event('wheel', {bubbles: true, cancelable: true});

const zoomInBtn = document.querySelectorAll('.zoom');
zoomInBtn.forEach(btn => btn.addEventListener('click', () => {
	evt.deltaY = -240;
	canvas.dispatchEvent(evt);
}));

const zoomOutBtn = document.querySelectorAll('.zoom-out');
zoomOutBtn.forEach(btn => btn.addEventListener('click', () => {
	evt.deltaY = +240;
	canvas.dispatchEvent(evt);
}));












//⬇️ mouse up and down, window  listeners





/*window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
    camera.aspect = containerHeight / containerWidth;
	renderer.setSize(containerWidth, containerWidth);
	camera.updateProjectionMatrix();
}

*/





var maxScaleX = 0.7;
var maxScaleY = 0.7;

var maxScaleX_forText = 5.3;
var maxScaleY_forText = 5.3;

let activeObjectForScaleCorrection, activeObjectForScaleCorrection_type;


container.addEventListener("mouseup", onMouseUpEvt, false);


function onMouseUpEvt(evt) {

	evt.preventDefault();
	
	activeObjectForScaleCorrection = canvas1.getActiveObject();
	activeObjectForScaleCorrection_type = canvas1.getActiveObject().get('type')

	console.log(canvas1.getActiveObject().get);


	if(activeObjectForScaleCorrection) {
	
		//let's check either current object text or picture and if text, apply specific rules for rescaling
		if (activeObjectForScaleCorrection_type == 'text') {

			if(activeObjectForScaleCorrection.scaleX >= maxScaleX_forText || activeObjectForScaleCorrection.scaleY >= maxScaleY_forText) {
				activeObjectForScaleCorrection.scaleX = maxScaleX_forText;
				activeObjectForScaleCorrection.scaleY = maxScaleY_forText; 
			}

		} else {

			if(activeObjectForScaleCorrection.scaleX > maxScaleX || activeObjectForScaleCorrection.scaleY > maxScaleY) {
				activeObjectForScaleCorrection.scaleX = maxScaleX;
				activeObjectForScaleCorrection.scaleY = maxScaleY; 
			}
		}   
	}

} 






container.addEventListener("mousedown", onMouseEvt, false);

function onMouseEvt(evt) {

	evt.preventDefault();

		areasTextPositioning = getPositionOnScene(container, evt);
		//areasPicturePositioning = getPositionOnScene(container, evt);

		switch (event.which) {
			case 1:
				const positionOnScene = getPositionOnScene(container, evt);

				//console.log(positionOnScene)

				if (positionOnScene) {
					const canvasRect = canvas1._offset;
					const simEvt = new MouseEvent(evt.type, {
						clientX: canvasRect.left + positionOnScene.x,
						clientY: canvasRect.top + positionOnScene.y
					});
					const deEvt = new MouseEvent(evt.type, {
						clientX: canvasRect.left,
						clientY: canvasRect.top
					});
					
					activeID = positionOnScene.id;
					
					if (positionOnScene.id==id_f) { activeCanvas = canvas1; } else { canvas1.upperCanvasEl.dispatchEvent(deEvt); }
			
					activeCanvas.upperCanvasEl.dispatchEvent(simEvt);
					
					activeObject = activeCanvas.getActiveObject();

					if (activeObject) {
					controls.enabled = false;
						if (activeObject.typ) {
							activeTyp = activeObject.typ; 
						} 
						else { 
							activeTyp = 2; 
						}
					} 
					else { 
						activeTyp = 0; 
						controls.enabled = true;
					}
					if (activeTyp == 1) { $('#graphics-tab').tab('show') }
					if (activeTyp == 2) { $('#text-tab').tab('show'); setTextControls(); }
					if (activeTyp == 3) { $('#vector-tab').tab('show'); setVecControls(); }
					
				}
				break;
			default:
			console.log("weird mouse event");
		}
	
}






function getPositionOnScene(sceneContainer, evt) {

	var array = getMousePosition(container, evt.clientX, evt.clientY);
	onClickPosition.fromArray(array);
	onClickPosition.x = onClickPosition.x/containerWidth*document.getElementById(containerName).offsetWidth;
	onClickPosition.y = onClickPosition.y/containerWidth*document.getElementById(containerName).offsetHeight;
	var intersects = getIntersects(onClickPosition, group1.children);

	if (intersects.length > 0) {

		if (intersects[0].uv) {
			var uv = intersects[0].uv;
			intersects[0].object.material.map.transformUv(uv);
			//console.log("f  "+uv.x+"  "+" / "+uv.y);
			return {
				x: getRealPosition('x', uv.x),
				y: getRealPosition('y', uv.y),
				id: intersects[0].object.id
			}
		}
	} else {
		//controls.enableRotate  = true;
		//controls.handleMouseMoveRotate(evt);
	}
	return null 
}


function getRealPosition(axis, value) {
	let CORRECTION_VALUE = axis === "x" ? 4.5 : 5.5;
	return Math.round(value * 2560) - CORRECTION_VALUE;
}

var getMousePosition = function(dom, x, y) {
	var rect = dom.getBoundingClientRect();
	return [(x - rect.left) / rect.width, (y - rect.top) / rect.height];
};

var getIntersects = function(point, objects) {
	mouse.set(point.x * 2 - 1, -(point.y * 2) + 1);
	raycaster.setFromCamera(mouse, camera);
	return raycaster.intersectObjects(objects, true);
};




function setHelperFuncs(canv) {

	canv.preserveObjectStacking = true;
	
	canv.on('selection:created', function () {
		oldCanvas = activeID;
	});
	
	canv.on('selection:updated', function () {
		oldCanvas = activeID;
	});
	
	
	canv.on('object:rotating', function(e) {
		var p = e.target;
		
		if (p) {
			p.setCoords();

			var oro = p.get('angle');
			
			if (oro>356 || oro<4) {
				p.set('angle', 0.0);
			}
			if (oro>86 && oro<94) {
				p.set('angle', 90.0);
			}
			if (oro>176 && oro<184) {
				p.set('angle', 180.0);
			}
			if (oro>266 && oro<274) {
				p.set('angle', 270.0);
			}
			
			if (oro>41 && oro<49) {
				p.set('angle', 45.0);
			}
			if (oro>131 && oro<139) {
				p.set('angle', 135.0);
			}
			if (oro>221 && oro<229) {
				p.set('angle', 225.0);
			}
			if (oro>311 && oro<319) {
				p.set('angle', 315.0);
			}
			
			p.setCoords();
			
		}	
	});
	
	canv.on('object:moving', function(e) {
		var p = e.target;

		if (oldCanvas != activeID) {
			console.log("Wechsel!");
		}
		
		if (p) {
			p.setCoords();

			var bo = p.getBoundingRect();
			
			var pox = (bo.left+bo.width*0.5);
			var poy = (bo.top+bo.height*0.5);
			
			var mix = 512;
			var miy = 512;
			
			if (poy>miy-6 && poy<miy+6) { 
				p.top = miy;
			}
		
			p.setCoords();
	
		}
	});
}




















function loadGrafik(logoname, logourl) {
	imageanzahl += 1;
	var ur = mainfolder+logourl;
	
	grafiken[imageanzahl] = fabric.Image.fromURL(ur);
	htmlgrafiken[imageanzahl] = new Image();
	htmlgrafiken[imageanzahl].src = ur;
	grafikurls[imageanzahl] = ur;
	imagename[imageanzahl] = logoname;
	grafikListe();
}





//loadIMG( canvas1, 0, 512, 600, 1.5, 1.5);	
function addIMG( canv, iurl, x, y, sx, sy) {

	fabric.Image.fromURL(iurl, function(myImg0) {
	var img0 = myImg0.set({ left: x, top: y });
		img0.transparentCorners = false;
		img0.originX = "center";
		img0.originY = "center";
		img0.scaleX = sx;
		img0.scaleY = sy;
		img0.cornerSize = 0;
		img0.borderScaleFactor = 4;
		img0.centeredScaling = true;
		img0.typ = 1;
		canv.add(img0); 
	});
	
}




















//initiate adding custom text and pictures on selected  (click) area




//------pictures 
document.getElementById("addAreaSpecificGFX").addEventListener("click", function() {

	if (addAreaSpecificGFX.value === '')
	{window.alert('Please upload or select a picture (jpg, png, svg), or wait when current picture finish uploading'); 
		c.style.cursor = "default";
		document.getElementById("shirtObjectsAreasQuestion").style.display = "none";
		document.getElementById("c").removeEventListener('click', addPictureToSelectedArea); 
		//if we want transparent or other mesh while adding active
		/* Fabric_Simple_Front.opacity = 1;
		Fabric_Simple_Front.wireframe = false;
		*/
		controls.autoRotate = false;
	}
	else {
		
		// to reset/disable "if we want transparent or other mesh while adding active"
		/* Fabric_Simple_Front.opacity = 0.8
		Fabric_Simple_Front.wireframe = true*/

		controls.autoRotate = true; 
		c.style.cursor = "copy";
		document.getElementById("shirtObjectsAreasQuestion").style.display = "block";
		document.getElementById("c").addEventListener("click", addPictureToSelectedArea);

	}

});





function addPictureToSelectedArea() {

	newGFX(canvas1, document.getElementById("addAreaSpecificGFX").value, areasTextPositioning.x, areasTextPositioning.y, 0.5, 0.5, 0);

	c.style.cursor = "default";
	document.getElementById("shirtObjectsAreasQuestion").style.display = "none";

	document.getElementById("c").removeEventListener('click', addPictureToSelectedArea); 

	controls.autoRotate = false; 

	document.getElementById("addAreaSpecificGFX").value = '';

	titleTextMaterials2inner.style.color = "grey"
	document.getElementById("titleTextMaterials2inner").innerHTML = "<i>Choose ready-made pictures:</i>";

	BlockLogoPreset1.style.backgroundColor = "#0000000f";
	BlockLogoPreset2.style.backgroundColor = "#0000000f";
	BlockLogoPreset3.style.backgroundColor = "#0000000f";
	BlockLogoPreset4.style.backgroundColor = "#0000000f";
	BlockLogoPreset5.style.backgroundColor = "#0000000f";
	BlockLogoPreset6.style.backgroundColor = "#0000000f";
	BlockLogoPreset7.style.backgroundColor = "#0000000f";
	BlockLogoPreset8.style.backgroundColor = "#0000000f";

	//1 - 14, 10; 0 - 10,8 
};








//pictures presets 

document.getElementById("BlockLogoPreset1").addEventListener("click", function() {
	document.getElementById("titleTextMaterials2inner").innerHTML = "<b>↖ Now Press + </b>";
	titleTextMaterials2inner.style.color = "#e25129c7"
	BlockLogoPreset1.style.backgroundColor = "#bbbbbb"
	document.getElementById("addAreaSpecificGFX").value = 'logos/logo.png';
	//BlockLogoPreset1.style.backgroundColor = "#0000000f";
	BlockLogoPreset2.style.backgroundColor = "#0000000f";
	BlockLogoPreset3.style.backgroundColor = "#0000000f";
	BlockLogoPreset4.style.backgroundColor = "#0000000f";
	BlockLogoPreset5.style.backgroundColor = "#0000000f";
	BlockLogoPreset6.style.backgroundColor = "#0000000f";
	BlockLogoPreset7.style.backgroundColor = "#0000000f";
	BlockLogoPreset8.style.backgroundColor = "#0000000f";
}); 


document.getElementById("BlockLogoPreset2").addEventListener("click", function() {
	document.getElementById("titleTextMaterials2inner").innerHTML = "<b>↖ Now Press + </b>";
	titleTextMaterials2inner.style.color = "#e25129c7"
	BlockLogoPreset2.style.backgroundColor = "#bbbbbb"
	document.getElementById("addAreaSpecificGFX").value = 'logos/logo1.png';
	BlockLogoPreset1.style.backgroundColor = "#0000000f";
	//BlockLogoPreset2.style.backgroundColor = "#0000000f";
	BlockLogoPreset3.style.backgroundColor = "#0000000f";
	BlockLogoPreset4.style.backgroundColor = "#0000000f";
	BlockLogoPreset5.style.backgroundColor = "#0000000f";
	BlockLogoPreset6.style.backgroundColor = "#0000000f";
	BlockLogoPreset7.style.backgroundColor = "#0000000f";
	BlockLogoPreset8.style.backgroundColor = "#0000000f";
});

document.getElementById("BlockLogoPreset3").addEventListener("click", function() {
	document.getElementById("titleTextMaterials2inner").innerHTML = "<b>↖ Now Press + </b>";
	titleTextMaterials2inner.style.color = "#e25129c7"
	BlockLogoPreset3.style.backgroundColor = "#bbbbbb"
	document.getElementById("addAreaSpecificGFX").value = 'logos/logo2.png';
	BlockLogoPreset1.style.backgroundColor = "#0000000f";
	BlockLogoPreset2.style.backgroundColor = "#0000000f";
	//BlockLogoPreset3.style.backgroundColor = "#0000000f";
	BlockLogoPreset4.style.backgroundColor = "#0000000f";
	BlockLogoPreset5.style.backgroundColor = "#0000000f";
	BlockLogoPreset6.style.backgroundColor = "#0000000f";
	BlockLogoPreset7.style.backgroundColor = "#0000000f";
	BlockLogoPreset8.style.backgroundColor = "#0000000f";
});

document.getElementById("BlockLogoPreset4").addEventListener("click", function() {
	document.getElementById("titleTextMaterials2inner").innerHTML = "<b>↖ Now Press + </b>";
	titleTextMaterials2inner.style.color = "#e25129c7"
	BlockLogoPreset4.style.backgroundColor = "#bbbbbb"
	document.getElementById("addAreaSpecificGFX").value = 'logos/logo2.jpg';
	BlockLogoPreset1.style.backgroundColor = "#0000000f";
	BlockLogoPreset2.style.backgroundColor = "#0000000f";
	BlockLogoPreset3.style.backgroundColor = "#0000000f";
	//BlockLogoPreset4.style.backgroundColor = "#0000000f";
	BlockLogoPreset5.style.backgroundColor = "#0000000f";
	BlockLogoPreset6.style.backgroundColor = "#0000000f";
	BlockLogoPreset7.style.backgroundColor = "#0000000f";
	BlockLogoPreset8.style.backgroundColor = "#0000000f";
});

document.getElementById("BlockLogoPreset5").addEventListener("click", function() {
	document.getElementById("titleTextMaterials2inner").innerHTML = "<b>↖ Now Press + </b>";
	titleTextMaterials2inner.style.color = "#e25129c7"
	BlockLogoPreset5.style.backgroundColor = "#bbbbbb"
	document.getElementById("addAreaSpecificGFX").value = 'logos/pokal.png';
	BlockLogoPreset1.style.backgroundColor = "#0000000f";
	BlockLogoPreset2.style.backgroundColor = "#0000000f";
	BlockLogoPreset3.style.backgroundColor = "#0000000f";
	BlockLogoPreset4.style.backgroundColor = "#0000000f";
	//BlockLogoPreset5.style.backgroundColor = "#0000000f";
	BlockLogoPreset6.style.backgroundColor = "#0000000f";
	BlockLogoPreset7.style.backgroundColor = "#0000000f";
	BlockLogoPreset8.style.backgroundColor = "#0000000f";
});

document.getElementById("BlockLogoPreset6").addEventListener("click", function() {
	document.getElementById("titleTextMaterials2inner").innerHTML = "<b>↖ Now Press + </b>";
	titleTextMaterials2inner.style.color = "#e25129c7"
	BlockLogoPreset6.style.backgroundColor = "#bbbbbb"
	document.getElementById("addAreaSpecificGFX").value = 'logos/ball.png';
	BlockLogoPreset1.style.backgroundColor = "#0000000f";
	BlockLogoPreset2.style.backgroundColor = "#0000000f";
	BlockLogoPreset3.style.backgroundColor = "#0000000f";
	BlockLogoPreset4.style.backgroundColor = "#0000000f";
	BlockLogoPreset5.style.backgroundColor = "#0000000f";
	//BlockLogoPreset6.style.backgroundColor = "#0000000f";
	BlockLogoPreset7.style.backgroundColor = "#0000000f";
	BlockLogoPreset8.style.backgroundColor = "#0000000f";
}); 

document.getElementById("BlockLogoPreset7").addEventListener("click", function() {
	document.getElementById("titleTextMaterials2inner").innerHTML = "<b>↖ Now Press + </b>";
	titleTextMaterials2inner.style.color = "#e25129c7"
	BlockLogoPreset7.style.backgroundColor = "#bbbbbb"
	document.getElementById("addAreaSpecificGFX").value = 'logos/eintracht_frankfurt.svg';
	BlockLogoPreset1.style.backgroundColor = "#0000000f";
	BlockLogoPreset2.style.backgroundColor = "#0000000f";
	BlockLogoPreset3.style.backgroundColor = "#0000000f";
	BlockLogoPreset4.style.backgroundColor = "#0000000f";
	BlockLogoPreset5.style.backgroundColor = "#0000000f";
	BlockLogoPreset6.style.backgroundColor = "#0000000f";
	//BlockLogoPreset7.style.backgroundColor = "#0000000f";
	BlockLogoPreset8.style.backgroundColor = "#0000000f";
}); 

document.getElementById("BlockLogoPreset8").addEventListener("click", function() {
	document.getElementById("titleTextMaterials2inner").innerHTML = "<b>↖ Now Press + </b>";
	titleTextMaterials2inner.style.color = "#e25129c7"
	BlockLogoPreset8.style.backgroundColor = "#bbbbbb"
	document.getElementById("addAreaSpecificGFX").value = 'logos/coca-cola.svg';
	BlockLogoPreset1.style.backgroundColor = "#0000000f";
	BlockLogoPreset2.style.backgroundColor = "#0000000f";
	BlockLogoPreset3.style.backgroundColor = "#0000000f";
	BlockLogoPreset4.style.backgroundColor = "#0000000f";
	BlockLogoPreset5.style.backgroundColor = "#0000000f";
	BlockLogoPreset6.style.backgroundColor = "#0000000f";
	BlockLogoPreset7.style.backgroundColor = "#0000000f";
	//BlockLogoPreset8.style.backgroundColor = "#0000000f";
}); 


//------pictures 







//------texts

document.getElementById("addTextButton").addEventListener("click", function () {
	controls.autoRotate = true; 

	c.style.cursor = "copy";
	document.getElementById("shirtObjectsAreasQuestion").style.display = "block";

	document.getElementById("c").addEventListener("click", addTextToSelectedArea);

});



function addTextToSelectedArea() {

	if (txtText.value == '') {
		window.alert("Please don't forget to input some text!")

		c.style.cursor = "default";
		document.getElementById("shirtObjectsAreasQuestion").style.display = "none";

		document.getElementById("c").removeEventListener('click', addPictureToSelectedArea); 

		controls.autoRotate = false;

	} else {

		var ob, ob2, ob3, ob4, ob5;
		ob = document.getElementById("txtBorder");
		ob2 = document.getElementById("txtColor");
		ob3 = document.getElementById("txtColorBorder");
		ob4 = document.getElementById("txtText");

		var text1 = new fabric.Text(ob4.value, { 
			originX: "center",
			originY: "center",
			scaleX: 1.0,
			scaleY: 1.0,
			left: areasTextPositioning.x,
			top: areasTextPositioning.y, 
			angle: 0,
			//fontStyle: "",
			fontFamily: document.getElementById("txtFont").value,
			transparentCorners: false,
			cornerSize: 14,
			borderScaleFactor: 2, 
			centeredScaling: true,
			//cornerStyle: 'circle',
			fill: ob2.value,
			strokeColor: ob3.value,
			stroke: ob.value,
			fontStyle: fontStyleCheckerGlobal,
			fontWeight: fontWeightCheckerGlobal,
			//id: textitemcounter,
			//borderColor: 0x64646481,
			//http://fabricjs.com/controls-customization
		});

		canvas1.add(text1);
		canvas1.setActiveObject(text1);
		text1.typ = 2;







		controls.autoRotate = false; 

		c.style.cursor = "default";
		document.getElementById("shirtObjectsAreasQuestion").style.display = "none";

		document.getElementById("c").removeEventListener('click', addTextToSelectedArea);
	}
};








//canvas1.setActiveObject(text1);



//------texts












































//designs patters svgs 




//-----man o neck -----//

//design 0

 MenONeckDesign0SvgGroup = new fabric.Group

 MenONeckDesign0Svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="2560" height="1920"> <g transform="matrix(2.8317 0 0 2.8317 -0 0)"> <g id="MenONeckDesign1KnitTrimTop"> <path d="M99.8766 32.4106L99.8766 15.4026L177.66 15.4026L255.301 15.4026L255.301 32.4106L177.66 32.4106L99.8766 32.4106Z" fill="#ffffff" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1SleeveRight"> <path d="M814.247 99.2273L814.026 99.7383L813.601 100.778L812.785 102.716L812.185 103.981L811.624 105L810.987 105.975L810.664 106.402L810.318 106.812L809.562 107.583L808.734 108.287L807.846 108.927L806.913 109.502L805.945 110.013L805.642 110.15L804.957 110.461L803.962 110.846L803.098 111.129L802.211 111.377L801.306 111.59L800.389 111.771L799.466 111.921L798.543 112.041L796.719 112.2L795.789 112.235L794.868 112.227L793.956 112.181L793.052 112.1L791.975 111.962L790.903 111.787L789.303 111.471L787.705 111.111L786.568 114.191L785.377 117.25L784.108 120.277L783.438 121.775L782.741 123.258L781.462 125.82L780.121 128.346L778.724 130.841L777.279 133.309L775.492 136.239L773.657 139.141L771.411 142.596L767.992 147.745L766.079 150.612L765.13 152.05L764.687 152.72L763.447 154.663L761.937 157.106L759.839 160.475L758.389 162.719L757.146 164.559L755.864 166.346L754.764 167.78L753.633 169.151L752.469 170.444L751.269 171.649L750.571 172.281L749.934 172.8L749.354 173.219L748.826 173.547L748.252 173.841L747.736 174.048L747.181 174.207L746.444 174.345L745.931 174.426L745.419 174.569L744.948 174.795L744.302 175.164L743.562 175.656L742.764 176.174L743.993 178.738L745.19 181.306L746.354 183.882L747.482 186.469L748.577 189.076L749.634 191.706L750.655 194.363L751.638 197.054L752.445 199.389L753.213 201.739L753.949 204.099L754.653 206.466L753.934 208.783L752.896 212.135L763.405 212.134L784.416 212.132L858.732 212.127L856.934 206.458L857.654 204.099L858.405 201.748L859.188 199.406L860.012 197.076L860.991 194.443L861.977 191.904L862.989 189.411L864.049 186.918L865.175 184.378L866.388 181.743L867.707 178.967L868.87 175.863L868.301 175.592L867.28 175.098L866.613 174.746L866.107 174.465L865.206 174.084L864.541 173.878L863.811 173.626L863.325 173.38L862.882 173.076L862.378 172.645L861.892 172.163L861.332 171.548L860.682 170.781L859.928 169.839L855.65 164.303L851.438 158.678L849.366 155.837L847.321 152.981L845.307 150.112L843.327 147.232L838.911 140.665L836.74 137.358L834.605 134.029L831.829 129.549L830.479 127.287L829.155 125.01L827.017 121.175L825.983 119.238L824.974 117.286L823.993 115.319L823.039 113.335L822.116 111.336L821.223 109.318L820.467 107.522L819.74 105.715L817.659 100.253L817.157 98.9093L816.904 98.2393L814.247 99.2273Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1SleeveLeft"> <path d="M605.011 98.8862L604.508 100.23L602.427 105.692L601.7 107.499L600.944 109.295L600.052 111.312L599.128 113.312L598.175 115.296L597.193 117.263L596.185 119.215L595.151 121.152L593.013 124.987L591.689 127.264L590.338 129.526L587.563 134.006L585.428 137.335L583.257 140.642L578.84 147.209L576.861 150.089L574.847 152.958L572.802 155.814L570.73 158.654L566.518 164.28L562.239 169.816L561.484 170.757L560.835 171.525L560.275 172.14L559.79 172.622L559.286 173.053L558.843 173.357L558.357 173.603L557.627 173.855L556.961 174.061L556.061 174.442L555.555 174.723L554.887 175.075L553.867 175.569L553.298 175.84L554.461 178.944L555.779 181.719L556.992 184.355L558.118 186.895L559.178 189.388L560.191 191.881L561.176 194.42L562.155 197.052L562.979 199.383L563.763 201.725L564.513 204.075L565.234 206.435L563.435 212.104L637.75 212.109L658.763 212.111L669.272 212.111L668.233 208.76L667.514 206.442L668.219 204.075L668.954 201.716L669.723 199.366L670.53 197.031L671.513 194.34L672.533 191.681L673.591 189.053L674.684 186.446L675.814 183.859L676.978 181.283L678.174 178.715L679.403 176.15L678.606 175.633L677.866 175.14L677.22 174.771L676.747 174.545L676.237 174.403L675.724 174.321L674.987 174.184L674.432 174.024L673.915 173.818L673.342 173.524L672.813 173.195L672.234 172.777L671.597 172.258L670.898 171.625L669.699 170.421L668.534 169.127L667.403 167.757L666.304 166.323L665.022 164.536L663.777 162.696L662.328 160.45L660.23 157.083L658.72 154.64L657.481 152.697L657.037 152.027L656.088 150.589L654.175 147.722L650.756 142.572L648.51 139.118L646.676 136.215L644.888 133.286L643.444 130.818L642.047 128.323L640.706 125.796L639.427 123.235L638.73 121.751L638.059 120.254L636.791 117.227L635.599 114.168L634.463 111.088L632.864 111.448L631.264 111.764L630.193 111.939L629.116 112.076L628.21 112.157L627.299 112.203L626.379 112.211L625.448 112.177L623.625 112.018L622.701 111.897L621.778 111.748L620.862 111.567L619.956 111.354L619.07 111.106L618.206 110.823L617.21 110.438L616.526 110.127L616.222 109.99L615.255 109.479L614.321 108.904L613.433 108.264L612.605 107.559L611.85 106.789L611.504 106.379L611.18 105.952L610.543 104.977L609.983 103.958L609.382 102.693L608.567 100.754L608.141 99.7152L607.921 99.2042L605.264 98.2152L605.011 98.8862Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1SideLeft"> <path d="M328.543 80.8835L328.583 81.3305L328.784 83.5745L329.09 86.9515L329.231 88.6645L329.647 93.6935L330.222 101.15L330.823 109.528L331.118 114.444L331.16 115.148L331.342 118.174L331.711 125.766L331.967 132.445L332.147 138.14L332.359 146.472L332.453 152.465L332.491 154.914L332.532 159.914L332.544 165.783L332.501 174.889L332.381 185.7L332.24 200.817L332.23 210.966L332.314 219.494L332.397 223.79L332.513 228.107L330.579 233.527L328.123 233.107L325.662 232.729L323.196 232.395L320.724 232.104L317.915 231.835L315.102 231.641L312.285 231.527L309.469 231.499L301.589 231.557L296.334 231.63L291.952 231.729L287.569 231.88L287.267 226.214L287.359 218.691L287.391 211.197L287.374 202.23L287.285 188.823L287.176 174.593L287.181 162.623L287.249 154.924L287.359 148.378L287.442 145.175L287.59 139.482L287.856 131.407L288.103 125.252L288.373 119.6L288.53 116.84L288.716 113.577L289.12 107.168L289.569 100.766L290.064 94.3705L290.334 91.2095L290.555 88.6305L290.85 85.1745L291.001 83.4495L293.825 83.6965L294.442 84.2705L295.538 85.3975L296.69 86.6395L298.047 88.1685L300.121 90.4725L301.542 91.9475L302.765 93.1055L304.035 94.1735L304.63 94.5995L305.317 95.0165L306.073 95.4095L306.874 95.7635L307.699 96.0635L308.526 96.2935L309.332 96.4385L310.094 96.4835L310.58 96.4395L311.079 96.3295L311.585 96.1615L312.091 95.9455L312.832 95.5545L313.532 95.1095L314.166 94.6445L314.71 94.1915L315.4 93.5525L316.069 92.8875L317.353 91.4895L318.818 89.7215L320.933 86.9715L322.435 84.9845L323.735 83.3655L324.594 82.3585L325.343 81.5295L325.72 81.1395L328.543 80.8835Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1SleeveLeftKnitTrim"> <path d="M563.026 199.52L563.764 201.725L564.514 204.076L565.235 206.436L563.437 212.105L637.751 212.109L658.764 212.111L669.273 212.112L668.234 208.76L667.515 206.443L668.22 204.076L668.955 201.716L669.673 199.52L563.026 199.52Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1SleeveRightKnitTrim"> <path d="M752.495 199.543L753.213 201.739L753.949 204.1L754.653 206.466L753.934 208.783L752.896 212.135L763.405 212.134L784.416 212.132L858.732 212.128L856.934 206.459L857.654 204.099L858.404 201.748L859.142 199.543L752.495 199.543Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1FrontColor1"> <path d="M220.96 60.5568L223.454 63.6968L224.293 64.7368L224.71 65.2588L226.687 67.7868L230.553 72.9088L234.402 77.9818L237.003 81.3308L239.816 81.6758L239.693 82.7048L239.436 84.7628L238.871 89.4398L237.297 103.671L236.324 113.165L235.586 121.08L234.932 128.998L234.466 135.599L234.081 142.203L233.79 148.809L233.6 155.418L233.506 161.979L233.477 168.542L233.508 176.418L233.625 188.234L233.757 199.973L233.779 209.837L233.732 216.169L233.646 221.542L233.576 224.163L233.561 224.701L233.451 226.189L233.24 227.956L233.028 229.849L227.25 230.009L218.581 230.29L208.994 230.611L204.199 230.728L200.898 230.809L194.251 230.923L187.622 230.991L180.989 231.019L177.589 231.015L174.635 231.014L169.162 231.016L164.572 230.982L162.933 230.956L158.085 230.889L149.25 230.684L139.842 230.421L128.653 230.059L122.15 229.849L121.938 227.956L121.726 226.189L121.616 224.7L121.602 224.163L121.532 221.542L121.445 216.166L121.399 209.833L121.42 199.966L121.553 188.224L121.67 176.412L121.7 168.538L121.672 161.977L121.577 155.418L121.387 148.798L121.093 142.178L120.704 135.56L120.234 128.945L119.576 121.014L118.834 113.094L117.863 103.611L116.307 89.4398L115.694 84.3658L115.471 82.5758L115.362 81.6758L118.175 81.3308L122.451 75.8498L128.811 67.5868L132.41 62.8978L134.218 60.5568L134.818 59.7798L138.231 55.3568L141.175 51.7008L143.111 49.3978L144.791 47.4778L146.259 45.8788L147.517 44.5598L148.804 43.2678L150.12 42.0068L150.786 41.3998L151.659 40.6038L153.474 39.0928L154.928 37.8718L155.671 38.5748L156.298 39.2548L156.996 40.1448L157.837 41.1918L158.552 42.0038L159.295 42.7798L160.214 43.6658L160.804 44.1958L161.411 44.7018L162.036 45.1818L162.677 45.6378L164.001 46.4758L165.376 47.2138L166.793 47.8528L168.243 48.3918L169.72 48.8318L171.214 49.1718L172.444 49.3668L173.669 49.4888L175.141 49.5628L177.367 49.5958L179.42 49.5948L180.641 49.5598L181.656 49.4938L182.669 49.3858L184.18 49.1328L185.68 48.7768L187.16 48.3168L188.614 47.7548L190.032 47.0918L191.407 46.3288L192.73 45.4668L193.37 44.9998L193.994 44.5078L195.112 43.5288L196.048 42.5868L196.997 41.4908L198.227 39.8828L198.992 38.8518L199.703 37.9688L199.984 37.6458L201.516 38.9318L203.454 40.5448L204.392 41.3998L205.085 42.0328L206.455 43.3488L207.793 44.6968L209.1 46.0728L210.625 47.7418L212.368 49.7448L214.373 52.1438L217.326 55.8338L220.96 60.5568Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g><g id="MenONeckDesign1SideRight"> <path d="M39.1845 81.0238L39.1445 81.4708L38.9425 83.7148L38.6375 87.0918L38.4965 88.8048L38.0805 93.8338L37.5055 101.291L36.9045 109.669L36.6095 114.584L36.5665 115.289L36.3855 118.315L36.0165 125.907L35.7605 132.586L35.5805 138.281L35.3675 146.613L35.2745 152.606L35.2365 155.055L35.1955 160.055L35.1835 165.923L35.2265 175.03L35.3465 185.84L35.4865 200.958L35.4975 211.107L35.4135 219.635L35.3305 223.93L35.2145 228.248L37.1485 233.667L39.6035 233.247L42.0655 232.869L44.5315 232.535L47.0035 232.245L49.8125 231.975L52.6255 231.781L55.4425 231.668L58.2585 231.639L66.1375 231.697L71.3935 231.77L75.7755 231.87L80.1585 232.02L80.4605 226.355L80.3685 218.832L80.3355 211.337L80.3535 202.371L80.4425 188.963L80.5515 174.734L80.5465 162.764L80.4785 155.065L80.3685 148.518L80.2855 145.316L80.1375 139.623L79.8715 131.548L79.6245 125.393L79.3545 119.741L79.1975 116.981L79.0115 113.718L78.6075 107.309L78.1585 100.907L77.6635 94.5108L77.3935 91.3498L77.1725 88.7708L76.8775 85.3148L76.7265 83.5898L73.9025 83.8368L73.2855 84.4108L72.1895 85.5378L71.0375 86.7798L69.6805 88.3088L67.6065 90.6128L66.1855 92.0878L64.9625 93.2458L63.6925 94.3138L63.0975 94.7398L62.4105 95.1568L61.6545 95.5498L60.8535 95.9038L60.0275 96.2038L59.2015 96.4338L58.3955 96.5788L57.6325 96.6238L57.1475 96.5798L56.6485 96.4698L56.1425 96.3018L55.6365 96.0858L54.8945 95.6948L54.1955 95.2498L53.5605 94.7848L53.0175 94.3318L52.3275 93.6928L51.6585 93.0278L50.3745 91.6298L48.9095 89.8618L46.7945 87.1118L45.2915 85.1248L43.9925 83.5058L43.1335 82.4988L42.3845 81.6698L42.0075 81.2798L39.1845 81.0238Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g>  <g id="MenONeckDesign1BackColor1"> <path d="M479.093 54.4029L479.985 55.5299L481.763 57.7879L483.098 59.4809L484.121 60.7919L486.922 64.4529L490.205 68.8319L493.604 73.3519L495.892 76.3519L498.706 76.6969L498.592 77.6309L498.357 79.5019L497.754 84.4509L496.567 95.0089L495.799 102.048L495.184 107.916L494.891 110.84L494.597 113.787L493.699 123.584L493.295 128.488L492.927 133.398L492.691 137.142L492.512 140.896L492.355 145.406L492.188 152.165L492.072 159.429L492.029 166.695L492.047 175.414L492.152 188.495L492.257 199.688L492.283 209.092L492.257 215.129L492.203 220.252L492.158 222.751L493.253 228.316L490.56 228.783L487.871 229.279L479.816 230.869L473.424 232.158L468.037 233.148L464.569 233.723L461.618 234.161L460.174 234.347L458.94 234.506L456.495 234.777L454.086 235.003L451.701 235.188L449.103 235.348L446.268 235.476L443.155 235.569L438.954 235.631L436.068 235.628L431.182 235.624L427.151 235.549L424.671 235.473L422.401 235.369L420.317 235.242L418.218 235.079L416.097 234.876L415.038 234.753L413.382 234.561L410.002 234.092L406.034 233.464L401.989 232.74L397.689 231.924L392.578 230.904L384.37 229.297L378.882 228.316L379.978 222.751L380.099 162.236L380.082 161.117L380.054 158.879L379.948 152.165L379.78 145.409L379.622 140.892L379.443 137.136L379.208 133.398L378.748 127.264L378.244 121.137L377.697 115.014L377.295 110.833L377.109 108.897L376.482 102.782L375.817 96.6699L375.116 90.5599L374.381 84.4509L374.064 81.8719L373.639 78.4199L373.43 76.6969L376.243 76.3519L381.717 69.1449L386.953 62.2279L391.414 56.4609L393.042 54.4029L394.598 52.4379L397.623 48.7229L400.179 45.6959L402.285 43.2729L404.243 41.0879L406.057 39.1219L407.9 37.1859L409.774 35.2829L410.717 34.3589L411.793 33.3019L413.433 31.7539L415.3 30.0549L416.431 29.1059L417.853 27.9099L420.635 25.6319L422.737 23.9069L424.536 26.0959L426.856 26.0509L431.23 26.0059L436.068 25.9959L437.596 25.9929L446.109 26.0799L447.599 26.0959L449.398 23.9069L451.515 25.6449L454.307 27.9319L455.705 29.1059L456.839 30.0589L458.864 31.8999L460.537 33.4919L461.419 34.3589L462.363 35.2869L464.238 37.1939L466.08 39.1299L467.892 41.0929L469.849 43.2749L471.951 45.6939L474.507 48.7189L477.536 52.4349L479.093 54.4029Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g></g> </svg>';

fabric.loadSVGFromString(MenONeckDesign0Svg, function(objects, options) {
	for (let i = 0; i < objects.length; i++){
		let obj = objects[i];
		//obj.setTop(0);
		//obj.setCoords();
		//obj.scaleToHeight(pdf_canvas.height)
		MenONeckDesign0SvgGroup.addWithUpdate(obj)
	} 
});

MenONeckDesign0SvgGroup.set({ 
	lockMovementX:true,
	lockMovementY:true,
	lockScalingX:true,
	lockScalingY:true,
	lockRotation:true,
	hasControls:false,
	hasBorders:false,
	selectable: false,
	fixed: true,
})

canvas1.add(MenONeckDesign0SvgGroup);











//men O neck --- 


//design 1

MenONeckDesign1SvgGroup = new fabric.Group

MenONeckDesign1Svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="2560" height="1920"> <g transform="matrix(2.8317 0 0 2.8317 -0 0)"> <g id="MenONeckDesign1KnitTrimTop"> <path d="M99.8766 32.4106L99.8766 15.4026L177.66 15.4026L255.301 15.4026L255.301 32.4106L177.66 32.4106L99.8766 32.4106Z" fill="#ffffff" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1SleeveRight"> <path d="M814.247 99.2273L814.026 99.7383L813.601 100.778L812.785 102.716L812.185 103.981L811.624 105L810.987 105.975L810.664 106.402L810.318 106.812L809.562 107.583L808.734 108.287L807.846 108.927L806.913 109.502L805.945 110.013L805.642 110.15L804.957 110.461L803.962 110.846L803.098 111.129L802.211 111.377L801.306 111.59L800.389 111.771L799.466 111.921L798.543 112.041L796.719 112.2L795.789 112.235L794.868 112.227L793.956 112.181L793.052 112.1L791.975 111.962L790.903 111.787L789.303 111.471L787.705 111.111L786.568 114.191L785.377 117.25L784.108 120.277L783.438 121.775L782.741 123.258L781.462 125.82L780.121 128.346L778.724 130.841L777.279 133.309L775.492 136.239L773.657 139.141L771.411 142.596L767.992 147.745L766.079 150.612L765.13 152.05L764.687 152.72L763.447 154.663L761.937 157.106L759.839 160.475L758.389 162.719L757.146 164.559L755.864 166.346L754.764 167.78L753.633 169.151L752.469 170.444L751.269 171.649L750.571 172.281L749.934 172.8L749.354 173.219L748.826 173.547L748.252 173.841L747.736 174.048L747.181 174.207L746.444 174.345L745.931 174.426L745.419 174.569L744.948 174.795L744.302 175.164L743.562 175.656L742.764 176.174L743.993 178.738L745.19 181.306L746.354 183.882L747.482 186.469L748.577 189.076L749.634 191.706L750.655 194.363L751.638 197.054L752.445 199.389L753.213 201.739L753.949 204.099L754.653 206.466L753.934 208.783L752.896 212.135L763.405 212.134L784.416 212.132L858.732 212.127L856.934 206.458L857.654 204.099L858.405 201.748L859.188 199.406L860.012 197.076L860.991 194.443L861.977 191.904L862.989 189.411L864.049 186.918L865.175 184.378L866.388 181.743L867.707 178.967L868.87 175.863L868.301 175.592L867.28 175.098L866.613 174.746L866.107 174.465L865.206 174.084L864.541 173.878L863.811 173.626L863.325 173.38L862.882 173.076L862.378 172.645L861.892 172.163L861.332 171.548L860.682 170.781L859.928 169.839L855.65 164.303L851.438 158.678L849.366 155.837L847.321 152.981L845.307 150.112L843.327 147.232L838.911 140.665L836.74 137.358L834.605 134.029L831.829 129.549L830.479 127.287L829.155 125.01L827.017 121.175L825.983 119.238L824.974 117.286L823.993 115.319L823.039 113.335L822.116 111.336L821.223 109.318L820.467 107.522L819.74 105.715L817.659 100.253L817.157 98.9093L816.904 98.2393L814.247 99.2273Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1SleeveLeft"> <path d="M605.011 98.8862L604.508 100.23L602.427 105.692L601.7 107.499L600.944 109.295L600.052 111.312L599.128 113.312L598.175 115.296L597.193 117.263L596.185 119.215L595.151 121.152L593.013 124.987L591.689 127.264L590.338 129.526L587.563 134.006L585.428 137.335L583.257 140.642L578.84 147.209L576.861 150.089L574.847 152.958L572.802 155.814L570.73 158.654L566.518 164.28L562.239 169.816L561.484 170.757L560.835 171.525L560.275 172.14L559.79 172.622L559.286 173.053L558.843 173.357L558.357 173.603L557.627 173.855L556.961 174.061L556.061 174.442L555.555 174.723L554.887 175.075L553.867 175.569L553.298 175.84L554.461 178.944L555.779 181.719L556.992 184.355L558.118 186.895L559.178 189.388L560.191 191.881L561.176 194.42L562.155 197.052L562.979 199.383L563.763 201.725L564.513 204.075L565.234 206.435L563.435 212.104L637.75 212.109L658.763 212.111L669.272 212.111L668.233 208.76L667.514 206.442L668.219 204.075L668.954 201.716L669.723 199.366L670.53 197.031L671.513 194.34L672.533 191.681L673.591 189.053L674.684 186.446L675.814 183.859L676.978 181.283L678.174 178.715L679.403 176.15L678.606 175.633L677.866 175.14L677.22 174.771L676.747 174.545L676.237 174.403L675.724 174.321L674.987 174.184L674.432 174.024L673.915 173.818L673.342 173.524L672.813 173.195L672.234 172.777L671.597 172.258L670.898 171.625L669.699 170.421L668.534 169.127L667.403 167.757L666.304 166.323L665.022 164.536L663.777 162.696L662.328 160.45L660.23 157.083L658.72 154.64L657.481 152.697L657.037 152.027L656.088 150.589L654.175 147.722L650.756 142.572L648.51 139.118L646.676 136.215L644.888 133.286L643.444 130.818L642.047 128.323L640.706 125.796L639.427 123.235L638.73 121.751L638.059 120.254L636.791 117.227L635.599 114.168L634.463 111.088L632.864 111.448L631.264 111.764L630.193 111.939L629.116 112.076L628.21 112.157L627.299 112.203L626.379 112.211L625.448 112.177L623.625 112.018L622.701 111.897L621.778 111.748L620.862 111.567L619.956 111.354L619.07 111.106L618.206 110.823L617.21 110.438L616.526 110.127L616.222 109.99L615.255 109.479L614.321 108.904L613.433 108.264L612.605 107.559L611.85 106.789L611.504 106.379L611.18 105.952L610.543 104.977L609.983 103.958L609.382 102.693L608.567 100.754L608.141 99.7152L607.921 99.2042L605.264 98.2152L605.011 98.8862Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1SideLeft"> <path d="M328.543 80.8835L328.583 81.3305L328.784 83.5745L329.09 86.9515L329.231 88.6645L329.647 93.6935L330.222 101.15L330.823 109.528L331.118 114.444L331.16 115.148L331.342 118.174L331.711 125.766L331.967 132.445L332.147 138.14L332.359 146.472L332.453 152.465L332.491 154.914L332.532 159.914L332.544 165.783L332.501 174.889L332.381 185.7L332.24 200.817L332.23 210.966L332.314 219.494L332.397 223.79L332.513 228.107L330.579 233.527L328.123 233.107L325.662 232.729L323.196 232.395L320.724 232.104L317.915 231.835L315.102 231.641L312.285 231.527L309.469 231.499L301.589 231.557L296.334 231.63L291.952 231.729L287.569 231.88L287.267 226.214L287.359 218.691L287.391 211.197L287.374 202.23L287.285 188.823L287.176 174.593L287.181 162.623L287.249 154.924L287.359 148.378L287.442 145.175L287.59 139.482L287.856 131.407L288.103 125.252L288.373 119.6L288.53 116.84L288.716 113.577L289.12 107.168L289.569 100.766L290.064 94.3705L290.334 91.2095L290.555 88.6305L290.85 85.1745L291.001 83.4495L293.825 83.6965L294.442 84.2705L295.538 85.3975L296.69 86.6395L298.047 88.1685L300.121 90.4725L301.542 91.9475L302.765 93.1055L304.035 94.1735L304.63 94.5995L305.317 95.0165L306.073 95.4095L306.874 95.7635L307.699 96.0635L308.526 96.2935L309.332 96.4385L310.094 96.4835L310.58 96.4395L311.079 96.3295L311.585 96.1615L312.091 95.9455L312.832 95.5545L313.532 95.1095L314.166 94.6445L314.71 94.1915L315.4 93.5525L316.069 92.8875L317.353 91.4895L318.818 89.7215L320.933 86.9715L322.435 84.9845L323.735 83.3655L324.594 82.3585L325.343 81.5295L325.72 81.1395L328.543 80.8835Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1SleeveLeftKnitTrim"> <path d="M563.026 199.52L563.764 201.725L564.514 204.076L565.235 206.436L563.437 212.105L637.751 212.109L658.764 212.111L669.273 212.112L668.234 208.76L667.515 206.443L668.22 204.076L668.955 201.716L669.673 199.52L563.026 199.52Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1SleeveRightKnitTrim"> <path d="M752.495 199.543L753.213 201.739L753.949 204.1L754.653 206.466L753.934 208.783L752.896 212.135L763.405 212.134L784.416 212.132L858.732 212.128L856.934 206.459L857.654 204.099L858.404 201.748L859.142 199.543L752.495 199.543Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1FrontColor1"> <path d="M220.96 60.5568L223.454 63.6968L224.293 64.7368L224.71 65.2588L226.687 67.7868L230.553 72.9088L234.402 77.9818L237.003 81.3308L239.816 81.6758L239.693 82.7048L239.436 84.7628L238.871 89.4398L237.297 103.671L236.324 113.165L235.586 121.08L234.932 128.998L234.466 135.599L234.081 142.203L233.79 148.809L233.6 155.418L233.506 161.979L233.477 168.542L233.508 176.418L233.625 188.234L233.757 199.973L233.779 209.837L233.732 216.169L233.646 221.542L233.576 224.163L233.561 224.701L233.451 226.189L233.24 227.956L233.028 229.849L227.25 230.009L218.581 230.29L208.994 230.611L204.199 230.728L200.898 230.809L194.251 230.923L187.622 230.991L180.989 231.019L177.589 231.015L174.635 231.014L169.162 231.016L164.572 230.982L162.933 230.956L158.085 230.889L149.25 230.684L139.842 230.421L128.653 230.059L122.15 229.849L121.938 227.956L121.726 226.189L121.616 224.7L121.602 224.163L121.532 221.542L121.445 216.166L121.399 209.833L121.42 199.966L121.553 188.224L121.67 176.412L121.7 168.538L121.672 161.977L121.577 155.418L121.387 148.798L121.093 142.178L120.704 135.56L120.234 128.945L119.576 121.014L118.834 113.094L117.863 103.611L116.307 89.4398L115.694 84.3658L115.471 82.5758L115.362 81.6758L118.175 81.3308L122.451 75.8498L128.811 67.5868L132.41 62.8978L134.218 60.5568L134.818 59.7798L138.231 55.3568L141.175 51.7008L143.111 49.3978L144.791 47.4778L146.259 45.8788L147.517 44.5598L148.804 43.2678L150.12 42.0068L150.786 41.3998L151.659 40.6038L153.474 39.0928L154.928 37.8718L155.671 38.5748L156.298 39.2548L156.996 40.1448L157.837 41.1918L158.552 42.0038L159.295 42.7798L160.214 43.6658L160.804 44.1958L161.411 44.7018L162.036 45.1818L162.677 45.6378L164.001 46.4758L165.376 47.2138L166.793 47.8528L168.243 48.3918L169.72 48.8318L171.214 49.1718L172.444 49.3668L173.669 49.4888L175.141 49.5628L177.367 49.5958L179.42 49.5948L180.641 49.5598L181.656 49.4938L182.669 49.3858L184.18 49.1328L185.68 48.7768L187.16 48.3168L188.614 47.7548L190.032 47.0918L191.407 46.3288L192.73 45.4668L193.37 44.9998L193.994 44.5078L195.112 43.5288L196.048 42.5868L196.997 41.4908L198.227 39.8828L198.992 38.8518L199.703 37.9688L199.984 37.6458L201.516 38.9318L203.454 40.5448L204.392 41.3998L205.085 42.0328L206.455 43.3488L207.793 44.6968L209.1 46.0728L210.625 47.7418L212.368 49.7448L214.373 52.1438L217.326 55.8338L220.96 60.5568Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1FrontColor2"> <path d="M116.307 89.4398L117.863 103.611L118.834 113.094L119.576 121.014L120.234 128.945L120.704 135.56L121.092 142.178L121.387 148.799L121.577 155.417L121.671 161.977L121.7 168.538L121.669 176.411L121.552 188.223L121.42 199.966L121.398 209.833L121.445 216.166L121.465 217.431L233.711 217.431L233.732 216.168L233.779 209.838L233.757 199.973L233.625 188.234L233.508 176.418L233.477 168.542L233.506 161.979L233.6 155.417L233.789 148.808L234.081 142.202L234.465 135.599L234.871 129.849L115.958 86.5488L116.307 89.4398Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1FrontColor3"> <path d="M121.387 148.798L121.577 155.417L121.671 161.977L121.7 168.538L121.67 176.411L121.553 188.222L121.42 199.966L121.399 209.832L121.446 216.166L121.532 221.541L121.602 224.162L121.616 224.7L121.726 226.188L121.938 227.955L122.15 229.848L128.654 230.058L139.842 230.421L149.249 230.683L158.084 230.889L162.934 230.955L164.573 230.982L169.163 231.015L174.635 231.014L177.588 231.014L180.989 231.018L187.622 230.991L194.251 230.922L200.897 230.809L204.199 230.728L208.995 230.611L218.582 230.289L227.249 230.008L233.027 229.848L233.24 227.955L233.451 226.189L233.561 224.7L233.576 224.162L233.646 221.541L233.732 216.168L233.779 209.837L233.757 199.972L233.625 188.233L233.613 187.001L121.267 146.092L121.387 148.798Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1SideRight"> <path d="M39.1845 81.0238L39.1445 81.4708L38.9425 83.7148L38.6375 87.0918L38.4965 88.8048L38.0805 93.8338L37.5055 101.291L36.9045 109.669L36.6095 114.584L36.5665 115.289L36.3855 118.315L36.0165 125.907L35.7605 132.586L35.5805 138.281L35.3675 146.613L35.2745 152.606L35.2365 155.055L35.1955 160.055L35.1835 165.923L35.2265 175.03L35.3465 185.84L35.4865 200.958L35.4975 211.107L35.4135 219.635L35.3305 223.93L35.2145 228.248L37.1485 233.667L39.6035 233.247L42.0655 232.869L44.5315 232.535L47.0035 232.245L49.8125 231.975L52.6255 231.781L55.4425 231.668L58.2585 231.639L66.1375 231.697L71.3935 231.77L75.7755 231.87L80.1585 232.02L80.4605 226.355L80.3685 218.832L80.3355 211.337L80.3535 202.371L80.4425 188.963L80.5515 174.734L80.5465 162.764L80.4785 155.065L80.3685 148.518L80.2855 145.316L80.1375 139.623L79.8715 131.548L79.6245 125.393L79.3545 119.741L79.1975 116.981L79.0115 113.718L78.6075 107.309L78.1585 100.907L77.6635 94.5108L77.3935 91.3498L77.1725 88.7708L76.8775 85.3148L76.7265 83.5898L73.9025 83.8368L73.2855 84.4108L72.1895 85.5378L71.0375 86.7798L69.6805 88.3088L67.6065 90.6128L66.1855 92.0878L64.9625 93.2458L63.6925 94.3138L63.0975 94.7398L62.4105 95.1568L61.6545 95.5498L60.8535 95.9038L60.0275 96.2038L59.2015 96.4338L58.3955 96.5788L57.6325 96.6238L57.1475 96.5798L56.6485 96.4698L56.1425 96.3018L55.6365 96.0858L54.8945 95.6948L54.1955 95.2498L53.5605 94.7848L53.0175 94.3318L52.3275 93.6928L51.6585 93.0278L50.3745 91.6298L48.9095 89.8618L46.7945 87.1118L45.2915 85.1248L43.9925 83.5058L43.1335 82.4988L42.3845 81.6698L42.0075 81.2798L39.1845 81.0238Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1FrontLogo"> <path d="M154.594 73.5C153.645 73.7943 152.727 74.421 152.062 75.3438C153.51 73.8207 155.68 73.8403 156.594 74.6562C157.58 75.5362 157.656 77.1552 156.688 77.9062C153.232 80.5803 153.295 76.8115 154.938 75.5625C154.938 75.5625 153.315 75.0493 152.094 76.0312C150.587 77.2433 150.653 80.799 154.344 80.375C156.489 80.128 157.642 78.0312 158.906 79.2812C160.664 74.5645 157.441 72.6171 154.594 73.5ZM155.75 81.2188C155.655 81.2188 155.588 81.2495 155.531 81.3125C155.474 81.3745 155.437 81.4483 155.438 81.5312C155.438 81.6153 155.474 81.687 155.531 81.75C155.588 81.813 155.655 81.8438 155.75 81.8438C155.845 81.8438 155.943 81.813 156 81.75C156.057 81.687 156.063 81.6153 156.062 81.5312C156.062 81.4483 156.058 81.3745 156 81.3125C155.941 81.2495 155.842 81.2188 155.75 81.2188ZM153.75 81.375L153.75 82.0625L153.656 82.0625L153.344 82.0625L153.031 82.0625C152.693 82.0625 152.43 82.1243 152.25 82.2812C152.07 82.4392 151.969 82.6525 151.969 82.9375L151.969 84.2188L152.562 84.2188L152.562 82.9375C152.562 82.7365 152.619 82.602 152.719 82.5C152.82 82.399 152.967 82.3438 153.156 82.3438L153.344 82.3438L153.656 82.3438L153.75 82.3438L153.75 83.4375C153.75 83.7115 153.83 83.9065 154 84.0625C154.17 84.2185 154.404 84.3125 154.719 84.3125C154.825 84.3125 154.954 84.3082 155.062 84.2812C155.169 84.2522 155.26 84.1983 155.344 84.1562L155.219 83.9062C155.166 83.9373 155.109 83.9428 155.031 83.9688C154.953 83.9958 154.864 84.0313 154.781 84.0312C154.722 84.0312 154.647 84.023 154.594 84C154.541 83.978 154.51 83.921 154.469 83.875C154.429 83.829 154.399 83.7615 154.375 83.6875C154.351 83.6135 154.344 83.5445 154.344 83.4375L154.344 82.3438L154.969 82.3438L154.969 82.0625L154.344 82.0625L154.344 81.375L153.75 81.375ZM150.656 81.9688C150.589 81.9688 150.546 81.989 150.469 82C150.392 82.011 150.297 82.0102 150.219 82.0312C150.141 82.0523 150.074 82.094 150 82.125C149.926 82.155 149.842 82.1777 149.781 82.2188L149.938 82.4688C150.032 82.4048 150.13 82.3505 150.25 82.3125C150.37 82.2755 150.499 82.25 150.625 82.25C150.792 82.25 150.927 82.3112 151.031 82.4062C151.136 82.5013 151.188 82.6438 151.188 82.8438L150.594 82.8438C150.215 82.8438 149.96 82.9162 149.781 83.0312C149.601 83.1453 149.5 83.2992 149.5 83.5312C149.5 83.7623 149.601 83.9485 149.781 84.0625C149.96 84.1775 150.215 84.2188 150.594 84.2188L151.781 84.2188L151.781 82.8438C151.781 82.7127 151.768 82.607 151.719 82.5C151.67 82.393 151.595 82.2967 151.5 82.2188C151.405 82.1408 151.292 82.0733 151.156 82.0312C151.019 81.9892 150.834 81.9687 150.656 81.9688ZM150.594 83.125L151.188 83.125L151.188 83.9375L150.594 83.9375C150.273 83.9375 150.125 83.7962 150.125 83.5312C150.125 83.2663 150.273 83.125 150.594 83.125ZM159.719 81.9688C159.653 81.9688 159.577 81.989 159.5 82C159.423 82.011 159.359 82.0102 159.281 82.0312C159.203 82.0523 159.136 82.094 159.062 82.125C158.988 82.155 158.905 82.1777 158.844 82.2188L159 82.4688C159.095 82.4048 159.192 82.3505 159.312 82.3125C159.433 82.2755 159.562 82.25 159.688 82.25C159.854 82.25 159.99 82.3112 160.094 82.4062C160.199 82.5013 160.25 82.6438 160.25 82.8438L159.656 82.8438C159.277 82.8438 159.023 82.9162 158.844 83.0312C158.664 83.1453 158.562 83.2992 158.562 83.5312C158.562 83.7623 158.664 83.9485 158.844 84.0625C159.023 84.1775 159.277 84.2188 159.656 84.2188L160.844 84.2188L160.844 82.8438C160.844 82.7127 160.799 82.607 160.75 82.5C160.701 82.393 160.657 82.2967 160.562 82.2188C160.468 82.1408 160.324 82.0733 160.188 82.0312C160.05 81.9892 159.898 81.9687 159.719 81.9688ZM159.656 83.125L160.25 83.125L160.25 83.9375L159.656 83.9375C159.335 83.9375 159.188 83.7962 159.188 83.5312C159.188 83.2663 159.335 83.125 159.656 83.125ZM155.469 82.0625L155.469 84.2188L156.062 84.2188L156.062 82.0625L155.469 82.0625ZM156.188 82.0625L157.031 84.2188L157.969 84.2188L158.781 82.0625L158.219 82.0625L157.5 83.875L157.469 83.875L156.781 82.0625L156.188 82.0625Z" fill="#000000" fill-rule="evenodd" opacity="0" stroke="none"/> </g> <g id="MenONeckDesign1BackColor1"> <path d="M479.093 54.4029L479.985 55.5299L481.763 57.7879L483.098 59.4809L484.121 60.7919L486.922 64.4529L490.205 68.8319L493.604 73.3519L495.892 76.3519L498.706 76.6969L498.592 77.6309L498.357 79.5019L497.754 84.4509L496.567 95.0089L495.799 102.048L495.184 107.916L494.891 110.84L494.597 113.787L493.699 123.584L493.295 128.488L492.927 133.398L492.691 137.142L492.512 140.896L492.355 145.406L492.188 152.165L492.072 159.429L492.029 166.695L492.047 175.414L492.152 188.495L492.257 199.688L492.283 209.092L492.257 215.129L492.203 220.252L492.158 222.751L493.253 228.316L490.56 228.783L487.871 229.279L479.816 230.869L473.424 232.158L468.037 233.148L464.569 233.723L461.618 234.161L460.174 234.347L458.94 234.506L456.495 234.777L454.086 235.003L451.701 235.188L449.103 235.348L446.268 235.476L443.155 235.569L438.954 235.631L436.068 235.628L431.182 235.624L427.151 235.549L424.671 235.473L422.401 235.369L420.317 235.242L418.218 235.079L416.097 234.876L415.038 234.753L413.382 234.561L410.002 234.092L406.034 233.464L401.989 232.74L397.689 231.924L392.578 230.904L384.37 229.297L378.882 228.316L379.978 222.751L380.099 162.236L380.082 161.117L380.054 158.879L379.948 152.165L379.78 145.409L379.622 140.892L379.443 137.136L379.208 133.398L378.748 127.264L378.244 121.137L377.697 115.014L377.295 110.833L377.109 108.897L376.482 102.782L375.817 96.6699L375.116 90.5599L374.381 84.4509L374.064 81.8719L373.639 78.4199L373.43 76.6969L376.243 76.3519L381.717 69.1449L386.953 62.2279L391.414 56.4609L393.042 54.4029L394.598 52.4379L397.623 48.7229L400.179 45.6959L402.285 43.2729L404.243 41.0879L406.057 39.1219L407.9 37.1859L409.774 35.2829L410.717 34.3589L411.793 33.3019L413.433 31.7539L415.3 30.0549L416.431 29.1059L417.853 27.9099L420.635 25.6319L422.737 23.9069L424.536 26.0959L426.856 26.0509L431.23 26.0059L436.068 25.9959L437.596 25.9929L446.109 26.0799L447.599 26.0959L449.398 23.9069L451.515 25.6449L454.307 27.9319L455.705 29.1059L456.839 30.0589L458.864 31.8999L460.537 33.4919L461.419 34.3589L462.363 35.2869L464.238 37.1939L466.08 39.1299L467.892 41.0929L469.849 43.2749L471.951 45.6939L474.507 48.7189L477.536 52.4349L479.093 54.4029Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1BackColor2"> <path d="M378.975 130.287L379.208 133.397L379.444 137.135L379.622 140.892L379.78 145.409L379.948 152.164L380.053 158.878L380.082 161.116L380.099 162.236L379.995 213.946L492.262 213.946L492.282 209.091L492.257 199.688L492.152 188.494L492.047 175.414L492.029 166.695L492.073 159.429L492.188 152.164L492.354 145.405L492.513 140.895L492.691 137.141L492.928 133.397L493.296 128.488L493.699 123.584L494.596 113.787L494.892 110.84L495.184 107.916L495.8 102.048L496.567 95.0093L497.451 87.1463L378.975 130.287Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g><g id="MenONeckDesign1BackColor3"> <path d="M380.052 185.379L379.977 222.751L378.882 228.316L384.37 229.297L392.577 230.905L397.688 231.924L401.989 232.74L406.034 233.464L410.002 234.092L413.381 234.561L415.037 234.753L416.096 234.876L418.217 235.08L420.317 235.243L422.401 235.369L424.67 235.473L427.15 235.549L431.182 235.623L436.067 235.629L438.954 235.631L443.154 235.568L446.267 235.476L449.102 235.348L451.701 235.188L454.085 235.003L456.494 234.777L458.939 234.505L460.173 234.347L461.617 234.162L464.569 233.722L468.037 233.148L473.423 232.157L479.816 230.869L487.87 229.279L490.56 228.783L493.253 228.316L492.157 222.751L492.202 220.252L492.256 215.128L492.282 209.091L492.256 199.688L492.151 188.495L492.046 175.414L492.028 166.695L492.072 159.429L492.187 152.164L492.354 145.405L492.386 144.474L380.052 185.379Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign1BackLogo"> <path d="M428.469 33.2188C427.784 33.431 427.136 33.866 426.656 34.5312C427.699 33.4332 429.247 33.4745 429.906 34.0625C430.617 34.6975 430.699 35.8653 430 36.4062C427.51 38.3343 427.534 35.6187 428.719 34.7188C428.719 34.7188 427.568 34.3232 426.688 35.0312C425.601 35.9053 425.652 38.4935 428.313 38.1875C429.861 38.0095 430.683 36.474 431.594 37.375C432.861 33.9745 430.522 32.582 428.469 33.2188ZM440.125 33.875C440.018 33.875 439.94 33.8978 439.875 33.9688C439.811 34.0398 439.781 34.1247 439.781 34.2188C439.781 34.3128 439.811 34.3988 439.875 34.4688C439.94 34.5397 440.018 34.5625 440.125 34.5625C440.231 34.5625 440.342 34.5397 440.406 34.4688C440.471 34.3987 440.5 34.3127 440.5 34.2188C440.5 34.1248 440.472 34.0398 440.406 33.9688C440.34 33.8977 440.229 33.875 440.125 33.875ZM437.875 34.0625L437.875 34.8125L437.75 34.8125L437.438 34.8125L437.063 34.8125C436.683 34.8125 436.389 34.8845 436.188 35.0625C435.985 35.2395 435.875 35.4925 435.875 35.8125L435.875 37.25L436.531 37.25L436.531 35.8125C436.531 35.5875 436.606 35.4265 436.719 35.3125C436.832 35.1985 436.975 35.1562 437.188 35.1562L437.438 35.1562L437.75 35.1562L437.875 35.1562L437.875 36.375C437.875 36.682 437.965 36.9178 438.156 37.0938C438.347 37.2688 438.645 37.3438 439 37.3438C439.119 37.3438 439.224 37.3435 439.344 37.3125C439.466 37.2815 439.562 37.2345 439.656 37.1875L439.531 36.875C439.472 36.911 439.4 36.9388 439.312 36.9688C439.224 36.9987 439.125 37.0313 439.031 37.0312C438.965 37.0312 438.903 37.025 438.844 37C438.784 36.975 438.734 36.926 438.688 36.875C438.641 36.823 438.588 36.7402 438.562 36.6562C438.536 36.5743 438.531 36.495 438.531 36.375L438.531 35.1562L439.281 35.1562L439.281 34.8125L438.531 34.8125L438.531 34.0625L437.875 34.0625ZM434.406 34.7188C434.331 34.7188 434.273 34.737 434.188 34.75C434.101 34.762 433.993 34.7572 433.906 34.7812C433.818 34.8043 433.738 34.84 433.656 34.875C433.572 34.909 433.506 34.953 433.438 35L433.594 35.2812C433.701 35.2083 433.834 35.168 433.969 35.125C434.104 35.083 434.233 35.0625 434.375 35.0625C434.563 35.0625 434.695 35.1117 434.813 35.2188C434.93 35.3247 435 35.4918 435 35.7188L434.344 35.7188C433.918 35.7188 433.609 35.7782 433.406 35.9062C433.204 36.0352 433.094 36.2088 433.094 36.4688C433.094 36.7298 433.204 36.9335 433.406 37.0625C433.609 37.1905 433.918 37.25 434.344 37.25L435.656 37.25L435.656 35.7188C435.656 35.5707 435.649 35.4325 435.594 35.3125C435.539 35.1915 435.451 35.087 435.344 35C435.237 34.912 435.091 34.8282 434.938 34.7812C434.784 34.7343 434.607 34.7188 434.406 34.7188ZM434.344 36.0312L435 36.0312L435 36.9375L434.344 36.9375C433.983 36.9375 433.812 36.7667 433.813 36.4688C433.813 36.1707 433.983 36.0312 434.344 36.0312ZM444.594 34.7188C444.519 34.7188 444.461 34.737 444.375 34.75C444.289 34.762 444.181 34.7572 444.094 34.7812C444.006 34.8043 443.927 34.84 443.844 34.875C443.761 34.909 443.694 34.953 443.625 35L443.781 35.2812C443.887 35.2083 444.021 35.168 444.156 35.125C444.291 35.083 444.422 35.0625 444.562 35.0625C444.751 35.0625 444.914 35.1117 445.031 35.2188C445.149 35.3247 445.188 35.4918 445.188 35.7188L444.531 35.7188C444.104 35.7188 443.797 35.7782 443.594 35.9062C443.392 36.0352 443.281 36.2088 443.281 36.4688C443.281 36.7298 443.392 36.9335 443.594 37.0625C443.797 37.1905 444.104 37.25 444.531 37.25L445.844 37.25L445.844 35.7188C445.844 35.5707 445.836 35.4325 445.781 35.3125C445.726 35.1915 445.637 35.087 445.531 35C445.424 34.912 445.309 34.8282 445.156 34.7812C445.002 34.7343 444.795 34.7188 444.594 34.7188ZM444.531 36.0312L445.188 36.0312L445.188 36.9375L444.531 36.9375C444.17 36.9375 444 36.7667 444 36.4688C444 36.1707 444.17 36.0312 444.531 36.0312ZM439.812 34.8125L439.812 37.25L440.469 37.25L440.469 34.8125L439.812 34.8125ZM440.625 34.8125L441.562 37.25L442.625 37.25L443.563 34.8125L442.906 34.8125L442.125 36.8438L442.063 36.8438L441.281 34.8125L440.625 34.8125Z" fill="#000000" fill-rule="evenodd" opacity="0" stroke="none"/> </g></g> </svg>';

fabric.loadSVGFromString(MenONeckDesign1Svg, function(objects, options) {
	for (let i = 0; i < objects.length; i++){
		let obj = objects[i];
		MenONeckDesign1SvgGroup.addWithUpdate(obj)
	} 
});

MenONeckDesign1SvgGroup.set({ 
	lockMovementX:true,
	lockMovementY:true,
	lockScalingX:true,
	lockScalingY:true,
	lockRotation:true,
	hasControls:false,
	hasBorders:false,
	selectable: false,
	fixed: true,
})






//#region

//design 2

const MenONeckDesign2SvgGroup = new fabric.Group

const MenONeckDesign2Svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="2560" height="1920"> <g transform="matrix(2.8317 0 0 2.8317 -0 0)"> <g id="MenONeckDesign2BackColor1"> <path d="M447.599 26.096L446.109 26.081L437.595 25.993L436.067 25.996L436.067 235.628L439.195 235.628L443.155 235.568L446.268 235.476L449.103 235.348L451.701 235.188L454.085 235.003L456.495 234.777L458.94 234.505L460.174 234.347L461.617 234.162L464.569 233.722L468.037 233.148L473.424 232.157L479.816 230.869L487.87 229.279L490.56 228.783L493.253 228.316L492.157 222.751L492.203 220.252L492.257 215.128L492.282 209.091L492.257 199.688L492.152 188.495L492.046 175.414L492.028 166.695L492.073 159.429L492.188 152.164L492.354 145.405L492.513 140.895L492.691 137.142L492.927 133.398L493.296 128.488L493.699 123.584L494.596 113.787L494.891 110.84L495.184 107.916L495.799 102.048L496.567 95.009L497.754 84.45L498.356 79.501L498.592 77.631L498.706 76.697L495.892 76.352L493.604 73.352L490.204 68.832L486.922 64.453L484.121 60.792L483.098 59.481L481.763 57.788L479.985 55.53L479.093 54.403L477.536 52.435L474.507 48.719L471.951 45.694L469.849 43.275L467.892 41.094L466.08 39.13L464.238 37.194L462.363 35.287L461.418 34.359L460.537 33.492L458.863 31.9L456.839 30.059L455.704 29.106L454.307 27.932L451.515 25.644L449.398 23.906L447.599 26.096Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign2BackColor2"> <path d="M420.635 25.6325L417.853 27.9105L416.43 29.1065L415.301 30.0555L413.432 31.7545L411.793 33.3015L410.717 34.3585L409.774 35.2825L407.9 37.1855L406.057 39.1215L404.243 41.0875L402.285 43.2725L400.18 45.6965L397.623 48.7235L394.598 52.4375L393.042 54.4025L391.414 56.4615L386.953 62.2285L381.717 69.1455L376.243 76.3515L373.429 76.6965L373.639 78.4205L374.064 81.8715L374.38 84.4505L375.116 90.5605L375.817 96.6705L376.482 102.781L377.109 108.896L377.296 110.832L377.697 115.014L378.244 121.136L378.748 127.264L379.208 133.397L379.444 137.135L379.622 140.891L379.78 145.408L379.948 152.164L380.053 158.878L380.082 161.116L380.099 162.236L379.977 222.751L378.882 228.316L384.37 229.297L392.578 230.904L397.689 231.924L401.99 232.739L406.034 233.464L410.002 234.092L413.382 234.561L415.038 234.752L416.096 234.876L418.218 235.079L420.317 235.242L422.402 235.368L424.671 235.472L427.151 235.549L431.182 235.623L435.253 235.627L436.067 235.627L436.067 25.9965L431.23 26.0055L426.856 26.0515L424.537 26.0965L422.737 23.9065L420.635 25.6325Z" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign2FrontColor2"> <path d="M199.702 37.9688L198.992 38.8518L198.227 39.8818L196.997 41.4908L196.048 42.5868L195.111 43.5288L193.994 44.5078L193.37 44.9998L192.73 45.4668L191.407 46.3288L190.031 47.0908L188.614 47.7548L187.16 48.3158L185.679 48.7758L184.18 49.1328L182.669 49.3848L181.656 49.4938L180.641 49.5588L179.42 49.5948L177.589 49.5958L177.589 231.015L180.988 231.019L187.621 230.991L194.251 230.923L200.897 230.809L204.198 230.728L208.994 230.611L218.581 230.29L227.249 230.008L233.027 229.849L233.24 227.955L233.451 226.19L233.561 224.7L233.575 224.163L233.645 221.542L233.732 216.168L233.779 209.837L233.757 199.973L233.625 188.234L233.508 176.418L233.477 168.542L233.506 161.979L233.6 155.417L233.789 148.808L234.081 142.202L234.465 135.599L234.932 128.999L235.585 121.079L236.324 113.165L237.297 103.672L238.87 89.4398L239.436 84.7628L239.693 82.7048L239.816 81.6768L237.003 81.3308L234.402 77.9818L230.553 72.9088L226.687 67.7868L224.709 65.2588L224.293 64.7368L223.454 63.6958L220.96 60.5568L217.326 55.8338L214.373 52.1438L212.368 49.7448L210.624 47.7418L209.1 46.0728L207.792 44.6968L206.455 43.3488L205.085 42.0328L204.392 41.3998L203.453 40.5448L201.516 38.9318L199.984 37.6458L199.702 37.9688Z" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign2FrontColor1"> <path d="M153.473 39.0929L151.658 40.6039L150.785 41.3999L150.12 42.0059L148.803 43.2679L147.517 44.5599L146.259 45.8779L144.79 47.4779L143.11 49.3979L141.174 51.7009L138.231 55.3569L134.817 59.7789L134.218 60.5569L132.409 62.8969L128.81 67.5869L122.45 75.8499L118.174 81.3309L115.361 81.6759L115.47 82.5759L115.694 84.3669L116.307 89.4399L117.863 103.611L118.834 113.094L119.575 121.014L120.233 128.945L120.704 135.559L121.092 142.178L121.386 148.798L121.576 155.417L121.671 161.977L121.699 168.538L121.669 176.411L121.552 188.223L121.42 199.966L121.398 209.833L121.445 216.166L121.531 221.542L121.601 224.163L121.616 224.7L121.726 226.189L121.937 227.955L122.149 229.849L128.653 230.059L139.842 230.421L149.248 230.683L158.084 230.889L162.933 230.956L164.572 230.982L169.162 231.015L174.635 231.014L177.588 231.014L177.588 49.5959L177.366 49.5959L175.14 49.5639L173.668 49.4889L172.443 49.3669L171.213 49.1719L169.719 48.8319L168.243 48.3919L166.792 47.8529L165.375 47.2139L164 46.4759L162.675 45.6379L162.036 45.1819L161.411 44.7019L160.803 44.1959L160.213 43.6659L159.294 42.7789L158.551 42.0039L157.837 41.1919L156.995 40.1449L156.297 39.2549L155.671 38.5749L154.927 37.8719L153.473 39.0929Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign2SideLeft"> <path d="M39.1845 81.0238L39.1445 81.4708L38.9425 83.7148L38.6375 87.0918L38.4965 88.8048L38.0805 93.8338L37.5055 101.291L36.9045 109.669L36.6095 114.584L36.5665 115.289L36.3855 118.315L36.0165 125.907L35.7605 132.586L35.5805 138.281L35.3675 146.613L35.2745 152.606L35.2365 155.055L35.1955 160.055L35.1835 165.923L35.2265 175.03L35.3465 185.84L35.4865 200.958L35.4975 211.107L35.4135 219.635L35.3305 223.93L35.2145 228.248L37.1485 233.667L39.6035 233.247L42.0655 232.869L44.5315 232.535L47.0035 232.245L49.8125 231.975L52.6255 231.781L55.4425 231.668L58.2585 231.639L66.1375 231.697L71.3935 231.77L75.7755 231.87L80.1585 232.02L80.4605 226.355L80.3685 218.832L80.3355 211.337L80.3535 202.371L80.4425 188.963L80.5515 174.734L80.5465 162.764L80.4785 155.065L80.3685 148.518L80.2855 145.316L80.1375 139.623L79.8715 131.548L79.6245 125.393L79.3545 119.741L79.1975 116.981L79.0115 113.718L78.6075 107.309L78.1585 100.907L77.6635 94.5108L77.3935 91.3498L77.1725 88.7708L76.8775 85.3148L76.7265 83.5898L73.9025 83.8368L73.2855 84.4108L72.1895 85.5378L71.0375 86.7798L69.6805 88.3088L67.6065 90.6128L66.1855 92.0878L64.9625 93.2458L63.6925 94.3138L63.0975 94.7398L62.4105 95.1568L61.6545 95.5498L60.8535 95.9038L60.0275 96.2038L59.2015 96.4338L58.3955 96.5788L57.6325 96.6238L57.1475 96.5798L56.6485 96.4698L56.1425 96.3018L55.6365 96.0858L54.8945 95.6948L54.1955 95.2498L53.5605 94.7848L53.0175 94.3318L52.3275 93.6928L51.6585 93.0278L50.3745 91.6298L48.9095 89.8618L46.7945 87.1118L45.2915 85.1248L43.9925 83.5058L43.1335 82.4988L42.3845 81.6698L42.0075 81.2798L39.1845 81.0238Z" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign2SideRight"> <path d="M328.543 80.8835L328.583 81.3305L328.784 83.5745L329.09 86.9515L329.231 88.6645L329.647 93.6935L330.222 101.15L330.823 109.528L331.118 114.444L331.16 115.148L331.342 118.174L331.711 125.766L331.967 132.445L332.147 138.14L332.359 146.472L332.453 152.465L332.491 154.914L332.532 159.914L332.544 165.783L332.501 174.889L332.381 185.7L332.24 200.817L332.23 210.966L332.314 219.494L332.397 223.79L332.513 228.107L330.579 233.527L328.123 233.107L325.662 232.729L323.196 232.395L320.724 232.104L317.915 231.835L315.102 231.641L312.285 231.527L309.469 231.499L301.589 231.557L296.334 231.63L291.952 231.729L287.569 231.88L287.267 226.214L287.359 218.691L287.391 211.197L287.374 202.23L287.285 188.823L287.176 174.593L287.181 162.623L287.249 154.924L287.359 148.378L287.442 145.175L287.59 139.482L287.856 131.407L288.103 125.252L288.373 119.6L288.53 116.84L288.716 113.577L289.12 107.168L289.569 100.766L290.064 94.3705L290.334 91.2095L290.555 88.6305L290.85 85.1745L291.001 83.4495L293.825 83.6965L294.442 84.2705L295.538 85.3975L296.69 86.6395L298.047 88.1685L300.121 90.4725L301.542 91.9475L302.765 93.1055L304.035 94.1735L304.63 94.5995L305.317 95.0165L306.073 95.4095L306.874 95.7635L307.699 96.0635L308.526 96.2935L309.332 96.4385L310.094 96.4835L310.58 96.4395L311.079 96.3295L311.585 96.1615L312.091 95.9455L312.832 95.5545L313.532 95.1095L314.166 94.6445L314.71 94.1915L315.4 93.5525L316.069 92.8875L317.353 91.4895L318.818 89.7215L320.933 86.9715L322.435 84.9845L323.735 83.3655L324.594 82.3585L325.343 81.5295L325.72 81.1395L328.543 80.8835Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign2SleeveLeft"> <path d="M605.011 98.8862L604.508 100.23L602.427 105.692L601.7 107.499L600.944 109.295L600.052 111.312L599.128 113.312L598.175 115.296L597.193 117.263L596.185 119.215L595.151 121.152L593.013 124.987L591.689 127.264L590.338 129.526L587.563 134.006L585.428 137.335L583.257 140.642L578.84 147.209L576.861 150.089L574.847 152.958L572.802 155.814L570.73 158.654L566.518 164.28L562.239 169.816L561.484 170.757L560.835 171.525L560.275 172.14L559.79 172.622L559.286 173.053L558.843 173.357L558.357 173.603L557.627 173.855L556.961 174.061L556.061 174.442L555.555 174.723L554.887 175.075L553.867 175.569L553.298 175.84L554.461 178.944L555.779 181.719L556.992 184.355L558.118 186.895L559.178 189.388L560.191 191.881L561.176 194.42L562.155 197.052L562.979 199.383L563.763 201.725L564.513 204.075L565.234 206.435L563.435 212.104L637.75 212.109L658.763 212.111L669.272 212.111L668.233 208.76L667.514 206.442L668.219 204.075L668.954 201.716L669.723 199.366L670.53 197.031L671.513 194.34L672.533 191.681L673.591 189.053L674.684 186.446L675.814 183.859L676.978 181.283L678.174 178.715L679.403 176.15L678.606 175.633L677.866 175.14L677.22 174.771L676.747 174.545L676.237 174.403L675.724 174.321L674.987 174.184L674.432 174.024L673.915 173.818L673.342 173.524L672.813 173.195L672.234 172.777L671.597 172.258L670.898 171.625L669.699 170.421L668.534 169.127L667.403 167.757L666.304 166.323L665.022 164.536L663.777 162.696L662.328 160.45L660.23 157.083L658.72 154.64L657.481 152.697L657.037 152.027L656.088 150.589L654.175 147.722L650.756 142.572L648.51 139.118L646.676 136.215L644.888 133.286L643.444 130.818L642.047 128.323L640.706 125.796L639.427 123.235L638.73 121.751L638.059 120.254L636.791 117.227L635.599 114.168L634.463 111.088L632.864 111.448L631.264 111.764L630.193 111.939L629.116 112.076L628.21 112.157L627.299 112.203L626.379 112.211L625.448 112.177L623.625 112.018L622.701 111.897L621.778 111.748L620.862 111.567L619.956 111.354L619.07 111.106L618.206 110.823L617.21 110.438L616.526 110.127L616.222 109.99L615.255 109.479L614.321 108.904L613.433 108.264L612.605 107.559L611.85 106.789L611.504 106.379L611.18 105.952L610.543 104.977L609.983 103.958L609.382 102.693L608.567 100.754L608.141 99.7152L607.921 99.2042L605.264 98.2152L605.011 98.8862Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign2SleeveLeftKnitTrim"> <path d="M563.026 199.52L563.764 201.725L564.514 204.076L565.235 206.436L563.437 212.105L637.751 212.109L658.764 212.111L669.273 212.112L668.234 208.76L667.515 206.443L668.22 204.076L668.955 201.716L669.673 199.52L563.026 199.52Z" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign2SleeveRight"> <path d="M814.247 99.2273L814.026 99.7383L813.601 100.778L812.785 102.716L812.185 103.981L811.624 105L810.987 105.975L810.664 106.402L810.318 106.812L809.562 107.583L808.734 108.287L807.846 108.927L806.913 109.502L805.945 110.013L805.642 110.15L804.957 110.461L803.962 110.846L803.098 111.129L802.211 111.377L801.306 111.59L800.389 111.771L799.466 111.921L798.543 112.041L796.719 112.2L795.789 112.235L794.868 112.227L793.956 112.181L793.052 112.1L791.975 111.962L790.903 111.787L789.303 111.471L787.705 111.111L786.568 114.191L785.377 117.25L784.108 120.277L783.438 121.775L782.741 123.258L781.462 125.82L780.121 128.346L778.724 130.841L777.279 133.309L775.492 136.239L773.657 139.141L771.411 142.596L767.992 147.745L766.079 150.612L765.13 152.05L764.687 152.72L763.446 154.663L761.937 157.106L759.839 160.475L758.389 162.719L757.146 164.559L755.864 166.346L754.764 167.78L753.633 169.151L752.469 170.444L751.269 171.649L750.57 172.281L749.934 172.8L749.354 173.219L748.826 173.547L748.252 173.841L747.736 174.048L747.18 174.207L746.444 174.345L745.931 174.426L745.419 174.569L744.948 174.795L744.302 175.164L743.562 175.656L742.764 176.174L743.993 178.738L745.19 181.306L746.354 183.882L747.482 186.469L748.577 189.076L749.634 191.706L750.655 194.363L751.638 197.054L752.445 199.389L753.213 201.739L753.949 204.099L754.653 206.466L753.934 208.783L752.896 212.135L763.405 212.134L784.416 212.132L858.732 212.127L856.934 206.458L857.654 204.099L858.405 201.748L859.188 199.406L860.012 197.076L860.991 194.443L861.977 191.904L862.989 189.411L864.049 186.918L865.175 184.378L866.388 181.743L867.707 178.967L868.87 175.863L868.301 175.592L867.28 175.098L866.613 174.746L866.107 174.465L865.206 174.084L864.541 173.878L863.811 173.626L863.325 173.38L862.882 173.076L862.378 172.645L861.892 172.163L861.332 171.548L860.682 170.781L859.928 169.839L855.65 164.303L851.438 158.678L849.366 155.837L847.321 152.981L845.307 150.112L843.327 147.232L838.911 140.665L836.74 137.358L834.605 134.029L831.829 129.549L830.479 127.287L829.155 125.01L827.017 121.175L825.983 119.238L824.974 117.286L823.993 115.319L823.039 113.335L822.116 111.336L821.223 109.318L820.467 107.522L819.74 105.715L817.659 100.253L817.157 98.9093L816.904 98.2393L814.247 99.2273Z" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign2SleeveRightKnitTrim"> <path d="M752.497 199.533L753.215 201.729L753.951 204.09L754.655 206.456L753.936 208.773L752.898 212.125L763.407 212.124L784.418 212.122L858.734 212.118L856.936 206.449L857.656 204.089L858.406 201.738L859.144 199.533L752.497 199.533Z" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign2KnitTrimTop"> <path d="M99.8766 32.4106L99.8766 15.4026L177.66 15.4026L255.301 15.4026L255.301 32.4106L177.66 32.4106L99.8766 32.4106Z" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g></g> </svg>';

fabric.loadSVGFromString(MenONeckDesign2Svg, function(objects, options) {
	for (let i = 0; i < objects.length; i++){
		let obj = objects[i];
		MenONeckDesign2SvgGroup.addWithUpdate(obj)
	} 
});

MenONeckDesign2SvgGroup.set({ 
	lockMovementX:true,
	lockMovementY:true,
	lockScalingX:true,
	lockScalingY:true,
	lockRotation:true,
	hasControls:false,
	hasBorders:false,
	selectable: false,
	fixed: true,
})
//#engregion


//#region Design3

//design 3

const MenONeckDesign3SvgGroup = new fabric.Group

const MenONeckDesign3Svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="2560" height="1920"> <g transform="matrix(2.8317 0 0 2.8317 -0 0)"> <g id="MenONeckDesign3KnitTrimTop"> <path d="M99.8766 32.4106L99.8766 15.4026L177.66 15.4026L255.301 15.4026L255.301 32.4106L177.66 32.4106L99.8766 32.4106Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign3LeftSleeveColor3"> <path d="M605.011 98.8862L604.508 100.23L602.427 105.692L601.7 107.499L600.944 109.295L600.052 111.312L599.128 113.312L598.175 115.296L597.193 117.263L596.185 119.215L595.151 121.152L593.013 124.987L591.689 127.264L590.338 129.526L587.563 134.006L585.428 137.335L583.257 140.642L578.84 147.209L576.861 150.089L574.847 152.958L572.802 155.814L570.73 158.654L566.518 164.28L562.239 169.816L561.484 170.757L560.835 171.525L560.275 172.14L559.79 172.622L559.286 173.053L558.843 173.357L558.357 173.603L557.627 173.855L556.961 174.061L556.061 174.442L555.555 174.723L554.887 175.075L553.867 175.569L553.298 175.84L554.461 178.944L555.779 181.719L556.992 184.355L558.118 186.895L559.178 189.388L560.191 191.881L561.176 194.42L562.155 197.052L562.979 199.383L563.763 201.725L564.513 204.075L565.234 206.435L563.435 212.104L637.75 212.109L658.763 212.111L669.272 212.111L668.233 208.76L667.514 206.442L668.219 204.075L668.954 201.716L669.723 199.366L670.53 197.031L671.513 194.34L672.533 191.681L673.591 189.053L674.684 186.446L675.814 183.859L676.978 181.283L678.174 178.715L679.403 176.15L678.606 175.633L677.866 175.14L677.22 174.771L676.747 174.545L676.237 174.403L675.724 174.321L674.987 174.184L674.432 174.024L673.915 173.818L673.342 173.524L672.813 173.195L672.234 172.777L671.597 172.258L670.898 171.625L669.699 170.421L668.534 169.127L667.403 167.757L666.304 166.323L665.022 164.536L663.777 162.696L662.328 160.45L660.23 157.083L658.72 154.64L657.481 152.697L657.037 152.027L656.088 150.589L654.175 147.722L650.756 142.572L648.51 139.118L646.676 136.215L644.888 133.286L643.444 130.818L642.047 128.323L640.706 125.796L639.427 123.235L638.73 121.751L638.059 120.254L636.791 117.227L635.599 114.168L634.463 111.088L632.864 111.448L631.264 111.764L630.193 111.939L629.116 112.076L628.21 112.157L627.299 112.203L626.379 112.211L625.448 112.177L623.625 112.018L622.701 111.897L621.778 111.748L620.862 111.567L619.956 111.354L619.07 111.106L618.206 110.823L617.21 110.438L616.526 110.127L616.222 109.99L615.255 109.479L614.321 108.904L613.433 108.264L612.605 107.559L611.85 106.789L611.504 106.379L611.18 105.952L610.543 104.977L609.983 103.958L609.382 102.693L608.567 100.754L608.141 99.7152L607.921 99.2042L605.264 98.2152L605.011 98.8862Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign3LeftSleeveColor2"> <path d="M653.438 146.625L652.812 147.031L652.812 184.219L654 183.5L654 198.844L652.812 199.562L652.812 212.125L654.594 212.125L654.594 203.75L654.594 198.469L654.594 183.156L654.594 166.531L654.594 148.344L654.188 147.719L653.438 146.625ZM579.188 146.688L578.844 147.219L577.938 148.5L577.938 166.531L577.938 183.156L577.938 198.469L577.938 203.75L577.938 212.094L579.75 212.094L579.75 199.562L578.531 198.844L578.531 183.5L579.75 184.219L579.75 147.031L579.188 146.688ZM581.594 148.125L581.594 168.719L581.594 185.344L581.594 200.656L581.594 205.938L581.594 212.094L583.25 212.094L583.25 201.656L582.125 201L582.125 185.656L583.25 186.344L583.25 149.125L581.594 148.125ZM650.969 148.125L649.281 149.125L649.281 186.344L650.406 185.656L650.406 201L649.281 201.688L649.281 212.125L650.969 212.125L650.969 205.938L650.969 200.656L650.969 185.344L650.969 168.719L650.969 148.125ZM585.219 150.312L585.219 170.906L585.219 187.5L585.219 202.844L585.219 208.094L585.219 212.094L586.75 212.094L586.75 203.781L585.719 203.156L585.719 187.812L586.75 188.438L586.75 151.219L585.219 150.312ZM647.344 150.312L645.781 151.219L645.781 188.438L646.812 187.812L646.812 203.156L645.781 203.781L645.781 212.094L647.344 212.125L647.344 208.094L647.344 202.844L647.344 187.5L647.344 170.906L647.344 150.312ZM656.312 150.906L656.312 182.125L657.594 181.344L657.594 196.688L656.312 197.469L656.312 212.125L658.219 212.125L658.219 201.562L658.219 196.312L658.219 180.969L658.219 164.344L658.219 153.875L657.469 152.688L657.031 152.031L656.312 150.906ZM576.25 150.969L574.844 152.969L574.312 153.688L574.312 164.344L574.312 180.969L574.312 196.312L574.312 201.562L574.312 212.094L576.25 212.094L576.25 197.469L574.969 196.688L574.969 181.344L576.25 182.125L576.25 150.969ZM588.844 152.5L588.844 173.094L588.844 189.688L588.844 205.031L588.844 210.281L588.844 212.094L590.25 212.094L590.25 205.875L589.312 205.312L589.312 189.969L590.25 190.531L590.25 153.344L588.844 152.5ZM643.688 152.5L642.281 153.344L642.281 190.531L643.25 189.969L643.25 205.312L642.281 205.875L642.281 212.125L643.688 212.125L643.688 210.281L643.688 205.031L643.688 189.688L643.688 173.094L643.688 152.5ZM592.5 154.656L592.5 175.25L592.5 191.875L592.5 207.219L592.5 212.094L593.75 212.094L593.75 207.969L592.906 207.469L592.906 192.125L593.75 192.656L593.75 155.438L592.5 154.656ZM640.062 154.656L638.781 155.438L638.781 192.656L639.656 192.125L639.656 207.469L638.781 207.969L638.781 212.094L640.062 212.094L640.062 207.219L640.062 191.875L640.062 175.25L640.062 154.656ZM572.75 155.875L570.719 158.656L570.688 158.719L570.688 162.156L570.688 178.781L570.688 194.125L570.688 199.375L570.688 212.094L572.75 212.094L572.75 195.375L571.375 194.531L571.375 179.188L572.75 180.031L572.75 155.875ZM659.812 156.375L659.812 180.031L661.188 179.188L661.188 194.531L659.812 195.375L659.812 212.125L661.875 212.125L661.875 199.375L661.875 194.125L661.875 178.781L661.875 162.156L661.875 159.688L660.219 157.094L659.812 156.375ZM596.125 156.844L596.125 177.438L596.125 194.062L596.125 209.406L596.125 212.094L597.25 212.094L597.25 210.094L596.5 209.625L596.5 194.281L597.25 194.75L597.25 157.531L596.125 156.844ZM636.438 156.844L635.281 157.531L635.281 194.75L636.062 194.281L636.062 209.625L635.281 210.094L635.281 212.094L636.438 212.094L636.438 209.406L636.438 194.062L636.438 177.438L636.438 156.844ZM599.75 159.031L599.75 179.625L599.75 196.25L599.75 211.594L599.75 212.094L600.625 212.094L600.062 211.781L600.062 196.438L600.75 196.844L600.75 159.656L599.75 159.031ZM632.781 159.031L631.781 159.656L631.781 196.844L632.469 196.438L632.469 211.781L631.906 212.094L632.781 212.094L632.781 211.594L632.781 196.25L632.781 179.625L632.781 159.031ZM569.25 160.625L567.062 163.562L567.062 176.594L567.062 191.938L567.062 197.188L567.062 212.094L569.25 212.094L569.25 193.25L567.781 192.375L567.781 177.031L569.25 177.938L569.25 160.625ZM603.375 161.219L603.375 181.812L603.375 198.438L603.375 212.094L603.656 212.094L603.656 198.594L604.25 198.969L604.25 161.75L603.375 161.219ZM629.156 161.219L628.281 161.75L628.281 198.969L628.875 198.594L628.875 212.094L629.156 212.094L629.156 198.438L629.156 181.812L629.156 161.219ZM663.312 161.969L663.312 177.906L664.781 177.031L664.781 192.375L663.312 193.25L663.312 212.125L665.5 212.125L665.5 197.188L665.5 191.938L665.5 176.594L665.5 165.188L665.031 164.531L663.781 162.688L663.312 161.969ZM607.031 163.406L607.031 184L607.031 200.625L607.031 212.094L607.25 212.094L607.25 200.75L607.75 201.062L607.75 163.844L607.031 163.406ZM625.531 163.406L624.781 163.844L624.781 201.062L625.281 200.75L625.281 212.094L625.531 212.094L625.531 200.625L625.531 184L625.531 163.406ZM565.75 165.281L563.406 168.281L563.406 174.406L563.406 189.75L563.406 195L563.406 200.688L563.75 201.719L564.5 204.062L565.219 206.438L563.438 212.094L565.75 212.094L565.75 191.156L564.188 190.219L564.188 174.875L565.75 175.812L565.75 165.281ZM610.656 165.594L610.656 186.188L610.656 202.781L610.656 212.094L610.844 212.094L610.844 202.906L611.25 203.156L611.25 165.969L610.656 165.594ZM621.906 165.594L621.281 165.969L621.281 203.156L621.719 202.906L621.719 212.094L621.906 212.094L621.906 202.781L621.906 186.188L621.906 165.594ZM666.812 166.969L666.812 175.812L668.344 174.875L668.344 190.219L666.812 191.156L666.812 212.125L669.125 212.125L669.125 211.656L668.219 208.75L667.5 206.438L668.219 204.062L668.969 201.719L669.125 201.188L669.125 195L669.125 189.75L669.125 174.406L669.125 169.781L668.531 169.125L667.406 167.75L666.812 166.969ZM614.281 167.781L614.281 188.375L614.281 204.969L614.281 212.094L614.438 212.094L614.438 205.062L614.75 205.25L614.75 168.062L614.281 167.781ZM618.25 167.781L617.781 168.062L617.781 205.25L618.125 205.062L618.125 212.094L618.25 212.094L618.25 204.969L618.25 188.375L618.25 167.781ZM562.25 169.812L561.5 170.75L560.844 171.531L560.281 172.125L559.781 172.625L559.781 187.562L559.781 190.875L560.188 191.875L561.188 194.406L562.156 197.062L562.25 197.281L562.25 189.062L560.594 188.062L560.594 172.719L562.25 173.719L562.25 169.812ZM670.312 171.031L670.312 173.719L671.938 172.719L671.938 188.062L670.312 189.062L670.312 197.688L670.531 197.031L671.5 194.344L672.531 191.688L672.75 191.125L672.75 187.562L672.75 173.156L672.219 172.781L671.594 172.25L670.906 171.625L670.312 171.031ZM557 174.031L556.969 174.062L556.156 174.406L556.156 182.531L557 184.344L557 174.031ZM675.531 174.281L675.531 184.5L675.812 183.844L676.406 182.562L676.406 174.438L676.25 174.406L675.719 174.312L675.531 174.281ZM553.438 175.781L553.312 175.844L553.438 176.188L553.438 175.781ZM679.125 175.969L679.125 176.75L679.406 176.156L679.125 175.969ZM674.688 186.406L673.812 186.938L673.812 188.531L674.688 186.438L674.688 186.406ZM557.938 186.469L558.125 186.906L558.75 188.375L558.75 186.938L557.938 186.469Z" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign3LeftSleeveColor1"> <path d="M568.531 163.219L568.531 183.812L568.531 200.438L568.531 212.094L568.938 212.094L568.938 200.688L569.812 201.188L569.812 164L568.531 163.219ZM664 163.219L662.75 164L662.75 201.188L663.594 200.688L663.594 212.125L664 212.125L664 200.438L664 183.812L664 163.219ZM566.312 164.562L564.906 166.375L564.906 181.625L564.906 198.25L564.906 205.344L565.219 206.438L564.906 207.469L564.906 212.094L565.375 212.094L565.375 198.531L566.312 199.094L566.312 164.562ZM572.156 165.406L572.156 186L572.156 202.625L572.156 212.094L572.531 212.094L572.531 202.844L573.312 203.312L573.312 166.094L572.156 165.406ZM660.375 165.406L659.25 166.094L659.25 203.312L660 202.844L660 212.125L660.375 212.125L660.375 202.625L660.375 186L660.375 165.406ZM666.25 166.219L666.25 199.094L667.188 198.531L667.188 212.125L667.656 212.125L667.656 206.844L667.5 206.438L667.656 206.031L667.656 198.25L667.656 181.625L667.656 168.031L667.406 167.75L666.312 166.312L666.25 166.219ZM656.844 167.562L655.812 168.156L655.812 205.375L656.5 204.969L656.5 212.094L656.844 212.094L656.844 204.781L656.844 188.156L656.844 167.562ZM575.812 167.594L575.812 188.188L575.812 204.812L575.812 212.094L576.125 212.094L576.125 205L576.812 205.406L576.812 168.188L575.812 167.594ZM562.812 169.094L562.25 169.812L561.5 170.75L561.281 171L561.281 179.469L561.281 194.688L561.938 196.469L562.812 197L562.812 169.094ZM653.188 169.75L652.312 170.281L652.312 207.469L652.906 207.125L652.906 212.094L653.188 212.094L653.188 206.969L653.188 190.344L653.188 169.75ZM579.438 169.781L579.438 190.375L579.438 207L579.438 212.094L579.719 212.094L579.719 207.156L580.312 207.5L580.312 170.312L579.438 169.781ZM669.75 170.469L669.75 197L670.781 196.375L671.281 195L671.281 179.469L671.281 171.969L670.906 171.625L669.75 170.469ZM649.562 171.938L648.812 172.375L648.812 209.594L649.344 209.281L649.344 212.094L649.562 212.094L649.562 209.125L649.562 192.531L649.562 171.938ZM583.062 171.969L583.062 192.562L583.062 209.156L583.062 212.094L583.312 212.094L583.312 209.312L583.812 209.625L583.812 172.406L583.062 171.969ZM559.312 173.031L559.281 173.062L558.844 173.344L558.344 173.594L557.625 173.844L557.625 177.281L557.625 185.812L558.125 186.906L559.188 189.375L559.312 189.688L559.312 173.031ZM673.25 173.469L673.25 189.938L673.594 189.062L674.688 186.438L674.906 185.938L674.906 177.281L674.906 174.156L674.438 174.031L673.906 173.812L673.344 173.531L673.25 173.469ZM645.938 174.125L645.312 174.469L645.312 211.688L645.75 211.438L645.75 212.094L645.938 212.094L645.938 211.312L645.938 194.719L645.938 174.125ZM586.719 174.156L586.719 194.75L586.719 211.344L586.719 212.094L586.906 212.094L586.906 211.469L587.312 211.719L587.312 174.5L586.719 174.156ZM676.75 174.531L676.75 181.812L676.969 181.281L678.188 178.719L678.531 177.938L678.531 175.594L677.875 175.156L677.219 174.781L676.75 174.531ZM555.812 174.594L555.562 174.719L554.875 175.062L554 175.5L554 177.719L554.469 178.938L555.781 181.719L555.812 181.781L555.812 174.594ZM642.312 176.281L641.812 176.594L641.812 212.094L642.312 212.094L642.312 196.875L642.312 176.281ZM590.344 176.312L590.344 196.906L590.344 212.094L590.812 212.094L590.812 176.625L590.344 176.312Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign3RightSleeveColor3"> <path d="M814.247 99.2273L814.026 99.7383L813.601 100.778L812.785 102.716L812.185 103.981L811.624 105L810.987 105.975L810.664 106.402L810.318 106.812L809.562 107.583L808.734 108.287L807.846 108.927L806.913 109.502L805.945 110.013L805.642 110.15L804.957 110.461L803.962 110.846L803.098 111.129L802.211 111.377L801.306 111.59L800.389 111.771L799.466 111.921L798.543 112.041L796.719 112.2L795.789 112.235L794.868 112.227L793.956 112.181L793.052 112.1L791.975 111.962L790.903 111.787L789.303 111.471L787.705 111.111L786.568 114.191L785.377 117.25L784.108 120.277L783.438 121.775L782.741 123.258L781.462 125.82L780.121 128.346L778.724 130.841L777.279 133.309L775.492 136.239L773.657 139.141L771.411 142.596L767.992 147.745L766.079 150.612L765.13 152.05L764.687 152.72L763.446 154.663L761.937 157.106L759.839 160.475L758.389 162.719L757.146 164.559L755.864 166.346L754.764 167.78L753.633 169.151L752.469 170.444L751.269 171.649L750.57 172.281L749.934 172.8L749.354 173.219L748.826 173.547L748.252 173.841L747.736 174.048L747.18 174.207L746.444 174.345L745.931 174.426L745.419 174.569L744.948 174.795L744.302 175.164L743.562 175.656L742.764 176.174L743.993 178.738L745.19 181.306L746.354 183.882L747.482 186.469L748.577 189.076L749.634 191.706L750.655 194.363L751.638 197.054L752.445 199.389L753.213 201.739L753.949 204.099L754.653 206.466L753.934 208.783L752.896 212.135L763.405 212.134L784.416 212.132L858.732 212.127L856.934 206.458L857.654 204.099L858.405 201.748L859.188 199.406L860.012 197.076L860.991 194.443L861.977 191.904L862.989 189.411L864.049 186.918L865.175 184.378L866.388 181.743L867.707 178.967L868.87 175.863L868.301 175.592L867.28 175.098L866.613 174.746L866.107 174.465L865.206 174.084L864.541 173.878L863.811 173.626L863.325 173.38L862.882 173.076L862.378 172.645L861.892 172.163L861.332 171.548L860.682 170.781L859.928 169.839L855.65 164.303L851.438 158.678L849.366 155.837L847.321 152.981L845.307 150.112L843.327 147.232L838.911 140.665L836.74 137.358L834.605 134.029L831.829 129.549L830.479 127.287L829.155 125.01L827.017 121.175L825.983 119.238L824.974 117.286L823.993 115.319L823.039 113.335L822.116 111.336L821.223 109.318L820.467 107.522L819.74 105.715L817.659 100.253L817.157 98.9093L816.904 98.2393L814.247 99.2273Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign3RightSleeveColor2"> <path d="M842.906 146.625L842.25 147.031L842.25 184.219L843.469 183.5L843.469 198.844L842.25 199.562L842.25 212.125L844.062 212.125L844.062 203.75L844.062 198.469L844.062 183.156L844.062 166.531L844.062 148.312L843.312 147.219L842.906 146.625ZM768.688 146.719L768 147.75L767.406 148.625L767.406 166.531L767.406 183.156L767.406 198.469L767.406 203.75L767.406 212.125L769.219 212.125L769.219 199.562L768 198.844L768 183.5L769.219 184.219L769.219 147.031L768.688 146.719ZM771.062 148.125L771.062 168.719L771.062 185.344L771.062 200.656L771.062 205.938L771.062 212.125L772.719 212.125L772.719 201.656L771.594 201L771.594 185.656L772.719 186.344L772.719 149.125L771.062 148.125ZM840.438 148.125L838.75 149.125L838.75 186.344L839.875 185.656L839.875 201L838.75 201.688L838.75 212.125L840.438 212.125L840.438 205.938L840.438 200.656L840.438 185.344L840.438 168.719L840.438 148.125ZM774.688 150.312L774.688 170.906L774.688 187.5L774.688 202.844L774.688 208.094L774.688 212.125L776.219 212.125L776.219 203.781L775.188 203.156L775.188 187.812L776.219 188.438L776.219 151.219L774.688 150.312ZM836.781 150.312L835.25 151.219L835.25 188.438L836.281 187.812L836.281 203.156L835.25 203.781L835.25 212.125L836.781 212.125L836.781 208.094L836.781 202.844L836.781 187.5L836.781 170.906L836.781 150.312ZM845.75 150.75L845.75 182.125L847.062 181.344L847.062 196.688L845.75 197.469L845.75 212.125L847.688 212.125L847.688 201.562L847.688 196.312L847.688 180.969L847.688 164.344L847.688 153.5L847.312 152.969L845.75 150.75ZM765.719 151.156L765.125 152.062L764.688 152.719L763.781 154.125L763.781 164.344L763.781 180.969L763.781 196.312L763.781 201.562L763.781 212.125L765.719 212.125L765.719 197.469L764.406 196.688L764.406 181.344L765.719 182.125L765.719 151.156ZM778.312 152.5L778.312 173.094L778.312 189.688L778.312 205.031L778.312 210.281L778.312 212.125L779.719 212.125L779.719 205.875L778.781 205.312L778.781 189.969L779.719 190.531L779.719 153.344L778.312 152.5ZM833.156 152.5L831.75 153.344L831.75 190.531L832.688 189.969L832.688 205.312L831.75 205.875L831.75 212.125L833.156 212.125L833.156 210.281L833.156 205.031L833.156 189.688L833.156 173.094L833.156 152.5ZM781.938 154.656L781.938 175.25L781.938 191.875L781.938 207.219L781.938 212.125L783.219 212.125L783.219 207.969L782.375 207.469L782.375 192.125L783.219 192.656L783.219 155.438L781.938 154.656ZM829.531 154.656L828.25 155.438L828.25 192.656L829.125 192.125L829.125 207.469L828.25 207.969L828.25 212.125L829.531 212.125L829.531 207.219L829.531 191.875L829.531 175.25L829.531 154.656ZM849.25 155.688L849.25 180.031L850.656 179.188L850.656 194.531L849.25 195.375L849.25 212.125L851.344 212.125L851.344 199.375L851.344 194.125L851.344 178.781L851.344 162.156L851.344 158.531L849.375 155.844L849.25 155.688ZM762.219 156.656L761.938 157.094L760.156 159.969L760.156 162.156L760.156 178.781L760.156 194.125L760.156 199.375L760.156 212.125L762.219 212.125L762.219 195.375L760.844 194.531L760.844 179.188L762.219 180.031L762.219 156.656ZM785.594 156.844L785.594 177.438L785.594 194.062L785.594 209.406L785.594 212.125L786.719 212.125L786.719 210.094L785.938 209.625L785.938 194.281L786.719 194.75L786.719 157.531L785.594 156.844ZM825.906 156.844L824.75 157.531L824.75 194.75L825.531 194.281L825.531 209.625L824.75 210.094L824.75 212.125L825.906 212.125L825.906 209.406L825.906 194.062L825.906 177.438L825.906 156.844ZM789.219 159.031L789.219 179.625L789.219 196.25L789.219 211.594L789.219 212.125L790.125 212.125L789.531 211.781L789.531 196.438L790.219 196.844L790.219 159.656L789.219 159.031ZM822.25 159.031L821.25 159.656L821.25 196.844L821.938 196.438L821.938 211.781L821.344 212.125L822.25 212.125L822.25 211.594L822.25 196.25L822.25 179.625L822.25 159.031ZM852.781 160.469L852.781 177.906L854.219 177.031L854.219 192.375L852.781 193.25L852.781 212.125L854.969 212.125L854.969 197.188L854.969 191.938L854.969 176.594L854.969 163.375L852.781 160.469ZM792.844 161.219L792.844 181.812L792.844 198.438L792.844 212.125L793.125 212.125L793.125 198.594L793.719 198.969L793.719 161.75L792.844 161.219ZM818.625 161.219L817.75 161.75L817.75 198.969L818.344 198.594L818.344 212.125L818.625 212.125L818.625 198.438L818.625 181.812L818.625 161.219ZM758.719 162.219L758.375 162.719L757.156 164.562L756.5 165.438L756.5 176.594L756.5 191.938L756.5 197.188L756.5 212.125L758.719 212.125L758.719 193.25L757.25 192.375L757.25 177.031L758.719 177.906L758.719 162.219ZM796.469 163.406L796.469 184L796.469 200.625L796.469 212.125L796.719 212.125L796.719 200.75L797.219 201.062L797.219 163.844L796.469 163.406ZM815 163.406L814.25 163.844L814.25 201.062L814.75 200.75L814.75 212.125L815 212.125L815 200.625L815 184L815 163.406ZM856.281 165.094L856.281 175.812L857.812 174.875L857.812 190.219L856.281 191.156L856.281 212.125L858.594 212.125L858.594 211.688L856.938 206.469L857.656 204.094L858.406 201.75L858.594 201.188L858.594 195L858.594 189.75L858.594 174.406L858.594 168.125L856.281 165.094ZM800.125 165.594L800.125 186.188L800.125 202.781L800.125 212.125L800.312 212.125L800.312 202.906L800.719 203.156L800.719 165.969L800.125 165.594ZM811.375 165.594L810.75 165.969L810.75 203.156L811.156 202.906L811.156 212.125L811.375 212.125L811.375 202.781L811.375 186.188L811.375 165.594ZM755.219 167.188L754.75 167.781L753.625 169.156L752.875 170L752.875 174.406L752.875 189.75L752.875 195L752.875 200.719L753.219 201.75L753.938 204.094L754.656 206.469L753.938 208.781L752.906 212.125L755.219 212.125L755.219 191.156L753.656 190.219L753.656 174.875L755.219 175.812L755.219 167.188ZM803.75 167.781L803.75 188.375L803.75 204.969L803.75 212.125L803.906 212.125L803.906 205.062L804.219 205.25L804.219 168.062L803.75 167.781ZM807.719 167.781L807.25 168.062L807.25 205.25L807.594 205.062L807.594 212.125L807.719 212.125L807.719 204.969L807.719 188.375L807.719 167.781ZM859.781 169.625L859.781 173.719L861.406 172.719L861.406 188.062L859.781 189.062L859.781 197.75L860 197.062L861 194.438L861.969 191.906L862.219 191.281L862.219 187.562L862.219 172.5L861.906 172.156L861.344 171.562L860.688 170.781L859.938 169.844L859.781 169.625ZM751.719 171.219L751.281 171.656L750.562 172.281L750.062 172.719L751.719 173.719L751.719 171.219ZM750.062 172.719L749.938 172.812L749.344 173.219L749.25 173.281L749.25 187.562L749.25 190.75L749.625 191.719L750.656 194.375L751.625 197.062L751.719 197.25L751.719 189.062L750.062 188.062L750.062 172.719ZM865 174.031L865 184.781L865.188 184.375L865.875 182.875L865.875 174.375L865.219 174.094L865 174.031ZM746.438 174.344L745.938 174.438L745.625 174.5L745.625 182.25L746.344 183.875L746.469 184.156L746.469 174.344L746.438 174.344ZM868.594 175.719L868.594 176.625L868.875 175.875L868.594 175.719ZM742.875 176.094L742.75 176.188L742.875 176.438L742.875 176.094ZM864.312 186.312L863.281 186.938L863.281 188.75L864.062 186.906L864.312 186.312ZM747.5 186.531L748.219 188.188L748.219 186.938L747.5 186.531Z" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign3RightSleeveColor1"> <path d="M853.469 163.219L852.219 164L852.219 201.188L853.062 200.688L853.062 212.125L853.469 212.125L853.469 200.438L853.469 183.812L853.469 163.219ZM758.031 163.25L758 163.281L758 183.812L758 200.438L758 212.125L758.406 212.125L758.406 200.688L759.281 201.188L759.281 164L758.031 163.25ZM855.719 164.375L855.719 199.094L856.656 198.531L856.656 212.125L857.094 212.125L857.094 207L856.938 206.469L857.094 205.906L857.094 198.25L857.094 181.625L857.094 166.188L855.719 164.375ZM761.625 165.406L761.625 186L761.625 202.625L761.625 212.125L762 212.125L762 202.844L762.781 203.312L762.781 166.094L761.625 165.406ZM849.844 165.406L848.688 166.094L848.688 203.312L849.469 202.844L849.469 212.125L849.844 212.125L849.844 202.625L849.844 186L849.844 165.406ZM755.781 166.469L754.75 167.781L754.375 168.25L754.375 181.625L754.375 198.25L754.375 205.5L754.656 206.469L754.375 207.375L754.375 212.125L754.844 212.125L754.844 198.531L755.781 199.094L755.781 166.469ZM765.281 167.594L765.281 188.188L765.281 204.812L765.281 212.125L765.594 212.125L765.594 205L766.281 205.406L766.281 168.188L765.281 167.594ZM846.219 167.594L845.188 168.188L845.188 205.406L845.875 205L845.875 212.125L846.219 212.125L846.219 204.812L846.219 188.188L846.219 167.594ZM859.219 168.906L859.219 197L860.25 196.375L860.25 196.469L860.75 195.125L860.75 179.469L860.75 170.844L860.688 170.781L859.938 169.844L859.219 168.906ZM768.906 169.781L768.906 190.375L768.906 207L768.906 212.125L769.188 212.125L769.188 207.156L769.781 207.5L769.781 170.312L768.906 169.781ZM842.562 169.781L841.688 170.312L841.688 207.5L842.281 207.156L842.281 212.125L842.562 212.125L842.562 207L842.562 190.375L842.562 169.781ZM752.281 170.656L751.281 171.656L750.75 172.125L750.75 179.469L750.75 194.594L751.438 196.5L752.281 197L752.281 170.656ZM772.531 171.969L772.531 192.562L772.531 209.156L772.531 212.125L772.781 212.125L772.781 209.312L773.281 209.625L773.281 172.406L772.531 171.969ZM838.938 171.969L838.188 172.406L838.188 209.625L838.719 209.312L838.719 212.125L838.938 212.125L838.938 209.156L838.938 192.562L838.938 171.969ZM862.719 172.938L862.719 190.094L863 189.406L864.062 186.906L864.375 186.188L864.375 177.281L864.375 173.812L863.812 173.625L863.312 173.375L862.875 173.062L862.719 172.938ZM748.781 173.562L748.25 173.844L747.75 174.062L747.188 174.219L747.094 174.219L747.094 177.281L747.094 185.594L747.469 186.469L748.562 189.062L748.781 189.562L748.781 173.562ZM776.156 174.156L776.156 194.75L776.156 211.344L776.156 212.125L776.375 212.125L776.375 211.469L776.781 211.719L776.781 174.5L776.156 174.156ZM835.312 174.156L834.688 174.5L834.688 211.719L835.125 211.469L835.125 212.125L835.312 212.125L835.312 211.344L835.312 194.75L835.312 174.156ZM866.219 174.531L866.219 182.125L866.375 181.75L867.719 178.969L868 178.156L868 175.438L867.281 175.094L866.625 174.75L866.219 174.531ZM745.281 174.656L744.938 174.781L744.312 175.156L743.562 175.656L743.469 175.719L743.469 177.656L744 178.75L745.188 181.312L745.281 181.469L745.281 174.656ZM779.812 176.312L779.812 196.906L779.812 212.125L780.281 212.125L780.281 176.625L779.812 176.312ZM831.688 176.312L831.188 176.625L831.188 212.125L831.688 212.125L831.688 196.906L831.688 176.312Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign3FrontColor3"> <path d="M199.702 37.9688L198.992 38.8518L198.227 39.8818L196.997 41.4908L196.048 42.5868L195.111 43.5288L193.994 44.5078L193.37 44.9998L192.73 45.4668L191.407 46.3288L190.031 47.0908L188.614 47.7548L187.16 48.3158L185.679 48.7758L184.18 49.1328L182.669 49.3848L181.656 49.4938L180.641 49.5588L179.42 49.5948L177.367 49.5958L175.141 49.5638L173.669 49.4888L172.444 49.3668L171.213 49.1718L169.719 48.8318L168.243 48.3918L166.793 47.8528L165.375 47.2138L164.001 46.4758L162.676 45.6378L162.036 45.1828L161.412 44.7018L160.803 44.1958L160.214 43.6658L159.295 42.7788L158.551 42.0038L157.838 41.1918L156.995 40.1448L156.298 39.2548L155.671 38.5758L154.928 37.8718L153.473 39.0928L151.658 40.6038L150.785 41.3998L150.12 42.0058L148.803 43.2678L147.517 44.5598L146.259 45.8778L144.79 47.4778L143.11 49.3978L141.174 51.7008L138.231 55.3568L134.817 59.7798L134.218 60.5568L132.409 62.8968L128.811 67.5868L122.451 75.8498L118.175 81.3308L115.361 81.6768L115.47 82.5758L115.694 84.3668L116.307 89.4398L117.863 103.611L118.834 113.094L119.576 121.014L120.234 128.945L120.705 135.56L121.092 142.178L121.387 148.799L121.577 155.417L121.671 161.977L121.7 168.538L121.669 176.411L121.552 188.223L121.42 199.966L121.398 209.833L121.445 216.166L121.532 221.542L121.602 224.163L121.616 224.7L121.726 226.189L121.938 227.955L122.15 229.849L128.653 230.059L139.842 230.421L149.249 230.683L158.084 230.889L162.933 230.956L164.572 230.982L169.162 231.015L174.635 231.015L177.588 231.015L180.988 231.019L187.621 230.991L194.251 230.923L200.897 230.809L204.198 230.728L208.994 230.611L218.581 230.29L227.249 230.008L233.027 229.849L233.24 227.955L233.451 226.19L233.561 224.7L233.575 224.163L233.645 221.542L233.732 216.168L233.779 209.837L233.757 199.973L233.625 188.234L233.508 176.418L233.477 168.542L233.506 161.979L233.6 155.417L233.789 148.808L234.081 142.202L234.465 135.599L234.932 128.999L235.585 121.079L236.324 113.165L237.297 103.672L238.87 89.4398L239.436 84.7628L239.693 82.7048L239.816 81.6768L237.003 81.3308L234.402 77.9818L230.553 72.9088L226.687 67.7868L224.709 65.2588L224.293 64.7368L223.454 63.6958L220.96 60.5568L217.326 55.8338L214.373 52.1438L212.368 49.7448L210.624 47.7418L209.1 46.0728L207.792 44.6968L206.455 43.3488L205.085 42.0328L204.392 41.3998L203.453 40.5448L201.516 38.9318L199.984 37.6458L199.702 37.9688Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign3FrontColor2"> <path d="M235.031 78.8125L235.031 115.438L236.188 114.75L236.312 113.156L237.312 103.656L237.625 100.625L237.625 97.25L237.625 81.4062L237 81.3438L235.031 78.8125ZM121.031 78.8438L121.031 99.4375L121.031 116.062L121.031 131.406L121.031 136.656L121.031 140.938L121.094 142.188L121.375 148.812L121.562 155.406L121.656 161.969L121.688 168.531L121.656 176.406L121.562 188.219L121.406 199.969L121.406 209.844L121.438 216.156L121.531 221.531L121.594 224.156L121.625 224.688L121.719 226.188L121.844 227.125L121.844 221.625L123.469 222.625L123.469 185.438L121.844 184.438L121.844 169.094L123.469 170.094L123.469 132.875L121.844 131.875L121.844 116.562L123.469 117.531L123.469 80.3438L121.031 78.8438ZM234 78.8438L231.531 80.3438L231.531 117.531L233.188 116.562L233.188 131.875L231.531 132.875L231.531 170.094L233.188 169.094L233.188 184.438L231.531 185.406L231.531 222.625L233.188 221.656L233.188 228.469L233.25 227.969L233.438 226.188L233.562 224.688L233.562 224.156L233.656 221.531L233.719 216.156L233.781 209.844L233.75 199.969L233.625 188.219L233.5 176.406L233.469 168.531L233.5 161.969L233.594 155.406L233.781 148.812L234 144.031L234 136.656L234 131.406L234 116.062L234 99.4375L234 78.8438ZM119.969 79.0312L118.188 81.3438L117.375 81.4375L117.375 97.25L117.375 99.2812L117.875 103.625L118.844 113.094L119 114.844L119.969 115.438L119.969 79.0312ZM124.656 81.0312L124.656 101.625L124.656 118.25L124.656 133.562L124.656 138.844L124.656 154.156L124.656 170.781L124.656 186.125L124.656 191.375L124.656 206.719L124.656 223.344L124.656 229.938L125.438 229.969L125.438 223.781L126.969 224.719L126.969 187.531L125.438 186.594L125.438 171.25L126.969 172.188L126.969 134.969L125.438 134.031L125.438 118.719L126.969 119.656L126.969 82.4375L124.656 81.0312ZM230.375 81.0312L228.031 82.4375L228.031 119.656L229.594 118.719L229.594 134.031L228.031 134.969L228.031 172.188L229.594 171.25L229.594 186.594L228.031 187.531L228.031 224.719L229.594 223.781L229.594 229.938L230.375 229.938L230.375 223.344L230.375 206.719L230.375 191.375L230.375 186.125L230.375 170.781L230.375 154.156L230.375 138.844L230.375 133.562L230.375 118.25L230.375 101.625L230.375 81.0312ZM116.469 81.5312L115.375 81.6875L115.469 82.5625L115.688 84.375L116.312 89.4375L116.469 90.9688L116.469 81.5312ZM238.531 81.5312L238.531 92.375L238.875 89.4375L239.438 84.75L239.688 82.7188L239.812 81.6875L238.531 81.5312ZM128.281 83.2188L128.281 103.812L128.281 120.438L128.281 135.75L128.281 141.031L128.281 156.344L128.281 172.969L128.281 188.312L128.281 193.562L128.281 208.906L128.281 225.5L128.281 230.031L128.656 230.062L129.031 230.062L129.031 225.938L130.469 226.844L130.469 189.625L129.031 188.75L129.031 173.406L130.469 174.281L130.469 137.094L129.031 136.188L129.031 120.875L130.469 121.75L130.469 84.5312L128.281 83.2188ZM226.719 83.2188L224.531 84.5312L224.531 121.75L226 120.875L226 136.188L224.531 137.094L224.531 174.281L226 173.406L226 188.75L224.531 189.625L224.531 226.844L226 225.938L226 230.062L226.719 230.031L226.719 225.5L226.719 208.906L226.719 193.562L226.719 188.312L226.719 172.969L226.719 156.344L226.719 141.031L226.719 135.75L226.719 120.438L226.719 103.812L226.719 83.2188ZM131.906 85.4062L131.906 106L131.906 122.594L131.906 137.938L131.906 143.188L131.906 158.531L131.906 175.156L131.906 190.5L131.906 195.75L131.906 211.094L131.906 227.688L131.906 230.156L132.594 230.188L132.594 228.094L133.969 228.938L133.969 191.719L132.594 190.906L132.594 175.562L133.969 176.406L133.969 139.188L132.594 138.344L132.594 123.031L133.969 123.844L133.969 86.6562L131.906 85.4062ZM223.094 85.4062L221.031 86.6562L221.031 123.844L222.406 123.031L222.406 138.344L221.031 139.188L221.031 176.406L222.406 175.562L222.406 190.906L221.031 191.719L221.031 228.938L222.406 228.094L222.406 230.156L223.094 230.156L223.094 227.688L223.094 211.094L223.094 195.75L223.094 190.5L223.094 175.156L223.094 158.531L223.094 143.188L223.094 137.938L223.094 122.594L223.094 106L223.094 85.4062ZM135.562 87.5938L135.562 108.188L135.562 124.781L135.562 140.125L135.562 145.375L135.562 160.719L135.562 177.344L135.562 192.656L135.562 197.938L135.562 213.25L135.562 229.875L135.562 230.281L136.188 230.312L136.188 230.25L136.25 230.312L137.5 230.344L137.5 193.844L136.188 193.062L136.188 177.719L137.5 178.5L137.5 141.281L136.188 140.5L136.188 125.188L137.5 125.969L137.5 88.75L135.562 87.5938ZM219.469 87.5938L217.531 88.75L217.531 125.969L218.812 125.188L218.812 140.5L217.531 141.281L217.531 178.5L218.812 177.719L218.812 193.062L217.531 193.844L217.531 230.312L218.594 230.281L218.812 230.281L219.469 230.25L219.469 229.875L219.469 213.25L219.469 197.938L219.469 192.656L219.469 177.344L219.469 160.719L219.469 145.375L219.469 140.125L219.469 124.781L219.469 108.188L219.469 87.5938ZM139.188 89.75L139.188 110.344L139.188 126.969L139.188 142.312L139.188 147.562L139.188 162.906L139.188 179.531L139.188 194.844L139.188 200.125L139.188 215.438L139.188 230.406L139.844 230.406L141 230.438L141 195.938L139.781 195.219L139.781 179.875L141 180.594L141 143.406L139.781 142.656L139.781 127.344L141 128.062L141 90.8438L139.188 89.75ZM215.844 89.75L214.031 90.8438L214.031 128.062L215.25 127.344L215.25 142.656L214.031 143.406L214.031 180.594L215.25 179.875L215.25 195.219L214.031 195.938L214.031 230.438L215.844 230.375L215.844 215.438L215.844 200.125L215.844 194.844L215.844 179.531L215.844 162.906L215.844 147.562L215.844 142.312L215.844 126.969L215.844 110.344L215.844 89.75ZM142.812 91.9375L142.812 112.531L142.812 129.156L142.812 144.5L142.812 149.75L142.812 165.094L142.812 181.688L142.812 197.031L142.812 202.281L142.812 217.625L142.812 230.5L144.5 230.562L144.5 198.031L143.375 197.375L143.375 182.031L144.5 182.719L144.5 145.5L143.375 144.812L143.375 129.5L144.5 130.156L144.5 92.9375L142.812 91.9375ZM212.188 91.9375L210.531 92.9375L210.531 130.156L211.656 129.5L211.656 144.812L210.531 145.5L210.531 182.719L211.656 182.031L211.656 197.375L210.531 198.031L210.531 230.562L212.188 230.5L212.188 217.625L212.188 202.281L212.188 197.031L212.188 181.688L212.188 165.094L212.188 149.75L212.188 144.5L212.188 129.156L212.188 112.531L212.188 91.9375ZM146.469 94.125L146.469 114.719L146.469 131.344L146.469 146.688L146.469 151.938L146.469 167.281L146.469 183.875L146.469 199.219L146.469 204.469L146.469 219.812L146.469 230.594L148 230.656L148 200.156L146.969 199.531L146.969 184.188L148 184.812L148 147.594L146.969 146.969L146.969 131.656L148 132.25L148 95.0625L146.469 94.125ZM208.562 94.125L207.031 95.0625L207.031 132.25L208.062 131.656L208.062 146.969L207.031 147.594L207.031 184.812L208.062 184.188L208.062 199.531L207.031 200.156L207.031 230.656L208.562 230.625L208.562 219.812L208.562 204.469L208.562 199.219L208.562 183.875L208.562 167.281L208.562 151.938L208.562 146.688L208.562 131.344L208.562 114.719L208.562 94.125ZM150.094 96.3125L150.094 116.906L150.094 133.531L150.094 148.844L150.094 154.125L150.094 169.438L150.094 186.062L150.094 201.406L150.094 206.656L150.094 222L150.094 230.688L151.5 230.75L151.5 202.25L150.531 201.688L150.531 186.344L151.5 186.906L151.5 149.719L150.531 149.125L150.531 133.812L151.5 134.375L151.5 97.1562L150.094 96.3125ZM204.938 96.3125L203.531 97.1562L203.531 134.375L204.469 133.812L204.469 149.125L203.531 149.719L203.531 186.906L204.469 186.344L204.469 201.688L203.531 202.25L203.531 230.75L204.188 230.719L204.938 230.719L204.938 222L204.938 206.656L204.938 201.406L204.938 186.062L204.938 169.438L204.938 154.125L204.938 148.844L204.938 133.531L204.938 116.906L204.938 96.3125ZM153.719 98.5L153.719 119.094L153.719 135.719L153.719 151.031L153.719 156.312L153.719 171.625L153.719 188.25L153.719 203.594L153.719 208.844L153.719 224.188L153.719 230.781L155 230.812L155 204.344L154.125 203.844L154.125 188.5L155 189.031L155 151.812L154.125 151.281L154.125 135.969L155 136.469L155 99.25L153.719 98.5ZM201.312 98.5L200.031 99.25L200.031 136.469L200.875 135.969L200.875 151.281L200.031 151.812L200.031 189.031L200.875 188.5L200.875 203.844L200.031 204.344L200.031 230.812L200.906 230.812L201.312 230.812L201.312 224.188L201.312 208.844L201.312 203.594L201.312 188.25L201.312 171.625L201.312 156.312L201.312 151.031L201.312 135.719L201.312 119.094L201.312 98.5ZM157.344 100.688L157.344 121.281L157.344 137.875L157.344 153.219L157.344 158.469L157.344 173.812L157.344 190.438L157.344 205.781L157.344 211.031L157.344 226.375L157.344 230.875L158.094 230.875L158.5 230.906L158.5 206.469L157.719 206L157.719 190.656L158.5 191.125L158.5 153.906L157.719 153.438L157.719 138.125L158.5 138.562L158.5 101.375L157.344 100.688ZM197.656 100.688L196.531 101.375L196.531 138.562L197.281 138.125L197.281 153.438L196.531 153.906L196.531 191.125L197.281 190.656L197.281 206L196.531 206.469L196.531 230.875L197.656 230.875L197.656 226.375L197.656 211.031L197.656 205.781L197.656 190.438L197.656 173.812L197.656 158.469L197.656 153.219L197.656 137.875L197.656 121.281L197.656 100.688ZM161 102.875L161 123.469L161 140.062L161 155.406L161 160.656L161 176L161 192.625L161 207.969L161 213.219L161 228.562L161 230.938L162 230.938L162 208.562L161.312 208.156L161.312 192.812L162 193.219L162 156L161.312 155.594L161.312 140.281L162 140.688L162 103.469L161 102.875ZM194.031 102.875L193.031 103.469L193.031 140.688L193.719 140.281L193.719 155.594L193.031 156L193.031 193.219L193.719 192.812L193.719 208.156L193.031 208.562L193.031 230.938L194.031 230.938L194.031 228.562L194.031 213.219L194.031 207.969L194.031 192.625L194.031 176L194.031 160.656L194.031 155.406L194.031 140.062L194.031 123.469L194.031 102.875ZM164.625 105.031L164.625 125.625L164.625 142.25L164.625 157.594L164.625 162.844L164.625 178.188L164.625 194.812L164.625 210.125L164.625 215.406L164.625 230.719L164.625 230.969L165.5 231L165.5 210.656L164.906 210.312L164.906 194.969L165.5 195.312L165.5 158.125L164.906 157.75L164.906 142.438L165.5 142.781L165.5 105.562L164.625 105.031ZM190.406 105.031L189.531 105.562L189.531 142.781L190.125 142.438L190.125 157.75L189.531 158.125L189.531 195.312L190.125 194.969L190.125 210.312L189.531 210.656L189.531 230.969L190.406 230.969L190.406 230.719L190.406 215.406L190.406 210.125L190.406 194.812L190.406 178.188L190.406 162.844L190.406 157.594L190.406 142.25L190.406 125.625L190.406 105.031ZM168.25 107.219L168.25 127.812L168.25 144.438L168.25 159.781L168.25 165.031L168.25 180.375L168.25 196.969L168.25 212.312L168.25 217.562L168.25 231L169 231L169 212.781L168.5 212.469L168.5 197.125L169 197.438L169 160.219L168.5 159.906L168.5 144.594L169 144.875L169 107.688L168.25 107.219ZM186.75 107.219L186.031 107.688L186.031 144.875L186.531 144.594L186.531 159.906L186.031 160.219L186.031 197.438L186.531 197.125L186.531 212.469L186.031 212.781L186.031 231L186.75 231L186.75 217.562L186.75 212.312L186.75 196.969L186.75 180.375L186.75 165.031L186.75 159.781L186.75 144.438L186.75 127.812L186.75 107.219ZM171.875 109.406L171.875 130L171.875 146.625L171.875 161.969L171.875 167.219L171.875 182.562L171.875 199.156L171.875 214.5L171.875 219.75L171.875 231L172.5 231L172.5 214.875L172.094 214.625L172.094 199.281L172.5 199.531L172.5 162.312L172.094 162.062L172.094 146.719L172.5 147L172.5 109.781L171.875 109.406ZM183.125 109.406L182.531 109.781L182.531 147L182.938 146.75L182.938 162.062L182.531 162.312L182.531 199.531L182.938 199.281L182.938 214.625L182.531 214.875L182.531 231L183.125 231L183.125 219.75L183.125 214.5L183.125 199.156L183.125 182.562L183.125 167.219L183.125 161.969L183.125 146.625L183.125 130L183.125 109.406ZM175.531 111.594L175.531 132.188L175.531 148.812L175.531 164.156L175.531 169.406L175.531 184.75L175.531 201.344L175.531 216.688L175.531 221.938L175.531 231L176 231L176 216.969L175.656 216.781L175.656 201.438L176 201.625L176 164.438L175.656 164.219L175.656 148.906L176 149.094L176 111.875L175.531 111.594ZM179.5 111.594L179.031 111.875L179.031 149.094L179.344 148.906L179.344 164.219L179.031 164.438L179.031 201.625L179.344 201.438L179.344 216.781L179.031 216.969L179.031 231.031L179.5 231.031L179.5 221.938L179.5 216.688L179.5 201.344L179.5 184.75L179.5 169.406L179.5 164.156L179.5 148.812L179.5 132.188L179.5 111.594Z" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign3FrontColor1"> <path d="M118.875 100.5L118.875 113.531L119.562 121L120.219 128.938L120.531 133.281L120.531 101.5L118.875 100.5ZM236.156 100.5L234.469 101.5L234.469 135.406L234.938 129L235.594 121.094L236.156 115.062L236.156 100.5ZM122.5 102.688L122.5 123.281L122.5 139.906L122.5 155.219L122.5 160.5L122.5 175.812L122.5 192.438L122.5 207.781L122.5 213.031L122.5 228.375L122.5 229.875L124.031 229.906L124.031 208.719L123 208.094L123 192.75L124.031 193.375L124.031 156.156L123 155.531L123 140.188L124.031 140.812L124.031 103.625L122.5 102.688ZM232.5 102.688L230.969 103.625L230.969 140.812L232 140.188L232 155.531L230.969 156.156L230.969 193.375L232 192.75L232 208.094L230.969 208.688L230.969 229.906L232.5 229.875L232.5 228.375L232.5 213.031L232.5 207.781L232.5 192.438L232.5 175.812L232.5 160.5L232.5 155.219L232.5 139.906L232.5 123.281L232.5 102.688ZM126.156 104.875L126.156 125.469L126.156 142.094L126.156 157.406L126.156 162.688L126.156 178L126.156 194.625L126.156 209.969L126.156 215.219L126.156 229.969L127.531 230.031L127.531 210.812L126.594 210.25L126.594 194.906L127.531 195.469L127.531 158.25L126.594 157.688L126.594 142.344L127.531 142.938L127.531 105.719L126.156 104.875ZM228.875 104.875L227.469 105.719L227.469 142.938L228.406 142.344L228.406 157.688L227.469 158.25L227.469 195.469L228.406 194.906L228.406 210.25L227.469 210.812L227.469 230L228.875 229.969L228.875 215.219L228.875 209.969L228.875 194.625L228.875 178L228.875 162.688L228.875 157.406L228.875 142.094L228.875 125.469L228.875 104.875ZM129.781 107.062L129.781 127.656L129.781 144.25L129.781 159.594L129.781 164.844L129.781 180.188L129.781 196.812L129.781 212.156L129.781 217.406L129.781 230.094L131.031 230.125L131.031 212.906L130.188 212.406L130.188 197.062L131.031 197.562L131.031 160.375L130.188 159.844L130.188 144.5L131.031 145.031L131.031 107.812L129.781 107.062ZM225.25 107.062L223.969 107.812L223.969 145.031L224.844 144.5L224.844 159.844L223.969 160.375L223.969 197.562L224.844 197.062L224.844 212.406L223.969 212.906L223.969 230.125L225.25 230.062L225.25 217.406L225.25 212.156L225.25 196.812L225.25 180.188L225.25 164.844L225.25 159.594L225.25 144.25L225.25 127.656L225.25 107.062ZM133.406 109.25L133.406 129.844L133.406 146.438L133.406 161.781L133.406 167.031L133.406 182.375L133.406 199L133.406 214.312L133.406 219.594L133.406 230.219L134.562 230.25L134.562 215L133.781 214.562L133.781 199.219L134.562 199.688L134.562 162.469L133.781 162L133.781 146.656L134.562 147.125L134.562 109.938L133.406 109.25ZM221.625 109.25L220.469 109.938L220.469 147.125L221.25 146.656L221.25 162L220.469 162.469L220.469 199.688L221.25 199.219L221.25 214.562L220.469 215L220.469 230.219L221.625 230.188L221.625 219.594L221.625 214.312L221.625 199L221.625 182.375L221.625 167.031L221.625 161.781L221.625 146.438L221.625 129.844L221.625 109.25ZM137.031 111.406L137.031 132L137.031 148.625L137.031 163.969L137.031 169.219L137.031 184.562L137.031 201.188L137.031 216.5L137.031 221.781L137.031 230.344L138.062 230.375L138.062 217.125L137.375 216.719L137.375 201.375L138.062 201.781L138.062 164.562L137.375 164.156L137.375 148.812L138.062 149.25L138.062 112.031L137.031 111.406ZM217.969 111.406L216.969 112.031L216.969 149.25L217.656 148.812L217.656 164.156L216.969 164.562L216.969 201.781L217.656 201.375L217.656 216.719L216.969 217.125L216.969 230.344L217.969 230.312L217.969 221.781L217.969 216.5L217.969 201.188L217.969 184.562L217.969 169.219L217.969 163.969L217.969 148.625L217.969 132L217.969 111.406ZM140.688 113.594L140.688 134.188L140.688 150.812L140.688 166.156L140.688 171.406L140.688 186.75L140.688 203.344L140.688 218.688L140.688 223.938L140.688 230.438L141.562 230.469L141.562 219.219L140.969 218.875L140.969 203.531L141.562 203.875L141.562 166.688L140.969 166.312L140.969 150.969L141.562 151.344L141.562 114.125L140.688 113.594ZM214.344 113.594L213.469 114.125L213.469 151.344L214.062 150.969L214.062 166.312L213.469 166.688L213.469 203.875L214.062 203.531L214.062 218.875L213.469 219.219L213.469 230.469L214.344 230.438L214.344 223.938L214.344 218.688L214.344 203.344L214.344 186.75L214.344 171.406L214.344 166.156L214.344 150.812L214.344 134.188L214.344 113.594ZM144.312 115.781L144.312 136.375L144.312 153L144.312 168.344L144.312 173.594L144.312 188.938L144.312 205.531L144.312 220.875L144.312 226.125L144.312 230.531L145.062 230.562L145.062 221.312L144.531 221.031L144.531 205.688L145.062 206L145.062 168.781L144.531 168.469L144.531 153.125L145.062 153.438L145.062 116.219L144.312 115.781ZM210.719 115.781L209.969 116.219L209.969 153.438L210.469 153.125L210.469 168.469L209.969 168.781L209.969 206L210.469 205.688L210.469 221.031L209.969 221.312L209.969 230.594L210.719 230.562L210.719 226.125L210.719 220.875L210.719 205.531L210.719 188.938L210.719 173.594L210.719 168.344L210.719 153L210.719 136.375L210.719 115.781ZM147.938 117.969L147.938 138.562L147.938 155.188L147.938 170.5L147.938 175.781L147.938 191.094L147.938 207.719L147.938 223.062L147.938 228.312L147.938 230.656L148.562 230.656L148.562 223.438L148.125 223.188L148.125 207.844L148.562 208.094L148.562 170.875L148.125 170.625L148.125 155.281L148.562 155.531L148.562 118.344L147.938 117.969ZM207.062 117.969L206.469 118.344L206.469 155.531L206.875 155.281L206.875 170.625L206.469 170.875L206.469 208.094L206.875 207.844L206.875 223.188L206.469 223.438L206.469 230.688L207.062 230.656L207.062 228.312L207.062 223.062L207.062 207.719L207.062 191.094L207.062 175.781L207.062 170.5L207.062 155.188L207.062 138.562L207.062 117.969ZM151.562 120.156L151.562 140.75L151.562 157.375L151.562 172.688L151.562 177.969L151.562 193.281L151.562 209.906L151.562 225.25L151.562 230.5L151.562 230.75L152.062 230.75L152.062 225.531L151.719 225.344L151.719 210L152.062 210.188L152.062 173L151.719 172.781L151.719 157.438L152.062 157.656L152.062 120.438L151.562 120.156ZM203.438 120.156L202.969 120.438L202.969 157.656L203.312 157.438L203.312 172.781L202.969 173L202.969 210.188L203.312 210L203.312 225.344L202.969 225.531L202.969 230.75L203.438 230.75L203.438 230.5L203.438 225.25L203.438 209.906L203.438 193.281L203.438 177.969L203.438 172.688L203.438 157.375L203.438 140.75L203.438 120.156Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign3BackColor3"> <path d="M447.599 26.096L446.109 26.081L437.595 25.993L436.067 25.996L431.23 26.005L426.856 26.051L424.537 26.096L422.737 23.906L420.635 25.632L417.853 27.91L416.43 29.106L415.301 30.055L413.432 31.754L411.793 33.301L410.717 34.359L409.774 35.282L407.9 37.186L406.057 39.122L404.243 41.087L402.285 43.272L400.18 45.696L397.623 48.724L394.598 52.437L393.042 54.403L391.414 56.461L386.952 62.228L381.717 69.146L376.242 76.352L373.429 76.697L373.639 78.42L374.064 81.872L374.38 84.45L375.116 90.56L375.817 96.67L376.482 102.781L377.109 108.897L377.296 110.833L377.697 115.014L378.244 121.137L378.748 127.264L379.208 133.398L379.444 137.135L379.622 140.892L379.779 145.409L379.948 152.164L380.053 158.878L380.082 161.117L380.099 162.236L379.977 222.751L378.882 228.316L384.37 229.297L392.577 230.905L397.689 231.924L401.99 232.74L406.034 233.464L410.002 234.092L413.382 234.561L415.038 234.753L416.096 234.876L418.218 235.08L420.317 235.242L422.402 235.369L424.671 235.473L427.151 235.549L431.182 235.623L436.067 235.629L438.954 235.631L443.155 235.568L446.268 235.476L449.103 235.348L451.701 235.188L454.085 235.003L456.495 234.777L458.94 234.505L460.174 234.347L461.617 234.162L464.569 233.722L468.037 233.148L473.424 232.157L479.816 230.869L487.87 229.279L490.56 228.783L493.253 228.316L492.157 222.751L492.203 220.252L492.257 215.128L492.282 209.091L492.257 199.688L492.152 188.495L492.046 175.414L492.028 166.695L492.073 159.429L492.188 152.164L492.354 145.405L492.513 140.895L492.691 137.142L492.927 133.398L493.296 128.488L493.699 123.584L494.596 113.787L494.891 110.84L495.184 107.916L495.799 102.048L496.567 95.009L497.754 84.45L498.356 79.501L498.592 77.631L498.706 76.697L495.892 76.352L493.604 73.352L490.204 68.832L486.922 64.453L484.121 60.792L483.098 59.481L481.763 57.788L479.985 55.53L479.093 54.403L477.536 52.435L474.507 48.719L471.951 45.694L469.849 43.275L467.892 41.094L466.08 39.13L464.238 37.194L462.363 35.287L461.418 34.359L460.537 33.492L458.863 31.9L456.839 30.059L455.704 29.106L454.307 27.932L451.515 25.644L449.398 23.906L447.599 26.096Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign3BackColor2"> <path d="M383.125 67.6562L383.125 88.25L383.125 104.875L383.125 120.219L383.125 125.469L383.125 140.812L383.125 157.406L383.125 172.75L383.125 178L383.125 193.344L383.125 209.969L383.125 225.312L383.125 229.062L384.375 229.312L385.469 229.5L385.469 226.719L383.906 225.781L383.906 210.438L385.469 211.375L385.469 174.156L383.906 173.219L383.906 157.875L385.469 158.812L385.469 121.625L383.906 120.688L383.906 105.344L385.469 106.281L385.469 69.0625L383.125 67.6562ZM488.844 67.6562L486.531 69.0625L486.531 106.281L488.062 105.344L488.062 120.688L486.531 121.625L486.531 158.812L488.062 157.875L488.062 173.219L486.531 174.156L486.531 211.375L488.062 210.438L488.062 225.781L486.531 226.719L486.531 229.531L487.875 229.281L488.844 229.094L488.844 225.312L488.844 209.969L488.844 193.344L488.844 178L488.844 172.75L488.844 157.406L488.844 140.812L488.844 125.469L488.844 120.219L488.844 104.875L488.844 88.25L488.844 67.6562ZM490.031 68.5938L490.031 104.188L491.656 103.188L491.656 118.531L490.031 119.5L490.031 156.719L491.656 155.719L491.656 171.062L490.031 172.062L490.031 209.25L491.656 208.281L491.656 223.625L490.031 224.594L490.031 228.875L490.562 228.781L492.469 228.438L492.469 228.375L492.469 224.375L492.156 222.75L492.188 220.25L492.25 215.125L492.281 209.094L492.25 199.688L492.156 188.5L492.031 175.406L492.031 166.688L492.062 159.438L492.188 152.156L492.344 145.406L492.469 141.844L492.469 138.625L492.469 123.281L492.469 118.031L492.469 102.688L492.469 86.0625L492.469 71.8438L490.219 68.8438L490.031 68.5938ZM381.969 68.8125L381.719 69.1562L379.5 72.0625L379.5 86.0625L379.5 102.688L379.5 118.031L379.5 123.281L379.5 138.312L379.625 140.906L379.781 145.406L379.938 152.156L380.062 158.875L380.094 161.125L380.094 162.25L379.969 222.75L379.5 225.188L379.5 228.375L379.5 228.438L381.969 228.875L381.969 224.594L380.312 223.625L380.312 208.281L381.969 209.25L381.969 172.062L380.312 171.062L380.312 155.719L381.969 156.719L381.969 119.5L380.312 118.531L380.312 103.188L381.969 104.188L381.969 68.8125ZM386.781 69.8438L386.781 90.4375L386.781 107.062L386.781 122.406L386.781 127.656L386.781 143L386.781 159.594L386.781 174.938L386.781 180.188L386.781 195.531L386.781 212.156L386.781 227.469L386.781 229.781L388.969 230.188L388.969 228.812L387.5 227.938L387.5 212.594L388.969 213.469L388.969 176.25L387.5 175.375L387.5 160.031L388.969 160.938L388.969 123.719L387.5 122.844L387.5 107.5L388.969 108.375L388.969 71.1875L386.781 69.8438ZM485.219 69.8438L483.031 71.1875L483.031 108.375L484.469 107.5L484.469 122.844L483.031 123.719L483.031 160.938L484.469 160.031L484.469 175.375L483.031 176.25L483.031 213.469L484.469 212.594L484.469 227.938L483.031 228.812L483.031 230.25L485.219 229.812L485.219 227.469L485.219 212.156L485.219 195.531L485.219 180.188L485.219 174.938L485.219 159.594L485.219 143L485.219 127.656L485.219 122.406L485.219 107.062L485.219 90.4375L485.219 69.8438ZM390.406 72.0312L390.406 92.625L390.406 109.25L390.406 124.562L390.406 129.844L390.406 145.156L390.406 161.781L390.406 177.125L390.406 182.375L390.406 197.719L390.406 214.344L390.406 229.656L390.406 230.469L392.375 230.875L391.094 230.094L391.094 214.75L392.469 215.562L392.469 178.375L391.094 177.531L391.094 162.188L392.469 163.031L392.469 125.812L391.094 125L391.094 109.656L392.469 110.5L392.469 73.2812L390.406 72.0312ZM481.594 72.0312L479.5 73.2812L479.5 110.5L480.906 109.656L480.906 125L479.5 125.812L479.5 163.031L480.906 162.188L480.906 177.531L479.5 178.375L479.5 215.562L480.906 214.75L480.906 230.094L479.5 230.906L479.5 230.938L479.812 230.875L481.594 230.531L481.594 229.656L481.594 214.344L481.594 197.719L481.594 182.375L481.594 177.125L481.594 161.781L481.594 145.156L481.594 129.844L481.594 124.562L481.594 109.25L481.594 92.625L481.594 72.0312ZM493.531 73.25L493.531 102.062L495.25 101.031L495.25 107.281L495.812 102.062L496.125 99.1875L496.125 83.9062L496.125 76.375L495.906 76.3438L493.594 73.3438L493.531 73.25ZM378.469 73.4375L376.25 76.3438L375.875 76.4062L375.875 83.9062L375.875 97.125L376.469 102.781L376.719 105.188L376.719 101.031L378.469 102.062L378.469 73.4375ZM394.031 74.2188L394.031 94.8125L394.031 111.438L394.031 126.75L394.031 132.031L394.031 147.344L394.031 163.969L394.031 179.312L394.031 184.562L394.031 199.906L394.031 216.5L394.031 231.188L394.656 231.312L394.656 216.906L395.969 217.688L395.969 180.469L394.656 179.688L394.656 164.344L395.969 165.125L395.969 127.938L394.656 127.156L394.656 111.812L395.969 112.594L395.969 75.375L394.031 74.2188ZM477.938 74.2188L476 75.375L476 112.594L477.312 111.812L477.312 127.156L476 127.938L476 165.125L477.312 164.344L477.312 179.688L476 180.469L476 217.688L477.312 216.906L477.312 231.375L477.938 231.25L477.938 216.5L477.938 199.906L477.938 184.562L477.938 179.312L477.938 163.969L477.938 147.344L477.938 132.031L477.938 126.75L477.938 111.438L477.938 94.8125L477.938 74.2188ZM397.656 76.4062L397.656 97L397.656 113.594L397.656 128.938L397.656 134.188L397.656 149.531L397.656 166.156L397.656 181.5L397.656 186.75L397.656 202.094L397.656 218.688L397.656 231.906L397.688 231.938L398.25 232.031L398.25 219.062L399.469 219.781L399.469 182.562L398.25 181.844L398.25 166.5L399.469 167.25L399.469 130.031L398.25 129.312L398.25 113.969L399.469 114.688L399.469 77.5L397.656 76.4062ZM474.312 76.4062L472.5 77.4688L472.5 114.688L473.719 113.969L473.719 129.312L472.5 130.031L472.5 167.25L473.719 166.5L473.719 181.844L472.5 182.562L472.5 219.781L473.719 219.062L473.719 232.094L474.312 231.969L474.312 218.688L474.312 202.094L474.312 186.75L474.312 181.5L474.312 166.156L474.312 149.531L474.312 134.188L474.312 128.938L474.312 113.594L474.312 97L474.312 76.4062ZM374.969 76.5L373.438 76.6875L373.625 78.4062L374.062 81.875L374.375 84.4375L374.969 89.2188L374.969 76.5ZM497.031 76.5L497.031 90.9375L497.75 84.4375L498.344 79.5L498.594 77.625L498.719 76.6875L497.031 76.5ZM401.312 78.5938L401.312 99.1875L401.312 115.781L401.312 131.125L401.312 136.375L401.312 151.719L401.312 168.344L401.312 183.688L401.312 188.938L401.312 204.25L401.312 220.875L401.312 232.594L401.844 232.719L401.844 221.219L402.969 221.875L402.969 184.688L401.844 184L401.844 168.656L402.969 169.344L402.969 132.125L401.844 131.469L401.844 116.125L402.969 116.781L402.969 79.5938L401.312 78.5938ZM470.688 78.5938L469 79.5938L469 116.781L470.125 116.125L470.125 131.469L469 132.125L469 169.344L470.125 168.656L470.125 184L469 184.688L469 221.875L470.125 221.219L470.125 232.75L470.688 232.656L470.688 220.875L470.688 204.25L470.688 188.938L470.688 183.656L470.688 168.344L470.688 151.719L470.688 136.375L470.688 131.125L470.688 115.781L470.688 99.1875L470.688 78.5938ZM404.938 80.75L404.938 101.375L404.938 117.969L404.938 133.312L404.938 138.562L404.938 153.906L404.938 170.531L404.938 185.844L404.938 191.125L404.938 206.438L404.938 223.062L404.938 233.281L405.438 233.344L405.438 223.375L406.469 224L406.469 186.781L405.438 186.156L405.438 170.812L406.469 171.438L406.469 134.25L405.438 133.625L405.438 118.281L406.469 118.906L406.469 81.6875L404.938 80.75ZM467.031 80.75L465.5 81.6875L465.5 118.906L466.531 118.281L466.531 133.625L465.5 134.25L465.5 171.438L466.531 170.812L466.531 186.156L465.5 186.781L465.5 224L466.531 223.375L466.531 233.406L467.031 233.312L467.031 223.062L467.031 206.438L467.031 191.125L467.031 185.844L467.031 170.531L467.031 153.906L467.031 138.562L467.031 133.312L467.031 117.969L467.031 101.375L467.031 80.75ZM408.562 82.9375L408.562 103.531L408.562 120.156L408.562 135.5L408.562 140.75L408.562 156.094L408.562 172.688L408.562 188.031L408.562 193.281L408.562 208.625L408.562 225.25L408.562 233.875L409.031 233.938L409.031 225.531L409.969 226.094L409.969 188.875L409.031 188.312L409.031 172.969L409.969 173.562L409.969 136.344L409.031 135.781L409.031 120.438L409.969 121L409.969 83.7812L408.562 82.9375ZM463.406 82.9375L462 83.7812L462 121L462.938 120.438L462.938 135.781L462 136.344L462 173.562L462.938 172.969L462.938 188.312L462 188.875L462 226.094L462.938 225.531L462.938 233.969L463.406 233.906L463.406 225.25L463.406 208.625L463.406 193.281L463.406 188.031L463.406 172.688L463.406 156.094L463.406 140.75L463.406 135.5L463.406 120.156L463.406 103.531L463.406 82.9375ZM412.188 85.125L412.188 105.719L412.188 122.344L412.188 137.688L412.188 142.938L412.188 158.281L412.188 174.875L412.188 190.219L412.188 195.469L412.188 210.812L412.188 227.438L412.188 234.406L412.625 234.469L412.625 227.688L413.469 228.188L413.469 191L412.625 190.469L412.625 175.125L413.469 175.656L413.469 138.438L412.625 137.938L412.625 122.594L413.469 123.094L413.469 85.9062L412.188 85.125ZM459.781 85.125L458.5 85.9062L458.5 123.094L459.375 122.594L459.375 137.938L458.5 138.438L458.5 175.656L459.375 175.125L459.375 190.469L458.5 191L458.5 228.188L459.375 227.688L459.375 234.438L459.781 234.406L459.781 227.438L459.781 210.812L459.781 195.469L459.781 190.219L459.781 174.875L459.781 158.281L459.781 142.938L459.781 137.688L459.781 122.344L459.781 105.719L459.781 85.125ZM415.844 87.3125L415.844 107.906L415.844 124.531L415.844 139.875L415.844 145.125L415.844 160.469L415.844 177.062L415.844 192.406L415.844 197.656L415.844 213L415.844 229.625L415.844 234.844L416.094 234.875L416.188 234.875L416.188 229.844L416.969 230.312L416.969 193.094L416.188 192.625L416.188 177.281L416.969 177.75L416.969 140.531L416.188 140.094L416.188 124.75L416.969 125.219L416.969 88L415.844 87.3125ZM456.156 87.3125L455 88L455 125.219L455.781 124.75L455.781 140.094L455 140.531L455 177.75L455.781 177.281L455.781 192.625L455 193.094L455 230.312L455.781 229.844L455.781 234.844L456.156 234.812L456.156 229.625L456.156 213L456.156 197.656L456.156 192.406L456.156 177.062L456.156 160.469L456.156 145.125L456.156 139.875L456.156 124.531L456.156 107.906L456.156 87.3125ZM419.469 89.5L419.469 110.094L419.469 126.719L419.469 142.031L419.469 147.312L419.469 162.625L419.469 179.25L419.469 194.594L419.469 199.844L419.469 215.188L419.469 231.781L419.469 235.188L419.781 235.188L419.781 232L420.469 232.406L420.469 195.188L419.781 194.781L419.781 179.438L420.469 179.844L420.469 142.656L419.781 142.25L419.781 126.906L420.469 127.312L420.469 90.0938L419.469 89.5ZM452.5 89.5L451.5 90.0938L451.5 127.312L452.188 126.906L452.188 142.25L451.5 142.656L451.5 179.844L452.188 179.438L452.188 194.781L451.5 195.188L451.5 232.406L452.188 232L452.188 235.156L452.5 235.125L452.5 231.781L452.5 215.188L452.5 199.844L452.5 194.594L452.5 179.25L452.5 162.625L452.5 147.312L452.5 142.031L452.5 126.719L452.5 110.094L452.5 89.5ZM423.094 91.6875L423.094 112.281L423.094 128.875L423.094 144.219L423.094 149.469L423.094 164.812L423.094 181.438L423.094 196.781L423.094 202.031L423.094 217.375L423.094 233.969L423.094 235.406L423.375 235.406L423.375 234.156L423.969 234.5L423.969 197.312L423.375 196.938L423.375 181.594L423.969 181.969L423.969 144.75L423.375 144.406L423.375 129.062L423.969 129.406L423.969 92.2188L423.094 91.6875ZM448.875 91.6875L448 92.2188L448 129.406L448.594 129.062L448.594 144.406L448 144.75L448 181.969L448.594 181.594L448.594 196.938L448 197.312L448 234.5L448.594 234.156L448.594 235.375L448.875 235.344L448.875 233.969L448.875 217.375L448.875 202.031L448.875 196.781L448.875 181.438L448.875 164.812L448.875 149.469L448.875 144.219L448.875 128.875L448.875 112.281L448.875 91.6875ZM426.719 93.875L426.719 114.469L426.719 131.062L426.719 146.406L426.719 151.656L426.719 167L426.719 183.625L426.719 198.969L426.719 204.219L426.719 219.562L426.719 235.531L427.156 235.562L427.469 235.562L427.469 199.406L426.969 199.094L426.969 183.75L427.469 184.062L427.469 146.844L426.969 146.562L426.969 131.219L427.469 131.531L427.469 94.3125L426.719 93.875ZM445.25 93.875L444.5 94.3125L444.5 131.531L445 131.219L445 146.562L444.5 146.844L444.5 184.062L445 183.75L445 199.094L444.5 199.406L444.5 235.531L445.25 235.5L445.25 219.562L445.25 204.219L445.25 198.969L445.25 183.625L445.25 167L445.25 151.656L445.25 146.406L445.25 131.062L445.25 114.469L445.25 93.875ZM430.375 96.0625L430.375 116.656L430.375 133.25L430.375 148.594L430.375 153.844L430.375 169.188L430.375 185.812L430.375 201.125L430.375 206.406L430.375 221.719L430.375 235.594L430.969 235.625L430.969 201.5L430.562 201.25L430.562 185.906L430.969 186.156L430.969 148.969L430.562 148.719L430.562 133.375L430.969 133.625L430.969 96.4062L430.375 96.0625ZM441.625 96.0625L441 96.4062L441 133.625L441.406 133.375L441.406 148.719L441 148.969L441 186.156L441.406 185.906L441.406 201.25L441 201.5L441 235.594L441.625 235.594L441.625 221.719L441.625 206.406L441.625 201.125L441.625 185.812L441.625 169.188L441.625 153.844L441.625 148.594L441.625 133.25L441.625 116.656L441.625 96.0625ZM434 98.2188L434 118.812L434 135.438L434 150.781L434 156.031L434 171.375L434 188L434 203.312L434 208.562L434 223.906L434 235.625L434.469 235.625L434.469 203.594L434.156 203.406L434.156 188.062L434.469 188.281L434.469 151.062L434.156 150.875L434.156 135.531L434.469 135.719L434.469 98.5312L434 98.2188ZM437.969 98.2188L437.5 98.5312L437.5 135.719L437.844 135.531L437.844 150.875L437.5 151.062L437.5 188.281L437.844 188.062L437.844 203.406L437.5 203.594L437.5 235.625L437.969 235.625L437.969 223.906L437.969 208.562L437.969 203.312L437.969 187.969L437.969 171.375L437.969 156.031L437.969 150.781L437.969 135.438L437.969 118.812L437.969 98.2188ZM494.312 116.938L493.531 117.406L493.531 125.75L493.688 123.594L494.312 116.938ZM377.875 117.062L378.25 121.125L378.469 123.719L378.469 117.406L377.875 117.062Z" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign3BackColor1"> <path d="M497.656 85.3125L496.469 86.0312L496.469 96L496.562 95L497.656 85.3125ZM374.5 85.4375L375.125 90.5625L375.531 94.0625L375.531 86.0312L374.5 85.4375ZM377.344 87.125L377.344 107.719L377.344 111.438L377.688 115L378.25 121.125L378.562 125.094L379.031 125.344L379.031 88.1562L377.344 87.125ZM494.625 87.125L492.969 88.1562L492.969 125.344L493.594 124.969L493.688 123.594L494.594 113.781L494.625 113.5L494.625 107.719L494.625 87.125ZM381 89.3125L381 109.906L381 126.531L381 141.875L381 147.125L381 162.469L381 179.062L381 194.406L381 199.656L381 215L381 228.688L382.531 228.969L382.531 195.344L381.5 194.719L381.5 179.375L382.531 180L382.531 142.781L381.5 142.156L381.5 126.844L382.531 127.469L382.531 90.25L381 89.3125ZM491 89.3125L489.469 90.25L489.469 127.469L490.5 126.844L490.5 142.156L489.469 142.781L489.469 180L490.5 179.375L490.5 194.719L489.469 195.344L489.469 229L490.562 228.781L491 228.719L491 215L491 199.656L491 194.406L491 179.062L491 162.469L491 147.125L491 141.875L491 126.531L491 109.906L491 89.3125ZM384.625 91.5L384.625 112.094L384.625 128.719L384.625 144.062L384.625 149.312L384.625 164.656L384.625 181.25L384.625 196.594L384.625 201.844L384.625 217.188L384.625 229.344L386.031 229.625L386.031 197.438L385.094 196.875L385.094 181.531L386.031 182.094L386.031 144.906L385.094 144.312L385.094 129L386.031 129.562L386.031 92.3438L384.625 91.5ZM487.344 91.5L485.969 92.3438L485.969 129.562L486.906 129L486.906 144.312L485.969 144.906L485.969 182.094L486.906 181.531L486.906 196.875L485.969 197.438L485.969 229.656L487.344 229.375L487.344 217.188L487.344 201.844L487.344 196.594L487.344 181.25L487.344 164.656L487.344 149.312L487.344 144.062L487.344 128.719L487.344 112.094L487.344 91.5ZM388.25 93.6875L388.25 114.281L388.25 130.906L388.25 146.219L388.25 151.5L388.25 166.812L388.25 183.438L388.25 198.781L388.25 204.031L388.25 219.375L388.25 230.062L389.531 230.312L389.531 199.531L388.656 199.031L388.656 183.688L389.531 184.219L389.531 147L388.656 146.469L388.656 131.156L389.531 131.656L389.531 94.4688L388.25 93.6875ZM483.719 93.6875L482.469 94.4688L482.469 131.656L483.312 131.156L483.312 146.469L482.469 147L482.469 184.219L483.312 183.688L483.312 199.031L482.469 199.531L482.469 230.344L483.719 230.094L483.719 219.375L483.719 204.031L483.719 198.781L483.719 183.438L483.719 166.812L483.719 151.5L483.719 146.219L483.719 130.906L483.719 114.281L483.719 93.6875ZM391.875 95.875L391.875 116.469L391.875 133.094L391.875 148.406L391.875 153.688L391.875 169L391.875 185.625L391.875 200.969L391.875 206.219L391.875 221.562L391.875 230.781L392.562 230.906L393.031 231L393.031 201.656L392.25 201.188L392.25 185.844L393.031 186.312L393.031 149.094L392.25 148.625L392.25 133.312L393.031 133.781L393.031 96.5625L391.875 95.875ZM480.094 95.875L478.938 96.5625L478.938 133.781L479.719 133.312L479.719 148.625L478.938 149.094L478.938 186.312L479.719 185.844L479.719 201.188L478.938 201.656L478.938 231.031L479.812 230.875L480.094 230.812L480.094 221.562L480.094 206.219L480.094 200.969L480.094 185.625L480.094 169L480.094 153.688L480.094 148.406L480.094 133.094L480.094 116.469L480.094 95.875ZM395.531 98.0625L395.531 118.656L395.531 135.25L395.531 150.594L395.531 155.844L395.531 171.188L395.531 187.812L395.531 203.156L395.531 208.406L395.531 223.75L395.531 231.5L396.531 231.688L396.531 203.75L395.844 203.344L395.844 188L396.531 188.406L396.531 151.219L395.844 150.781L395.844 135.469L396.531 135.875L396.531 98.6562L395.531 98.0625ZM476.469 98.0625L475.438 98.6562L475.438 135.875L476.125 135.469L476.125 150.781L475.438 151.219L475.438 188.406L476.125 188L476.125 203.344L475.438 203.75L475.438 231.75L476.469 231.531L476.469 223.75L476.469 208.406L476.469 203.156L476.469 187.812L476.469 171.188L476.469 155.844L476.469 150.594L476.469 135.25L476.469 118.656L476.469 98.0625ZM399.156 100.25L399.156 120.844L399.156 137.438L399.156 152.781L399.156 158.031L399.156 173.375L399.156 190L399.156 205.312L399.156 210.594L399.156 225.906L399.156 232.188L400.031 232.375L400.031 205.844L399.438 205.5L399.438 190.156L400.031 190.531L400.031 153.312L399.438 152.938L399.438 137.625L400.031 137.969L400.031 100.75L399.156 100.25ZM472.812 100.25L471.938 100.75L471.938 137.969L472.531 137.625L472.531 152.938L471.938 153.312L471.938 190.531L472.531 190.156L472.531 205.5L471.938 205.844L471.938 232.438L472.812 232.281L472.812 225.938L472.812 210.594L472.812 205.312L472.812 190L472.812 173.375L472.812 158.031L472.812 152.781L472.812 137.438L472.812 120.844L472.812 100.25ZM402.781 102.406L402.781 123L402.781 139.625L402.781 154.969L402.781 160.219L402.781 175.562L402.781 192.188L402.781 207.5L402.781 212.781L402.781 228.094L402.781 232.875L403.531 233L403.531 207.969L403.031 207.656L403.031 192.312L403.531 192.625L403.531 155.406L403.031 155.094L403.031 139.781L403.531 140.062L403.531 102.875L402.781 102.406ZM469.188 102.406L468.438 102.875L468.438 140.062L468.969 139.781L468.969 155.094L468.438 155.406L468.438 192.625L468.969 192.312L468.969 207.656L468.438 207.969L468.438 233.062L469.188 232.938L469.188 228.094L469.188 212.781L469.188 207.5L469.188 192.188L469.188 175.562L469.188 160.219L469.188 154.969L469.188 139.625L469.188 123L469.188 102.406ZM406.406 104.594L406.406 125.188L406.406 141.812L406.406 157.156L406.406 162.406L406.406 177.75L406.406 194.344L406.406 209.688L406.406 214.938L406.406 230.281L406.406 233.531L407.031 233.625L407.031 210.062L406.625 209.812L406.625 194.469L407.031 194.719L407.031 157.531L406.625 157.25L406.625 141.938L407.031 142.188L407.031 104.969L406.406 104.594ZM465.562 104.594L464.938 104.969L464.938 142.188L465.375 141.938L465.375 157.25L464.938 157.531L464.938 194.719L465.375 194.469L465.375 209.812L464.938 210.062L464.938 233.656L465.562 233.562L465.562 230.281L465.562 214.938L465.562 209.688L465.562 194.344L465.562 177.75L465.562 162.406L465.562 157.156L465.562 141.812L465.562 125.188L465.562 104.594ZM410.062 106.781L410.062 127.375L410.062 144L410.062 159.344L410.062 164.594L410.062 179.938L410.062 196.531L410.062 211.875L410.062 217.125L410.062 232.469L410.062 234.094L410.531 234.156L410.531 212.156L410.188 211.969L410.188 196.625L410.531 196.812L410.531 159.625L410.188 159.406L410.188 144.094L410.531 144.281L410.531 107.062L410.062 106.781ZM461.938 106.781L461.438 107.062L461.438 144.281L461.781 144.094L461.781 159.406L461.438 159.625L461.438 196.812L461.781 196.625L461.781 211.969L461.438 212.156L461.438 234.188L461.625 234.156L461.938 234.125L461.938 232.469L461.938 217.125L461.938 211.875L461.938 196.531L461.938 179.938L461.938 164.594L461.938 159.344L461.938 144L461.938 127.375L461.938 106.781ZM492.969 226.812L492.969 228.375L493.25 228.312L492.969 226.812ZM379.031 227.625L378.875 228.312L379.031 228.344L379.031 227.625Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign3RightSide"> <path d="M328.543 80.8835L328.583 81.3305L328.784 83.5745L329.09 86.9515L329.231 88.6645L329.647 93.6935L330.222 101.15L330.823 109.528L331.118 114.444L331.16 115.148L331.342 118.174L331.711 125.766L331.967 132.445L332.147 138.14L332.359 146.472L332.453 152.465L332.491 154.914L332.532 159.914L332.544 165.783L332.501 174.889L332.381 185.7L332.24 200.817L332.23 210.966L332.314 219.494L332.397 223.79L332.513 228.107L330.579 233.527L328.123 233.107L325.662 232.729L323.196 232.395L320.724 232.104L317.915 231.835L315.102 231.641L312.285 231.527L309.469 231.499L301.589 231.557L296.334 231.63L291.952 231.729L287.569 231.88L287.267 226.214L287.359 218.691L287.391 211.197L287.374 202.23L287.285 188.823L287.176 174.593L287.181 162.623L287.249 154.924L287.359 148.378L287.442 145.175L287.59 139.482L287.856 131.407L288.103 125.252L288.373 119.6L288.53 116.84L288.716 113.577L289.12 107.168L289.569 100.766L290.064 94.3705L290.334 91.2095L290.555 88.6305L290.85 85.1745L291.001 83.4495L293.825 83.6965L294.442 84.2705L295.538 85.3975L296.69 86.6395L298.047 88.1685L300.121 90.4725L301.542 91.9475L302.765 93.1055L304.035 94.1735L304.63 94.5995L305.317 95.0165L306.073 95.4095L306.874 95.7635L307.699 96.0635L308.526 96.2935L309.332 96.4385L310.094 96.4835L310.58 96.4395L311.079 96.3295L311.585 96.1615L312.091 95.9455L312.832 95.5545L313.532 95.1095L314.166 94.6445L314.71 94.1915L315.4 93.5525L316.069 92.8875L317.353 91.4895L318.818 89.7215L320.933 86.9715L322.435 84.9845L323.735 83.3655L324.594 82.3585L325.343 81.5295L325.72 81.1395L328.543 80.8835Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign3LeftSide"> <path d="M39.1845 81.0238L39.1445 81.4708L38.9425 83.7148L38.6375 87.0918L38.4965 88.8048L38.0805 93.8338L37.5055 101.291L36.9045 109.669L36.6095 114.584L36.5665 115.289L36.3855 118.315L36.0165 125.907L35.7605 132.586L35.5805 138.281L35.3675 146.613L35.2745 152.606L35.2365 155.055L35.1955 160.055L35.1835 165.923L35.2265 175.03L35.3465 185.84L35.4865 200.958L35.4975 211.107L35.4135 219.635L35.3305 223.93L35.2145 228.248L37.1485 233.667L39.6035 233.247L42.0655 232.869L44.5315 232.535L47.0035 232.245L49.8125 231.975L52.6255 231.781L55.4425 231.668L58.2585 231.639L66.1375 231.697L71.3935 231.77L75.7755 231.87L80.1585 232.02L80.4605 226.355L80.3685 218.832L80.3355 211.337L80.3535 202.371L80.4425 188.963L80.5515 174.734L80.5465 162.764L80.4785 155.065L80.3685 148.518L80.2855 145.316L80.1375 139.623L79.8715 131.548L79.6245 125.393L79.3545 119.741L79.1975 116.981L79.0115 113.718L78.6075 107.309L78.1585 100.907L77.6635 94.5108L77.3935 91.3498L77.1725 88.7708L76.8775 85.3148L76.7265 83.5898L73.9025 83.8368L73.2855 84.4108L72.1895 85.5378L71.0375 86.7798L69.6805 88.3088L67.6065 90.6128L66.1855 92.0878L64.9625 93.2458L63.6925 94.3138L63.0975 94.7398L62.4105 95.1568L61.6545 95.5498L60.8535 95.9038L60.0275 96.2038L59.2015 96.4338L58.3955 96.5788L57.6325 96.6238L57.1475 96.5798L56.6485 96.4698L56.1425 96.3018L55.6365 96.0858L54.8945 95.6948L54.1955 95.2498L53.5605 94.7848L53.0175 94.3318L52.3275 93.6928L51.6585 93.0278L50.3745 91.6298L48.9095 89.8618L46.7945 87.1118L45.2915 85.1248L43.9925 83.5058L43.1335 82.4988L42.3845 81.6698L42.0075 81.2798L39.1845 81.0238Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g></g> </svg> ';

fabric.loadSVGFromString(MenONeckDesign3Svg, function(objects, options) {
	for (let i = 0; i < objects.length; i++){
		let obj = objects[i];
		MenONeckDesign3SvgGroup.addWithUpdate(obj)
	} 
});

MenONeckDesign3SvgGroup.set({ 
	lockMovementX:true,
	lockMovementY:true,
	lockScalingX:true,
	lockScalingY:true,
	lockRotation:true,
	hasControls:false,
	hasBorders:false,
	selectable: false,
	fixed: true,
})
//#engregion Design3




//#region Design4

//design 4

const MenONeckDesign4SvgGroup = new fabric.Group

const MenONeckDesign4Svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="2560" height="1920"> <g transform="matrix(2.8317 0 0 2.8317 -0 0)"><g id="MenONeckDesign4KnitTrimTop"> <path d="M99.8766 32.4106L99.8766 15.4026L177.66 15.4026L255.301 15.4026L255.301 32.4106L177.66 32.4106L99.8766 32.4106Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign4LeftSleeve"> <path d="M605.011 98.8862L604.508 100.23L602.427 105.692L601.7 107.499L600.944 109.295L600.052 111.312L599.128 113.312L598.175 115.296L597.193 117.263L596.185 119.215L595.151 121.152L593.013 124.987L591.689 127.264L590.338 129.526L587.563 134.006L585.428 137.335L583.257 140.642L578.84 147.209L576.861 150.089L574.847 152.958L572.802 155.814L570.73 158.654L566.518 164.28L562.239 169.816L561.484 170.757L560.835 171.525L560.275 172.14L559.79 172.622L559.286 173.053L558.843 173.357L558.357 173.603L557.627 173.855L556.961 174.061L556.061 174.442L555.555 174.723L554.887 175.075L553.867 175.569L553.298 175.84L554.461 178.944L555.779 181.719L556.992 184.355L558.118 186.895L559.178 189.388L560.191 191.881L561.176 194.42L562.155 197.052L562.979 199.383L563.763 201.725L564.513 204.075L565.234 206.435L563.435 212.104L637.75 212.109L658.763 212.111L669.272 212.111L668.233 208.76L667.514 206.442L668.219 204.075L668.954 201.716L669.723 199.366L670.53 197.031L671.513 194.34L672.533 191.681L673.591 189.053L674.684 186.446L675.814 183.859L676.978 181.283L678.174 178.715L679.403 176.15L678.606 175.633L677.866 175.14L677.22 174.771L676.747 174.545L676.237 174.403L675.724 174.321L674.987 174.184L674.432 174.024L673.915 173.818L673.342 173.524L672.813 173.195L672.234 172.777L671.597 172.258L670.898 171.625L669.699 170.421L668.534 169.127L667.403 167.757L666.304 166.323L665.022 164.536L663.777 162.696L662.328 160.45L660.23 157.083L658.72 154.64L657.481 152.697L657.037 152.027L656.088 150.589L654.175 147.722L650.756 142.572L648.51 139.118L646.676 136.215L644.888 133.286L643.444 130.818L642.047 128.323L640.706 125.796L639.427 123.235L638.73 121.751L638.059 120.254L636.791 117.227L635.599 114.168L634.463 111.088L632.864 111.448L631.264 111.764L630.193 111.939L629.116 112.076L628.21 112.157L627.299 112.203L626.379 112.211L625.448 112.177L623.625 112.018L622.701 111.897L621.778 111.748L620.862 111.567L619.956 111.354L619.07 111.106L618.206 110.823L617.21 110.438L616.526 110.127L616.222 109.99L615.255 109.479L614.321 108.904L613.433 108.264L612.605 107.559L611.85 106.789L611.504 106.379L611.18 105.952L610.543 104.977L609.983 103.958L609.382 102.693L608.567 100.754L608.141 99.7152L607.921 99.2042L605.264 98.2152L605.011 98.8862Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign4RightSleeve"> <path d="M814.247 99.2273L814.026 99.7383L813.601 100.778L812.785 102.716L812.185 103.981L811.624 105L810.987 105.975L810.664 106.402L810.318 106.812L809.562 107.583L808.734 108.287L807.846 108.927L806.913 109.502L805.945 110.013L805.642 110.15L804.957 110.461L803.962 110.846L803.098 111.129L802.211 111.377L801.306 111.59L800.389 111.771L799.466 111.921L798.543 112.041L796.719 112.2L795.789 112.235L794.868 112.227L793.956 112.181L793.052 112.1L791.975 111.962L790.903 111.787L789.303 111.471L787.705 111.111L786.568 114.191L785.377 117.25L784.108 120.277L783.438 121.775L782.741 123.258L781.462 125.82L780.121 128.346L778.724 130.841L777.279 133.309L775.492 136.239L773.657 139.141L771.411 142.596L767.992 147.745L766.079 150.612L765.13 152.05L764.687 152.72L763.446 154.663L761.937 157.106L759.839 160.475L758.389 162.719L757.146 164.559L755.864 166.346L754.764 167.78L753.633 169.151L752.469 170.444L751.269 171.649L750.57 172.281L749.934 172.8L749.354 173.219L748.826 173.547L748.252 173.841L747.736 174.048L747.18 174.207L746.444 174.345L745.931 174.426L745.419 174.569L744.948 174.795L744.302 175.164L743.562 175.656L742.764 176.174L743.993 178.738L745.19 181.306L746.354 183.882L747.482 186.469L748.577 189.076L749.634 191.706L750.655 194.363L751.638 197.054L752.445 199.389L753.213 201.739L753.949 204.099L754.653 206.466L753.934 208.783L752.903 212.111L858.727 212.111L856.934 206.458L857.654 204.099L858.405 201.748L859.188 199.406L860.012 197.076L860.991 194.443L861.977 191.904L862.989 189.411L864.049 186.918L865.175 184.378L866.388 181.743L867.707 178.967L868.87 175.863L868.301 175.592L867.28 175.098L866.613 174.746L866.107 174.465L865.206 174.084L864.541 173.878L863.811 173.626L863.325 173.38L862.882 173.076L862.378 172.645L861.892 172.163L861.332 171.548L860.682 170.781L859.928 169.839L855.65 164.303L851.438 158.678L849.366 155.837L847.321 152.981L845.307 150.112L843.327 147.232L838.911 140.665L836.74 137.358L834.605 134.029L831.829 129.549L830.479 127.287L829.155 125.01L827.017 121.175L825.983 119.238L824.974 117.286L823.993 115.319L823.039 113.335L822.116 111.336L821.223 109.318L820.467 107.522L819.74 105.715L817.659 100.253L817.157 98.9093L816.904 98.2393L814.247 99.2273Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign4KnitTrimRightSleeve"> <path d="M752.87 200.69L753.213 201.739L753.949 204.1L754.653 206.466L753.934 208.784L752.929 212.028L858.7 212.028L856.934 206.459L857.654 204.099L858.404 201.748L858.759 200.69L752.87 200.69Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign4KnitTrimLeftSleeve"> <path d="M563.425 200.713L563.764 201.725L564.513 204.075L565.234 206.435L563.453 212.051L669.254 212.051L668.234 208.76L667.515 206.442L668.219 204.075L668.955 201.716L669.283 200.713L563.425 200.713Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign4LeftSideColor1"> <path d="M39.1446 81.4703L38.9426 83.7153L38.6366 87.0923L38.4966 88.8053L38.0796 93.8333L37.5056 101.29L36.9046 109.669L36.6096 114.584L36.5666 115.288L36.3856 118.315L36.0166 125.906L35.7606 132.585L35.5806 138.28L35.3686 146.612L35.2746 152.606L35.2366 155.055L35.1956 160.054L35.1836 165.922L35.2256 175.029L35.3466 185.839L35.4866 200.958L35.4976 211.107L35.4136 219.634L35.3296 223.929L35.2146 228.248L37.1486 233.666L39.6036 233.247L42.0656 232.869L44.5316 232.534L47.0036 232.244L49.8126 231.974L52.6256 231.781L55.4426 231.667L58.2586 231.639L66.1386 231.696L71.3936 231.769L75.7756 231.87L80.1586 232.019L80.4596 226.354L80.3696 218.832L80.3356 211.336L80.3526 202.371L80.4416 188.962L80.5516 174.734L80.5466 162.763L80.4776 155.065L80.3696 148.517L80.2856 145.315L80.1376 139.623L79.8716 131.548L79.6246 125.392L79.3546 119.74L79.1976 116.98L79.0116 113.718L78.6066 107.308L78.1586 100.906L77.6636 94.5103L77.3936 91.3503L77.1726 88.7713L76.8766 85.3153L76.7266 83.5893L73.9016 83.8373L73.2856 84.4103L72.1886 85.5373L71.0366 86.7793L69.6806 88.3083L67.6066 90.6123L66.1846 92.0873L64.9616 93.2463L63.6926 94.3143L63.0976 94.7393L62.4106 95.1563L61.6546 95.5503L60.8536 95.9033L60.0286 96.2033L59.2016 96.4333L58.3946 96.5783L57.6336 96.6233L57.1476 96.5803L56.6486 96.4693L56.1416 96.3023L55.6366 96.0863L54.8946 95.6953L54.1956 95.2503L53.5606 94.7853L53.0176 94.3323L52.3266 93.6923L51.6586 93.0273L50.3746 91.6293L48.9086 89.8623L46.7936 87.1113L45.2916 85.1253L43.9926 83.5053L43.1336 82.4983L42.3846 81.6693L42.0076 81.2803L39.1846 81.0243L39.1446 81.4703Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign4LeftSideColor2"> <path d="M58.9221 134.584L59.2491 134.726L58.5531 161.202L58.2251 161.06L57.8441 197.232L57.5101 161.949L57.1821 162.091L56.4861 135.606L56.8131 135.464L56.1171 108.977L55.3541 136.098L55.6891 135.953L54.9761 163.049L54.6421 163.195L53.9531 189.363L53.2811 163.786L52.9531 163.928L52.2571 137.444L52.5831 137.302L51.8881 110.815L51.1251 137.936L51.4601 137.79L50.7471 164.887L50.4121 165.033L49.7241 191.201L49.0521 165.624L48.7231 165.766L48.0271 139.282L48.3541 139.14L47.6581 112.652L46.8961 139.773L47.2311 139.628L46.5181 166.725L46.1821 166.871L45.4951 193.039L44.8231 167.461L44.4941 167.604L43.7981 141.119L44.1251 140.978L43.4291 114.49L42.6671 141.611L43.0021 141.465L42.2891 168.562L41.9531 168.708L41.2661 194.877L40.5931 169.299L40.2651 169.442L39.5691 142.957L39.8961 142.814L39.1991 116.327L38.4381 143.449L38.7731 143.303L38.0601 170.4L37.7241 170.545L37.0371 196.714L36.3641 171.137L36.0361 171.279L35.3781 146.229L35.3681 146.613L35.2741 152.607L35.2371 155.055L35.1951 160.055L35.1841 165.923L35.2261 175.03L35.3461 185.84L35.4871 200.958L35.4981 211.107L35.4131 219.635L35.3291 223.93L35.2141 228.249L37.1481 233.667L39.6041 233.247L42.0651 232.869L44.5321 232.535L47.0031 232.245L49.8121 231.975L52.6261 231.781L55.4431 231.668L58.2591 231.639L66.1381 231.697L71.3931 231.77L75.7751 231.87L80.1581 232.02L80.4601 226.354L80.3691 218.832L80.3361 211.337L80.3531 202.371L80.4421 188.963L80.5521 174.735L80.5461 162.764L80.4781 155.065L80.3691 148.518L80.3221 146.703L79.6991 170.391L79.3711 170.248L78.6991 195.826L78.0101 169.657L77.6751 169.512L76.9621 142.415L77.2971 142.561L76.5351 115.439L75.8381 141.927L76.1661 142.069L75.4691 168.554L75.1421 168.411L74.4701 193.989L73.7811 167.82L73.4461 167.674L72.7331 140.587L73.0681 140.733L72.3061 113.601L71.6091 140.099L71.9371 140.241L71.2401 166.716L70.9131 166.574L70.2401 192.151L69.5521 165.982L69.2171 165.837L68.5041 138.746L68.8391 138.891L68.0771 111.765L67.3801 138.257L67.7081 138.399L67.0111 164.878L66.6841 164.736L66.0111 190.313L65.3231 164.145L64.9871 163.999L64.2751 136.906L64.6101 137.052L63.8481 109.927L63.1511 136.418L63.4791 136.56L62.7821 163.04L62.4551 162.898L61.7821 188.476L61.0941 162.307L60.7581 162.161L60.0461 135.072L60.3811 135.218L59.6191 108.089L58.9221 134.584ZM35.4151 144.762L35.6671 144.652L35.5411 139.848L35.4151 144.762ZM80.0681 143.764L80.2471 143.842L80.1571 140.379L80.0681 143.764Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign4RightSideColor1"> <path d="M325.72 81.14L325.343 81.529L324.594 82.358L323.735 83.365L322.436 84.985L320.934 86.971L318.819 89.722L317.353 91.489L316.07 92.887L315.401 93.552L314.71 94.192L314.167 94.645L313.533 95.11L312.833 95.554L312.091 95.946L311.586 96.162L311.08 96.329L310.58 96.44L310.095 96.484L309.333 96.438L308.526 96.293L307.7 96.063L306.875 95.763L306.073 95.41L305.318 95.016L304.631 94.6L304.035 94.174L302.766 93.105L301.542 91.947L300.122 90.472L298.048 88.168L296.69 86.639L295.539 85.397L294.443 84.27L293.826 83.697L291.001 83.45L290.85 85.175L290.555 88.631L290.335 91.21L290.064 94.37L289.569 100.767L289.121 107.168L288.716 113.578L288.53 116.84L288.374 119.601L288.104 125.253L287.856 131.408L287.591 139.482L287.442 145.176L287.359 148.377L287.25 154.925L287.181 162.623L287.177 174.594L287.285 188.822L287.375 202.23L287.392 211.196L287.359 218.692L287.267 226.215L287.569 231.879L291.952 231.73L296.334 231.629L301.59 231.556L309.469 231.499L312.286 231.527L315.102 231.641L317.916 231.834L320.724 232.104L323.196 232.394L325.662 232.729L328.124 233.107L330.579 233.527L332.513 228.108L332.398 223.79L332.314 219.495L332.231 210.967L332.241 200.818L332.381 185.699L332.501 174.889L332.544 165.782L332.532 159.914L332.492 154.915L332.454 152.466L332.36 146.473L332.147 138.14L331.968 132.445L331.711 125.767L331.342 118.175L331.16 115.148L331.118 114.444L330.823 109.529L330.223 101.15L329.648 93.693L329.231 88.665L329.09 86.952L328.784 83.575L328.583 81.33L328.543 80.883L325.72 81.14Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign4RightSideColor2"> <path d="M307.347 135.077L307.681 134.931L306.969 162.02L306.633 162.166L305.946 188.335L305.272 162.757L304.945 162.9L304.249 136.42L304.576 136.278L303.879 109.786L303.117 136.911L303.452 136.765L302.74 163.858L302.404 164.004L301.717 190.172L301.043 164.595L300.716 164.737L300.02 138.259L300.347 138.116L299.65 111.624L298.888 138.75L299.223 138.605L298.511 165.696L298.175 165.842L297.487 192.01L296.814 166.433L296.487 166.575L295.791 140.101L296.118 139.959L295.421 113.462L294.659 140.592L294.994 140.446L294.282 167.534L293.946 167.68L293.257 193.848L292.585 168.271L292.258 168.413L291.561 141.929L291.889 141.787L291.192 115.299L290.43 142.42L290.764 142.274L290.053 169.372L289.717 169.517L289.028 195.686L288.356 170.108L288.028 170.251L287.406 146.57L287.359 148.377L287.249 154.925L287.181 162.623L287.176 174.594L287.285 188.822L287.374 202.231L287.391 211.196L287.359 218.692L287.267 226.215L287.569 231.879L291.952 231.73L296.334 231.629L301.59 231.556L309.468 231.499L312.285 231.527L315.101 231.641L317.916 231.834L320.724 232.104L323.196 232.394L325.662 232.729L328.123 233.107L330.579 233.527L332.513 228.108L332.398 223.79L332.314 219.495L332.23 210.967L332.24 200.818L332.38 185.699L332.501 174.889L332.543 165.782L332.532 159.914L332.491 154.915L332.453 152.466L332.36 146.473L332.35 146.089L331.691 171.139L331.363 170.996L330.69 196.574L330.003 170.405L329.667 170.259L328.955 143.163L329.29 143.308L328.528 116.187L327.831 142.674L328.159 142.816L327.462 169.301L327.134 169.158L326.461 194.736L325.774 168.567L325.438 168.422L324.726 141.325L325.061 141.471L324.298 114.349L323.602 140.837L323.929 140.979L323.233 167.464L322.905 167.321L322.232 192.898L321.544 166.73L321.209 166.584L320.497 139.487L320.832 139.633L320.069 112.512L319.373 138.999L319.7 139.141L319.004 165.626L318.675 165.484L318.003 191.061L317.315 164.892L316.98 164.746L316.268 137.649L316.603 137.795L315.84 110.674L315.144 137.161L315.47 137.304L314.775 163.788L314.446 163.646L313.774 189.223L313.086 163.054L312.751 162.909L312.038 135.812L312.373 135.957L311.611 108.837L310.915 135.324L311.241 135.466L310.546 161.95L310.217 161.808L309.883 197.092L309.502 160.92L309.174 161.062L308.478 134.586L308.805 134.443L308.108 107.948L307.347 135.077ZM332.06 144.512L332.312 144.621L332.187 139.704L332.06 144.512ZM287.48 143.702L287.66 143.624L287.57 140.239L287.48 143.702Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign4FrontColor1"> <path d="M199.702 37.9688L198.992 38.8518L198.227 39.8818L196.997 41.4908L196.048 42.5868L195.111 43.5288L193.994 44.5078L193.37 44.9998L192.73 45.4668L191.407 46.3288L190.031 47.0908L188.614 47.7548L187.16 48.3158L185.679 48.7758L184.18 49.1328L182.669 49.3848L181.656 49.4938L180.641 49.5588L179.42 49.5948L177.367 49.5958L175.141 49.5638L173.669 49.4888L172.444 49.3668L171.213 49.1718L169.719 48.8318L168.243 48.3918L166.793 47.8528L165.375 47.2138L164.001 46.4758L162.676 45.6378L162.036 45.1828L161.412 44.7018L160.803 44.1958L160.214 43.6658L159.295 42.7788L158.551 42.0038L157.838 41.1918L156.995 40.1448L156.298 39.2548L155.671 38.5758L154.928 37.8718L153.473 39.0928L151.658 40.6038L150.785 41.3998L150.12 42.0058L148.803 43.2678L147.517 44.5598L146.259 45.8778L144.79 47.4778L143.11 49.3978L141.174 51.7008L138.231 55.3568L134.817 59.7798L134.218 60.5568L132.409 62.8968L128.811 67.5868L122.451 75.8498L118.175 81.3308L115.361 81.6768L115.47 82.5758L115.694 84.3668L116.307 89.4398L117.863 103.611L118.834 113.094L119.576 121.014L120.234 128.945L120.705 135.56L121.092 142.178L121.387 148.799L121.577 155.417L121.671 161.977L121.7 168.538L121.669 176.411L121.552 188.223L121.42 199.966L121.398 209.833L121.445 216.166L121.532 221.542L121.602 224.163L121.616 224.7L121.726 226.189L121.938 227.955L122.15 229.849L128.653 230.059L139.842 230.421L149.249 230.683L158.084 230.889L162.933 230.956L164.572 230.982L169.162 231.015L174.635 231.015L177.588 231.015L180.988 231.019L187.621 230.991L194.251 230.923L200.897 230.809L204.198 230.728L208.994 230.611L218.581 230.29L227.249 230.008L233.027 229.849L233.24 227.955L233.451 226.19L233.561 224.7L233.575 224.163L233.645 221.542L233.732 216.168L233.779 209.837L233.757 199.973L233.625 188.234L233.508 176.418L233.477 168.542L233.506 161.979L233.6 155.417L233.789 148.808L234.081 142.202L234.465 135.599L234.932 128.999L235.585 121.079L236.324 113.165L237.297 103.672L238.87 89.4398L239.436 84.7628L239.693 82.7048L239.816 81.6768L237.003 81.3308L234.402 77.9818L230.553 72.9088L226.687 67.7868L224.709 65.2588L224.293 64.7368L223.454 63.6958L220.96 60.5568L217.326 55.8338L214.373 52.1438L212.368 49.7448L210.624 47.7418L209.1 46.0728L207.792 44.6968L206.455 43.3488L205.085 42.0328L204.392 41.3998L203.453 40.5448L201.516 38.9318L199.984 37.6458L199.702 37.9688Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign4FrontColor2"> <path d="M232.05 144.399L232.385 144.254L231.673 171.334L231.338 171.479L230.65 197.632L229.978 172.07L229.651 172.213L228.954 145.745L229.282 145.602L228.585 119.131L227.824 146.236L228.158 146.09L227.446 173.17L227.111 173.316L226.423 199.469L225.751 173.906L225.423 174.049L224.728 147.581L225.055 147.439L224.359 120.968L223.597 148.072L223.932 147.927L223.22 175.007L222.884 175.153L222.197 201.306L221.524 175.743L221.197 175.885L220.501 149.417L220.828 149.275L220.132 122.804L219.371 149.909L219.705 149.763L218.993 176.843L218.658 176.989L217.97 203.142L217.298 177.58L216.97 177.722L216.275 151.254L216.601 151.112L215.906 124.64L215.143 151.745L215.478 151.6L214.766 178.68L214.432 178.826L213.744 204.978L213.072 179.416L212.744 179.558L212.048 153.09L212.375 152.948L211.679 126.477L210.917 153.582L211.252 153.436L210.54 180.517L210.204 180.662L209.517 206.815L208.845 181.253L208.518 181.395L207.821 154.927L208.149 154.785L207.452 128.314L206.691 155.419L207.025 155.273L206.314 182.353L205.978 182.499L205.29 208.652L204.618 183.089L204.29 183.232L203.595 156.763L203.921 156.622L203.226 130.15L202.464 157.255L202.799 157.11L202.086 184.19L201.751 184.336L201.064 210.488L200.392 184.926L200.064 185.068L199.368 158.6L199.695 158.458L198.999 131.987L198.238 159.092L198.572 158.946L197.86 186.026L197.525 186.172L196.837 212.325L196.165 186.763L195.838 186.905L195.142 160.437L195.469 160.295L194.773 133.823L194.011 160.928L194.345 160.783L193.633 187.863L193.298 188.008L192.61 214.161L191.939 188.599L191.611 188.742L190.915 162.273L191.242 162.131L190.546 135.66L189.784 162.764L190.119 162.62L189.407 189.7L189.071 189.845L188.384 215.998L187.712 190.436L187.384 190.578L186.688 164.11L187.016 163.968L186.319 137.497L185.558 164.601L185.893 164.456L185.181 191.536L184.845 191.681L184.157 217.835L183.485 192.273L183.157 192.415L182.462 165.946L182.788 165.805L182.093 139.333L181.331 166.437L181.665 166.292L180.953 193.373L180.619 193.518L179.931 219.67L179.259 194.109L178.931 194.251L178.235 167.783L178.562 167.641L177.866 141.17L177.104 168.274L177.439 168.128L176.727 195.209L176.392 195.354L175.619 231.014L177.588 231.014L180.988 231.019L187.621 230.991L194.251 230.922L200.897 230.809L204.199 230.728L208.995 230.611L218.581 230.29L227.249 230.008L233.027 229.849L233.24 227.955L233.451 226.189L233.561 224.7L233.575 224.162L233.646 221.542L233.732 216.168L233.779 209.837L233.757 199.972L233.625 188.234L233.508 176.417L233.477 168.542L233.506 161.979L233.559 158.29L233.181 143.908L233.508 143.765L232.812 117.295L232.05 144.399ZM121.791 145.602L122.118 145.745L121.674 162.62L121.7 168.538L121.669 176.411L121.552 188.223L121.42 199.966L121.399 209.833L121.445 216.166L121.532 221.542L121.602 224.162L121.616 224.7L121.726 226.188L121.938 227.955L122.15 229.849L128.653 230.058L139.842 230.421L149.249 230.683L158.084 230.889L162.934 230.956L164.572 230.982L169.162 231.015L174.635 231.014L175.454 231.014L174.68 195.354L174.346 195.209L173.633 168.128L173.968 168.274L173.206 141.17L172.51 167.641L172.837 167.783L172.141 194.251L171.814 194.109L171.142 219.67L170.454 193.518L170.118 193.373L169.406 166.292L169.741 166.437L168.98 139.333L168.283 165.805L168.611 165.946L167.914 192.415L167.587 192.273L166.915 217.835L166.228 191.681L165.892 191.536L165.18 164.456L165.515 164.601L164.752 137.497L164.057 163.968L164.383 164.11L163.688 190.578L163.36 190.436L162.688 215.998L162 189.845L161.665 189.7L160.954 162.62L161.288 162.764L160.526 135.66L159.83 162.131L160.157 162.273L159.461 188.742L159.134 188.599L158.461 214.161L157.774 188.008L157.439 187.863L156.727 160.783L157.061 160.928L156.3 133.823L155.604 160.295L155.931 160.437L155.235 186.905L154.907 186.763L154.235 212.325L153.547 186.172L153.212 186.026L152.5 158.946L152.835 159.092L152.073 131.987L151.377 158.458L151.704 158.6L151.009 185.068L150.68 184.926L150.009 210.488L149.321 184.336L148.985 184.19L148.273 157.11L148.608 157.255L147.847 130.15L147.15 156.622L147.478 156.763L146.781 183.232L146.454 183.089L145.782 208.652L145.094 182.499L144.759 182.353L144.047 155.273L144.382 155.419L143.62 128.314L142.924 154.785L143.251 154.927L142.555 181.395L142.227 181.253L141.555 206.815L140.867 180.662L140.533 180.517L139.821 153.436L140.155 153.582L139.393 126.477L138.697 152.948L139.024 153.09L138.328 179.558L138.001 179.416L137.329 204.978L136.641 178.826L136.305 178.68L135.593 151.6L135.928 151.745L135.167 124.64L134.471 151.112L134.798 151.254L134.102 177.722L133.774 177.58L133.102 203.142L132.415 176.989L132.079 176.843L131.367 149.763L131.702 149.909L130.94 122.804L130.244 149.275L130.571 149.417L129.875 175.885L129.547 175.743L128.876 201.306L128.188 175.153L127.852 175.007L127.141 147.927L127.475 148.072L126.713 120.968L126.017 147.439L126.344 147.581L125.648 174.049L125.321 173.906L124.648 199.469L123.961 173.316L123.626 173.17L122.914 146.09L123.249 146.236L122.487 119.131L121.791 145.602Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign4BackColor1"> <path d="M447.599 26.096L446.109 26.081L437.595 25.993L436.067 25.996L431.23 26.005L426.856 26.051L424.537 26.096L422.737 23.906L420.635 25.632L417.853 27.91L416.43 29.106L415.301 30.055L413.432 31.754L411.793 33.301L410.717 34.359L409.774 35.282L407.9 37.186L406.057 39.122L404.243 41.087L402.285 43.272L400.18 45.696L397.623 48.724L394.598 52.437L393.042 54.403L391.414 56.461L386.952 62.228L381.717 69.146L376.242 76.352L373.429 76.697L373.639 78.42L374.064 81.872L374.38 84.45L375.116 90.56L375.817 96.67L376.482 102.781L377.109 108.897L377.296 110.833L377.697 115.014L378.244 121.137L378.748 127.264L379.208 133.398L379.444 137.135L379.622 140.892L379.779 145.409L379.948 152.164L380.053 158.878L380.082 161.117L380.099 162.236L379.977 222.751L378.882 228.316L384.37 229.297L392.577 230.905L397.689 231.924L401.99 232.74L406.034 233.464L410.002 234.092L413.382 234.561L415.038 234.753L416.096 234.876L418.218 235.08L420.317 235.242L422.402 235.369L424.671 235.473L427.151 235.549L431.182 235.623L436.067 235.629L439.134 235.629L443.155 235.568L446.268 235.476L449.103 235.348L451.701 235.188L454.085 235.003L456.495 234.777L458.94 234.505L460.174 234.347L461.617 234.162L464.569 233.722L468.037 233.148L473.424 232.157L479.816 230.869L487.87 229.279L490.56 228.783L493.253 228.316L492.157 222.751L492.203 220.252L492.257 215.128L492.282 209.091L492.257 199.688L492.152 188.495L492.046 175.414L492.028 166.695L492.073 159.429L492.188 152.164L492.354 145.405L492.513 140.895L492.691 137.142L492.927 133.398L493.296 128.488L493.699 123.584L494.596 113.787L494.891 110.84L495.184 107.916L495.799 102.048L496.567 95.009L497.754 84.45L498.356 79.501L498.592 77.631L498.706 76.697L495.892 76.352L493.604 73.352L490.204 68.832L486.922 64.453L484.121 60.792L483.098 59.481L481.763 57.788L479.985 55.53L479.093 54.403L477.536 52.435L474.507 48.719L471.951 45.694L469.849 43.275L467.892 41.094L466.08 39.13L464.238 37.194L462.363 35.287L461.418 34.359L460.537 33.492L458.863 31.9L456.839 30.059L455.704 29.106L454.307 27.932L451.515 25.644L449.398 23.906L447.599 26.096Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="MenONeckDesign4BackColor2"> <path d="M493.632 124.393L493.698 123.584L494.121 118.968L493.959 112.778L493.632 124.393ZM488.693 143.33L489.046 143.177L488.294 171.765L487.94 171.918L487.214 199.527L486.505 172.542L486.158 172.692L485.424 144.75L485.77 144.6L485.034 116.656L484.231 145.269L484.583 145.116L483.832 173.703L483.478 173.857L482.752 201.465L482.043 174.481L481.697 174.631L480.963 146.689L481.307 146.539L480.573 118.594L479.768 147.208L480.122 147.054L479.37 175.642L479.016 175.796L478.291 203.404L477.58 176.419L477.235 176.57L476.5 148.627L476.845 148.478L476.111 120.533L475.307 149.147L475.66 148.993L474.908 177.58L474.555 177.734L473.828 205.343L473.119 178.358L472.773 178.508L472.038 150.567L472.384 150.417L471.649 122.472L470.845 151.085L471.198 150.931L470.446 179.519L470.092 179.673L469.367 207.282L468.657 180.297L468.311 180.447L467.576 152.505L467.922 152.355L467.187 124.411L466.383 153.024L466.736 152.871L465.985 181.458L465.63 181.611L464.905 209.221L464.196 182.235L463.849 182.385L463.115 154.444L463.459 154.294L462.725 126.35L461.921 154.962L462.274 154.809L461.523 183.397L461.169 183.551L460.443 211.159L459.733 184.175L459.388 184.325L458.653 156.383L458.998 156.233L458.263 128.288L457.459 156.902L457.812 156.748L457.06 185.336L456.707 185.49L455.981 213.098L455.271 186.113L454.926 186.264L454.191 158.321L454.536 158.172L453.801 130.227L452.997 158.841L453.351 158.687L452.599 187.274L452.244 187.428L451.519 215.037L450.81 188.052L450.463 188.202L449.729 160.261L450.075 160.11L449.339 132.165L448.536 160.779L448.888 160.625L448.137 189.213L447.783 189.367L447.057 216.975L446.348 189.99L446.002 190.141L445.267 162.199L445.612 162.049L444.878 134.105L444.073 162.718L444.427 162.565L443.675 191.152L443.321 191.305L442.596 218.915L441.886 191.929L441.54 192.079L440.805 164.138L441.15 163.988L440.416 136.044L439.611 164.656L439.965 164.503L439.213 193.091L438.86 193.245L438.133 220.853L437.424 193.869L437.078 194.019L436.343 166.077L436.689 165.927L435.954 137.982L435.15 166.596L435.503 166.442L434.751 195.03L434.398 195.183L433.521 235.626L436.067 235.629L439.134 235.629L443.154 235.568L446.268 235.476L449.103 235.348L451.701 235.188L454.085 235.003L456.494 234.777L458.94 234.505L460.174 234.347L461.617 234.162L464.569 233.722L468.037 233.148L473.423 232.157L479.816 230.869L487.87 229.279L490.56 228.783L493.253 228.316L492.157 222.751L492.203 220.252L492.257 215.128L492.282 209.091L492.257 199.688L492.151 188.495L492.096 181.611L491.676 197.587L490.966 170.603L490.62 170.753L489.886 142.812L490.231 142.661L489.496 114.717L488.693 143.33ZM381.219 144.6L381.564 144.75L380.83 172.692L380.484 172.542L380.044 189.241L379.977 222.751L378.882 228.316L384.37 229.297L392.577 230.904L397.688 231.924L401.989 232.74L406.034 233.464L410.002 234.092L413.382 234.561L415.038 234.753L416.096 234.876L418.217 235.08L420.317 235.242L422.401 235.368L424.67 235.473L427.151 235.549L431.182 235.623L433.467 235.626L432.59 195.183L432.237 195.03L431.485 166.442L431.839 166.596L431.034 137.982L430.3 165.927L430.645 166.077L429.91 194.019L429.564 193.869L428.854 220.853L428.129 193.245L427.775 193.091L427.023 164.503L427.377 164.656L426.572 136.044L425.838 163.988L426.183 164.138L425.448 192.079L425.102 191.929L424.393 218.915L423.667 191.305L423.313 191.152L422.562 162.565L422.914 162.718L422.111 134.105L421.375 162.049L421.721 162.199L420.987 190.141L420.64 189.99L419.931 216.975L419.205 189.367L418.851 189.213L418.099 160.625L418.453 160.779L417.649 132.165L416.914 160.11L417.259 160.261L416.524 188.202L416.179 188.052L415.469 215.037L414.743 187.428L414.39 187.274L413.638 158.687L413.991 158.841L413.187 130.227L412.452 158.172L412.797 158.321L412.062 186.264L411.717 186.113L411.007 213.098L410.281 185.49L409.927 185.336L409.176 156.748L409.529 156.902L408.725 128.288L407.991 156.233L408.335 156.383L407.601 184.325L407.254 184.175L406.545 211.159L405.82 183.551L405.465 183.397L404.714 154.809L405.067 154.962L404.263 126.35L403.528 154.294L403.874 154.444L403.139 182.385L402.793 182.235L402.084 209.221L401.358 181.611L401.004 181.458L400.252 152.871L400.605 153.024L399.801 124.411L399.066 152.355L399.412 152.505L398.677 180.447L398.331 180.297L397.622 207.282L396.895 179.673L396.542 179.519L395.79 150.931L396.143 151.085L395.339 122.472L394.605 150.417L394.95 150.567L394.215 178.508L393.87 178.358L393.159 205.343L392.434 177.734L392.08 177.58L391.328 148.993L391.682 149.147L390.877 120.533L390.143 148.478L390.487 148.627L389.753 176.57L389.407 176.419L388.698 203.404L387.972 175.796L387.618 175.642L386.867 147.054L387.219 147.208L386.416 118.594L385.68 146.539L386.026 146.689L385.292 174.631L384.945 174.481L384.236 201.465L383.51 173.857L383.156 173.703L382.404 145.116L382.757 145.269L381.954 116.656L381.219 144.6Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/></g></g> </svg> ';

fabric.loadSVGFromString(MenONeckDesign4Svg, function(objects, options) {
	for (let i = 0; i < objects.length; i++){
		let obj = objects[i];
		MenONeckDesign4SvgGroup.addWithUpdate(obj)
	} 
});

MenONeckDesign4SvgGroup.set({ 
	lockMovementX:true,
	lockMovementY:true,
	lockScalingX:true,
	lockScalingY:true,
	lockRotation:true,
	hasControls:false,
	hasBorders:false,
	selectable: false,
	fixed: true,
})
//#engregion Design4





//#region Design5

//design 5

const MenONeckDesign5SvgGroup = new fabric.Group

const MenONeckDesign5Svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="2560" height="1920"> <g transform="matrix(2.8317 0 0 2.8317 -0 0)"><g id="0_MenONeckDesign5KnitTrimTop"> <path d="M99.8766 32.4106L99.8766 15.4026L177.66 15.4026L255.301 15.4026L255.301 32.4106L177.66 32.4106L99.8766 32.4106Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="1_MenONeckDesign5RightSleeveColor2"> <path d="M814.247 99.2273L814.026 99.7383L813.601 100.778L812.785 102.716L812.185 103.981L811.624 105L810.987 105.975L810.664 106.402L810.318 106.812L809.562 107.583L808.734 108.287L807.846 108.927L806.913 109.502L805.945 110.013L805.642 110.15L804.957 110.461L803.962 110.846L803.098 111.129L802.211 111.377L801.306 111.59L800.389 111.771L799.466 111.921L798.543 112.041L796.719 112.2L795.789 112.235L794.868 112.227L793.956 112.181L793.052 112.1L791.975 111.962L790.903 111.787L789.303 111.471L787.705 111.111L786.568 114.191L785.377 117.25L784.108 120.277L783.438 121.775L782.741 123.258L781.462 125.82L780.121 128.346L778.724 130.841L777.279 133.309L775.492 136.239L773.657 139.141L771.411 142.596L767.992 147.745L766.079 150.612L765.13 152.05L764.687 152.72L763.446 154.663L761.937 157.106L759.839 160.475L758.389 162.719L757.146 164.559L755.864 166.346L754.764 167.78L753.633 169.151L752.469 170.444L751.269 171.649L750.57 172.281L749.934 172.8L749.354 173.219L748.826 173.547L748.252 173.841L747.736 174.048L747.18 174.207L746.444 174.345L745.931 174.426L745.419 174.569L744.948 174.795L744.302 175.164L743.562 175.656L742.764 176.174L743.993 178.738L745.19 181.306L746.354 183.882L747.482 186.469L748.577 189.076L749.634 191.706L750.655 194.363L751.638 197.054L752.445 199.389L753.213 201.739L753.949 204.099L754.653 206.466L753.934 208.783L752.903 212.111L858.727 212.111L856.934 206.458L857.654 204.099L858.405 201.748L859.188 199.406L860.012 197.076L860.991 194.443L861.977 191.904L862.989 189.411L864.049 186.918L865.175 184.378L866.388 181.743L867.707 178.967L868.87 175.863L868.301 175.592L867.28 175.098L866.613 174.746L866.107 174.465L865.206 174.084L864.541 173.878L863.811 173.626L863.325 173.38L862.882 173.076L862.378 172.645L861.892 172.163L861.332 171.548L860.682 170.781L859.928 169.839L855.65 164.303L851.438 158.678L849.366 155.837L847.321 152.981L845.307 150.112L843.327 147.232L838.911 140.665L836.74 137.358L834.605 134.029L831.829 129.549L830.479 127.287L829.155 125.01L827.017 121.175L825.983 119.238L824.974 117.286L823.993 115.319L823.039 113.335L822.116 111.336L821.223 109.318L820.467 107.522L819.74 105.715L817.659 100.253L817.157 98.9093L816.904 98.2393L814.247 99.2273Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="2_MenONeckDesign5RightSleeveColor1"> <path d="M750.924 195.101L751.638 197.055L752.445 199.389L752.897 200.771L858.732 200.771L859.188 199.407L860.012 197.076L860.747 195.101L750.924 195.101Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="3_MenONeckDesign5KnitTrimRightSleeve"> <path d="M752.87 200.69L753.213 201.739L753.949 204.1L754.653 206.466L753.934 208.784L752.929 212.028L858.7 212.028L856.934 206.459L857.654 204.099L858.404 201.748L858.759 200.69L752.87 200.69Z" fill="#3e8bb9" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="4_MenONeckDesign5LeftSleeveColor2"> <path d="M605.011 98.8862L604.508 100.23L602.427 105.692L601.7 107.499L600.944 109.295L600.052 111.312L599.128 113.312L598.175 115.296L597.193 117.263L596.185 119.215L595.151 121.152L593.013 124.987L591.689 127.264L590.338 129.526L587.563 134.006L585.428 137.335L583.257 140.642L578.84 147.209L576.861 150.089L574.847 152.958L572.802 155.814L570.73 158.654L566.518 164.28L562.239 169.816L561.484 170.757L560.835 171.525L560.275 172.14L559.79 172.622L559.286 173.053L558.843 173.357L558.357 173.603L557.627 173.855L556.961 174.061L556.061 174.442L555.555 174.723L554.887 175.075L553.867 175.569L553.298 175.84L554.461 178.944L555.779 181.719L556.992 184.355L558.118 186.895L559.178 189.388L560.191 191.881L561.176 194.42L562.155 197.052L562.979 199.383L563.763 201.725L564.513 204.075L565.234 206.435L563.435 212.104L637.75 212.109L658.763 212.111L669.272 212.111L668.233 208.76L667.514 206.442L668.219 204.075L668.954 201.716L669.723 199.366L670.53 197.031L671.513 194.34L672.533 191.681L673.591 189.053L674.684 186.446L675.814 183.859L676.978 181.283L678.174 178.715L679.403 176.15L678.606 175.633L677.866 175.14L677.22 174.771L676.747 174.545L676.237 174.403L675.724 174.321L674.987 174.184L674.432 174.024L673.915 173.818L673.342 173.524L672.813 173.195L672.234 172.777L671.597 172.258L670.898 171.625L669.699 170.421L668.534 169.127L667.403 167.757L666.304 166.323L665.022 164.536L663.777 162.696L662.328 160.45L660.23 157.083L658.72 154.64L657.481 152.697L657.037 152.027L656.088 150.589L654.175 147.722L650.756 142.572L648.51 139.118L646.676 136.215L644.888 133.286L643.444 130.818L642.047 128.323L640.706 125.796L639.427 123.235L638.73 121.751L638.059 120.254L636.791 117.227L635.599 114.168L634.463 111.088L632.864 111.448L631.264 111.764L630.193 111.939L629.116 112.076L628.21 112.157L627.299 112.203L626.379 112.211L625.448 112.177L623.625 112.018L622.701 111.897L621.778 111.748L620.862 111.567L619.956 111.354L619.07 111.106L618.206 110.823L617.21 110.438L616.526 110.127L616.222 109.99L615.255 109.479L614.321 108.904L613.433 108.264L612.605 107.559L611.85 106.789L611.504 106.379L611.18 105.952L610.543 104.977L609.983 103.958L609.382 102.693L608.567 100.754L608.141 99.7152L607.921 99.2042L605.264 98.2152L605.011 98.8862Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="5_MenONeckDesign5LeftSleeveColor1"> <path d="M561.416 195.063L562.155 197.052L562.98 199.383L563.427 200.72L669.28 200.72L669.723 199.366L670.531 197.031L671.25 195.063L561.416 195.063Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="6_MenONeckDesign5KnitTrimLeftSleeve"> <path d="M563.425 200.713L563.764 201.725L564.513 204.075L565.234 206.435L563.453 212.051L669.254 212.051L668.234 208.76L667.515 206.442L668.219 204.075L668.955 201.716L669.283 200.713L563.425 200.713Z" fill="#3e8bb9" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="7_MenONeckDesign5RightSide"> <path d="M325.72 81.14L325.343 81.529L324.594 82.358L323.735 83.365L322.436 84.985L320.934 86.971L318.819 89.722L317.353 91.489L316.07 92.887L315.401 93.552L314.71 94.192L314.167 94.645L313.533 95.11L312.833 95.554L312.091 95.946L311.586 96.162L311.08 96.329L310.58 96.44L310.095 96.484L309.333 96.438L308.526 96.293L307.7 96.063L306.875 95.763L306.073 95.41L305.318 95.016L304.631 94.6L304.035 94.174L302.766 93.105L301.542 91.947L300.122 90.472L298.048 88.168L296.69 86.639L295.539 85.397L294.443 84.27L293.826 83.697L291.001 83.45L290.85 85.175L290.555 88.631L290.335 91.21L290.064 94.37L289.569 100.767L289.121 107.168L288.716 113.578L288.53 116.84L288.374 119.601L288.104 125.253L287.856 131.408L287.591 139.482L287.442 145.176L287.359 148.377L287.25 154.925L287.181 162.623L287.177 174.594L287.285 188.822L287.375 202.23L287.392 211.196L287.359 218.692L287.267 226.215L287.569 231.879L291.952 231.73L296.334 231.629L301.59 231.556L309.469 231.499L312.286 231.527L315.102 231.641L317.916 231.834L320.724 232.104L323.196 232.394L325.662 232.729L328.124 233.107L330.579 233.527L332.513 228.108L332.398 223.79L332.314 219.495L332.231 210.967L332.241 200.818L332.381 185.699L332.501 174.889L332.544 165.782L332.532 159.914L332.492 154.915L332.454 152.466L332.36 146.473L332.147 138.14L331.968 132.445L331.711 125.767L331.342 118.175L331.16 115.148L331.118 114.444L330.823 109.529L330.223 101.15L329.648 93.693L329.231 88.665L329.09 86.952L328.784 83.575L328.583 81.33L328.543 80.883L325.72 81.14Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="8_MenONeckDesign5LeftSide"> <path d="M39.1845 81.0238L39.1445 81.4708L38.9425 83.7148L38.6375 87.0918L38.4965 88.8048L38.0805 93.8338L37.5055 101.291L36.9045 109.669L36.6095 114.584L36.5665 115.289L36.3855 118.315L36.0165 125.907L35.7605 132.586L35.5805 138.281L35.3675 146.613L35.2745 152.606L35.2365 155.055L35.1955 160.055L35.1835 165.923L35.2265 175.03L35.3465 185.84L35.4865 200.958L35.4975 211.107L35.4135 219.635L35.3305 223.93L35.2145 228.248L37.1485 233.667L39.6035 233.247L42.0655 232.869L44.5315 232.535L47.0035 232.245L49.8125 231.975L52.6255 231.781L55.4425 231.668L58.2585 231.639L66.1375 231.697L71.3935 231.77L75.7755 231.87L80.1585 232.02L80.4605 226.355L80.3685 218.832L80.3355 211.337L80.3535 202.371L80.4425 188.963L80.5515 174.734L80.5465 162.764L80.4785 155.065L80.3685 148.518L80.2855 145.316L80.1375 139.623L79.8715 131.548L79.6245 125.393L79.3545 119.741L79.1975 116.981L79.0115 113.718L78.6075 107.309L78.1585 100.907L77.6635 94.5108L77.3935 91.3498L77.1725 88.7708L76.8775 85.3148L76.7265 83.5898L73.9025 83.8368L73.2855 84.4108L72.1895 85.5378L71.0375 86.7798L69.6805 88.3088L67.6065 90.6128L66.1855 92.0878L64.9625 93.2458L63.6925 94.3138L63.0975 94.7398L62.4105 95.1568L61.6545 95.5498L60.8535 95.9038L60.0275 96.2038L59.2015 96.4338L58.3955 96.5788L57.6325 96.6238L57.1475 96.5798L56.6485 96.4698L56.1425 96.3018L55.6365 96.0858L54.8945 95.6948L54.1955 95.2498L53.5605 94.7848L53.0175 94.3318L52.3275 93.6928L51.6585 93.0278L50.3745 91.6298L48.9095 89.8618L46.7945 87.1118L45.2915 85.1248L43.9925 83.5058L43.1335 82.4988L42.3845 81.6698L42.0075 81.2798L39.1845 81.0238Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="9_MenONeckDesign5FrontColor5"> <path d="M133.531 61.4453L132.409 62.8973L128.811 67.5873L122.45 75.8503L118.174 81.3313L115.361 81.6763L115.47 82.5753L115.694 84.3663L116.307 89.4403L117.863 103.611L118.834 113.093L119.576 121.013L119.804 123.768L235.363 123.768L235.585 121.079L236.324 113.164L237.297 103.671L238.87 89.4403L239.436 84.7623L239.692 82.7053L239.816 81.6763L237.002 81.3313L234.401 77.9823L230.553 72.9083L226.686 67.7863L224.709 65.2583L224.292 64.7363L223.454 63.6963L221.665 61.4453L133.531 61.4453Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="10_MenONeckDesign5FrontColor4"> <path d="M235.575 121.197L235.585 121.079L236.324 113.165L237.297 103.672L238.87 89.44L239.436 84.763L239.692 82.705L239.816 81.676L237.002 81.331L234.401 77.982L230.553 72.909L226.686 67.787L224.709 65.259L224.292 64.737L223.454 63.696L220.96 60.557L219.665 58.874L135.516 58.874L134.817 59.779L134.218 60.557L132.409 62.897L128.811 67.587L122.45 75.85L118.174 81.331L115.361 81.676L115.47 82.575L115.694 84.366L116.307 89.44L117.863 103.611L118.834 113.094L119.576 121.014" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="11_MenONeckDesign5FrontColor3"> <path d="M117.118 96.8288L117.864 103.611L118.835 113.094L118.967 114.503L236.199 114.503L236.324 113.165L237.297 103.672L238.87 89.4398L239.436 84.7628L239.693 82.7048L239.816 81.6768L237.003 81.3308L234.402 77.9818L230.553 72.9088L226.687 67.7868L224.71 65.2588L224.293 64.7368L223.454 63.6958L220.96 60.5568L217.326 55.8338L214.402 52.1798L140.789 52.1798L138.231 55.3568L134.818 59.7798L134.218 60.5568L132.409 62.8968L128.811 67.5868L122.451 75.8498L118.175 81.3308L115.362 81.6768L115.47 82.5758L115.695 84.3668L116.307 89.4398L117.118 96.8288" fill="#3e8bb9" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="12_MenONeckDesign5FrontColor2"> <path d="M116.307 89.4398L116.726 93.2508L238.449 93.2508L238.87 89.4398L239.436 84.7628L239.693 82.7048L239.816 81.6768L237.003 81.3308L234.402 77.9818L230.553 72.9088L226.687 67.7868L224.709 65.2588L224.293 64.7368L223.454 63.6958L220.96 60.5568L217.326 55.8338L214.373 52.1438L212.368 49.7448L210.624 47.7418L209.1 46.0728L207.792 44.6968L206.455 43.3488L205.085 42.0328L204.392 41.3998L203.453 40.5448L201.516 38.9318L199.984 37.6458L199.702 37.9688L198.992 38.8518L198.227 39.8818L196.997 41.4908L196.048 42.5868L195.111 43.5288L193.994 44.5078L193.37 44.9998L192.73 45.4668L191.407 46.3288L190.031 47.0908L188.614 47.7548L187.16 48.3158L185.679 48.7758L184.18 49.1328L182.669 49.3848L181.656 49.4938L180.641 49.5588L179.42 49.5948L177.367 49.5958L175.141 49.5638L173.669 49.4888L172.444 49.3668L171.213 49.1718L169.719 48.8318L168.243 48.3918L166.793 47.8528L165.375 47.2138L164.001 46.4758L162.676 45.6378L162.036 45.1828L161.412 44.7018L160.803 44.1958L160.214 43.6658L159.295 42.7788L158.551 42.0038L157.838 41.1918L156.995 40.1448L156.298 39.2548L155.671 38.5758L154.928 37.8718L153.473 39.0928L151.658 40.6038L150.785 41.3998L150.12 42.0058L148.803 43.2678L147.517 44.5598L146.259 45.8778L144.79 47.4778L143.11 49.3978L141.174 51.7008L138.231 55.3568L134.817 59.7798L134.218 60.5568L132.409 62.8968L128.811 67.5868L122.451 75.8498L118.175 81.3308L115.361 81.6768L115.47 82.5758L115.694 84.3668L116.307 89.4398" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="13_MenONeckDesign5FrontColor1"> <path d="M238.469 93.2188L116.719 93.25L117.125 96.9688L238.031 96.9688L238.469 93.2188ZM119.812 123.781L120.219 128.938L120.719 135.562L121.094 142.188L121.375 148.812L121.562 155.406L121.656 161.969L121.688 168.531L121.656 176.406L121.562 188.219L121.406 199.969L121.406 209.844L121.438 216.156L121.531 221.531L121.594 224.156L121.625 224.688L121.719 226.188L121.938 227.969L122.156 229.844L128.656 230.062L139.844 230.406L149.25 230.688L158.094 230.875L162.938 230.969L164.562 230.969L169.156 231.031L174.625 231L177.594 231L181 231.031L187.625 231L194.25 230.938L200.906 230.812L204.188 230.719L209 230.625L218.594 230.281L227.25 230L233.031 229.844L233.25 227.969L233.438 226.188L233.562 224.688L233.562 224.156L233.656 221.531L233.719 216.156L233.781 209.844L233.75 199.969L233.625 188.219L233.5 176.406L233.469 168.531L233.5 161.969L233.594 155.406L233.781 148.812L234.094 142.188L234.469 135.594L234.938 129L235.375 123.781L119.812 123.781Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="14_MenONeckDesign5BackColor5"> <path d="M493.683 123.768L493.699 123.584L494.596 113.787L494.891 110.84L495.184 107.916L495.799 102.048L496.567 95.0093L497.754 84.4503L498.356 79.5013L498.592 77.6313L498.705 76.6963L495.892 76.3523L493.604 73.3523L490.204 68.8323L486.922 64.4533L484.621 61.4453L387.558 61.4453L386.952 62.2283L381.717 69.1453L376.242 76.3523L373.429 76.6963L373.639 78.4203L374.063 81.8713L374.38 84.4503L375.115 90.5603L375.817 96.6703L376.482 102.781L377.109 108.897L377.295 110.833L377.697 115.014L378.244 121.137L378.46 123.768" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="15_MenONeckDesign5BackColor4"> <path d="M389.547 58.874L386.952 62.228L381.717 69.146L376.242 76.352L373.429 76.697L373.639 78.42L374.063 81.872L374.38 84.45L375.115 90.56L375.817 96.67L376.482 102.781L377.109 108.897L377.295 110.833L377.697 115.014L378.244 121.137L378.249 121.197L493.917 121.197L494.596 113.787L494.891 110.84L495.184 107.916L495.799 102.048L496.567 95.009L497.754 84.45L498.356 79.501L498.592 77.631L498.705 76.697L495.892 76.352L493.604 73.352L490.204 68.832L486.922 64.453L484.121 60.792L483.097 59.481L482.619 58.874L389.547 58.874Z" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="16_MenONeckDesign5BackColor3"> <path d="M394.807 52.1798L394.597 52.4368L393.041 54.4028L391.413 56.4608L386.952 62.2278L381.717 69.1458L376.242 76.3518L373.428 76.6968L373.638 78.4198L374.063 81.8718L374.38 84.4498L375.115 90.5598L375.816 96.6708L376.481 102.782L377.109 108.897L377.295 110.833L377.647 114.503L494.53 114.503L494.595 113.788L494.891 110.84L495.183 107.916L495.799 102.048L496.566 95.0088L497.754 84.4498L498.356 79.5008L498.591 77.6308L498.705 76.6968L495.891 76.3518L493.604 73.3528L490.203 68.8328L486.921 64.4528L484.12 60.7918L483.097 59.4808L481.762 57.7878L479.984 55.5308L479.092 54.4028L477.535 52.4358L477.327 52.1798L394.807 52.1798Z" fill="#3e8bb9" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="17_MenONeckDesign5BackColor2"> <path d="M447.599 26.096L446.109 26.081L437.595 25.993L436.067 25.996L431.23 26.005L426.856 26.051L424.537 26.096L422.737 23.906L420.635 25.632L417.853 27.91L416.43 29.106L415.301 30.055L413.432 31.754L411.793 33.301L410.717 34.359L409.774 35.282L407.9 37.186L406.057 39.122L404.243 41.087L402.285 43.272L400.18 45.696L397.623 48.724L394.598 52.437L393.042 54.403L391.414 56.461L386.952 62.228L381.717 69.146L376.242 76.352L373.429 76.697L373.639 78.42L374.064 81.872L374.38 84.45L375.116 90.56L375.424 93.25L496.765 93.25L497.754 84.45L498.356 79.501L498.592 77.631L498.706 76.697L495.892 76.352L493.604 73.352L490.204 68.832L486.922 64.453L484.121 60.792L483.098 59.481L481.763 57.788L479.985 55.53L479.093 54.403L477.536 52.435L474.507 48.719L471.951 45.694L469.849 43.275L467.892 41.094L466.08 39.13L464.238 37.194L462.363 35.287L461.418 34.359L460.537 33.492L458.863 31.9L456.839 30.059L455.704 29.106L454.307 27.932L451.515 25.644L449.398 23.906L447.599 26.096Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="18_MenONeckDesign5BackColor1"> <path d="M375.438 93.25L375.812 96.6562L375.844 96.9688L496.344 96.9688L496.562 95L496.75 93.25L375.438 93.25ZM378.469 123.781L378.75 127.25L379.219 133.406L379.438 137.125L379.625 140.906L379.781 145.406L379.938 152.156L380.062 158.875L380.094 161.125L380.094 162.25L379.969 222.75L378.875 228.312L384.375 229.312L392.562 230.906L397.688 231.938L402 232.75L406.031 233.469L410 234.094L413.375 234.562L415.031 234.75L416.094 234.875L418.219 235.094L420.312 235.25L422.406 235.375L424.656 235.469L427.156 235.562L431.188 235.625L436.062 235.625L438.969 235.625L443.156 235.562L446.281 235.469L449.094 235.344L451.688 235.188L454.094 235L456.5 234.781L458.938 234.5L460.188 234.344L461.625 234.156L464.562 233.719L468.031 233.156L473.438 232.156L479.812 230.875L487.875 229.281L490.562 228.781L493.25 228.312L492.156 222.75L492.188 220.25L492.25 215.125L492.281 209.094L492.25 199.688L492.156 188.5L492.031 175.406L492.031 166.688L492.062 159.438L492.188 152.156L492.344 145.406L492.5 140.906L492.688 137.156L492.938 133.406L493.281 128.5L493.688 123.781L378.469 123.781Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/></g></g> </svg> ';
fabric.loadSVGFromString(MenONeckDesign5Svg, function(objects, options) {
	for (let i = 0; i < objects.length; i++){
		let obj = objects[i];
		MenONeckDesign5SvgGroup.addWithUpdate(obj)
	} 
});

MenONeckDesign5SvgGroup.set({ 
	lockMovementX:true,
	lockMovementY:true,
	lockScalingX:true,
	lockScalingY:true,
	lockRotation:true,
	hasControls:false,
	hasBorders:false,
	selectable: false,
	fixed: true,
})
//#engregion Design5




//#region Design6

//design 6

const MenONeckDesign6SvgGroup = new fabric.Group

const MenONeckDesign6Svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="2560" height="1920"> <g transform="matrix(2.8317 0 0 2.8317 -0 0)"><g id="0_MenONeckDesign6KnitTrimTop"> <path d="M99.8766 32.4106L99.8766 15.4026L177.66 15.4026L255.301 15.4026L255.301 32.4106L177.66 32.4106L99.8766 32.4106Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="1_MenONeckDesign6LefttSleeve"> <path d="M605.011 98.8862L604.508 100.23L602.427 105.692L601.7 107.499L600.944 109.295L600.052 111.312L599.128 113.312L598.175 115.296L597.193 117.263L596.185 119.215L595.151 121.152L593.013 124.987L591.689 127.264L590.338 129.526L587.563 134.006L585.428 137.335L583.257 140.642L578.84 147.209L576.861 150.089L574.847 152.958L572.802 155.814L570.73 158.654L566.518 164.28L562.239 169.816L561.484 170.757L560.835 171.525L560.275 172.14L559.79 172.622L559.286 173.053L558.843 173.357L558.357 173.603L557.627 173.855L556.961 174.061L556.061 174.442L555.555 174.723L554.887 175.075L553.867 175.569L553.298 175.84L554.461 178.944L555.779 181.719L556.992 184.355L558.118 186.895L559.178 189.388L560.191 191.881L561.176 194.42L562.155 197.052L562.979 199.383L563.763 201.725L564.513 204.075L565.234 206.435L563.435 212.104L637.75 212.109L658.763 212.111L669.272 212.111L668.233 208.76L667.514 206.442L668.219 204.075L668.954 201.716L669.723 199.366L670.53 197.031L671.513 194.34L672.533 191.681L673.591 189.053L674.684 186.446L675.814 183.859L676.978 181.283L678.174 178.715L679.403 176.15L678.606 175.633L677.866 175.14L677.22 174.771L676.747 174.545L676.237 174.403L675.724 174.321L674.987 174.184L674.432 174.024L673.915 173.818L673.342 173.524L672.813 173.195L672.234 172.777L671.597 172.258L670.898 171.625L669.699 170.421L668.534 169.127L667.403 167.757L666.304 166.323L665.022 164.536L663.777 162.696L662.328 160.45L660.23 157.083L658.72 154.64L657.481 152.697L657.037 152.027L656.088 150.589L654.175 147.722L650.756 142.572L648.51 139.118L646.676 136.215L644.888 133.286L643.444 130.818L642.047 128.323L640.706 125.796L639.427 123.235L638.73 121.751L638.059 120.254L636.791 117.227L635.599 114.168L634.463 111.088L632.864 111.448L631.264 111.764L630.193 111.939L629.116 112.076L628.21 112.157L627.299 112.203L626.379 112.211L625.448 112.177L623.625 112.018L622.701 111.897L621.778 111.748L620.862 111.567L619.956 111.354L619.07 111.106L618.206 110.823L617.21 110.438L616.526 110.127L616.222 109.99L615.255 109.479L614.321 108.904L613.433 108.264L612.605 107.559L611.85 106.789L611.504 106.379L611.18 105.952L610.543 104.977L609.983 103.958L609.382 102.693L608.567 100.754L608.141 99.7152L607.921 99.2042L605.264 98.2152L605.011 98.8862Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="2_MenONeckDesign6RightSleeve"> <path d="M814.247 99.2273L814.026 99.7383L813.601 100.778L812.785 102.716L812.185 103.981L811.624 105L810.987 105.975L810.664 106.402L810.318 106.812L809.562 107.583L808.734 108.287L807.846 108.927L806.913 109.502L805.945 110.013L805.642 110.15L804.957 110.461L803.962 110.846L803.098 111.129L802.211 111.377L801.306 111.59L800.389 111.771L799.466 111.921L798.543 112.041L796.719 112.2L795.789 112.235L794.868 112.227L793.956 112.181L793.052 112.1L791.975 111.962L790.903 111.787L789.303 111.471L787.705 111.111L786.568 114.191L785.377 117.25L784.108 120.277L783.438 121.775L782.741 123.258L781.462 125.82L780.121 128.346L778.724 130.841L777.279 133.309L775.492 136.239L773.657 139.141L771.411 142.596L767.992 147.745L766.079 150.612L765.13 152.05L764.687 152.72L763.446 154.663L761.937 157.106L759.839 160.475L758.389 162.719L757.146 164.559L755.864 166.346L754.764 167.78L753.633 169.151L752.469 170.444L751.269 171.649L750.57 172.281L749.934 172.8L749.354 173.219L748.826 173.547L748.252 173.841L747.736 174.048L747.18 174.207L746.444 174.345L745.931 174.426L745.419 174.569L744.948 174.795L744.302 175.164L743.562 175.656L742.764 176.174L743.993 178.738L745.19 181.306L746.354 183.882L747.482 186.469L748.577 189.076L749.634 191.706L750.655 194.363L751.638 197.054L752.445 199.389L753.213 201.739L753.949 204.099L754.653 206.466L753.934 208.783L752.903 212.111L858.727 212.111L856.934 206.458L857.654 204.099L858.405 201.748L859.188 199.406L860.012 197.076L860.991 194.443L861.977 191.904L862.989 189.411L864.049 186.918L865.175 184.378L866.388 181.743L867.707 178.967L868.87 175.863L868.301 175.592L867.28 175.098L866.613 174.746L866.107 174.465L865.206 174.084L864.541 173.878L863.811 173.626L863.325 173.38L862.882 173.076L862.378 172.645L861.892 172.163L861.332 171.548L860.682 170.781L859.928 169.839L855.65 164.303L851.438 158.678L849.366 155.837L847.321 152.981L845.307 150.112L843.327 147.232L838.911 140.665L836.74 137.358L834.605 134.029L831.829 129.549L830.479 127.287L829.155 125.01L827.017 121.175L825.983 119.238L824.974 117.286L823.993 115.319L823.039 113.335L822.116 111.336L821.223 109.318L820.467 107.522L819.74 105.715L817.659 100.253L817.157 98.9093L816.904 98.2393L814.247 99.2273Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="3_MenONeckDesign6KnitLeftSleeve"> <path d="M563.425 200.713L563.764 201.725L564.513 204.075L565.234 206.435L563.453 212.051L669.254 212.051L668.234 208.76L667.515 206.442L668.219 204.075L668.955 201.716L669.283 200.713L563.425 200.713Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="4_MenONeckDesign6KnitRightSleeve"> <path d="M752.87 200.69L753.213 201.739L753.949 204.1L754.653 206.466L753.934 208.784L752.929 212.028L858.7 212.028L856.934 206.459L857.654 204.099L858.404 201.748L858.759 200.69L752.87 200.69Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="5_MenONeckDesign6LeftSide"> <path d="M39.1845 81.0238L39.1445 81.4708L38.9425 83.7148L38.6375 87.0918L38.4965 88.8048L38.0805 93.8338L37.5055 101.291L36.9045 109.669L36.6095 114.584L36.5665 115.289L36.3855 118.315L36.0165 125.907L35.7605 132.586L35.5805 138.281L35.3675 146.613L35.2745 152.606L35.2365 155.055L35.1955 160.055L35.1835 165.923L35.2265 175.03L35.3465 185.84L35.4865 200.958L35.4975 211.107L35.4135 219.635L35.3305 223.93L35.2145 228.248L37.1485 233.667L39.6035 233.247L42.0655 232.869L44.5315 232.535L47.0035 232.245L49.8125 231.975L52.6255 231.781L55.4425 231.668L58.2585 231.639L66.1375 231.697L71.3935 231.77L75.7755 231.87L80.1585 232.02L80.4605 226.355L80.3685 218.832L80.3355 211.337L80.3535 202.371L80.4425 188.963L80.5515 174.734L80.5465 162.764L80.4785 155.065L80.3685 148.518L80.2855 145.316L80.1375 139.623L79.8715 131.548L79.6245 125.393L79.3545 119.741L79.1975 116.981L79.0115 113.718L78.6075 107.309L78.1585 100.907L77.6635 94.5108L77.3935 91.3498L77.1725 88.7708L76.8775 85.3148L76.7265 83.5898L73.9025 83.8368L73.2855 84.4108L72.1895 85.5378L71.0375 86.7798L69.6805 88.3088L67.6065 90.6128L66.1855 92.0878L64.9625 93.2458L63.6925 94.3138L63.0975 94.7398L62.4105 95.1568L61.6545 95.5498L60.8535 95.9038L60.0275 96.2038L59.2015 96.4338L58.3955 96.5788L57.6325 96.6238L57.1475 96.5798L56.6485 96.4698L56.1425 96.3018L55.6365 96.0858L54.8945 95.6948L54.1955 95.2498L53.5605 94.7848L53.0175 94.3318L52.3275 93.6928L51.6585 93.0278L50.3745 91.6298L48.9095 89.8618L46.7945 87.1118L45.2915 85.1248L43.9925 83.5058L43.1335 82.4988L42.3845 81.6698L42.0075 81.2798L39.1845 81.0238Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="6_MenONeckDesign6RightSide"> <path d="M325.72 81.14L325.343 81.529L324.594 82.358L323.735 83.365L322.436 84.985L320.934 86.971L318.819 89.722L317.353 91.489L316.07 92.887L315.401 93.552L314.71 94.192L314.167 94.645L313.533 95.11L312.833 95.554L312.091 95.946L311.586 96.162L311.08 96.329L310.58 96.44L310.095 96.484L309.333 96.438L308.526 96.293L307.7 96.063L306.875 95.763L306.073 95.41L305.318 95.016L304.631 94.6L304.035 94.174L302.766 93.105L301.542 91.947L300.122 90.472L298.048 88.168L296.69 86.639L295.539 85.397L294.443 84.27L293.826 83.697L291.001 83.45L290.85 85.175L290.555 88.631L290.335 91.21L290.064 94.37L289.569 100.767L289.121 107.168L288.716 113.578L288.53 116.84L288.374 119.601L288.104 125.253L287.856 131.408L287.591 139.482L287.442 145.176L287.359 148.377L287.25 154.925L287.181 162.623L287.177 174.594L287.285 188.822L287.375 202.23L287.392 211.196L287.359 218.692L287.267 226.215L287.569 231.879L291.952 231.73L296.334 231.629L301.59 231.556L309.469 231.499L312.286 231.527L315.102 231.641L317.916 231.834L320.724 232.104L323.196 232.394L325.662 232.729L328.124 233.107L330.579 233.527L332.513 228.108L332.398 223.79L332.314 219.495L332.231 210.967L332.241 200.818L332.381 185.699L332.501 174.889L332.544 165.782L332.532 159.914L332.492 154.915L332.454 152.466L332.36 146.473L332.147 138.14L331.968 132.445L331.711 125.767L331.342 118.175L331.16 115.148L331.118 114.444L330.823 109.529L330.223 101.15L329.648 93.693L329.231 88.665L329.09 86.952L328.784 83.575L328.583 81.33L328.543 80.883L325.72 81.14Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="7_MenONeckDesign6FrontColor1"> <path d="M199.702 37.9688L198.992 38.8518L198.227 39.8818L196.997 41.4908L196.048 42.5868L195.111 43.5288L193.994 44.5078L193.37 44.9998L192.73 45.4668L191.407 46.3288L190.031 47.0908L188.614 47.7548L187.16 48.3158L185.679 48.7758L184.18 49.1328L182.669 49.3848L181.656 49.4938L180.641 49.5588L179.42 49.5948L177.367 49.5958L175.141 49.5638L173.669 49.4888L172.444 49.3668L171.213 49.1718L169.719 48.8318L168.243 48.3918L166.793 47.8528L165.375 47.2138L164.001 46.4758L162.676 45.6378L162.036 45.1828L161.412 44.7018L160.803 44.1958L160.214 43.6658L159.295 42.7788L158.551 42.0038L157.838 41.1918L156.995 40.1448L156.298 39.2548L155.671 38.5758L154.928 37.8718L153.473 39.0928L151.658 40.6038L150.785 41.3998L150.12 42.0058L148.803 43.2678L147.517 44.5598L146.259 45.8778L144.79 47.4778L143.11 49.3978L141.174 51.7008L138.231 55.3568L134.817 59.7798L134.218 60.5568L132.409 62.8968L128.811 67.5868L122.451 75.8498L118.175 81.3308L115.361 81.6768L115.47 82.5758L115.694 84.3668L116.307 89.4398L117.863 103.611L118.834 113.094L119.576 121.014L120.234 128.945L120.705 135.56L121.092 142.178L121.387 148.799L121.577 155.417L121.671 161.977L121.7 168.538L121.669 176.411L121.552 188.223L121.42 199.966L121.398 209.833L121.445 216.166L121.532 221.542L121.602 224.163L121.616 224.7L121.726 226.189L121.938 227.955L122.15 229.849L128.653 230.059L139.842 230.421L149.249 230.683L158.084 230.889L162.933 230.956L164.572 230.982L169.162 231.015L174.635 231.015L177.588 231.015L180.988 231.019L187.621 230.991L194.251 230.923L200.897 230.809L204.198 230.728L208.994 230.611L218.581 230.29L227.249 230.008L233.027 229.849L233.24 227.955L233.451 226.19L233.561 224.7L233.575 224.163L233.645 221.542L233.732 216.168L233.779 209.837L233.757 199.973L233.625 188.234L233.508 176.418L233.477 168.542L233.506 161.979L233.6 155.417L233.789 148.808L234.081 142.202L234.465 135.599L234.932 128.999L235.585 121.079L236.324 113.165L237.297 103.672L238.87 89.4398L239.436 84.7628L239.693 82.7048L239.816 81.6768L237.003 81.3308L234.402 77.9818L230.553 72.9088L226.687 67.7868L224.709 65.2588L224.293 64.7368L223.454 63.6958L220.96 60.5568L217.326 55.8338L214.373 52.1438L212.368 49.7448L210.624 47.7418L209.1 46.0728L207.792 44.6968L206.455 43.3488L205.085 42.0328L204.392 41.3998L203.453 40.5448L201.516 38.9318L199.984 37.6458L199.702 37.9688Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="8_MenONeckDesign6FrontColor2"> <path d="M199.702 37.9688L198.992 38.8518L198.227 39.8818L196.997 41.4908L196.048 42.5868L195.111 43.5288L193.994 44.5078L193.37 44.9998L192.73 45.4668L191.407 46.3288L190.031 47.0908L188.614 47.7548L187.16 48.3158L185.679 48.7758L184.18 49.1328L182.669 49.3848L181.656 49.4938L180.641 49.5588L179.42 49.5948L177.367 49.5958L175.141 49.5638L173.669 49.4888L172.444 49.3668L171.213 49.1718L169.719 48.8318L168.243 48.3918L166.793 47.8528L165.375 47.2138L164.001 46.4758L162.676 45.6378L162.036 45.1828L161.412 44.7018L160.803 44.1958L160.214 43.6658L159.295 42.7788L158.551 42.0038L157.838 41.1918L156.995 40.1448L156.298 39.2548L155.671 38.5758L154.928 37.8718L153.473 39.0928L151.658 40.6038L150.785 41.3998L150.12 42.0058L148.803 43.2678L147.517 44.5598L146.259 45.8778L144.79 47.4778L143.11 49.3978L141.174 51.7008L138.231 55.3568L134.817 59.7798L134.218 60.5568L132.409 62.8968L128.811 67.5868L122.451 75.8498L118.175 81.3308L115.361 81.6768L115.47 82.5758L115.694 84.3668L116.307 89.4398L117.863 103.611L118.834 113.094L119.576 121.014L119.985 125.95L177.589 159.39L235.183 125.955L235.585 121.079L236.324 113.165L237.297 103.672L238.87 89.4398L239.436 84.7628L239.693 82.7048L239.816 81.6768L237.003 81.3308L234.402 77.9818L230.553 72.9088L226.687 67.7868L224.709 65.2588L224.293 64.7368L223.454 63.6958L220.96 60.5568L217.326 55.8338L214.373 52.1438L212.368 49.7448L210.624 47.7418L209.1 46.0728L207.792 44.6968L206.455 43.3488L205.085 42.0328L204.392 41.3998L203.453 40.5448L201.516 38.9318L199.984 37.6458L199.702 37.9688Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="9_MenONeckDesign6FrontColor3"> <path d="M199.702 37.9688L198.992 38.8518L198.227 39.8818L196.997 41.4908L196.048 42.5868L195.111 43.5288L193.994 44.5078L193.37 44.9998L192.73 45.4668L191.407 46.3288L190.031 47.0908L188.614 47.7548L187.16 48.3158L185.679 48.7758L184.18 49.1328L182.669 49.3848L181.656 49.4938L180.641 49.5588L179.42 49.5948L177.367 49.5958L175.141 49.5638L173.669 49.4888L172.444 49.3668L171.213 49.1718L169.719 48.8318L168.243 48.3918L166.793 47.8528L165.375 47.2138L164.001 46.4758L162.676 45.6378L162.036 45.1828L161.412 44.7018L160.803 44.1958L160.214 43.6658L159.295 42.7788L158.551 42.0038L157.838 41.1918L156.995 40.1448L156.298 39.2548L155.671 38.5758L154.928 37.8718L153.473 39.0928L151.658 40.6038L150.785 41.3998L150.12 42.0058L148.803 43.2678L147.517 44.5598L146.259 45.8778L144.79 47.4778L143.11 49.3978L141.174 51.7008L138.231 55.3568L134.817 59.7798L134.218 60.5568L132.409 62.8968L128.811 67.5868L122.451 75.8498L118.175 81.3308L115.361 81.6768L115.47 82.5758L115.694 84.3668L116.307 89.4398L117.863 103.611L118.47 109.538L177.589 143.858L236.695 109.545L237.297 103.672L238.87 89.4398L239.436 84.7628L239.693 82.7048L239.816 81.6768L237.003 81.3308L234.402 77.9818L230.553 72.9088L226.687 67.7868L224.709 65.2588L224.293 64.7368L223.454 63.6958L220.96 60.5568L217.326 55.8338L214.373 52.1438L212.368 49.7448L210.624 47.7418L209.1 46.0728L207.792 44.6968L206.455 43.3488L205.085 42.0328L204.392 41.3998L203.453 40.5448L201.516 38.9318L199.984 37.6458L199.702 37.9688Z" fill="#3e8bb9" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="10_MenONeckDesign6FrontColor4"> <path d="M199.702 37.9688L198.992 38.8518L198.227 39.8818L196.997 41.4908L196.048 42.5868L195.111 43.5288L193.994 44.5078L193.37 44.9998L192.73 45.4668L191.407 46.3288L190.031 47.0908L188.614 47.7548L187.16 48.3158L185.679 48.7758L184.18 49.1328L182.669 49.3848L181.656 49.4938L180.641 49.5588L179.42 49.5948L177.367 49.5958L175.141 49.5638L173.669 49.4888L172.444 49.3668L171.213 49.1718L169.719 48.8318L168.243 48.3918L166.793 47.8528L165.375 47.2138L164.001 46.4758L162.676 45.6378L162.036 45.1828L161.412 44.7018L160.803 44.1958L160.214 43.6658L159.295 42.7788L158.551 42.0038L157.838 41.1918L156.995 40.1448L156.298 39.2548L155.671 38.5758L154.928 37.8718L153.473 39.0928L151.658 40.6038L150.785 41.3998L150.12 42.0058L148.803 43.2678L147.517 44.5598L146.259 45.8778L144.79 47.4778L143.11 49.3978L141.174 51.7008L138.231 55.3568L134.817 59.7798L134.218 60.5568L132.409 62.8968L128.811 67.5868L122.451 75.8498L118.175 81.3308L115.361 81.6768L115.47 82.5758L115.694 84.3668L116.307 89.4398L116.695 92.9748L177.589 128.325L238.479 92.9768L238.87 89.4398L239.436 84.7628L239.693 82.7048L239.816 81.6768L237.003 81.3308L234.402 77.9818L230.553 72.9088L226.687 67.7868L224.709 65.2588L224.293 64.7368L223.454 63.6958L220.96 60.5568L217.326 55.8338L214.373 52.1438L212.368 49.7448L210.624 47.7418L209.1 46.0728L207.792 44.6968L206.455 43.3488L205.085 42.0328L204.392 41.3998L203.453 40.5448L201.516 38.9318L199.984 37.6458L199.702 37.9688Z" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="11_MenONeckDesign6FrontColor5"> <path d="M199.702 37.9688L198.992 38.8518L198.227 39.8818L196.997 41.4908L196.048 42.5868L195.111 43.5288L193.994 44.5078L193.37 44.9998L192.73 45.4668L191.407 46.3288L190.031 47.0908L188.614 47.7548L187.16 48.3158L185.679 48.7758L184.18 49.1328L182.669 49.3848L181.656 49.4938L180.641 49.5588L179.42 49.5948L177.367 49.5958L175.141 49.5638L173.669 49.4888L172.444 49.3668L171.213 49.1718L169.719 48.8318L168.243 48.3918L166.793 47.8528L165.375 47.2138L164.001 46.4758L162.676 45.6378L162.036 45.1828L161.412 44.7018L160.803 44.1958L160.214 43.6658L159.295 42.7788L158.551 42.0038L157.838 41.1918L156.995 40.1448L156.298 39.2548L155.671 38.5758L154.928 37.8718L153.473 39.0928L151.658 40.6038L150.785 41.3998L150.12 42.0058L148.803 43.2678L147.517 44.5598L146.259 45.8778L144.79 47.4778L143.11 49.3978L141.174 51.7008L138.231 55.3568L134.817 59.7798L134.218 60.5568L132.409 62.8968L128.811 67.5868L122.451 75.8498L119.801 79.2458L177.589 112.794L235.381 79.2438L234.402 77.9818L230.553 72.9088L226.687 67.7868L224.709 65.2588L224.293 64.7368L223.454 63.6958L220.96 60.5568L217.326 55.8338L214.373 52.1438L212.368 49.7448L210.624 47.7418L209.1 46.0728L207.792 44.6968L206.455 43.3488L205.085 42.0328L204.392 41.3998L203.453 40.5448L201.516 38.9318L199.984 37.6458L199.702 37.9688Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="12_MenONeckDesign6BackColor1"> <path d="M447.599 26.096L446.109 26.081L437.595 25.993L436.067 25.996L431.23 26.005L426.856 26.051L424.537 26.096L422.737 23.906L420.635 25.632L417.853 27.91L416.43 29.106L415.301 30.055L413.432 31.754L411.793 33.301L410.717 34.359L409.774 35.282L407.9 37.186L406.057 39.122L404.243 41.087L402.285 43.272L400.18 45.696L397.623 48.724L394.598 52.437L393.042 54.403L391.414 56.461L386.952 62.228L381.717 69.146L376.242 76.352L373.429 76.697L373.639 78.42L374.064 81.872L374.38 84.45L375.116 90.56L375.817 96.67L376.482 102.781L377.109 108.897L377.296 110.833L377.697 115.014L378.244 121.137L378.748 127.264L379.208 133.398L379.444 137.135L379.622 140.892L379.779 145.409L379.948 152.164L380.053 158.878L380.082 161.117L380.099 162.236L379.977 222.751L378.882 228.316L384.37 229.297L392.577 230.905L397.689 231.924L401.99 232.74L406.034 233.464L410.002 234.092L413.382 234.561L415.038 234.753L416.096 234.876L418.218 235.08L420.317 235.242L422.402 235.369L424.671 235.473L427.151 235.549L431.182 235.623L436.067 235.629L438.954 235.631L443.155 235.568L446.268 235.476L449.103 235.348L451.701 235.188L454.085 235.003L456.495 234.777L458.94 234.505L460.174 234.347L461.617 234.162L464.569 233.722L468.037 233.148L473.424 232.157L479.816 230.869L487.87 229.279L490.56 228.783L493.253 228.316L492.157 222.751L492.203 220.252L492.257 215.128L492.282 209.091L492.257 199.688L492.152 188.495L492.046 175.414L492.028 166.695L492.073 159.429L492.188 152.164L492.354 145.405L492.513 140.895L492.691 137.142L492.927 133.398L493.296 128.488L493.699 123.584L494.596 113.787L494.891 110.84L495.184 107.916L495.799 102.048L496.567 95.009L497.754 84.45L498.356 79.501L498.592 77.631L498.706 76.697L495.892 76.352L493.604 73.352L490.204 68.832L486.922 64.453L484.121 60.792L483.098 59.481L481.763 57.788L479.985 55.53L479.093 54.403L477.536 52.435L474.507 48.719L471.951 45.694L469.849 43.275L467.892 41.094L466.08 39.13L464.238 37.194L462.363 35.287L461.418 34.359L460.537 33.492L458.863 31.9L456.839 30.059L455.704 29.106L454.307 27.932L451.515 25.644L449.398 23.906L447.599 26.096Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="13_MenONeckDesign6BackColor2"> <path d="M447.599 26.096L446.109 26.081L437.595 25.993L436.067 25.996L431.23 26.005L426.856 26.051L424.537 26.096L422.737 23.906L420.635 25.632L417.853 27.91L416.43 29.106L415.301 30.055L413.432 31.754L411.793 33.301L410.717 34.359L409.774 35.282L407.9 37.186L406.057 39.122L404.243 41.087L402.285 43.272L400.18 45.696L397.623 48.724L394.598 52.437L393.042 54.403L391.414 56.461L386.952 62.228L381.717 69.146L376.242 76.352L373.429 76.697L373.639 78.42L374.064 81.872L374.38 84.45L375.116 90.56L375.817 96.67L376.482 102.781L377.109 108.897L377.296 110.833L377.697 115.014L378.244 121.137L378.649 126.057L436.067 159.39L493.496 126.051L493.699 123.584L494.596 113.787L494.891 110.84L495.184 107.916L495.799 102.048L496.567 95.009L497.754 84.45L498.356 79.501L498.592 77.631L498.706 76.697L495.892 76.352L493.604 73.352L490.204 68.832L486.922 64.453L484.121 60.792L483.098 59.481L481.763 57.788L479.985 55.53L479.093 54.403L477.536 52.435L474.507 48.719L471.951 45.694L469.849 43.275L467.892 41.094L466.08 39.13L464.238 37.194L462.363 35.287L461.418 34.359L460.537 33.492L458.863 31.9L456.839 30.059L455.704 29.106L454.307 27.932L451.515 25.644L449.398 23.906L447.599 26.096Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="14_MenONeckDesign6BackColor3"> <path d="M447.599 26.096L446.109 26.081L437.595 25.993L436.067 25.996L431.23 26.005L426.856 26.051L424.537 26.096L422.737 23.906L420.635 25.632L417.853 27.91L416.43 29.106L415.301 30.055L413.432 31.754L411.793 33.301L410.717 34.359L409.774 35.282L407.9 37.186L406.057 39.122L404.243 41.087L402.285 43.272L400.18 45.696L397.623 48.724L394.598 52.437L393.042 54.403L391.414 56.461L386.952 62.228L381.717 69.146L376.242 76.352L373.429 76.697L373.639 78.42L374.064 81.872L374.38 84.45L375.116 90.56L375.817 96.67L376.482 102.781L377.109 108.897L377.184 109.674L436.067 143.857L495.011 109.639L495.184 107.916L495.799 102.048L496.567 95.009L497.754 84.45L498.356 79.501L498.592 77.631L498.706 76.697L495.892 76.352L493.604 73.352L490.204 68.832L486.922 64.453L484.121 60.792L483.098 59.481L481.763 57.788L479.985 55.53L479.093 54.403L477.536 52.435L474.507 48.719L471.951 45.694L469.849 43.275L467.892 41.094L466.08 39.13L464.238 37.194L462.363 35.287L461.418 34.359L460.537 33.492L458.863 31.9L456.839 30.059L455.704 29.106L454.307 27.932L451.515 25.644L449.398 23.906L447.599 26.096Z" fill="#3e8bb9" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="15_MenONeckDesign6BackColor4"> <path d="M447.599 26.096L446.109 26.081L437.595 25.993L436.067 25.996L431.23 26.005L426.856 26.051L424.537 26.096L422.737 23.906L420.635 25.632L417.853 27.91L416.43 29.106L415.301 30.055L413.432 31.754L411.793 33.301L410.717 34.359L409.774 35.282L407.9 37.186L406.057 39.122L404.243 41.087L402.285 43.272L400.18 45.696L397.623 48.724L394.598 52.437L393.042 54.403L391.414 56.461L386.952 62.228L381.717 69.146L376.242 76.352L373.429 76.697L373.639 78.42L374.064 81.872L374.38 84.45L375.116 90.56L375.408 93.111L436.067 128.325L496.784 93.078L497.754 84.45L498.356 79.501L498.592 77.631L498.706 76.697L495.892 76.352L493.604 73.352L490.204 68.832L486.922 64.453L484.121 60.792L483.098 59.481L481.763 57.788L479.985 55.53L479.093 54.403L477.536 52.435L474.507 48.719L471.951 45.694L469.849 43.275L467.892 41.094L466.08 39.13L464.238 37.194L462.363 35.287L461.418 34.359L460.537 33.492L458.863 31.9L456.839 30.059L455.704 29.106L454.307 27.932L451.515 25.644L449.398 23.906L447.599 26.096Z" fill="#116196" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="16_MenONeckDesign6BackColor5"> <path d="M447.599 26.096L446.109 26.081L437.595 25.993L436.067 25.996L431.23 26.005L426.856 26.051L424.537 26.096L422.737 23.906L420.635 25.632L417.853 27.91L416.43 29.106L415.301 30.055L413.432 31.754L411.793 33.301L410.717 34.359L409.774 35.282L407.9 37.186L406.057 39.122L404.243 41.087L402.285 43.272L400.18 45.696L397.623 48.724L394.598 52.437L393.042 54.403L391.414 56.461L386.952 62.228L381.717 69.146L376.242 76.352L373.808 76.65L436.067 112.794L498.327 76.65L495.892 76.352L493.604 73.352L490.204 68.832L486.922 64.453L484.121 60.792L483.098 59.481L481.763 57.788L479.985 55.53L479.093 54.403L477.536 52.435L474.507 48.719L471.951 45.694L469.849 43.275L467.892 41.094L466.08 39.13L464.238 37.194L462.363 35.287L461.418 34.359L460.537 33.492L458.863 31.9L456.839 30.059L455.704 29.106L454.307 27.932L451.515 25.644L449.398 23.906L447.599 26.096Z" fill="#02234c" fill-rule="evenodd" opacity="1" stroke="none"/></g></g> </svg> ';
fabric.loadSVGFromString(MenONeckDesign6Svg, function(objects, options) {
	for (let i = 0; i < objects.length; i++){
		let obj = objects[i];
		MenONeckDesign6SvgGroup.addWithUpdate(obj)
	} 
});

MenONeckDesign6SvgGroup.set({ 
	lockMovementX:true,
	lockMovementY:true,
	lockScalingX:true,
	lockScalingY:true,
	lockRotation:true,
	hasControls:false,
	hasBorders:false,
	selectable: false,
	fixed: true,
})
//#engregion Design6




//#region Design7

//design 7

const MenONeckDesign7SvgGroup = new fabric.Group

const MenONeckDesign7Svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="2560" height="1920"> <g transform="matrix(2.8317 0 0 2.8317 -0 0)"><g id="0_MenONeckDesign7KnitTrimTop"> <path d="M99.8766 32.4106L99.8766 15.4026L177.66 15.4026L255.301 15.4026L255.301 32.4106L177.66 32.4106L99.8766 32.4106Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="1_MenONeckDesign7LeftSleeve"> <path d="M605.011 98.8862L604.508 100.23L602.427 105.692L601.7 107.499L600.944 109.295L600.052 111.312L599.128 113.312L598.175 115.296L597.193 117.263L596.185 119.215L595.151 121.152L593.013 124.987L591.689 127.264L590.338 129.526L587.563 134.006L585.428 137.335L583.257 140.642L578.84 147.209L576.861 150.089L574.847 152.958L572.802 155.814L570.73 158.654L566.518 164.28L562.239 169.816L561.484 170.757L560.835 171.525L560.275 172.14L559.79 172.622L559.286 173.053L558.843 173.357L558.357 173.603L557.627 173.855L556.961 174.061L556.061 174.442L555.555 174.723L554.887 175.075L553.867 175.569L553.298 175.84L554.461 178.944L555.779 181.719L556.992 184.355L558.118 186.895L559.178 189.388L560.191 191.881L561.176 194.42L562.155 197.052L562.979 199.383L563.763 201.725L564.513 204.075L565.234 206.435L563.435 212.104L637.75 212.109L658.763 212.111L669.272 212.111L668.233 208.76L667.514 206.442L668.219 204.075L668.954 201.716L669.723 199.366L670.53 197.031L671.513 194.34L672.533 191.681L673.591 189.053L674.684 186.446L675.814 183.859L676.978 181.283L678.174 178.715L679.403 176.15L678.606 175.633L677.866 175.14L677.22 174.771L676.747 174.545L676.237 174.403L675.724 174.321L674.987 174.184L674.432 174.024L673.915 173.818L673.342 173.524L672.813 173.195L672.234 172.777L671.597 172.258L670.898 171.625L669.699 170.421L668.534 169.127L667.403 167.757L666.304 166.323L665.022 164.536L663.777 162.696L662.328 160.45L660.23 157.083L658.72 154.64L657.481 152.697L657.037 152.027L656.088 150.589L654.175 147.722L650.756 142.572L648.51 139.118L646.676 136.215L644.888 133.286L643.444 130.818L642.047 128.323L640.706 125.796L639.427 123.235L638.73 121.751L638.059 120.254L636.791 117.227L635.599 114.168L634.463 111.088L632.864 111.448L631.264 111.764L630.193 111.939L629.116 112.076L628.21 112.157L627.299 112.203L626.379 112.211L625.448 112.177L623.625 112.018L622.701 111.897L621.778 111.748L620.862 111.567L619.956 111.354L619.07 111.106L618.206 110.823L617.21 110.438L616.526 110.127L616.222 109.99L615.255 109.479L614.321 108.904L613.433 108.264L612.605 107.559L611.85 106.789L611.504 106.379L611.18 105.952L610.543 104.977L609.983 103.958L609.382 102.693L608.567 100.754L608.141 99.7152L607.921 99.2042L605.264 98.2152L605.011 98.8862Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="2_MenONeckDesign7KnitTrimLeftSleeve"> <path d="M563.425 200.713L563.764 201.725L564.513 204.075L565.234 206.435L563.453 212.051L669.254 212.051L668.234 208.76L667.515 206.442L668.219 204.075L668.955 201.716L669.283 200.713L563.425 200.713Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="3_MenONeckDesign7RightSleeve"> <path d="M814.247 99.2273L814.026 99.7383L813.601 100.778L812.785 102.716L812.185 103.981L811.624 105L810.987 105.975L810.664 106.402L810.318 106.812L809.562 107.583L808.734 108.287L807.846 108.927L806.913 109.502L805.945 110.013L805.642 110.15L804.957 110.461L803.962 110.846L803.098 111.129L802.211 111.377L801.306 111.59L800.389 111.771L799.466 111.921L798.543 112.041L796.719 112.2L795.789 112.235L794.868 112.227L793.956 112.181L793.052 112.1L791.975 111.962L790.903 111.787L789.303 111.471L787.705 111.111L786.568 114.191L785.377 117.25L784.108 120.277L783.438 121.775L782.741 123.258L781.462 125.82L780.121 128.346L778.724 130.841L777.279 133.309L775.492 136.239L773.657 139.141L771.411 142.596L767.992 147.745L766.079 150.612L765.13 152.05L764.687 152.72L763.447 154.663L761.937 157.106L759.839 160.475L758.389 162.719L757.146 164.559L755.864 166.346L754.764 167.78L753.633 169.151L752.469 170.444L751.269 171.649L750.571 172.281L749.934 172.8L749.354 173.219L748.826 173.547L748.252 173.841L747.736 174.048L747.181 174.207L746.444 174.345L745.931 174.426L745.419 174.569L744.948 174.795L744.302 175.164L743.562 175.656L742.764 176.174L743.993 178.738L745.19 181.306L746.354 183.882L747.482 186.469L748.577 189.076L749.634 191.706L750.655 194.363L751.638 197.054L752.445 199.389L753.213 201.739L753.949 204.099L754.653 206.466L753.934 208.783L752.896 212.135L763.405 212.134L784.416 212.132L858.732 212.127L856.934 206.458L857.654 204.099L858.405 201.748L859.188 199.406L860.012 197.076L860.991 194.443L861.977 191.904L862.989 189.411L864.049 186.918L865.175 184.378L866.388 181.743L867.707 178.967L868.87 175.863L868.301 175.592L867.28 175.098L866.613 174.746L866.107 174.465L865.206 174.084L864.541 173.878L863.811 173.626L863.325 173.38L862.882 173.076L862.378 172.645L861.892 172.163L861.332 171.548L860.682 170.781L859.928 169.839L855.65 164.303L851.438 158.678L849.366 155.837L847.321 152.981L845.307 150.112L843.327 147.232L838.911 140.665L836.74 137.358L834.605 134.029L831.829 129.549L830.479 127.287L829.155 125.01L827.017 121.175L825.983 119.238L824.974 117.286L823.993 115.319L823.039 113.335L822.116 111.336L821.223 109.318L820.467 107.522L819.74 105.715L817.659 100.253L817.157 98.9093L816.904 98.2393L814.247 99.2273Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="4_MenONeckDesign7KnitSleeveRightSleeve"> <path d="M752.87 200.69L753.213 201.739L753.949 204.1L754.653 206.466L753.934 208.784L752.929 212.028L858.7 212.028L856.934 206.459L857.654 204.099L858.404 201.748L858.759 200.69L752.87 200.69Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="5_MenONeckDesign7LeftSide"> <path d="M39.1845 81.0238L39.1445 81.4708L38.9425 83.7148L38.6375 87.0918L38.4965 88.8048L38.0805 93.8338L37.5055 101.291L36.9045 109.669L36.6095 114.584L36.5665 115.289L36.3855 118.315L36.0165 125.907L35.7605 132.586L35.5805 138.281L35.3675 146.613L35.2745 152.606L35.2365 155.055L35.1955 160.055L35.1835 165.923L35.2265 175.03L35.3465 185.84L35.4865 200.958L35.4975 211.107L35.4135 219.635L35.3305 223.93L35.2145 228.248L37.1485 233.667L39.6035 233.247L42.0655 232.869L44.5315 232.535L47.0035 232.245L49.8125 231.975L52.6255 231.781L55.4425 231.668L58.2585 231.639L66.1375 231.697L71.3935 231.77L75.7755 231.87L80.1585 232.02L80.4605 226.355L80.3685 218.832L80.3355 211.337L80.3535 202.371L80.4425 188.963L80.5515 174.734L80.5465 162.764L80.4785 155.065L80.3685 148.518L80.2855 145.316L80.1375 139.623L79.8715 131.548L79.6245 125.393L79.3545 119.741L79.1975 116.981L79.0115 113.718L78.6075 107.309L78.1585 100.907L77.6635 94.5108L77.3935 91.3498L77.1725 88.7708L76.8775 85.3148L76.7265 83.5898L73.9025 83.8368L73.2855 84.4108L72.1895 85.5378L71.0375 86.7798L69.6805 88.3088L67.6065 90.6128L66.1855 92.0878L64.9625 93.2458L63.6925 94.3138L63.0975 94.7398L62.4105 95.1568L61.6545 95.5498L60.8535 95.9038L60.0275 96.2038L59.2015 96.4338L58.3955 96.5788L57.6325 96.6238L57.1475 96.5798L56.6485 96.4698L56.1425 96.3018L55.6365 96.0858L54.8945 95.6948L54.1955 95.2498L53.5605 94.7848L53.0175 94.3318L52.3275 93.6928L51.6585 93.0278L50.3745 91.6298L48.9095 89.8618L46.7945 87.1118L45.2915 85.1248L43.9925 83.5058L43.1335 82.4988L42.3845 81.6698L42.0075 81.2798L39.1845 81.0238Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="6_MenONeckDesign7RightSide"> <path d="M325.72 81.14L325.343 81.529L324.594 82.358L323.735 83.365L322.436 84.985L320.934 86.971L318.819 89.722L317.353 91.489L316.07 92.887L315.401 93.552L314.71 94.192L314.167 94.645L313.533 95.11L312.833 95.554L312.091 95.946L311.586 96.162L311.08 96.329L310.58 96.44L310.095 96.484L309.333 96.438L308.526 96.293L307.7 96.063L306.875 95.763L306.073 95.41L305.318 95.016L304.631 94.6L304.035 94.174L302.766 93.105L301.542 91.947L300.122 90.472L298.048 88.168L296.69 86.639L295.539 85.397L294.443 84.27L293.826 83.697L291.001 83.45L290.85 85.175L290.555 88.631L290.335 91.21L290.064 94.37L289.569 100.767L289.121 107.168L288.716 113.578L288.53 116.84L288.374 119.601L288.104 125.253L287.856 131.408L287.591 139.482L287.442 145.176L287.359 148.377L287.25 154.925L287.181 162.623L287.177 174.594L287.285 188.822L287.375 202.23L287.392 211.196L287.359 218.692L287.267 226.215L287.569 231.879L291.952 231.73L296.334 231.629L301.59 231.556L309.469 231.499L312.286 231.527L315.102 231.641L317.916 231.834L320.724 232.104L323.196 232.394L325.662 232.729L328.124 233.107L330.579 233.527L332.513 228.108L332.398 223.79L332.314 219.495L332.231 210.967L332.241 200.818L332.381 185.699L332.501 174.889L332.544 165.782L332.532 159.914L332.492 154.915L332.454 152.466L332.36 146.473L332.147 138.14L331.968 132.445L331.711 125.767L331.342 118.175L331.16 115.148L331.118 114.444L330.823 109.529L330.223 101.15L329.648 93.693L329.231 88.665L329.09 86.952L328.784 83.575L328.583 81.33L328.543 80.883L325.72 81.14Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="7_MenONeckDesign7FrontColor1"> <path d="M220.956 60.5514L223.45 63.6914L224.289 64.7314L224.706 65.2534L226.683 67.7814L230.549 72.9034L234.398 77.9764L236.999 81.3254L239.812 81.6704L239.689 82.6994L239.432 84.7574L238.867 89.4344L237.293 103.665L236.32 113.159L235.582 121.074L234.928 128.992L234.462 135.593L234.077 142.197L233.786 148.803L233.596 155.412L233.502 161.973L233.473 168.536L233.504 176.412L233.621 188.228L233.753 199.967L233.775 209.831L233.728 216.163L233.642 221.536L233.572 224.157L233.557 224.695L233.447 226.183L233.236 227.95L233.024 229.843L227.246 230.003L218.577 230.284L208.99 230.605L204.195 230.722L200.894 230.803L194.247 230.917L187.618 230.985L180.985 231.013L177.585 231.009L174.631 231.008L169.158 231.01L164.568 230.976L162.929 230.95L158.081 230.883L149.246 230.678L139.838 230.415L128.649 230.053L122.146 229.843L121.934 227.95L121.722 226.183L121.612 224.694L121.598 224.157L121.528 221.536L121.441 216.16L121.395 209.827L121.416 199.96L121.549 188.218L121.666 176.406L121.696 168.532L121.668 161.971L121.573 155.412L121.383 148.792L121.089 142.172L120.7 135.554L120.23 128.939L119.572 121.008L118.83 113.088L117.859 103.605L116.303 89.4344L115.69 84.3604L115.467 82.5704L115.358 81.6704L118.171 81.3254L122.447 75.8444L128.807 67.5814L132.406 62.8924L134.214 60.5514L134.814 59.7744L138.227 55.3514L141.171 51.6954L143.107 49.3924L144.787 47.4724L146.255 45.8734L147.513 44.5544L148.8 43.2624L150.116 42.0014L150.782 41.3944L151.655 40.5984L153.47 39.0874L154.924 37.8664L155.667 38.5694L156.294 39.2494L156.992 40.1394L157.833 41.1864L158.548 41.9984L159.291 42.7744L160.21 43.6604L160.8 44.1904L161.407 44.6964L162.032 45.1764L162.673 45.6324L163.997 46.4704L165.372 47.2084L166.789 47.8474L168.239 48.3864L169.716 48.8264L171.21 49.1664L172.44 49.3614L173.665 49.4834L175.137 49.5574L177.363 49.5904L179.416 49.5894L180.637 49.5544L181.652 49.4884L182.665 49.3804L184.176 49.1274L185.676 48.7714L187.156 48.3114L188.61 47.7494L190.028 47.0864L191.403 46.3234L192.726 45.4614L193.366 44.9944L193.99 44.5024L195.108 43.5234L196.044 42.5814L196.993 41.4854L198.223 39.8774L198.988 38.8464L199.699 37.9634L199.98 37.6404L201.512 38.9264L203.45 40.5394L204.388 41.3944L205.081 42.0274L206.451 43.3434L207.789 44.6914L209.096 46.0674L210.621 47.7364L212.364 49.7394L214.369 52.1384L217.322 55.8284L220.956 60.5514Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="8_MenONeckDesign7FrontColor2"> <path d="M133.438 70.0938L133.406 70.125L133.406 89.4688L133.438 89.5L133.469 89.4688L133.469 70.125L133.438 70.0938ZM133.438 89.5L133.156 89.7812L133.156 108.625L133.438 108.906L133.719 108.625L133.719 89.7812L133.438 89.5ZM133.438 108.906L132.688 109.656L132.688 127.562L133.438 128.312L134.188 127.562L134.188 109.656L133.438 108.906ZM133.438 128.312L132.5 129.25L132.5 127.375L130.5 125.375L130.5 131.25L128.625 133.125L128.625 123.469L126.625 121.5L126.625 135.125L124.719 137.031L124.719 119.594L123.75 118.594L122.75 119.594L122.75 137.031L120.844 135.125L120.844 121.5L119.719 122.625L120.219 128.938L120.719 135.562L121.094 142.188L121.312 147.344L121.312 140.438L122.281 139.469L122.281 155.938L121.562 155.25L121.562 155.406L121.625 159.531L122.031 159.125L122.031 175.125L121.688 174.75L121.656 176.406L121.656 178.906L122.5 178.062L122.5 195L121.5 193.969L121.438 198.531L122.781 197.188L122.781 195.281L123.719 196.219L124.688 195.281L124.688 197.188L126.656 199.156L126.656 193.281L128.562 191.406L128.562 201.062L130.562 203.031L130.562 189.406L132.438 187.531L132.438 204.938L133.438 205.938L134.438 204.938L134.438 187.531L136.312 189.406L136.312 203.031L138.312 201.062L138.312 191.406L140.219 193.281L140.219 199.156L142.188 197.188L142.188 195.281L143.125 196.219L142.375 197L142.375 214.875L143.125 215.625L142.844 215.906L142.844 230.5L143.438 230.531L143.438 215.906L143.156 215.625L143.906 214.875L143.906 197L143.156 196.219L144.094 195.281L144.094 197.188L146.062 199.156L146.062 193.281L147.969 191.406L147.969 201.062L149.969 203.031L149.969 189.406L151.844 187.531L151.844 204.938L152.844 205.938L153.844 204.938L153.844 187.531L155.719 189.406L155.719 203.031L157.719 201.062L157.719 191.406L159.625 193.281L159.625 199.156L161.594 197.188L161.594 195.281L162.531 196.219L163.5 195.281L163.5 197.188L165.469 199.156L165.469 193.281L167.375 191.406L167.375 201.062L169.375 203.031L169.375 189.406L171.25 187.531L171.25 204.938L172.25 205.938L173.25 204.938L173.25 187.531L175.125 189.406L175.125 203.031L177.125 201.062L177.125 191.406L179.031 193.281L179.031 199.156L181 197.188L181 195.281L181.969 196.219L182.906 195.281L182.906 197.188L184.875 199.156L184.875 193.281L186.781 191.406L186.781 201.062L188.781 203.031L188.781 189.406L190.656 187.531L190.656 204.938L191.656 205.938L192.656 204.938L192.656 187.531L194.531 189.406L194.531 203.031L196.531 201.062L196.531 191.406L198.438 193.281L198.438 199.156L200.406 197.188L200.406 195.281L201.344 196.219L202.312 195.281L202.312 197.188L204.281 199.156L204.281 193.281L206.188 191.406L206.188 201.062L208.188 203.031L208.188 189.406L210.062 187.531L210.062 204.938L211.062 205.938L212.062 204.938L212.062 187.531L213.938 189.406L213.938 203.031L215.938 201.062L215.938 191.406L217.844 193.281L217.844 199.156L219.812 197.188L219.812 195.281L220.781 196.219L221.719 195.281L221.719 197.188L223.688 199.156L223.688 193.281L225.594 191.406L225.594 201.062L227.594 203.031L227.594 189.406L229.469 187.531L229.469 204.938L230.469 205.938L231.469 204.938L231.469 187.531L233.344 189.406L233.344 203.031L233.75 202.625L233.75 199.969L233.656 189.688L233.625 189.688L233.625 189.5L233.625 188.219L233.5 176.406L233.469 168.531L233.5 161.969L233.594 155.406L233.781 148.812L233.875 146.812L233.875 144.312L234 144.188L234.094 142.188L234.469 135.594L234.688 132.531L233.406 131.25L233.406 125.375L231.406 127.375L231.406 129.25L230.469 128.312L229.531 129.25L229.531 127.375L227.531 125.375L227.531 131.25L225.656 133.125L225.656 123.469L223.656 121.5L223.656 135.125L221.75 137.031L221.75 119.594L220.75 118.594L219.781 119.594L219.781 137.031L217.875 135.125L217.875 121.5L215.875 123.469L215.875 133.125L214 131.25L214 125.375L212 127.375L212 129.25L211.062 128.312L210.125 129.25L210.125 127.375L208.125 125.375L208.125 131.25L206.25 133.125L206.25 123.469L204.25 121.5L204.25 135.125L202.344 137.031L202.344 119.594L201.375 118.594L200.375 119.594L200.375 137.031L198.469 135.125L198.469 121.5L196.5 123.469L196.5 133.125L194.594 131.25L194.594 125.375L192.594 127.375L192.594 129.25L191.656 128.312L190.719 129.25L190.719 127.375L188.719 125.375L188.719 131.25L186.812 133.125L186.812 123.469L184.844 121.5L184.844 135.125L182.938 137.031L182.938 119.594L181.938 118.594L180.969 119.594L180.969 137.031L179.062 135.125L179.062 121.5L177.062 123.469L177.062 133.125L175.188 131.25L175.188 125.375L173.188 127.375L173.188 129.25L172.25 128.312L171.312 129.25L171.312 127.375L169.312 125.375L169.312 131.25L167.438 133.125L167.438 123.469L165.438 121.5L165.438 135.125L163.531 137.031L163.531 119.594L162.562 118.594L161.562 119.594L161.562 137.031L159.656 135.125L159.656 121.5L157.656 123.469L157.656 133.125L155.781 131.25L155.781 125.375L153.781 127.375L153.781 129.25L152.844 128.312L151.906 129.25L151.906 127.375L149.906 125.375L149.906 131.25L148.031 133.125L148.031 123.469L146.031 121.5L146.031 135.125L144.125 137.031L144.125 119.594L143.156 118.594L143.656 118.094L143.656 99.7188L143.156 99.1875L143.188 99.1562L143.188 79.8438L143.156 79.7812L143.094 79.8438L143.094 99.1562L143.125 99.1875L142.625 99.7188L142.625 118.094L143.125 118.594L142.156 119.594L142.156 137.031L140.25 135.125L140.25 121.5L138.25 123.469L138.25 133.125L136.375 131.25L136.375 125.375L134.375 127.375L134.375 129.25L133.438 128.312ZM152.844 128.312L153.594 127.562L153.594 109.656L152.844 108.906L152.094 109.656L152.094 127.562L152.844 128.312ZM152.844 108.906L153.125 108.625L153.125 89.7812L152.844 89.5L152.562 89.7812L152.562 108.625L152.844 108.906ZM152.844 89.5L152.875 89.4688L152.875 70.125L152.844 70.0938L152.812 70.125L152.812 89.4688L152.844 89.5ZM162.562 118.594L163.062 118.094L163.062 99.7188L162.562 99.1875L162.031 99.7188L162.031 118.094L162.562 118.594ZM162.562 99.1875L162.594 99.1562L162.594 79.8438L162.562 79.7812L162.5 79.8438L162.5 99.1562L162.562 99.1875ZM172.25 128.312L173 127.562L173 109.656L172.25 108.906L171.5 109.656L171.5 127.562L172.25 128.312ZM172.25 108.906L172.531 108.625L172.531 89.7812L172.25 89.5L171.969 89.7812L171.969 108.625L172.25 108.906ZM172.25 89.5L172.281 89.4688L172.281 70.125L172.25 70.0938L172.219 70.125L172.219 89.4688L172.25 89.5ZM181.938 118.594L182.469 118.094L182.469 99.7188L181.938 99.1875L181.438 99.7188L181.438 118.094L181.938 118.594ZM181.938 99.1875L182 99.1562L182 79.8438L181.938 79.7812L181.906 79.8438L181.906 99.1562L181.938 99.1875ZM191.656 128.312L192.406 127.562L192.406 109.656L191.656 108.906L190.906 109.656L190.906 127.562L191.656 128.312ZM191.656 108.906L191.938 108.625L191.938 89.7812L191.656 89.5L191.375 89.7812L191.375 108.625L191.656 108.906ZM191.656 89.5L191.688 89.4688L191.688 70.125L191.656 70.0938L191.625 70.125L191.625 89.4688L191.656 89.5ZM201.375 118.594L201.875 118.094L201.875 99.7188L201.375 99.1875L200.844 99.7188L200.844 118.094L201.375 118.594ZM201.375 99.1875L201.406 99.1562L201.406 79.8438L201.375 79.7812L201.312 79.8438L201.312 99.1562L201.375 99.1875ZM211.062 128.312L211.812 127.562L211.812 109.656L211.062 108.906L210.312 109.656L210.312 127.562L211.062 128.312ZM211.062 108.906L211.344 108.625L211.344 89.7812L211.062 89.5L210.781 89.7812L210.781 108.625L211.062 108.906ZM211.062 89.5L211.094 89.4688L211.094 70.125L211.062 70.0938L211.031 70.125L211.031 89.4688L211.062 89.5ZM220.75 118.594L221.281 118.094L221.281 99.7188L220.781 99.1875L220.812 99.1562L220.812 79.8438L220.781 79.7812L220.719 79.8438L220.719 99.1562L220.75 99.1875L220.25 99.7188L220.25 118.094L220.75 118.594ZM230.469 128.312L231.219 127.562L231.219 109.656L230.469 108.906L229.719 109.656L229.719 127.562L230.469 128.312ZM230.469 108.906L230.75 108.625L230.75 89.7812L230.469 89.5L230.188 89.7812L230.188 108.625L230.469 108.906ZM230.469 89.5L230.5 89.4688L230.5 72.8438L230.438 72.7812L230.438 89.4688L230.469 89.5ZM230.469 205.938L229.938 206.469L229.938 224.812L230.469 225.344L231 224.812L231 206.469L230.469 205.938ZM230.469 225.344L230.406 225.375L230.406 229.906L230.531 229.906L230.531 225.375L230.469 225.344ZM220.781 196.219L220 197L220 214.875L220.75 215.625L220.469 215.906L220.469 230.219L221.062 230.219L221.062 215.906L220.781 215.625L221.531 214.875L221.531 197L220.781 196.219ZM211.062 205.938L210.531 206.469L210.531 224.812L211.062 225.344L211.594 224.812L211.594 206.469L211.062 205.938ZM211.062 225.344L211 225.375L211 230.531L211.125 230.531L211.125 225.375L211.062 225.344ZM201.344 196.219L200.594 197L200.594 214.875L201.344 215.625L202.125 214.875L202.125 197L201.344 196.219ZM201.344 215.625L201.062 215.906L201.062 230.812L201.656 230.781L201.656 215.906L201.344 215.625ZM191.656 205.938L191.125 206.469L191.125 224.812L191.656 225.344L192.188 224.812L192.188 206.469L191.656 205.938ZM191.656 225.344L191.594 225.375L191.594 230.938L191.719 230.938L191.719 225.375L191.656 225.344ZM181.969 196.219L181.188 197L181.188 214.875L181.969 215.625L182.719 214.875L182.719 197L181.969 196.219ZM181.969 215.625L181.656 215.906L181.656 231.031L182.25 231L182.25 215.906L181.969 215.625ZM172.25 205.938L171.719 206.469L171.719 224.812L172.25 225.344L172.781 224.812L172.781 206.469L172.25 205.938ZM172.25 225.344L172.219 225.375L172.219 231L172.312 231L172.312 225.375L172.25 225.344ZM162.531 196.219L161.781 197L161.781 214.875L162.531 215.625L163.312 214.875L163.312 197L162.531 196.219ZM162.531 215.625L162.25 215.906L162.25 230.938L162.844 230.969L162.844 215.906L162.531 215.625ZM152.844 205.938L152.312 206.469L152.312 224.812L152.844 225.344L153.375 224.812L153.375 206.469L152.844 205.938ZM152.844 225.344L152.781 225.375L152.781 230.75L152.906 230.781L152.906 225.375L152.844 225.344ZM133.438 205.938L132.906 206.469L132.906 224.812L133.438 225.344L133.969 224.812L133.969 206.469L133.438 205.938ZM133.438 225.344L133.375 225.375L133.375 230.219L133.5 230.219L133.5 225.375L133.438 225.344ZM123.719 196.219L122.969 197L122.969 214.875L123.719 215.625L124.5 214.875L124.5 197L123.719 196.219ZM123.719 215.625L123.438 215.906L123.438 229.875L124.031 229.906L124.031 215.906L123.719 215.625ZM123.75 118.594L124.25 118.094L124.25 99.7188L123.75 99.1875L123.219 99.7188L123.219 118.094L123.75 118.594ZM123.75 99.1875L123.781 99.1562L123.781 79.8438L123.75 79.7812L123.688 79.8438L123.688 99.1562L123.75 99.1875ZM129.594 73.9375L129.531 74L129.531 85.5938L129.594 85.6562L129.594 73.9375ZM137.281 73.9375L137.281 85.6562L137.344 85.5938L137.344 74L137.281 73.9375ZM149 73.9375L148.938 74L148.938 85.5938L149 85.6562L149 73.9375ZM156.688 73.9375L156.688 85.6562L156.75 85.5938L156.75 74L156.688 73.9375ZM168.406 73.9375L168.344 74L168.344 85.5938L168.406 85.6562L168.406 73.9375ZM176.094 73.9375L176.094 85.6562L176.156 85.5938L176.156 74L176.094 73.9375ZM187.812 73.9375L187.75 74L187.75 85.5938L187.812 85.6562L187.812 73.9375ZM195.5 73.9375L195.5 85.6562L195.562 85.5938L195.562 74L195.5 73.9375ZM207.219 73.9375L207.156 74L207.156 85.5938L207.219 85.6562L207.219 73.9375ZM214.906 73.9375L214.906 85.6562L214.969 85.5938L214.969 74L214.906 73.9375ZM226.625 73.9375L226.562 74L226.562 85.5938L226.625 85.6562L226.625 73.9375ZM121.781 77.8438L121.781 81.75L121.812 81.7188L121.812 77.875L121.781 77.8438ZM125.688 77.8438L125.656 77.875L125.656 81.7188L125.688 81.75L125.688 77.8438ZM141.188 77.8438L141.188 81.75L141.219 81.7188L141.219 77.875L141.188 77.8438ZM145.094 77.8438L145.062 77.875L145.062 81.7188L145.094 81.75L145.094 77.8438ZM160.594 77.8438L160.594 81.75L160.625 81.7188L160.625 77.875L160.594 77.8438ZM164.5 77.8438L164.469 77.875L164.469 81.7188L164.5 81.75L164.5 77.8438ZM180 77.8438L180 81.75L180.031 81.7188L180.031 77.875L180 77.8438ZM183.906 77.8438L183.875 77.875L183.875 81.7188L183.906 81.75L183.906 77.8438ZM199.406 77.8438L199.406 81.75L199.438 81.7188L199.438 77.875L199.406 77.8438ZM203.312 77.8438L203.281 77.875L203.281 81.7188L203.312 81.75L203.312 77.8438ZM218.812 77.8438L218.812 81.75L218.844 81.7188L218.844 77.875L218.812 77.8438ZM222.719 77.8438L222.688 77.875L222.688 81.7188L222.719 81.75L222.719 77.8438ZM234.312 77.875L234.312 85.6562L234.375 85.5938L234.375 77.9375L234.312 77.875ZM117.875 81.375L117.875 85.6562L117.938 85.5938L117.938 81.375L117.875 81.375ZM238.219 81.4688L238.219 81.75L238.25 81.7188L238.25 81.5L238.219 81.4688ZM119.906 83.625L119.812 83.7188L119.812 95.2812L119.906 95.375L119.906 83.625ZM127.562 83.625L127.562 95.375L127.656 95.2812L127.656 83.7188L127.562 83.625ZM139.312 83.625L139.219 83.7188L139.219 95.2812L139.312 95.375L139.312 83.625ZM146.969 83.625L146.969 95.375L147.062 95.2812L147.062 83.7188L146.969 83.625ZM158.719 83.625L158.625 83.7188L158.625 95.2812L158.719 95.375L158.719 83.625ZM166.375 83.625L166.375 95.375L166.469 95.2812L166.469 83.7188L166.375 83.625ZM178.125 83.625L178.031 83.7188L178.031 95.2812L178.125 95.375L178.125 83.625ZM185.781 83.625L185.781 95.375L185.875 95.2812L185.875 83.7188L185.781 83.625ZM197.531 83.625L197.438 83.7188L197.438 95.2812L197.531 95.375L197.531 83.625ZM205.188 83.625L205.188 95.375L205.281 95.2812L205.281 83.7188L205.188 83.625ZM216.938 83.625L216.844 83.7188L216.844 95.2812L216.938 95.375L216.938 83.625ZM224.594 83.625L224.594 95.375L224.688 95.2812L224.688 83.7188L224.594 83.625ZM236.344 83.625L236.25 83.7188L236.25 95.2812L236.344 95.375L236.344 83.625ZM131.438 87.5L131.438 91.5L131.531 91.4062L131.531 87.5938L131.438 87.5ZM135.438 87.5L135.344 87.5938L135.344 91.4062L135.438 91.5L135.438 87.5ZM150.844 87.5L150.844 91.5L150.938 91.4062L150.938 87.5938L150.844 87.5ZM154.844 87.5L154.75 87.5938L154.75 91.4062L154.844 91.5L154.844 87.5ZM170.25 87.5L170.25 91.5L170.344 91.4062L170.344 87.5938L170.25 87.5ZM174.25 87.5L174.156 87.5938L174.156 91.4062L174.25 91.5L174.25 87.5ZM189.656 87.5L189.656 91.5L189.75 91.4062L189.75 87.5938L189.656 87.5ZM193.656 87.5L193.562 87.5938L193.562 91.4062L193.656 91.5L193.656 87.5ZM209.062 87.5L209.062 91.5L209.156 91.4062L209.156 87.5938L209.062 87.5ZM213.062 87.5L212.969 87.5938L212.969 91.4062L213.062 91.5L213.062 87.5ZM228.469 87.5L228.469 91.5L228.562 91.4062L228.562 87.5938L228.469 87.5ZM232.469 87.5L232.375 87.5938L232.375 91.4062L232.469 91.5L232.469 87.5ZM117.625 93.0938L117.625 101.469L117.875 103.625L118 104.938L118.188 104.75L118.188 93.6562L117.625 93.0938ZM129.844 93.0938L129.281 93.6562L129.281 104.75L129.844 105.312L129.844 93.0938ZM137.031 93.0938L137.031 105.312L137.594 104.75L137.594 93.6562L137.031 93.0938ZM149.25 93.0938L148.688 93.6562L148.688 104.75L149.25 105.312L149.25 93.0938ZM156.438 93.0938L156.438 105.312L157 104.75L157 93.6562L156.438 93.0938ZM168.656 93.0938L168.094 93.6562L168.094 104.75L168.656 105.312L168.656 93.0938ZM175.844 93.0938L175.844 105.312L176.406 104.75L176.406 93.6562L175.844 93.0938ZM188.062 93.0938L187.5 93.6562L187.5 104.75L188.062 105.312L188.062 93.0938ZM195.25 93.0938L195.25 105.312L195.812 104.75L195.812 93.6562L195.25 93.0938ZM207.469 93.0938L206.906 93.6562L206.906 104.75L207.469 105.312L207.469 93.0938ZM214.656 93.0938L214.656 105.312L215.219 104.75L215.219 93.6562L214.656 93.0938ZM226.875 93.0938L226.312 93.6562L226.312 104.75L226.875 105.312L226.875 93.0938ZM234.062 93.0938L234.062 105.312L234.625 104.75L234.625 93.6562L234.062 93.0938ZM121.5 96.9688L121.5 101.438L122.094 100.844L122.094 97.5312L121.5 96.9688ZM125.969 96.9688L125.406 97.5312L125.406 100.844L125.969 101.438L125.969 96.9688ZM140.906 96.9688L140.906 101.438L141.5 100.844L141.5 97.5312L140.906 96.9688ZM145.375 96.9688L144.812 97.5312L144.812 100.844L145.375 101.438L145.375 96.9688ZM160.312 96.9688L160.312 101.438L160.906 100.844L160.906 97.5312L160.312 96.9688ZM164.781 96.9688L164.188 97.5312L164.188 100.844L164.781 101.438L164.781 96.9688ZM179.719 96.9688L179.719 101.438L180.281 100.844L180.281 97.5312L179.719 96.9688ZM184.188 96.9688L183.625 97.5312L183.625 100.844L184.188 101.438L184.188 96.9688ZM199.125 96.9688L199.125 101.438L199.719 100.844L199.719 97.5312L199.125 96.9688ZM203.594 96.9688L203.031 97.5312L203.031 100.844L203.594 101.438L203.594 96.9688ZM218.531 96.9688L218.531 101.438L219.125 100.844L219.125 97.5312L218.531 96.9688ZM223 96.9688L222.438 97.5312L222.438 100.844L223 101.438L223 96.9688ZM237.938 96.9688L237.938 97.7812L238.031 97.0625L237.938 96.9688ZM120.375 102.562L119.344 103.594L119.344 114.219L120.375 115.25L120.375 102.562ZM127.094 102.562L127.094 115.25L128.125 114.219L128.125 103.594L127.094 102.562ZM139.781 102.562L138.75 103.594L138.75 114.219L139.781 115.25L139.781 102.562ZM146.5 102.562L146.5 115.25L147.531 114.219L147.531 103.594L146.5 102.562ZM159.188 102.562L158.156 103.594L158.156 114.219L159.188 115.25L159.188 102.562ZM165.906 102.562L165.906 115.25L166.938 114.219L166.938 103.594L165.906 102.562ZM178.594 102.562L177.562 103.594L177.562 114.219L178.594 115.25L178.594 102.562ZM185.312 102.562L185.312 115.25L186.344 114.219L186.344 103.594L185.312 102.562ZM198 102.562L196.969 103.594L196.969 114.219L198 115.25L198 102.562ZM204.719 102.562L204.719 115.25L205.75 114.219L205.75 103.594L204.719 102.562ZM217.406 102.562L216.375 103.594L216.375 114.219L217.406 115.25L217.406 102.562ZM224.125 102.562L224.125 115.25L225.156 114.219L225.156 103.594L224.125 102.562ZM236.812 102.562L235.781 103.594L235.781 114.219L236.188 114.625L236.312 113.156L236.812 108.406L236.812 102.562ZM130.969 106.438L130.969 111.375L132.031 110.312L132.031 107.5L130.969 106.438ZM135.906 106.438L134.844 107.5L134.844 110.312L135.906 111.375L135.906 106.438ZM150.375 106.438L150.375 111.375L151.438 110.312L151.438 107.5L150.375 106.438ZM155.312 106.438L154.25 107.5L154.25 110.312L155.312 111.375L155.312 106.438ZM169.781 106.438L169.781 111.375L170.844 110.312L170.844 107.5L169.781 106.438ZM174.719 106.438L173.656 107.5L173.656 110.312L174.719 111.375L174.719 106.438ZM189.188 106.438L189.188 111.375L190.25 110.312L190.25 107.5L189.188 106.438ZM194.125 106.438L193.062 107.5L193.062 110.312L194.125 111.375L194.125 106.438ZM208.594 106.438L208.594 111.375L209.656 110.312L209.656 107.5L208.594 106.438ZM213.531 106.438L212.469 107.5L212.469 110.312L213.531 111.375L213.531 106.438ZM228 106.438L228 111.375L229.062 110.312L229.062 107.5L228 106.438ZM232.938 106.438L231.875 107.5L231.875 110.312L232.938 111.375L232.938 106.438ZM130.312 112.031L128.812 113.531L128.812 123.656L130.312 125.188L130.312 112.031ZM136.562 112.031L136.562 125.188L138.062 123.656L138.062 113.531L136.562 112.031ZM149.719 112.031L148.219 113.531L148.219 123.656L149.719 125.188L149.719 112.031ZM155.969 112.031L155.969 125.188L157.469 123.656L157.469 113.531L155.969 112.031ZM169.125 112.031L167.625 113.531L167.625 123.656L169.125 125.188L169.125 112.031ZM175.375 112.031L175.375 125.188L176.875 123.656L176.875 113.531L175.375 112.031ZM188.531 112.031L187.031 113.531L187.031 123.656L188.531 125.188L188.531 112.031ZM194.781 112.031L194.781 125.188L196.312 123.656L196.312 113.531L194.781 112.031ZM207.938 112.031L206.438 113.531L206.438 123.656L207.938 125.188L207.938 112.031ZM214.188 112.031L214.188 125.188L215.688 123.656L215.688 113.531L214.188 112.031ZM227.344 112.031L225.844 113.531L225.844 123.656L227.344 125.188L227.344 112.031ZM233.594 112.031L233.594 125.188L235.094 123.656L235.094 113.531L233.594 112.031ZM121.031 115.906L121.031 121.312L122.562 119.781L122.562 117.438L121.031 115.906ZM126.438 115.906L124.906 117.438L124.906 119.781L126.438 121.312L126.438 115.906ZM140.438 115.906L140.438 121.312L141.969 119.781L141.969 117.438L140.438 115.906ZM145.844 115.906L144.312 117.438L144.312 119.781L145.844 121.312L145.844 115.906ZM159.844 115.906L159.844 121.312L161.375 119.781L161.375 117.438L159.844 115.906ZM165.25 115.906L163.719 117.438L163.719 119.781L165.25 121.312L165.25 115.906ZM179.25 115.906L179.25 121.312L180.781 119.781L180.781 117.438L179.25 115.906ZM184.656 115.906L183.125 117.438L183.125 119.781L184.656 121.312L184.656 115.906ZM198.656 115.906L198.656 121.312L200.188 119.781L200.188 117.438L198.656 115.906ZM204.062 115.906L202.531 117.438L202.531 119.781L204.062 121.312L204.062 115.906ZM218.062 115.906L218.062 121.312L219.594 119.781L219.594 117.438L218.062 115.906ZM223.469 115.906L221.938 117.438L221.938 119.781L223.469 121.312L223.469 115.906ZM235.406 123.375L235.312 123.469L235.312 124.562L235.406 123.375ZM132.219 129.531L132.219 146.5L130.781 145.062L130.781 130.969L132.219 129.531ZM134.656 129.531L136.094 130.969L136.094 145.062L134.656 146.5L134.656 129.531ZM151.625 129.531L151.625 146.5L150.188 145.062L150.188 130.969L151.625 129.531ZM154.062 129.531L155.5 130.969L155.5 145.062L154.062 146.5L154.062 129.531ZM171.031 129.531L171.031 146.5L169.594 145.062L169.594 130.969L171.031 129.531ZM173.469 129.531L174.906 130.969L174.906 145.062L173.469 146.5L173.469 129.531ZM190.438 129.531L190.438 146.5L189 145.062L189 130.969L190.438 129.531ZM192.875 129.531L194.312 130.969L194.312 145.062L192.875 146.5L192.875 129.531ZM209.844 129.531L209.844 146.5L208.406 145.062L208.406 130.969L209.844 129.531ZM212.281 129.531L213.719 130.969L213.719 145.062L212.281 146.5L212.281 129.531ZM229.25 129.531L229.25 146.469L227.812 145.062L227.812 130.969L229.25 129.531ZM231.688 129.531L233.125 130.969L233.125 145.062L231.688 146.469L231.688 129.531ZM138.562 133.406L139.969 134.844L139.969 141.188L138.562 142.594L138.562 133.406ZM157.969 133.406L159.375 134.844L159.375 141.188L157.969 142.594L157.969 133.406ZM177.375 133.406L178.781 134.844L178.781 141.188L177.375 142.594L177.375 133.406ZM196.781 133.406L198.188 134.844L198.188 141.188L196.781 142.594L196.781 133.406ZM216.188 133.406L217.594 134.844L217.594 141.188L216.188 142.594L216.188 133.406ZM128.312 133.438L128.312 142.594L126.906 141.188L126.906 134.844L128.312 133.438ZM147.719 133.438L147.719 142.594L146.312 141.188L146.312 134.844L147.719 133.438ZM167.125 133.438L167.125 142.594L165.719 141.188L165.719 134.844L167.125 133.438ZM186.531 133.438L186.531 142.594L185.125 141.188L185.125 134.844L186.531 133.438ZM205.938 133.438L205.938 142.594L204.531 141.188L204.531 134.844L205.938 133.438ZM225.344 133.438L225.344 142.594L223.938 141.188L223.938 134.844L225.344 133.438ZM123.031 137.312L123.75 138L124.438 137.312L124.438 138.719L123.75 138L123.031 138.719L123.031 137.312ZM142.438 137.312L143.156 138L143.844 137.312L143.844 138.688L143.156 138L142.438 138.719L142.438 137.312ZM161.844 137.312L162.562 138L163.25 137.312L163.25 138.719L162.562 138L161.844 138.719L161.844 137.312ZM181.25 137.312L181.938 138L182.656 137.312L182.656 138.719L181.938 138L181.25 138.719L181.25 137.312ZM200.656 137.312L201.375 138L202.062 137.312L202.062 138.719L201.375 138L200.656 138.719L200.656 137.312ZM220.062 137.312L220.75 138L221.469 137.312L221.469 138.719L220.75 138L220.062 138.719L220.062 137.312ZM125.188 139.469L126.156 140.438L126.156 155L125.188 155.938L125.188 139.469ZM141.688 139.469L141.688 155.938L140.719 155L140.719 140.438L141.688 139.469ZM144.594 139.469L145.562 140.438L145.562 155L144.594 155.938L144.594 139.469ZM161.094 139.469L161.094 155.938L160.125 155L160.125 140.438L161.094 139.469ZM164 139.469L164.969 140.438L164.969 155L164 155.938L164 139.469ZM180.5 139.469L180.5 155.938L179.531 155L179.531 140.438L180.5 139.469ZM183.406 139.469L184.375 140.438L184.375 155L183.406 155.938L183.406 139.469ZM199.906 139.469L199.906 155.938L198.938 155L198.938 140.438L199.906 139.469ZM202.812 139.469L203.781 140.438L203.781 155L202.812 155.938L202.812 139.469ZM219.312 139.469L219.312 155.938L218.344 155L218.344 140.438L219.312 139.469ZM222.219 139.469L223.188 140.438L223.188 155L222.219 155.938L222.219 139.469ZM129.094 143.375L130.031 144.312L130.031 151.125L129.094 152.062L129.094 143.375ZM137.781 143.375L137.781 152.062L136.844 151.125L136.844 144.312L137.781 143.375ZM148.5 143.375L149.438 144.312L149.438 151.125L148.5 152.062L148.5 143.375ZM157.188 143.375L157.188 152.062L156.25 151.125L156.25 144.312L157.188 143.375ZM167.906 143.375L168.844 144.312L168.844 151.125L167.906 152.062L167.906 143.375ZM176.594 143.375L176.594 152.062L175.656 151.125L175.656 144.312L176.594 143.375ZM187.312 143.375L188.25 144.312L188.25 151.125L187.312 152.062L187.312 143.375ZM196 143.375L196 152.062L195.062 151.125L195.062 144.312L196 143.375ZM206.719 143.375L207.656 144.312L207.656 151.125L206.719 152.062L206.719 143.375ZM215.406 143.375L215.406 152.062L214.469 151.125L214.469 144.312L215.406 143.375ZM226.125 143.375L227.062 144.312L227.062 151.125L226.125 152.062L226.125 143.375ZM132.969 147.25L133.438 147.719L133.906 147.25L133.906 148.188L133.438 147.719L132.969 148.188L132.969 147.25ZM152.375 147.25L152.844 147.719L153.312 147.25L153.312 148.188L152.844 147.719L152.375 148.188L152.375 147.25ZM171.781 147.25L172.25 147.719L172.719 147.25L172.719 148.188L172.25 147.719L171.781 148.188L171.781 147.25ZM191.188 147.25L191.656 147.719L192.125 147.25L192.125 148.188L191.656 147.719L191.188 148.188L191.188 147.25ZM210.594 147.25L211.062 147.719L211.531 147.25L211.531 148.188L211.062 147.719L210.594 148.188L210.594 147.25ZM230 147.25L230.469 147.719L230.938 147.25L230.938 148.188L230.469 147.719L230 148.188L230 147.25ZM131.719 149.406L131.719 165.406L131.25 164.938L131.25 149.906L131.719 149.406ZM135.156 149.406L135.625 149.906L135.625 164.938L135.156 165.406L135.156 149.406ZM154.562 149.406L155.031 149.906L155.031 164.938L154.562 165.406L154.562 149.406ZM170.531 149.406L170.531 165.406L170.062 164.938L170.062 149.906L170.531 149.406ZM173.938 149.406L174.438 149.906L174.438 164.938L173.938 165.406L173.938 149.406ZM189.969 149.406L189.969 165.406L189.469 164.938L189.469 149.906L189.969 149.406ZM193.375 149.406L193.844 149.906L193.844 164.938L193.375 165.406L193.375 149.406ZM209.344 149.406L209.344 165.406L208.875 164.938L208.875 149.906L209.344 149.406ZM212.781 149.406L213.25 149.906L213.25 164.938L212.781 165.406L212.781 149.406ZM228.781 149.406L228.781 165.406L228.281 164.938L228.281 149.906L228.781 149.406ZM232.188 149.406L232.656 149.906L232.656 164.938L232.188 165.406L232.188 149.406ZM151.125 149.438L151.125 165.406L150.656 164.938L150.656 149.906L151.125 149.438ZM127.844 153.312L127.844 161.531L127.375 161.062L127.375 153.781L127.844 153.312ZM139.031 153.312L139.5 153.781L139.5 161.062L139.031 161.531L139.031 153.312ZM147.25 153.312L147.25 161.531L146.781 161.062L146.781 153.781L147.25 153.312ZM158.438 153.312L158.906 153.781L158.906 161.062L158.438 161.531L158.438 153.312ZM166.656 153.312L166.656 161.531L166.188 161.062L166.188 153.781L166.656 153.312ZM177.844 153.312L178.312 153.781L178.312 161.062L177.844 161.531L177.844 153.312ZM186.062 153.312L186.062 161.531L185.594 161.062L185.594 153.781L186.062 153.312ZM197.25 153.312L197.719 153.781L197.719 161.062L197.25 161.531L197.25 153.312ZM205.469 153.312L205.469 161.531L205 161.062L205 153.781L205.469 153.312ZM216.656 153.312L217.125 153.781L217.125 161.062L216.656 161.531L216.656 153.312ZM224.875 153.312L224.875 161.531L224.406 161.062L224.406 153.781L224.875 153.312ZM123.5 157.188L123.719 157.406L123.5 157.656L123.5 157.188ZM123.969 157.188L123.969 157.656L123.75 157.406L123.969 157.188ZM142.906 157.188L143.125 157.406L142.906 157.625L142.906 157.188ZM143.375 157.188L143.375 157.625L143.156 157.406L143.375 157.188ZM162.312 157.188L162.531 157.406L162.312 157.656L162.312 157.188ZM162.781 157.188L162.781 157.656L162.562 157.406L162.781 157.188ZM181.719 157.188L181.938 157.406L181.719 157.656L181.719 157.188ZM182.188 157.188L182.188 157.625L181.969 157.406L182.188 157.188ZM201.125 157.188L201.344 157.406L201.125 157.656L201.125 157.188ZM201.594 157.188L201.594 157.656L201.375 157.406L201.594 157.188ZM220.531 157.188L220.75 157.406L220.531 157.656L220.531 157.188ZM221 157.188L221 157.625L220.781 157.406L221 157.188ZM125.438 159.125L125.906 159.594L125.906 174.656L125.438 175.125L125.438 159.125ZM141.438 159.125L141.438 175.125L140.969 174.656L140.969 159.594L141.438 159.125ZM144.844 159.125L145.312 159.594L145.312 174.656L144.844 175.125L144.844 159.125ZM160.844 159.125L160.844 175.125L160.375 174.656L160.375 159.594L160.844 159.125ZM164.25 159.125L164.719 159.594L164.719 174.656L164.25 175.125L164.25 159.125ZM180.25 159.125L180.25 175.125L179.781 174.656L179.781 159.594L180.25 159.125ZM183.656 159.125L184.125 159.594L184.125 174.656L183.656 175.125L183.656 159.125ZM199.656 159.125L199.656 175.125L199.188 174.656L199.188 159.594L199.656 159.125ZM203.062 159.125L203.531 159.594L203.531 174.656L203.062 175.125L203.062 159.125ZM219.062 159.125L219.062 175.125L218.594 174.656L218.594 159.594L219.062 159.125ZM222.469 159.125L222.938 159.594L222.938 174.656L222.469 175.125L222.469 159.125ZM129.312 163L129.781 163.469L129.781 170.75L129.312 171.25L129.312 163ZM137.562 163L137.562 171.25L137.094 170.75L137.094 163.469L137.562 163ZM148.719 163L149.188 163.469L149.188 170.75L148.719 171.25L148.719 163ZM156.969 163L156.969 171.25L156.5 170.75L156.5 163.469L156.969 163ZM168.125 163L168.594 163.469L168.594 170.75L168.125 171.25L168.125 163ZM176.375 163L176.375 171.25L175.906 170.75L175.906 163.469L176.375 163ZM187.531 163L188 163.469L188 170.75L187.531 171.25L187.531 163ZM195.781 163L195.781 171.25L195.312 170.75L195.312 163.469L195.781 163ZM206.938 163L207.406 163.469L207.406 170.75L206.938 171.25L206.938 163ZM215.188 163L215.188 171.25L214.719 170.75L214.719 163.469L215.188 163ZM226.344 163L226.812 163.469L226.812 170.75L226.344 171.25L226.344 163ZM133.188 166.875L133.438 167.125L133.688 166.875L133.688 167.344L133.438 167.125L133.188 167.344L133.188 166.875ZM152.594 166.875L152.844 167.125L153.094 166.875L153.094 167.344L152.844 167.125L152.594 167.344L152.594 166.875ZM172 166.875L172.25 167.125L172.5 166.875L172.5 167.344L172.25 167.125L172 167.344L172 166.875ZM191.406 166.875L191.656 167.125L191.906 166.875L191.906 167.344L191.656 167.125L191.406 167.344L191.406 166.875ZM210.812 166.875L211.062 167.125L211.312 166.875L211.312 167.344L211.062 167.125L210.812 167.344L210.812 166.875ZM230.219 166.875L230.469 167.125L230.719 166.875L230.719 167.344L230.469 167.125L230.219 167.344L230.219 166.875ZM131.969 168.594L131.969 185.062L131.031 184.125L131.031 169.531L131.969 168.594ZM134.906 168.594L135.844 169.531L135.844 184.125L134.906 185.062L134.906 168.594ZM151.375 168.594L151.375 185.062L150.438 184.125L150.438 169.531L151.375 168.594ZM154.312 168.594L155.25 169.531L155.25 184.125L154.312 185.062L154.312 168.594ZM170.781 168.594L170.781 185.062L169.844 184.125L169.844 169.531L170.781 168.594ZM173.719 168.594L174.656 169.531L174.656 184.125L173.719 185.062L173.719 168.594ZM190.188 168.594L190.188 185.062L189.25 184.125L189.25 169.531L190.188 168.594ZM193.125 168.594L194.062 169.531L194.062 184.125L193.125 185.062L193.125 168.594ZM209.594 168.594L209.594 185.062L208.656 184.125L208.656 169.531L209.594 168.594ZM212.531 168.594L213.469 169.531L213.469 184.125L212.531 185.062L212.531 168.594ZM229 168.594L229 185.062L228.062 184.125L228.062 169.531L229 168.594ZM231.938 168.594L232.875 169.531L232.875 184.125L231.938 185.062L231.938 168.594ZM128.094 172.469L128.094 181.188L127.156 180.219L127.156 173.406L128.094 172.469ZM138.781 172.469L139.719 173.406L139.719 180.219L138.781 181.188L138.781 172.469ZM147.5 172.469L147.5 181.188L146.562 180.219L146.562 173.406L147.5 172.469ZM158.188 172.469L159.125 173.406L159.125 180.219L158.188 181.188L158.188 172.469ZM166.906 172.469L166.906 181.188L165.969 180.219L165.969 173.406L166.906 172.469ZM177.594 172.469L178.531 173.406L178.531 180.219L177.594 181.188L177.594 172.469ZM186.312 172.469L186.312 181.188L185.375 180.219L185.375 173.406L186.312 172.469ZM197 172.469L197.938 173.406L197.938 180.219L197 181.188L197 172.469ZM205.719 172.469L205.719 181.188L204.781 180.219L204.781 173.406L205.719 172.469ZM216.406 172.469L217.344 173.406L217.344 180.219L216.406 181.188L216.406 172.469ZM225.125 172.469L225.125 181.188L224.188 180.219L224.188 173.406L225.125 172.469ZM123.25 176.344L123.719 176.812L124.219 176.344L124.219 177.312L123.719 176.812L123.25 177.281L123.25 176.344ZM142.656 176.344L143.125 176.812L143.625 176.344L143.625 177.281L143.125 176.812L142.656 177.281L142.656 176.344ZM162.062 176.344L162.531 176.812L163.031 176.344L163.031 177.312L162.531 176.812L162.062 177.281L162.062 176.344ZM181.469 176.344L181.969 176.812L182.438 176.344L182.438 177.281L181.969 176.812L181.469 177.281L181.469 176.344ZM200.875 176.344L201.344 176.812L201.844 176.344L201.844 177.312L201.344 176.812L200.875 177.281L200.875 176.344ZM220.281 176.344L220.781 176.812L221.25 176.344L221.25 177.312L220.781 176.812L220.281 177.312L220.281 176.344ZM124.969 178.062L126.375 179.469L126.375 193.594L124.969 195L124.969 178.062ZM141.906 178.062L141.906 195L140.5 193.594L140.5 179.469L141.906 178.062ZM144.375 178.062L145.781 179.469L145.781 193.594L144.375 195L144.375 178.062ZM161.312 178.062L161.312 195L159.906 193.594L159.906 179.469L161.312 178.062ZM163.781 178.062L165.188 179.469L165.188 193.594L163.781 195L163.781 178.062ZM180.719 178.062L180.719 195L179.312 193.594L179.312 179.469L180.719 178.062ZM183.188 178.062L184.594 179.469L184.594 193.594L183.188 195L183.188 178.062ZM200.125 178.062L200.125 195L198.719 193.594L198.719 179.469L200.125 178.062ZM202.594 178.062L204 179.469L204 193.594L202.594 195L202.594 178.062ZM219.531 178.062L219.531 195L218.125 193.594L218.125 179.469L219.531 178.062ZM222 178.062L223.406 179.469L223.406 193.594L222 195L222 178.062ZM128.844 181.938L130.25 183.344L130.25 189.688L128.844 191.125L128.844 181.938ZM138.031 181.938L138.031 191.125L136.625 189.688L136.625 183.344L138.031 181.938ZM148.25 181.938L149.656 183.344L149.656 189.688L148.25 191.125L148.25 181.938ZM157.438 181.938L157.438 191.125L156 189.688L156 183.344L157.438 181.938ZM167.656 181.938L169.062 183.344L169.062 189.688L167.656 191.125L167.656 181.938ZM176.844 181.938L176.844 191.125L175.438 189.688L175.438 183.344L176.844 181.938ZM187.062 181.938L188.5 183.344L188.5 189.688L187.062 191.125L187.062 181.938ZM196.25 181.938L196.25 191.125L194.812 189.688L194.812 183.344L196.25 181.938ZM206.469 181.938L207.875 183.344L207.875 189.688L206.469 191.125L206.469 181.938ZM215.656 181.938L215.656 191.125L214.219 189.688L214.219 183.344L215.656 181.938ZM225.875 181.938L227.312 183.344L227.312 189.688L225.875 191.125L225.875 181.938ZM132.719 185.812L133.438 186.531L134.156 185.812L134.156 187.25L133.438 186.531L132.719 187.25L132.719 185.812ZM152.125 185.812L152.844 186.531L153.562 185.812L153.562 187.25L152.844 186.531L152.125 187.25L152.125 185.812ZM171.531 185.812L172.25 186.531L172.969 185.812L172.969 187.25L172.25 186.531L171.531 187.25L171.531 185.812ZM190.938 185.812L191.656 186.531L192.375 185.812L192.375 187.25L191.656 186.531L190.938 187.25L190.938 185.812ZM210.344 185.812L211.062 186.531L211.781 185.812L211.781 187.25L211.062 186.531L210.344 187.25L210.344 185.812ZM229.75 185.812L230.469 186.531L231.188 185.812L231.188 187.25L230.469 186.531L229.75 187.25L229.75 185.812ZM126.844 199.344L126.844 212.5L128.375 211L128.375 200.875L126.844 199.344ZM140.031 199.344L138.5 200.875L138.5 211L140.031 212.5L140.031 199.344ZM146.25 199.344L146.25 212.5L147.781 211L147.781 200.875L146.25 199.344ZM159.438 199.344L157.906 200.875L157.906 211L159.438 212.5L159.438 199.344ZM165.656 199.344L165.656 212.5L167.188 211L167.188 200.875L165.656 199.344ZM178.844 199.344L177.312 200.875L177.312 211L178.844 212.5L178.844 199.344ZM185.062 199.344L185.062 212.5L186.594 211L186.594 200.875L185.062 199.344ZM198.25 199.344L196.719 200.875L196.719 211L198.25 212.5L198.25 199.344ZM204.469 199.344L204.469 212.5L206 211L206 200.875L204.469 199.344ZM217.656 199.344L216.125 200.875L216.125 211L217.656 212.5L217.656 199.344ZM223.875 199.344L223.875 212.5L225.406 211L225.406 200.875L223.875 199.344ZM130.75 203.219L130.75 208.625L132.25 207.125L132.25 204.75L130.75 203.219ZM136.125 203.219L134.625 204.75L134.625 207.125L136.125 208.625L136.125 203.219ZM150.156 203.219L150.156 208.625L151.656 207.125L151.656 204.75L150.156 203.219ZM155.531 203.219L154.031 204.75L154.031 207.125L155.531 208.625L155.531 203.219ZM169.562 203.219L169.562 208.625L171.062 207.125L171.062 204.75L169.562 203.219ZM174.938 203.219L173.438 204.75L173.438 207.125L174.938 208.625L174.938 203.219ZM188.969 203.219L188.969 208.625L190.469 207.125L190.469 204.75L188.969 203.219ZM194.344 203.219L192.844 204.75L192.844 207.125L194.344 208.625L194.344 203.219ZM208.375 203.219L208.375 208.625L209.875 207.125L209.875 204.75L208.375 203.219ZM213.75 203.219L212.25 204.75L212.25 207.125L213.75 208.625L213.75 203.219ZM227.781 203.219L227.781 208.625L229.281 207.125L229.281 204.75L227.781 203.219ZM233.156 203.219L231.656 204.75L231.656 207.125L233.156 208.625L233.156 203.219ZM130.094 209.281L129.031 210.344L129.031 220.938L130.094 221.969L130.094 209.281ZM136.812 209.281L136.812 221.969L137.844 220.938L137.844 210.344L136.812 209.281ZM149.469 209.281L148.438 210.344L148.438 220.938L149.469 221.969L149.469 209.281ZM156.188 209.281L156.188 221.969L157.25 220.938L157.25 210.344L156.188 209.281ZM168.906 209.281L167.844 210.344L167.844 220.938L168.906 221.969L168.906 209.281ZM175.625 209.281L175.625 221.969L176.656 220.938L176.656 210.344L175.625 209.281ZM188.312 209.281L187.25 210.344L187.25 220.938L188.312 221.969L188.312 209.281ZM195.031 209.281L195.031 221.969L196.062 220.938L196.062 210.344L195.031 209.281ZM207.719 209.281L206.656 210.344L206.656 220.938L207.719 221.969L207.719 209.281ZM214.438 209.281L214.438 221.969L215.469 220.938L215.469 210.344L214.438 209.281ZM227.094 209.281L226.062 210.344L226.062 220.938L227.094 221.969L227.094 209.281ZM126.188 213.188L125.156 214.219L125.156 217.062L126.188 218.094L126.188 213.188ZM140.688 213.188L140.688 218.094L141.719 217.062L141.719 214.219L140.688 213.188ZM145.594 213.188L144.562 214.219L144.562 217.062L145.594 218.094L145.594 213.188ZM160.094 213.188L160.094 218.094L161.125 217.062L161.125 214.219L160.094 213.188ZM165 213.188L163.969 214.219L163.969 217.062L165 218.094L165 213.188ZM179.5 213.188L179.5 218.094L180.531 217.062L180.531 214.219L179.5 213.188ZM184.406 213.188L183.375 214.219L183.375 217.062L184.406 218.094L184.406 213.188ZM198.906 213.188L198.906 218.094L199.938 217.062L199.938 214.219L198.906 213.188ZM203.812 213.188L202.781 214.219L202.781 217.062L203.812 218.094L203.812 213.188ZM218.312 213.188L218.312 218.094L219.344 217.062L219.344 214.219L218.312 213.188ZM223.219 213.188L222.188 214.219L222.188 217.062L223.219 218.094L223.219 213.188ZM121.438 213.312L121.438 216.156L121.469 217.906L122.312 217.062L122.312 214.219L121.438 213.312ZM127.344 219.219L127.344 230.031L127.906 230.031L127.906 219.812L127.344 219.219ZM139.531 219.219L138.969 219.812L138.969 230.406L139.531 230.406L139.531 219.219ZM146.75 219.219L146.75 230.625L147.312 230.625L147.312 219.812L146.75 219.219ZM158.938 219.219L158.375 219.812L158.375 230.875L158.406 230.906L158.938 230.906L158.938 219.219ZM166.156 219.219L166.156 231L166.594 231L166.719 230.875L166.719 219.812L166.156 219.219ZM178.344 219.219L177.781 219.812L177.781 230.875L177.938 231L178.344 231L178.344 219.219ZM185.562 219.219L185.562 231L186 231L186.125 230.875L186.125 219.812L185.562 219.219ZM197.75 219.219L197.188 219.812L197.188 230.875L197.75 230.875L197.75 219.219ZM204.969 219.219L204.969 230.719L205.531 230.688L205.531 219.812L204.969 219.219ZM217.156 219.219L216.594 219.812L216.594 230.344L217.156 230.344L217.156 219.219ZM224.375 219.219L224.375 230.094L224.938 230.094L224.938 219.812L224.375 219.219ZM131.219 223.125L131.219 227.562L131.781 227L131.781 223.688L131.219 223.125ZM135.656 223.125L135.094 223.688L135.094 227L135.656 227.562L135.656 223.125ZM150.625 223.125L150.625 227.562L151.188 227L151.188 223.688L150.625 223.125ZM155.062 223.125L154.5 223.688L154.5 227L155.062 227.562L155.062 223.125ZM170.031 223.125L170.031 227.562L170.594 227L170.594 223.688L170.031 223.125ZM174.469 223.125L173.906 223.688L173.906 227L174.469 227.562L174.469 223.125ZM189.438 223.125L189.438 227.562L190 227L190 223.688L189.438 223.125ZM193.875 223.125L193.312 223.688L193.312 227L193.875 227.562L193.875 223.125ZM208.844 223.125L208.844 227.562L209.406 227L209.406 223.688L208.844 223.125ZM213.281 223.125L212.719 223.688L212.719 227L213.281 227.562L213.281 223.125ZM228.25 223.125L228.25 227.562L228.812 227L228.812 223.688L228.25 223.125ZM232.688 223.125L232.125 223.688L232.125 227L232.688 227.562L232.688 223.125ZM129.594 229.156L129.5 229.281L129.5 230.094L129.594 230.094L129.594 229.156ZM137.281 229.156L137.281 230.344L137.375 230.344L137.375 229.281L137.281 229.156ZM149 229.156L148.906 229.281L148.906 230.688L149 230.688L149 229.156ZM156.688 229.156L156.688 230.844L156.781 230.844L156.781 229.281L156.688 229.156ZM168.406 229.156L168.312 229.281L168.312 231L168.406 231L168.406 229.156ZM176.094 229.156L176.094 231L176.188 231L176.188 229.281L176.094 229.156ZM187.812 229.156L187.719 229.281L187.719 231L187.812 231L187.812 229.156ZM195.5 229.156L195.5 230.906L195.594 230.906L195.594 229.281L195.5 229.156ZM207.219 229.156L207.125 229.281L207.125 230.656L207.219 230.656L207.219 229.156ZM214.906 229.156L214.906 230.406L215 230.406L215 229.281L214.906 229.156ZM226.625 229.156L226.531 229.281L226.531 230.031L226.625 230.031L226.625 229.156Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="9_MenONeckDesign7BackColor1"> <path d="M447.599 26.096L446.109 26.081L437.595 25.993L436.067 25.996L431.23 26.005L426.856 26.051L424.537 26.096L422.737 23.906L420.635 25.632L417.853 27.91L416.43 29.106L415.301 30.055L413.432 31.754L411.793 33.301L410.717 34.359L409.774 35.282L407.9 37.186L406.057 39.122L404.243 41.087L402.285 43.272L400.18 45.696L397.623 48.724L394.598 52.437L393.042 54.403L391.414 56.461L386.952 62.228L381.717 69.146L376.242 76.352L373.429 76.697L373.639 78.42L374.064 81.872L374.38 84.45L375.116 90.56L375.817 96.67L376.482 102.781L377.109 108.897L377.296 110.833L377.697 115.014L378.244 121.137L378.748 127.264L379.208 133.398L379.444 137.135L379.622 140.892L379.779 145.409L379.948 152.164L380.053 158.878L380.082 161.117L380.099 162.236L379.977 222.751L378.882 228.316L384.37 229.297L392.577 230.905L397.689 231.924L401.99 232.74L406.034 233.464L410.002 234.092L413.382 234.561L415.038 234.753L416.096 234.876L418.218 235.08L420.317 235.242L422.402 235.369L424.671 235.473L427.151 235.549L431.182 235.623L436.067 235.629L438.954 235.631L443.155 235.568L446.268 235.476L449.103 235.348L451.701 235.188L454.085 235.003L456.495 234.777L458.94 234.505L460.174 234.347L461.617 234.162L464.569 233.722L468.037 233.148L473.424 232.157L479.816 230.869L487.87 229.279L490.56 228.783L493.253 228.316L492.157 222.751L492.203 220.252L492.257 215.128L492.282 209.091L492.257 199.688L492.152 188.495L492.046 175.414L492.028 166.695L492.073 159.429L492.188 152.164L492.354 145.405L492.513 140.895L492.691 137.142L492.927 133.398L493.296 128.488L493.699 123.584L494.596 113.787L494.891 110.84L495.184 107.916L495.799 102.048L496.567 95.009L497.754 84.45L498.356 79.501L498.592 77.631L498.706 76.697L495.892 76.352L493.604 73.352L490.204 68.832L486.922 64.453L484.121 60.792L483.098 59.481L481.763 57.788L479.985 55.53L479.093 54.403L477.536 52.435L474.507 48.719L471.951 45.694L469.849 43.275L467.892 41.094L466.08 39.13L464.238 37.194L462.363 35.287L461.418 34.359L460.537 33.492L458.863 31.9L456.839 30.059L455.704 29.106L454.307 27.932L451.515 25.644L449.398 23.906L447.599 26.096Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="none"/> </g> <g id="10_MenONeckDesign7BackColor2"> <path d="M394.094 70.125L394.094 89.4688L394.125 89.4688L394.125 70.125L394.094 70.125ZM413.5 70.125L413.5 89.4688L413.531 89.4688L413.531 70.125L413.5 70.125ZM432.906 70.125L432.906 89.4688L432.938 89.4688L432.938 70.125L432.906 70.125ZM452.312 70.125L452.312 89.4688L452.344 89.4688L452.344 70.125L452.312 70.125ZM471.719 70.125L471.719 89.4688L471.75 89.4688L471.75 70.125L471.719 70.125ZM491.125 70.125L491.125 89.4688L491.156 89.4688L491.156 70.125L491.125 70.125ZM378.562 73.9375L378.562 85.6562L378.625 85.5938L378.625 74L378.562 73.9375ZM390.25 73.9375L390.219 74L390.219 85.5938L390.25 85.6562L390.25 73.9375ZM397.969 73.9375L397.969 85.6562L398 85.5938L398 74L397.969 73.9375ZM409.656 73.9375L409.625 74L409.625 85.5938L409.656 85.6562L409.656 73.9375ZM417.375 73.9375L417.375 85.6562L417.438 85.5938L417.438 74L417.375 73.9375ZM429.062 73.9375L429 74L429 85.5938L429.062 85.6562L429.062 73.9375ZM436.781 73.9375L436.781 85.6562L436.812 85.5938L436.812 74L436.781 73.9375ZM448.469 73.9375L448.438 74L448.438 85.5938L448.469 85.6562L448.469 73.9375ZM456.188 73.9375L456.188 85.6562L456.25 85.5938L456.25 74L456.188 73.9375ZM467.875 73.9375L467.844 74L467.844 85.5938L467.875 85.6562L467.875 73.9375ZM475.594 73.9375L475.594 85.6562L475.625 85.5938L475.625 74L475.594 73.9375ZM487.281 73.9375L487.25 74L487.25 85.5938L487.281 85.6562L487.281 73.9375ZM495 75.1875L495 85.6562L495.062 85.5938L495.062 75.25L495 75.1875ZM382.438 77.8438L382.438 81.75L382.5 81.7188L382.5 77.875L382.438 77.8438ZM386.375 77.8438L386.312 77.875L386.312 81.7188L386.375 81.75L386.375 77.8438ZM401.844 77.8438L401.844 81.75L401.906 81.7188L401.906 77.875L401.844 77.8438ZM405.781 77.8438L405.719 77.875L405.719 81.7188L405.781 81.75L405.781 77.8438ZM421.25 77.8438L421.25 81.75L421.312 81.7188L421.312 77.875L421.25 77.8438ZM425.188 77.8438L425.125 77.875L425.125 81.7188L425.188 81.75L425.188 77.8438ZM440.656 77.8438L440.656 81.75L440.719 81.7188L440.719 77.875L440.656 77.8438ZM444.594 77.8438L444.531 77.875L444.531 81.7188L444.594 81.75L444.594 77.8438ZM460.062 77.8438L460.062 81.75L460.125 81.7188L460.125 77.875L460.062 77.8438ZM464 77.8438L463.938 77.875L463.938 81.7188L464 81.75L464 77.8438ZM479.469 77.8438L479.469 81.75L479.531 81.7188L479.531 77.875L479.469 77.8438ZM483.406 77.8438L483.344 77.875L483.344 81.7188L483.406 81.75L483.406 77.8438ZM384.406 79.7812L384.375 79.8438L384.375 99.1562L384.406 99.1875L384.469 99.1562L384.469 79.8438L384.406 79.7812ZM384.406 99.1875L383.875 99.7188L383.875 118.094L384.406 118.594L384.938 118.094L384.938 99.7188L384.406 99.1875ZM384.406 118.594L383.406 119.594L383.406 137.031L381.531 135.125L381.531 121.5L379.531 123.469L379.531 133.125L379.156 132.75L379.219 133.406L379.438 137.125L379.625 140.906L379.781 145.406L379.938 152.156L380.062 158.875L380.094 161.125L380.094 162.25L380.094 172.5L381 173.406L381 180.219L380.062 181.156L380.031 191.875L381.469 193.281L381.469 199.156L383.469 197.188L383.469 195.281L384.406 196.219L385.344 195.281L385.344 197.188L387.344 199.156L387.344 193.281L389.25 191.406L389.25 201.062L391.219 203.031L391.219 189.406L393.125 187.531L393.125 204.938L394.125 205.938L395.094 204.938L395.094 187.531L397 189.406L397 203.031L399 201.062L399 191.406L400.875 193.281L400.875 199.156L402.875 197.188L402.875 195.281L403.812 196.219L404.75 195.281L404.75 197.188L406.75 199.156L406.75 193.281L408.625 191.406L408.625 201.062L410.625 203.031L410.625 189.406L412.531 187.531L412.531 204.938L413.5 205.938L414.5 204.938L414.5 187.531L416.406 189.406L416.406 203.031L418.406 201.062L418.406 191.406L420.281 193.281L420.281 199.156L422.281 197.188L422.281 195.281L423.219 196.219L424.156 195.281L424.156 197.188L426.156 199.156L426.156 193.281L428.062 191.406L428.062 201.062L430.031 203.031L430.031 189.406L431.938 187.531L431.938 204.938L432.938 205.938L433.906 204.938L433.906 187.531L435.812 189.406L435.812 203.031L437.812 201.062L437.812 191.406L439.688 193.281L439.688 199.156L441.688 197.188L441.688 195.281L442.625 196.219L443.562 195.281L443.562 197.188L445.562 199.156L445.562 193.281L447.469 191.406L447.469 201.062L449.438 203.031L449.438 189.406L451.344 187.531L451.344 204.938L452.344 205.938L453.312 204.938L453.312 187.531L455.219 189.406L455.219 203.031L457.219 201.062L457.219 191.406L459.094 193.281L459.094 199.156L461.094 197.188L461.094 195.281L462.031 196.219L462.969 195.281L462.969 197.188L464.969 199.156L464.969 193.281L466.875 191.406L466.875 201.062L468.844 203.031L468.844 189.406L470.75 187.531L470.75 204.938L471.75 205.938L472.719 204.938L472.719 187.531L474.625 189.406L474.625 203.031L476.625 201.062L476.625 191.406L478.5 193.281L478.5 199.156L480.5 197.188L480.5 195.281L481.438 196.219L482.375 195.281L482.375 197.188L484.375 199.156L484.375 193.281L486.25 191.406L486.25 201.062L488.25 203.031L488.25 189.406L490.156 187.531L490.156 204.938L491.125 205.938L492.125 204.938L492.125 187.531L492.156 187.531L492.031 175.406L492.031 166.688L492.062 159.438L492.188 152.156L492.344 145.406L492.375 144.906L492.375 129.531L493.156 130.312L493.281 128.5L493.5 125.938L492.094 127.375L492.094 129.25L491.156 128.312L490.188 129.25L490.188 127.375L488.219 125.375L488.219 131.25L486.312 133.125L486.312 123.469L484.312 121.5L484.312 135.125L482.438 137.031L482.438 119.594L481.438 118.594L480.438 119.594L480.438 137.031L478.562 135.125L478.562 121.5L476.562 123.469L476.562 133.125L474.656 131.25L474.656 125.375L472.688 127.375L472.688 129.25L471.75 128.312L470.781 129.25L470.781 127.375L468.812 125.375L468.812 131.25L466.906 133.125L466.906 123.469L464.906 121.5L464.906 135.125L463.031 137.031L463.031 119.594L462.031 118.594L461.031 119.594L461.031 137.031L459.156 135.125L459.156 121.5L457.156 123.469L457.156 133.125L455.25 131.25L455.25 125.375L453.281 127.375L453.281 129.25L452.344 128.312L451.375 129.25L451.375 127.375L449.406 125.375L449.406 131.25L447.5 133.125L447.5 123.469L445.5 121.5L445.5 135.125L443.625 137.031L443.625 119.594L442.625 118.594L441.625 119.594L441.625 137.031L439.75 135.125L439.75 121.5L437.75 123.469L437.75 133.125L435.844 131.25L435.844 125.375L433.875 127.375L433.875 129.25L432.938 128.312L433.688 127.562L433.688 109.656L432.906 108.906L432.156 109.656L432.156 127.562L432.906 128.312L431.969 129.25L431.969 127.375L430 125.375L430 131.25L428.094 133.125L428.094 123.469L426.094 121.5L426.094 135.125L424.219 137.031L424.219 119.594L423.219 118.594L422.219 119.594L422.219 137.031L420.344 135.125L420.344 121.5L418.344 123.469L418.344 133.125L416.438 131.25L416.438 125.375L414.469 127.375L414.469 129.25L413.531 128.312L412.562 129.25L412.562 127.375L410.594 125.375L410.594 131.25L408.688 133.125L408.688 123.469L406.688 121.5L406.688 135.125L404.812 137.031L404.812 119.594L403.812 118.594L402.812 119.594L402.812 137.031L400.938 135.125L400.938 121.5L398.938 123.469L398.938 133.125L397.031 131.25L397.031 125.375L395.062 127.375L395.062 129.25L394.125 128.312L393.156 129.25L393.156 127.375L391.188 125.375L391.188 131.25L389.281 133.125L389.281 123.469L387.281 121.5L387.281 135.125L385.406 137.031L385.406 119.594L384.406 118.594ZM394.125 128.312L394.875 127.562L394.875 109.656L394.125 108.906L393.344 109.656L393.344 127.562L394.125 128.312ZM394.125 108.906L394.406 108.625L394.406 89.7812L394.125 89.5L393.812 89.7812L393.812 108.625L394.125 108.906ZM403.812 118.594L404.344 118.094L404.344 99.7188L403.812 99.1875L403.281 99.7188L403.281 118.094L403.812 118.594ZM403.812 99.1875L403.875 99.1562L403.875 79.8438L403.812 79.7812L403.75 79.8438L403.75 99.1562L403.812 99.1875ZM413.531 128.312L414.281 127.562L414.281 109.656L413.531 108.906L412.75 109.656L412.75 127.562L413.531 128.312ZM413.531 108.906L413.812 108.625L413.812 89.7812L413.531 89.5L413.219 89.7812L413.219 108.625L413.531 108.906ZM423.219 118.594L423.75 118.094L423.75 99.7188L423.219 99.1875L422.688 99.7188L422.688 118.094L423.219 118.594ZM423.219 99.1875L423.281 99.1562L423.281 79.8438L423.219 79.7812L423.156 79.8438L423.156 99.1562L423.219 99.1875ZM432.906 108.906L433.219 108.625L433.219 89.7812L432.906 89.5L432.625 89.7812L432.625 108.625L432.906 108.906ZM442.625 118.594L443.156 118.094L443.156 99.7188L442.625 99.1875L442.094 99.7188L442.094 118.094L442.625 118.594ZM442.625 99.1875L442.688 99.1562L442.688 79.8438L442.625 79.7812L442.562 79.8438L442.562 99.1562L442.625 99.1875ZM452.344 128.312L453.094 127.562L453.094 109.656L452.344 108.906L451.562 109.656L451.562 127.562L452.344 128.312ZM452.344 108.906L452.625 108.625L452.625 89.7812L452.344 89.5L452.031 89.7812L452.031 108.625L452.344 108.906ZM462.031 118.594L462.562 118.094L462.562 99.7188L462.031 99.1875L461.5 99.7188L461.5 118.094L462.031 118.594ZM462.031 99.1875L462.094 99.1562L462.094 79.8438L462.031 79.7812L462 79.8438L462 99.1562L462.031 99.1875ZM471.75 128.312L472.5 127.562L472.5 109.656L471.75 108.906L470.969 109.656L470.969 127.562L471.75 128.312ZM471.75 108.906L472.031 108.625L472.031 89.7812L471.75 89.5L471.438 89.7812L471.438 108.625L471.75 108.906ZM481.438 118.594L481.969 118.094L481.969 99.7188L481.438 99.1875L480.906 99.7188L480.906 118.094L481.438 118.594ZM481.438 99.1875L481.5 99.1562L481.5 79.8438L481.438 79.7812L481.375 79.8438L481.375 99.1562L481.438 99.1875ZM491.156 128.312L491.906 127.562L491.906 109.656L491.156 108.906L490.375 109.656L490.375 127.562L491.156 128.312ZM491.156 108.906L491.438 108.625L491.438 89.7812L491.156 89.5L490.844 89.7812L490.844 108.625L491.156 108.906ZM491.125 205.938L490.625 206.469L490.625 224.812L491.125 225.344L491.656 224.812L491.656 206.469L491.125 205.938ZM491.125 225.344L491.094 225.375L491.094 228.688L491.188 228.688L491.188 225.375L491.125 225.344ZM481.438 196.219L480.688 197L480.688 214.875L481.438 215.625L482.188 214.875L482.188 197L481.438 196.219ZM481.438 215.625L481.156 215.906L481.156 230.594L481.719 230.5L481.719 215.906L481.438 215.625ZM471.75 205.938L471.219 206.469L471.219 224.812L471.75 225.344L472.25 224.812L472.25 206.469L471.75 205.938ZM471.75 225.344L471.688 225.375L471.688 232.469L471.781 232.469L471.781 225.375L471.75 225.344ZM462.031 196.219L461.281 197L461.281 214.875L462.031 215.625L462.781 214.875L462.781 197L462.031 196.219ZM462.031 215.625L461.75 215.906L461.75 234.156L462.312 234.062L462.312 215.906L462.031 215.625ZM452.344 205.938L451.812 206.469L451.812 224.812L452.344 225.344L452.844 224.812L452.844 206.469L452.344 205.938ZM452.344 225.344L452.281 225.375L452.281 235.156L452.375 235.125L452.375 225.375L452.344 225.344ZM442.625 196.219L441.875 197L441.875 214.875L442.625 215.625L443.375 214.875L443.375 197L442.625 196.219ZM442.625 215.625L442.344 215.906L442.344 234.75L442.625 235.031L442.906 234.75L442.906 215.906L442.625 215.625ZM442.625 235.031L442.594 235.062L442.594 235.562L442.656 235.562L442.656 235.062L442.625 235.031ZM432.938 205.938L432.406 206.469L432.406 224.812L432.938 225.344L433.438 224.812L433.438 206.469L432.938 205.938ZM432.938 225.344L432.875 225.375L432.875 235.625L432.969 235.625L432.969 225.375L432.938 225.344ZM423.219 196.219L422.469 197L422.469 214.875L423.219 215.625L423.969 214.875L423.969 197L423.219 196.219ZM423.219 215.625L422.938 215.906L422.938 234.75L423.219 235.031L423.5 234.75L423.5 215.906L423.219 215.625ZM423.219 235.031L423.188 235.062L423.188 235.406L423.25 235.406L423.25 235.062L423.219 235.031ZM413.5 205.938L413 206.469L413 224.812L413.5 225.344L414.031 224.812L414.031 206.469L413.5 205.938ZM413.5 225.344L413.469 225.375L413.469 234.562L413.562 234.594L413.562 225.375L413.5 225.344ZM403.812 196.219L403.062 197L403.062 214.875L403.812 215.625L404.562 214.875L404.562 197L403.812 196.219ZM403.812 215.625L403.531 215.906L403.531 233L404.094 233.125L404.094 215.906L403.812 215.625ZM394.125 205.938L393.594 206.469L393.594 224.812L394.125 225.344L394.625 224.812L394.625 206.469L394.125 205.938ZM394.125 225.344L394.062 225.375L394.062 231.188L394.156 231.219L394.156 225.375L394.125 225.344ZM384.406 196.219L383.656 197L383.656 214.875L384.406 215.625L385.156 214.875L385.156 197L384.406 196.219ZM384.406 215.625L384.125 215.906L384.125 229.25L384.375 229.312L384.688 229.375L384.688 215.906L384.406 215.625ZM380.562 83.625L380.469 83.7188L380.469 95.2812L380.562 95.375L380.562 83.625ZM388.25 83.625L388.25 95.375L388.344 95.2812L388.344 83.7188L388.25 83.625ZM399.969 83.625L399.875 83.7188L399.875 95.2812L399.969 95.375L399.969 83.625ZM407.656 83.625L407.656 95.375L407.75 95.2812L407.75 83.7188L407.656 83.625ZM419.375 83.625L419.281 83.7188L419.281 95.2812L419.375 95.375L419.375 83.625ZM427.062 83.625L427.062 95.375L427.156 95.2812L427.156 83.7188L427.062 83.625ZM438.781 83.625L438.688 83.7188L438.688 95.2812L438.781 95.375L438.781 83.625ZM446.469 83.625L446.469 95.375L446.562 95.2812L446.562 83.7188L446.469 83.625ZM458.188 83.625L458.094 83.7188L458.094 95.2812L458.188 95.375L458.188 83.625ZM465.875 83.625L465.875 95.375L465.969 95.2812L465.969 83.7188L465.875 83.625ZM477.594 83.625L477.5 83.7188L477.5 95.2812L477.594 95.375L477.594 83.625ZM485.281 83.625L485.281 95.375L485.375 95.2812L485.375 83.7188L485.281 83.625ZM497 83.625L496.906 83.7188L496.906 91.9062L497 91.0625L497 83.625ZM376.688 87.5L376.594 87.5938L376.594 91.4062L376.688 91.5L376.688 87.5ZM392.125 87.5L392.125 91.5L392.219 91.4062L392.219 87.5938L392.125 87.5ZM396.094 87.5L396 87.5938L396 91.4062L396.094 91.5L396.094 87.5ZM411.531 87.5L411.531 91.5L411.625 91.4062L411.625 87.5938L411.531 87.5ZM415.5 87.5L415.406 87.5938L415.406 91.4062L415.5 91.5L415.5 87.5ZM430.938 87.5L430.938 91.5L431.031 91.4062L431.031 87.5938L430.938 87.5ZM434.906 87.5L434.812 87.5938L434.812 91.4062L434.906 91.5L434.906 87.5ZM450.344 87.5L450.344 91.5L450.438 91.4062L450.438 87.5938L450.344 87.5ZM454.312 87.5L454.219 87.5938L454.219 91.4062L454.312 91.5L454.312 87.5ZM469.75 87.5L469.75 91.5L469.844 91.4062L469.844 87.5938L469.75 87.5ZM473.719 87.5L473.625 87.5938L473.625 91.4062L473.719 91.5L473.719 87.5ZM489.156 87.5L489.156 91.5L489.25 91.4062L489.25 87.5938L489.156 87.5ZM493.125 87.5L493.031 87.5938L493.031 91.4062L493.125 91.5L493.125 87.5ZM378.312 93.0938L378.312 105.312L378.875 104.75L378.875 93.6562L378.312 93.0938ZM390.5 93.0938L389.938 93.6562L389.938 104.75L390.5 105.312L390.5 93.0938ZM397.719 93.0938L397.719 105.312L398.281 104.75L398.281 93.6562L397.719 93.0938ZM409.906 93.0938L409.344 93.6562L409.344 104.75L409.906 105.312L409.906 93.0938ZM417.125 93.0938L417.125 105.312L417.688 104.75L417.688 93.6562L417.125 93.0938ZM429.312 93.0938L428.75 93.6562L428.75 104.75L429.312 105.312L429.312 93.0938ZM436.531 93.0938L436.531 105.312L437.094 104.75L437.094 93.6562L436.531 93.0938ZM448.719 93.0938L448.156 93.6562L448.156 104.75L448.719 105.312L448.719 93.0938ZM455.938 93.0938L455.938 105.312L456.5 104.75L456.5 93.6562L455.938 93.0938ZM468.125 93.0938L467.562 93.6562L467.562 104.75L468.125 105.312L468.125 93.0938ZM475.344 93.0938L475.344 105.312L475.906 104.75L475.906 93.6562L475.344 93.0938ZM487.531 93.0938L486.969 93.6562L486.969 104.75L487.531 105.312L487.531 93.0938ZM494.75 93.0938L494.75 105.312L495.312 104.75L495.312 93.6562L494.75 93.0938ZM382.188 96.9688L382.188 101.438L382.75 100.844L382.75 97.5312L382.188 96.9688ZM386.625 96.9688L386.062 97.5312L386.062 100.844L386.625 101.438L386.625 96.9688ZM401.594 96.9688L401.594 101.438L402.156 100.844L402.156 97.5312L401.594 96.9688ZM406.031 96.9688L405.469 97.5312L405.469 100.844L406.031 101.438L406.031 96.9688ZM421 96.9688L421 101.438L421.562 100.844L421.562 97.5312L421 96.9688ZM425.438 96.9688L424.875 97.5312L424.875 100.844L425.438 101.438L425.438 96.9688ZM440.406 96.9688L440.406 101.438L440.969 100.844L440.969 97.5312L440.406 96.9688ZM444.844 96.9688L444.281 97.5312L444.281 100.844L444.844 101.438L444.844 96.9688ZM459.812 96.9688L459.812 101.438L460.375 100.844L460.375 97.5312L459.812 96.9688ZM464.25 96.9688L463.688 97.5312L463.688 100.844L464.25 101.438L464.25 96.9688ZM479.219 96.9688L479.219 101.438L479.781 100.844L479.781 97.5312L479.219 96.9688ZM483.656 96.9688L483.094 97.5312L483.094 100.844L483.656 101.438L483.656 96.9688ZM381.062 102.562L380 103.594L380 114.219L381.062 115.25L381.062 102.562ZM387.781 102.562L387.781 115.25L388.812 114.219L388.812 103.594L387.781 102.562ZM400.438 102.562L399.406 103.594L399.406 114.219L400.438 115.25L400.438 102.562ZM407.156 102.562L407.156 115.25L408.219 114.219L408.219 103.594L407.156 102.562ZM419.875 102.562L418.812 103.594L418.812 114.219L419.875 115.25L419.875 102.562ZM426.594 102.562L426.594 115.25L427.625 114.219L427.625 103.594L426.594 102.562ZM439.25 102.562L438.219 103.594L438.219 114.219L439.25 115.25L439.25 102.562ZM445.969 102.562L445.969 115.25L447.031 114.219L447.031 103.594L445.969 102.562ZM458.688 102.562L457.625 103.594L457.625 114.219L458.688 115.25L458.688 102.562ZM465.406 102.562L465.406 115.25L466.438 114.219L466.438 103.594L465.406 102.562ZM478.062 102.562L477.031 103.594L477.031 114.219L478.062 115.25L478.062 102.562ZM484.781 102.562L484.781 115.25L485.844 114.219L485.844 103.594L484.781 102.562ZM377.156 106.438L376.875 106.719L377.094 108.906L377.156 109.5L377.156 106.438ZM391.656 106.438L391.656 111.375L392.688 110.312L392.688 107.5L391.656 106.438ZM396.562 106.438L395.531 107.5L395.531 110.312L396.562 111.375L396.562 106.438ZM411.062 106.438L411.062 111.375L412.094 110.312L412.094 107.5L411.062 106.438ZM415.969 106.438L414.938 107.5L414.938 110.312L415.969 111.375L415.969 106.438ZM430.469 106.438L430.469 111.375L431.5 110.312L431.5 107.5L430.469 106.438ZM435.375 106.438L434.344 107.5L434.344 110.312L435.375 111.375L435.375 106.438ZM449.875 106.438L449.875 111.375L450.906 110.312L450.906 107.5L449.875 106.438ZM454.781 106.438L453.75 107.5L453.75 110.312L454.781 111.375L454.781 106.438ZM469.281 106.438L469.281 111.375L470.312 110.312L470.312 107.5L469.281 106.438ZM474.188 106.438L473.156 107.5L473.156 110.312L474.188 111.375L474.188 106.438ZM488.688 106.438L488.688 111.375L489.719 110.312L489.719 107.5L488.688 106.438ZM493.594 106.438L492.562 107.5L492.562 110.312L493.594 111.375L493.594 106.438ZM377.812 112.031L377.812 116.5L378.25 121.125L378.531 124.5L379.344 123.656L379.344 113.531L377.812 112.031ZM391 112.031L389.469 113.531L389.469 123.656L391 125.188L391 112.031ZM397.219 112.031L397.219 125.188L398.75 123.656L398.75 113.531L397.219 112.031ZM410.406 112.031L408.875 113.531L408.875 123.656L410.406 125.188L410.406 112.031ZM416.625 112.031L416.625 125.188L418.156 123.656L418.156 113.531L416.625 112.031ZM429.812 112.031L428.281 113.531L428.281 123.656L429.812 125.188L429.812 112.031ZM436.031 112.031L436.031 125.188L437.562 123.656L437.562 113.531L436.031 112.031ZM449.219 112.031L447.688 113.531L447.688 123.656L449.219 125.188L449.219 112.031ZM455.438 112.031L455.438 125.188L456.969 123.656L456.969 113.531L455.438 112.031ZM468.625 112.031L467.094 113.531L467.094 123.656L468.625 125.188L468.625 112.031ZM474.844 112.031L474.844 125.188L476.375 123.656L476.375 113.531L474.844 112.031ZM488.031 112.031L486.5 113.531L486.5 123.656L488.031 125.188L488.031 112.031ZM494.25 112.031L494.25 117.406L494.594 113.781L494.719 112.5L494.25 112.031ZM381.719 115.906L381.719 121.312L383.219 119.781L383.219 117.438L381.719 115.906ZM387.094 115.906L385.594 117.438L385.594 119.781L387.094 121.312L387.094 115.906ZM401.125 115.906L401.125 121.312L402.625 119.781L402.625 117.438L401.125 115.906ZM406.5 115.906L405 117.438L405 119.781L406.5 121.312L406.5 115.906ZM420.531 115.906L420.531 121.312L422.031 119.781L422.031 117.438L420.531 115.906ZM425.906 115.906L424.406 117.438L424.406 119.781L425.906 121.312L425.906 115.906ZM439.938 115.906L439.938 121.312L441.438 119.781L441.438 117.438L439.938 115.906ZM445.312 115.906L443.812 117.438L443.812 119.781L445.312 121.312L445.312 115.906ZM459.344 115.906L459.344 121.312L460.844 119.781L460.844 117.438L459.344 115.906ZM464.719 115.906L463.219 117.438L463.219 119.781L464.719 121.312L464.719 115.906ZM478.75 115.906L478.75 121.312L480.25 119.781L480.25 117.438L478.75 115.906ZM484.125 115.906L482.625 117.438L482.625 119.781L484.125 121.312L484.125 115.906ZM392.875 129.531L392.875 146.5L391.469 145.062L391.469 130.969L392.875 129.531ZM395.344 129.531L396.75 130.969L396.75 145.062L395.344 146.5L395.344 129.531ZM412.281 129.531L412.281 146.5L410.875 145.062L410.875 130.969L412.281 129.531ZM414.75 129.531L416.156 130.969L416.156 145.062L414.75 146.5L414.75 129.531ZM431.688 129.531L431.688 146.5L430.281 145.062L430.281 130.969L431.688 129.531ZM434.156 129.531L435.562 130.969L435.562 145.062L434.156 146.5L434.156 129.531ZM451.094 129.531L451.094 146.5L449.688 145.062L449.688 130.969L451.094 129.531ZM453.562 129.531L454.969 130.969L454.969 145.062L453.562 146.5L453.562 129.531ZM470.5 129.531L470.5 146.5L469.094 145.062L469.094 130.969L470.5 129.531ZM472.969 129.531L474.375 130.969L474.375 145.062L472.969 146.5L472.969 129.531ZM489.906 129.531L489.906 146.469L488.5 145.062L488.5 130.969L489.906 129.531ZM379.812 133.406L381.25 134.844L381.25 141.188L379.812 142.594L379.812 133.406ZM399.219 133.406L400.656 134.844L400.656 141.188L399.219 142.594L399.219 133.406ZM418.625 133.406L420.062 134.844L420.062 141.188L418.625 142.594L418.625 133.406ZM438.031 133.406L439.438 134.844L439.438 141.188L438.031 142.594L438.031 133.406ZM457.438 133.406L458.875 134.844L458.875 141.188L457.438 142.594L457.438 133.406ZM476.844 133.406L478.281 134.844L478.281 141.188L476.844 142.594L476.844 133.406ZM389 133.438L389 142.594L387.594 141.188L387.594 134.844L389 133.438ZM408.406 133.438L408.406 142.594L407 141.188L407 134.844L408.406 133.438ZM427.812 133.438L427.812 142.594L426.375 141.188L426.375 134.844L427.812 133.438ZM447.219 133.438L447.219 142.594L445.812 141.188L445.812 134.844L447.219 133.438ZM466.625 133.438L466.625 142.594L465.219 141.188L465.219 134.844L466.625 133.438ZM486.031 133.438L486.031 142.594L484.625 141.188L484.625 134.844L486.031 133.438ZM383.688 137.312L384.406 138L385.125 137.312L385.125 138.719L384.406 138L383.688 138.719L383.688 137.312ZM403.094 137.312L403.812 138L404.531 137.312L404.531 138.719L403.812 138L403.094 138.719L403.094 137.312ZM422.5 137.312L423.219 138L423.938 137.312L423.938 138.719L423.219 138L422.5 138.719L422.5 137.312ZM441.906 137.312L442.625 138L443.344 137.312L443.344 138.719L442.625 138L441.906 138.719L441.906 137.312ZM461.312 137.312L462.031 138L462.75 137.312L462.75 138.719L462.031 138L461.312 138.719L461.312 137.312ZM480.719 137.312L481.438 138L482.156 137.312L482.156 138.719L481.438 138L480.719 138.719L480.719 137.312ZM382.938 139.469L382.938 155.938L382 155L382 140.438L382.938 139.469ZM385.875 139.469L386.812 140.438L386.812 155L385.875 155.938L385.875 139.469ZM402.344 139.469L402.344 155.938L401.406 155L401.406 140.438L402.344 139.469ZM405.281 139.469L406.219 140.438L406.219 155L405.281 155.938L405.281 139.469ZM421.75 139.469L421.75 155.938L420.812 155L420.812 140.438L421.75 139.469ZM424.688 139.469L425.625 140.438L425.625 155L424.688 155.938L424.688 139.469ZM441.156 139.469L441.156 155.938L440.219 155L440.219 140.438L441.156 139.469ZM444.094 139.469L445.031 140.438L445.031 155L444.094 155.938L444.094 139.469ZM460.562 139.469L460.562 155.938L459.625 155L459.625 140.438L460.562 139.469ZM463.5 139.469L464.438 140.438L464.438 155L463.5 155.938L463.5 139.469ZM479.969 139.469L479.969 155.938L479.031 155L479.031 140.438L479.969 139.469ZM482.906 139.469L483.844 140.438L483.844 155L482.906 155.938L482.906 139.469ZM389.75 143.375L390.688 144.312L390.688 151.125L389.75 152.062L389.75 143.375ZM398.469 143.375L398.469 152.062L397.531 151.125L397.531 144.312L398.469 143.375ZM409.156 143.375L410.094 144.312L410.094 151.125L409.156 152.062L409.156 143.375ZM417.875 143.375L417.875 152.062L416.938 151.125L416.938 144.312L417.875 143.375ZM428.562 143.375L429.5 144.312L429.5 151.125L428.562 152.062L428.562 143.375ZM437.281 143.375L437.281 152.062L436.344 151.125L436.344 144.312L437.281 143.375ZM447.969 143.375L448.906 144.312L448.906 151.125L447.969 152.062L447.969 143.375ZM456.688 143.375L456.688 152.062L455.75 151.125L455.75 144.312L456.688 143.375ZM467.375 143.375L468.312 144.312L468.312 151.125L467.375 152.062L467.375 143.375ZM476.094 143.375L476.094 152.062L475.156 151.125L475.156 144.312L476.094 143.375ZM486.781 143.375L487.719 144.312L487.719 151.125L486.781 152.062L486.781 143.375ZM393.625 147.25L394.125 147.719L394.594 147.25L394.594 148.188L394.125 147.719L393.625 148.188L393.625 147.25ZM413.031 147.25L413.531 147.719L414 147.25L414 148.188L413.531 147.719L413.031 148.188L413.031 147.25ZM432.438 147.25L432.938 147.719L433.406 147.25L433.406 148.188L432.938 147.719L432.438 148.188L432.438 147.25ZM451.844 147.25L452.344 147.719L452.812 147.25L452.812 148.188L452.344 147.719L451.844 148.188L451.844 147.25ZM471.25 147.25L471.75 147.719L472.219 147.25L472.219 148.188L471.75 147.719L471.25 148.188L471.25 147.25ZM490.656 147.25L491.156 147.719L491.625 147.25L491.625 148.188L491.156 147.719L490.656 148.188L490.656 147.25ZM392.406 149.406L392.406 165.406L391.938 164.938L391.938 149.906L392.406 149.406ZM395.812 149.406L396.281 149.906L396.281 164.938L395.812 165.406L395.812 149.406ZM411.812 149.406L411.812 165.406L411.344 164.938L411.344 149.906L411.812 149.406ZM415.219 149.406L415.688 149.906L415.688 164.938L415.219 165.406L415.219 149.406ZM431.219 149.406L431.219 165.406L430.75 164.938L430.75 149.906L431.219 149.406ZM434.625 149.406L435.094 149.906L435.094 164.938L434.625 165.406L434.625 149.406ZM450.625 149.406L450.625 165.406L450.156 164.938L450.156 149.906L450.625 149.406ZM454.031 149.406L454.5 149.906L454.5 164.938L454.031 165.406L454.031 149.406ZM470.031 149.406L470.031 165.406L469.562 164.938L469.562 149.906L470.031 149.406ZM473.438 149.406L473.906 149.906L473.906 164.938L473.438 165.406L473.438 149.406ZM489.438 149.406L489.438 165.406L488.969 164.938L488.969 149.906L489.438 149.406ZM380.281 153.312L380.75 153.781L380.75 161.062L380.281 161.531L380.281 153.312ZM388.531 153.312L388.531 161.531L388.062 161.062L388.062 153.781L388.531 153.312ZM399.688 153.312L400.156 153.781L400.156 161.062L399.688 161.531L399.688 153.312ZM407.938 153.312L407.938 161.531L407.469 161.062L407.469 153.781L407.938 153.312ZM419.094 153.312L419.562 153.781L419.562 161.062L419.094 161.531L419.094 153.312ZM427.344 153.312L427.344 161.531L426.875 161.062L426.875 153.781L427.344 153.312ZM438.5 153.312L438.969 153.781L438.969 161.062L438.5 161.531L438.5 153.312ZM446.75 153.312L446.75 161.531L446.281 161.062L446.281 153.781L446.75 153.312ZM457.906 153.312L458.375 153.781L458.375 161.062L457.906 161.531L457.906 153.312ZM466.156 153.312L466.156 161.531L465.688 161.062L465.688 153.781L466.156 153.312ZM477.312 153.312L477.781 153.781L477.781 161.062L477.312 161.531L477.312 153.312ZM485.562 153.312L485.562 161.531L485.094 161.062L485.094 153.781L485.562 153.312ZM384.156 157.188L384.406 157.406L384.656 157.188L384.656 157.656L384.406 157.406L384.156 157.656L384.156 157.188ZM403.562 157.188L403.812 157.406L404.062 157.188L404.062 157.656L403.812 157.406L403.562 157.656L403.562 157.188ZM422.969 157.188L423.219 157.406L423.469 157.188L423.469 157.656L423.219 157.406L422.969 157.656L422.969 157.188ZM442.375 157.188L442.625 157.406L442.875 157.188L442.875 157.656L442.625 157.406L442.375 157.656L442.375 157.188ZM461.781 157.188L462.031 157.406L462.281 157.188L462.281 157.656L462.031 157.406L461.781 157.656L461.781 157.188ZM481.188 157.188L481.438 157.406L481.688 157.188L481.688 157.656L481.438 157.406L481.188 157.656L481.188 157.188ZM382.688 159.125L382.688 175.125L382.219 174.656L382.219 159.594L382.688 159.125ZM386.125 159.125L386.594 159.594L386.594 174.656L386.125 175.094L386.125 159.125ZM402.094 159.125L402.094 175.125L401.625 174.656L401.625 159.594L402.094 159.125ZM405.531 159.125L406 159.594L406 174.656L405.531 175.125L405.531 159.125ZM421.5 159.125L421.5 175.125L421.031 174.656L421.031 159.594L421.5 159.125ZM424.938 159.125L425.406 159.594L425.406 174.656L424.938 175.094L424.938 159.125ZM440.938 159.125L440.938 175.125L440.438 174.656L440.438 159.594L440.938 159.125ZM444.344 159.125L444.812 159.594L444.812 174.656L444.344 175.125L444.344 159.125ZM460.312 159.125L460.312 175.125L459.844 174.656L459.844 159.594L460.312 159.125ZM463.75 159.125L464.219 159.594L464.219 174.656L463.75 175.094L463.75 159.125ZM479.75 159.125L479.75 175.125L479.25 174.656L479.25 159.594L479.75 159.125ZM483.156 159.125L483.625 159.594L483.625 174.656L483.156 175.125L483.156 159.125ZM390 163L390.469 163.469L390.469 170.75L390 171.219L390 163ZM398.219 163L398.219 171.25L397.75 170.75L397.75 163.469L398.219 163ZM409.406 163L409.875 163.469L409.875 170.75L409.406 171.25L409.406 163ZM417.625 163L417.625 171.25L417.156 170.75L417.156 163.469L417.625 163ZM428.812 163L429.281 163.469L429.281 170.75L428.812 171.219L428.812 163ZM437.031 163L437.031 171.25L436.562 170.75L436.562 163.469L437.031 163ZM448.219 163L448.688 163.469L448.688 170.75L448.219 171.25L448.219 163ZM456.438 163L456.438 171.25L455.969 170.75L455.969 163.469L456.438 163ZM467.625 163L468.094 163.469L468.094 170.75L467.625 171.219L467.625 163ZM475.844 163L475.844 171.25L475.375 170.781L475.375 163.469L475.844 163ZM487.031 163L487.5 163.469L487.5 170.781L487.031 171.25L487.031 163ZM393.875 166.875L394.125 167.125L394.344 166.906L394.344 167.344L394.125 167.125L393.875 167.344L393.875 166.875ZM413.281 166.875L413.5 167.125L413.281 167.344L413.281 166.875ZM413.75 166.875L413.75 167.344L413.531 167.125L413.75 166.875ZM432.688 166.875L432.938 167.125L433.156 166.906L433.156 167.344L432.938 167.125L432.688 167.344L432.688 166.875ZM452.094 166.875L452.344 167.125L452.562 166.875L452.562 167.344L452.344 167.125L452.094 167.344L452.094 166.875ZM471.5 166.875L471.75 167.125L471.969 166.906L471.969 167.344L471.75 167.125L471.5 167.344L471.5 166.875ZM490.906 166.875L491.125 167.125L490.906 167.344L490.906 166.875ZM491.375 166.875L491.375 167.344L491.156 167.125L491.375 166.875ZM392.656 168.594L392.656 185.062L391.688 184.125L391.688 169.531L392.656 168.594ZM395.562 168.594L396.531 169.531L396.531 184.125L395.562 185.062L395.562 168.594ZM412.062 168.594L412.062 185.062L411.094 184.125L411.094 169.531L412.062 168.594ZM414.969 168.594L415.938 169.531L415.938 184.125L414.969 185.062L414.969 168.594ZM431.469 168.594L431.469 185.062L430.5 184.125L430.5 169.531L431.469 168.594ZM434.406 168.594L435.344 169.531L435.344 184.125L434.406 185.062L434.406 168.594ZM450.875 168.594L450.875 185.062L449.906 184.125L449.906 169.531L450.875 168.594ZM453.781 168.594L454.75 169.531L454.75 184.125L453.781 185.062L453.781 168.594ZM470.281 168.594L470.281 185.062L469.312 184.125L469.312 169.531L470.281 168.594ZM473.188 168.594L474.156 169.531L474.156 184.125L473.188 185.062L473.188 168.594ZM489.688 168.594L489.688 185.062L488.719 184.125L488.719 169.531L489.688 168.594ZM399.469 172.469L400.406 173.406L400.406 180.219L399.469 181.188L399.469 172.469ZM408.156 172.469L408.156 181.188L407.219 180.219L407.219 173.406L408.156 172.469ZM418.875 172.469L419.812 173.406L419.812 180.219L418.875 181.188L418.875 172.469ZM438.281 172.469L439.219 173.406L439.219 180.219L438.281 181.188L438.281 172.469ZM446.969 172.469L446.969 181.188L446.031 180.219L446.031 173.406L446.969 172.469ZM457.688 172.469L458.625 173.406L458.625 180.219L457.688 181.188L457.688 172.469ZM477.094 172.469L478.031 173.406L478.031 180.219L477.094 181.188L477.094 172.469ZM485.781 172.469L485.781 181.188L484.844 180.219L484.844 173.406L485.781 172.469ZM388.75 172.5L388.75 181.156L387.812 180.219L387.812 173.406L388.75 172.5ZM427.562 172.5L427.562 181.156L426.625 180.219L426.625 173.406L427.562 172.5ZM466.375 172.5L466.375 181.156L465.438 180.219L465.438 173.406L466.375 172.5ZM383.938 176.344L384.406 176.812L384.875 176.344L384.875 177.281L384.406 176.812L383.938 177.281L383.938 176.344ZM403.344 176.344L403.812 176.812L404.281 176.344L404.281 177.281L403.812 176.812L403.344 177.281L403.344 176.344ZM422.75 176.344L423.219 176.812L423.688 176.344L423.688 177.281L423.219 176.812L422.75 177.281L422.75 176.344ZM442.156 176.344L442.625 176.812L443.094 176.344L443.094 177.281L442.625 176.812L442.156 177.281L442.156 176.344ZM461.562 176.344L462.031 176.812L462.5 176.344L462.5 177.281L462.031 176.812L461.562 177.281L461.562 176.344ZM480.969 176.344L481.438 176.812L481.906 176.344L481.906 177.312L481.438 176.812L480.969 177.312L480.969 176.344ZM383.188 178.062L383.188 195L381.75 193.594L381.75 179.469L383.188 178.062ZM385.625 178.062L387.062 179.469L387.062 193.594L385.625 195L385.625 178.062ZM402.594 178.062L402.594 195L401.156 193.594L401.156 179.469L402.594 178.062ZM405.031 178.062L406.469 179.469L406.469 193.594L405.031 195L405.031 178.062ZM422 178.062L422 195L420.562 193.594L420.562 179.469L422 178.062ZM424.438 178.062L425.875 179.469L425.875 193.594L424.438 195L424.438 178.062ZM441.406 178.062L441.406 195L439.969 193.594L439.969 179.469L441.406 178.062ZM443.844 178.062L445.281 179.469L445.281 193.594L443.844 195L443.844 178.062ZM460.812 178.062L460.812 195L459.375 193.594L459.375 179.469L460.812 178.062ZM463.25 178.062L464.688 179.469L464.688 193.594L463.25 195L463.25 178.062ZM480.219 178.062L480.219 195L478.781 193.594L478.781 179.469L480.219 178.062ZM482.656 178.062L484.094 179.469L484.094 193.594L482.656 195L482.656 178.062ZM398.688 181.938L398.688 191.125L397.281 189.688L397.281 183.344L398.688 181.938ZM408.938 181.938L410.344 183.344L410.344 189.688L408.938 191.125L408.938 181.938ZM418.094 181.938L418.094 191.125L416.688 189.688L416.688 183.344L418.094 181.938ZM437.5 181.938L437.5 191.125L436.094 189.688L436.094 183.344L437.5 181.938ZM447.75 181.938L449.156 183.344L449.156 189.688L447.75 191.125L447.75 181.938ZM456.906 181.938L456.906 191.125L455.5 189.688L455.5 183.344L456.906 181.938ZM476.312 181.938L476.312 191.125L474.906 189.688L474.906 183.344L476.312 181.938ZM486.562 181.938L487.969 183.344L487.969 189.688L486.562 191.125L486.562 181.938ZM389.531 181.969L390.938 183.375L390.938 189.688L389.531 191.125L389.531 181.969ZM428.344 181.969L429.75 183.375L429.75 189.688L428.344 191.125L428.344 181.969ZM467.156 181.969L468.562 183.375L468.562 189.688L467.156 191.125L467.156 181.969ZM393.406 185.812L394.125 186.531L394.812 185.812L394.812 187.25L394.125 186.531L393.406 187.25L393.406 185.812ZM412.812 185.812L413.5 186.531L414.219 185.812L414.219 187.25L413.5 186.531L412.812 187.25L412.812 185.812ZM432.219 185.812L432.938 186.531L433.625 185.812L433.625 187.25L432.938 186.531L432.219 187.25L432.219 185.812ZM451.625 185.812L452.344 186.531L453.031 185.812L453.031 187.25L452.344 186.531L451.625 187.25L451.625 185.812ZM471.031 185.812L471.75 186.531L472.438 185.812L472.438 187.25L471.75 186.531L471.031 187.25L471.031 185.812ZM490.438 185.812L491.125 186.531L491.844 185.812L491.844 187.25L491.125 186.531L490.438 187.25L490.438 185.812ZM381.281 199.344L380.031 200.625L380 211.219L381.281 212.5L381.281 199.344ZM387.531 199.344L387.531 212.5L389.031 211L389.031 200.875L387.531 199.344ZM400.688 199.344L399.188 200.875L399.188 211L400.688 212.5L400.688 199.344ZM406.938 199.344L406.938 212.5L408.438 211L408.438 200.875L406.938 199.344ZM420.094 199.344L418.594 200.875L418.594 211L420.094 212.5L420.094 199.344ZM426.344 199.344L426.344 212.5L427.844 211L427.844 200.875L426.344 199.344ZM439.5 199.344L438 200.875L438 211L439.5 212.5L439.5 199.344ZM445.75 199.344L445.75 212.5L447.281 211L447.281 200.875L445.75 199.344ZM458.906 199.344L457.406 200.875L457.406 211L458.906 212.5L458.906 199.344ZM465.156 199.344L465.156 212.5L466.656 211L466.656 200.875L465.156 199.344ZM478.312 199.344L476.812 200.875L476.812 211L478.312 212.5L478.312 199.344ZM484.562 199.344L484.562 212.5L486.062 211L486.062 200.875L484.562 199.344ZM391.406 203.219L391.406 208.625L392.938 207.125L392.938 204.75L391.406 203.219ZM396.812 203.219L395.281 204.75L395.281 207.125L396.812 208.625L396.812 203.219ZM410.812 203.219L410.812 208.625L412.344 207.125L412.344 204.75L410.812 203.219ZM416.219 203.219L414.688 204.75L414.688 207.125L416.219 208.625L416.219 203.219ZM430.219 203.219L430.219 208.625L431.75 207.125L431.75 204.75L430.219 203.219ZM435.625 203.219L434.094 204.75L434.094 207.125L435.625 208.625L435.625 203.219ZM449.625 203.219L449.625 208.625L451.156 207.125L451.156 204.75L449.625 203.219ZM455.031 203.219L453.5 204.75L453.5 207.125L455.031 208.625L455.031 203.219ZM469.031 203.219L469.031 208.625L470.562 207.125L470.562 204.75L469.031 203.219ZM474.438 203.219L472.906 204.75L472.906 207.125L474.438 208.625L474.438 203.219ZM488.438 203.219L488.438 208.625L489.969 207.125L489.969 204.75L488.438 203.219ZM390.75 209.281L389.719 210.344L389.719 220.938L390.75 221.969L390.75 209.281ZM397.469 209.281L397.469 221.969L398.5 220.938L398.5 210.344L397.469 209.281ZM410.156 209.281L409.125 210.344L409.125 220.938L410.156 221.969L410.156 209.281ZM416.875 209.281L416.875 221.969L417.906 220.938L417.906 210.344L416.875 209.281ZM429.562 209.281L428.531 210.344L428.531 220.938L429.562 221.969L429.562 209.281ZM436.281 209.281L436.281 221.969L437.312 220.938L437.312 210.344L436.281 209.281ZM448.969 209.281L447.938 210.344L447.938 220.938L448.969 221.969L448.969 209.281ZM455.688 209.281L455.688 221.969L456.719 220.938L456.719 210.344L455.688 209.281ZM468.375 209.281L467.344 210.344L467.344 220.938L468.375 221.969L468.375 209.281ZM475.094 209.281L475.094 221.969L476.125 220.938L476.125 210.344L475.094 209.281ZM487.781 209.281L486.75 210.344L486.75 220.938L487.781 221.969L487.781 209.281ZM381.938 213.188L381.938 218.094L383 217.062L383 214.219L381.938 213.188ZM386.875 213.188L385.812 214.219L385.812 217.062L386.875 218.094L386.875 213.188ZM401.344 213.188L401.344 218.094L402.406 217.062L402.406 214.219L401.344 213.188ZM406.281 213.188L405.219 214.219L405.219 217.062L406.281 218.094L406.281 213.188ZM420.75 213.188L420.75 218.094L421.812 217.062L421.812 214.219L420.75 213.188ZM425.688 213.188L424.625 214.219L424.625 217.062L425.688 218.094L425.688 213.188ZM440.156 213.188L440.156 218.094L441.219 217.062L441.219 214.219L440.156 213.188ZM445.094 213.188L444.031 214.219L444.031 217.062L445.094 218.094L445.094 213.188ZM459.562 213.188L459.562 218.094L460.625 217.062L460.625 214.219L459.562 213.188ZM464.5 213.188L463.438 214.219L463.438 217.062L464.5 218.094L464.5 213.188ZM478.969 213.188L478.969 218.094L480.031 217.062L480.031 214.219L478.969 213.188ZM483.906 213.188L482.844 214.219L482.844 217.062L483.906 218.094L483.906 213.188ZM380.812 219.219L380.25 219.812L380.25 228.562L380.812 228.656L380.812 219.219ZM388 219.219L388 230L388.562 230.125L388.562 219.812L388 219.219ZM400.219 219.219L399.656 219.812L399.656 230.875L400.219 231.438L400.219 219.219ZM407.406 219.219L407.406 231.438L407.969 230.875L407.969 219.812L407.406 219.219ZM419.625 219.219L419.062 219.812L419.062 230.875L419.625 231.438L419.625 219.219ZM426.812 219.219L426.812 231.438L427.375 230.875L427.375 219.812L426.812 219.219ZM439.031 219.219L438.469 219.812L438.469 230.875L439.031 231.438L439.031 219.219ZM446.219 219.219L446.219 231.438L446.781 230.875L446.781 219.812L446.219 219.219ZM458.438 219.219L457.875 219.812L457.875 230.875L458.438 231.438L458.438 219.219ZM465.625 219.219L465.625 231.438L466.188 230.875L466.188 219.812L465.625 219.219ZM477.844 219.219L477.281 219.812L477.281 230.875L477.688 231.312L477.844 231.281L477.844 219.219ZM485.031 219.219L485.031 229.844L485.594 229.719L485.594 219.812L485.031 219.219ZM391.875 223.125L391.875 227.562L392.469 227L392.469 223.688L391.875 223.125ZM396.344 223.125L395.781 223.688L395.781 227L396.344 227.562L396.344 223.125ZM411.281 223.125L411.281 227.562L411.875 227L411.875 223.688L411.281 223.125ZM415.75 223.125L415.156 223.688L415.156 227L415.75 227.562L415.75 223.125ZM430.688 223.125L430.688 227.562L431.25 227L431.25 223.688L430.688 223.125ZM435.156 223.125L434.594 223.688L434.594 227L435.156 227.562L435.156 223.125ZM450.094 223.125L450.094 227.562L450.688 227L450.688 223.688L450.094 223.125ZM454.562 223.125L453.969 223.688L453.969 227L454.562 227.562L454.562 223.125ZM469.5 223.125L469.5 227.562L470.094 227L470.094 223.688L469.5 223.125ZM473.969 223.125L473.406 223.688L473.406 227L473.969 227.562L473.969 223.125ZM488.906 223.125L488.906 227.562L489.5 227L489.5 223.688L488.906 223.125ZM492.781 226L492.781 227L493.031 227.25L492.781 226ZM390.281 229.156L390.188 229.281L390.188 230.438L390.281 230.469L390.281 229.156ZM397.938 229.156L397.938 231.969L398.031 232L398.031 229.281L397.938 229.156ZM409.688 229.156L409.594 229.281L409.594 234.031L409.688 234.031L409.688 229.156ZM417.344 229.156L417.344 235L417.438 235L417.438 229.281L417.344 229.156ZM429.094 229.156L429 229.281L429 235.594L429.094 235.594L429.094 229.156ZM436.75 229.156L436.75 235.625L436.844 235.625L436.844 229.281L436.75 229.156ZM448.5 229.156L448.406 229.281L448.406 235.375L448.5 235.375L448.5 229.156ZM456.156 229.156L456.156 234.812L456.25 234.812L456.25 229.281L456.156 229.156ZM467.906 229.156L467.812 229.281L467.812 233.188L467.906 233.156L467.906 229.156ZM475.562 229.156L475.562 231.719L475.656 231.719L475.656 229.281L475.562 229.156ZM487.312 229.156L487.219 229.281L487.219 229.406L487.312 229.375L487.312 229.156ZM405.812 233.062L405.719 233.156L405.719 233.406L405.812 233.438L405.812 233.062ZM421.219 233.062L421.219 235.312L421.312 235.312L421.312 233.156L421.219 233.062ZM425.219 233.062L425.125 233.156L425.125 235.5L425.219 235.5L425.219 233.062ZM440.625 233.062L440.625 235.594L440.719 235.594L440.719 233.156L440.625 233.062ZM444.625 233.062L444.531 233.156L444.531 235.531L444.625 235.531L444.625 233.062ZM460.031 233.062L460.031 234.375L460.125 234.344L460.125 233.156L460.031 233.062ZM464.031 233.062L463.938 233.156L463.938 233.812L464.031 233.812L464.031 233.062Z" fill="#75b6d2" fill-rule="evenodd" opacity="1" stroke="none"/></g></g> </svg> ';
fabric.loadSVGFromString(MenONeckDesign7Svg, function(objects, options) {
	for (let i = 0; i < objects.length; i++){
		let obj = objects[i];
		MenONeckDesign7SvgGroup.addWithUpdate(obj)
	} 
});

MenONeckDesign7SvgGroup.set({ 
	lockMovementX:true,
	lockMovementY:true,
	lockScalingX:true,
	lockScalingY:true,
	lockRotation:true,
	hasControls:false,
	hasBorders:false,
	selectable: false,
	fixed: true,
})
//#engregion Design7





//#logoss

 MenONeckLogoFrontSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="2560" height="1920"> <g transform="matrix(2.8317 0 0 2.8317 -0 0)" id="MenONeckDesign1FrontLogo"> <path d="M154.594 73.5C153.645 73.7943 152.727 74.421 152.062 75.3438C153.51 73.8207 155.68 73.8403 156.594 74.6562C157.58 75.5362 157.656 77.1552 156.688 77.9062C153.232 80.5803 153.295 76.8115 154.938 75.5625C154.938 75.5625 153.315 75.0493 152.094 76.0312C150.587 77.2433 150.653 80.799 154.344 80.375C156.489 80.128 157.642 78.0312 158.906 79.2812C160.664 74.5645 157.441 72.6171 154.594 73.5ZM155.75 81.2188C155.655 81.2188 155.588 81.2495 155.531 81.3125C155.474 81.3745 155.437 81.4483 155.438 81.5312C155.438 81.6153 155.474 81.687 155.531 81.75C155.588 81.813 155.655 81.8438 155.75 81.8438C155.845 81.8438 155.943 81.813 156 81.75C156.057 81.687 156.063 81.6153 156.062 81.5312C156.062 81.4483 156.058 81.3745 156 81.3125C155.941 81.2495 155.842 81.2188 155.75 81.2188ZM153.75 81.375L153.75 82.0625L153.656 82.0625L153.344 82.0625L153.031 82.0625C152.693 82.0625 152.43 82.1243 152.25 82.2812C152.07 82.4392 151.969 82.6525 151.969 82.9375L151.969 84.2188L152.562 84.2188L152.562 82.9375C152.562 82.7365 152.619 82.602 152.719 82.5C152.82 82.399 152.967 82.3438 153.156 82.3438L153.344 82.3438L153.656 82.3438L153.75 82.3438L153.75 83.4375C153.75 83.7115 153.83 83.9065 154 84.0625C154.17 84.2185 154.404 84.3125 154.719 84.3125C154.825 84.3125 154.954 84.3082 155.062 84.2812C155.169 84.2522 155.26 84.1983 155.344 84.1562L155.219 83.9062C155.166 83.9373 155.109 83.9428 155.031 83.9688C154.953 83.9958 154.864 84.0313 154.781 84.0312C154.722 84.0312 154.647 84.023 154.594 84C154.541 83.978 154.51 83.921 154.469 83.875C154.429 83.829 154.399 83.7615 154.375 83.6875C154.351 83.6135 154.344 83.5445 154.344 83.4375L154.344 82.3438L154.969 82.3438L154.969 82.0625L154.344 82.0625L154.344 81.375L153.75 81.375ZM150.656 81.9688C150.589 81.9688 150.546 81.989 150.469 82C150.392 82.011 150.297 82.0102 150.219 82.0312C150.141 82.0523 150.074 82.094 150 82.125C149.926 82.155 149.842 82.1777 149.781 82.2188L149.938 82.4688C150.032 82.4048 150.13 82.3505 150.25 82.3125C150.37 82.2755 150.499 82.25 150.625 82.25C150.792 82.25 150.927 82.3112 151.031 82.4062C151.136 82.5013 151.188 82.6438 151.188 82.8438L150.594 82.8438C150.215 82.8438 149.96 82.9162 149.781 83.0312C149.601 83.1453 149.5 83.2992 149.5 83.5312C149.5 83.7623 149.601 83.9485 149.781 84.0625C149.96 84.1775 150.215 84.2188 150.594 84.2188L151.781 84.2188L151.781 82.8438C151.781 82.7127 151.768 82.607 151.719 82.5C151.67 82.393 151.595 82.2967 151.5 82.2188C151.405 82.1408 151.292 82.0733 151.156 82.0312C151.019 81.9892 150.834 81.9687 150.656 81.9688ZM150.594 83.125L151.188 83.125L151.188 83.9375L150.594 83.9375C150.273 83.9375 150.125 83.7962 150.125 83.5312C150.125 83.2663 150.273 83.125 150.594 83.125ZM159.719 81.9688C159.653 81.9688 159.577 81.989 159.5 82C159.423 82.011 159.359 82.0102 159.281 82.0312C159.203 82.0523 159.136 82.094 159.062 82.125C158.988 82.155 158.905 82.1777 158.844 82.2188L159 82.4688C159.095 82.4048 159.192 82.3505 159.312 82.3125C159.433 82.2755 159.562 82.25 159.688 82.25C159.854 82.25 159.99 82.3112 160.094 82.4062C160.199 82.5013 160.25 82.6438 160.25 82.8438L159.656 82.8438C159.277 82.8438 159.023 82.9162 158.844 83.0312C158.664 83.1453 158.562 83.2992 158.562 83.5312C158.562 83.7623 158.664 83.9485 158.844 84.0625C159.023 84.1775 159.277 84.2188 159.656 84.2188L160.844 84.2188L160.844 82.8438C160.844 82.7127 160.799 82.607 160.75 82.5C160.701 82.393 160.657 82.2967 160.562 82.2188C160.468 82.1408 160.324 82.0733 160.188 82.0312C160.05 81.9892 159.898 81.9687 159.719 81.9688ZM159.656 83.125L160.25 83.125L160.25 83.9375L159.656 83.9375C159.335 83.9375 159.188 83.7962 159.188 83.5312C159.188 83.2663 159.335 83.125 159.656 83.125ZM155.469 82.0625L155.469 84.2188L156.062 84.2188L156.062 82.0625L155.469 82.0625ZM156.188 82.0625L157.031 84.2188L157.969 84.2188L158.781 82.0625L158.219 82.0625L157.5 83.875L157.469 83.875L156.781 82.0625L156.188 82.0625Z"/></g></svg>';

fabric.loadSVGFromString(MenONeckLogoFrontSVG, function(objects, options) {
	MenONeckLogoFront = fabric.util.groupSVGElements(objects, options);
	MenONeckLogoFront.set({
		fill:'black', strokeWidth:0.35,stroke: "white", paintFirst: "stroke",
		hasControls:false,
		hasBorders:false,
		selectable: false,
		fixed: true,
		//id: 'MenONeckLogoFrontID'
		})
	canvas1.add(MenONeckLogoFront).renderAll();
});
 





/* var MenONeckLogoFront2;
var MenONeckLogoFrontSVG2 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="MenONeckDesign1FrontLogo" > <path d="M154.594 73.5C153.645 73.7943 152.727 74.421 152.062 75.3438C153.51 73.8207 155.68 73.8403 156.594 74.6562C157.58 75.5362 157.656 77.1552 156.688 77.9062C153.232 80.5803 153.295 76.8115 154.938 75.5625C154.938 75.5625 153.315 75.0493 152.094 76.0312C150.587 77.2433 150.653 80.799 154.344 80.375C156.489 80.128 157.642 78.0312 158.906 79.2812C160.664 74.5645 157.441 72.6171 154.594 73.5ZM155.75 81.2188C155.655 81.2188 155.588 81.2495 155.531 81.3125C155.474 81.3745 155.437 81.4483 155.438 81.5312C155.438 81.6153 155.474 81.687 155.531 81.75C155.588 81.813 155.655 81.8438 155.75 81.8438C155.845 81.8438 155.943 81.813 156 81.75C156.057 81.687 156.063 81.6153 156.062 81.5312C156.062 81.4483 156.058 81.3745 156 81.3125C155.941 81.2495 155.842 81.2188 155.75 81.2188ZM153.75 81.375L153.75 82.0625L153.656 82.0625L153.344 82.0625L153.031 82.0625C152.693 82.0625 152.43 82.1243 152.25 82.2812C152.07 82.4392 151.969 82.6525 151.969 82.9375L151.969 84.2188L152.562 84.2188L152.562 82.9375C152.562 82.7365 152.619 82.602 152.719 82.5C152.82 82.399 152.967 82.3438 153.156 82.3438L153.344 82.3438L153.656 82.3438L153.75 82.3438L153.75 83.4375C153.75 83.7115 153.83 83.9065 154 84.0625C154.17 84.2185 154.404 84.3125 154.719 84.3125C154.825 84.3125 154.954 84.3082 155.062 84.2812C155.169 84.2522 155.26 84.1983 155.344 84.1562L155.219 83.9062C155.166 83.9373 155.109 83.9428 155.031 83.9688C154.953 83.9958 154.864 84.0313 154.781 84.0312C154.722 84.0312 154.647 84.023 154.594 84C154.541 83.978 154.51 83.921 154.469 83.875C154.429 83.829 154.399 83.7615 154.375 83.6875C154.351 83.6135 154.344 83.5445 154.344 83.4375L154.344 82.3438L154.969 82.3438L154.969 82.0625L154.344 82.0625L154.344 81.375L153.75 81.375ZM150.656 81.9688C150.589 81.9688 150.546 81.989 150.469 82C150.392 82.011 150.297 82.0102 150.219 82.0312C150.141 82.0523 150.074 82.094 150 82.125C149.926 82.155 149.842 82.1777 149.781 82.2188L149.938 82.4688C150.032 82.4048 150.13 82.3505 150.25 82.3125C150.37 82.2755 150.499 82.25 150.625 82.25C150.792 82.25 150.927 82.3112 151.031 82.4062C151.136 82.5013 151.188 82.6438 151.188 82.8438L150.594 82.8438C150.215 82.8438 149.96 82.9162 149.781 83.0312C149.601 83.1453 149.5 83.2992 149.5 83.5312C149.5 83.7623 149.601 83.9485 149.781 84.0625C149.96 84.1775 150.215 84.2188 150.594 84.2188L151.781 84.2188L151.781 82.8438C151.781 82.7127 151.768 82.607 151.719 82.5C151.67 82.393 151.595 82.2967 151.5 82.2188C151.405 82.1408 151.292 82.0733 151.156 82.0312C151.019 81.9892 150.834 81.9687 150.656 81.9688ZM150.594 83.125L151.188 83.125L151.188 83.9375L150.594 83.9375C150.273 83.9375 150.125 83.7962 150.125 83.5312C150.125 83.2663 150.273 83.125 150.594 83.125ZM159.719 81.9688C159.653 81.9688 159.577 81.989 159.5 82C159.423 82.011 159.359 82.0102 159.281 82.0312C159.203 82.0523 159.136 82.094 159.062 82.125C158.988 82.155 158.905 82.1777 158.844 82.2188L159 82.4688C159.095 82.4048 159.192 82.3505 159.312 82.3125C159.433 82.2755 159.562 82.25 159.688 82.25C159.854 82.25 159.99 82.3112 160.094 82.4062C160.199 82.5013 160.25 82.6438 160.25 82.8438L159.656 82.8438C159.277 82.8438 159.023 82.9162 158.844 83.0312C158.664 83.1453 158.562 83.2992 158.562 83.5312C158.562 83.7623 158.664 83.9485 158.844 84.0625C159.023 84.1775 159.277 84.2188 159.656 84.2188L160.844 84.2188L160.844 82.8438C160.844 82.7127 160.799 82.607 160.75 82.5C160.701 82.393 160.657 82.2967 160.562 82.2188C160.468 82.1408 160.324 82.0733 160.188 82.0312C160.05 81.9892 159.898 81.9687 159.719 81.9688ZM159.656 83.125L160.25 83.125L160.25 83.9375L159.656 83.9375C159.335 83.9375 159.188 83.7962 159.188 83.5312C159.188 83.2663 159.335 83.125 159.656 83.125ZM155.469 82.0625L155.469 84.2188L156.062 84.2188L156.062 82.0625L155.469 82.0625ZM156.188 82.0625L157.031 84.2188L157.969 84.2188L158.781 82.0625L158.219 82.0625L157.5 83.875L157.469 83.875L156.781 82.0625L156.188 82.0625Z"/></g></svg>';

fabric.loadSVGFromString(MenONeckLogoFrontSVG2, function(objects, options) {
	MenONeckLogoFront2 = fabric.util.groupSVGElements(objects, options);
	MenONeckLogoFront2.set({
		fill:'red', strokeWidth:0.35,stroke: "white", paintFirst: "stroke",
		hasControls:false,
		hasBorders:false,
		selectable: false,
		fixed: true, 
		//id: 'MenONeckLogoFrontID'
		left:334,
		top:161,
		scaleX:2.8,
		scaleY:2.8
		//334,161.79320529006793,2.85656356009448
		})
	canvas1.add(MenONeckLogoFront2).renderAll();
});
 */




MenONeckLogoBackSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="2560" height="1920"> <g transform="matrix(2.8317 0 0 2.8317 -0 0)"><g id="MenONeckDesign1BackLogo"> <path d="M428.469 33.2188C427.784 33.431 427.136 33.866 426.656 34.5312C427.699 33.4332 429.247 33.4745 429.906 34.0625C430.617 34.6975 430.699 35.8653 430 36.4062C427.51 38.3343 427.534 35.6187 428.719 34.7188C428.719 34.7188 427.568 34.3232 426.688 35.0312C425.601 35.9053 425.652 38.4935 428.313 38.1875C429.861 38.0095 430.683 36.474 431.594 37.375C432.861 33.9745 430.522 32.582 428.469 33.2188ZM440.125 33.875C440.018 33.875 439.94 33.8978 439.875 33.9688C439.811 34.0398 439.781 34.1247 439.781 34.2188C439.781 34.3128 439.811 34.3988 439.875 34.4688C439.94 34.5397 440.018 34.5625 440.125 34.5625C440.231 34.5625 440.342 34.5397 440.406 34.4688C440.471 34.3987 440.5 34.3127 440.5 34.2188C440.5 34.1248 440.472 34.0398 440.406 33.9688C440.34 33.8977 440.229 33.875 440.125 33.875ZM437.875 34.0625L437.875 34.8125L437.75 34.8125L437.438 34.8125L437.063 34.8125C436.683 34.8125 436.389 34.8845 436.188 35.0625C435.985 35.2395 435.875 35.4925 435.875 35.8125L435.875 37.25L436.531 37.25L436.531 35.8125C436.531 35.5875 436.606 35.4265 436.719 35.3125C436.832 35.1985 436.975 35.1562 437.188 35.1562L437.438 35.1562L437.75 35.1562L437.875 35.1562L437.875 36.375C437.875 36.682 437.965 36.9178 438.156 37.0938C438.347 37.2688 438.645 37.3438 439 37.3438C439.119 37.3438 439.224 37.3435 439.344 37.3125C439.466 37.2815 439.562 37.2345 439.656 37.1875L439.531 36.875C439.472 36.911 439.4 36.9388 439.312 36.9688C439.224 36.9987 439.125 37.0313 439.031 37.0312C438.965 37.0312 438.903 37.025 438.844 37C438.784 36.975 438.734 36.926 438.688 36.875C438.641 36.823 438.588 36.7402 438.562 36.6562C438.536 36.5743 438.531 36.495 438.531 36.375L438.531 35.1562L439.281 35.1562L439.281 34.8125L438.531 34.8125L438.531 34.0625L437.875 34.0625ZM434.406 34.7188C434.331 34.7188 434.273 34.737 434.188 34.75C434.101 34.762 433.993 34.7572 433.906 34.7812C433.818 34.8043 433.738 34.84 433.656 34.875C433.572 34.909 433.506 34.953 433.438 35L433.594 35.2812C433.701 35.2083 433.834 35.168 433.969 35.125C434.104 35.083 434.233 35.0625 434.375 35.0625C434.563 35.0625 434.695 35.1117 434.813 35.2188C434.93 35.3247 435 35.4918 435 35.7188L434.344 35.7188C433.918 35.7188 433.609 35.7782 433.406 35.9062C433.204 36.0352 433.094 36.2088 433.094 36.4688C433.094 36.7298 433.204 36.9335 433.406 37.0625C433.609 37.1905 433.918 37.25 434.344 37.25L435.656 37.25L435.656 35.7188C435.656 35.5707 435.649 35.4325 435.594 35.3125C435.539 35.1915 435.451 35.087 435.344 35C435.237 34.912 435.091 34.8282 434.938 34.7812C434.784 34.7343 434.607 34.7188 434.406 34.7188ZM434.344 36.0312L435 36.0312L435 36.9375L434.344 36.9375C433.983 36.9375 433.812 36.7667 433.813 36.4688C433.813 36.1707 433.983 36.0312 434.344 36.0312ZM444.594 34.7188C444.519 34.7188 444.461 34.737 444.375 34.75C444.289 34.762 444.181 34.7572 444.094 34.7812C444.006 34.8043 443.927 34.84 443.844 34.875C443.761 34.909 443.694 34.953 443.625 35L443.781 35.2812C443.887 35.2083 444.021 35.168 444.156 35.125C444.291 35.083 444.422 35.0625 444.562 35.0625C444.751 35.0625 444.914 35.1117 445.031 35.2188C445.149 35.3247 445.188 35.4918 445.188 35.7188L444.531 35.7188C444.104 35.7188 443.797 35.7782 443.594 35.9062C443.392 36.0352 443.281 36.2088 443.281 36.4688C443.281 36.7298 443.392 36.9335 443.594 37.0625C443.797 37.1905 444.104 37.25 444.531 37.25L445.844 37.25L445.844 35.7188C445.844 35.5707 445.836 35.4325 445.781 35.3125C445.726 35.1915 445.637 35.087 445.531 35C445.424 34.912 445.309 34.8282 445.156 34.7812C445.002 34.7343 444.795 34.7188 444.594 34.7188ZM444.531 36.0312L445.188 36.0312L445.188 36.9375L444.531 36.9375C444.17 36.9375 444 36.7667 444 36.4688C444 36.1707 444.17 36.0312 444.531 36.0312ZM439.812 34.8125L439.812 37.25L440.469 37.25L440.469 34.8125L439.812 34.8125ZM440.625 34.8125L441.562 37.25L442.625 37.25L443.563 34.8125L442.906 34.8125L442.125 36.8438L442.063 36.8438L441.281 34.8125L440.625 34.8125Z"/> </g></g> </svg>';

fabric.loadSVGFromString(MenONeckLogoBackSVG, function(objects, options) {
	MenONeckLogoBack = fabric.util.groupSVGElements(objects, options);
	MenONeckLogoBack.set({
		fill:'black', strokeWidth:0.35,stroke: "white", paintFirst: "stroke",
		hasControls:false,
		hasBorders:false,
		selectable: false,
		fixed: true,
		});
	canvas1.add(MenONeckLogoBack).renderAll();
	//obj.setCoords();
});

//#endregion






//mask object
MenONeckDesign0SvgMask = new fabric.Group

MenONeckDesign0SvgMaskString = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="2560" height="1920"> <g transform="matrix(2.8317 0 0 2.8317 -0 0)">  <path  fill="#ffffff" id="path484" d="M 0 0 L 0 259.53711 L 904.05469 259.53711 L 904.05469 0 L 0 0 z M 99.876953 15.402344 L 177.66016 15.402344 L 255.30078 15.402344 L 255.30078 32.410156 L 177.66016 32.410156 L 99.876953 32.410156 L 99.876953 15.402344 z M 422.73633 23.90625 L 424.53516 26.095703 L 426.85547 26.050781 L 431.23047 26.005859 L 436.06836 25.996094 L 437.5957 25.992188 L 446.10938 26.080078 L 447.59961 26.095703 L 449.39844 23.90625 L 451.51562 25.644531 L 454.30664 27.931641 L 455.70508 29.105469 L 456.83984 30.058594 L 458.86328 31.900391 L 460.53711 33.492188 L 461.41992 34.359375 L 462.36328 35.287109 L 464.23828 37.193359 L 466.08008 39.130859 L 467.89258 41.09375 L 469.84961 43.275391 L 471.95117 45.693359 L 474.50781 48.71875 L 477.53516 52.435547 L 479.09375 54.402344 L 479.98438 55.529297 L 481.76367 57.787109 L 483.09766 59.480469 L 484.12109 60.791016 L 486.92188 64.453125 L 490.20508 68.832031 L 493.60352 73.351562 L 495.89258 76.351562 L 498.70508 76.697266 L 498.5918 77.630859 L 498.35742 79.501953 L 497.75391 84.451172 L 496.56641 95.009766 L 495.79883 102.04883 L 495.18359 107.91602 L 494.89062 110.83984 L 494.59766 113.78711 L 493.69922 123.58398 L 493.29492 128.48828 L 492.92773 133.39844 L 492.69141 137.14258 L 492.51172 140.89648 L 492.35547 145.40625 L 492.1875 152.16406 L 492.07227 159.42969 L 492.0293 166.69531 L 492.04688 175.41406 L 492.15234 188.49414 L 492.25781 199.6875 L 492.2832 209.0918 L 492.25781 215.12891 L 492.20312 220.25195 L 492.1582 222.75195 L 493.25391 228.31641 L 490.56055 228.7832 L 487.87109 229.2793 L 479.81641 230.86914 L 473.42383 232.1582 L 468.03711 233.14844 L 464.56836 233.72266 L 461.61719 234.16016 L 460.17383 234.34766 L 458.93945 234.50586 L 456.49414 234.77734 L 454.08594 235.00391 L 451.70117 235.1875 L 449.10352 235.34766 L 446.26758 235.47656 L 443.1543 235.56836 L 438.95312 235.63086 L 436.06836 235.62891 L 431.18164 235.62305 L 427.15039 235.54883 L 424.67188 235.47266 L 422.40039 235.36914 L 420.31641 235.24219 L 418.21875 235.07812 L 416.09766 234.87695 L 415.03711 234.75391 L 413.38281 234.56055 L 410.00195 234.0918 L 406.0332 233.46484 L 401.98828 232.74023 L 397.68945 231.92383 L 392.57812 230.9043 L 384.36914 229.29688 L 378.88281 228.31641 L 379.97852 222.75195 L 380.09961 162.23633 L 380.08203 161.11719 L 380.05469 158.87891 L 379.94727 152.16406 L 379.7793 145.4082 L 379.62109 140.89258 L 379.44336 137.13672 L 379.20703 133.39844 L 378.74805 127.26367 L 378.24414 121.13672 L 377.69727 115.01367 L 377.29492 110.83203 L 377.10938 108.89648 L 376.48242 102.78125 L 375.81641 96.669922 L 375.11523 90.560547 L 374.38086 84.451172 L 374.06445 81.871094 L 373.63867 78.419922 L 373.42969 76.697266 L 376.24219 76.351562 L 381.7168 69.144531 L 386.95312 62.228516 L 391.41406 56.460938 L 393.04297 54.402344 L 394.59766 52.4375 L 397.62305 48.722656 L 400.17969 45.695312 L 402.28516 43.273438 L 404.24219 41.087891 L 406.05664 39.121094 L 407.90039 37.185547 L 409.77344 35.283203 L 410.7168 34.359375 L 411.79297 33.302734 L 413.43359 31.753906 L 415.30078 30.054688 L 416.43164 29.105469 L 417.85352 27.910156 L 420.63477 25.632812 L 422.73633 23.90625 z M 199.98438 37.646484 L 201.51562 38.931641 L 203.45312 40.544922 L 204.39258 41.400391 L 205.08594 42.033203 L 206.45508 43.349609 L 207.79297 44.697266 L 209.09961 46.072266 L 210.625 47.742188 L 212.36719 49.744141 L 214.37305 52.144531 L 217.32617 55.833984 L 220.96094 60.556641 L 223.45312 63.697266 L 224.29297 64.736328 L 224.71094 65.259766 L 226.6875 67.787109 L 230.55273 72.908203 L 234.40234 77.982422 L 237.00391 81.330078 L 239.81641 81.675781 L 239.69336 82.705078 L 239.43555 84.763672 L 238.87109 89.439453 L 237.29688 103.67188 L 236.32422 113.16406 L 235.58594 121.08008 L 234.93164 128.99805 L 234.4668 135.59961 L 234.08008 142.20312 L 233.78906 148.80859 L 233.59961 155.41797 L 233.50586 161.97852 L 233.47656 168.54297 L 233.50781 176.41797 L 233.625 188.23438 L 233.75781 199.97266 L 233.7793 209.83789 L 233.73242 216.16992 L 233.64648 221.54297 L 233.57617 224.16211 L 233.56055 224.70117 L 233.45117 226.18945 L 233.24023 227.95508 L 233.02734 229.84961 L 227.25 230.00977 L 218.58008 230.28906 L 208.99414 230.61133 L 204.19922 230.72852 L 200.89844 230.80859 L 194.25195 230.92383 L 187.62109 230.99023 L 180.98828 231.01953 L 177.58984 231.01562 L 174.63477 231.01367 L 169.16211 231.01562 L 164.57227 230.98242 L 162.93359 230.95508 L 158.08594 230.88867 L 149.25 230.68359 L 139.8418 230.42188 L 128.65234 230.05859 L 122.15039 229.84961 L 121.9375 227.95508 L 121.72656 226.18945 L 121.61523 224.69922 L 121.60156 224.16211 L 121.53125 221.54297 L 121.44531 216.16602 L 121.39844 209.83203 L 121.41992 199.9668 L 121.55273 188.22461 L 121.66992 176.41211 L 121.69922 168.53711 L 121.67188 161.97656 L 121.57617 155.41797 L 121.38672 148.79883 L 121.09375 142.17773 L 120.70312 135.56055 L 120.23438 128.94531 L 119.57617 121.01367 L 118.83398 113.09375 L 117.86328 103.61133 L 116.30664 89.439453 L 115.69336 84.365234 L 115.4707 82.576172 L 115.36133 81.675781 L 118.17578 81.330078 L 122.45117 75.849609 L 128.81055 67.585938 L 132.41016 62.898438 L 134.21875 60.556641 L 134.81836 59.779297 L 138.23047 55.357422 L 141.17578 51.701172 L 143.11133 49.398438 L 144.79102 47.478516 L 146.25977 45.878906 L 147.51758 44.560547 L 148.80469 43.267578 L 150.11914 42.005859 L 150.78516 41.400391 L 151.6582 40.603516 L 153.47461 39.09375 L 154.92773 37.871094 L 155.67188 38.574219 L 156.29883 39.253906 L 156.99609 40.144531 L 157.83789 41.191406 L 158.55273 42.003906 L 159.29492 42.779297 L 160.21484 43.666016 L 160.80469 44.195312 L 161.41016 44.701172 L 162.03516 45.181641 L 162.67773 45.638672 L 164.00195 46.476562 L 165.37695 47.212891 L 166.79297 47.853516 L 168.24219 48.392578 L 169.7207 48.832031 L 171.21484 49.171875 L 172.44336 49.367188 L 173.66992 49.488281 L 175.14062 49.5625 L 177.36719 49.595703 L 179.41992 49.595703 L 180.64062 49.560547 L 181.65625 49.494141 L 182.66992 49.386719 L 184.17969 49.132812 L 185.67969 48.777344 L 187.16016 48.316406 L 188.61328 47.753906 L 190.03125 47.091797 L 191.40625 46.328125 L 192.73047 45.466797 L 193.36914 45 L 193.99414 44.507812 L 195.11133 43.529297 L 196.04883 42.585938 L 196.99609 41.490234 L 198.22656 39.882812 L 198.99219 38.851562 L 199.70312 37.96875 L 199.98438 37.646484 z M 328.54297 80.882812 L 328.58203 81.330078 L 328.7832 83.574219 L 329.08984 86.951172 L 329.23047 88.664062 L 329.64648 93.693359 L 330.22266 101.15039 L 330.82227 109.52734 L 331.11719 114.44336 L 331.16016 115.14844 L 331.3418 118.17383 L 331.71094 125.76562 L 331.9668 132.44531 L 332.14648 138.14062 L 332.35938 146.47266 L 332.45312 152.46484 L 332.49023 154.91406 L 332.53125 159.91406 L 332.54492 165.7832 L 332.50195 174.88867 L 332.38086 185.69922 L 332.24023 200.81641 L 332.23047 210.9668 L 332.31445 219.49414 L 332.39648 223.78906 L 332.51367 228.10742 L 330.57812 233.52734 L 328.12305 233.10742 L 325.66211 232.72852 L 323.19531 232.39453 L 320.72461 232.10352 L 317.91406 231.83594 L 315.10156 231.64062 L 312.28516 231.52734 L 309.46875 231.49805 L 301.58984 231.55664 L 296.33398 231.63086 L 291.95117 231.72852 L 287.56836 231.88086 L 287.26758 226.21484 L 287.35938 218.69141 L 287.39062 211.19727 L 287.37305 202.23047 L 287.28516 188.82227 L 287.17578 174.59375 L 287.18164 162.62305 L 287.24805 154.92383 L 287.35938 148.37891 L 287.44141 145.17578 L 287.58984 139.48242 L 287.85547 131.40625 L 288.10352 125.25195 L 288.37305 119.59961 L 288.5293 116.83984 L 288.7168 113.57617 L 289.11914 107.16797 L 289.56836 100.76562 L 290.06445 94.371094 L 290.33398 91.208984 L 290.55469 88.630859 L 290.84961 85.173828 L 291.00195 83.449219 L 293.82422 83.697266 L 294.44141 84.269531 L 295.53711 85.398438 L 296.68945 86.638672 L 298.04688 88.167969 L 300.12109 90.472656 L 301.54297 91.947266 L 302.76562 93.105469 L 304.03516 94.173828 L 304.63086 94.599609 L 305.31641 95.015625 L 306.07227 95.410156 L 306.87305 95.763672 L 307.69922 96.064453 L 308.52539 96.292969 L 309.33203 96.439453 L 310.09375 96.484375 L 310.58008 96.439453 L 311.07812 96.330078 L 311.58594 96.162109 L 312.0918 95.945312 L 312.83203 95.554688 L 313.53125 95.109375 L 314.16602 94.644531 L 314.71094 94.191406 L 315.40039 93.552734 L 316.06836 92.886719 L 317.35352 91.490234 L 318.81836 89.720703 L 320.93359 86.970703 L 322.43555 84.984375 L 323.73438 83.365234 L 324.59375 82.359375 L 325.34375 81.529297 L 325.7207 81.138672 L 328.54297 80.882812 z M 39.183594 81.023438 L 42.007812 81.279297 L 42.384766 81.669922 L 43.132812 82.498047 L 43.992188 83.505859 L 45.291016 85.125 L 46.794922 87.111328 L 48.910156 89.861328 L 50.375 91.628906 L 51.658203 93.027344 L 52.328125 93.693359 L 53.017578 94.332031 L 53.560547 94.785156 L 54.195312 95.25 L 54.894531 95.695312 L 55.636719 96.085938 L 56.142578 96.302734 L 56.648438 96.470703 L 57.148438 96.580078 L 57.632812 96.623047 L 58.394531 96.578125 L 59.201172 96.433594 L 60.027344 96.203125 L 60.853516 95.904297 L 61.654297 95.548828 L 62.410156 95.15625 L 63.097656 94.740234 L 63.693359 94.314453 L 64.962891 93.246094 L 66.185547 92.087891 L 67.607422 90.613281 L 69.679688 88.308594 L 71.037109 86.779297 L 72.189453 85.537109 L 73.285156 84.410156 L 73.902344 83.835938 L 76.726562 83.589844 L 76.876953 85.314453 L 77.171875 88.771484 L 77.392578 91.349609 L 77.664062 94.511719 L 78.158203 100.90625 L 78.607422 107.30859 L 79.011719 113.71875 L 79.197266 116.98047 L 79.355469 119.74023 L 79.625 125.39258 L 79.871094 131.54883 L 80.136719 139.62305 L 80.285156 145.31641 L 80.369141 148.51758 L 80.478516 155.06445 L 80.546875 162.76367 L 80.550781 174.73438 L 80.443359 188.96289 L 80.353516 202.37109 L 80.335938 211.33789 L 80.369141 218.83203 L 80.460938 226.35547 L 80.158203 232.01953 L 75.775391 231.86914 L 71.392578 231.76953 L 66.136719 231.69727 L 58.257812 231.63867 L 55.443359 231.66797 L 52.625 231.78125 L 49.8125 231.97461 L 47.003906 232.24414 L 44.53125 232.53516 L 42.066406 232.86914 L 39.603516 233.24609 L 37.148438 233.66797 L 35.214844 228.24805 L 35.330078 223.92969 L 35.414062 219.63477 L 35.498047 211.10742 L 35.486328 200.95703 L 35.345703 185.83984 L 35.226562 175.0293 L 35.183594 165.92383 L 35.195312 160.05469 L 35.236328 155.05469 L 35.275391 152.60547 L 35.367188 146.61328 L 35.580078 138.28125 L 35.759766 132.58594 L 36.015625 125.90625 L 36.384766 118.31445 L 36.566406 115.28906 L 36.609375 114.58398 L 36.904297 109.66992 L 37.505859 101.29102 L 38.080078 93.833984 L 38.496094 88.804688 L 38.636719 87.091797 L 38.943359 83.714844 L 39.144531 81.470703 L 39.183594 81.023438 z M 605.26367 98.214844 L 607.92188 99.205078 L 608.14062 99.714844 L 608.56641 100.75391 L 609.38281 102.69336 L 609.98242 103.95703 L 610.54297 104.97656 L 611.17969 105.95117 L 611.50391 106.37891 L 611.84961 106.78906 L 612.60547 107.55859 L 613.43359 108.26367 L 614.32031 108.9043 L 615.25586 109.47852 L 616.22266 109.99023 L 616.52539 110.12695 L 617.21094 110.4375 L 618.20508 110.82227 L 619.07031 111.10547 L 619.95508 111.35352 L 620.86133 111.56641 L 621.77734 111.74805 L 622.70117 111.89648 L 623.625 112.01758 L 625.44727 112.17773 L 626.37891 112.21094 L 627.29883 112.20312 L 628.21094 112.15625 L 629.11523 112.07617 L 630.19336 111.93945 L 631.26367 111.76367 L 632.86328 111.44727 L 634.46289 111.08789 L 635.59961 114.16797 L 636.79102 117.22656 L 638.05859 120.25391 L 638.73047 121.75195 L 639.42773 123.23438 L 640.70508 125.79688 L 642.04688 128.32227 L 643.44336 130.81836 L 644.88867 133.28516 L 646.67578 136.21484 L 648.50977 139.11719 L 650.75586 142.57227 L 654.17578 147.72266 L 656.08789 150.58984 L 657.03711 152.02734 L 657.48047 152.69727 L 658.7207 154.64062 L 660.23047 157.08203 L 662.32812 160.44922 L 663.77734 162.69531 L 665.02148 164.53516 L 666.30469 166.32227 L 667.40234 167.75781 L 668.5332 169.12695 L 669.69922 170.42188 L 670.89844 171.625 L 671.59766 172.25781 L 672.23438 172.77734 L 672.8125 173.19531 L 673.3418 173.52344 L 673.91406 173.81836 L 674.43164 174.02344 L 674.98633 174.18359 L 675.72461 174.32031 L 676.23633 174.40234 L 676.74609 174.54492 L 677.2207 174.77148 L 677.86523 175.14062 L 678.60547 175.63281 L 679.40234 176.15039 L 678.17383 178.71484 L 676.97852 181.2832 L 675.81445 183.85938 L 674.68359 186.44531 L 673.5918 189.05273 L 672.5332 191.68164 L 671.51367 194.33984 L 670.5293 197.03125 L 669.72266 199.36523 L 668.95312 201.7168 L 668.21875 204.07422 L 667.51367 206.44141 L 668.23242 208.75977 L 669.27148 212.11133 L 658.76367 212.11133 L 637.75 212.10938 L 563.43555 212.10352 L 565.23438 206.43555 L 564.51367 204.07422 L 563.76367 201.72461 L 562.97852 199.38281 L 562.1543 197.05273 L 561.17578 194.41992 L 560.19141 191.88086 L 559.17773 189.38867 L 558.11719 186.89453 L 556.99219 184.35547 L 555.7793 181.71875 L 554.46094 178.94336 L 553.29883 175.83984 L 553.86719 175.56836 L 554.88672 175.07422 L 555.55469 174.72266 L 556.06055 174.44141 L 556.96094 174.06055 L 557.62695 173.85547 L 558.35742 173.60352 L 558.84375 173.35742 L 559.28516 173.05273 L 559.78906 172.62109 L 560.27539 172.14062 L 560.83594 171.52539 L 561.48438 170.75781 L 562.23828 169.81641 L 566.51758 164.2793 L 570.73047 158.6543 L 572.80273 155.81445 L 574.84766 152.95703 L 576.86133 150.08984 L 578.83984 147.20898 L 583.25781 140.64258 L 585.42773 137.33594 L 587.5625 134.00586 L 590.33789 129.52539 L 591.68945 127.26367 L 593.01367 124.98633 L 595.15039 121.15234 L 596.18555 119.21484 L 597.19336 117.26367 L 598.17578 115.29688 L 599.12891 113.3125 L 600.05273 111.3125 L 600.94336 109.29492 L 601.69922 107.49805 L 602.42773 105.69141 L 604.50781 100.23047 L 605.01172 98.886719 L 605.26367 98.214844 z M 816.9043 98.240234 L 817.15625 98.910156 L 817.6582 100.25391 L 819.74023 105.71484 L 820.4668 107.52148 L 821.22266 109.31836 L 822.11523 111.33594 L 823.03906 113.33594 L 823.99219 115.31836 L 824.97461 117.28516 L 825.98242 119.23828 L 827.01758 121.17578 L 829.1543 125.00977 L 830.47852 127.28711 L 831.82812 129.54883 L 834.60547 134.0293 L 836.74023 137.35742 L 838.91016 140.66406 L 843.32617 147.23242 L 845.30664 150.11133 L 847.32031 152.98047 L 849.36523 155.83789 L 851.4375 158.67773 L 855.65039 164.30273 L 859.92773 169.83984 L 860.68164 170.78125 L 861.33203 171.54883 L 861.89258 172.16211 L 862.37891 172.64453 L 862.88281 173.07617 L 863.32422 173.38086 L 863.81055 173.62695 L 864.54102 173.87891 L 865.20508 174.08398 L 866.10742 174.46484 L 866.61328 174.74609 L 867.2793 175.09766 L 868.30078 175.5918 L 868.86914 175.86328 L 867.70703 178.9668 L 866.38867 181.74219 L 865.17578 184.37891 L 864.04883 186.91797 L 862.98828 189.41016 L 861.97656 191.9043 L 860.99023 194.44336 L 860.01172 197.07617 L 859.1875 199.40625 L 858.4043 201.74805 L 857.6543 204.09961 L 856.93359 206.45703 L 858.73242 212.12695 L 784.41602 212.13281 L 763.4043 212.13477 L 752.89648 212.13477 L 753.93359 208.7832 L 754.65234 206.4668 L 753.94922 204.09961 L 753.21289 201.73828 L 752.44531 199.38867 L 751.63867 197.05469 L 750.6543 194.36328 L 749.63477 191.70508 L 748.57617 189.07617 L 747.48242 186.46875 L 746.35352 183.88281 L 745.18945 181.30664 L 743.99219 178.73828 L 742.76367 176.17383 L 743.5625 175.65625 L 744.30273 175.16406 L 744.94727 174.79492 L 745.41992 174.56836 L 745.93164 174.42578 L 746.44336 174.3457 L 747.18164 174.20703 L 747.73633 174.04883 L 748.25195 173.8418 L 748.82617 173.54688 L 749.35352 173.21875 L 749.93359 172.80078 L 750.57031 172.28125 L 751.26953 171.64844 L 752.46875 170.44336 L 753.63281 169.15039 L 754.76367 167.7793 L 755.86328 166.3457 L 757.14648 164.55859 L 758.38867 162.71875 L 759.83984 160.47461 L 761.9375 157.10547 L 763.44727 154.66211 L 764.6875 152.7207 L 765.13086 152.05078 L 766.07812 150.61133 L 767.99219 147.74414 L 771.41016 142.5957 L 773.65625 139.14062 L 775.49219 136.23828 L 777.2793 133.30859 L 778.72461 130.8418 L 780.12109 128.3457 L 781.46289 125.82031 L 782.74023 123.25781 L 783.4375 121.77539 L 784.10742 120.27734 L 785.37695 117.25 L 786.56836 114.19141 L 787.70508 111.11133 L 789.30273 111.4707 L 790.90234 111.78711 L 791.97461 111.96289 L 793.05273 112.09961 L 793.95508 112.18164 L 794.86719 112.22656 L 795.78906 112.23438 L 796.71875 112.19922 L 798.54297 112.04102 L 799.4668 111.92188 L 800.38867 111.77148 L 801.30664 111.58984 L 802.21094 111.37695 L 803.09766 111.12891 L 803.96289 110.8457 L 804.95703 110.46094 L 805.64258 110.15039 L 805.94531 110.01367 L 806.91211 109.50195 L 807.8457 108.92773 L 808.73438 108.28711 L 809.5625 107.58203 L 810.31836 106.8125 L 810.66406 106.40234 L 810.98633 105.97461 L 811.62305 105 L 812.18555 103.98047 L 812.78516 102.7168 L 813.60156 100.77734 L 814.02539 99.738281 L 814.24609 99.226562 L 816.9043 98.240234 z " /> </g></svg> ';

fabric.loadSVGFromString(MenONeckDesign0SvgMaskString, function(objects, options) {
   for (let i = 0; i < objects.length; i++){
	   let obj = objects[i];
	   //obj.setTop(0);
	   //obj.setCoords();
	   //obj.scaleToHeight(pdf_canvas.height)
	   MenONeckDesign0SvgMask.addWithUpdate(obj)
   } 
});


MenONeckDesign0SvgMask.set({ 
 	lockMovementX:true,
	lockMovementY:true,
	lockScalingX:true,
	lockScalingY:true,
	lockRotation:true,
	hasControls:false,
	hasBorders:false,
	selectable: false,
	fixed: true, 
	opacity:0.5,
	/*left:-2.5,
	top: -1.5,
	scaleX: 2.26,
	scaleY: 2.26,*/
})







//man O neck outlining 

const MenONeckGroupOutlining = new fabric.Group;

fabric.loadSVGFromString(MenONeckDesign0SvgMaskString, function(objects, options) {
	for (let i = 0; i < objects.length; i++){
		let obj = objects[i];
		MenONeckGroupOutlining.addWithUpdate(obj)
	} 
});

MenONeckGroupOutlining.set({ 
	lockMovementX:true,
	lockMovementY:true,
	lockScalingX:true,
	lockScalingY:true,
	lockRotation:true,
	hasControls:false,
	hasBorders:false,
	selectable: false,
})

MenONeckGroupOutlining.item(0).set({fill: 'transparent', strokeWidth: 1, stroke: 'black', paintFirst: 'stroke' });


for (let i = 0; i <= 9; i++ ) {

	/* exclude trims?  --
	if (i === 4 || i === 5) {
		continue;
	} */
	//MenONeckGroupOutlining.item(0).set({fill: 'transparent', strokeWidth: 1, stroke: 'black', paintFirst: 'stroke' });

}


/* canvas1.add(MenONeckDesign0SvgMask);
canvas1.add(MenONeckGroupOutlining); */














	















document.getElementById("printCanvasTest").addEventListener("click", function () {

	canvas1.add(MenONeckDesign0SvgMask);
	canvas1.add(MenONeckGroupOutlining);
	
	canvas1.calcOffset();
	canvas1.renderAll(); 
	
	saveAs(new Blob([canvas1.toSVG()], {type:"image/svg+xml"}), "name.svg") 

	document.getElementById('finishedPage').style.display = 'flex'

});



































 

/* 

//for testing 
function addtexttest() {
var text1 = new fabric.Text('test text', { 
	originX: "center",
	originY: "center",
	scaleX: 1.0,
	scaleY: 1.0,
	left: 500,
	top: 400, 
	angle: 0,
	fontStyle: "",
	fontFamily: 'CocogooseProItalic',
	transparentCorners: false,
	cornerSize: 14,
	borderScaleFactor: 2, 
	centeredScaling: true,
	//cornerStyle: 'circle',
	fill: 'green',
	fontStyle: fontStyleCheckerGlobal,
	fontWeight: fontWeightCheckerGlobal,
	//id: textitemcounter,
	//borderColor: 0x64646481,
	//http://fabricjs.com/controls-customization
});
	canvas1.add(text1);
	text1.bringToFront();
}

addtexttest();  */










const colorpickrzone = document.querySelectorAll('.SelectedColor').forEach( el => {

	const pickr = new Pickr({
	el,
	useAsButton: true,
	default: '#42445A',
	theme: 'monolith',

	swatches: [
		'rgba(244, 67, 54, 1)',
		'rgba(233, 30, 99, 1)',
		'rgba(156, 39, 176, 1)',
		'rgba(103, 58, 183, 1)',
		'rgba(63, 81, 181, 1)',
		'rgba(33, 150, 243, 1)',
		'rgba(3, 169, 244, 1)',
		'rgba(0, 188, 212, 1)',
		'rgba(0, 150, 136, 1)',
		'rgba(76, 175, 80, 1)',
		'rgba(139, 195, 74, 1)',
		'rgba(205, 220, 57, 1)',
		'rgba(255, 235, 59, 1)',
		'rgba(255, 193, 7, 1)'
	],

	components: {
		preview: false,
		opacity: false,
		hue: true,

		interaction: {
			//hex: true,
			//rgba: true,
			//hsva: true,
			input: true,
			//clear: true,
			//save: true
		}
	}
}).on('init', pickr => {
	pickr.setColor(el.value);
	el.style.backgroundColor = el.value;
	el.style.color = blackOrWhite( pickr.getColor().toRGBA() );
	
}).on('change', color => {
	el.value = color.toHEXA().toString(0);
	el.style.backgroundColor = el.value;
	el.style.color = blackOrWhite( color.toRGBA() );

	switch (el.id) {
		case 'SelectedColorFront': 
			MenONeckDesign0SvgGroup.item(6).set('fill', el.value);
			break

		case 'SelectedColorBack': 
			MenONeckDesign0SvgGroup.item(8).set('fill', el.value);
			break

		case 'SelectedLeftSleeve': 
			MenONeckDesign0SvgGroup.item(2).set('fill', el.value);
			break

		case 'SelectedLeftSide': 
			MenONeckDesign0SvgGroup.item(7).set('fill', el.value);
			break

		case 'SelectedRightSleeve': 
			MenONeckDesign0SvgGroup.item(1).set('fill', el.value);
			break

		case 'SelectedRightSide': 
			MenONeckDesign0SvgGroup.item(3).set('fill', el.value);
			break

		case 'SelectedKnitTrimSleeve': 
			//design0
			MenONeckDesign0SvgGroup.item(4).set('fill', el.value);
			MenONeckDesign0SvgGroup.item(5).set('fill', el.value); 

			//design1
			MenONeckDesign1SvgGroup.item(4).set('fill', el.value);
			MenONeckDesign1SvgGroup.item(5).set('fill', el.value); 

			//design2
			MenONeckDesign2SvgGroup.item(7).set('fill', el.value);
			MenONeckDesign2SvgGroup.item(9).set('fill', el.value);

			//design4
			MenONeckDesign4SvgGroup.item(3).set('fill', el.value);
			MenONeckDesign4SvgGroup.item(4).set('fill', el.value);

			//design5
			MenONeckDesign5SvgGroup.item(3).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(6).set('fill', el.value);

			//design6
			MenONeckDesign6SvgGroup.item(3).set('fill', el.value);
			MenONeckDesign6SvgGroup.item(4).set('fill', el.value);

			//design7
			MenONeckDesign7SvgGroup.item(2).set('fill', el.value);
			MenONeckDesign7SvgGroup.item(4).set('fill', el.value);

			material_cleanKnitTreamSleeve.color = new THREE.Color (el.value);
			material_cleanKnitTreamSleeve.needsUpdate = true;
			break;

		case 'SelectedKnitTrimColar': 
			//design0
			MenONeckDesign0SvgGroup.item(0).set('fill', el.value);


			//design1
			MenONeckDesign1SvgGroup.item(0).set('fill', el.value);

			//design2
			MenONeckDesign2SvgGroup.item(10).set('fill', el.value);

			//design3
			MenONeckDesign3SvgGroup.item(0).set('fill', el.value);

			//design4
			MenONeckDesign4SvgGroup.item(0).set('fill', el.value);

			//design5
			MenONeckDesign5SvgGroup.item(0).set('fill', el.value);

			//design6
			MenONeckDesign6SvgGroup.item(0).set('fill', el.value);

			//design7
			MenONeckDesign7SvgGroup.item(0).set('fill', el.value);

			material_cleanKnitTreamColar.color = new THREE.Color (el.value);
			material_cleanKnitTreamColar.needsUpdate = true;
			break;

		case 'SelectedColorFarbe1':
			//design1
			MenONeckDesign1SvgGroup.item(6).set('fill', el.value);
			MenONeckDesign1SvgGroup.item(0).set('fill', el.value);
			MenONeckDesign1SvgGroup.item(1).set('fill', el.value);
			MenONeckDesign1SvgGroup.item(2).set('fill', el.value);
			MenONeckDesign1SvgGroup.item(11).set('fill', el.value);

			//design2
			MenONeckDesign2SvgGroup.item(5).set('fill', el.value);
			MenONeckDesign2SvgGroup.item(6).set('fill', el.value);

			//design3
			MenONeckDesign3SvgGroup.item(1).set('fill', el.value);
			MenONeckDesign3SvgGroup.item(4).set('fill', el.value);
			MenONeckDesign3SvgGroup.item(7).set('fill', el.value);
			MenONeckDesign3SvgGroup.item(10).set('fill', el.value);

			//design4
			MenONeckDesign4SvgGroup.item(1).set('fill', el.value);
			MenONeckDesign4SvgGroup.item(2).set('fill', el.value);
			MenONeckDesign4SvgGroup.item(5).set('fill', el.value);
			MenONeckDesign4SvgGroup.item(7).set('fill', el.value);
			MenONeckDesign4SvgGroup.item(9).set('fill', el.value);
			MenONeckDesign4SvgGroup.item(11).set('fill', el.value);

			//design5
			MenONeckDesign5SvgGroup.item(2).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(5).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(7).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(8).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(13).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(18).set('fill', el.value);
	
			//design6
			MenONeckDesign6SvgGroup.item(7).set('fill', el.value);
			MenONeckDesign6SvgGroup.item(12).set('fill', el.value);

			//design7
			MenONeckDesign7SvgGroup.item(1).set('fill', el.value);
			MenONeckDesign7SvgGroup.item(3).set('fill', el.value);
			MenONeckDesign7SvgGroup.item(7).set('fill', el.value);
			MenONeckDesign7SvgGroup.item(9).set('fill', el.value);

			break;


		case 'SelectedColorFarbe2':
			//design1
			MenONeckDesign1SvgGroup.item(7).set('fill', el.value);
			MenONeckDesign1SvgGroup.item(12).set('fill', el.value);

			//design2
			MenONeckDesign2SvgGroup.item(0).set('fill', el.value);
			MenONeckDesign2SvgGroup.item(3).set('fill', el.value);

			//design3
			MenONeckDesign3SvgGroup.item(2).set('fill', el.value);
			MenONeckDesign3SvgGroup.item(5).set('fill', el.value);
			MenONeckDesign3SvgGroup.item(8).set('fill', el.value);
			MenONeckDesign3SvgGroup.item(11).set('fill', el.value);

			//design4
			MenONeckDesign4SvgGroup.item(6).set('fill', el.value);
			MenONeckDesign4SvgGroup.item(8).set('fill', el.value);
			MenONeckDesign4SvgGroup.item(10).set('fill', el.value);
			MenONeckDesign4SvgGroup.item(12).set('fill', el.value);

			//design5
			MenONeckDesign5SvgGroup.item(17).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(1).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(4).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(12).set('fill', el.value);

			MenONeckDesign5SvgGroup.item(1).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(4).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(12).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(16).set('fill', el.value);

			//design6
			MenONeckDesign6SvgGroup.item(1).set('fill', el.value);
			MenONeckDesign6SvgGroup.item(2).set('fill', el.value);
			MenONeckDesign6SvgGroup.item(11).set('fill', el.value);
			MenONeckDesign6SvgGroup.item(16).set('fill', el.value);

			//design7
			MenONeckDesign7SvgGroup.item(5).set('fill', el.value);
			MenONeckDesign7SvgGroup.item(6).set('fill', el.value);
			MenONeckDesign7SvgGroup.item(8).set('fill', el.value);
			MenONeckDesign7SvgGroup.item(10).set('fill', el.value);

			break;

		case 'SelectedColorFarbe3':
			//design1
			MenONeckDesign1SvgGroup.item(3).set('fill', el.value);
			MenONeckDesign1SvgGroup.item(4).set('fill', el.value);
			MenONeckDesign1SvgGroup.item(5).set('fill', el.value);
			MenONeckDesign1SvgGroup.item(8).set('fill', el.value);
			MenONeckDesign1SvgGroup.item(9).set('fill', el.value);
			MenONeckDesign1SvgGroup.item(13).set('fill', el.value);

			//design2
			MenONeckDesign2SvgGroup.item(1).set('fill', el.value);
			MenONeckDesign2SvgGroup.item(2).set('fill', el.value);
			MenONeckDesign2SvgGroup.item(4).set('fill', el.value);
			MenONeckDesign2SvgGroup.item(8).set('fill', el.value);

			//design3
			MenONeckDesign3SvgGroup.item(3).set('fill', el.value);
			MenONeckDesign3SvgGroup.item(6).set('fill', el.value);
			MenONeckDesign3SvgGroup.item(9).set('fill', el.value);
			MenONeckDesign3SvgGroup.item(12).set('fill', el.value);
			MenONeckDesign3SvgGroup.item(13).set('fill', el.value);
			MenONeckDesign3SvgGroup.item(14).set('fill', el.value);

			//design5
			MenONeckDesign5SvgGroup.item(11).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(16).set('fill', el.value);

			//design6
			MenONeckDesign6SvgGroup.item(10).set('fill', el.value);
			MenONeckDesign6SvgGroup.item(15).set('fill', el.value);

			break;

		case 'SelectedColorFarbe4':
			//design5
			MenONeckDesign5SvgGroup.item(15).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(10).set('fill', el.value);

			//design6
			MenONeckDesign6SvgGroup.item(9).set('fill', el.value);
			MenONeckDesign6SvgGroup.item(14).set('fill', el.value);

			break;

		case 'SelectedColorFarbe5':
			//design5
			MenONeckDesign5SvgGroup.item(14).set('fill', el.value);
			MenONeckDesign5SvgGroup.item(9).set('fill', el.value);

			//design6
			MenONeckDesign6SvgGroup.item(5).set('fill', el.value);
			MenONeckDesign6SvgGroup.item(6).set('fill', el.value);
			MenONeckDesign6SvgGroup.item(13).set('fill', el.value);
			MenONeckDesign6SvgGroup.item(8).set('fill', el.value);

			break;


		case 'txtColor':
			setTextColor(el.value);
			break;

		case 'txtColorBorder':
			setTextBorderColor(el.value);
			break;

		default:
		//console.clear();
		console.log("Unknown part selected for this color");
	}
	
	pickr.hide();
	canvas1.renderAll();
	});

});
//material_cleanKnitTreamSleeve.color = new THREE.Color (0x354353);




canvas1.renderAll();


function blackOrWhite ( [r, g, b] ) {
  // via. https://lab.syncer.jp/Web/JavaScript/Snippet/55/
	  return ( ( ( (r * 299) + (g * 587) + (b * 114) ) / 1000 ) < 128 ) ? "white" : "black" ;
  }

console.clear();









//for testing/getting real-time pos of fabricjs objects
/*  var objt, objtLeft, objtRight;
function doStuff() {
    objt = canvas1.getActiveObject();
    console.log(objt.left + "," + objt.top + "," + objt.scaleX);
	//objtLeft = objt.left;
	//objtRight = objt.right;
}
setInterval(doStuff, 100);    

 */



//export { objtLeft, objtRight  } 




