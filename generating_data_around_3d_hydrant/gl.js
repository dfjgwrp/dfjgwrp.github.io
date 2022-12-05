//'use strict';
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas, antialias: false, alpha: true});
renderer.setPixelRatio( window.devicePixelRatio );
//renderer.physicallyCorrectLights = true;
//renderer.shadowMap.enabled = true;
//renderer.shadowMapSoft = true;

const fov = 45; //45
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 200;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(-3.5, -0.1, 1.7);
//camera.position.set(-3.84, -0.19, -0.58);

var scene = new THREE.Scene();
//scene.background =  new THREE.Color('white');

//controls//
const controls = new THREE.OrbitControls(camera, canvas);
controls.target.set(-0, -0.2, -0);
controls.minDistance = 2.5;
controls.maxDistance = 4.2; //5
controls.maxPolarAngle = Math.PI ;
controls.enableKeys = false;
controls.enablePan = false;
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.031;
controls.screenSpacePanning = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.2;


/* const color = 0xFFFFFF;
const intensity = 0;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-35, 53, -33);
light.target.position.set(13, 0, -100);
scene.add(light); 
*/

let hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
hemiLight.position.set(0, 90, 0);
scene.add(hemiLight);


const loader = new THREE.TextureLoader();
const Hydrant_Dirt_Diffuse2 = loader.load('img/Hydrant_Dirt_Diffuse2.jpg');
Hydrant_Dirt_Diffuse2.flipY = false;
//4July21 disable unncesary textures and  reflections on hydrant to save memory on annotations




const Hydrant_mat = new THREE.MeshBasicMaterial( { 
	//envMap: textureCube,
	//roughnessMap: Hydrant_Dirt_Specular,
	//normalMap: Hydrant_Dirt_Normal2,
	//normalScale: new THREE.Vector2(1, 1),
	//metalness: 0.1,
	//roughness: 0.1,
	map: Hydrant_Dirt_Diffuse2,
	transparent: true,
	opacity: 1,
	wireframe: false,
});

const Hydrant_Chain_mat = new THREE.MeshBasicMaterial( { 
	color: 0x333333,
});
	


let  Hydrant, Hydrant_Chain, Sign1, Sign2;
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load('gltf/Hydrant.glb', (gltf) => {
	Hydrant = gltf.scene.children[0];
	Hydrant.material = Hydrant_mat;
	Hydrant.renderOrder = 1;
	Hydrant_Chain = gltf.scene.children[1];
	Hydrant_Chain.material = Hydrant_Chain_mat;
	scene.add( Hydrant, Hydrant_Chain);
	//var vertexCopy = Hydrant.geometry.vertices[1].clone();
	//Hydrant.localToWorld(vertexCopy);
});



































//THINGS TYPICAL AND DEFAULT FOR EACH LABEL (30 July)

var anchorMat_rigid, anchorMat, geometry_rigid1,
anchor_rigid1;

var amountOfLabels = 1;

anchorMat_rigid = new THREE.MeshBasicMaterial({
	transparent: true, opacity: 0, color: 0xEEEEEE,
});

geometry_rigid1 = new THREE.BoxGeometry(0.3, 1.6, 0.3);
anchor_rigid1 = new THREE.Mesh( geometry_rigid1, anchorMat_rigid);
anchor_rigid1.position.x = 0;
anchor_rigid1.position.y = 0;
anchor_rigid1.position.z = 0;
scene.add(anchor_rigid1);
anchor_rigid1.renderOrder = 10;

anchorMat = new THREE.MeshBasicMaterial({
	transparent: true, opacity: 0, color: 0x824782
});













anchorMat_rigid2 = new THREE.MeshBasicMaterial({
	transparent: true, opacity: 0, color: 0x634634, wireframe: false
});








let pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8;

