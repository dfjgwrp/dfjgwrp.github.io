let MenuStatus = 'colors';

function openColors() {

    if (MenuStatus == 'logos') {
        LogosIconMenu.style.animation = 'animationNameBack 0.8s';
        LogosIconMenu.style.opacity = "0.2";
        BoldLineLogos.style.animation = 'animationNameBack 0.8s';
        BoldLineLogos.style.opacity = "0.2";
        LogosMenu.style.animation = 'animationNameBack 0.8s';

        ColorsIconMenu.style.animation = 'animationName 0.8s';
        BoldLineColors.style.animation = 'animationName 0.8s';
        ColorsMenu.style.animation = 'animationName 0.8s';
        ColorsIconMenu.style.opacity = "1";
        BoldLineColors.style.opacity = "1";
        ColorsMenu.style.display = "flex";
        LogosMenu.style.display = "none";
        TextMenu.style.display = "none";
        SummaryMenu.style.display = "none";
        MenuStatus = 'colors';
        
    }else if (MenuStatus == 'text') {
        TextIconMenu.style.animation = 'animationNameBack 0.8s';
        TextIconMenu.style.opacity = "0.2";
        BoldLineText.style.animation = 'animationNameBack 0.8s';
        BoldLineText.style.opacity = "0.2";
        TextMenu.style.animation = 'animationNameBack 0.8s';

        ColorsIconMenu.style.animation = 'animationName 0.8s';
        BoldLineColors.style.animation = 'animationName 0.8s';
        ColorsMenu.style.animation = 'animationName 0.8s';
        ColorsIconMenu.style.opacity = "1";
        BoldLineColors.style.opacity = "1";
        ColorsMenu.style.display = "flex";
        LogosMenu.style.display = "none";
        TextMenu.style.display = "none";
        SummaryMenu.style.display = "none";
        MenuStatus = 'colors';

    }else if (MenuStatus == 'summary') {
        SummaryIconMenu.style.animation = 'animationNameBack 0.8s';
        SummaryIconMenu.style.opacity = "0.2";
        BoldLineSummary.style.animation = 'animationNameBack 0.8s';
        BoldLineSummary.style.opacity = "0.2";
        SummaryMenu.style.animation = 'animationNameBack 0.8s';
    
        ColorsIconMenu.style.animation = 'animationName 0.8s';
        BoldLineColors.style.animation = 'animationName 0.8s';
        ColorsMenu.style.animation = 'animationName 0.8s';
        ColorsIconMenu.style.opacity = "1";
        BoldLineColors.style.opacity = "1";
        ColorsMenu.style.display = "flex";
        LogosMenu.style.display = "none";
        TextMenu.style.display = "none";
        SummaryMenu.style.display = "none";
        MenuStatus = 'colors';
    }
}


function openText() {

    if (MenuStatus == 'colors') {
        ColorsIconMenu.style.animation = 'animationNameBack 0.8s';
        ColorsIconMenu.style.opacity = "0.2";
        BoldLineColors.style.animation = 'animationNameBack 0.8s';
        BoldLineColors.style.opacity = "0.2";
        ColorsMenu.style.animation = 'animationNameBack 0.8s';
        
        TextIconMenu.style.animation = 'animationName 0.8s';
        BoldLineText.style.animation = 'animationName 0.8s';
        TextMenu.style.animation = 'animationName 0.8s';
        TextIconMenu.style.opacity = "1";
        BoldLineText.style.opacity = "1";
        ColorsMenu.style.display = "none";
        TextMenu.style.display = "flex";
        LogosMenu.style.display = "none";
        SummaryMenu.style.display = "none";
        MenuStatus = 'text';
    
    }else if (MenuStatus =='logos') {
        LogosIconMenu.style.animation = 'animationNameBack 0.8s';
        LogosIconMenu.style.opacity = "0.2";
        BoldLineLogos.style.animation = 'animationNameBack 0.8s';
        BoldLineLogos.style.opacity = "0.2";
        LogosMenu.style.animation = 'animationNameBack 0.8s';

        TextIconMenu.style.animation = 'animationName 0.8s';
        BoldLineText.style.animation = 'animationName 0.8s';
        TextMenu.style.animation = 'animationName 0.8s';
        TextIconMenu.style.opacity = "1";
        BoldLineText.style.opacity = "1";
        ColorsMenu.style.display = "none";
        TextMenu.style.display = "flex";
        LogosMenu.style.display = "none";
        SummaryMenu.style.display = "none";
        MenuStatus = 'text';
    
    }else if (MenuStatus == 'summary') {
        SummaryIconMenu.style.animation = 'animationNameBack 0.8s';
        SummaryIconMenu.style.opacity = "0.2";
        BoldLineSummary.style.animation = 'animationNameBack 0.8s';
        BoldLineSummary.style.opacity = "0.2";
        SummaryMenu.style.animation = 'animationNameBack 0.8s';
    
        TextIconMenu.style.animation = 'animationName 0.8s';
        BoldLineText.style.animation = 'animationName 0.8s';
        TextMenu.style.animation = 'animationName 0.8s';
        TextIconMenu.style.opacity = "1";
        BoldLineText.style.opacity = "1";
        ColorsMenu.style.display = "none";
        TextMenu.style.display = "flex";
        LogosMenu.style.display = "none";
        SummaryMenu.style.display = "none";
        MenuStatus = 'text';
    
    }
}

function openLogos() {

    if (MenuStatus =='colors') {
        ColorsIconMenu.style.animation = 'animationNameBack 0.8s';
        ColorsIconMenu.style.opacity = "0.2";
        BoldLineColors.style.animation = 'animationNameBack 0.8s';
        BoldLineColors.style.opacity = "0.2";
        ColorsMenu.style.animation = 'animationNameBack 0.8s';

        LogosIconMenu.style.animation = 'animationName 0.8s';
        BoldLineLogos.style.animation = 'animationName 0.8s';
        LogosMenu.style.animation = 'animationName 0.8s';
        LogosIconMenu.style.opacity = "1";
        BoldLineLogos.style.opacity = "1";
        ColorsMenu.style.display = "none";
        LogosMenu.style.display = "flex";
        TextMenu.style.display = "none";
        SummaryMenu.style.display = "none";
        MenuStatus = 'logos';

    }else if (MenuStatus == 'text') {
        TextIconMenu.style.animation = 'animationNameBack 0.8s';
        TextIconMenu.style.opacity = "0.2";
        BoldLineText.style.animation = 'animationNameBack 0.8s';
        BoldLineText.style.opacity = "0.2";
        TextMenu.style.animation = 'animationNameBack 0.8s';

        LogosIconMenu.style.animation = 'animationName 0.8s';
        BoldLineLogos.style.animation = 'animationName 0.8s';
        LogosMenu.style.animation = 'animationName 0.8s';
        LogosIconMenu.style.opacity = "1";
        BoldLineLogos.style.opacity = "1";
        ColorsMenu.style.display = "none";
        LogosMenu.style.display = "flex";
        TextMenu.style.display = "none";
        SummaryMenu.style.display = "none";
        MenuStatus = 'logos';

    }else if (MenuStatus == 'summary') {
        SummaryIconMenu.style.animation = 'animationNameBack 0.8s';
        SummaryIconMenu.style.opacity = "0.2";
        BoldLineSummary.style.animation = 'animationNameBack 0.8s';
        BoldLineSummary.style.opacity = "0.2";
        SummaryMenu.style.animation = 'animationNameBack 0.8s';
    
        LogosIconMenu.style.animation = 'animationName 0.8s';
        BoldLineLogos.style.animation = 'animationName 0.8s';
        LogosMenu.style.animation = 'animationName 0.8s';
        LogosIconMenu.style.opacity = "1";
        BoldLineLogos.style.opacity = "1";
        ColorsMenu.style.display = "none";
        LogosMenu.style.display = "flex";
        TextMenu.style.display = "none";
        SummaryMenu.style.display = "none";
        MenuStatus = 'logos';
    }
}

function openSummary() {

    if (MenuStatus == 'colors') {
        ColorsIconMenu.style.animation = 'animationNameBack 0.8s';
        ColorsIconMenu.style.opacity = "0.2";
        BoldLineColors.style.animation = 'animationNameBack 0.8s';
        BoldLineColors.style.opacity = "0.2";
        ColorsMenu.style.animation = 'animationNameBack 0.8s';

        SummaryIconMenu.style.animation = 'animationName 0.8s';
        BoldLineSummary.style.animation = 'animationName 0.8s';
        SummaryMenu.style.animation = 'animationName 0.8s';
        SummaryIconMenu.style.opacity = "1";
        BoldLineSummary.style.opacity = "1";
        ColorsMenu.style.display = "none";
        LogosMenu.style.display = "none";
        TextMenu.style.display = "none";
        SummaryMenu.style.display = "flex";
        MenuStatus = 'summary';

    }else if (MenuStatus == 'text') {
        TextIconMenu.style.animation = 'animationNameBack 0.8s';
        TextIconMenu.style.opacity = "0.2";
        BoldLineText.style.animation = 'animationNameBack 0.8s';
        BoldLineText.style.opacity = "0.2";
        TextMenu.style.animation = 'animationNameBack 0.8s';

        SummaryIconMenu.style.animation = 'animationName 0.8s';
        BoldLineSummary.style.animation = 'animationName 0.8s';
        SummaryMenu.style.animation = 'animationName 0.8s';
        SummaryIconMenu.style.opacity = "1";
        BoldLineSummary.style.opacity = "1";
        ColorsMenu.style.display = "none";
        LogosMenu.style.display = "none";
        TextMenu.style.display = "none";
        SummaryMenu.style.display = "flex";
        MenuStatus = 'summary';

    }else if (MenuStatus == 'logos') {
        LogosIconMenu.style.animation = 'animationNameBack 0.8s';
        LogosIconMenu.style.opacity = "0.2";
        BoldLineLogos.style.animation = 'animationNameBack 0.8s';
        BoldLineLogos.style.opacity = "0.2";
        LogosMenu.style.animation = 'animationNameBack 0.8s';

        SummaryIconMenu.style.animation = 'animationName 0.8s';
        BoldLineSummary.style.animation = 'animationName 0.8s';
        SummaryMenu.style.animation = 'animationName 0.8s';
        SummaryIconMenu.style.opacity = "1";
        BoldLineSummary.style.opacity = "1";
        ColorsMenu.style.display = "none";
        LogosMenu.style.display = "none";
        TextMenu.style.display = "none";
        SummaryMenu.style.display = "flex";
        MenuStatus = 'summary';
    }
}


let DetailsStatus = 0;

function openDetails() {

    if (DetailsStatus == 0) {
        SummaryIconMenu.style.color = "#B5B5B5";
        BoldLineSummary.style.background = "#EDEEEE";
        ColorsIconMenu.style.color = "#B5B5B5";
        BoldLineColors.style.background = "#EDEEEE";
        LogosIconMenu.style.color = "#B5B5B5";
        BoldLineLogos.style.background = "#EDEEEE";
        TextIconMenu.style.color = "#B5B5B5";
        BoldLineText.style.background = "#EDEEEE";

        ColorsMenu.style.display = "none";
        TextMenu.style.display = "none";
        LogosMenu.style.display = "none";
        SummaryMenu.style.display = "none";
        DetailsMenu.style.display = "flex";
        document.getElementById("expandDetails").innerHTML = "-";
        DetailsStatus = 1; }

     else if (DetailsStatus == 1) {
         switch (MenuStatus) {
		case 'colors': 
            ColorsMenu.style.display = "flex";
            DetailsMenu.style.display = "none";
            ColorsIconMenu.style.color = "#000000";
            BoldLineColors.style.background = "#000000";
            MenuStatus = 'colors';
            document.getElementById("expandDetails").innerHTML = "+";
            DetailsStatus = 0;
		break;
        case 'text': 
            TextMenu.style.display = "flex";
            DetailsMenu.style.display = "none";
            TextIconMenu.style.color = "#000000";
            BoldLineText.style.background = "#000000";
            MenuStatus = 'text';
            document.getElementById("expandDetails").innerHTML = "+";
            DetailsStatus = 0;
		break;
        case 'logos': 
            LogosMenu.style.display = "flex";
            DetailsMenu.style.display = "none";
            LogosIconMenu.style.color = "#000000";
            BoldLineLogos.style.background = "#000000";
            MenuStatus = 'logos';
            document.getElementById("expandDetails").innerHTML = "+";
            DetailsStatus = 0;
		break;
        case 'summary': 
            SummaryMenu.style.display = "flex";
            DetailsMenu.style.display = "none";
            SummaryIconMenu.style.color = "#000000";
            BoldLineSummary.style.background = "#000000";
            MenuStatus = 'summary';
            document.getElementById("expandDetails").innerHTML = "+";
            DetailsStatus = 0;
		break;
        }
    }
}



let JerseyAllColorsStatus = 0;

function openJerseyColors() {
    if (JerseyAllColorsStatus == 0) {

        BaseJerseyBlock.style.display = "flex";
        Accent1JerseyBlock.style.display = "flex";
        Accent2JerseyBlock.style.display = "flex";
        expandJersey.style.transform = "rotate(45deg)";
        expandJersey.style.left = "0.1em";
        
        JerseyAllColorsStatus = 1; }

    else if (JerseyAllColorsStatus == 1) {

        BaseJerseyBlock.style.display = "none";
        Accent1JerseyBlock.style.display = "none";
        Accent2JerseyBlock.style.display = "none";
        ColorJerseyAccent1.style.display = "none";
        ColorJerseyAccent2.style.display = "none";
        ColorJerseyBase.style.display = "none";
        expandJersey.style.transform = "rotate(0deg)";
        expandJersey.style.left = "0em";

        JerseyAllColorsStatus = 0; }

}



let JerseyBaseColorsStatus = 0;

function openJerseyBaseColors() {
    if (JerseyBaseColorsStatus == 0) {

        ColorJerseyBase.style.display = "block";
        CrossIconBaseJersey.style.transform = "rotate(45deg)"; 
        JerseyBaseColorsStatus = 1; }

    else if (JerseyBaseColorsStatus == 1) {

        ColorJerseyBase.style.display = "none";
        CrossIconBaseJersey.style.transform = "rotate(0deg)"; 
        JerseyBaseColorsStatus = 0; }

}


let JerseyAccent1ColorsStatus = 0;

function openJerseyAccent1Colors() {
    if (JerseyAccent1ColorsStatus == 0) {

        ColorJerseyAccent1.style.display = "block";
        CrossIconAccent1Jersey.style.transform = "rotate(45deg)"; 
        JerseyAccent1ColorsStatus = 1; }

    else if (JerseyAccent1ColorsStatus == 1) {

        ColorJerseyAccent1.style.display = "none";
        CrossIconAccent1Jersey.style.transform = "rotate(90deg)"; 
        JerseyAccent1ColorsStatus = 0; }

}


let JerseyAccent2ColorsStatus = 0;

function openJerseyAccent2Colors() {
    if (JerseyAccent2ColorsStatus == 0) {

        ColorJerseyAccent2.style.display = "block";
        CrossIconAccent2Jersey.style.transform = "rotate(45deg)"; 
        JerseyAccent2ColorsStatus = 1; }

    else if (JerseyAccent2ColorsStatus == 1) {

        ColorJerseyAccent2.style.display = "none";
        CrossIconAccent2Jersey.style.transform = "rotate(90deg)"; 
        JerseyAccent2ColorsStatus = 0; }

}







let ShortsAllColorsStatus = 0;

