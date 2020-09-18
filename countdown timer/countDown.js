var time_field = document.querySelector('input#time');


const outputTime = document.querySelector('span#hora'),
      outputTime2 = document.querySelector('span#hora2')

var x = new Date().getTime();

console.log(x)


function countDown() {
    let event_name = document.getElementById('event-name').value,
        date_field = document.querySelector('input#date').value,
        timer = document.querySelector('input#time').value,
        dateArray,
        hour,
        minutes;

    if(validateEventName(event_name)){    
        alert('Whats the occasion!');        
        return;
    }

    if(validateEmptyDate(date_field)){
        alert('I kind of need a valiDate! ba dum tsc');
        return;
    }
    dateArray = date_field.split('-');

    setArrayToNumber(dateArray);

    if(timer === ''){
        timer = '00:00';
    }
    timer = timer.split(':')

    validateTime(dateArray, timer)



    function renderTime (timer){
        document.getElementById('current-time').innerText = new Date().toLocaleTimeString()
        outputTime.innerHTML = `${timer[0]} :${timer[1]}`
        timer[1] -= timer[1]
        
               
    }
    setInterval(renderTime(timer), 1000)/* retorna um id, usar o id no clearinterval */
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

function validateTime(date_array, time){

   setArrayToNumber(time)

   if(date_array[0] === x.getFullYear() && date_array[1] === x.getMonth()+1 && date_array[2] === x.getDate()){
        /* condição que verifica se é o dia em que estamos  */
        document.getElementById('hora-marcada').innerHTML = time;
        document.getElementById('today').innerHTML = `É hoje!!!`
        /* condição que verifica se a hora no dia atual é valida */
        if(time[0]< x.getHours()){
            alert("essa hora ja passou")
            return
        }
        /* condição que verifica se os minutos no dia atual são validos */
        if(time[0]== x.getHours() && time[1] < x.getMinutes()){
            alert('Minutos passaram')
            return
        }
   }   
}

function setArrayToNumber(array) {
    for(let i =0; i<array.length; i++){
        array[i] = parseInt(array[i]);
    }
}




/* 
Notes:
    getMonth: janeiro começa na posição 0, logo dezembro está na posição 11
    getMilliseconds: de 0 a 999
*/

/* const week_day = ["domingo", "segunda", "terça", "quarta", "Quinta", "sexta", "sabado"];

console.log(x.getMonth(), x.getDate(), x.getFullYear())
console.log(`Hora: ${x.getHours()}:${x.getMinutes()}:${x.getSeconds()}`);
console.log(`Dia da semana: ${week_day[x.getDay()]}`)

document.getElementById('test').innerHTML = x; */
time_field.oninput = function () {
    outputTime.innerHTML = time_field.value;    
}