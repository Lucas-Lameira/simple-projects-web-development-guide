const buttonElement = document.getElementById('botao');
const boxColor = document.getElementById('box-color');
const output = document.getElementById('hexacolor');

let toggleButton = false;
let hexaColor;

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

//document.styleSheets[0] vai no primeiro estilo dentro do html
//cssRules[0] vai no primeiro bloco de css
//ou seja, vai ate o arquivo styles.css e pega o @keyframe
//o retorno, entao, é um CSSKeyframesRule, devido ao @keyframe
let animationKey = document.styleSheets[0].cssRules[0];

/* DOM interfaces
CSSKeyframesRule:
    name          --  attribute
    cssRules      --  attribute
    appendRule()  --  method
    deleteRule()  --  method
    findRule()    --  method
CSSKeyframeRule:
    cssText       --  attribute
    keyText       --  attribute
    style         --  attribute
    type          --  attribute
*/


function play() {
    //se os numeros forem precedidos de 0x o javascript interpreta como hexadecimal e converte para numeros inteiros
    //caso o usuário digite letras diferentes das presentes nos hexadecimal, o retorno é NaN
    red = Number('0x' + redInput.value);
    green = Number('0x' + greenInput.value);
    blue = Number('0x' + blueInput.value);

    plusRed = Number('0x' + incrementRed.value);
    plusGreen = Number('0x' + incrementGreen.value);
    plusBlue = Number('0x' + incrementBlue.value);
    
    checkIsNotNumber();
    convertToHexadecimal();
    hexaColor = "#" + red + green + blue;
    
    if(!toggleButton){
        buttonElement.innerHTML = 'Pause';
        toggleButton = true; 

        boxColor.style.animationName = 'changeColor';
        boxColor.style.animationDuration = '2s'
        boxColor.style.animationIterationCount = 'infinite';
        boxColor.style.animationDirection = 'alternate'

        console.log(hexaColor)
        output.innerHTML = hexaColor
        animationKey.appendRule(`0% {background-color: ${hexaColor};}`);
        converteToDecimal();
        convertToHexadecimal();
        hexaColor = "#" + red + green + blue;
        output.innerHTML = "first color: " + output.innerText +" <br>" + "second color: " + hexaColor 
        console.log(hexaColor)
        animationKey.appendRule(`100% {background-color: ${hexaColor};}`);
    }else{
        boxColor.style.animationName = '';
        buttonElement.innerHTML = 'Play'    
        output.innerHTML = ''
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

    /* console.log(`red: ${red}\nGreen: ${green}\nBlue: ${blue}`)  */
}

function converteToDecimal() {
    red = Number('0x' + red);
    green = Number('0x' + green);
    blue = Number('0x' + blue);

    increments();
    validadeMaxLenght()
}