function openShortsColors() {
    if (ShortsAllColorsStatus == 0) {

        BaseShortsBlock.style.display = "flex";
        Accent1ShortsBlock.style.display = "flex";
        Accent2ShortsBlock.style.display = "flex";
        expandShorts.style.transform = "rotate(45deg)";
        expandShorts.style.left = "0.1em";
        
        ShortsAllColorsStatus = 1; }

    else if (ShortsAllColorsStatus == 1) {

        BaseShortsBlock.style.display = "none";
        Accent1ShortsBlock.style.display = "none";
        Accent2ShortsBlock.style.display = "none";
        ColorShortsBase.style.display = "none";
        ColorShortsAccent1.style.display = "none";
        ColorShortsAccent2.style.display = "none";
        expandShorts.style.transform = "rotate(0deg)";
        expandShorts.style.left = "0em";
        ShortsAllColorsStatus = 0; }

}



let ShortsBaseColorsStatus = 0;

function openShortsBaseColors() {
    if (ShortsBaseColorsStatus == 0) {

        ColorShortsBase.style.display = "block";
        CrossIconBaseShorts.style.transform = "rotate(45deg)"; 
        ShortsBaseColorsStatus = 1; }

    else if (ShortsBaseColorsStatus == 1) {

        ColorShortsBase.style.display = "none";
        CrossIconBaseShorts.style.transform = "rotate(90deg)"; 
        ShortsBaseColorsStatus = 0; }

}


let ShortsAccent1ColorsStatus = 0;

function openShortsAccent1Colors() {
    if (ShortsAccent1ColorsStatus == 0) {

        ColorShortsAccent1.style.display = "block";
        CrossIconAccent1Shorts.style.transform = "rotate(45deg)"; 
        ShortsAccent1ColorsStatus = 1; }

    else if (ShortsAccent1ColorsStatus == 1) {

        ColorShortsAccent1.style.display = "none";
        CrossIconAccent1Shorts.style.transform = "rotate(90deg)"; 
        ShortsAccent1ColorsStatus = 0; }

}


let ShortsAccent2ColorsStatus = 0;

function openShortsAccent2Colors() {
    if (ShortsAccent2ColorsStatus == 0) {

        ColorShortsAccent2.style.display = "block";
        CrossIconAccent2Shorts.style.transform = "rotate(45deg)"; 
        ShortsAccent2ColorsStatus = 1; }

    else if (ShortsAccent2ColorsStatus == 1) {

        ColorShortsAccent2.style.display = "none";
        CrossIconAccent2Shorts.style.transform = "rotate(90deg)"; 
        ShortsAccent2ColorsStatus = 0; }

}


function ApplyBlackJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#000000";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Black";
    document.getElementById("BaseColorValue").innerHTML = "Black";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#000000";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#000000";
	BackgroundCanvas28cm.style.backgroundColor = "#000000";
	BackgroundCanvas5cm.style.backgroundColor = "#000000";
}

function ApplyWhiteJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#FFFFFF";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "1px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "White";
    document.getElementById("BaseColorValue").innerHTML = "White";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#FFFFFF";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#FFFFFF";
	BackgroundCanvas28cm.style.backgroundColor = "#FFFFFF";
	BackgroundCanvas5cm.style.backgroundColor = "#FFFFFF";
}

function ApplyGraphiteJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#676767";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Graphite";
    document.getElementById("BaseColorValue").innerHTML = "Graphite";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#676767";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#676767";
	BackgroundCanvas28cm.style.backgroundColor = "#676767";
	BackgroundCanvas5cm.style.backgroundColor = "#676767";
}

function ApplyGreyJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#C4C5C7";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Grey";
    document.getElementById("BaseColorValue").innerHTML = "Grey";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#C4C5C7";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#C4C5C7";
	BackgroundCanvas28cm.style.backgroundColor = "#C4C5C7";
	BackgroundCanvas5cm.style.backgroundColor = "#C4C5C7";
}

function ApplyMaroonJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#4F1719";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Maroon";
    document.getElementById("BaseColorValue").innerHTML = "Maroon";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#4F1719";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#4F1719";
	BackgroundCanvas28cm.style.backgroundColor = "#4F1719";
	BackgroundCanvas5cm.style.backgroundColor = "#4F1719";
}

function ApplyCardinalJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#5E070C";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Cardinal";
    document.getElementById("BaseColorValue").innerHTML = "Cardinal";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#5E070C";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#5E070C";
	BackgroundCanvas28cm.style.backgroundColor = "#5E070C";
	BackgroundCanvas5cm.style.backgroundColor = "#5E070C";
}

function ApplyBrownJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#5E3013";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Brown";
    document.getElementById("BaseColorValue").innerHTML = "Brown";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#5E3013";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#5E3013";
	BackgroundCanvas28cm.style.backgroundColor = "#5E3013";
	BackgroundCanvas5cm.style.backgroundColor = "#5E3013";
}

function ApplyBurntOrangeJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#C06628";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Burnt Orange";
    document.getElementById("BaseColorValue").innerHTML = "Burnt Orange";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#C06628";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#C06628";
	BackgroundCanvas28cm.style.backgroundColor = "#C06628";
	BackgroundCanvas5cm.style.backgroundColor = "#C06628";
}

function ApplyScarletJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#B72025";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Scarlet";
    document.getElementById("BaseColorValue").innerHTML = "Scarlet";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#B72025";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#B72025";
	BackgroundCanvas28cm.style.backgroundColor = "#B72025";
	BackgroundCanvas5cm.style.backgroundColor = "#B72025";
}

function ApplyDarkOrangeJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#DD6426";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Dark Orange";
    document.getElementById("BaseColorValue").innerHTML = "Dark Orange";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#DD6426";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#DD6426";
	BackgroundCanvas28cm.style.backgroundColor = "#DD6426";
	BackgroundCanvas5cm.style.backgroundColor = "#DD6426";
}

function ApplyFluorescentOrangeJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#F6923C";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Fluorescent Orange";
    document.getElementById("BaseColorValue").innerHTML = "Fluorescent Orange";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#F6923C";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#F6923C";
	BackgroundCanvas28cm.style.backgroundColor = "#F6923C";
	BackgroundCanvas5cm.style.backgroundColor = "#F6923C";
}

function ApplyGoldJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#ECAD1F";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Gold";
    document.getElementById("BaseColorValue").innerHTML = "Gold";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#ECAD1F";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#ECAD1F";
	BackgroundCanvas28cm.style.backgroundColor = "#ECAD1F";
	BackgroundCanvas5cm.style.backgroundColor = "#ECAD1F";
}

function ApplyTaxiJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#FFCC05";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Taxi";
    document.getElementById("BaseColorValue").innerHTML = "Taxi";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#FFCC05";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#FFCC05";
	BackgroundCanvas28cm.style.backgroundColor = "#FFCC05";
	BackgroundCanvas5cm.style.backgroundColor = "#FFCC05";
}

function ApplyVegasGoldJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#D5BC6C";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Vegas Gold";
    document.getElementById("BaseColorValue").innerHTML = "Vegas Gold";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#D5BC6C";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#D5BC6C";
	BackgroundCanvas28cm.style.backgroundColor = "#D5BC6C";
	BackgroundCanvas5cm.style.backgroundColor = "#D5BC6C";
}

function ApplyFluorescentYellowJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#DDE11D";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Fluorescent Yellow";
    document.getElementById("BaseColorValue").innerHTML = "Fluorescent Yellow";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#DDE11D";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#DDE11D";
	BackgroundCanvas28cm.style.backgroundColor = "#DDE11D";
	BackgroundCanvas5cm.style.backgroundColor = "#DDE11D";
}

function ApplyPinkJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#EEBCD6";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Pink";
    document.getElementById("BaseColorValue").innerHTML = "Pink";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#EEBCD6";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#EEBCD6";
	BackgroundCanvas28cm.style.backgroundColor = "#EEBCD6";
	BackgroundCanvas5cm.style.backgroundColor = "#EEBCD6";
}

function ApplyFluorescentPinkJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#EC228F";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Fluorescent Pink";
    document.getElementById("BaseColorValue").innerHTML = "Fluorescent Pink";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#EC228F";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#EC228F";
	BackgroundCanvas28cm.style.backgroundColor = "#EC228F";
	BackgroundCanvas5cm.style.backgroundColor = "#EC228F";
}

function ApplyPurpleJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#5D2A77";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Purple";
    document.getElementById("BaseColorValue").innerHTML = "Purple";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#5D2A77";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#5D2A77";
	BackgroundCanvas28cm.style.backgroundColor = "#5D2A77";
	BackgroundCanvas5cm.style.backgroundColor = "#5D2A77";
}

function ApplySkyBlueJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#7C9FD3";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Sky Blue";
    document.getElementById("BaseColorValue").innerHTML = "Sky Blue";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#7C9FD3";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#7C9FD3";
	BackgroundCanvas28cm.style.backgroundColor = "#7C9FD3";
	BackgroundCanvas5cm.style.backgroundColor = "#7C9FD3";
}

function ApplyCarpiJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#0098CC";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Carpi";
    document.getElementById("BaseColorValue").innerHTML = "Carpi";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#0098CC";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#0098CC";
	BackgroundCanvas28cm.style.backgroundColor = "#0098CC";
	BackgroundCanvas5cm.style.backgroundColor = "#0098CC";
}

function ApplySeafoamGreenJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#9DD4B6";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Seafoam Green";
    document.getElementById("BaseColorValue").innerHTML = "Seafoam Green";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#9DD4B6";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#9DD4B6";
	BackgroundCanvas28cm.style.backgroundColor = "#9DD4B6";
	BackgroundCanvas5cm.style.backgroundColor = "#9DD4B6";
}

function ApplyTealJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#177269";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Teal";
    document.getElementById("BaseColorValue").innerHTML = "Teal";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#177269";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#177269";
	BackgroundCanvas28cm.style.backgroundColor = "#177269";
	BackgroundCanvas5cm.style.backgroundColor = "#177269";
}

function ApplyFluorescentGreenJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#69BC45";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Fluorescent Green";
    document.getElementById("BaseColorValue").innerHTML = "Fluorescent Green";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#69BC45";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#69BC45";
	BackgroundCanvas28cm.style.backgroundColor = "#69BC45";
	BackgroundCanvas5cm.style.backgroundColor = "#69BC45";
}

function ApplyKellyGreenJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#3A6D34";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Kelly Green";
    document.getElementById("BaseColorValue").innerHTML = "Kelly Green";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#3A6D34";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#3A6D34";
	BackgroundCanvas28cm.style.backgroundColor = "#3A6D34";
	BackgroundCanvas5cm.style.backgroundColor = "#3A6D34";
}

function ApplyForestGreenJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#1A2C17";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Forest Green";
    document.getElementById("BaseColorValue").innerHTML = "Forest Green";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#1A2C17";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#1A2C17";
	BackgroundCanvas28cm.style.backgroundColor = "#1A2C17";
	BackgroundCanvas5cm.style.backgroundColor = "#1A2C17";
}

function ApplyRoyalJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#283A88";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Royal";
    document.getElementById("BaseColorValue").innerHTML = "Royal";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#283A88";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#283A88";
	BackgroundCanvas28cm.style.backgroundColor = "#283A88";
	BackgroundCanvas5cm.style.backgroundColor = "#283A88";
}

function ApplyNavyJerseyBase() {
    SelectedColorJerseyBase.style.backgroundColor = "#1E3160";
    SelectedColorJerseyBase.style.backgroundImage = "none";
    SelectedColorJerseyBase.style.border = "0px solid #000000";
    document.getElementById("BaseJerseyNameColor").innerHTML = "Navy";
    document.getElementById("BaseColorValue").innerHTML = "Navy";
	BackgroundCanvasJersey7cm1.style.backgroundColor = "#1E3160";
	BackgroundCanvasJersey7cm2.style.backgroundColor = "#1E3160";
	BackgroundCanvas28cm.style.backgroundColor = "#1E3160";
	BackgroundCanvas5cm.style.backgroundColor = "#1E3160";
}




function ApplyBlackJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#000000";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Black";
    document.getElementById("Accent1ColorValue").innerHTML = "Black";
}

function ApplyWhiteJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#FFFFFF";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "1px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "White";
    document.getElementById("Accent1ColorValue").innerHTML = "White";
}

function ApplyGraphiteJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#676767";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Graphite";
    document.getElementById("Accent1ColorValue").innerHTML = "Graphite";
}

function ApplyGreyJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#C4C5C7";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Grey";
    document.getElementById("Accent1ColorValue").innerHTML = "Grey";
}

function ApplyMaroonJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#4F1719";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Maroon";
    document.getElementById("Accent1ColorValue").innerHTML = "Maroon";
}

function ApplyCardinalJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#5E070C";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Cardinal";
    document.getElementById("Accent1ColorValue").innerHTML = "Cardinal";
}

function ApplyBrownJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#5E3013";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Brown";
    document.getElementById("Accent1ColorValue").innerHTML = "Brown";
}

function ApplyBurntOrangeJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#C06628";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Burnt Orange";
    document.getElementById("Accent1ColorValue").innerHTML = "Burnt Orange";
}

function ApplyScarletJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#B72025";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Scarlet";
    document.getElementById("Accent1ColorValue").innerHTML = "Scarlet";
}

function ApplyDarkOrangeJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#DD6426";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Dark Orange";
    document.getElementById("Accent1ColorValue").innerHTML = "Dark Orange";
}

function ApplyFluorescentOrangeJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#F6923C";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Fluorescent Orange";
    document.getElementById("Accent1ColorValue").innerHTML = "Fluorescent Orange";
}

function ApplyGoldJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#ECAD1F";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Gold";
    document.getElementById("Accent1ColorValue").innerHTML = "Gold";
}

function ApplyTaxiJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#FFCC05";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Taxi";
    document.getElementById("Accent1ColorValue").innerHTML = "Taxi";
}

function ApplyVegasGoldJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#D5BC6C";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Vegas Gold";
    document.getElementById("Accent1ColorValue").innerHTML = "Vegas Gold";
}

function ApplyFluorescentYellowJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#DDE11D";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Fluorescent Yellow";
    document.getElementById("Accent1ColorValue").innerHTML = "Fluorescent Yellow";
}

function ApplyPinkJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#EEBCD6";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Pink";
    document.getElementById("Accent1ColorValue").innerHTML = "Pink";
}

function ApplyFluorescentPinkJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#EC228F";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Fluorescent Pink";
    document.getElementById("Accent1ColorValue").innerHTML = "Fluorescent Pink";
}

function ApplyPurpleJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#5D2A77";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Purple";
    document.getElementById("Accent1ColorValue").innerHTML = "Purple";
}

function ApplySkyBlueJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#7C9FD3";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Sky Blue";
    document.getElementById("Accent1ColorValue").innerHTML = "Sky Blue";
}

function ApplyCarpiJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#0098CC";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Carpi";
    document.getElementById("Accent1ColorValue").innerHTML = "Carpi";
}

function ApplySeafoamGreenJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#9DD4B6";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Seafoam Green";
    document.getElementById("Accent1ColorValue").innerHTML = "Seafoam Green";
}

function ApplyTealJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#177269";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Teal";
    document.getElementById("Accent1ColorValue").innerHTML = "Teal";
}

function ApplyFluorescentGreenJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#69BC45";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Fluorescent Green";
    document.getElementById("Accent1ColorValue").innerHTML = "Fluorescent Green";
}

function ApplyKellyGreenJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#3A6D34";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Kelly Green";
    document.getElementById("Accent1ColorValue").innerHTML = "Kelly Green";
}

function ApplyForestGreenJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#1A2C17";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Forest Green";
    document.getElementById("Accent1ColorValue").innerHTML = "Forest Green";
}

function ApplyRoyalJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#283A88";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Royal";
    document.getElementById("Accent1ColorValue").innerHTML = "Royal";
}

function ApplyNavyJerseyAccent1() {
    SelectedColorJerseyAccent1.style.backgroundColor = "#1E3160";
    SelectedColorJerseyAccent1.style.backgroundImage = "none";
    SelectedColorJerseyAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1JerseyNameColor").innerHTML = "Navy";
    document.getElementById("Accent1ColorValue").innerHTML = "Navy";
}





function ApplyBlackJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#000000";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Black";
    document.getElementById("Accent2ColorValue").innerHTML = "Black";
}

function ApplyWhiteJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#FFFFFF";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "1px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "White";
    document.getElementById("Accent2ColorValue").innerHTML = "White";
}

function ApplyGraphiteJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#676767";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Graphite";
    document.getElementById("Accent2ColorValue").innerHTML = "Graphite";
}

function ApplyGreyJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#C4C5C7";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Grey";
    document.getElementById("Accent2ColorValue").innerHTML = "Grey";
}

function ApplyMaroonJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#4F1719";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Maroon";
    document.getElementById("Accent2ColorValue").innerHTML = "Maroon";
}

function ApplyCardinalJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#5E070C";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Cardinal";
    document.getElementById("Accent2ColorValue").innerHTML = "Cardinal";
}

function ApplyBrownJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#5E3013";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Brown";
    document.getElementById("Accent2ColorValue").innerHTML = "Brown";
}

function ApplyBurntOrangeJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#C06628";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Burnt Orange";
    document.getElementById("Accent2ColorValue").innerHTML = "Burnt Orange";
}

function ApplyScarletJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#B72025";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Scarlet";
    document.getElementById("Accent2ColorValue").innerHTML = "Scarlet";
}

function ApplyDarkOrangeJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#DD6426";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Dark Orange";
    document.getElementById("Accent2ColorValue").innerHTML = "Dark Orange";
}

function ApplyFluorescentOrangeJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#F6923C";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Fluorescent Orange";
    document.getElementById("Accent2ColorValue").innerHTML = "Fluorescent Orange";
}

function ApplyGoldJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#ECAD1F";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Gold";
    document.getElementById("Accent2ColorValue").innerHTML = "Gold";
}

function ApplyTaxiJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#FFCC05";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Taxi";
    document.getElementById("Accent2ColorValue").innerHTML = "Taxi";
}

function ApplyVegasGoldJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#D5BC6C";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Vegas Gold";
    document.getElementById("Accent2ColorValue").innerHTML = "Vegas Gold";
}

function ApplyFluorescentYellowJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#DDE11D";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Fluorescent Yellow";
    document.getElementById("Accent2ColorValue").innerHTML = "Fluorescent Yellow";
}

function ApplyPinkJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#EEBCD6";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Pink";
    document.getElementById("Accent2ColorValue").innerHTML = "Pink";
}

function ApplyFluorescentPinkJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#EC228F";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Fluorescent Pink";
    document.getElementById("Accent2ColorValue").innerHTML = "Fluorescent Pink";
}

function ApplyPurpleJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#5D2A77";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Purple";
    document.getElementById("Accent2ColorValue").innerHTML = "Purple";
}

function ApplySkyBlueJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#7C9FD3";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Sky Blue";
    document.getElementById("Accent2ColorValue").innerHTML = "Sky Blue";
}

function ApplyCarpiJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#0098CC";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Carpi";
    document.getElementById("Accent2ColorValue").innerHTML = "Carpi";
}

function ApplySeafoamGreenJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#9DD4B6";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Seafoam Green";
    document.getElementById("Accent2ColorValue").innerHTML = "Seafoam Green";
}

function ApplyTealJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#177269";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Teal";
    document.getElementById("Accent2ColorValue").innerHTML = "Teal";
}

function ApplyFluorescentGreenJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#69BC45";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Fluorescent Green";
    document.getElementById("Accent2ColorValue").innerHTML = "Fluorescent Green";
}

function ApplyKellyGreenJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#3A6D34";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Kelly Green";
    document.getElementById("Accent2ColorValue").innerHTML = "Kelly Green";
}

function ApplyForestGreenJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#1A2C17";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Forest Green";
    document.getElementById("Accent2ColorValue").innerHTML = "Forest Green";
}

function ApplyRoyalJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#283A88";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Royal";
    document.getElementById("Accent2ColorValue").innerHTML = "Royal";
}

function ApplyNavyJerseyAccent2() {
    SelectedColorJerseyAccent2.style.backgroundColor = "#1E3160";
    SelectedColorJerseyAccent2.style.backgroundImage = "none";
    SelectedColorJerseyAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2JerseyNameColor").innerHTML = "Navy";
    document.getElementById("Accent2ColorValue").innerHTML = "Navy";
}






function ApplyBlackShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#000000";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Black";
    document.getElementById("BaseColorShortsValue").innerHTML = "Black";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#000000";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#000000";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#000000";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#000000";
}

function ApplyWhiteShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#FFFFFF";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "1px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "White";
    document.getElementById("BaseColorShortsValue").innerHTML = "White";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#FFFFFF";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#FFFFFF";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#FFFFFF";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#FFFFFF";
}

function ApplyGraphiteShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#676767";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Graphite";
    document.getElementById("BaseColorShortsValue").innerHTML = "Graphite";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#676767";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#676767";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#676767";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#676767";
}

function ApplyGreyShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#C4C5C7";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Grey";
    document.getElementById("BaseColorShortsValue").innerHTML = "Grey";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#C4C5C7";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#C4C5C7";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#C4C5C7";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#C4C5C7";
}

function ApplyMaroonShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#4F1719";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Maroon";
    document.getElementById("BaseColorShortsValue").innerHTML = "Maroon";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#4F1719";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#4F1719";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#4F1719";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#4F1719";
}

function ApplyCardinalShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#5E070C";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Cardinal";
    document.getElementById("BaseColorShortsValue").innerHTML = "Cardinal";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#5E070C";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#5E070C";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#5E070C";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#5E070C";
}

function ApplyBrownShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#5E3013";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Brown";
    document.getElementById("BaseColorShortsValue").innerHTML = "Brown";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#5E3013";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#5E3013";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#5E3013";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#5E3013";
}

function ApplyBurntOrangeShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#C06628";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Burnt Orange";
    document.getElementById("BaseColorShortsValue").innerHTML = "Burnt Orange";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#C06628";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#C06628";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#C06628";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#C06628";
}

function ApplyScarletShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#B72025";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Scarlet";
    document.getElementById("BaseColorShortsValue").innerHTML = "Scarlet";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#B72025";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#B72025";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#B72025";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#B72025";
}

function ApplyDarkOrangeShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#DD6426";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Dark Orange";
    document.getElementById("BaseColorShortsValue").innerHTML = "Dark Orange";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#DD6426";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#DD6426";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#DD6426";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#DD6426";
}

function ApplyFluorescentOrangeShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#F6923C";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Fluorescent Orange";
    document.getElementById("BaseColorShortsValue").innerHTML = "Fluorescent Orange";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#F6923C";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#F6923C";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#F6923C";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#F6923C";
}

function ApplyGoldShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#ECAD1F";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Gold";
    document.getElementById("BaseColorShortsValue").innerHTML = "Gold";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#ECAD1F";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#ECAD1F";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#ECAD1F";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#ECAD1F";
}

function ApplyTaxiShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#FFCC05";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Taxi";
    document.getElementById("BaseColorShortsValue").innerHTML = "Taxi";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#FFCC05";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#FFCC05";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#FFCC05";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#FFCC05";
}

function ApplyVegasGoldShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#D5BC6C";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Vegas Gold";
    document.getElementById("BaseColorShortsValue").innerHTML = "Vegas Gold";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#D5BC6C";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#D5BC6C";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#D5BC6C";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#D5BC6C";
}

function ApplyFluorescentYellowShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#DDE11D";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Fluorescent Yellow";
    document.getElementById("BaseColorShortsValue").innerHTML = "Fluorescent Yellow";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#DDE11D";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#DDE11D";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#DDE11D";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#DDE11D";
}

function ApplyPinkShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#EEBCD6";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Pink";
    document.getElementById("BaseColorShortsValue").innerHTML = "Pink";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#EEBCD6";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#EEBCD6";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#EEBCD6";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#EEBCD6";
}

function ApplyFluorescentPinkShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#EC228F";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Fluorescent Pink";
    document.getElementById("BaseColorShortsValue").innerHTML = "Fluorescent Pink";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#EC228F";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#EC228F";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#EC228F";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#EC228F";
}

function ApplyPurpleShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#5D2A77";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Purple";
    document.getElementById("BaseColorShortsValue").innerHTML = "Purple";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#5D2A77";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#5D2A77";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#5D2A77";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#5D2A77";
}

function ApplySkyBlueShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#7C9FD3";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Sky Blue";
    document.getElementById("BaseColorShortsValue").innerHTML = "Sky Blue";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#7C9FD3";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#7C9FD3";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#7C9FD3";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#7C9FD3";
}

function ApplyCarpiShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#0098CC";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Carpi";
    document.getElementById("BaseColorShortsValue").innerHTML = "Carpi";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#0098CC";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#0098CC";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#0098CC";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#0098CC";
}

function ApplySeafoamGreenShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#9DD4B6";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Seafoam Green";
    document.getElementById("BaseColorShortsValue").innerHTML = "Seafoam Green";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#9DD4B6";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#9DD4B6";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#9DD4B6";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#9DD4B6";
}

function ApplyTealShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#177269";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Teal";
    document.getElementById("BaseColorShortsValue").innerHTML = "Teal";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#177269";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#177269";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#177269";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#177269";
}

function ApplyFluorescentGreenShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#69BC45";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Fluorescent Green";
    document.getElementById("BaseColorShortsValue").innerHTML = "Fluorescent Green";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#69BC45";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#69BC45";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#69BC45";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#69BC45";
}

function ApplyKellyGreenShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#3A6D34";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Kelly Green";
    document.getElementById("BaseColorShortsValue").innerHTML = "Kelly Green";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#3A6D34";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#3A6D34";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#3A6D34";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#3A6D34";
}

function ApplyForestGreenShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#1A2C17";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Forest Green";
    document.getElementById("BaseColorShortsValue").innerHTML = "Forest Green";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#1A2C17";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#1A2C17";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#1A2C17";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#1A2C17";
}

function ApplyRoyalShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#283A88";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Royal";
    document.getElementById("BaseColorShortsValue").innerHTML = "Royal";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#283A88";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#283A88";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#283A88";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#283A88";
}

function ApplyNavyShortsBase() {
    SelectedColorShortsBase.style.backgroundColor = "#1E3160";
    SelectedColorShortsBase.style.backgroundImage = "none";
    SelectedColorShortsBase.style.border = "0px solid #000000";
    document.getElementById("BaseShortsNameColor").innerHTML = "Navy";
    document.getElementById("BaseColorShortsValue").innerHTML = "Navy";
	BackgroundCanvasShorts7cm1.style.backgroundColor = "#1E3160";
	BackgroundCanvasShorts7cm2.style.backgroundColor = "#1E3160";
	BackgroundCanvasShorts7cm3.style.backgroundColor = "#1E3160";
	BackgroundCanvasShorts7cm4.style.backgroundColor = "#1E3160";
}




function ApplyBlackShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#000000";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Black";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Black";
}

function ApplyWhiteShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#FFFFFF";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "1px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "White";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "White";
}

function ApplyGraphiteShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#676767";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Graphite";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Graphite";
}

function ApplyGreyShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#C4C5C7";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Grey";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Grey";
}

function ApplyMaroonShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#4F1719";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Maroon";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Maroon";
}

function ApplyCardinalShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#5E070C";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Cardinal";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Cardinal";
}

function ApplyBrownShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#5E3013";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Brown";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Brown";
}

function ApplyBurntOrangeShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#C06628";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Burnt Orange";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Burnt Orange";
}

function ApplyScarletShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#B72025";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Scarlet";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Scarlet";
}

function ApplyDarkOrangeShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#DD6426";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Dark Orange";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Dark Orange";
}

function ApplyFluorescentOrangeShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#F6923C";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Fluorescent Orange";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Fluorescent Orange";
}

function ApplyGoldShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#ECAD1F";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Gold";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Gold";
}

function ApplyTaxiShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#FFCC05";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Taxi";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Taxi";
}

function ApplyVegasGoldShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#D5BC6C";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Vegas Gold";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Vegas Gold";
}

function ApplyFluorescentYellowShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#DDE11D";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Fluorescent Yellow";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Fluorescent Yellow";
}

function ApplyPinkShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#EEBCD6";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Pink";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Pink";
}

function ApplyFluorescentPinkShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#EC228F";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Fluorescent Pink";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Fluorescent Pink";
}

function ApplyPurpleShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#5D2A77";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Purple";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Purple";
}

function ApplySkyBlueShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#7C9FD3";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Sky Blue";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Sky Blue";
}

function ApplyCarpiShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#0098CC";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Carpi";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Carpi";
}

function ApplySeafoamGreenShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#9DD4B6";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Seafoam Green";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Seafoam Green";
}

function ApplyTealShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#177269";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Teal";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Teal";
}

function ApplyFluorescentGreenShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#69BC45";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Fluorescent Green";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Fluorescent Green";
}

function ApplyKellyGreenShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#3A6D34";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Kelly Green";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Kelly Green";
}

function ApplyForestGreenShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#1A2C17";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Forest Green";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Forest Green";
}

function ApplyRoyalShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#283A88";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Royal";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Royal";
}

function ApplyNavyShortsAccent1() {
    SelectedColorShortsAccent1.style.backgroundColor = "#1E3160";
    SelectedColorShortsAccent1.style.backgroundImage = "none";
    SelectedColorShortsAccent1.style.border = "0px solid #000000";
    document.getElementById("Accent1ShortsNameColor").innerHTML = "Navy";
    document.getElementById("Accent1ColorShortsValue").innerHTML = "Navy";
}





function ApplyBlackShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#000000";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Black";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Black";
}

function ApplyWhiteShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#FFFFFF";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "1px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "White";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "White";
}

function ApplyGraphiteShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#676767";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Graphite";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Graphite";
}

function ApplyGreyShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#C4C5C7";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Grey";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Grey";
}

function ApplyMaroonShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#4F1719";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Maroon";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Maroon";
}

function ApplyCardinalShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#5E070C";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Cardinal";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Cardinal";
}

function ApplyBrownShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#5E3013";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Brown";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Brown";
}

function ApplyBurntOrangeShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#C06628";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Burnt Orange";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Burnt Orange";
}

function ApplyScarletShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#B72025";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Scarlet";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Scarlet";
}

function ApplyDarkOrangeShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#DD6426";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Dark Orange";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Dark Orange";
}

function ApplyFluorescentOrangeShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#F6923C";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Fluorescent Orange";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Fluorescent Orange";
}

function ApplyGoldShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#ECAD1F";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Gold";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Gold";
}

function ApplyTaxiShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#FFCC05";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Taxi";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Taxi";
}

function ApplyVegasGoldShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#D5BC6C";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Vegas Gold";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Vegas Gold";
}

function ApplyFluorescentYellowShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#DDE11D";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Fluorescent Yellow";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Fluorescent Yellow";
}

function ApplyPinkShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#EEBCD6";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Pink";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Pink";
}

function ApplyFluorescentPinkShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#EC228F";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Fluorescent Pink";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Fluorescent Pink";
}

function ApplyPurpleShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#5D2A77";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Purple";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Purple";
}

function ApplySkyBlueShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#7C9FD3";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Sky Blue";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Sky Blue";
}

function ApplyCarpiShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#0098CC";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Carpi";
}    document.getElementById("Accent2ShortsColorValue").innerHTML = "Carpi";


function ApplySeafoamGreenShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#9DD4B6";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Seafoam Green";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Seafoam Green";
}

function ApplyTealShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#177269";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Teal";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Teal";
}

function ApplyFluorescentGreenShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#69BC45";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Fluorescent Green";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Fluorescent Green";
}

function ApplyKellyGreenShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#3A6D34";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Kelly Green";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Kelly Green";
}

function ApplyForestGreenShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#1A2C17";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Forest Green";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Forest Green";
}

function ApplyRoyalShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#283A88";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Royal";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Royal";
}

function ApplyNavyShortsAccent2() {
    SelectedColorShortsAccent2.style.backgroundColor = "#1E3160";
    SelectedColorShortsAccent2.style.backgroundImage = "none";
    SelectedColorShortsAccent2.style.border = "0px solid #000000";
    document.getElementById("Accent2ShortsNameColor").innerHTML = "Navy";
    document.getElementById("Accent2ShortsColorValue").innerHTML = "Navy";
}




let JerseyTextStatus = 0;

function openJerseyText() {
    if (JerseyTextStatus == 0) {

        FrontObjectMenu.style.display = "flex";
        BackObjectMenu.style.display = "flex";
        expandJerseyText.style.transform = "rotate(45deg)";
        expandJerseyText.style.left = "0.1em";
        JerseyTextStatus = 1; }

    else if (JerseyTextStatus == 1) {

        FrontObjectMenu.style.display = "none";
        BackObjectMenu.style.display = "none";
        FrontTextMenu.style.display = "none";
        BackTextMenu.style.display = "none";
        expandJerseyText.style.transform = "rotate(0deg)";
        expandJerseyText.style.left = "0em";
        expandJerseyTextFront.style.transform = "rotate(0deg)";
        expandJerseyTextFront.style.left = "0em";
        expandJerseyTextBack.style.transform = "rotate(0deg)";
        expandJerseyTextBack.style.left = "0em";
        JerseyTextStatus = 0; }

}


let openJerseyTextFrontStatus = 0;

function openJerseyTextFront() {
    if (openJerseyTextFrontStatus == 0) {

        FrontTextMenu.style.display = "flex";
        expandJerseyTextFront.style.transform = "rotate(45deg)";
        expandJerseyTextFront.style.left = "0.1em";
        expandJerseyTextFront.style.top = "0.67em";
        openJerseyTextFrontStatus = 1; }

    else if (openJerseyTextFrontStatus == 1) {

        FrontTextMenu.style.display = "none";
        document.getElementById("expandJerseyTextFront").innerHTML = "+";
        expandJerseyTextFront.style.transform = "rotate(0deg)";
        expandJerseyTextFront.style.left = "0em";
        expandJerseyTextFront.style.top = "0.65em";
        openJerseyTextFrontStatus = 0; }

}


let openJerseyTextBackStatus = 0;

function openJerseyTextBack() {
    if (openJerseyTextBackStatus == 0) {

        BackTextMenu.style.display = "flex";
        expandJerseyTextBack.style.transform = "rotate(45deg)";
        expandJerseyTextBack.style.left = "0.1em";
        expandJerseyTextBack.style.top = "0.67em";
        
        openJerseyTextBackStatus = 1; }

    else if (openJerseyTextBackStatus == 1) {

        BackTextMenu.style.display = "none";
        document.getElementById("expandJerseyTextBack").innerHTML = "+";
        expandJerseyTextBack.style.transform = "rotate(0deg)";
        expandJerseyTextBack.style.left = "0em";
        expandJerseyTextBack.style.top = "0.65em";
    
        openJerseyTextBackStatus = 0; }

}


let JerseyTextColorsStatus = 0;

function openJerseyTextColors() {
    if (JerseyTextColorsStatus == 0) {

        ColorJerseyText.style.display = "block";
        CrossIconColorsJerseyText.style.transform = "rotate(45deg)"; 
        JerseyTextColorsStatus = 1; }

    else if (JerseyTextColorsStatus == 1) {

        ColorJerseyText.style.display = "none";
        CrossIconColorsJerseyText.style.transform = "rotate(90deg)"; 
        JerseyTextColorsStatus = 0; }

}


function ApplyBlackJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#000000";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Black";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Black";
}

function ApplyWhiteJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#FFFFFF";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "1px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "White";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "White";
}

function ApplyGraphiteJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#676767";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Graphite";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Graphite";
}

function ApplyGreyJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#C4C5C7";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Grey";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Grey";
}

function ApplyMaroonJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#4F1719";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Maroon";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Maroon";
}

function ApplyCardinalJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#5E070C";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Cardinal";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Cardinal";
}

function ApplyBrownJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#5E3013";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Brown";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Brown";
}

function ApplyBurntOrangeJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#C06628";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Burnt Orange";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Burnt Orange";
}

function ApplyScarletJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#B72025";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Scarlet";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Scarlet";
}

function ApplyDarkOrangeJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#DD6426";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Dark Orange";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Dark Orange";
}

function ApplyFluorescentOrangeJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#F6923C";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Fluorescent Orange";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Fluorescent Orange";
}

function ApplyGoldJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#ECAD1F";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Gold";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Gold";
}

function ApplyTaxiJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#FFCC05";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Taxi";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Taxi";
}

function ApplyVegasGoldJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#D5BC6C";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Vegas Gold";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Vegas Gold";
}

function ApplyFluorescentYellowJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#DDE11D";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Fluorescent Yellow";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Fluorescent Yellow";
}

function ApplyPinkJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#EEBCD6";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Pink";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Pink";
}

function ApplyFluorescentPinkJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#EC228F";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Fluorescent Pink";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Fluorescent Pink";
}

function ApplyPurpleJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#5D2A77";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Purple";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Purple";
}

function ApplySkyBlueJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#7C9FD3";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Sky Blue";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Sky Blue";
}

function ApplyCarpiJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#0098CC";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Carpi";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Carpi";
}    


function ApplySeafoamGreenJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#9DD4B6";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Seafoam Green";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Seafoam Green";
}

function ApplyTealJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#177269";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Teal";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Teal";
}

function ApplyFluorescentGreenJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#69BC45";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Fluorescent Green";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Fluorescent Green";
}

function ApplyKellyGreenJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#3A6D34";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Kelly Green";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Kelly Green";
}

function ApplyForestGreenJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#1A2C17";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Forest Green";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Forest Green";
}

function ApplyRoyalJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#283A88";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Royal";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Royal";
}

function ApplyNavyJerseyText() {
    SelectedColorJerseyText.style.backgroundColor = "#1E3160";
    SelectedColorJerseyText.style.backgroundImage = "none";
    SelectedColorJerseyText.style.border = "0px solid #000000";
    document.getElementById("TextJerseyNameColor").innerHTML = "Navy";
    document.getElementById("MainColorFrontJerseyValue").innerHTML = "Navy";
}



let JerseyTextOutlineColorsStatus = 0;

function openJerseyTextOutlineColors() {
    if (JerseyTextOutlineColorsStatus == 0) {

        ColorJerseyTextOutline.style.display = "block";
        CrossIconColorsJerseyTextOutline.style.transform = "rotate(45deg)"; 
        JerseyTextOutlineColorsStatus = 1; }

    else if (JerseyTextOutlineColorsStatus == 1) {

        ColorJerseyTextOutline.style.display = "none";
        CrossIconColorsJerseyTextOutline.style.transform = "rotate(90deg)"; 
        JerseyTextOutlineColorsStatus = 0; }

}


function ApplyBlackJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#000000";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Black";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Black";
}

function ApplyWhiteJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#FFFFFF";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "1px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "White";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "White";
}

function ApplyGraphiteJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#676767";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Graphite";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Graphite";
}

function ApplyGreyJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#C4C5C7";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Grey";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Grey";
}

function ApplyMaroonJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#4F1719";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Maroon";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Maroon";
}

function ApplyCardinalJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#5E070C";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Cardinal";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Cardinal";
}

function ApplyBrownJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#5E3013";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Brown";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Brown";
}

function ApplyBurntOrangeJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#C06628";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Burnt Orange";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Burnt Orange";
}

function ApplyScarletJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#B72025";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Scarlet";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Scarlet";
}

function ApplyDarkOrangeJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#DD6426";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Dark Orange";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Dark Orange";
}

function ApplyFluorescentOrangeJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#F6923C";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Fluorescent Orange";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Fluorescent Orange";
}

function ApplyGoldJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#ECAD1F";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Gold";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Gold";
}

function ApplyTaxiJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#FFCC05";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Taxi";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Taxi";
}

function ApplyVegasGoldJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#D5BC6C";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Vegas Gold";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Vegas Gold";
}

function ApplyFluorescentYellowJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#DDE11D";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Fluorescent Yellow";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Fluorescent Yellow";
}

function ApplyPinkJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#EEBCD6";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Pink";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Pink";
}   

function ApplyFluorescentPinkJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#EC228F";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Fluorescent Pink";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Fluorescent Pink";
}

function ApplyPurpleJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#5D2A77";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Purple";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Purple";
}

function ApplySkyBlueJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#7C9FD3";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Sky Blue";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Sky Blue";
}

function ApplyCarpiJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#0098CC";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Carpi";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Carpi";
}

function ApplySeafoamGreenJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#9DD4B6";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Seafoam Green";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Seafoam Green";
}

function ApplyTealJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#177269";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Teal";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Teal";
}    


function ApplyFluorescentGreenJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#69BC45";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Fluorescent Green";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Fluorescent Green";
}

function ApplyKellyGreenJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#3A6D34";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Kelly Green";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Kelly Green";
}   


function ApplyForestGreenJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#1A2C17";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Forest Green";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Forest Green";
}

function ApplyRoyalJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#283A88";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Royal";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Royal";
}

function ApplyNavyJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundColor = "#1E3160";
    SelectedColorJerseyTextOutline.style.backgroundImage = "none";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "Navy";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "Navy";
}

function ApplyNoneJerseyTextOutline() {
    SelectedColorJerseyTextOutline.style.backgroundImage = "url('icons/TransparentGrid.png')";
    SelectedColorJerseyTextOutline.style.border = "0px solid #000000";
    document.getElementById("TextOutlineJerseyNameColor").innerHTML = "None";
    document.getElementById("OutlineColorFrontJerseyValue").innerHTML = "None";
}




let JerseyNumberColorsStatus = 0;

function openJerseyNumberColors() {
    if (JerseyNumberColorsStatus == 0) {

        ColorJerseyNumber.style.display = "block";
        CrossIconColorsJerseyNumber.style.transform = "rotate(45deg)"; 
        JerseyNumberColorsStatus = 1; }

    else if (JerseyNumberColorsStatus == 1) {

        ColorJerseyNumber.style.display = "none";
        CrossIconColorsJerseyNumber.style.transform = "rotate(90deg)"; 
        JerseyNumberColorsStatus = 0; }

}


function ApplyBlackJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#000000";
    SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Black";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Black";
}

function ApplyWhiteJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#FFFFFF";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "1px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "White";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "White";
}

function ApplyGraphiteJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#676767";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Graphite";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Graphite";
}

function ApplyGreyJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#C4C5C7";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Grey";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Grey";
}    

function ApplyMaroonJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#4F1719";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Maroon";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Maroon";
}

function ApplyCardinalJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#5E070C";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Cardinal";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Cardinal";
}

function ApplyBrownJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#5E3013";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Brown";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Brown";
}

function ApplyBurntOrangeJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#C06628";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Burnt Orange";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Burnt Orange";
}

function ApplyScarletJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#B72025";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Scarlet";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Scarlet";
}

function ApplyDarkOrangeJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#DD6426";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Dark Orange";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Dark Orange";
}

function ApplyFluorescentOrangeJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#F6923C";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Fluorescent Orange";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Fluorescent Orange";
}

function ApplyGoldJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#ECAD1F";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Gold";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Gold";
}

function ApplyTaxiJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#FFCC05";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Taxi";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Taxi";
}

function ApplyVegasGoldJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#D5BC6C";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Vegas Gold";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Vegas Gold";
}

function ApplyFluorescentYellowJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#DDE11D";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Fluorescent Yellow";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Fluorescent Yellow";
}

function ApplyPinkJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#EEBCD6";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Pink";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Pink";
}

function ApplyFluorescentPinkJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#EC228F";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Fluorescent Pink";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Fluorescent Pink";
}

function ApplyPurpleJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#5D2A77";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Purple";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Purple";
}

function ApplySkyBlueJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#7C9FD3";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Sky Blue";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Sky Blue";
}

function ApplyCarpiJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#0098CC";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Carpi";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Carpi";
}

function ApplySeafoamGreenJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#9DD4B6";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Seafoam Green";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Seafoam Green";
}

function ApplyTealJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#177269";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Teal";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Teal";
}

function ApplyFluorescentGreenJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#69BC45";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Fluorescent Green";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Fluorescent Green";
}

function ApplyKellyGreenJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#3A6D34";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Kelly Green";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Kelly Green";
}

function ApplyForestGreenJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#1A2C17";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Forest Green";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Forest Green";
}

function ApplyRoyalJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#283A88";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Royal";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Royal";
}

function ApplyNavyJerseyNumber() {
    SelectedColorJerseyNumber.style.backgroundColor = "#1E3160";
      SelectedColorJerseyNumber.style.backgroundImage = "none";
    SelectedColorJerseyNumber.style.border = "0px solid #000000";
    document.getElementById("NumberJerseyNameColor").innerHTML = "Navy";
    document.getElementById("NumberMainColorFrontJerseyValue").innerHTML = "Navy";
}



let JerseyNumberOutlineColorsStatus = 0;

function openJerseyNumberOutlineColors() {
    if (JerseyNumberOutlineColorsStatus == 0) {

        ColorJerseyNumberOutline.style.display = "block";
        CrossIconColorsJerseyNumberOutline.style.transform = "rotate(45deg)"; 
        JerseyNumberOutlineColorsStatus = 1; }

    else if (JerseyNumberOutlineColorsStatus == 1) {

        ColorJerseyNumberOutline.style.display = "none";
        CrossIconColorsJerseyNumberOutline.style.transform = "rotate(90deg)"; 
        JerseyNumberOutlineColorsStatus = 0; }

}


function ApplyBlackJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#000000";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Black";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Black";
}

function ApplyWhiteJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#FFFFFF";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "1px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "White";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "White";
}

function ApplyGraphiteJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#676767";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Graphite";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Graphite";
}

function ApplyGreyJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#C4C5C7";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Grey";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Grey";
}

function ApplyMaroonJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#4F1719";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Maroon";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Maroon";
}

function ApplyCardinalJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#5E070C";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Cardinal";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Cardinal";
}

function ApplyBrownJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#5E3013";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Brown";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Brown";
}

function ApplyBurntOrangeJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#C06628";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Burnt Orange";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Burnt Orange";
}

function ApplyScarletJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#B72025";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Scarlet";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Scarlet";
}

function ApplyDarkOrangeJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#DD6426";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Dark Orange";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Dark Orange";
}

function ApplyFluorescentOrangeJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#F6923C";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Fluorescent Orange";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Fluorescent Orange";
}

function ApplyGoldJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#ECAD1F";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Gold";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Gold";
}

function ApplyTaxiJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#FFCC05";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Taxi";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Taxi";
}

function ApplyVegasGoldJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#D5BC6C";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Vegas Gold";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Vegas Gold";
}

function ApplyFluorescentYellowJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#DDE11D";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Fluorescent Yellow";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Fluorescent Yellow";
}

function ApplyPinkJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#EEBCD6";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Pink";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Pink";
}

function ApplyFluorescentPinkJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#EC228F";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Fluorescent Pink";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Fluorescent Pink";
}

function ApplyPurpleJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#5D2A77";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Purple";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Purple";
}

function ApplySkyBlueJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#7C9FD3";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Sky Blue";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Sky Blue";
}

function ApplyCarpiJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#0098CC";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Carpi";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Carpi";
}

function ApplySeafoamGreenJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#9DD4B6";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Seafoam Green";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Seafoam Green";
}

function ApplyTealJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#177269";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Teal";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Teal";
}

function ApplyFluorescentGreenJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#69BC45";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Fluorescent Green";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Fluorescent Green";
}

function ApplyKellyGreenJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#3A6D34";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Kelly Green";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Kelly Green";
}

function ApplyForestGreenJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#1A2C17";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Forest Green";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Forest Green";
}

function ApplyRoyalJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#283A88";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Royal";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Royal";
}

function ApplyNavyJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundColor = "#1E3160";
    SelectedColorJerseyNumberOutline.style.backgroundImage = "none";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "Navy";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "Navy";    
}

function ApplyNoneJerseyNumberOutline() {
    SelectedColorJerseyNumberOutline.style.backgroundImage = "url('icons/TransparentGrid.png')";
    SelectedColorJerseyNumberOutline.style.border = "0px solid #000000";
    document.getElementById("NumberOutlineJerseyNameColor").innerHTML = "None";
    document.getElementById("NumberOutlineColorFrontJerseyValue").innerHTML = "None";    
}

let LayOutStatus = 1;
function ChooseFrontLayOutType1() {

    TypeLayOut1.style.border = " 0.2em solid";
    TypeLayOut2.style.border = " 0.0em solid";
    TypeLayOut3.style.border = " 0.0em solid";
    TypeLayOut4.style.border = " 0.0em solid";
    document.getElementById("LayoutFrontJerseyValue").src="icons/Type1.png";
    Line2TeamNameField.style.display = "none";
    ApplyLine2TeamName.style.display = "none";
    Line2FrontJerseySummaryBlock.style.display = "none";
    LayOutStatus = 1;
    FontListRollCurved1.style.display = "none";
    FontListRollCurved2.style.display = "none";
    FontListRoll.style.display = "none";
    CrossIconFontJerseyText.style.transform = "rotate(90deg)";
}
function ChooseFrontLayOutType2() {

    TypeLayOut2.style.border = " 0.2em solid";
    TypeLayOut1.style.border = " 0.0em solid";
    TypeLayOut3.style.border = " 0.0em solid";
    TypeLayOut4.style.border = " 0.0em solid";
    document.getElementById("LayoutFrontJerseyValue").src="icons/Type2.png";
    Line2TeamNameField.style.display = "flex";
    ApplyLine2TeamName.style.display = "flex";
    Line2FrontJerseySummaryBlock.style.display = "flex";
    LayOutStatus = 1;
    FontListRollCurved1.style.display = "none";
    FontListRollCurved2.style.display = "none";
    FontListRoll.style.display = "none";
    CrossIconFontJerseyText.style.transform = "rotate(90deg)";
}
function ChooseFrontLayOutType3() {

    TypeLayOut3.style.border = " 0.2em solid";
    TypeLayOut2.style.border = " 0.0em solid";
    TypeLayOut1.style.border = " 0.0em solid";
    TypeLayOut4.style.border = " 0.0em solid";
    document.getElementById("LayoutFrontJerseyValue").src="icons/Type3.png";
    Line2TeamNameField.style.display = "flex";
    ApplyLine2TeamName.style.display = "flex";
    Line2FrontJerseySummaryBlock.style.display = "flex";
    LayOutStatus = 3;
    FontListRollCurved1.style.display = "none";
    FontListRollCurved2.style.display = "none";
    FontListRoll.style.display = "none";
    CrossIconFontJerseyText.style.transform = "rotate(90deg)";
}
function ChooseFrontLayOutType4() {

    TypeLayOut4.style.border = "0.2em solid";
    TypeLayOut2.style.border = "0.0em solid";
    TypeLayOut3.style.border = "0.0em solid";
    TypeLayOut1.style.border = "0.0em solid";
    document.getElementById("LayoutFrontJerseyValue").src="icons/Type4.png";
    Line2TeamNameField.style.display = "none";
    ApplyLine2TeamName.style.display = "none";
    Line2FrontJerseySummaryBlock.style.display = "none";
    LayOutStatus = 2;
    FontListRollCurved1.style.display = "none";
    FontListRollCurved2.style.display = "none";
    FontListRoll.style.display = "none";
    CrossIconFontJerseyText.style.transform = "rotate(90deg)";
}


function ChooseBackLayOutType1() {

    TypeLayOut1Back.style.border = "0.2em solid #000000";
    TypeLayOut2Back.style.border = "0.0em solid";
    TypeLayOut3Back.style.border = "0.0em solid";
    TypeLayOut4Back.style.border = "0.0em solid";
    TypeLayOut5Back.style.border = "0.0em solid";
    document.getElementById("LayoutBackJerseyValue").src="icons/Type1.png";
}
function ChooseBackLayOutType2() {

    TypeLayOut2Back.style.border = "0.2em solid #000000";
    TypeLayOut1Back.style.border = "0.0em solid";
    TypeLayOut3Back.style.border = "0.0em solid";
    TypeLayOut4Back.style.border = "0.0em solid";
    TypeLayOut5Back.style.border = "0.0em solid";
    document.getElementById("LayoutBackJerseyValue").src="icons/Type2.png";
}
function ChooseBackLayOutType3() {

    TypeLayOut3Back.style.border = " 0.2em solid";
    TypeLayOut2Back.style.border = " 0.0em solid";
    TypeLayOut1Back.style.border = " 0.0em solid";
    TypeLayOut4Back.style.border = " 0.0em solid";
    TypeLayOut5Back.style.border = " 0.0em solid";
    document.getElementById("LayoutBackJerseyValue").src="icons/Type3.png";
}
function ChooseBackLayOutType4() {

    TypeLayOut4Back.style.border = " 0.2em solid";

    TypeLayOut2Back.style.border = " 0.0em solid";
    TypeLayOut3Back.style.border = " 0.0em solid";
    TypeLayOut1Back.style.border = " 0.0em solid";
    TypeLayOut5Back.style.border = " 0.0em solid";
    document.getElementById("LayoutBackJerseyValue").src="icons/Type4.png";
}
function ChooseBackLayOutType5() {

    TypeLayOut5Back.style.border = " 0.2em solid";

    TypeLayOut2Back.style.border = " 0.0em solid";
    TypeLayOut3Back.style.border = " 0.0em solid";
    TypeLayOut1Back.style.border = " 0.0em solid";
    TypeLayOut4Back.style.border = " 0.0em solid";
    document.getElementById("LayoutBackJerseyValue").src="icons/Type0.png";
}



let ShortsTextStatus = 0;

function openShortsText() {
    if (ShortsTextStatus == 0) {

        ShortTextMenu.style.display = "flex";
        document.getElementById("expandShortsText").innerHTML = "-";
        
        ShortsTextStatus = 1; }

    else if (ShortsTextStatus == 1) {

        ShortTextMenu.style.display = "none";
        document.getElementById("expandShortsText").innerHTML = "+";
        ShortsTextStatus = 0; }

}


let LogosJerseyStatus = 0;

function openJerseyLogos() {
    if (LogosJerseyStatus == 0) {

        LogosJerseyBlock.style.display = "flex";
        expandJerseyLogos.style.transform = "rotate(45deg)";
        expandJerseyLogos.style.left = "0.1em";
        LogosJerseyStatus = 1; }

    else if (LogosJerseyStatus == 1) {

        LogosJerseyBlock.style.display = "none";
        expandJerseyLogos.style.transform = "rotate(0deg)";
        expandJerseyLogos.style.left = "0em";
        LogosJerseyStatus = 0; }

}


let LogosShortsStatus = 0;

function openShortsLogos() {
    if (LogosShortsStatus == 0) {

        LogosShortsBlock.style.display = "flex";
        expandShortsLogos.style.transform = "rotate(45deg)";
        expandShortsLogos.style.left = "0.1em";
        LogosShortsStatus = 1; }

    else if (LogosShortsStatus == 1) {

        LogosShortsBlock.style.display = "none";
        expandShortsLogos.style.transform = "rotate(0deg)";
        expandShortsLogos.style.left = "0em";
        LogosShortsStatus = 0; }

}



let DisplayStatus = 0;

function openDisplayVariousForTucked() {
    if (DisplayStatus == 0) {

    Button_Untucked.style.display = "block";
    Button_Tucked.style.display = "block";
    Button_Jersey.style.display = "block";
    Button_Shorts.style.display = "block";
    
    DisplayStatus = 1; }

    else if (DisplayStatus == 1) {

    Button_Tucked.style.bottom = "5em";
    Button_Untucked.style.bottom = "7.3em";
    Button_Jersey.style.bottom = "11.9em";
    Button_Shorts.style.bottom = "9.6em";

    Button_Tucked.style.color = "#000000";
    Button_Jersey.style.color = "#ababab";
    Button_Untucked.style.color = "#ababab";
    Button_Shorts.style.color = "#ababab";

    Button_Untucked.style.display = "none";
    Button_Jersey.style.display = "none";
    Button_Shorts.style.display = "none";

    DisplayStatus = 0; }
}

function openDisplayVariousForUntucked() {
    if (DisplayStatus == 0) {

    Button_Untucked.style.display = "block";
    Button_Tucked.style.display = "block";
    Button_Jersey.style.display = "block";
    Button_Shorts.style.display = "block";
    
    DisplayStatus = 1; }

    else if (DisplayStatus == 1) {

    Button_Untucked.style.bottom = "5em";
    Button_Tucked.style.bottom = "7.3em";
    Button_Jersey.style.bottom = "11.9em";
    Button_Shorts.style.bottom = "9.6em";

    Button_Untucked.style.color = "#000000";
    Button_Tucked.style.color = "#ababab";
    Button_Jersey.style.color = "#ababab";
    Button_Shorts.style.color = "#ababab";

    Button_Tucked.style.display = "none";
    Button_Jersey.style.display = "none";
    Button_Shorts.style.display = "none";

    DisplayStatus = 0; }
}

function openDisplayVariousForShorts() {
    if (DisplayStatus == 0) {

    Button_Untucked.style.display = "block";
    Button_Tucked.style.display = "block";
    Button_Jersey.style.display = "block";
    Button_Shorts.style.display = "block";
    
    DisplayStatus = 1; }

    else if (DisplayStatus == 1) {

    Button_Untucked.style.bottom = "9.6em";
    Button_Tucked.style.bottom = "11.9em";
    Button_Jersey.style.bottom = "7.3em";
    Button_Shorts.style.bottom = "5em";

    Button_Shorts.style.color = "#000000";
    Button_Tucked.style.color = "#ababab";
    Button_Untucked.style.color = "#ababab";
    Button_Jersey.style.color = "#ababab";

    Button_Tucked.style.display = "none";
    Button_Jersey.style.display = "none";
    Button_Untucked.style.display = "none";

    DisplayStatus = 0; }
}

function openDisplayVariousForJersey() {
    if (DisplayStatus == 0) {

    Button_Untucked.style.display = "block";
    Button_Tucked.style.display = "block";
    Button_Jersey.style.display = "block";
    Button_Shorts.style.display = "block";
    
    DisplayStatus = 1; }

    else if (DisplayStatus == 1) {

    Button_Untucked.style.bottom = "9.6em";
    Button_Tucked.style.bottom = "11.9em";
    Button_Jersey.style.bottom = "5em";
    Button_Shorts.style.bottom = "7.3em";

    Button_Jersey.style.color = "#000000";
    Button_Tucked.style.color = "#ababab";
    Button_Untucked.style.color = "#ababab";
    Button_Shorts.style.color = "#ababab";
    

    Button_Tucked.style.display = "none";
    Button_Shorts.style.display = "none";
    Button_Untucked.style.display = "none";

    DisplayStatus = 0; }
}





let View360Status = 0;

function openView360Various() {
    if (View360Status == 0) {

    Button_Front.style.display = "block";
    Button_Back.style.display = "block";
    Button_Right.style.display = "block";
    Button_Left.style.display = "block";
    
    document.getElementById("View360img").src="icons/360viewGray.png";

    View360Status = 1; }

    else if (View360Status == 1) {

        if (BackgroundStatus == 0) {
            document.getElementById("View360img").src="icons/360viewBlack.png";
            Button_Front.style.display = "none";
            Button_Back.style.display = "none";
            Button_Right.style.display = "none";
            Button_Left.style.display = "none";
            Button_Front.style.color = "#ababab";
            Button_Back.style.color = "#ababab";
            Button_Right.style.color = "#ababab";
            Button_Left.style.color = "#ababab";
            View360Status = 0; }

        else if (BackgroundStatus == 1) {
            document.getElementById("View360img").src="icons/360viewWhite.png";
            Button_Front.style.display = "none";
            Button_Back.style.display = "none";
            Button_Right.style.display = "none";
            Button_Left.style.display = "none";
            Button_Front.style.color = "#ababab";
            Button_Back.style.color = "#ababab";
            Button_Right.style.color = "#ababab";
            Button_Left.style.color = "#ababab";
            View360Status = 0; }
    }
}
function viewVariousFront() {
    Button_Front.style.color = "#000000";
    Button_Back.style.color = "#ababab";
    Button_Right.style.color = "#ababab";
    Button_Left.style.color = "#ababab";
}

function viewVariousBack() {
    Button_Back.style.color = "#000000";
    Button_Front.style.color = "#ababab";
    Button_Right.style.color = "#ababab";
    Button_Left.style.color = "#ababab";
}

function viewVariousRight() {
    Button_Right.style.color = "#000000";
    Button_Back.style.color = "#ababab";
    Button_Front.style.color = "#ababab";
    Button_Left.style.color = "#ababab";
}

function viewVariousLeft() {
    Button_Left.style.color = "#000000";
    Button_Back.style.color = "#ababab";
    Button_Right.style.color = "#ababab";
    Button_Front.style.color = "#ababab";
}


let JerseyTextFontsStatus = 0;

function openJerseyTextFonts() {
    if (JerseyTextFontsStatus == 0) {

        switch (LayOutStatus) {
            case 1:
                FontListRoll.style.display = "flex";
                break;
            case 2:
                FontListRollCurved1.style.display = "flex";
                break;
            case 3:
                FontListRollCurved2.style.display = "flex";
                break;
        }
        CrossIconFontJerseyText.style.transform = "rotate(45deg)"; 
        JerseyTextFontsStatus = 1; }

    else if (JerseyTextFontsStatus == 1) {

        FontListRollCurved1.style.display = "none";
        FontListRollCurved2.style.display = "none";
        FontListRoll.style.display = "none";
        CrossIconFontJerseyText.style.transform = "rotate(90deg)"; 
        JerseyTextFontsStatus = 0; }

}

