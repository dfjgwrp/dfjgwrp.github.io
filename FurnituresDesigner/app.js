(function() {

var App = function(canvasId) {
    return this.init(canvasId); 
};


var Utils = {
    PI_HALF: Math.PI / 2,
    PI_180: Math.PI / 180,
    isWebGLSupported: function(canvas) {
        var glContextNames = ['webgl', 'experimental-webgl'];
        for (var i = 0; i < glContextNames.length; i++) {
            try {
                if (canvas.getContext(glContextNames[i]) !== null && !!window.WebGLRenderingContext) {
                    return true;
                }
            } catch(e) {}
        }
        return false;
    },
};


App.prototype = {
/*     showFps: false,
    showWorldAxis: false,
    antialias: true,
    fov: 70,
    sceneSize: 2000,
    cameraInitialPosition: [-3173, 3130, -3388],
 */



    showFps: true,
    showWorldAxis: true,
    antialias: true,
    fov: 20,
    sceneSize: 10000,
    
    cameraInitialPosition: [-90, 500, -10],


    
    assetsPath: 'assets/',

    distanceBetweenShelvesMin: 1,

    roomSizeMin: 50000,
    roomSizeStep: 100,
    roomHeightMax: 5000,
    roomWidthMax: 10000,
    roomLengthMax: 20000,

    sectionsNumMax: 3,
    shelvesNumMax: 20,

    distanceFromFloorMin: 0,
    distanceFromFloorMax: 0,
    distanceFromFloorStep: 1,
    distanceFromTopMin: 0,
    distanceFromTopMax: 0,
    distanceFromTopStep: 1,

    pillarThicknessMin: 3,
    pillarThicknessMax: 5,
    pillarThicknessStep: 1,

    pillarHeightMin: 1000,
    pillarHeightMax: 4000,
    pillarHeightStep: 1,

    shelfThicknessMin: 5,
    shelfThicknessMax: 100,
    shelfThicknessStep: 1,

    shelfWidthMin: 1,
    shelfWidthMax: 1000,
    shelfWidthStep: 1,
    shelfLengthMin: 1,
    shelfLengthMax: 2000,
    shelfLengthStep: 1,

    roomSizeTextureStep: 100,
    floorTextureRepeatXPerStep: 0.8,
    floorTextureRepeatYPerStep: 0.8,

    wallTextureRepeatXPerStep: 0.25,
    wallTextureRepeatYPerStep: 0.25,
    
    boardTextureStep: 1000,
    boardTextureRepeatXPerStep: 2,
    boardTextureRepeatYPerStep: 1,

    currency: '£',
    output: {
        quantity: '',
        pillarsQuantity: '',
        shelvingQuantity: '',
        price: '',
        pillarsPrice: '',
        shelvingPrice: '',
    },
    textures: [
        {
            name: 'Beech',
            src: 'beech.jpg',
            price: 295,
            map: null
        },
        {
            name: 'Birch',
            src: '02black.jpg',
            price: 184,
            map: null
        },
        {
            name: 'White1',
            src: '01white.jpg',
            price: 276,
            map: null
        },
        {
            name: '84V_WoodTexture4',
            src: '84V_WoodTexture4.jpg',
            price: 221,
            map: null
        },
        {
            name: '75V_WoodTexture6',
            src: 'cherry.jpg',
            price: 221,
            map: null
        },
        {
            name: '5AR_woodTexture1',
            src: '5AR_woodTexture1.jpg',
            price: 221,
            map: null
        },
        {
            name: '231AT_WoodTexture3.jpg',
            src: '231AT_WoodTexture3.jpg',
            price: 154,
            map: null
        },
        
        {
            name: '06F_ConcreteTexture2',
            src: '06F_ConcreteTexture2.jpg',
            price: 84,
            map: null
        },
        {
            name: '03gray',
            src: '03gray.jpg',
            price: 154,
            map: null
        },
        {
            name: '04beige',
            src: '04beige.jpg',
            price: 154,
            map: null
        },
        {
            name: '05light_gray',
            src: '05light_gray.jpg',
            price: 154,
            map: null
        },
        {
            name: '98Q',
            src: '98Q.jpg',
            price: 154,
            map: null
        },
    ],

    options: {
        room: {
            height: 2340,
            length: 1100,
            width: 2000
        },
        floor: {
            //color: '#d8d2f7',
            texture: 'floor-carpeting.jpg'
        },        
        wall: {
            color: '#e8ebeb',
            //texture: '98Q_icon.png'
        },
        
        shelvesNum: 2,
        sectionsNum: 1,
        distanceFromFloor: 0,
        distanceFromTop: 0,
        distanceBetweenShelves: 0,

        pillar: {
            thickness: 2,
            height: 45,
            color: '#fdfdfd',
            texture: 3 // an index in this.textures array
        },
        shelf: {
            length: 75,
            width: 45,
            thickness: 2,
            color: '#fdfdfd',
            texture: 3 // an index in this.textures array
        },

        shelvesNumOnDemand: 0,
        distanceBetweenShelvesOnDemand: 400,

        shelvesNumOnDemand_section2: 0,
        distanceBetweenShelvesOnDemand_section2: 400,

        pillar1Position: 0,
        pillar2Position: 0,

        wasChangedSectionsLengthOrNot: 0,
        amountOfSections: 1,
        section1Length: 76,
        section2Length: 0,
        section3Length: 0,

        shelfOnDemand_0_1_State: 0,
        shelfOnDemand_0_2_State: 0,
        shelfOnDemand_0_3_State: 0,
        shelfOnDemand_0_4_State: 0,
        shelfOnDemand_0_5_State: 0,

        shelfOnDemand_section2_0_1_State: 0,
        shelfOnDemand_section2_0_2_State: 0,
        shelfOnDemand_section2_0_3_State: 0,
        shelfOnDemand_section2_0_4_State: 0,
        shelfOnDemand_section2_0_5_State: 0,

    },









    objectsOptions: {
        'Fitting3': {path: 'Fitting3/', scale: [10, 10, 10], offset: [200, 0, -250], rotation: [0, 0, 0]},
        'shelfWidth_fittings': {path: 'shelfWidth_fittings/', scale: [10, 10, 10], offset: [200, 0, -250], rotation: [0, 0, 0]},
        'livreJava': {path: 'livreJava/', scale: [14, 14, 14], offset: [100, 1000, 700], rotation: [0, 0, 0]}, 
    },




    init: function(canvasId) {
        var self = this;
        this.canvas = document.getElementById(canvasId);
        
        if (!Utils.isWebGLSupported(this.canvas)) {
            this.showError('Unfortunately your browser is not supported');
            return this;
        }
        
        this.scene = new THREE.Scene();
        this.engine = new THREE.WebGLRenderer({
            antialias: true,
            canvas: this.canvas,
        });        
        this.scene.background = new THREE.Color('#000000');

        this.engine.setSize(window.innerWidth, window.innerHeight, true);
        this.engine.setClearColor(0x000000);
        this.engine.setPixelRatio(window.devicePixelRatio);
        
        this.engine.shadowMap.enabled = true
        this.engine.shadowMap.type = THREE.PCFSoftShadowMap 
        /*
        this.engine.setClearColor(0x748347)
        this.engine.setPixelRatio(this.ratio)        
        this.engine.setSize( this.w, this.h )
        this.engine.toneMappingExposure = 1
        this.engine.toneMapping = THREE.Uncharted2ToneMapping
        this.engine.gammaOutput = true
        this.engine.gammaInput = true
        this.engine.gammaFactor = 1.9;  */


        this.camera = new THREE.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 1, this.sceneSize);

        this.camera.position.set(
            this.cameraInitialPosition[0], this.cameraInitialPosition[1], -this.cameraInitialPosition[2]
        );
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        

        
        var controls = new THREE.OrbitControls(this.camera, this.canvas);
        controls.enablePan = false;
        controls.maxPolarAngle = 88 * Utils.PI_180;
        controls.minPolarAngle = 85 * Utils.PI_180;
        controls.target.set(49, -10, -1500);
        controls.minDistance = 800;
        controls.maxDistance = 1100;

        controls.enableDamping = false; 
        controls.dampingFactor = 0.1;
        controls.rotateSpeed = 0.03;
        controls.zoomSpeed = 0.099;

        //controls.maxPolarAngle = Math.PI/1; 
        //controls.minPolarAngle = Math.PI/5.5; // radians
        
        controls.maxAzimuthAngle = 0.1; // radians
        controls.minAzimuthAngle = -0.19; // radians

        this.controls = controls;










        //POSTPROCESSING SECTION 
        this.clock = new THREE.Clock();
 
        this.w = window.innerWidth || 1
        this.h = window.innerHeight || 1
        //this.ratio = window.devicePixelRatio 
        //|| 1

        var deltaTime;

        this.composer = new THREE.EffectComposer( this.engine );
        this.composer.setSize( this.w, this.h )

        this.renderPass = new THREE.RenderPass( this.scene, this.camera );
        this.composer.addPass( this.renderPass );  
        
        //this is slow even without elow SAO
        /*
        this.ssaaRenderPass = new THREE.SSAARenderPass(this.scene, this.camera, 0xAAAAAA, 0)
        this.composer.addPass(this.ssaaRenderPass) */
    
        this.SAO = new THREE.SAOPass(this.scene, this.camera, false, true)
        this.SAO.resolution.set(1, 1)
        this.composer.addPass(this.SAO) 

        this.SAO['params']['output'] = THREE.SAOPass.OUTPUT.Default
        this.SAO['params']['saoBias'] = 0.2
        this.SAO['params']['saoIntensity'] = 0.00006
        this.SAO['params']['saoScale'] = 1.1
        this.SAO['params']['saoKernelRadius'] = 3
        this.SAO['params']['saoMinResolution'] = 0
        this.SAO['params']['saoBlur'] = true
        this.SAO['params']['saoBlurRadius'] = 0.1
        this.SAO['params']['saoBlurStdDev'] = 1
        this.SAO['params']['saoBlurDepthCutoff'] = 2
        





        
        
        var light = new THREE.DirectionalLight(0xffffff, 55);
        this.scene.add(light);
        light.position.set(0, 3300, 1599);
        light.intensity = 5.9;
        this.light = light; 
        

    












        //LISTENERS (FOR ADDING NEW OBJECTS EVENTS AND OTHER)
        
        window.addEventListener('resize', function() {

            //not working V V V 
            /* self.engine.setSize(window.innerWidth, window.innerHeight, true);
            self.camera.aspect = window.innerWidth / window.innerHeight;
            self.camera.updateProjectionMatrix(); */
        });





        var backPlate_js_eventReactor_var = document.getElementById("typeBack");
        backPlate_js_eventReactor_var.addEventListener('change', function() {

            if (backPlate_js_eventReactor_var.value === "Add") {
                self.changeBackPlateVisibilityPlus();}
            else if (backPlate_js_eventReactor_var.value === "Remove")  {
                self.changeBackPlateVisibilityMinus();
            }
        });




































        //current task! --->

        //width

        //document.getElementById("subdomainWidthCabinet_Dimensions").addEventListener('input', function() {

        document.getElementById('subdomainWidthCabinet_Dimensions').onchange = function () {

            /*  if (parseInt(this.value) > 3999 || parseInt(this.value) < 299) {
                this.value = 700; 
            } */
            
            var max = parseInt(this.max);

            if (parseInt(this.value) > max) {
            window.alert("Maximum 110cm!");
            this.value = 75; 
            }

            var min = parseInt(this.min);

            if (parseInt(this.value) < min) {
             window.alert("Minimum 60cm!");
            } 

            var selectedWidth = parseInt(document.getElementById("subdomainWidthCabinet_Dimensions").value, 10);

            if (selectedWidth < 59) {} else if (selectedWidth > 59 && selectedWidth < 111 ) {

                console.log('inside');
                self.options.wasChangedSectionsLengthOrNot = 0;
                self.options.shelf.length = selectedWidth;

                self.scene.remove(self.shelving);
                self.updatePillarProtoMaterial();
                self.updateShelfProtoMaterial();
                self.createShelving();
                self.calculateOutput();
                
                self.createBackPlate()

                switch (self.options.amountOfSections) {

                    case 1:
                    self.options.section1Length = self.options.shelf.length;
                    self.options.section2Length = 0;
                    self.options.pillar1Position = 0;
                    self.createWireframeBack_section1();
                    self.createWireframeBack_section2();
                    

                    //on demand... that means, for stuff inside of section
                    //self.createShelvingOnDemand();
                    //self.createShelvingOnDemand_section2();
                    /* self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_1", true ).position.y = self.options.shelfOnDemand_0_1_State;
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_2", true ).position.y = self.options.shelfOnDemand_0_2_State; 
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_3", true ).position.y = self.options.shelfOnDemand_0_3_State;  */
                    break;
                    

                    case 2:
                    self.options.section1Length = self.options.shelf.length / 2;
                    self.options.section2Length = self.options.shelf.length - self.options.section1Length;
                    self.pillar1.position.x = 0;
                    self.options.pillar1Position = 0;
                    self.createPillar1();
                    self.createWireframeBack_section1();
                    self.createWireframeBack_section2();

                    //on demands...
                    //self.createShelvingOnDemand();
                    //self.createShelvingOnDemand_section2();
                    /* self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_1", true ).position.y = self.options.shelfOnDemand_0_1_State;
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_2", true ).position.y = self.options.shelfOnDemand_0_2_State; 
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_3", true ).position.y = self.options.shelfOnDemand_0_3_State; 
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_1", true ).position.y = self.options.shelfOnDemand_section2_0_1_State;
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_2", true ).position.y = self.options.shelfOnDemand_section2_0_2_State; 
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_3", true ).position.y = self.options.shelfOnDemand_section2_0_3_State;  */
                    break;



                    case 3:

                    self.options.section1Length = self.options.shelf.length / 3;
                    self.options.section2Length = self.options.shelf.length - self.options.section1Length * 2;
                    self.options.section3Length = self.options.shelf.length - self.options.section1Length * 2;

                    self.pillar1.position.x = 0;
                    self.options.pillar1Position = 0;

                    self.createPillar1();
                    self.createPillar2();

                    self.createWireframeBack_section1();
                    self.createWireframeBack_section2();
                    self.createWireframeBack_section3(); 

                    //on demand...
                    //self.createShelvingOnDemand();
                    //self.createShelvingOnDemand_section2();
                    /* self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_1", true ).position.y = self.options.shelfOnDemand_0_1_State;
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_2", true ).position.y = self.options.shelfOnDemand_0_2_State; 
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_3", true ).position.y = self.options.shelfOnDemand_0_3_State; 
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_1", true ).position.y = self.options.shelfOnDemand_section2_0_1_State;
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_2", true ).position.y = self.options.shelfOnDemand_section2_0_2_State; 
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_3", true ).position.y = self.options.shelfOnDemand_section2_0_3_State;  */
                    break;


                    /* case 2:
                    self.options.section1Length = self.options.shelf.length / 2;
                    self.options.section2Length = self.options.shelf.length - self.options.section1Length;
                    self.pillar1.position.x = 0;
                    self.options.pillar1Position = 0;
                    self.createPillar1();
                    self.createWireframeBack_section1();
                    self.createWireframeBack_section2();
                    self.createShelvingOnDemand();
                    self.createShelvingOnDemand_section2();
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_1", true ).position.y = self.options.shelfOnDemand_0_1_State;
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_2", true ).position.y = self.options.shelfOnDemand_0_2_State; 
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_3", true ).position.y = self.options.shelfOnDemand_0_3_State; 
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_1", true ).position.y = self.options.shelfOnDemand_section2_0_1_State;
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_2", true ).position.y = self.options.shelfOnDemand_section2_0_2_State; 
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_3", true ).position.y = self.options.shelfOnDemand_section2_0_3_State; 
                    break; */
                } 
            }
        }
















        //height

        document.getElementById('subdomainHeightCabinet_Dimensions').onchange = function () {
            
            var max = parseInt(this.max);
            if (parseInt(this.value) > max) {
                window.alert("Maximum 50cm!");
                this.value = 50; 
            }

            var min = parseInt(this.min);
            if (parseInt(this.value) < min) {
                window.alert("Minimum 35cm!");
            }

            var selectedHeight = parseInt(document.getElementById("subdomainHeightCabinet_Dimensions").value, 10);

            /* if (hT2 < 499) {} else if (hT2 > 499 && hT2 < 3501 ) {*/

            if (selectedHeight < 35) {} else if (selectedHeight > 34 && selectedHeight < 51 ) {

                self.options.wasChangedSectionsLengthOrNot = 0;
                self.options.pillar.height = selectedHeight;
                
                self.scene.remove(self.shelving);
                self.updatePillarProtoMaterial();
                self.updateShelfProtoMaterial();
                self.createShelving();
                self.calculateOutput();
                self.createBackPlate()
                
                switch (self.options.amountOfSections) {

                    case 1:
                    self.options.section1Length = self.options.shelf.length;
                    self.options.section2Length = 0;
                    self.options.pillar1Position = 0;
                    self.createWireframeBack_section1();
                    self.createWireframeBack_section2();

                    //on demand...
                    /* self.createShelvingOnDemand();
                    self.createShelvingOnDemand_section2();
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_1", true ).position.y = self.options.shelfOnDemand_0_1_State;
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_2", true ).position.y = self.options.shelfOnDemand_0_2_State; 
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_3", true ).position.y = self.options.shelfOnDemand_0_3_State;  */
                    break;

                    case 2:
                    self.options.section1Length = self.options.shelf.length / 2;
                    self.options.section2Length = self.options.shelf.length - self.options.section1Length;
                    self.pillar1.position.x = 0;
                    self.options.pillar1Position = 0;
                    self.createPillar1();
                    self.createWireframeBack_section1();
                    self.createWireframeBack_section2();

                    //on demand...
                    /* self.createShelvingOnDemand();
                    self.createShelvingOnDemand_section2();
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_1", true ).position.y = self.options.shelfOnDemand_0_1_State;
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_2", true ).position.y = self.options.shelfOnDemand_0_2_State; 
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_3", true ).position.y = self.options.shelfOnDemand_0_3_State; 
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_1", true ).position.y = self.options.shelfOnDemand_section2_0_1_State;
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_2", true ).position.y = self.options.shelfOnDemand_section2_0_2_State; 
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_3", true ).position.y = self.options.shelfOnDemand_section2_0_3_State;  */
                    break;


                    case 3:
                    self.options.section1Length = self.options.shelf.length / 3;

                    self.options.section2Length = self.options.shelf.length - self.options.section1Length * 2;
    
                    self.options.section3Length = self.options.shelf.length - self.options.section1Length * 2;

                    self.pillar1.position.x = 0;
                    self.options.pillar1Position = 0;

                    self.createPillar1();
                    self.createPillar2();

                    self.createWireframeBack_section1();
                    self.createWireframeBack_section2();
                    self.createWireframeBack_section3(); 

                    //on demand...
                    /* self.createShelvingOnDemand();
                    self.createShelvingOnDemand_section2();
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_1", true ).position.y = self.options.shelfOnDemand_0_1_State;
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_2", true ).position.y = self.options.shelfOnDemand_0_2_State; 
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_3", true ).position.y = self.options.shelfOnDemand_0_3_State; 
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_1", true ).position.y = self.options.shelfOnDemand_section2_0_1_State;
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_2", true ).position.y = self.options.shelfOnDemand_section2_0_2_State; 
                    self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_3", true ).position.y = self.options.shelfOnDemand_section2_0_3_State;  */
                    break;
                }
            }
        }





        //depth

        document.getElementById('subdomainDepth_Cabinet_Dimensionsz').onchange = function () {

            var max = parseInt(this.max);
            if (parseInt(this.value) > max + 1) {
                window.alert("Maximum 65cm!");
                this.value = 65; 
            }

            var min = parseInt(this.min);
            if (parseInt(this.value) < min) {
                window.alert("Minimum 35cm!");
            }
            
            var selectedDepth = parseInt(document.getElementById("subdomainDepth_Cabinet_Dimensionsz").value, 10);

            if (selectedDepth < 35 ) {} else if (selectedDepth > 34 && selectedDepth < 66 ) {

                self.options.shelf.width = selectedDepth;
                self.scene.remove(self.shelving);
                self.updatePillarProtoMaterial();
                self.updateShelfProtoMaterial();
                self.createShelving();
                self.calculateOutput();
                self.createBackPlate()
                
                switch (self.options.amountOfSections) {

                    case 1:
                    self.options.section1Length = self.options.shelf.length;
                    self.options.section2Length = 0;
                    self.options.pillar1Position = 0;

                    self.createWireframeBack_section1();
                    self.createWireframeBack_section2();

                    /* self.createShelvingOnDemand();
                    self.createShelvingOnDemand_section2(); */

                    /* self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_1", true ).position.y = self.options.shelfOnDemand_0_1_State;
                    self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_2", true ).position.y = self.options.shelfOnDemand_0_2_State; */
                    break;



                    case 2:

                    self.options.section1Length = self.options.shelf.length / 2;
                    self.options.section2Length = self.options.shelf.length - self.options.section1Length;
                    self.pillar1.position.x = 0;
                    self.options.pillar1Position = 0;

                    self.createPillar1();

                    self.createWireframeBack_section1();
                    self.createWireframeBack_section2();

                    /* self.createShelvingOnDemand();
                    self.createShelvingOnDemand_section2(); */

                    break;




                    case 3:


                    self.options.section1Length = self.options.shelf.length / 3;
                    self.options.section2Length = self.options.shelf.length - self.options.section1Length * 2;
                    self.options.section3Length = self.options.shelf.length - self.options.section1Length * 2;

                    self.createPillar1();
                    self.createPillar2();

                    self.createWireframeBack_section1();
                    self.createWireframeBack_section2();
                    self.createWireframeBack_section3(); 

                    //on demand...
                    /* self.createShelvingOnDemand();
                    self.createShelvingOnDemand_section2(); */

                }
            }
        };


        // 
        //"amount of vertical section"
        document.getElementById('subdomainNumberElementCorpus_Cabinet_Dimensionsz').oninput = function () {

            var max = parseInt(this.max);

            if (parseInt(this.value) > max) {
            this.value = max; 
            }

            switch (this.value) {
               
                //ui
                /* VerticalWidth_1_Corpus_Dimensions.style.display = "none";
                VerticalWidth_2_Corpus_Dimensions.style.display = "none";
                VerticalWidth_3_Corpus_Dimensions.style.display = "none";
                NumberElementCorpus_Dimensions.style.height = "3.2em";
                Fittings_Vertical_section_1.style.display = "block";
                Fittings_Vertical_section_2.style.display = "none";
                Fittings_Vertical_section_3.style.display = "none"; */
                //3d
                /* case '0':
                document.getElementById("positionPillar1").innerHTML = self.options.section1Length+"cm↔";

                self.options.amountOfSections = 1;
                self.options.wasChangedSectionsLengthOrNot = 0;
                self.scene.remove(self.pillar1);

                self.scene.remove(self.shelving);
                self.updatePillarProtoMaterial();
                self.updateShelfProtoMaterial();
                self.createShelving();
                self.calculateOutput();
                self.createBackPlate()

                self.options.section1Length = self.options.shelf.length;
                self.options.section2Length = 0;
                self.options.pillar1Position = 0;

                self.createWireframeBack_section1();
                self.createWireframeBack_section2();
                self.createShelvingOnDemand();
                self.createShelvingOnDemand_section2();

                self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_1", true ).position.y = self.options.shelfOnDemand_0_1_State;
                self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_2", true ).position.y = self.options.shelfOnDemand_0_2_State; 
                self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_3", true ).position.y = self.options.shelfOnDemand_0_3_State; 
                self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_1", true ).position.y = self.options.shelfOnDemand_section2_0_1_State;
                self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_2", true ).position.y = self.options.shelfOnDemand_section2_0_2_State; 
                self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_3", true ).position.y = self.options.shelfOnDemand_section2_0_3_State;  
  
                document.getElementById("positionPillar1").innerHTML = self.options.section1Length+"cm↔";

                break; 
                
                */
            


                case '1':
                //ui
                /* VerticalWidth_1_Corpus_Dimensions.style.display = "none";
                VerticalWidth_2_Corpus_Dimensions.style.display = "none";
                VerticalWidth_3_Corpus_Dimensions.style.display = "none";
                NumberElementCorpus_Dimensions.style.height = "3.2em";
                Fittings_Vertical_section_1.style.display = "block";
                Fittings_Vertical_section_2.style.display = "none";
                Fittings_Vertical_section_3.style.display = "none"; */

                //3d
                //1Jan  document.getElementById("positionPillar1").innerHTML = self.options.section1Length+"cm↔";

                self.options.amountOfSections = 1;
                self.options.wasChangedSectionsLengthOrNot = 0;
                self.scene.remove(self.shelving);
                self.updatePillarProtoMaterial();
                self.updateShelfProtoMaterial();
                self.createShelving();
                self.calculateOutput();
                self.createBackPlate()

                self.options.section1Length = self.options.shelf.length;
                self.options.section2Length = 0;
                self.options.pillar1Position = 0;


                //remove section 3 and 2's pillar and back
                self.scene.remove(self.pillar1);
                self.scene.remove(self.section2_WireframeMesh);

                self.scene.remove(self.section3_WireframeMesh);
                self.scene.remove(self.pillar2);


                self.createWireframeBack_section1();
                self.createWireframeBack_section2();
                self.createShelvingOnDemand();
                self.createShelvingOnDemand_section2();

                
                //1Jan document.getElementById("positionPillar1").innerHTML = self.options.section1Length+"cm↔";

                break;


                case '2':
                //ui
                /* VerticalWidth_1_Corpus_Dimensions.style.display = "block";
                VerticalWidth_2_Corpus_Dimensions.style.display = "none";
                VerticalWidth_3_Corpus_Dimensions.style.display = "none";
                Fittings_Vertical_section_1.style.display = "block";
                Fittings_Vertical_section_2.style.display = "block";
                Fittings_Vertical_section_3.style.display = "none";
                NumberElementCorpus_Dimensions.style.height = "6.1em"; */

                //1Jan document.getElementById("positionPillar1").innerHTML = 350+"cm↔"; 

                //3d
                self.options.amountOfSections = 2;
                self.options.wasChangedSectionsLengthOrNot = 1;

                self.options.section1Length = self.options.shelf.length / 2;
                self.options.section2Length = self.options.shelf.length - self.options.section1Length;

                //remove section 3's pillar and back
                self.scene.remove(self.section3_WireframeMesh);
                self.scene.remove(self.pillar2);

                self.createWireframeBack_section1();
                self.createWireframeBack_section2();

                self.createPillar1();
                self.createShelvingOnDemand();
                self.options.pillar1Position = 0;

                break;


                case '3':
                //ui
                /* VerticalWidth_1_Corpus_Dimensions.style.display = "block";
                VerticalWidth_2_Corpus_Dimensions.style.display = "none";
                VerticalWidth_3_Corpus_Dimensions.style.display = "none";
                Fittings_Vertical_section_1.style.display = "block";
                Fittings_Vertical_section_2.style.display = "block";
                Fittings_Vertical_section_3.style.display = "none";
                NumberElementCorpus_Dimensions.style.height = "6.1em"; */
                //1Jan document.getElementById("positionPillar1").innerHTML = 350+"cm↔"; 

                //3d

                self.options.amountOfSections = 3;

                self.options.wasChangedSectionsLengthOrNot = 1;


                self.options.section1Length = self.options.shelf.length / 3;

                self.options.section2Length = self.options.shelf.length - self.options.section1Length * 2;

                self.options.section3Length = self.options.shelf.length - self.options.section1Length * 2;


                self.createPillar1();
                self.createPillar2();

                self.createWireframeBack_section1();
                self.createWireframeBack_section2();
                self.createWireframeBack_section3(); 

                self.createShelvingOnDemand();

                break;

                
            }

        }



 















        //24APR events to move pillars (verticals)
        var var_CorpusElements_Vertical_Width_1_PrevBut = document.getElementById("CorpusElements_Vertical_Width_1_PrevBut");
        var_CorpusElements_Vertical_Width_1_PrevBut.addEventListener('click', function() {

            if (self.options.section1Length > 50 ) {

            document.getElementById("positionPillar1").innerHTML = self.options.section1Length+"cm↔";

            self.options.wasChangedSectionsLengthOrNot = 1;
            self.options.section1Length -= 50;
            self.options.section2Length += 50;
            self.options.pillar1Position -= 50;

            self.options.section1Length = self.options.section1Length;
            self.options.section2Length = self.options.shelf.length - self.options.section1Length;
            self.pillar1.position.x = self.options.pillar1Position;
            self.createWireframeBack_section1();
            self.createWireframeBack_section2();
            self.createShelvingOnDemand();
            self.createShelvingOnDemand_section2();

            self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_1", true ).position.y = self.options.shelfOnDemand_0_1_State;
            self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_2", true ).position.y = self.options.shelfOnDemand_0_2_State; 
            self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_3", true ).position.y = self.options.shelfOnDemand_0_3_State; 

            self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_1", true ).position.y = self.options.shelfOnDemand_section2_0_1_State;
            self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_2", true ).position.y = self.options.shelfOnDemand_section2_0_2_State; 
            self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_3", true ).position.y = self.options.shelfOnDemand_section2_0_3_State; 
            


            }
            else {};
            
        });


        var var_CorpusElements_Vertical_Width_1_NextBut = document.getElementById("CorpusElements_Vertical_Width_1_NextBut");

        var_CorpusElements_Vertical_Width_1_NextBut.addEventListener('click', function() {
   
            if (self.options.section1Length < self.options.shelf.length - 50) {

                document.getElementById("positionPillar1").innerHTML = self.options.section1Length+"cm↔";

                
                self.options.wasChangedSectionsLengthOrNot = 1;
                self.options.section1Length += 50;
                self.options.section2Length -= 50;
                self.options.pillar1Position += 50;

                self.scene.remove(self.shelving);
                self.updatePillarProtoMaterial();
                self.updateShelfProtoMaterial();
                self.createShelving();
                self.calculateOutput();
                self.createBackPlate()
                self.options.section1Length = self.options.section1Length;
                self.options.section2Length = self.options.shelf.length - self.options.section1Length;
                self.pillar1.position.x = self.options.pillar1Position;
                
                self.createWireframeBack_section1();
                self.createWireframeBack_section2();
                self.createShelvingOnDemand();
                self.createShelvingOnDemand_section2();

                self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_1", true ).position.y = self.options.shelfOnDemand_0_1_State;
                self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_2", true ).position.y = self.options.shelfOnDemand_0_2_State; 
                self.shelvingOnDemand.getObjectByName( "shelfOnDemand_0_3", true ).position.y = self.options.shelfOnDemand_0_3_State; 

                self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_1", true ).position.y = self.options.shelfOnDemand_section2_0_1_State;
                self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_2", true ).position.y = self.options.shelfOnDemand_section2_0_2_State; 
                self.shelvingOnDemand_section2.getObjectByName( "shelfOnDemand_section2_0_3", true ).position.y = self.options.shelfOnDemand_section2_0_3_State; 
                
            }
            else {};
        });
 
        /* var var_CorpusElements_Vertical_Width_2_NextBut = document.getElementById("CorpusElements_Vertical_Width_2_NextBut");
        var_CorpusElements_Vertical_Width_2_NextBut.addEventListener('click', function() {
            self.shelving.getObjectByName( "pillar_2", true ).position.x += 50;
        });
        var var_CorpusElements_Vertical_Width_2_PrevBut = document.getElementById("CorpusElements_Vertical_Width_2_PrevBut");
        var_CorpusElements_Vertical_Width_2_PrevBut.addEventListener('click', function() {
            self.shelving.getObjectByName( "pillar_2", true ).position.x -= 50;
        });

        var var_CorpusElements_Vertical_Width_3_NextBut = document.getElementById("CorpusElements_Vertical_Width_3_NextBut");
        var_CorpusElements_Vertical_Width_3_NextBut.addEventListener('click', function() {
            self.shelving.getObjectByName( "pillar_3", true ).position.x += 50;
        });
        var var_CorpusElements_Vertical_Width_3_PrevBut = document.getElementById("CorpusElements_Vertical_Width_3_PrevBut");
        var_CorpusElements_Vertical_Width_3_PrevBut.addEventListener('click', function() {
            self.shelving.getObjectByName( "pillar_3", true ).position.x -= 50;
        });

        var var_CorpusElements_Vertical_Width_4_NextBut = document.getElementById("CorpusElements_Vertical_Width_4_NextBut");
        var_CorpusElements_Vertical_Width_4_NextBut.addEventListener('click', function() {
            self.shelving.getObjectByName( "pillar_4", true ).position.x += 50;
        });
        var var_CorpusElements_Vertical_Width_4_PrevBut = document.getElementById("CorpusElements_Vertical_Width_4_PrevBut");
        var_CorpusElements_Vertical_Width_4_PrevBut.addEventListener('click', function() {
            self.shelving.getObjectByName( "pillar_4", true ).position.x -= 50;
        }); */

























































































































































        this.textureLoader = new THREE.TextureLoader(this.loader);
        this.fontloader = new THREE.FontLoader(this.loader);
        var loader = new THREE.LoadingManager();
        loader.onLoad = function() {
            self.onAssetsLoaded();
        };
        this.loader = loader;

        this.loadModels();
        this.loadTextures();

        this.createFloor();
        
        this.createWall();
        this.createShelving();
        this.createBackPlate();

        this.createWireframeBack_section1();
        this.createShelvingOnDemand();
        this.createShelvingOnDemand_section2();


        this.calculateOutput();
        this.run();
        return this;
    },





























    loadModels: function() {

        var self = this;
        this.models = {};

        for (var name in this.objectsOptions) {

            var params = this.objectsOptions[name];
            var mtlLoader = new THREE.MTLLoader(this.loader);
            mtlLoader.setPath(this.assetsPath + params.path);
            mtlLoader.load(name + '.mtl', function(name, params) {
                return function(materials) {
                    materials.preload();
                    var objLoader = new THREE.OBJLoader(self.loader);
                    objLoader.setMaterials(materials);
                    objLoader.setPath(self.assetsPath + params.path);
                    objLoader.load(name + '.obj', function(object) {
                    self.onLoadModel(name, object, params);
                    var box = new THREE.Box3().setFromObject( object );
                    });
                }
            }(name, params));
        }
    },









    onLoadModel: function(name, object, params) {
        object.name = name;
        object.visible = false;
        object.scale.set(params.scale[0], params.scale[0], params.scale[0]);
        object.position.set(params.offset[0], params.offset[1], params.offset[2]);
        object.rotation.set(params.rotation[0], params.rotation[1], params.rotation[2]);
        this.models[name] = object;
        this.scene.add(object);
        //this.EventsControls1.attach( object );

        if (name === 'YosemiteFrame' || name === 'shelfWidth_fittings') {
            object.children.forEach(function(obj) {
                obj.material.needsUpdate = true;
                obj.material.shininess = 12;
            });
        }

        if (name === 'Fitting3' || name === 'shelfWidth_fittings') {
            object.children.forEach(function(obj) {
                obj.material.needsUpdate = true;
                obj.material.shininess = 12;
            });
        }

        if (name === 'Doors1' || name === 'Doors1') {
            object.children.forEach(function(obj) {
                obj.material.needsUpdate = true;
                obj.material.shininess = 2;
            });
            object.visible = false;
        }


    },









    placeModels: function() {
        var isVisible = (this.options.viewMode == App.ViewModeEnv) && (this.options.room.length >= 3000);

        for (var name in this.models) {
            var object = this.models[name];
            var params = this.objectsOptions[name];
            object.visible = true;
            
            if (name === 'livreJava') {

                object.position.y = this.options.distanceFromFloor + this.options.shelf.thickness + params.offset[1];
                object.position.z = -this.options.room.width / 2 + this.options.shelf.width / 2 + params.offset[2];

                object.visible = false;
            }
            
        }
    },





    loadTextures: function() {
        var self = this;

        this.textures.forEach(function(params) {
            self.textureLoader.load(self.assetsPath + params.src, function(texture) {
                params.map = texture;
            });
        });
    },


    onAssetsLoaded: function() {
        this.changePillarTexture();
        this.changeShelfTexture();
        this.changeShelfTexture();

    },


    changePillarTexture: function() {
        if (this.textures[this.options.pillar.texture]) {
            this.pillarProto.material.map = this.textures[this.options.pillar.texture].map;
            this.updatePillarProtoMaterial();
        }
    },

    changeShelfTexture: function() {
        if (this.textures[this.options.shelf.texture]) {
            this.shelfProto.material.map = this.textures[this.options.shelf.texture].map;
            this.updateShelfProtoMaterial();

            this.shelfProtoOnDemand.material.map = this.textures[this.options.shelf.texture].map;
            this.updateShelfProtoMaterialOnDemand();
            this.shelfProtoOnDemand_section2.material.map = this.textures[this.options.shelf.texture].map;
            this.updateShelfProtoMaterialOnDemand_section2();
        }
    },
    


    createFloor: function() {
        var self = this;
        var geometry = new THREE.PlaneGeometry(this.roomSizeMin, this.roomSizeMin);
        var material = new THREE.MeshBasicMaterial({color: this.options.floor.color});

        var floor = new THREE.Mesh(geometry, material);
        //floor.position.y = -20;

        floor.scale.x = this.options.room.length / this.roomSizeMin * 4;
        floor.scale.y = this.options.room.width / this.roomSizeMin * 4;
        floor.rotation.x = -Utils.PI_HALF;
        
        this.textureLoader.load(this.assetsPath + this.options.floor.texture, function(texture) {
            floor.material.needsUpdate = true;
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = self.options.room.length / self.roomSizeTextureStep * self.floorTextureRepeatXPerStep;
            texture.repeat.y = self.options.room.width / self.roomSizeTextureStep * self.floorTextureRepeatYPerStep;
            floor.material.map = texture;
        });
        
        floor.visible = true;
        this.floor = floor;
        this.scene.add(floor);
    },



    createWall: function() {
        var self = this;
        var geometry = new THREE.PlaneGeometry(this.roomSizeMin, this.roomSizeMin);
        var material = new THREE.MeshBasicMaterial({color: this.options.wall.color});
        var wall = new THREE.Mesh(geometry, material);
        //wall.castShadow = true;
        //wall.receiveShadow = true;
        wall.scale.x = this.options.room.length / this.roomSizeMin;
        wall.scale.y = this.options.room.height / this.roomSizeMin;
        
        wall.position.y = this.options.room.height / 2;
        wall.position.z = -this.options.room.width / 2;

        wall.material.side = THREE.FrontSide;

        /* 4Feb - I disabled walls texture*/
        this.textureLoader.load(this.assetsPath + this.options.wall.texture, function(texture) {
            wall.material.needsUpdate = true;
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = self.options.room.length / self.roomSizeTextureStep * self.wallTextureRepeatXPerStep;
            texture.repeat.y = self.options.room.height / self.roomSizeTextureStep * self.wallTextureRepeatYPerStep;
            wall.material.map = texture;
        });
        
        wall.visible = true;
        this.wall = wall;
        this.scene.add(wall);
    },





    calculateOutput: function() {
        var shelvesTotal = this.options.shelvesNum * this.options.sectionsNum;
        var oneShelf = (this.options.shelf.length / 10) * (this.options.shelf.width / 10) * (this.options.shelf.thickness / 10);
        
        var pillarsTotal = this.options.sectionsNum + 1;
        var onePillar = (this.options.pillar.height / 10) * (this.options.pillar.thickness / 10) * (this.options.shelf.width / 10);
        
        this.output.shelvingQuantity = Math.round(oneShelf * shelvesTotal) / 1000000;
        this.output.pillarsQuantity = Math.round(onePillar * pillarsTotal) / 1000000;
        this.output.quantity = Math.round(1000000 * (this.output.shelvingQuantity + this.output.pillarsQuantity)) / 1000000;
        
        var oneShelfPrice = this.textures[this.options.shelf.texture].price;
        var onePillarPrice = this.textures[this.options.pillar.texture].price;
        this.output.shelvingPrice = Math.round(100 * this.output.shelvingQuantity * oneShelfPrice) / 100;
        this.output.pillarsPrice = Math.round(100 * this.output.pillarsQuantity * onePillarPrice) / 100;
        this.output.price = Math.round(100 * (this.output.shelvingPrice + this.output.pillarsPrice)) / 100;
    },




    //engine
    run: function() {
        var self = this;

        function render() {
            deltaTime = Math.max(0.001, Math.min(self.clock.getDelta(), 1));

            self.controls.update(deltaTime);
            self.composer.render(self.scene, self.camera);
            self.composer.render(deltaTime);
            window.requestAnimationFrame(render);

            //console.log(self.camera.position)
        }
        render();
    },





    calculateDistanceBetweenShelves: function(shelvesHeight) {
        // check free height
        var freeHeight = shelvesHeight - this.options.shelvesNum * this.options.shelf.thickness;
        return parseInt(freeHeight / (this.options.shelvesNum - 1));
    },

    






  


    //*** create base sketelton of the cabinet 

    createShelving: function() {
        //var updateGui = false;
        this.shelving = new THREE.Group();
        
        // check pillar height, must be enough to fit at least one shelf
        var shelvesHeight = this.options.pillar.height - this.options.distanceFromFloor - this.options.distanceFromTop;
        
        if (shelvesHeight <= this.options.shelf.thickness) {
            // adjust pillar height and shelvesNum
            shelvesHeight = this.options.shelf.thickness;
            this.options.pillar.height = shelvesHeight + this.options.distanceFromFloor + this.options.distanceFromTop;
            this.options.shelvesNum = 1;
            //updateGui = true;
            //this.notifier.notify('Only one shelf can fit, shelving height and number of shelves were been adjusted');
        }
        
        // if there's only one shelf then it already fits due to the previous check
        if (this.options.shelvesNum > 1) {
            var distanceBetweenShelves = this.calculateDistanceBetweenShelves(shelvesHeight);
            if (distanceBetweenShelves < this.distanceBetweenShelvesMin) {
                // adjust shelvesNum
                //updateGui = true;
                distanceBetweenShelves = this.distanceBetweenShelvesMin;
                shelvesNum = parseInt((distanceBetweenShelves + shelvesHeight) / (distanceBetweenShelves + this.options.shelf.thickness));
                if (shelvesNum < 1) {
                    shelvesNum = 1;
                }
                this.options.shelvesNum = shelvesNum;
                
                if (shelvesNum > 1) {
                    distanceBetweenShelves = this.calculateDistanceBetweenShelves(shelvesHeight);
                }
                //this.notifier.notify('Number of shelves was been adjusted as there is not enough space to fit all of them');
            }
            this.options.distanceBetweenShelves = distanceBetweenShelves;
        }

        this.createPillarProto();

        this.createShelfProto_Mod();
        
        this.createShelf_Mod(0,0);
        this.createShelf_Mod(0,1);

        this.createPillar(0);
        this.createPillar(1);
        /* for (var i = 1; i <= this.options.amountOfSections; i++) {
            this.createPillar(i);
        } */
    

        this.shelving.position.x = -this.options.sectionsNum * (this.options.shelf.length + this.options.pillar.thickness) / 2 + 
        (this.options.shelf.length + this.options.pillar.thickness) / 2;
        this.shelving.position.z = -this.options.room.width / 2 + this.options.shelf.width / 2;
        this.scene.add(this.shelving);


        this.options.distanceBetweenShelvesOnDemand = this.options.pillar.height / 4;
        this.options.distanceBetweenShelvesOnDemand_section2 = this.options.pillar.height / 4;
    },





    //ShelfMod (Base) 
    createShelfProto_Mod: function() {
        var self = this;
        var geometry = new THREE.BoxGeometry(this.options.shelf.length, this.options.shelf.thickness, this.options.shelf.width);
        var material = new THREE.MeshBasicMaterial({color: this.options.shelf.color});
        var shelfProto = new THREE.Mesh(geometry, material);
        shelfProto.name = 'shelfProto';

        if (!this.shelfProto) {
            this.shelfProto = shelfProto;
        } else {
            shelfProto.material = this.shelfProto.material.clone();
            this.shelfProto = shelfProto;
            this.updateShelfProtoMaterial();
        }

    },


    createShelf_Mod: function(sectionNum, shelfNum) {
        var shelf = this.shelfProto.clone();
        shelf.name = 'shelf_' + sectionNum + '_' + shelfNum;
        shelf.position.y = shelfNum * (this.options.distanceBetweenShelves + this.options.shelf.thickness) + this.options.distanceFromFloor + this.options.shelf.thickness / 2;
        this.shelving.add(shelf);
        return shelf;
    },

    updateShelfProtoMaterial: function() {
        this.shelfProto.material.needsUpdate = true;
        var texture = this.shelfProto.material.map;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.x = this.options.shelf.length / this.boardTextureStep * this.boardTextureRepeatXPerStep;  
        texture.repeat.y = this.options.shelf.width / this.boardTextureStep * this.boardTextureRepeatYPerStep;
    },    
 



    //PillarMod (Base) 24May
    createPillarProto: function() {
        var self = this;
        var geometry = new THREE.BoxGeometry(this.options.pillar.thickness, this.options.pillar.height, this.options.shelf.width);
        var material = new THREE.MeshBasicMaterial({color: this.options.pillar.color});

        var pillarProto = new THREE.Mesh(geometry, material);
        pillarProto.name = 'pillarProto';
        
        pillarProto.position.y = this.options.pillar.height / 2;
        
        if (!this.pillarProto) {
            this.pillarProto = pillarProto;
        } else {
            pillarProto.material = this.pillarProto.material.clone();
            this.pillarProto = pillarProto;
            this.updatePillarProtoMaterial();
        }
    },

    createPillar: function(sectionNum) {
        var pillar = this.pillarProto.clone();
        pillar.name = 'pillar_' + sectionNum;
        pillar.position.x = sectionNum * (this.options.shelf.length + this.options.pillar.thickness) - this.options.shelf.length / 2 - this.options.pillar.thickness / 2;
        this.shelving.add(pillar);
        return pillar;
    },
    
    updatePillarProtoMaterial: function() {
        this.pillarProto.material.needsUpdate = true;
        var texture = this.pillarProto.material.map;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.x = this.options.shelf.width / this.boardTextureStep * this.boardTextureRepeatXPerStep;
        texture.repeat.y = this.options.pillar.height / this.boardTextureStep * this.boardTextureRepeatYPerStep;       
    },









    /* update_pillar1Material: function() {
        this.pillar1.material.needsUpdate = true;
        var texture = this.pillarProto.material.map;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.x = this.options.shelf.width / this.boardTextureStep * this.boardTextureRepeatXPerStep;
        texture.repeat.y = this.options.pillar.height / this.boardTextureStep * this.boardTextureRepeatYPerStep;       
    }, */

    createPillar1: function() {
        this.scene.remove(this.pillar1);
        var self = this;
        var geometry = new THREE.BoxGeometry(this.options.pillar.thickness, this.options.pillar.height - this.options.shelf.thickness * 2, this.options.shelf.width);
        var material = new THREE.MeshBasicMaterial({color: this.options.pillar.color});
        var pillar1 = new THREE.Mesh(geometry, material);
        
        switch (self.options.amountOfSections) {

            case 2:
            pillar1.position.y = this.options.pillar.height / 2;
            pillar1.position.z = -this.options.room.width / 2 + this.options.shelf.width / 2;
            //console.log(2);
            break;

            case 3:
            pillar1.position.y = this.options.pillar.height / 2;
            pillar1.position.z = -this.options.room.width / 2 + this.options.shelf.width / 2;
            // ❗️ * 2 ... i mean 3 * 2 to get position from 0
            pillar1.position.x = - this.options.shelf.length / 6
            //~-113
            break;
        }

        pillar1.material.needsUpdate = true;
        /* var texture = this.pillarProto.material.map;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.x = this.options.shelf.width / this.boardTextureStep * this.boardTextureRepeatXPerStep;
        texture.repeat.y = this.options.pillar.height / this.boardTextureStep * this.boardTextureRepeatYPerStep;     
        */
        pillar1.material =  this.pillarProto.material;
        pillar1.name = 'pillar1'
        this.pillar1 = pillar1;
        this.scene.add(pillar1);   
    },





    createPillar2: function() {

        this.scene.remove(this.pillar2);
        var self = this;
        var geometry = new THREE.BoxGeometry(this.options.pillar.thickness, this.options.pillar.height - this.options.shelf.thickness * 2, this.options.shelf.width);
        var material = new THREE.MeshBasicMaterial({color: this.options.pillar.color});
        var pillar2 = new THREE.Mesh(geometry, material);

        // ❗️ * 2 ... i mean 3 * 2 to get position from 0
        pillar2.position.x = this.options.shelf.length / 6
        //~-113
        pillar2.position.y = this.options.pillar.height / 2;
        pillar2.position.z = -this.options.room.width / 2 + this.options.shelf.width / 2;

        pillar2.material.needsUpdate = true;
        /*
        var texture = this.pillarProto.material.map;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.x = this.options.shelf.width / this.boardTextureStep * this.boardTextureRepeatXPerStep;
        texture.repeat.y = this.options.pillar.height / this.boardTextureStep * this.boardTextureRepeatYPerStep;     
        */
        pillar2.material =  this.pillarProto.material;
        pillar2.name = 'pillar2';

        this.pillar2 = pillar2;
        this.scene.add(pillar2);   
    },























    createShelvingOnDemand: function() {
        this.scene.remove(this.shelvingOnDemand);
        this.shelvingOnDemand = new THREE.Group();
        // check pillar height, must be enough to fit at least one shelf
        var shelvesHeight = this.options.pillar.height - this.options.distanceFromFloor - this.options.distanceFromTop;
        if (shelvesHeight <= this.options.shelf.thickness) {
            // adjust pillar height and shelvesNum
            shelvesHeight = this.options.shelf.thickness;
            this.options.pillar.height = shelvesHeight + this.options.distanceFromFloor + this.options.distanceFromTop;
            this.options.shelvesNumOnDemand = 1;
            //updateGui = true;
            //this.notifier.notify('Only one shelf can fit, shelving height and number of shelves were been adjusted');
        }
        this.createShelfProtoOnDemand();
        for (var i = 0; i < this.options.sectionsNum; i++) {
            for (var j = 1; j < this.options.shelvesNumOnDemand; j++) {
                this.createShelfOnDemand(i, j);
            }
        }
        this.shelvingOnDemand.position.x = this.shelving.getObjectByName( "pillar_0", true ).position.x;
        this.shelvingOnDemand.position.z = -this.options.room.width / 2 + this.options.shelf.width / 2;
        this.scene.add(this.shelvingOnDemand);
    },



    
    updateShelfProtoMaterialOnDemand: function() {
        this.shelfProtoOnDemand.material.needsUpdate = true;
        var texture = this.shelfProtoOnDemand.material.map;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.x = this.options.shelf.length / this.boardTextureStep * this.boardTextureRepeatXPerStep;  
        texture.repeat.y = this.options.shelf.width / this.boardTextureStep * this.boardTextureRepeatYPerStep;
    },    

    createShelfProtoOnDemand: function() {
        var self = this;
        var geometry = new THREE.BoxGeometry(this.options.section1Length, this.options.shelf.thickness, this.options.shelf.width);
        var material = new THREE.MeshBasicMaterial({color: this.options.shelf.color});
        var shelfProtoOnDemand = new THREE.Mesh(geometry, material);
        shelfProtoOnDemand.name = 'shelfProtoOnDemand';
        shelfProtoOnDemand.geometry.translate( self.options.section1Length / 2, 0, 0 );
        if (!this.shelfProtoOnDemand) {
            this.shelfProtoOnDemand = shelfProtoOnDemand;
        } else {
            shelfProtoOnDemand.material = this.shelfProtoOnDemand.material.clone();
            this.shelfProtoOnDemand = shelfProtoOnDemand;
            this.updateShelfProtoMaterialOnDemand();
        }
    },

    createShelfOnDemand: function(sectionNum, shelfNumOnDemand) {
        var shelfOnDemand = this.shelfProtoOnDemand.clone();
        shelfOnDemand.name = 'shelfOnDemand_' + sectionNum + '_' + shelfNumOnDemand;
        shelfOnDemand.position.y = shelfNumOnDemand * (this.options.distanceBetweenShelvesOnDemand + this.options.shelf.thickness) + this.options.distanceFromFloor + this.options.shelf.thickness / 2;
        shelfOnDemand.position.x = 15
        this.shelvingOnDemand.add(shelfOnDemand);
        return shelfOnDemand;
    },












    createShelvingOnDemand_section2: function() {
        this.scene.remove(this.shelvingOnDemand_section2);
        this.shelvingOnDemand_section2 = new THREE.Group();
        // check pillar height, must be enough to fit at least one shelf
        var shelvesHeight = this.options.pillar.height - this.options.distanceFromFloor - this.options.distanceFromTop;
        if (shelvesHeight <= this.options.shelf.thickness) {
            // adjust pillar height and shelvesNum
            shelvesHeight = this.options.shelf.thickness;
            this.options.pillar.height = shelvesHeight + this.options.distanceFromFloor + this.options.distanceFromTop;
            this.options.shelvesNumOnDemand_section2 = 1;
            //updateGui = true;
            //this.notifier.notify('Only one shelf can fit, shelving height and number of shelves were been adjusted');
        }
        this.createShelfProtoOnDemand_section2();
        for (var i = 0; i < this.options.sectionsNum; i++) {
            for (var j = 1; j < this.options.shelvesNumOnDemand_section2; j++) {
                this.createShelfOnDemand_section2(i, j);
            }
        }
        this.shelvingOnDemand_section2.position.x = this.shelving.getObjectByName( "pillar_1", true ).position.x;
        this.shelvingOnDemand_section2.position.z = -this.options.room.width / 2 + this.options.shelf.width / 2;
        this.scene.add(this.shelvingOnDemand_section2);
    },

    updateShelfProtoMaterialOnDemand_section2: function() {
        this.shelfProtoOnDemand_section2.material.needsUpdate = true;
        var texture = this.shelfProtoOnDemand_section2.material.map;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.x = this.options.shelf.length / this.boardTextureStep * this.boardTextureRepeatXPerStep;  
        texture.repeat.y = this.options.shelf.width / this.boardTextureStep * this.boardTextureRepeatYPerStep;
    },    

    createShelfProtoOnDemand_section2: function() {
        var self = this;
        var geometry = new THREE.BoxGeometry(this.options.section2Length, this.options.shelf.thickness, this.options.shelf.width);
        var material = new THREE.MeshBasicMaterial({color: this.options.shelf.color});
        var shelfProtoOnDemand_section2 = new THREE.Mesh(geometry, material);
        shelfProtoOnDemand_section2.name = 'shelfProtoOnDemand_section2';
        shelfProtoOnDemand_section2.geometry.translate( - self.options.section2Length / 2, 0, 0 );
        if (!this.shelfProtoOnDemand_section2) {
            this.shelfProtoOnDemand_section2 = shelfProtoOnDemand_section2;
        } else {
            shelfProtoOnDemand_section2.material = this.shelfProtoOnDemand.material.clone();
            this.shelfProtoOnDemand_section2 = shelfProtoOnDemand_section2;
            this.updateShelfProtoMaterialOnDemand_section2();
        }
    },

    createShelfOnDemand_section2: function(sectionNum, shelfNumOnDemand_section2) {
        var shelfOnDemand_section2 = this.shelfProtoOnDemand_section2.clone();
        shelfOnDemand_section2.name = 'shelfOnDemand_section2_' + sectionNum + '_' + shelfNumOnDemand_section2;
        shelfOnDemand_section2.position.y = shelfNumOnDemand_section2 * (this.options.distanceBetweenShelvesOnDemand_section2 + this.options.shelf.thickness) + this.options.distanceFromFloor + this.options.shelf.thickness / 2;
        shelfOnDemand_section2.position.x = sectionNum * (this.options.shelf.length + this.options.pillar.thickness);
        this.shelvingOnDemand_section2.add(shelfOnDemand_section2);
        return shelfOnDemand_section2;
    },








































    createWireframeBack_section1: function() {
        var self = this;
        this.scene.remove(this.section1_WireframeMesh);

        //this.options.section1Length = this.options.shelf1Length;
        var geometry = new THREE.PlaneGeometry(this.options.section1Length + 1, this.options.pillar.height);
        var material = new THREE.MeshBasicMaterial({color: 0x213790, transparent: true, opacity: 0.5});
        var section1_WireframeMesh = new THREE.Mesh(geometry, material);

        section1_WireframeMesh.geometry.translate( self.options.section1Length / 2, 0, 0 );

        section1_WireframeMesh.position.x = this.shelving.getObjectByName( "pillar_0", true ).position.x;
        section1_WireframeMesh.position.y = this.shelving.getObjectByName( "pillar_0", true ).position.y; 
        section1_WireframeMesh.position.z = -999
        section1_WireframeMesh.name = "section1_WireframeMesh"
        

        section1_WireframeMesh.visible = true;
        this.section1_WireframeMesh = section1_WireframeMesh;
        this.scene.add(section1_WireframeMesh);
    },
    









    createWireframeBack_section2: function() {
        var self = this;
        this.scene.remove(this.section2_WireframeMesh);

        var geometry = new THREE.PlaneGeometry(this.options.section2Length + 1, this.options.pillar.height);
        var material = new THREE.MeshBasicMaterial({color: 0x058843, transparent: true, opacity: 0.5});
        var section2_WireframeMesh = new THREE.Mesh(geometry, material);


        //❗️why we need this?....
        section2_WireframeMesh.geometry.translate( - self.options.section2Length / 2, 0, 0 );

        //section2_WireframeMesh.applyMatrix( new THREE.Matrix4().makeTranslation( this.shelving.getObjectByName( "pillar_0", true ).position.x, 0, 0) );

        switch (self.options.amountOfSections) {

            case 2:
            section2_WireframeMesh.position.x = this.shelving.   getObjectByName( "pillar_1", true ).position.x;
            section2_WireframeMesh.position.y = this.shelving.getObjectByName( "pillar_0", true ).position.y; 
            section2_WireframeMesh.position.z = -999
            section2_WireframeMesh.name = "section2_WireframeMesh" 
            break;

            case 3:
            section2_WireframeMesh.position.x = -this.scene.getObjectByName( "pillar1", true ).position.x;
            section2_WireframeMesh.position.y = this.shelving.getObjectByName( "pillar_0", true ).position.y; 
            section2_WireframeMesh.position.z = -999 
            break;
        }

        section2_WireframeMesh.visible = true;            section2_WireframeMesh.name = "section2_WireframeMesh"
        this.section2_WireframeMesh = section2_WireframeMesh;
        this.scene.add(section2_WireframeMesh);
    },







    createWireframeBack_section3: function() {
        var self = this;
        this.scene.remove(this.section3_WireframeMesh);

        var geometry = new THREE.PlaneGeometry(this.options.section3Length + 1, this.options.pillar.height);
        var material = new THREE.MeshBasicMaterial({color: 0x552345, transparent: true, opacity: 0.5});
        var section3_WireframeMesh = new THREE.Mesh(geometry, material);

        //section3_WireframeMesh.applyMatrix( new THREE.Matrix4().makeTranslation( this.shelving.getObjectByName( "pillar_0", true ).position.x, 0, 0) );
        //section3_WireframeMesh.geometry.translate( - self.options.section3Length / 2, 0, 0 );

        console.log(this.options.shelf.length / 3);

        section3_WireframeMesh.position.x = this.scene.getObjectByName( "pillar2", true ).position.x * 2;
        section3_WireframeMesh.position.y = this.shelving.getObjectByName( "pillar_0", true ).position.y; 
        section3_WireframeMesh.position.z = -999 

    
        section3_WireframeMesh.visible = true;
        section3_WireframeMesh.name = "section3_WireframeMesh"
        this.section3_WireframeMesh = section3_WireframeMesh;
        this.scene.add(section3_WireframeMesh);
    },







    





























    






       
    createBackPlate: function() {
        var self = this;
        this.scene.remove(this.BackPlate);
        var geometry = new THREE.PlaneGeometry(this.options.shelf.length * this.options.sectionsNum + this.options.shelf.thickness * this.options.sectionsNum, this.options.pillar.height);
        var material = new THREE.MeshBasicMaterial({color: 0x333333, transparent: true, opacity: 0});
        var BackPlate = new THREE.Mesh(geometry, material);

        //BackPlate.applyMatrix( new THREE.Matrix4().makeTranslation(550, 0, 0) );
        BackPlate.geometry.translate( -this.shelving.position.x, 0, 0 );

        BackPlate.position.y = this.shelving.getObjectByName( "pillar_0", true ).position.y; //height
        BackPlate.position.z = -986; //depth
        BackPlate.position.x = this.shelving.position.x ; //width 

        BackPlate.visible = true;
        this.BackPlate = BackPlate;
        this.scene.add(BackPlate);
        this.scene.add( new THREE.AxesHelper() );

        //24apr and... to attach the two top&bottom main shelfes 
        this.shelving.getObjectByName( "shelf_0_0", true ).geometry.translate( -this.shelving.position.x, 0, 0 );
    },

    changeBackPlateVisibilityMinus: function() {
        this.BackPlate.material.opacity = 0;
    },

    changeBackPlateVisibilityPlus: function() {
        this.BackPlate.material.opacity = 1;
    },
    





















    //20apr dimensions in 3d view
    createDimensions_width: function() {
        var self = this;

        self.fontloader.load('assets/ar.json', function (font) {   

            var dim1num = document.getElementById("subdomainWidthCabinet_Dimensions").value;
            
                    var textGeo = new THREE.TextGeometry("← Width: "+dim1num+"cm →", {
                    font: font,
                    size: 42,
                    height: 1,
                    curveSegments: 12,
                    bevelThickness: 0,
                    bevelSize: 5,
                    bevelEnabled: false,
                    });

                var material = new THREE.MeshBasicMaterial({color: 0x333333});

                var dimensionsWidth = new THREE.Mesh(textGeo, material);
                dimensionsWidth.position.x = -self.options.shelf.width / 1.2;
                dimensionsWidth.position.y = self.options.room.height / 14.8;
                dimensionsWidth.position.z = -self.options.room.width / 2.1;
                dimensionsWidth.visible = true;

                self.scene.add(dimensionsWidth);
                self.dimensionsWidth = dimensionsWidth;
        
        });

    },








    createDimensions_height: function() {
        var self = this;

        self.fontloader.load('assets/ar.json', function (font) {   

            var dim1num_height = document.getElementById("subdomainHeightCabinet_Dimensions").value;

                        var textGeo = new THREE.TextGeometry("← Height: "+dim1num_height+"cm →", {
                        font: font,
                        size: 43,
                        height: 1,
                        curveSegments: 12,
                        bevelThickness: 0,
                        bevelSize: 5,
                        bevelEnabled: false,
                    
            });

            var material = new THREE.MeshBasicMaterial({color: 0x333333});

            var dimensionsHeight = new THREE.Mesh(textGeo, material);

            dimensionsHeight.rotation.z = -1.57;

            dimensionsHeight.position.x = -500;
            dimensionsHeight.position.y = self.options.room.height / 21.9;
            dimensionsHeight.position.z = -self.options.room.width / 2.01;

            dimensionsHeight.visible = true;

            self.scene.add(dimensionsHeight);
            self.dimensionsHeight = dimensionsHeight;
        });
    },






    createDimensions_Depth: function() {
        var self = this;

        //font file (feb-may2021)
        self.fontloader.load('assets/ar.json', function (font) {   

            var dim1num_Depth = document.getElementById("subdomainDepth_Cabinet_Dimensionsz").value;

            var textGeo = new THREE.TextGeometry(" ← Depth: "+dim1num_Depth+"cm →", {
            font: font,
            size: 42,
            height: 1,
            curveSegments: 12,
            bevelThickness: 0,
            bevelSize: 5,
            bevelEnabled: false,
            });

            var material = new THREE.MeshBasicMaterial({color: 0x333333});

            var dimensionsDepth = new THREE.Mesh(textGeo, material);

            dimensionsDepth.rotation.y = -1.57;

            dimensionsDepth.position.x = -380;
            dimensionsDepth.position.y = self.options.room.height / 15.31;
            dimensionsDepth.position.z = -self.options.room.width / 2.04;

            dimensionsDepth.visible = true;

            self.scene.add(dimensionsDepth);
            self.dimensionsDepth = dimensionsDepth;
        });
    },



    //Around 19-21 feb added dimens in 3d view
    removeDimensions: function() {
        this.scene.remove(this.dimensionsWidth);
        this.scene.remove(this.dimensionsHeight);
        this.scene.remove(this.dimensionsDepth);
    },


//end of App prototype 
}



window.addEventListener('DOMContentLoaded', function() {
window.app = new App('appCanvas');
});

})();
