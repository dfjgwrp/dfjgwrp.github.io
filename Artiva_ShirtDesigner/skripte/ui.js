//1st textitem
let textitemcounter = 1;


// Tab auswählen
function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	
	document.getElementById(tabName).style.display = "block";
	if (evt) evt.currentTarget.className += " active";
	
}

// alle Tabs schliessen
function closeTabs() {
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
}

// aktive Objekte deselektieren
function deselectAll() {
	if (activeCanvas) activeCanvas.discardActiveObject().renderAll();
}


// Grafikobjekt an neue Bildgröße anpassen
function resizer() {
	var chosen = -1;
	if (activeCanvas) {
		activeCanvas.getObjects().forEach(function (targ) { 
			//console.log("wi: "+targ.width+"   wi2: "+targ._element.width); 
			if (targ.typ==1) {
				if ((targ.width != targ._element.width) || (targ.height != targ._element.height)) {
					targ.width = targ._element.width;
					targ.height = targ._element.height;
					targ.setCoords();
					chosen = targ;
					targ.dirty = true;
				}
			}
		});
		//console.log("chosen: "+chosen.oo);
		if (chosen) {
			activeCanvas.discardActiveObject;
			activeCanvas.renderAll();
			activeCanvas.setActiveObject(chosen);
			activeCanvas.renderAll();
		}
	}
}


var maxScaleX = 2;
var maxScaleY = 2;


// change image of graphic object
function selectGrafik(gr) {

	activeObject = activeCanvas.getActiveObject();
	var imgElem = activeObject._element;
	imgElem.src = grafikurls[gr];
	activeObject.grafik = gr;
	
	imgElem.onload = () => {  
		if ((activeObject.width != activeObject._element.width) || (activeObject.height != activeObject._element.height)) {
			activeObject.width = activeObject._element.width;
			activeObject.height = activeObject._element.height;
			activeObject.setCoords();
			activeObject.dirty = true;

			/* activeObject.setControlsVisibility({
				mt: false, // middle top disable
				mb: false, // midle bottom
				ml: false, // middle left
				mr: false, // I think you get it
			}); */
		}
	}
	activeCanvas.renderAll();
	grafikListe();
}

//Fill the graphic object tab with the current image list
function grafikListe() {
	
	/* document.getElementById("tabGFX").innerHTML = "<br><button class='button' onclick='addGFX();'>Add</button>&nbsp;<button class='button' onclick='deleteObject();'>Remove</button><br>&nbsp;<br><button class='button' onclick='objectToFront();'>To Front</button>&nbsp;<button class='button' class='button' onclick='objectToBack();'>To Back</button><br>"; */

	//document.getElementById("tabGFX").innerHTML = "<button class='button' onclick='addGFX();'>+</button>&nbsp;<button class='button' onclick='deleteObject();'>−</button><br>&nbsp;<br><button class='button' onclick='objectToFront();'>⬆</button>&nbsp;<button class='button' class='button' onclick='objectToBack();'>⬇</button><br>";
	var gop = 0;
	var i, tmp, bok, xs, ys, ttm;
	
	/* for (i=imageanzahl; i>0; i--) {
		gop=1-gop;
		
		if (grafiknr[GFXaktiviert+1]==i) {
			document.getElementById("tabGFX").innerHTML += "<div class='filler2' onclick='javacript:selectGrafik("+i+")'><img src='"+mainfolder+"leer.png' align='absmiddle' width=64 height=64 id='hi"+i+"' name='hi"+i+"'> &nbsp; "+imagename[i]+"</div>";
		} else if (gop==0) {
			document.getElementById("tabGFX").innerHTML += "<div class='filler0' onclick='javacript:selectGrafik("+i+")'><img src='"+mainfolder+"leer.png' align='absmiddle' width=64 height=64 id='hi"+i+"' name='hi"+i+"'> &nbsp; "+imagename[i]+"</div>";
		} else {
			document.getElementById("tabGFX").innerHTML += "<div class='filler1' onclick='javacript:selectGrafik("+i+")'><img src='"+mainfolder+"leer.png' align='absmiddle' width=64 height=64 id='hi"+i+"' name='hi"+i+"'> &nbsp; "+imagename[i]+"</div>";
		}
		tmp = "hi"+i;
		bok = document.getElementById(tmp);
		bok.src = htmlgrafiken[i].src;
		xs = htmlgrafiken[i].width;
		ys = htmlgrafiken[i].height;
		ttm = 0;
		if (xs>ys) {
			ttm = ys/xs*64;
			bok.style.height = ""+ttm+"px";
			bok.style.paddingTop = ""+(64-ttm)*0.5+"px";
			bok.style.paddingBottom = ""+(64-ttm)*0.5+"px";
			bok.style.width = "64px";
		} else {
			ttm = xs/ys*64;
			bok.style.width = ""+ttm+"px";
			bok.style.paddingLeft = ""+(64-ttm)*0.5+"px";
			bok.style.paddingRight = ""+(64-ttm)*0.5+"px";
			bok.style.height = "64px";
		} 
	} */
}