function FontTeamNameCANTERBURY() {
    document.getElementById("FontTeamNameJersey").innerHTML = "Canterbury";
    document.getElementById("FontFrontJerseyValue").innerHTML = "Canterbury";
}

function FontTeamNameCOCOGOOSE() {
    document.getElementById("FontTeamNameJersey").innerHTML = "CocogooseProItalic";
    document.getElementById("FontFrontJerseyValue").innerHTML = "Coogoouse Pro Italic";
}

function FontTeamNameCOLLEGE() {
    document.getElementById("FontTeamNameJersey").innerHTML = "College_Bold";
    document.getElementById("FontFrontJerseyValue").innerHTML = "College";
}

function FontTeamNameDEFTONE() {
    document.getElementById("FontTeamNameJersey").innerHTML = "Deftone_Stylus";
    document.getElementById("FontFrontJerseyValue").innerHTML = "Deftone Stylus";
}

function FontTeamNameEMILIO() {
    document.getElementById("FontTeamNameJersey").innerHTML = "Emilio_19_Regular";
    document.getElementById("FontFrontJerseyValue").innerHTML = "Emilio 19";
}

function FontTeamNameLEAGUESPARTAN() {
    document.getElementById("FontTeamNameJersey").innerHTML = "LeagueSpartan_Bold";
    document.getElementById("FontFrontJerseyValue").innerHTML = "LeagueSpartan";
}

function FontTeamNameMONOTON() {
    document.getElementById("FontTeamNameJersey").innerHTML = "Monoton_Regular";
    document.getElementById("FontFrontJerseyValue").innerHTML = "Monoton";
}

function FontTeamNameMONTSERRAT() {
    document.getElementById("FontTeamNameJersey").innerHTML = "Montserrat_Regular";
    document.getElementById("FontFrontJerseyValue").innerHTML = "Montserrat";
}

function FontTeamNamePUBLICENEMY() {
    document.getElementById("FontTeamNameJersey").innerHTML = "Public_Enemy_Regular";
    document.getElementById("FontFrontJerseyValue").innerHTML = "Public Enemy";
}

function FontTeamNameSPORTJERSEY() {
    document.getElementById("FontTeamNameJersey").innerHTML = "Sportsjersey";
    document.getElementById("FontFrontJerseyValue").innerHTML = "Sportsjersey";
}






let JerseyNumberFontsStatus = 0;

function openJerseyTextFontsNumber() {
    if (JerseyNumberFontsStatus == 0) {

        FontListRollNumber.style.display = "flex";
        CrossIconFontJerseyTextNumber.style.transform = "rotate(45deg)"; 
        JerseyNumberFontsStatus = 1; }

    else if (JerseyNumberFontsStatus == 1) {

        FontListRollNumber.style.display = "none";
        CrossIconFontJerseyTextNumber.style.transform = "rotate(90deg)"; 
        JerseyNumberFontsStatus = 0; }

}

function FontNumberCANTERBURY() {
    document.getElementById("FontNumberJersey").innerHTML = "Canterbury";
    document.getElementById("NumberFontFrontJerseyValue").innerHTML = "Canterbury";
}

function FontNumberCOCOGOOSE() {
    document.getElementById("FontNumberJersey").innerHTML = "CocogooseProItalic";
    document.getElementById("NumberFontFrontJerseyValue").innerHTML = "Cocogoose Pro Italic";
}

function FontNumberCOLLEGE() {
    document.getElementById("FontNumberJersey").innerHTML = "College_Bold";
    document.getElementById("NumberFontFrontJerseyValue").innerHTML = "College";
}

function FontNumberDEFTONE() {
    document.getElementById("FontNumberJersey").innerHTML = "Deftone_Stylus";
    document.getElementById("NumberFontFrontJerseyValue").innerHTML = "Deftone Stylus";
}

function FontNumberEMILIO() {
    document.getElementById("FontNumberJersey").innerHTML = "Emilio_19_Regular";
    document.getElementById("NumberFontFrontJerseyValue").innerHTML = "Emilio 19";
}

function FontNumberLEAGUESPARTAN() {
    document.getElementById("FontNumberJersey").innerHTML = "LeagueSpartan_Bold";
    document.getElementById("NumberFontFrontJerseyValue").innerHTML = "LeagueSpartan";
}

function FontNumberMONOTON() {
    document.getElementById("FontNumberJersey").innerHTML = "Monoton_Regular";
    document.getElementById("NumberFontFrontJerseyValue").innerHTML = "Monoton";
}

function FontNumberMONTSERRAT() {
    document.getElementById("FontNumberJersey").innerHTML = "Montserrat_Regular";
    document.getElementById("NumberFontFrontJerseyValue").innerHTML = "Montserrat";
}

function FontNumberPUBLICENEMY() {
    document.getElementById("FontNumberJersey").innerHTML = "Public_Enemy_Regular";
    document.getElementById("NumberFontFrontJerseyValue").innerHTML = "Public Enemy";
}

function FontNumberSPORTJERSEY() {
    document.getElementById("FontNumberJersey").innerHTML = "Sportsjersey";
    document.getElementById("NumberFontFrontJerseyValue").innerHTML = "Sportsjersey";
}



let BackgroundStatus = 0;

function ChangeBackground() {
    if (BackgroundStatus == 0) {
        document.getElementById("FullScreenIconImg").src="icons/FullScreenWhite.png";
        document.getElementById("ShareIconImg").src="icons/ShareWhite.png"; 
        document.getElementById("View360img").src="icons/360viewWhite.png"; 
        DisplayTitle.style.color = "#ffffff";
        SwitchBlock.style.color = "#ffffff";
        container.style.background = "radial-gradient(circle, rgba(52,52,59,1) 0%, rgba(33,33,40,1) 100%)";
        
        BackgroundStatus = 1; }
    else if (BackgroundStatus == 1) {
        document.getElementById("FullScreenIconImg").src="icons/FullScreen.png";
        document.getElementById("ShareIconImg").src="icons/Share.png"; 
        document.getElementById("View360img").src="icons/360viewBlack.png"; 
        DisplayTitle.style.color = "#000000";
        SwitchBlock.style.color = "#000000";
        container.style.background = "radial-gradient(circle, rgba(242,242,242,1) 0%, rgba(255,255,255,1) 100%)";
        BackgroundStatus = 0; }
}

function Line1TeamNameInput() {
    var Line1TeamName = document.getElementById("Line1TeamName").value;
    document.getElementById("Line1FrontJerseyValue").innerHTML = Line1TeamName;
}

function Line2TeamNameInput() {
    var Line2TeamName = document.getElementById("Line2TeamName").value;
    document.getElementById("Line2FrontJerseyValue").innerHTML = Line2TeamName;
}



function HeightWidthLogosLeftShoulderInput() {
    var HeightLogosLeftShoulder = document.getElementById("HeightLogosLeftShoulder").value;
    var WidthLogosLeftShoulder = document.getElementById("WidthLogosLeftShoulder").value;

   document.getElementById("DimensionsTeamLogoLeftShoulderJerseyValue").innerHTML = ` ${WidthLogosLeftShoulder} * ${HeightLogosLeftShoulder}`;
}

function HeightWidthLogosRightShoulderInput() {
    var HeightLogosRightShoulder = document.getElementById("HeightLogosRightShoulder").value;
    var WidthLogosRightShoulder = document.getElementById("WidthLogosRightShoulder").value;

   document.getElementById("DimensionsTeamLogoRightShoulderJerseyValue").innerHTML = ` ${WidthLogosRightShoulder} * ${HeightLogosRightShoulder}`;
}

function HeightWidthLogosBackBelowNeckInput() {
    var HeightBackBelowNeck = document.getElementById("HeightBackBelowNeck").value;
    var WidthBackBelowNeck = document.getElementById("WidthBackBelowNeck").value;

   document.getElementById("DimensionsTeamLogoBackBelowNeckJerseyValue").innerHTML = ` ${WidthBackBelowNeck} * ${HeightBackBelowNeck}`;
}

function HeightWidthLogosBackUnderNumberInput() {
    var HeightLogosBackUnderNumber = document.getElementById("HeightLogosBackUnderNumber").value;
    var WidthLogosBackUnderNumber = document.getElementById("WidthLogosBackUnderNumber").value;

   document.getElementById("DimensionsTeamLogoBackUnderNumberJerseyValue").innerHTML = ` ${WidthLogosBackUnderNumber} * ${HeightLogosBackUnderNumber}`;
}



function HeightWidthLogosLeftUpperInput() {
    var HeightLogosLeftUpper = document.getElementById("HeightLogosLeftUpper").value;
    var WidthLogosLeftUpper = document.getElementById("WidthLogosLeftUpper").value;

   document.getElementById("DimensionsTeamLogoLeftShoulderJerseyValue").innerHTML = ` ${WidthLogosLeftUpper} * ${HeightLogosLeftUpper}`;
}

function HeightWidthLogosLeftLowerInput() {
    var HeightLogosLeftLower = document.getElementById("HeightLogosLeftLower").value;
    var WidthLogosLeftLower = document.getElementById("WidthLogosLeftLower").value;

   document.getElementById("DimensionsTeamLogoRightShoulderJerseyValue").innerHTML = ` ${WidthLogosLeftLower} * ${HeightLogosLeftLower}`;
}

function HeightWidthLogosRightUpperInput() {
    var HeightRightUpper = document.getElementById("HeightRightUpper").value;
    var WidthRightUpper = document.getElementById("WidthRightUpper").value;

   document.getElementById("DimensionsTeamLogoBackBelowNeckJerseyValue").innerHTML = ` ${WidthRightUpper} * ${HeightRightUpper}`;
}

function HeightWidthLogosRightLowerInput() {
    var HeightRightLower = document.getElementById("HeightRightLower").value;
    var WidthRightLower = document.getElementById("WidthRightLower").value;

   document.getElementById("DimensionsTeamLogoBackUnderNumberJerseyValue").innerHTML = ` ${WidthRightLower} * ${HeightRightLower}`;
}


function Change_HLogoNFHScomplientJersey() {

  var checkBoxNFHScompliantJersey = document.getElementById("HLogoNFHScomplientJersey");

	if (checkBoxNFHScompliantJersey.checked == true) {
        document.getElementById("NFHSComplientJerseyValue").innerHTML ="Yes"; 
    } 
    else {
        document.getElementById("NFHSComplientJerseyValue").innerHTML ="No"; 
    }
}

function Change_HLogoNFHScomplientShorts() {

  var checkBoxNFHScompliantShorts = document.getElementById("HLogoNFHScomplientShorts");

	if (checkBoxNFHScompliantShorts.checked == true) {
        document.getElementById("NFHSComplientShortsValue").innerHTML ="Yes"; 
    } 
    else {
        document.getElementById("NFHSComplientShortsValue").innerHTML ="No"; 
    }
}

function Change_HLogoRadio() {
	if (document.getElementById('HLogoCheckboxRightSholder').checked) {

        TeamNameLeftSholder.style.color = "#000000";
        UploadLeftShoulderPreview.style.color = "#000000";
        UploadLeftShoulderPrint.style.color = "#000000";
        ScaleAndMovePngLeftSholder.style.display = "block";
        document.getElementById("ImgfileInputLeftShoulderPreview").src="icons/upload.png"; 
        document.getElementById("fileInputLeftShoulderPreview").disabled = false;
        ImgfileInputLeftShoulderPreview.style.cursor = "pointer";
        document.getElementById("ImgfileInputLeftShoulderPrint").src="icons/apply.png"; 
        ImgfileInputLeftShoulderPrint.style.cursor = "pointer";
		UploadLeftShoulderPrint.style.cursor = "pointer";
		UploadLeftShoulderPreview.style.cursor = "pointer";

        TeamNameRightSholder.style.color = "#b5b5b5";
        UploadRightShoulderPreview.style.color = "#b5b5b5";
        UploadRightShoulderPrint.style.color = "#b5b5b5";
        ScaleAndMovePngRightSholder.style.display = "none";
        document.getElementById("ImgfileInputRightShoulderPreview").src="icons/none.png"; 
        document.getElementById("fileInputRightShoulderPreview").disabled = true;
        ImgfileInputRightShoulderPreview.style.cursor = "default";
        document.getElementById("ImgfileInputRightShoulderPrint").src="icons/none.png"; 
        ImgfileInputRightShoulderPrint.style.cursor = "default";
		UploadRightShoulderPrint.style.cursor = "default";
		UploadRightShoulderPreview.style.cursor = "default";
		Canvas1.style.display = "none";
		
		AppyRightShoulder = 1;
		AppyLefttShoulder = 0;
		
        document.getElementById("LHLogoJerseyValue").innerHTML ="Right Shoulder"; 
        TeamLogoLeftShoulderJerseySummaryBlock.style.display = "none";
        TeamLogoRightShoulderJerseySummaryBlock.style.display = "block";
    } 
    else if (document.getElementById('HLogoCheckboxLeftSholder').checked) {

        TeamNameRightSholder.style.color = "#000000";
        UploadRightShoulderPreview.style.color = "#000000";
        UploadRightShoulderPrint.style.color = "#000000";
        ScaleAndMovePngRightSholder.style.display = "block";
        document.getElementById("ImgfileInputRightShoulderPreview").src="icons/upload.png"; 
        document.getElementById("fileInputRightShoulderPreview").disabled = false;
        ImgfileInputRightShoulderPreview.style.cursor = "pointer";
        document.getElementById("ImgfileInputRightShoulderPrint").src="icons/apply.png"; 
        ImgfileInputRightShoulderPrint.style.cursor = "pointer";
		UploadRightShoulderPrint.style.cursor = "pointer";
		UploadRightShoulderPreview.style.cursor = "pointer";

        TeamNameLeftSholder.style.color = "#b5b5b5";
        UploadLeftShoulderPreview.style.color = "#b5b5b5";
        UploadLeftShoulderPrint.style.color = "#b5b5b5";
        ScaleAndMovePngLeftSholder.style.display = "none";
        document.getElementById("ImgfileInputLeftShoulderPreview").src="icons/none.png"; 
        document.getElementById("fileInputLeftShoulderPreview").disabled = true;
        ImgfileInputLeftShoulderPreview.style.cursor = "default";
        document.getElementById("ImgfileInputLeftShoulderPrint").src="icons/none.png"; 
        ImgfileInputLeftShoulderPrint.style.cursor = "default";
		UploadLeftShoulderPrint.style.cursor = "default";
		UploadLeftShoulderPreview.style.cursor = "default";
		Canvas2.style.display = "none";
		
		AppyRightShoulder = 0;
		AppyLefttShoulder = 1;
		
		
        document.getElementById("LHLogoJerseyValue").innerHTML ="Left Shoulder"; 
        TeamLogoLeftShoulderJerseySummaryBlock.style.display = "block";
        TeamLogoRightShoulderJerseySummaryBlock.style.display = "none";
	}
}

TeamNameLeftSholder.style.color = "#b5b5b5";
UploadLeftShoulderPreview.style.color = "#b5b5b5";
UploadLeftShoulderPrint.style.color = "#b5b5b5";
ScaleAndMovePngLeftSholder.style.display = "none";
document.getElementById("ImgfileInputLeftShoulderPreview").src="icons/none.png"; 
document.getElementById("fileInputLeftShoulderPreview").disabled = true;
ImgfileInputLeftShoulderPreview.style.cursor = "default";
document.getElementById("ImgfileInputLeftShoulderPrint").src="icons/none.png"; 
ImgfileInputLeftShoulderPrint.style.cursor = "default";
ImgfileInputLeftShoulderPreview.style.cursor = "default";
ImgfileInputLeftShoulderPreview.style.cursor = "default";
UploadLeftShoulderPrint.style.cursor = "default";