let arraysOfallPositionArrays = new Array();
arraysOfallPositionArrays[0] = new Array();
arraysOfallPositionArrays[1] = new Array();
arraysOfallPositionArrays[2] = new Array();
arraysOfallPositionArrays[3] = new Array();
arraysOfallPositionArrays[4] = new Array();
arraysOfallPositionArrays[5] = new Array();
arraysOfallPositionArrays[6] = new Array();
arraysOfallPositionArrays[7] = new Array();


let  plane1, plane2, plane3, plane4, plane5, plane6, plane7, plane8;
gltfLoader.load('gltf/CylinderTagALL.glb', (gltf) => {
	plane1 = gltf.scene.children[0];
	plane1.material = anchorMat_rigid2;
	plane1.renderOrder = 10;

	plane2 = gltf.scene.children[1];
	plane2.material = anchorMat_rigid2;
	plane2.renderOrder = 10;

	plane3 = gltf.scene.children[2];
	plane3.material = anchorMat_rigid2;
	plane3.renderOrder = 10;

	plane4 = gltf.scene.children[3];
	plane4.material = anchorMat_rigid2;
	plane4.renderOrder = 10;

	plane5 = gltf.scene.children[4];
	plane5.material = anchorMat_rigid2;
	plane5.renderOrder = 10;

	plane6 = gltf.scene.children[5];
	plane6.material = anchorMat_rigid2;
	plane6.renderOrder = 10;

	plane7 = gltf.scene.children[6];
	plane7.material = anchorMat_rigid2;
	plane7.renderOrder = 10;
		
	plane8 = gltf.scene.children[7];
	plane8.material = anchorMat_rigid2;
	plane8.renderOrder = 10;

	scene.add(plane1,plane2,plane3,plane4,plane5, plane6,plane7,plane8);


	pos1 = plane1.geometry.attributes.position;

	for (let i = 0; i < pos1.count; i++) {
		arraysOfallPositionArrays[0][i] = new THREE.Vector3().fromBufferAttribute(pos1, i);
	}

	/* console.log("superoriginal1");
	console.log(arraysOfallPositionArrays[0][12]); */

	pos2 = plane2.geometry.attributes.position;
	for (let i = 0; i < pos2.count; i++) {
		arraysOfallPositionArrays[1][i] = new THREE.Vector3().fromBufferAttribute(pos2, i);
	}
	
	pos3 = plane3.geometry.attributes.position;
	for (let i = 0; i < pos3.count; i++) {
		arraysOfallPositionArrays[2][i] = new THREE.Vector3().fromBufferAttribute(pos3, i);
	}

	pos4 = plane4.geometry.attributes.position;
	for (let i = 0; i < pos4.count; i++) {
		arraysOfallPositionArrays[3][i] = new THREE.Vector3().fromBufferAttribute(pos4, i);
	}

	pos5 = plane5.geometry.attributes.position;
	for (let i = 0; i < pos5.count; i++) {
		arraysOfallPositionArrays[4][i] = new THREE.Vector3().fromBufferAttribute(pos5, i);
	}

	pos6 = plane6.geometry.attributes.position;
	for (let i = 0; i < pos6.count; i++) {
		arraysOfallPositionArrays[5][i] = new THREE.Vector3().fromBufferAttribute(pos6, i);
	}

	pos7 = plane7.geometry.attributes.position;
	for (let i = 0; i < pos7.count; i++) {
		arraysOfallPositionArrays[6][i] = new THREE.Vector3().fromBufferAttribute(pos7, i);
	}

	pos8 = plane8.geometry.attributes.position;
	for (let i = 0; i < pos8.count; i++) {
		arraysOfallPositionArrays[7][i] = new THREE.Vector3().fromBufferAttribute(pos8, i);
	} 

});
	




/* let pos = sphereWhereWeAttachLabels_Mesh.geometry.attributes.position;
let arraysOfallPositionArrays[0] = [];
for (let i = 0; i < pos.count; i++) {
	arraysOfallPositionArrays[0][i] = new THREE.Vector3().fromBufferAttribute(pos, i);
}

console.log("superoriginal");
console.log(sphereWhereWeAttachLabels_Mesh.geometry.attributes.position);

 */