// Set text color (invoked by the color picker)
function setTextColor(value) {
	var ao = canvas1.getActiveObject();
		ao.setColor(value);
		ao.dirty = true;
		canvas1.renderAll();
}

// Textrand-Farbe setzen (wird vom Colorpicker aufgerufen)
function setTextBorderColor(value) {
	var ao = canvas1.getActiveObject();
	ao.stroke = value;
	ao.st = value;
	ao.dirty = true;
	canvas1.renderAll();
}


// Textrand setzen (wird vom Slider aufgerufen)
function setTextBorder(value) {
	var ao = canvas1.getActiveObject();
	ao.strokeWidth = value;
	if(!ao.st) ao.st = ao.stroke; 
	if (value==0) { ao.stroke = false; } else { ao.stroke = ao.st; }
	ao.dirty = true;
	canvas1.renderAll();
}

// Slider und Colorpicker setzen bei Textobjekt-Anwahl
function setTextControls() {
	var ob, ob2, ob3, ob4, ob5, ao;
	ob = document.getElementById("txtBorder");
	ob2 = document.getElementById("txtColor");
	ob3 = document.getElementById("txtColorBorder");
	ob4 = document.getElementById("txtText");
	ob5 = document.getElementById("txtFont");
	if (activeCanvas) {
		ao = activeCanvas.getActiveObject();
		if (ao) {
			if (activeTyp == 2) {
				ob.value = ao.strokeWidth;
				ob2.value = ao.fill;
				ob3.value = ao.stroke;
				ob4.value = ao.text;
				ob5.value = ao.fontFamily;
			}
		}
	}
}

// Texteingabe (wird vom Input-Feld aufgerufen)
function setTextValue(value) {
	var ao;
	if (activeCanvas) {
		ao = activeCanvas.getActiveObject();
		if (ao) {
			if (activeTyp == 2) {
				ao.text = value;
				ao.dirty = true;
				activeCanvas.renderAll();
			}
		}
	}
}

// Texteingabe (wird vom Input-Feld aufgerufen)
function setTextFont(value) {
	var ao = canvas1.getActiveObject();
	ao.fontFamily = value;
	ao.dirty = true;
	canvas1.renderAll();
}




// Text add
/* function addText() {

	if (txtText.value == '') {
		window.alert("Please don't forget to input some text!")
	} else {
		var ob, ob2, ob3, ob4, ob5;
		ob = document.getElementById("txtBorder");
		ob2 = document.getElementById("txtColor");
		ob3 = document.getElementById("txtColorBorder");
		ob4 = document.getElementById("txtText");
		ob5 = document.getElementById("txtFont");
		//newText(canvas1, 'test text', 170, 700, 1.0, 0, "#435345", "#234654", 2, "impact", "text9" ); 
		newText(canvas1, ob4.value, 165, 700, 1.0, 0, ob2.value, ob.value, 2, ob3.value, ob5.value);
		canvas1.setActiveObject(canvas1.item(itemcounter));
		itemcounter += 1;
	}
} */




// Set letter spacing
function setLetterSpacing(value) {
	var ao = canvas1.getActiveObject();
	ao.charSpacing = value;
	ao.dirty = true;
	canvas1.renderAll();
}



//set selected object text to italic 
function setTextFontStyleItalic() {
	if (fontStyleCheckerGlobal == 'Normal'){
		fontStyleCheckerGlobal = 'Italic';
	} else {fontStyleCheckerGlobal = 'Normal'; }

	var ao = canvas1.getActiveObject();
	if (document.getElementById("setFontItalic_value").checked == true) {
		ao.fontStyle = 'Italic';
		ao.dirty = true;
		canvas1.renderAll();
	} else {
		var ao = canvas1.getActiveObject();
		ao.fontStyle = 'Normal';
		ao.dirty = true;
		canvas1.renderAll();
	}
	console.clear();
}

//set selected object text to bold 
function setTextFontStyleBold() {
	if (fontWeightCheckerGlobal == 'Normal'){
		fontWeightCheckerGlobal = 'Bold';
	} else {fontWeightCheckerGlobal = 'Normal'; }
	var ao = canvas1.getActiveObject();
	if (document.getElementById("setFontBold_value").checked == true) {
		ao.fontWeight = 'Bold';
		ao.dirty = true;
		canvas1.renderAll();
	} else {
		var ao = canvas1.getActiveObject();
		ao.fontWeight = 'Normal';
		ao.dirty = true;
		canvas1.renderAll();
	}
}








let StatusFontText1 = 0;
document.getElementById("CrossIconAccent1Jersey").addEventListener("click", function () {

    if (StatusFontText1 == 0) {
		FontListRollText1.style.display = "block";
		document.getElementById("CrossIconAccent1Jersey").innerHTML = "—";
        StatusFontText1 = 1; 
	}

    else if (StatusFontText1 == 1) {
		FontListRollText1.style.display = "none";
		document.getElementById("CrossIconAccent1Jersey").innerHTML = "+"; 
        StatusFontText1 = 0; 
	}

});




var div = document.getElementById('FontListRollText1');
var divs = div.getElementsByTagName('div');

