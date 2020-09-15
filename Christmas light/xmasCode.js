const olElement = document.getElementById('xmas-light');
const buttonElement = document.getElementById('btn');

const inputRangeElement = document.getElementById('spd');
const spd_output = document.getElementById('range-setup');
let speed;

let liElements = olElement.children;
let turnOnOff = false;



for(let i = 0; i<10; i++){
    let li = document.createElement('li')
    li.setAttribute('class', 'light');
    olElement.appendChild(li);
}
let counter = liElements.length;

function turnLights () {
    if(!turnOnOff){
        buttonElement.innerHTML = 'Lights On';        
        for(i = 0; i < counter; i++){
            liElements[i].style.animationName = 'lightsOn';
            liElements[i].style.animationDuration = speed + 's';
        }
        turnOnOff = true;
    }else{
        buttonElement.innerHTML = 'Lights Off';        
        for(i = 0; i < counter; i++){
            liElements[i].style.animationName = '';
            liElements[i].style.animationDuration = '0s'
        }
        turnOnOff = false;
    }
}


inputRangeElement.oninput = function () {
    spd_output.innerHTML = this.value + 's';
    speed = this.value;
    console.log(speed);
}