/* var randomedArrayOfSphere = [];
var tempArray = arraysOfallPositionArrays[0].slice();

for (i = 0; i < tempArray.length; i++) {
	var select = Math.floor(Math.random() * tempArray.length);
	randomedArrayOfSphere.push(tempArray[select]);
} */

/* console.log("random");
console.log(randomedArrayOfSphere); */





































	
var Default_LabelMat_1_map_src, anchor1, LabelMat_1, geometry1, labelContainerElem1, elem1, elem1_Internal, tempVLEFT1;

var ringDistance1, elemDistance1, elemBehindObject1;

var geometry1_1, anchor1_1, labelContainerElem1_1, labelContainerElem1_1_Internal, elem1_1, tempVLEFT1_1,
elemBehindObject1_1, ringDistance1_1, elemDistance1_1, label1_1_open,
Form1_Field1_Name, Form1_Field2_Website, Form1_Field3_Location,
x1, y1, x1_1, y1_1;
var container = document.getElementById("container");














Default_LabelMat_1_map_src = 'img/defaultLabelPicture.jpg';
Default_LabelMat_1_map = new THREE.TextureLoader().load(Default_LabelMat_1_map_src, (Default_LabelMat_1_map) => {
	Default_LabelMat_1_map.needsUpdate = true;
}); 

LabelMat_Default = new THREE.MeshBasicMaterial( { 
	side: THREE.DoubleSide,
	map: Default_LabelMat_1_map,
	transparent: false,
	opacity: 1,
	depthTest: true,
	depthWrite: true,
});	









geometry1 = new THREE.PlaneGeometry(0.3, 0.3);
anchor1 = new THREE.Mesh(geometry1, LabelMat_1);

anchor1.position.x = 0.4
anchor1.position.y = 0.5
anchor1.position.z = 0.4


labelContainerElem1 = document.createElement('div');
labelContainerElem1.setAttribute("id", "labels1");
labelContainerElem1.setAttribute("onclick", 'elem1_1.style.display = "block";');
labelContainerElem1.setAttribute("style", 'position: absolute; left: 0;top: 0;color: blue;opacity: 0;display: block;font-size: 1em;');
container.appendChild(labelContainerElem1); 


elem1 = document.createElement('div');
elem1.textContent = 'LABEL' + amountOfLabels;
elem1.setAttribute("style", 'position: absolute;padding:1em;color: black;font-family:metriz;background-color:red; font-size: 1em;width: auto;height: auto;text-align: center;opacity: 0.9;transition: opacity .5s;user-select: none; cursor: pointer;');
labelContainerElem1.appendChild(elem1);
tempVLEFT1 = new THREE.Vector3( );












//original label inside html

anchor1_1 = anchor1.clone();
anchor1_1.material = anchorMat;

labelContainerElem1_1 = document.createElement('div');
labelContainerElem1_1.setAttribute("id", "labels1_1");
labelContainerElem1_1.setAttribute("style", 'position: absolute; left: 0em;top: 0em;color: green;opacity: 1;');
container.appendChild(labelContainerElem1_1); 


elem1_1 = document.createElement('div');
elem1_1.textContent = '';
elem1_1.setAttribute("style", 'position: absolute;z-index: 1;padding: 0.5em;color: white;background: grey;border-radius: 5%;opacity: 0.8;font-family: sans-serif;font-size:0.5em;width: auto;height: auto;transition: opacity .5s;user-select: default; cursor: default;display:none;');
labelContainerElem1_1.appendChild(elem1_1);
tempVLEFT1_1 = new THREE.Vector3( );





