function highlightSelectedFont(value, numberOfSelectedFont) {
	ao = canvas1.getActiveObject();
	if (ao) {
		setTextFont(value);
	}
	for (var i = 0; i < divs.length; i += 1) {
		divs[i].style.backgroundColor = 'white'
	} 
	divs[numberOfSelectedFont].style.backgroundColor = 'grey'

	console.log(value)
	document.getElementById("txtFont").value = value;
	console.log(document.getElementById("txtFont").value)

}








































































function clipObject(thisObj, ctx) {
    if (thisObj.clipPath) {
      ctx.save();
      if (thisObj.clipPath.fixed) {
        var retina = thisObj.canvas.getRetinaScaling();
        ctx.setTransform(retina, 0, 0, retina, 0, 0);
        // to handle zoom
        ctx.transform.apply(ctx, thisObj.canvas.viewportTransform);
        thisObj.clipPath.transform(ctx);
      }

      thisObj.clipPath._render(ctx);
      ctx.restore();
      ctx.clip();
      var x = -thisObj.width / 2,
        y = -thisObj.height / 2,
        elementToDraw;

      if (thisObj.isMoving === false && thisObj.resizeFilter && thisObj._needsResize()) {
        thisObj._lastScaleX = thisObj.scaleX;
        thisObj._lastScaleY = thisObj.scaleY;
        thisObj.applyResizeFilters();
      }
      elementToDraw = thisObj._element;
      elementToDraw && ctx.drawImage(elementToDraw,
        0, 0, thisObj.width, thisObj.height,
        x, y, thisObj.width, thisObj.height);
	
      /* thisObj._stroke(ctx);
      thisObj._renderStroke(ctx); */
	  
    }
  }






function clipObject2(thisObj, ctx) {
    if (thisObj.clipPath) {
      ctx.save();
      if (thisObj.clipPath.fixed) {
        var retina = thisObj.canvas.getRetinaScaling();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        // to handle zoom
        ctx.transform.apply(ctx, thisObj.canvas.viewportTransform);
        thisObj.clipPath.transform(ctx);
      }

      thisObj.clipPath._render(ctx);
      ctx.restore();
      ctx.clip();
      var x = -thisObj.width / 2,
        y = -thisObj.height / 2,
        elementToDraw;

      if (thisObj.isMoving === false && thisObj.resizeFilter && thisObj._needsResize()) {
        thisObj._lastScaleX = thisObj.scaleX;
        thisObj._lastScaleY = thisObj.scaleY;
        thisObj.applyResizeFilters();
      }
      elementToDraw = thisObj._element;
      elementToDraw && ctx.drawImage(elementToDraw,
        0, 0, thisObj.width, thisObj.height,
        x, y, thisObj.width, thisObj.height);
	
      //thisObj._stroke(ctx);
      //thisObj._renderStroke(ctx);
	  
    }
  }








function clipObjectText(thisObj, ctx) {
    if (thisObj.clipPath) {
      ctx.save();
      if (thisObj.clipPath.fixed) {
        var retina = thisObj.canvas.getRetinaScaling();
       	ctx.setTransform(retina, 0, 0, retina, 0, 0);
        // to handle zoom
        ctx.transform.apply(ctx, thisObj.canvas.viewportTransform);
        thisObj.clipPath.transform(ctx);
      }

      thisObj.clipPath._render(ctx);
      ctx.restore();
      ctx.clip();
      var x = -thisObj.width / 1,
        y = -thisObj.height / 1,
        elementToDraw;

      if (thisObj.isMoving === false && thisObj.resizeFilter && thisObj._needsResize()) {
        thisObj._lastScaleX = thisObj.scaleX;
        thisObj._lastScaleY = thisObj.scaleY;
        thisObj.applyResizeFilters();
      }
      elementToDraw = thisObj._element;
      elementToDraw && ctx.drawImage(elementToDraw,
        0, 0, thisObj.width, thisObj.height,
        x, y, thisObj.width, thisObj.height);
      thisObj._stroke(ctx);
      thisObj._renderStroke(ctx);
    }
  }






  
// Grafik generate
function newGFX(canv, url, xx, yy, sx, sy, an) {

	fabric.Image.fromURL(url, function(myImg0) {
		var img0 = myImg0.set({ left: xx, top: yy });
		img0.transparentCorners = false;
		img0.originX = "center";
		img0.originY = "center";
		img0.scaleX = sx;
		img0.scaleY = sy;
		img0.angle = an;
		img0.cornerSize = 25;
		//img0.borderScaleFactor = 2;
		//img0.cornerStrokeColor = 'blue';
		//img0.mtr = false;
		img0.centeredScaling = true;
		img0.typ = 1;
		//img0.bringToFront();
		canvas1.add(img0);
		canvas1.setActiveObject(img0);
		/* img0.clipPath = manRoundPrintingMask;
		img0.clipTo = function(ctx) {
			clipObject(this, ctx)
		}  */
		MenONeckLogoFront.bringToFront();
		canvas1.bringToFront(MenONeckLogoFront);
		MenONeckLogoBack.bringToFront();

		MenONeckLogoBack.bringToFront();
		canvas1.bringToFront(MenONeckLogoBack);
		MenONeckLogoBack.bringToFront();
	});
}




