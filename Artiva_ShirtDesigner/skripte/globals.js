var containerName = 'c';
var activeID = 0;
var activeCanvas;
var activeObject;
var activeTyp = 0;

var mainfolder = "textures/";
var imageanzahl = 0;
var htmlgrafiken = new Array();
var imagename = new Array();
var grafiknr = new Array();
var grafikurls = new Array();
var grafiken = new Array();
var GFXaktiviert = 0;

var canvas1, canvas2, canvas3, canvas4, canvas5, canvas6, canvas7, line1, line2, line3, line4, line5, line6, pdf_canvas;
var lineCounter = 0;
var oldCanvas;

var farbfeldAnzahl = 5;
var shirtFarben = [ "#ffffff", "#faf7d9", "#f7c1c1", "#9abdf5", "#9af5e4" ];












//for collectDesignData

var GenderStatus_string;
var GenderStatus = 0;
var NeckStatus_string;
var NeckStatus = 0;
var choosenDesign_string;
var choosenDesign = 0;

//[0] - Front, [1] - Back, [2] - LeftSleeve, [3] - Left Side,
//[4] - Right Sleeve, [5] - Right Side, [6] - Knit Trim;
var BasicJersey_colors = [BasicTShirt_colors_Front, BasicTShirt_colors_Back, BasicTShirt_colors_LeftSleeve, BasicTShirt_colors_LeftSide, BasicTShirt_colors_RightSleeve, BasicTShirt_colors_RightSide, BasicTShirt_colors_KnitTrim] = Array(5).fill("#ffffff");

//Farbe 1, Farbe 2, Farbe 3, Farbe 4, Farbe 5;
var Patterns_colors = ["#ffffff", "#0D2849", "#82BBD7", "#1B5A93", "#3F8BBC"];










var Fabric_Simple_Front, Fabric_Simple_inside, Fabric_Simple_ForSide_inside, Fabric_Simple_Back, Fabric_Simple_LeftSleeve, Fabric_Simple_LeftSide, Fabric_Simple_RightSleeve, Fabric_Simple_RightSide, Design_Farbe1, Design_Farbe2, Design_Farbe3, Design_Farbe4, Design_Farbe5, Fabric_Main, Design_Farbe2_Side, Design_Farbe3_Side, Design_Farbe4_Side, Design_Farbe5_Side
var Fabric_Mesh;

var areasTextPositioning, areasPicturePositioning;



var canvasPrint_FabricObject;




var MenONeckDesignSvgMask, MenONeckDesign0SvgGroup,MenONeckDesign1SvgGroup, MenONeckDesign0Svg, MenONeckDesign1Svg;

var choosenDesign = 0;





var MenONeckLogoFrontSVG, MenONeckLogoFront, MenONeckLogoBackSVG, MenONeckLogoBack, MenONeckDesign0SvgMask, MenONeckDesign0SvgMaskString



var canvas1ImagesObjectsToMask = [];
var canvas1TextsObjectsToMask = [];





var fontStyleCheckerGlobal = 'Normal';

var fontWeightCheckerGlobal = 'Normal';




var material_cleanKnitTreamColar, material_cleanKnitTreamSleeve