function generateNewLabelData() {


	if (arraysOfallPositionArrays[0].length > 1) {

		window['anchor'+amountOfLabels] = anchor1.clone();
		window['anchor'+amountOfLabels].material = window['LabelMat_'+amountOfLabels];
		window['anchor'+amountOfLabels].scale.set(1.0, window['LabelMat_'+amountOfLabels].map.image.height /window['LabelMat_'+amountOfLabels].map.image.width, 1.0);


		let lablesLotteryNumber = Math.floor(Math.random() * 8);
		let lablesLotteryNumber2 = Math.floor(Math.random() * arraysOfallPositionArrays[lablesLotteryNumber].length);

		window['anchor' + amountOfLabels].position.y = arraysOfallPositionArrays[lablesLotteryNumber][lablesLotteryNumber2].y
		window['anchor' + amountOfLabels].position.x = arraysOfallPositionArrays[lablesLotteryNumber][lablesLotteryNumber2].x
		window['anchor' + amountOfLabels].position.z = arraysOfallPositionArrays[lablesLotteryNumber][lablesLotteryNumber2].z

		arraysOfallPositionArrays[lablesLotteryNumber].splice(lablesLotteryNumber2, lablesLotteryNumber2);

		console.log(arraysOfallPositionArrays[lablesLotteryNumber]);


		switch (lablesLotteryNumber) {
		case 0:
			window['anchor' + amountOfLabels].rotation.y = 3.3;
			break;
		case 1:
			window['anchor' + amountOfLabels].rotation.y = 2.8;
			break;
		case 2:
			window['anchor' + amountOfLabels].rotation.y = 2;
			break;
		case 3:
			window['anchor' + amountOfLabels].rotation.y = 1.3;
			break;
		case 4:
			window['anchor' + amountOfLabels].rotation.y = 0.4;
			break;
		case 5:
			window['anchor' + amountOfLabels].rotation.y = 2.9;
			break;
		case 6:
			window['anchor' + amountOfLabels].rotation.y = 2;
			break;
		case 7:
			window['anchor' + amountOfLabels].rotation.y = 4.3;
			break;

		}

	}
	else {
		console.log("nothing");
	}


	scene.add(window['anchor'+amountOfLabels]);

	window['labelContainerElem'+amountOfLabels] = document.createElement('div');
	window['labelContainerElem'+amountOfLabels].setAttribute("id", "labels"+amountOfLabels);
	window['labelContainerElem'+amountOfLabels].setAttribute("onclick", 'elem'+amountOfLabels+'_'+amountOfLabels+'.style.display = "block";');
	window['labelContainerElem'+amountOfLabels].setAttribute("style", 'position: absolute; left: 0;top: 0;color: blue;opacity: 0;display: block;font-size: 1em;');
	container.appendChild(window['labelContainerElem'+amountOfLabels]); 

	window['elem'+amountOfLabels] = document.createElement('div');
	window['elem'+amountOfLabels].textContent =  'LABEL' + amountOfLabels;
	window['elem'+amountOfLabels].setAttribute("style", 'position: absolute;padding:1em;color: black;font-family:metriz;background-color:blue; font-size: 1em;width: auto;height: auto;text-align: center;opacity: 1;transition: opacity .5s;user-select: none; cursor: pointer;');
	window['labelContainerElem'+amountOfLabels].appendChild(window['elem'+amountOfLabels]);
	window['tempVLEFT'+amountOfLabels] = new THREE.Vector3( );




	//LABEL INTERNAL GREY 

	window['anchor'+amountOfLabels+'_'+amountOfLabels] = window['anchor'+amountOfLabels].clone();
	window['anchor'+amountOfLabels+'_'+amountOfLabels].material = anchorMat;
	
	window['labelContainerElem'+amountOfLabels+'_'+amountOfLabels] = document.createElement('div');
	window['labelContainerElem'+amountOfLabels+'_'+amountOfLabels].setAttribute("id",  "labels"+amountOfLabels+"_"+amountOfLabels);
	window['labelContainerElem'+amountOfLabels+'_'+amountOfLabels].setAttribute("style", 'position: absolute; left: 0em;top: 0em;color: green;opacity: 1;');
	container.appendChild(window['labelContainerElem'+amountOfLabels+'_'+amountOfLabels]);
	
	window['elem'+amountOfLabels+'_'+amountOfLabels] = document.createElement('div');
	window['elem'+amountOfLabels+'_'+amountOfLabels].textContent = '';
	window['elem'+amountOfLabels+'_'+amountOfLabels].setAttribute("style", 'position: absolute;z-index: 1;padding: 0.5em;color: white;background: grey;border-radius: 5%;opacity: 0.8;font-family: sans-serif;font-size:0.5em;width: auto;height: auto;transition: opacity .5s;user-select: default; cursor: default;display:none;');

	window['labelContainerElem'+amountOfLabels+'_'+amountOfLabels].appendChild(window['elem'+amountOfLabels+'_'+amountOfLabels]);
	window['tempVLEFT'+amountOfLabels+'_'+amountOfLabels] = new THREE.Vector3( );


	return [ 
		window['anchor'+amountOfLabels], window['labelContainerElem'+amountOfLabels], window['elem'+amountOfLabels], window['tempVLEFT'+amountOfLabels], window['anchor'+amountOfLabels+'_'+amountOfLabels], window['labelContainerElem'+amountOfLabels+'_'+amountOfLabels], window['elem'+amountOfLabels+'_'+amountOfLabels], window['tempVLEFT'+amountOfLabels+'_'+amountOfLabels], 	window['LabelMat_'+amountOfLabels] 		
	]

};