// Grafik add
function addGFX() {
	if (activeCanvas) {
		newGFX(activeCanvas, grafikurls[1], 512, 512, 1.0, 1.0, 0 );
	}
}
































// Objekt delete
function deleteObject() {
	if (activeCanvas) {
		activeCanvas.remove(activeCanvas.getActiveObject());
	}
	textitemcounter -= 1;
}



// Shirtfarbe setzen
function setShirtColor(value) {
	canvas1.setBackgroundColor( value );
	canvas1.renderAll();

}


// Objekt nach Vorne
function objectToFront() {
	var ao;
	if (activeCanvas) {
		ao = activeCanvas.getActiveObject();
		if (ao) {
			ao.bringToFront();
			//ao.sendBackwards();
		}
	}
}


// Objekt nach Hinten
function objectToBack() {
	var ao;
	if (activeCanvas) {
		ao = activeCanvas.getActiveObject();
		if (ao) {
			ao.sendToBack();
		}
	}
}



































// Vektor objects 


function newVec(canv, xx, yy, sx, sy, an, cl) {
	var rectangle2 = new fabric.Rect({
		originX: "center",
		originY: "center",
		left: xx,
		top: yy,
		angle: an,
		fill: cl,
		width: sx,
		height: sy,
		transparentCorners: false,
		cornerSize: 34,
		borderScaleFactor: 4, 
		centeredScaling: true,
	});
	rectangle2.typ = 3;
	canv.add(rectangle2);
	rectangle2.sendBackwards();
}

// Vektorobjekt hinzufügen
function addVec() {
	var ob;
	ob = document.getElementById("vecColor");
	if (activeCanvas) {
		newVec(activeCanvas, 512, 512, 200, 200, 0, ob.value );
	}
}



// Vektorobjekt-Farbe setzen (wird vom Colorpicker aufgerufen)
function setVecColor(value) {
	var ao;
	if (activeCanvas) {
		ao = activeCanvas.getActiveObject();
		if (ao) {
			//console.log(activeTyp);
			if (activeTyp == 3) {
				ao.setColor(value);
				ao.dirty = true;
				activeCanvas.renderAll();
			}
		}
	}
}

// Vektorobjekt-Randfarbe setzen (wird vom Colorpicker aufgerufen)
function setVecBorderColor(value) {
	var ao;
	if (activeCanvas) {
		ao = activeCanvas.getActiveObject();
		if (ao) {
			//console.log(activeTyp);
			if (activeTyp == 3) {
				ao.stroke = value;
				ao.dirty = true;
				activeCanvas.renderAll();
			}
		}
	}
}

// Vektorobjekt-Rand setzen (wird vom Slider aufgerufen)
function setVecBorder(value) {
	var ao;
	if (activeCanvas) {
		ao = activeCanvas.getActiveObject();
		if (ao) {
			if (activeTyp == 3) {
				ao.strokeWidth = value;
				if(!ao.st) ao.st = ao.stroke; 
				if (value==0) { ao.stroke = false; } else { ao.stroke = ao.st; }
				ao.dirty = true;
				activeCanvas.renderAll();
			}
		}
	}
}

// Slider und Colorpicker setzen bei Textobjekt-Anwahl
function setVecControls() {
	var ob, ob2, ob3, ao;
	ob = document.getElementById("vecColor");
	ob2 = document.getElementById("vecColorBorder");
	ob3 = document.getElementById("vecBorder");
	if (activeCanvas) {
		ao = activeCanvas.getActiveObject();
		if (ao) {
			if (activeTyp == 3) {
				ob.value = ao.fill;
				//ob2.value = ao.stroke;
				//ob3.value = ao.strokeWidth;
			}
		}
	}
}
















































//additional js for interface things 
//#region interface


MenuTypeContainer.style.background = "#ffffff";
MenuDesignContainer.style.background = "#ffffff";
MenuFarbeContainer.style.background = "#ffffff";
MenuTextContainer.style.background = "#ffffff";
MenuLogoContainer.style.background = "#ffffff";
BlockType_Man.style.background = "#e4f7ff";
BlockType_RoundNeck.style.background = "#e4f7ff";
BlockDesign0.style.background = "#e4f7ff";




/*Type*/
function openType() {	
	bigMainMenuOfType.style.display = "flex";
	MenuTypeContainer.style.background = "radial-gradient(closest-side at 49% 42%, rgba(166, 221, 239, 1) 3.36%, white 46.66%)";
	
	c.style.marginLeft = "20em";
	bigMainMenuOfDesign.style.display = "none";
	MenuDesignContainer.style.background = "#ffffff";
	bigMainMenuOfFarbe.style.display = "none";;
	MenuFarbeContainer.style.background = "#ffffff";
	bigMainMenuOfText.style.display = "none";
	MenuTextContainer.style.background = "#ffffff";
	bigMainMenuOfLogo.style.display = "none";
	MenuLogoContainer.style.background = "#ffffff";

}
function closeType() {
	bigMainMenuOfType.style.display = "none";
	MenuTypeContainer.style.background = "#ffffff";
	c.style.marginLeft = "7em";

}


