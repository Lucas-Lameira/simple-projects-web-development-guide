const buttonElement = document.getElementById('botao');
const boxColor = document.getElementById('box-color');
let toggleButton = false;
let hexaColor;

let incrementRed = document.getElementById('incrementRed');
let incrementGreen = document.getElementById('incrementGreen');
let incrementBlue = document.getElementById('incrementBlue');

let redInput = document.getElementById('red');
let greenInput = document.getElementById('green');
let blueInput = document.getElementById('blue');

let red;
let green;
let blue;

function play() {
    //se os numeros forem precedidos de 0x o javascript interpreta como hexadecimal e converte para numeros inteiros
    red = Number('0x' + redInput.value);
    green = Number('0x' + greenInput.value);
    blue = Number('0x' + blueInput.value);
    console.log(red)
    
    checkIsNotNumber();

    //valor em decimal
   /*  console.log(r);
    console.log(g);
    console.log(b); */

    //valor em hexadecimal
    /* console.log(r.toString(16))
    console.log(g.toString(16))
    console.log(b.toString(16)) */


    let y = red + Number('0x' + incrementRed.value);
    
    console.log(y)
    console.log(y.toString(16));

    if(toggleButton){
        buttonElement.innerHTML = 'Pause';
        toggleButton = false;        
        hexaColor = redInput.value + greenInput.value + blueInput.value;              
        console.log(hexaColor);
        boxColor.style.backgroundColor = '#' + hexaColor;        
    }else{
        toggleButton = true;
        buttonElement.innerHTML = 'Play'
    }
}


function checkIsNotNumber() {
    if(isNaN(red)){
        red = '00';
        /* console.log(`Red: ${red}`) */
    }
    if(isNaN(green)){
        green = '00';
    }
    if(isNaN(blue)){
        blue = '00';
    }  
}

/* 
    valor(supondo que é hexa) > transformar em binario> incrementar o tamanho > converter em hexa

  isNaN() true or false
  


*/
/* 
function checkHexa () {
    try {
        
    } catch(err) {

    }
} */



/* 
#1
    input value from an event  

#2
    the boolean switch




    */


    /* */