function cloneLabel() {

	let unpackedLabelsTemp = generateNewLabelData();

	window['Form1_Field1_Name'+amountOfLabels] = document.getElementById("1_Field1").value;
	window['Form1_Field2_Website'+amountOfLabels]  = document.getElementById("1_Field2").value;
	window['Form1_Field3_Location'+amountOfLabels] = document.getElementById("1_Field3").value;

	unpackedLabelsTemp[6].innerHTML = `<div class="lables">
	<div style="color:red; cursor: pointer; z-index:999" onclick="elem${amountOfLabels+'_'+amountOfLabels}.style.display = 'none';
	">X</div>
	<table class="text"><tr>
	<td>Brand/Name:</td><td class="rightcol">${window['Form1_Field1_Name'+amountOfLabels]}</td></tr><tr>
	<td>Website:</td><td class="rightcol"><a href="${window['Form1_Field2_Website'+amountOfLabels] }">${window['Form1_Field2_Website'+amountOfLabels] }</a></td></tr><tr>
	<td>Location:</td><td class="rightcol">${window['Form1_Field3_Location'+amountOfLabels]}</td></tr><tr>
	</div>`


	realTimeUpdatingOfEachLabel = (function() {

		var cached_function = realTimeUpdatingOfEachLabel;

		return function() {
			// original func cache
			var result = cached_function.apply(this, arguments);
					
			unpackedLabelsTemp[0].updateWorldMatrix(true, false);
			unpackedLabelsTemp[0].getWorldPosition(unpackedLabelsTemp[3]); 
			unpackedLabelsTemp[3].project(camera);

			window['x'+amountOfLabels] = (unpackedLabelsTemp[3].x * .5 + .5) * canvas.clientWidth;
			window['y'+amountOfLabels] = (unpackedLabelsTemp[3].y * -.5 + .5) * canvas.clientHeight;
			unpackedLabelsTemp[2].style.transform = `translate(-50%, -50%) translate(${window['x'+amountOfLabels]}px,${window['y'+amountOfLabels]}px)`;

			window['ringDistance'+amountOfLabels] = camera.position.distanceTo(anchor_rigid1.position);
			window['elemDistance'+amountOfLabels] = camera.position.distanceTo(unpackedLabelsTemp[0].position);
			window['elemBehindObject'+amountOfLabels] = window['ringDistance'+amountOfLabels] >	window['elemDistance'+amountOfLabels];
			unpackedLabelsTemp[2].style.opacity = window['elemBehindObject'+amountOfLabels] ? 1 : 0.1;  


			unpackedLabelsTemp[4].updateWorldMatrix(true, false);
			unpackedLabelsTemp[4].getWorldPosition(unpackedLabelsTemp[7]); 
			unpackedLabelsTemp[7].project(camera);
			window['x'+amountOfLabels+'_'+amountOfLabels] = (unpackedLabelsTemp[7].x * .5 + .5) * canvas.clientWidth;
			window['y'+amountOfLabels+'_'+amountOfLabels] = (unpackedLabelsTemp[7].y * -.5 + .5) * canvas.clientHeight;
			unpackedLabelsTemp[6].style.transform = `translate(-50%, -50%) translate(${window['x'+amountOfLabels+'_'+amountOfLabels]}px,${window['y'+amountOfLabels+'_'+amountOfLabels]}px)`;


			window['ringDistance'+amountOfLabels+'_'+amountOfLabels] = camera.position.distanceTo(anchor_rigid1.position);
			window['elemDistance'+amountOfLabels+'_'+amountOfLabels] = camera.position.distanceTo(unpackedLabelsTemp[4].position);
			window['elemBehindObject'+amountOfLabels+'_'+amountOfLabels] = window['ringDistance'+amountOfLabels+'_'+amountOfLabels] > window['elemDistance'+amountOfLabels+'_'+amountOfLabels];
			unpackedLabelsTemp[6].style.opacity = elemBehindObject1_1 ? 0.8 : 0.01; 

		
			return result;
		};
	})();

	amountOfLabels += 1;
}