function chooseWoman() {
	BlockType_Woman.style.background = "#e4f7ff";
	BlockType_Man.style.background  = "#0000000f";
}
function chooseRoundNeck() {
	BlockType_RoundNeck.style.background = "#e4f7ff";
	BlockType_VNeck.style.background  = "#0000000f";
}
function chooseVNeck() {
	BlockType_VNeck.style.background = "#e4f7ff";
	BlockType_RoundNeck.style.background  = "#0000000f";
}


/*Design*/
function openDesign() {	
	bigMainMenuOfDesign.style.display = "flex";
	MenuDesignContainer.style.background = "radial-gradient(closest-side at 49% 40%, rgba(166, 221, 239, 1) 3.36%, white 46.66%)";
	
	c.style.marginLeft = "20em";
	bigMainMenuOfType.style.display = "none";
	MenuTypeContainer.style.background = "#ffffff";
	bigMainMenuOfFarbe.style.display = "none";;
	MenuFarbeContainer.style.background = "#ffffff";
	bigMainMenuOfText.style.display = "none";
	MenuTextContainer.style.background = "#ffffff";
	bigMainMenuOfLogo.style.display = "none";
	MenuLogoContainer.style.background = "#ffffff";

}

function closeDesign() {
	c.style.marginLeft = "7em";
	bigMainMenuOfDesign.style.display = "none";
	MenuDesignContainer.style.background = "#ffffff";
}


/* function ChooseDesign0() {
	BlockDesign0.style.background = "#e4f7ff";
	BlockDesign9.style.background  = "#0000000f";
	BlockDesign10.style.background  = "#0000000f";
	BlockDesign2.style.background  = "#0000000f";
	BlockDesign3.style.background  = "#0000000f";
	BlockDesign4.style.background  = "#0000000f";
	BlockDesign5.style.background  = "#0000000f";
	BlockDesign6.style.background  = "#0000000f";
	BlockDesign7.style.background  = "#0000000f";
	BlockDesign8.style.background  = "#0000000f";
	BlockDesign1.style.background = "#0000000f";

	BlockSelectorForSolidColor.style.display = "block";
	BlockSelectorForDesignColor.style.display = "none";

	choosenDesign = 0;

}
function ChooseDesign1() {
	BlockDesign1.style.background = "#e4f7ff";
	BlockDesign9.style.background  = "#0000000f";
	BlockDesign10.style.background  = "#0000000f";
	BlockDesign2.style.background  = "#0000000f";
	BlockDesign3.style.background  = "#0000000f";
	BlockDesign4.style.background  = "#0000000f";
	BlockDesign5.style.background  = "#0000000f";
	BlockDesign6.style.background  = "#0000000f";
	BlockDesign7.style.background  = "#0000000f";
	BlockDesign8.style.background  = "#0000000f";
	BlockDesign0.style.background = "#0000000f";

	BlockSelectorForSolidColor.style.display = "none";
	BlockSelectorForDesignColor.style.display = "block";
	Farbe2.style.display = "flex";
	Farbe3.style.display = "flex";
	Farbe4.style.display = "none";
	Farbe5.style.display = "none";

	choosenDesign = 1;

}
 */
