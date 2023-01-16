const mySlider = document.getElementById("my-slider");
const sliderValue = document.getElementById("slider-value");
function slider(){
    valPercent = (mySlider.value / mySlider.max)*100;
    mySlider.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`;
    sliderValue.textContent = mySlider.value;
}
slider();

const mySlider2 = document.getElementById("my-slider2");
const sliderValue2 = document.getElementById("slider-value2");
function slider2(){
    valPercent2 = (mySlider2.value / mySlider2.max)*100;
    mySlider2.style.background = `linear-gradient(to right, #3264fe ${valPercent2}%, #d5d5d5 ${valPercent2}%)`;
    sliderValue2.textContent = mySlider2.value;
}
slider2();

const mySlider3 = document.getElementById("my-slider3");
const sliderValue3 = document.getElementById("slider-value3");
function slider3(){
    valPercent3 = (mySlider3.value / mySlider3.max)*100;
    mySlider3.style.background = `linear-gradient(to right, #3264fe ${valPercent3}%, #d5d5d5 ${valPercent3}%)`;
    sliderValue3.textContent = mySlider3.value;
}
slider3();

const mySlider4 = document.getElementById("my-slider4");
const sliderValue4 = document.getElementById("slider-value4");
function slider4(){
    valPercent4 = (mySlider4.value / mySlider4.max)*100;
    mySlider4.style.background = `linear-gradient(to right, #3264fe ${valPercent4}%, #d5d5d5 ${valPercent4}%)`;
    sliderValue4.textContent = mySlider4.value;
}
slider4();