function generateNewMaterialFromInputedPicture(i) {
	
	window['LabelMat_'+amountOfLabels] = new THREE.MeshBasicMaterial( { 
		side: THREE.DoubleSide, map: i, transparent: true, opacity: 0.9, depthTest: true, depthWrite: true,
	});	

	var a = window['LabelMat_'+amountOfLabels];

	return a;

}







function attachUserSelectedPictureToALabel(e) {

	window['userImage_Form'+amountOfLabels] = e.target.files[0];     
	window['userImage_Form1_URL'+amountOfLabels] = URL.createObjectURL( window['userImage_Form'+amountOfLabels] );
	loader.setCrossOrigin("");

	window['userImage_Form1_Texture'+amountOfLabels] = loader.load(window['userImage_Form1_URL'+amountOfLabels], function (texture) { 	
		window['userImage_Form1_Texture'+amountOfLabels].needsUpdate = true;
		var a = generateNewMaterialFromInputedPicture();
		a.map = window['userImage_Form1_Texture'+amountOfLabels];
	});

}









document.getElementById('userImage_Form1Selector').addEventListener('change', function(e) {

	attachUserSelectedPictureToALabel(e);

}); 










//MAIN SUBMIT BUTTON

document.getElementById("buttonJS_Field1").addEventListener('click', function() {

	if (amountOfLabels === 1) {
		
		Form1_Field1_Name = document.getElementById("1_Field1").value;
		Form1_Field2_Website = document.getElementById("1_Field2").value;
		Form1_Field3_Location= document.getElementById("1_Field3").value;
	
		elem1_1.innerHTML = `<div class="lables">
		<div style="color:red; cursor: pointer; z-index:999" onclick="elem1_1.style.display = 'none';
		">X</div>
		<table class="text"><tr>
		<td>Brand/Name:</td><td class="rightcol">${Form1_Field1_Name}</td></tr><tr>
		<td>Website:</td><td class="rightcol"><a href="${Form1_Field2_Website}">${Form1_Field2_Website}</a></td></tr><tr>
		<td>Location:</td><td class="rightcol">${Form1_Field3_Location}</td></tr><tr>
		</div>`


		anchor1.material = window['LabelMat_'+amountOfLabels];
		
		anchor1.scale.set(1.0, window['LabelMat_'+amountOfLabels].map.image.height / window['LabelMat_'+amountOfLabels].map.image.width, 1.0);

		anchor1.rotation.y = 0.8;
		anchor1.renderOrder = 8;
		arraysOfallPositionArrays[0].shift();
		console.log("afte1shift");
		console.log(arraysOfallPositionArrays[0]);

		scene.add(anchor1);
		

		realTimeUpdatingOfEachLabel = (function() {

			var cached_function = realTimeUpdatingOfEachLabel;
	
			return function() {
				// original func cache
				var result = cached_function.apply(this, arguments); // use .apply() to call it
				anchor1.updateWorldMatrix(true, false);
				anchor1.getWorldPosition(tempVLEFT1); 
				tempVLEFT1.project(camera);
				x1 = (tempVLEFT1.x * .5 + .5) * canvas.clientWidth;
				y1 = (tempVLEFT1.y * -.5 + .5) * canvas.clientHeight;
				elem1.style.transform = `translate(-50%, -50%) translate(${x1}px,${y1}px)`;


				ringDistance1 = camera.position.distanceTo(anchor_rigid1.position);
				elemDistance1 = camera.position.distanceTo(anchor1.position);
				elemBehindObject1 = ringDistance1 > elemDistance1;
				elem1.style.opacity = elemBehindObject1 ? 1 : 0.1;

				
				anchor1_1.updateWorldMatrix(true, false);
				anchor1_1.getWorldPosition(tempVLEFT1_1); 
				tempVLEFT1_1.project(camera);
				x1_1 = (tempVLEFT1_1.x * .5 + .5) * canvas.clientWidth;
				y1_1 = (tempVLEFT1_1.y * -.5 + .5) * canvas.clientHeight;
				elem1_1.style.transform = `translate(-50%, -50%) translate(${x1_1}px,${y1_1}px)`;

				ringDistance1_1 = camera.position.distanceTo(anchor_rigid1.position);
				elemDistance1_1 = camera.position.distanceTo(anchor1_1.position);
				elemBehindObject1_1 = ringDistance1_1 > elemDistance1_1;
				elem1_1.style.opacity = elemBehindObject1_1 ? 0.8 : 0.01;


				return result;
			};
		})();
		amountOfLabels += 1;
	}

	else if (amountOfLabels > 1) {

		cloneLabel();

	} 

});






