function ChooseDesign2() {
	BlockDesign2.style.background = "#e4f7ff";
	BlockDesign9.style.background  = "#0000000f";
	BlockDesign10.style.background  = "#0000000f";
	BlockDesign1.style.background  = "#0000000f";
	BlockDesign3.style.background  = "#0000000f";
	BlockDesign4.style.background  = "#0000000f";
	BlockDesign5.style.background  = "#0000000f";
	BlockDesign6.style.background  = "#0000000f";
	BlockDesign7.style.background  = "#0000000f";
	BlockDesign8.style.background  = "#0000000f";
	BlockDesign0.style.background = "#0000000f";

	BlockSelectorForSolidColor.style.display = "none";
	BlockSelectorForDesignColor.style.display = "block";
	Farbe2.style.display = "flex";
	Farbe3.style.display = "flex";
	Farbe4.style.display = "none";
	Farbe5.style.display = "none";

	choosenDesign = 2;

}
function ChooseDesign3() {
	BlockDesign3.style.background = "#e4f7ff";
	BlockDesign9.style.background  = "#0000000f";
	BlockDesign10.style.background  = "#0000000f";
	BlockDesign1.style.background  = "#0000000f";
	BlockDesign2.style.background  = "#0000000f";
	BlockDesign4.style.background  = "#0000000f";
	BlockDesign5.style.background  = "#0000000f";
	BlockDesign6.style.background  = "#0000000f";
	BlockDesign7.style.background  = "#0000000f";
	BlockDesign8.style.background  = "#0000000f";
	BlockDesign0.style.background = "#0000000f";

	BlockSelectorForSolidColor.style.display = "none";
	BlockSelectorForDesignColor.style.display = "block";
	Farbe2.style.display = "flex";
	Farbe3.style.display = "flex";
	Farbe4.style.display = "none";
	Farbe5.style.display = "none";

	choosenDesign = 3;

}
function ChooseDesign4() {
	BlockDesign4.style.background = "#e4f7ff";
	BlockDesign9.style.background  = "#0000000f";
	BlockDesign10.style.background  = "#0000000f";
	BlockDesign1.style.background  = "#0000000f";
	BlockDesign2.style.background  = "#0000000f";
	BlockDesign3.style.background  = "#0000000f";
	BlockDesign5.style.background  = "#0000000f";
	BlockDesign6.style.background  = "#0000000f";
	BlockDesign7.style.background  = "#0000000f";
	BlockDesign8.style.background  = "#0000000f";
	BlockDesign0.style.background = "#0000000f";

	BlockSelectorForSolidColor.style.display = "none";
	BlockSelectorForDesignColor.style.display = "block";
	Farbe2.style.display = "flex";
	Farbe3.style.display = "none";
	Farbe4.style.display = "none";
	Farbe5.style.display = "none";

	choosenDesign = 4;

}
function ChooseDesign5() {
	BlockDesign5.style.background = "#e4f7ff";
	BlockDesign9.style.background  = "#0000000f";
	BlockDesign10.style.background  = "#0000000f";
	BlockDesign1.style.background  = "#0000000f";
	BlockDesign2.style.background  = "#0000000f";
	BlockDesign3.style.background  = "#0000000f";
	BlockDesign4.style.background  = "#0000000f";
	BlockDesign6.style.background  = "#0000000f";
	BlockDesign7.style.background  = "#0000000f";
	BlockDesign8.style.background  = "#0000000f";
	BlockDesign0.style.background = "#0000000f";

	BlockSelectorForSolidColor.style.display = "none";
	BlockSelectorForDesignColor.style.display = "block";
	Farbe2.style.display = "flex";
	Farbe3.style.display = "flex";
	Farbe4.style.display = "flex";
	Farbe5.style.display = "flex";

	choosenDesign = 5;

}
function ChooseDesign6() {
	BlockDesign6.style.background = "#e4f7ff";
	BlockDesign9.style.background  = "#0000000f";
	BlockDesign10.style.background  = "#0000000f";
	BlockDesign1.style.background  = "#0000000f";
	BlockDesign2.style.background  = "#0000000f";
	BlockDesign3.style.background  = "#0000000f";
	BlockDesign4.style.background  = "#0000000f";
	BlockDesign5.style.background  = "#0000000f";
	BlockDesign7.style.background  = "#0000000f";
	BlockDesign8.style.background  = "#0000000f";
	BlockDesign0.style.background = "#0000000f";

	BlockSelectorForSolidColor.style.display = "none";
	BlockSelectorForDesignColor.style.display = "block";
	
	Farbe2.style.display = "flex";
	Farbe3.style.display = "flex";
	Farbe4.style.display = "none";
	Farbe5.style.display = "none";

	choosenDesign = 6;
}


function ChooseDesign7() {
	BlockDesign7.style.background = "#e4f7ff";
	BlockDesign9.style.background  = "#0000000f";
	BlockDesign10.style.background  = "#0000000f";
	BlockDesign1.style.background  = "#0000000f";
	BlockDesign2.style.background  = "#0000000f";
	BlockDesign3.style.background  = "#0000000f";
	BlockDesign4.style.background  = "#0000000f";
	BlockDesign5.style.background  = "#0000000f";
	BlockDesign6.style.background  = "#0000000f";
	BlockDesign8.style.background  = "#0000000f";
	BlockDesign0.style.background = "#0000000f";

	BlockSelectorForSolidColor.style.display = "none";
	BlockSelectorForDesignColor.style.display = "block";

	Farbe2.style.display = "flex";
	Farbe3.style.display = "flex";
	Farbe4.style.display = "flex";
	Farbe5.style.display = "flex";

	choosenDesign = 7;

}

function ChooseDesign8() {
	BlockDesign8.style.background = "#e4f7ff";
	BlockDesign9.style.background  = "#0000000f";
	BlockDesign10.style.background  = "#0000000f";
	BlockDesign1.style.background  = "#0000000f";
	BlockDesign2.style.background  = "#0000000f";
	BlockDesign3.style.background  = "#0000000f";
	BlockDesign4.style.background  = "#0000000f";
	BlockDesign5.style.background  = "#0000000f";
	BlockDesign6.style.background  = "#0000000f";
	BlockDesign7.style.background  = "#0000000f";
	BlockDesign0.style.background = "#0000000f";

	BlockSelectorForSolidColor.style.display = "none";
	BlockSelectorForDesignColor.style.display = "block";

	Farbe2.style.display = "flex";
	Farbe3.style.display = "none";
	Farbe4.style.display = "none";
	Farbe5.style.display = "none";

	choosenDesign = 8;

}

