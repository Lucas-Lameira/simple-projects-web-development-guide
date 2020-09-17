const olElement = document.getElementsByTagName('ol');
const buttonElement = document.getElementById('btn');
const inputRangeElement = document.getElementById('spd');
const spd_output = document.getElementById('range-setup');
let speed;

let turnOnOff = false;
let li;

for(let i = 0; i<5; i++){
    for(let j = 0; j < 6; j++){
        li = document.createElement('li')
        olElement[i].appendChild(li);
    }
}
let counter = olElement[0].children.length


function turnLights () {
    if(!turnOnOff){
        buttonElement.innerHTML = 'Lights On';                                
        for(let i = 0; i< 5; i++){
            for(let j = 0; j < counter; j++){                
                if(i==0){
                    olElement[i].children[j].style.animationName = 'blueLightsOn';                    
                }else if(i==1){
                    olElement[i].children[j].style.animationName = 'yellowLightsOn';                    
                }else if(i==2){
                    olElement[i].children[j].style.animationName = 'whiteLightsOn';                    
                }else if(i==3){
                    olElement[i].children[j].style.animationName = 'greenLightsOn';                    
                }else{
                    olElement[i].children[j].style.animationName = 'redLightsOn';                    
                }                  
            }
        }
        turnOnOff = true;
    }else{
        buttonElement.innerHTML = 'Lights Off';        
        for(let i = 0; i< 5; i++){
            for(let j = 0; j < counter; j++){                
                if(i==0){
                    olElement[i].children[j].style.animationName = '';                
                }else if(i==1){
                    olElement[i].children[j].style.animationName = '';                    
                }else if(i==2){
                    olElement[i].children[j].style.animationName = '';                    
                }else if(i==3){
                    olElement[i].children[j].style.animationName = '';                    
                }else{
                    olElement[i].children[j].style.animationName = '';                    
                }                  
            }
        }
        turnOnOff = false;
    }
}

inputRangeElement.oninput = function () {
    spd_output.innerHTML = this.value + 's';
    speed = this.value;    
    for(let i = 0; i< 5; i++){
        for(let j = 0; j < counter; j++){                
            if(i==0){
                olElement[i].children[j].style.animationDuration = speed + 's';
            }else if(i==1){
                olElement[i].children[j].style.animationDuration = speed + 's';
            }else if(i==2){
                olElement[i].children[j].style.animationDuration = speed + 's';
            }else if(i==3){
                olElement[i].children[j].style.animationDuration = speed + 's';
            }else{
                olElement[i].children[j].style.animationDuration = speed + 's';
            }                  
        }
    }
}