//ADD HERE ADDITIONAL CODE (20july)
function realTimeUpdatingOfEachLabel() {
}
























































//function for resizing window
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
	camera.updateProjectionMatrix();
	controls.update();

	realTimeUpdatingOfEachLabel();
	
}















requestAnimationFrame(render);
render();



































/* for dat gui control (5july21)
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
	folder.add(vector3, 'x', -1, 1).onChange(onChangeFn);
	folder.add(vector3, 'y', -1, 1).onChange(onChangeFn);
	folder.add(vector3, 'z', -1, 1).onChange(onChangeFn);
	folder.open();
}
const gui = new dat.GUI();
//gui.addColor(new ColorGUIHelper(powderBlue, 'color'), 'value').name('color');
//gui.add(light, 'intensity', 0, 2, 0.01);
makeXYZGUI(gui, anchor1.rotation, 'rot');
makeXYZGUI(gui, anchor1.position, 'pos');
makeXYZGUI(gui, anchor1.scale, 'sc');
//makeXYZGUI(gui, light.target.position, 'target', updateLight);
//makeXYZGUI(gui, anchor10.position, 'position', updateLight);
//makeXYZGUI(gui, anchor2.rotation, 'rotation', updateLight);
//DAT GUI END SECTION 
*/
























//https://stackoverflow.com/questions/51722754/three-js-image-aspect-ratio

/*6July CURVED Geom for main label template
const radiusTop = 0.5;  
const radiusBottom =  0.5;  
const height =  0.8;  
const radialSegments =  8;  
const heightSegments =  1;  
const openEnded = true;  
const thetaStart = Math.PI * 0.00;  
const thetaLength = Math.PI * 0.62;  
const geometry1 = new THREE.CylinderGeometry(
    radiusTop, radiusBottom, height,
    radialSegments, heightSegments,
    openEnded,
    thetaStart, thetaLength
);
*/