function ChooseDesign9() {
	BlockDesign9.style.background = "#e4f7ff";
	BlockDesign8.style.background  = "#0000000f";
	BlockDesign10.style.background  = "#0000000f";
	BlockDesign1.style.background  = "#0000000f";
	BlockDesign2.style.background  = "#0000000f";
	BlockDesign3.style.background  = "#0000000f";
	BlockDesign4.style.background  = "#0000000f";
	BlockDesign5.style.background  = "#0000000f";
	BlockDesign6.style.background  = "#0000000f";
	BlockDesign7.style.background  = "#0000000f";
	BlockDesign0.style.background = "#0000000f";

	BlockSelectorForSolidColor.style.display = "none";
	BlockSelectorForDesignColor.style.display = "block";

	Farbe2.style.display = "flex";
	Farbe3.style.display = "flex";
	Farbe4.style.display = "none";
	Farbe5.style.display = "none";

	choosenDesign = 9;

}


function ChooseDesign10() {
	BlockDesign10.style.background = "#e4f7ff";
	BlockDesign8.style.background  = "#0000000f";
	BlockDesign9.style.background  = "#0000000f";
	BlockDesign1.style.background  = "#0000000f";
	BlockDesign2.style.background  = "#0000000f";
	BlockDesign3.style.background  = "#0000000f";
	BlockDesign4.style.background  = "#0000000f";
	BlockDesign5.style.background  = "#0000000f";
	BlockDesign6.style.background  = "#0000000f";
	BlockDesign7.style.background  = "#0000000f";
	BlockDesign0.style.background = "#0000000f";

	BlockSelectorForSolidColor.style.display = "none";
	BlockSelectorForDesignColor.style.display = "block";

	Farbe2.style.display = "flex";
	Farbe3.style.display = "flex";
	Farbe4.style.display = "flex";
	Farbe5.style.display = "none";

	choosenDesign = 10;

}


/*Farbe*/
function openFarbe() {	
	bigMainMenuOfFarbe.style.display = "flex";
	MenuFarbeContainer.style.background = "radial-gradient(closest-side at 49% 40%, rgba(166, 221, 239, 1) 3.36%, white 46.66%)";
	
	c.style.marginLeft = "20em";
	bigMainMenuOfType.style.display = "none";
	MenuTypeContainer.style.background = "#ffffff";
	bigMainMenuOfDesign.style.display = "none";
	MenuDesignContainer.style.background = "#ffffff";
	bigMainMenuOfText.style.display = "none";
	MenuTextContainer.style.background = "#ffffff";
	bigMainMenuOfLogo.style.display = "none";
	MenuLogoContainer.style.background = "#ffffff";
}
function closeFarbe() {
	c.style.marginLeft = "7em";	bigMainMenuOfFarbe.style.display = "none";
	MenuFarbeContainer.style.background = "#ffffff";
}





	
/*Text*/
function openText() {	
	bigMainMenuOfText.style.display = "flex";
	MenuTextContainer.style.background = "radial-gradient(closest-side at 49% 40%, rgba(166, 221, 239, 1) 3.36%, white 46.66%)";
	
	c.style.marginLeft = "20em";
	bigMainMenuOfType.style.display = "none";
	MenuTypeContainer.style.background = "#ffffff";
	bigMainMenuOfFarbe.style.display = "none";;
	MenuFarbeContainer.style.background = "#ffffff";
	bigMainMenuOfDesign.style.display = "none";
	MenuDesignContainer.style.background = "#ffffff";
	bigMainMenuOfLogo.style.display = "none";
	MenuLogoContainer.style.background = "#ffffff";	

	highlightSelectedFont('Helvetica',4);

}
function closeText() {
	c.style.marginLeft = "7em";
	bigMainMenuOfText.style.display = "none";
	MenuTextContainer.style.background = "#ffffff";
}

/*Logo*/
function openLogo() {	
	bigMainMenuOfLogo.style.display = "flex";
	MenuLogoContainer.style.background = "radial-gradient(closest-side at 49% 40%, rgba(166, 221, 239, 1) 3.36%, white 46.66%)";
	c.style.marginLeft = "20em";

	bigMainMenuOfDesign.style.display = "none";
	MenuDesignContainer.style.background = "#ffffff";
	bigMainMenuOfFarbe.style.display = "none";;
	MenuFarbeContainer.style.background = "#ffffff";
	bigMainMenuOfText.style.display = "none";
	MenuTextContainer.style.background = "#ffffff";
	bigMainMenuOfType.style.display = "none";
	MenuTypeContainer.style.background = "#fffff";

}
function closeLogo() {
	bigMainMenuOfLogo.style.display = "none";
	c.style.marginLeft = "7em";	MenuLogoContainer.style.background = "#ffffff";
}


//#endregion interface


































function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}









//convert rgb to hex
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}