document.getElementById("LHLogoJerseyValue").innerHTML ="Left Shoulder"; 
TeamLogoLeftShoulderJerseySummaryBlock.style.display = "block";
TeamLogoRightShoulderJerseySummaryBlock.style.display = "none";
AppyRightShoulder = 0;
AppyLefttShoulder = 1;

const fileInputLeftShoulder = document.getElementById('fileInputLeftShoulderPreview');
fileInputLeftShoulder.oninput = () => {
	UploadedLeftShoulder.style.display = "block";
}

function ShowRemoveButtonLeftShoulder() {
		if (AppyLefttShoulder == 0) {
			UploadLeftShoulderPrint.style.display = "none";
			RemoveLeftShoulderPrint.style.display = "flex";


            document.getElementById("Canvas2").style.display = "block";
            FabricCanvasLeftShoulderStatus = 1;
			}
		   else if (AppyLefttShoulder == 1) {
		   }
}

function ShowApplyButtonLeftShoulder() {
	UploadLeftShoulderPrint.style.display = "flex";
	RemoveLeftShoulderPrint.style.display = "none";

    UploadedLeftShoulder.style.display = "block";

    document.getElementById("Canvas2").style.display = "none";
    FabricCanvasLeftShoulderStatus = 0;
}


const fileInput = document.getElementById('fileInputRightShoulderPreview');
fileInput.oninput = () => {
	UploadedRightShoulder.style.display = "block";
}

function ShowApplyButtonRightShoulder() {
	UploadRightShoulderPrint.style.display = "flex";
    RemoveRightShoulderPrint.style.display = "none";
    
	UploadedRightShoulder.style.display = "none";

    document.getElementById("Canvas1").style.display = "none";
    FabricCanvasRightShoulderStatus = 0;
}

function ShowRemoveButtonRightShoulder() {
		if (AppyRightShoulder == 0) {
			UploadRightShoulderPrint.style.display = "none";
			RemoveRightShoulderPrint.style.display = "flex";

            document.getElementById("Canvas1").style.display = "block";
            FabricCanvasRightShoulderStatus = 1;
			}
		   else if (AppyRightShoulder == 1) {
		   }
}


const fileInputBackBelowNeck = document.getElementById('fileInputBackBelowNeckPreview');
fileInputBackBelowNeck.oninput = () => {
	UploadedBackBelowNeck.style.display = "block";
}

function ShowRemoveButtonBackBelowNeck() {
	UploadBackBelowNeckPrint.style.display = "none";
	RemoveBackBelowNeckPrint.style.display = "flex";

    document.getElementById("Canvas3").style.display = "block";
    FabricCanvasBackBelowNeckStatus = 1;
}

function ShowApplyButtonBackBelowNeck() {
	UploadBackBelowNeckPrint.style.display = "flex";
    RemoveBackBelowNeckPrint.style.display = "none";
    
    UploadedBackBelowNeck.style.display = "none";

    document.getElementById("Canvas3").style.display = "none";
    FabricCanvasBackBelowNeckStatus = 0;

}

const fileInputBackUnderNumber = document.getElementById('fileInputBackUnderNumberPreview');
fileInputBackUnderNumber.oninput = () => {
	UploadedBackUnderNumber.style.display = "block";
}

function ShowRemoveButtonBackUnderNumber() {
	UploadBackUnderNumberPrint.style.display = "none";
	RemoveBackUnderNumberPrint.style.display = "flex";

    document.getElementById("Canvas4").style.display = "block";
    FabricCanvasBackUnderNumberStatus = 1;
}

function ShowApplyButtonBackUnderNumber() {
	UploadBackUnderNumberPrint.style.display = "flex";
	RemoveBackUnderNumberPrint.style.display = "none";
    
    UploadedBackUnderNumber.style.display = "none";

    document.getElementById("Canvas4").style.display = "none";
    FabricCanvasBackUnderNumberStatus = 0;

}


let FabricCanvasLeftShoulderStatus = 0;
function openFabricCanvasLeftShoulder() {
	if (FabricCanvasLeftShoulderStatus == 0) {
        Canvas2.style.display = "block";
	  FabricCanvasLeftShoulderStatus = 1;
	  document.getElementById("ScaleAndMovePngLeftSholder").innerHTML="Hide Grid"; 	}
    else if (FabricCanvasLeftShoulderStatus == 1) {
  	  Canvas2.style.display = "none";
	  FabricCanvasLeftShoulderStatus = 0;
	  document.getElementById("ScaleAndMovePngLeftSholder").innerHTML="Show Grid"; 	}
}

let FabricCanvasRightShoulderStatus = 0;
function openFabricCanvasRightShoulder() {
	if (FabricCanvasRightShoulderStatus == 0) {
        Canvas1.style.display = "block";
	  FabricCanvasRightShoulderStatus = 1;
      document.getElementById("ScaleAndMovePngRightSholder").innerHTML="Hide Grid"; 
	}
    else if (FabricCanvasRightShoulderStatus == 1) {
  	  Canvas1.style.display = "none";
	  FabricCanvasRightShoulderStatus = 0;
      document.getElementById("ScaleAndMovePngRightSholder").innerHTML="Show Grid"; 
	}
}


let FabricCanvasBackBelowNeckStatus = 0;
function openFabricCanvasBackBelowNeck() {
	if (FabricCanvasBackBelowNeckStatus == 0) {
	  Canvas3.style.display = "block";
	  FabricCanvasBackBelowNeckStatus = 1;
	  document.getElementById("ScaleAndMovePngBackBelowNeck").innerHTML="Hide Grid"; 
	}
    else if (FabricCanvasBackBelowNeckStatus == 1) {
  	  Canvas3.style.display = "none";
	  FabricCanvasBackBelowNeckStatus = 0;
	  document.getElementById("ScaleAndMovePngBackBelowNeck").innerHTML="Show Grid"; 
	}
}

let FabricCanvasBackUnderNumberStatus = 0;
function openFabricCanvasBackUnderNumber() {
	if (FabricCanvasBackUnderNumberStatus == 0) {
	  Canvas4.style.display = "block";
	  FabricCanvasBackUnderNumberStatus = 1;
	  document.getElementById("ScaleAndMovePngBackUnderNumber").innerHTML="Hide Grid"; 
	}
    else if (FabricCanvasBackUnderNumberStatus == 1) {
  	  Canvas4.style.display = "none";
	  FabricCanvasBackUnderNumberStatus = 0;
	  document.getElementById("ScaleAndMovePngBackUnderNumber").innerHTML="Show Grid"; 
	}
}

let FabricCanvasLeftUpperStatus = 0;
function openFabricCanvasLeftUpper() {
	if (FabricCanvasLeftUpperStatus == 0) {
	  Canvas5.style.display = "block";
	  FabricCanvasLeftUpperStatus = 1;
	  document.getElementById("ScaleAndMovePngLeftUpper").innerHTML="Hide Grid"; 
	}
    else if (FabricCanvasLeftUpperStatus == 1) {
  	  Canvas5.style.display = "none";
	  FabricCanvasLeftUpperStatus = 0;
	  document.getElementById("ScaleAndMovePngLeftUpper").innerHTML="Show Grid"; 
	}
}

let FabricCanvasLeftLowerStatus = 0;
function openFabricCanvasLeftLower() {
	if (FabricCanvasLeftLowerStatus == 0) {
	  Canvas6.style.display = "block";
	  FabricCanvasLeftLowerStatus = 1;
	  document.getElementById("ScaleAndMovePngLeftLower").innerHTML="Hide Grid"; 
	}
    else if (FabricCanvasLeftLowerStatus == 1) {
  	  Canvas6.style.display = "none";
	  FabricCanvasLeftLowerStatus = 0;
	  document.getElementById("ScaleAndMovePngLeftLower").innerHTML="Show Grid"; }	
}

let FabricCanvasRightUpperStatus = 0;
function openFabricCanvasRightUpper() {
	if (FabricCanvasRightUpperStatus == 0) {
	  Canvas7.style.display = "block";
	  FabricCanvasRightUpperStatus = 1;
	  document.getElementById("ScaleAndMovePngRightUpper").innerHTML="Hide Grid"; 	}
    else if (FabricCanvasRightUpperStatus == 1) {
  	  Canvas7.style.display = "none";
	  FabricCanvasRightUpperStatus = 0;
	  document.getElementById("ScaleAndMovePngRightUpper").innerHTML="Show Grid"; 	}
}

let FabricCanvasRightLowerStatus = 0;
function openFabricCanvasRightLower() {
	if (FabricCanvasRightLowerStatus == 0) {
	  Canvas8.style.display = "block";
	  FabricCanvasRightLowerStatus = 1;
	  document.getElementById("ScaleAndMovePngRightLower").innerHTML="Hide Grid"; 	
	}
    else if (FabricCanvasRightLowerStatus == 1) {
  	  Canvas8.style.display = "none";
	  FabricCanvasRightLowerStatus = 0;
	  document.getElementById("ScaleAndMovePngRightLower").innerHTML="Show Grid"; 	}
}


