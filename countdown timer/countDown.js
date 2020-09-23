var then = document.getElementById('not-today');
var eventTitle = document.getElementById('title')
var time_field = document.getElementById('time');
var outputTime = document.getElementById('hora');

var currentTime;
var eventTime;
var diference;

let dia;
let hora;
let minutos;
let segundos;

let toggleBtn = false;
var intervalId;
/* constructor Date() */
/* year, month, day, hours, minutes, seconds, milliseconds */

var x = new Date();

function countDown() {     

    if(validateEventName(document.getElementById('event-name').value)){
        alert('Nome do evento inválido');
        return
    }


    if(validateEmptyDate(document.getElementById('date').value)){
        alert('Data inválida');
        return
    }

    validateTime(document.getElementById('time').value)




    if (!toggleBtn) {
        document.querySelector('button').innerHTML = 'Stop';
        toggleBtn = true;
        eventTitle.innerHTML = document.getElementById('event-name').value ;
        
        document.getElementById('container').style.display = 'flex'
    
        let [year, month, day] = document.getElementById('date').value.split('-');
        let [hour, minute] = document.getElementById('time').value.split(':');
        
        /* Janeiro ta na posição zero do array */
        month-=1;

        function renderTime(){        
            currentTime = new Date().getTime();
            
            /*constructor: year, month, day, hous, minutes */
            eventTime = new Date(year, month, day, hour, minute).getTime();
        
            diference = eventTime - currentTime;
    
            segundos = Math.floor(diference / 1000);
            minutos = Math.floor(segundos / 60);
            hora = Math.floor(minutos / 60);
            dia = Math.floor(hora / 24);
    
            hora %= 24;
            minutos %= 60;
            segundos %= 60;
    
            hora = hora < 10 ? "0" + hora: hora; 
            minutos = minutos < 10 ? "0" + minutos: minutos; 
            segundos = segundos < 10 ? "0" + segundos: segundos; 
                
            then.innerHTML = dia + ':' + hora + ':' + minutos + ':' + segundos;       
           
        }
        intervalId = setInterval(renderTime, 1000);

    } else {
        document.querySelector('button').innerHTML = 'Start';
        toggleBtn = false;
        clearInterval(intervalId)
    }
    
}

function validateEventName(event_name_input) {
    if(event_name_input === '')
       return true;
    else
        return false;
}

function validateEmptyDate (date_field_input) {
    if(date_field_input === '') return true;
    
    date_field_input = date_field_input.split('-')
    
    if(Number(date_field_input[0]) < x.getFullYear() || Number(date_field_input[1]) < x.getMonth()+1 || Number(date_field_input[2]) < x.getDate()){
        return true;
    } else{        
        return false;
    }
}

function validateTime(x){
    if(x == ''){
        document.getElementById('time').value = "00:00";
    }
}


time_field.oninput = function () {
    outputTime.innerHTML = time_field.value;    
}