function collectDesignData() {


	//canvas.toDataUrl

	console.log(canvas1);
	//document.getElementById('canvas1').toDataUrl({ multiplier: 6.428 }) 



	//IMPORTANT! Need to write a checker if we ever never meet this random number from database to avoid overwriting of saved designs. 
	/* let custId = Math.floor((Math.random() * 9999999) + 1);
	window['data'+custId] = [{customerId: custId}]


	switch (GenderStatus) {
	case 0: GenderStatus_string = 'Man'; break; case 1: GenderStatus_string = 'Woman';
	}

	switch (NeckStatus) {
	case 0: NeckStatus_string = 'Round'; break; case 1: NeckStatus_string = 'V-Neck';
	}

	window['data'+custId].push({ gender: GenderStatus_string, neck: NeckStatus_string });

	//too collect all selected colors of design patters
	for (let i = 1; i < 6; i++) { 
	Patterns_colors[i] = rgb2hex(window.getComputedStyle(document.getElementById('SelectedColorFarbe'+i)).getPropertyValue("background-color"));
	}

	//to collect basic colors of parts (basic design)
	BasicJersey_colors[1] = rgb2hex(window.getComputedStyle(document.getElementById('SelectedColorFront')).getPropertyValue("background-color"));
	BasicJersey_colors[2] = rgb2hex(window.getComputedStyle(document.getElementById('SelectedColorBack')).getPropertyValue("background-color"));
	BasicJersey_colors[3] = rgb2hex(window.getComputedStyle(document.getElementById('SelectedLeftSleeve')).getPropertyValue("background-color"));
	BasicJersey_colors[4] = rgb2hex(window.getComputedStyle(document.getElementById('SelectedLeftSide')).getPropertyValue("background-color"));
	BasicJersey_colors[5] = rgb2hex(window.getComputedStyle(document.getElementById('SelectedRightSleeve')).getPropertyValue("background-color"));
	BasicJersey_colors[6] = rgb2hex(window.getComputedStyle(document.getElementById('SelectedRightSide')).getPropertyValue("background-color"));
	BasicJersey_colors[7] = rgb2hex(window.getComputedStyle(document.getElementById('SelectedKnitTrim')).getPropertyValue("background-color"));

	//put patterns colors in the array; 
	window['data'+custId].push({ Patterns_colors1: Patterns_colors[1], Patterns_colors2: Patterns_colors[2], Patterns_colors3: Patterns_colors[3], Patterns_colors4: Patterns_colors[4], Patterns_colors5: Patterns_colors[5] });

	//array basic Jersey Colors (Design #1)
	window['data'+custId].push({ BasicDesign_Color_Front: BasicJersey_colors[1], BasicDesign_Color_Back: BasicJersey_colors[2], BasicDesign_Color_LeftSleeve: BasicJersey_colors[3], BasicDesign_Color_LeftSide: BasicJersey_colors[4], BasicDesign_Color_RightSleeve: BasicJersey_colors[5], BasicDesign_Color_RightSide: BasicJersey_colors[6], BasicDesign_Color_KnitTrim: BasicJersey_colors[7] });

	//What Design Pattern had been selected 
	window['data'+custId].push({ChoosenDesign: choosenDesign});

	//save whole canvas1 with all object from jersey (to restore - from json)
	window['data'+custId].push({fabricjs_canvas: canvas1.toJSON()});

	//var savedCanvas = JSON.stringify( canvas1.toJSON() );

	//console.log(window['data'+custId])

	$.ajax({

		type: "POST",
		url: 'https://www.artiva-sports.com/captiva/save3d.asp',
	
		data: JSON.stringify( window['data'+custId] ),
	
		contentType: "application/json; charset=utf-8",


		success: function(data) {
			alert('ok');
			console.log( window['data'+custId] )
			//console.log("data :", data);
			// Do something with the response
		},
	
		error: function() {
			alert('Failed');
		}
	}); */

}





























//originally from main2.js
/* 
jQuery(document).ready(function() {
	$.ajax({
		url: 'https://www.artiva-sports.com/captiva/load3d.asp',
		type: 'post',
		dataType: 'json',
		success: function(data, textStatus, request) {
			console.log("type: " + data.type);
			for( var i = 0; i < data.objects.length; i++ ){
				var objType = data.objects[i].objType;
				if (objType == 'text') {
					var text = data.objects[i].text;
					var posX = data.objects[i].posX;
					var posY = data.objects[i].posY;
					var colorText = data.objects[i].colorText;
					var colorBorder = data.objects[i].colorBorder;
					var font = data.objects[i].font;
					var rotation = data.objects[i].rotation;
					var scaleX = data.objects[i].scaleX;
					var borderWidth = data.objects[i].borderWidth;
					//newText(canvas1, text, posX, posY, scaleX, rotation, colorText, colorBorder, borderWidth, font, "text9" ); 
					//newText(canvas1, text, posX, posY, ..., ..., ..., ...., ..., ..., .... );
				} else if (objType == 'graphic') {
					var url = data.objects[i].url;
					var posX = data.objects[i].posX;
					var posY = data.objects[i].posY;
					var rotation = data.objects[i].rotation;
					var scaleX = data.objects[i].scaleX;
					var scaleY = data.objects[i].scaleY;
					//newGFX(canvas1, url, posX, posY, scaleX, scaleY, rotation);
				}
			}
		}
	});
}); */




















//color picker related


//const el = document.querySelector('.SelectedColor');