function Change_HLogoShortsRadio() {
	if (document.getElementById('HLogoLeftUpper').checked) {

        TeamNameLeftUpperShorts.style.color = "#b5b5b5";
        UploadLeftUpperPreview.style.color = "#b5b5b5";
        UploadLeftUpperPrint.style.color = "#b5b5b5";
        ScaleAndMovePngLeftUpper.style.display = "none";
        document.getElementById("ImgfileInputLeftUpperPreview").src="icons/none.png"; 
        document.getElementById("fileInputLeftUpperPreview").disabled = true;
        ImgfileInputLeftUpperPreview.style.cursor = "default";
        document.getElementById("ImgfileInputLeftUpperPrint").src="icons/none.png"; 
        ImgfileInputLeftUpperPrint.style.cursor = "default";
		UploadLeftUpperPrint.style.cursor = "default";
		UploadLeftUpperPreview.style.cursor = "default";
		Canvas5.style.display = "none";

        TeamNameLeftLowerShorts.style.color = "#000000";
        UploadLeftLowerPreview.style.color = "#000000";
        UploadLeftLowerPrint.style.color = "#000000";
        ScaleAndMovePngLeftLower.style.display = "block";
        document.getElementById("ImgfileInputLeftLowerPreview").src="icons/upload.png"; 
        document.getElementById("fileInputLeftLowerPreview").disabled = false;
        ImgfileInputLeftLowerPreview.style.cursor = "pointer";
        document.getElementById("ImgfileInputLeftLowerPrint").src="icons/apply.png"; 
        ImgfileInputLeftLowerPrint.style.cursor = "pointer";
		UploadLeftLowerPrint.style.cursor = "pointer";
		UploadLeftLowerPreview.style.cursor = "pointer";

        TeamNameRightLowerShorts.style.color = "#000000";
        UploadRightLowerPreview.style.color = "#000000";
        UploadRightLowerPrint.style.color = "#000000";
        ScaleAndMovePngRightLower.style.display = "block";
        document.getElementById("ImgfileInputRightLowerPreview").src="icons/upload.png"; 
        document.getElementById("fileInputRightLowerPreview").disabled = false;
        ImgfileInputRightLowerPreview.style.cursor = "pointer";
        document.getElementById("ImgfileInputRightLowerPrint").src="icons/apply.png"; 
        ImgfileInputRightLowerPrint.style.cursor = "pointer";
		UploadRightLowerPrint.style.cursor = "pointer";
		UploadRightLowerPreview.style.cursor = "pointer";

        TeamNameRightUpperShorts.style.color = "#000000";
        UploadRightUpperPreview.style.color = "#000000";
        UploadRightUpperPrint.style.color = "#000000";
        ScaleAndMovePngRightUpper.style.display = "block";
        document.getElementById("ImgfileInputRightUpperPreview").src="icons/upload.png"; 
        document.getElementById("fileInputRightUpperPreview").disabled = false;
        ImgfileInputRightUpperPreview.style.cursor = "pointer";
        document.getElementById("ImgfileInputRightUpperPrint").src="icons/apply.png"; 
        ImgfileInputRightUpperPrint.style.cursor = "pointer";
		UploadRightUpperPrint.style.cursor = "pointer";
		UploadRightUpperPreview.style.cursor = "pointer";

        document.getElementById("LeftUpperCheckboxNumber").disabled = true;
        document.getElementById("LeftLowerCheckboxNumber").disabled = false;
        document.getElementById("RightUpperCheckboxNumber").disabled = false;
        document.getElementById("RightLowerCheckboxNumber").disabled = false;

        TeamLogoLeftUpperShortsSummaryBlock.style.display = "none";
        TeamLogoLeftLowerShortsSummaryBlock.style.display = "block";
        TeamLogoRightUpperShortsSummaryBlock.style.display = "block";
        TeamLogoRightLowerShortsSummaryBlock.style.display = "block";
        LeftUpperNumber.style.color = "#b5b5b5";
        LeftLowerNumber.style.color = "#000000";
        RightUpperNumber.style.color = "#000000";
        RightLowerNumber.style.color = "#000000";

        AppyLeftUpper = 1;
        AppyLeftLower = 0;
        AppyRightUpper = 0;
        AppyRightLower = 0;
    } 
    else if (document.getElementById('HLogoLeftLower').checked) {

        TeamNameLeftLowerShorts.style.color = "#b5b5b5";
        UploadLeftLowerPreview.style.color = "#b5b5b5";
        UploadLeftLowerPrint.style.color = "#b5b5b5";
        ScaleAndMovePngLeftLower.style.display = "none";
        document.getElementById("ImgfileInputLeftLowerPreview").src="icons/none.png"; 
        document.getElementById("fileInputLeftLowerPreview").disabled = true;
        ImgfileInputLeftLowerPreview.style.cursor = "default";
        document.getElementById("ImgfileInputLeftLowerPrint").src="icons/none.png"; 
        ImgfileInputLeftLowerPrint.style.cursor = "default";
		UploadLeftLowerPrint.style.cursor = "default";
		UploadLeftLowerPreview.style.cursor = "default";
		Canvas6.style.display = "none";

        TeamNameLeftUpperShorts.style.color = "#000000";
        UploadLeftUpperPreview.style.color = "#000000";
        UploadLeftUpperPrint.style.color = "#000000";
        ScaleAndMovePngLeftUpper.style.display = "block";
        document.getElementById("ImgfileInputLeftUpperPreview").src="icons/upload.png"; 
        document.getElementById("fileInputLeftUpperPreview").disabled = false;
        ImgfileInputLeftUpperPreview.style.cursor = "pointer";
        document.getElementById("ImgfileInputLeftUpperPrint").src="icons/apply.png"; 
        ImgfileInputLeftUpperPrint.style.cursor = "pointer";
		UploadLeftUpperPrint.style.cursor = "pointer";
		UploadLeftUpperPreview.style.cursor = "pointer";

        TeamNameRightLowerShorts.style.color = "#000000";
        UploadRightLowerPreview.style.color = "#000000";
        UploadRightLowerPrint.style.color = "#000000";
        ScaleAndMovePngRightLower.style.display = "block";
        document.getElementById("ImgfileInputRightLowerPreview").src="icons/upload.png"; 
        document.getElementById("fileInputRightLowerPreview").disabled = false;
        ImgfileInputRightLowerPreview.style.cursor = "pointer";
        document.getElementById("ImgfileInputRightLowerPrint").src="icons/apply.png"; 
        ImgfileInputRightLowerPrint.style.cursor = "pointer";
		UploadRightLowerPrint.style.cursor = "pointer";
		UploadRightLowerPreview.style.cursor = "pointer";

        TeamNameRightUpperShorts.style.color = "#000000";
        UploadRightUpperPreview.style.color = "#000000";
        UploadRightUpperPrint.style.color = "#000000";
        ScaleAndMovePngRightUpper.style.display = "block";
        document.getElementById("ImgfileInputRightUpperPreview").src="icons/upload.png"; 
        document.getElementById("fileInputRightUpperPreview").disabled = false;
        ImgfileInputRightUpperPreview.style.cursor = "pointer";
        document.getElementById("ImgfileInputRightUpperPrint").src="icons/apply.png"; 
        ImgfileInputRightUpperPrint.style.cursor = "pointer";
		UploadRightUpperPrint.style.cursor = "pointer";
		UploadRightUpperPreview.style.cursor = "pointer";

        document.getElementById("LeftLowerCheckboxNumber").disabled = true;
        document.getElementById("LeftUpperCheckboxNumber").disabled = false;
        document.getElementById("RightUpperCheckboxNumber").disabled = false;
        document.getElementById("RightLowerCheckboxNumber").disabled = false;

        TeamLogoLeftUpperShortsSummaryBlock.style.display = "block";
        TeamLogoLeftLowerShortsSummaryBlock.style.display = "none";
        TeamLogoRightUpperShortsSummaryBlock.style.display = "block";
        TeamLogoRightLowerShortsSummaryBlock.style.display = "block";
        LeftUpperNumber.style.color = "#000000";
        LeftLowerNumber.style.color = "#b5b5b5";
        RightUpperNumber.style.color = "#000000";
        RightLowerNumber.style.color = "#000000";

        AppyLeftUpper = 0;
        AppyLeftLower = 1;
        AppyRightUpper = 0;
        AppyRightLower = 0;
	}
    else if (document.getElementById('HLogoRightLower').checked) {

       
        TeamNameRightLowerShorts.style.color = "#b5b5b5";
        UploadRightLowerPreview.style.color = "#b5b5b5";
        UploadRightLowerPrint.style.color = "#b5b5b5";
        ScaleAndMovePngRightLower.style.display = "none";
        document.getElementById("ImgfileInputRightLowerPreview").src="icons/none.png"; 
        document.getElementById("fileInputRightLowerPreview").disabled = true;
        ImgfileInputRightLowerPreview.style.cursor = "default";
        document.getElementById("ImgfileInputRightLowerPrint").src="icons/none.png"; 
        ImgfileInputRightLowerPrint.style.cursor = "default";
		UploadRightLowerPrint.style.cursor = "default";
		UploadRightLowerPreview.style.cursor = "default";
		Canvas8.style.display = "none";

        TeamNameLeftUpperShorts.style.color = "#000000";
        UploadLeftUpperPreview.style.color = "#000000";
        UploadLeftUpperPrint.style.color = "#000000";
        ScaleAndMovePngLeftUpper.style.display = "block";
        document.getElementById("ImgfileInputLeftUpperPreview").src="icons/upload.png"; 
        document.getElementById("fileInputLeftUpperPreview").disabled = false;
        ImgfileInputLeftUpperPreview.style.cursor = "pointer";
        document.getElementById("ImgfileInputLeftUpperPrint").src="icons/apply.png"; 
        ImgfileInputLeftUpperPrint.style.cursor = "pointer";
		UploadLeftUpperPrint.style.cursor = "pointer";
		UploadLeftUpperPreview.style.cursor = "pointer";

        TeamNameLeftLowerShorts.style.color = "#000000";
        UploadLeftLowerPreview.style.color = "#000000";
        UploadLeftLowerPrint.style.color = "#000000";
        ScaleAndMovePngLeftLower.style.display = "block";
        document.getElementById("ImgfileInputLeftLowerPreview").src="icons/upload.png"; 
        document.getElementById("fileInputLeftLowerPreview").disabled = false;
        ImgfileInputLeftLowerPreview.style.cursor = "pointer";
        document.getElementById("ImgfileInputLeftLowerPrint").src="icons/apply.png"; 
        ImgfileInputLeftLowerPrint.style.cursor = "pointer";
		UploadLeftLowerPrint.style.cursor = "pointer";
		UploadLeftLowerPreview.style.cursor = "pointer";

        TeamNameRightUpperShorts.style.color = "#000000";
        UploadRightUpperPreview.style.color = "#000000";
        UploadRightUpperPrint.style.color = "#000000";
        ScaleAndMovePngRightUpper.style.display = "block";
        document.getElementById("ImgfileInputRightUpperPreview").src="icons/upload.png"; 
        document.getElementById("fileInputRightUpperPreview").disabled = false;
        ImgfileInputRightUpperPreview.style.cursor = "pointer";
        document.getElementById("ImgfileInputRightUpperPrint").src="icons/apply.png"; 
        ImgfileInputRightUpperPrint.style.cursor = "pointer";
		UploadRightUpperPrint.style.cursor = "pointer";
		UploadRightUpperPreview.style.cursor = "pointer";

        document.getElementById("RightLowerCheckboxNumber").disabled = true;
        document.getElementById("LeftLowerCheckboxNumber").disabled = false;
        document.getElementById("RightUpperCheckboxNumber").disabled = false;
        document.getElementById("LeftUpperCheckboxNumber").disabled = false;

        TeamLogoLeftUpperShortsSummaryBlock.style.display = "block";
        TeamLogoLeftLowerShortsSummaryBlock.style.display = "block";
        TeamLogoRightUpperShortsSummaryBlock.style.display = "block";
        TeamLogoRightLowerShortsSummaryBlock.style.display = "none";
        LeftUpperNumber.style.color = "#000000";
        LeftLowerNumber.style.color = "#000000";
        RightUpperNumber.style.color = "#000000";
        RightLowerNumber.style.color = "#b5b5b5";

        AppyLeftUpper = 0;
        AppyLeftLower = 0;
        AppyRightUpper = 0;
        AppyRightLower = 1;
	}
    else if (document.getElementById('HLogoRightUpper').checked) {

        TeamNameRightUpperShorts.style.color = "#b5b5b5";
        UploadRightUpperPreview.style.color = "#b5b5b5";
        UploadRightUpperPrint.style.color = "#b5b5b5";
        ScaleAndMovePngRightUpper.style.display = "none";
        document.getElementById("ImgfileInputRightUpperPreview").src="icons/none.png"; 
        document.getElementById("fileInputRightUpperPreview").disabled = true;
        ImgfileInputRightUpperPreview.style.cursor = "default";
        document.getElementById("ImgfileInputRightUpperPrint").src="icons/none.png"; 
        ImgfileInputRightUpperPrint.style.cursor = "default";
		UploadRightUpperPrint.style.cursor = "default";
		UploadRightUpperPreview.style.cursor = "default";
		Canvas7.style.display = "none";

        TeamNameLeftUpperShorts.style.color = "#000000";
        UploadLeftUpperPreview.style.color = "#000000";
        UploadLeftUpperPrint.style.color = "#000000";
        ScaleAndMovePngLeftUpper.style.display = "block";
        document.getElementById("ImgfileInputLeftUpperPreview").src="icons/upload.png"; 
        document.getElementById("fileInputLeftUpperPreview").disabled = false;
        ImgfileInputLeftUpperPreview.style.cursor = "pointer";
        document.getElementById("ImgfileInputLeftUpperPrint").src="icons/apply.png"; 
        ImgfileInputLeftUpperPrint.style.cursor = "pointer";
		UploadLeftUpperPrint.style.cursor = "pointer";
		UploadLeftUpperPreview.style.cursor = "pointer";

        TeamNameLeftLowerShorts.style.color = "#000000";
        UploadLeftLowerPreview.style.color = "#000000";
        UploadLeftLowerPrint.style.color = "#000000";
        ScaleAndMovePngLeftLower.style.display = "block";
        document.getElementById("ImgfileInputLeftLowerPreview").src="icons/upload.png"; 
        document.getElementById("fileInputLeftLowerPreview").disabled = false;
        ImgfileInputLeftLowerPreview.style.cursor = "pointer";
        document.getElementById("ImgfileInputLeftLowerPrint").src="icons/apply.png"; 
        ImgfileInputLeftLowerPrint.style.cursor = "pointer";
		UploadLeftLowerPrint.style.cursor = "pointer";
		UploadLeftLowerPreview.style.cursor = "pointer";


        TeamNameRightLowerShorts.style.color = "#000000";
        UploadRightLowerPreview.style.color = "#000000";
        UploadRightLowerPrint.style.color = "#000000";
        ScaleAndMovePngRightLower.style.display = "block";
        document.getElementById("ImgfileInputRightLowerPreview").src="icons/upload.png"; 
        document.getElementById("fileInputRightLowerPreview").disabled = false;
        ImgfileInputRightLowerPreview.style.cursor = "pointer";
        document.getElementById("ImgfileInputRightLowerPrint").src="icons/apply.png"; 
        ImgfileInputRightLowerPrint.style.cursor = "pointer";
		UploadRightLowerPrint.style.cursor = "pointer";
		UploadRightLowerPreview.style.cursor = "pointer";

        document.getElementById("RightUpperCheckboxNumber").disabled = true;
        document.getElementById("LeftLowerCheckboxNumber").disabled = false;
        document.getElementById("LeftUpperCheckboxNumber").disabled = false;
        document.getElementById("RightLowerCheckboxNumber").disabled = false;

        TeamLogoLeftUpperShortsSummaryBlock.style.display = "block";
        TeamLogoLeftLowerShortsSummaryBlock.style.display = "block";
        TeamLogoRightUpperShortsSummaryBlock.style.display = "none";
        TeamLogoRightLowerShortsSummaryBlock.style.display = "block";
        LeftUpperNumber.style.color = "#000000";
        LeftLowerNumber.style.color = "#000000";
        RightUpperNumber.style.color = "#b5b5b5";
        RightLowerNumber.style.color = "#000000";

        AppyLeftUpper = 0;
        AppyLeftLower = 0;
        AppyRightUpper = 1;
        AppyRightLower = 0;
	}
}


TeamNameRightLowerShorts.style.color = "#b5b5b5";
UploadRightLowerPreview.style.color = "#b5b5b5";
UploadRightLowerPrint.style.color = "#b5b5b5";
document.getElementById("ImgfileInputRightLowerPreview").src="icons/none.png"; 
document.getElementById("fileInputRightLowerPreview").disabled = true;
ImgfileInputRightLowerPreview.style.cursor = "default";
document.getElementById("ImgfileInputRightLowerPrint").src="icons/none.png"; 
ImgfileInputRightLowerPrint.style.cursor = "default";
UploadRightLowerPrint.style.cursor = "default";
UploadRightLowerPreview.style.cursor = "default";
Canvas8.style.display = "none";
ScaleAndMovePngRightLower.style.display = "none";


document.getElementById("LeftUpperCheckboxNumber").disabled = false;
document.getElementById("LeftLowerCheckboxNumber").disabled = false;
document.getElementById("RightUpperCheckboxNumber").disabled = false;
document.getElementById("RightLowerCheckboxNumber").disabled = true;
TeamLogoLeftUpperShortsSummaryBlock.style.display = "block";
TeamLogoLeftLowerShortsSummaryBlock.style.display = "block";
TeamLogoRightUpperShortsSummaryBlock.style.display = "block";
TeamLogoRightLowerShortsSummaryBlock.style.display = "none";
LeftUpperNumber.style.color = "#000000";
LeftLowerNumber.style.color = "#000000";
RightUpperNumber.style.color = "#000000";
RightLowerNumber.style.color = "#b5b5b5";


AppyLeftUpper = 0;
AppyLeftLower = 0;
AppyRightUpper = 0;
AppyRightLower = 1;


const fileInputRightUpper = document.getElementById('fileInputRightUpperPreview');
fileInputRightUpper.oninput = () => {
	UploadedRightUpper.style.display = "block";
}

function ShowRemoveButtonRightUpper() {
    if (AppyRightUpper == 0) {
        UploadRightUpperPrint.style.display = "none";
        RemoveRightUpperPrint.style.display = "flex";
        document.getElementById("Canvas7").style.display = "block";
        FabricCanvasRightUpperStatus = 1;
        }
       else if (AppyRightUpper == 1) {
       }
}

function ShowApplyButtonRightUpper() {
UploadRightUpperPrint.style.display = "flex";
RemoveRightUpperPrint.style.display = "none";
UploadedRightUpper.style.display = "block";
document.getElementById("Canvas7").style.display = "none";
FabricCanvasRightUpperStatus = 0;
}



const fileInputRightLower = document.getElementById('fileInputRightLowerPreview');
fileInputRightLower.oninput = () => {
	UploadedRightLower.style.display = "block";
}

function ShowRemoveButtonRightLower() {
    if (AppyRightLower == 0) {
        UploadRightLowerPrint.style.display = "none";
        RemoveRightLowerPrint.style.display = "flex";
        document.getElementById("Canvas8").style.display = "block";
        FabricCanvasRightLowerStatus = 1;
        }
       else if (AppyRightLower == 1) {
       }
}

function ShowApplyButtonRightLower() {
UploadRightLowerPrint.style.display = "flex";
RemoveRightLowerPrint.style.display = "none";
UploadedRightLower.style.display = "none";
document.getElementById("Canvas8").style.display = "none";
FabricCanvasRightLowerStatus = 0;
}



const fileInputLeftUpper = document.getElementById('fileInputLeftUpperPreview');
fileInputLeftUpper.oninput = () => {
	UploadedLeftUpper.style.display = "block";
}

function ShowRemoveButtonLeftUpper() {
    if (AppyLeftUpper == 0) {
        UploadLeftUpperPrint.style.display = "none";
        RemoveLeftUpperPrint.style.display = "flex";
        document.getElementById("Canvas5").style.display = "block";
        FabricCanvasLeftUpperStatus = 1;
        }
       else if (AppyLeftUpper == 1) {
       }
}

function ShowApplyButtonLeftUpper() {
UploadLeftUpperPrint.style.display = "flex";
RemoveLeftUpperPrint.style.display = "none";
UploadedLeftUpper.style.display = "none";
document.getElementById("Canvas5").style.display = "none";
FabricCanvasLeftUpperStatus = 0;
}


const fileInputLeftLower = document.getElementById('fileInputLeftLowerPreview');
fileInputLeftLower.oninput = () => {
	UploadedLeftLower.style.display = "block";
}

function ShowRemoveButtonLeftLower() {
    if (AppyLeftLower == 0) {
        UploadLeftLowerPrint.style.display = "none";
        RemoveLeftLowerPrint.style.display = "flex";
        document.getElementById("Canvas6").style.display = "block";
        FabricCanvasLeftLowerStatus = 1;
        }
       else if (AppyLeftLower == 1) {
       }
}

function ShowApplyButtonLeftLower() {
UploadLeftLowerPrint.style.display = "flex";
RemoveLeftLowerPrint.style.display = "none";
UploadedLeftLower.style.display = "none";
document.getElementById("Canvas6").style.display = "none";
FabricCanvasLeftLowerStatus = 0;
}


function UncheckText() {
    document.getElementById('CheckBoxText').checked = false;
}

function UncheckName() {
    document.getElementById('CheckBoxName').checked = false;
}

//console.log("chislo");
//console.log(document.getElementById("HeightLogosLeftShoulder").value);

































