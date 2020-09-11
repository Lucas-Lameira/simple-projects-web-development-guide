const buttonElement = document.getElementById('botao');
const boxColor = document.getElementById('box-color');

let toggleButton = false;

let redInput = document.getElementById('red');
let greenInput = document.getElementById('green');
let blueInput = document.getElementById('blue');

let incrementRed = document.getElementById('incrementRed');
let incrementGreen = document.getElementById('incrementGreen');
let incrementBlue = document.getElementById('incrementBlue');

let red;
let green;
let blue; 

let plusRed;
let plusGreen;
let plusBlue;

function play() {    
    red = Number('0x' + redInput.value);
    green = Number('0x' + greenInput.value);
    blue = Number('0x' + blueInput.value);

    plusRed = Number('0x' + incrementRed.value);
    plusGreen = Number('0x' + incrementGreen.value);
    plusBlue = Number('0x' + incrementBlue.value);
       
    if(!toggleButton){
        buttonElement.innerHTML = 'Pause';
        toggleButton = true;        
    }else{
        buttonElement.innerHTML = 'Play'    
        toggleButton = false;    
    }
}

function checkIsNotNumber() {
    //isNaN() retorna true or false
    if(isNaN(red)) red = 0;
    if(isNaN(green)) green = 0;
    if(isNaN(blue)) blue = 0;
    if(isNaN(plusRed)) plusRed = 0;
    if(isNaN(plusGreen)) plusGreen = 0;
    if(isNaN(plusBlue)) plusBlue = 0;
}

function increments(){
    red = red + plusRed;
    green += plusGreen;
    blue += plusBlue;  
}

function validadeMaxLenght(){
    if(red > 255) red -= 255;    
    if(green > 255) green -= 255;    
    if(blue>255) blue -= 255;    
}

//os ifs dessa função são para a concatenação, que gera 
function convertToHexadecimal() {
    red = red.toString(16)
    
    if(red == 0) red = "00";
    if(red < 9 && red > 0) red = "0"+ red;
    if(red.length < 2) red = "0" + red;

    green = green.toString(16)
    if(green == 0) green = "00";
    if(green < 9 && green > 0) green = "0"+ green;
    if(green.length < 2) green = "0" + green;

    blue = blue.toString(16);
    if(blue == 0) blue = "00";
    if(blue < 9 && blue > 0) blue = "0"+ blue;
    if(blue.length < 2) blue = "0" + blue;
}

function converteToDecimal() {
    red = Number('0x' + red);
    green = Number('0x' + green);
    blue = Number('0x' + blue);   
}