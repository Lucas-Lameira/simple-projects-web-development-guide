let id=0;

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

var idontknow = [
    {
        id: 0, 
        evento: 'nao tem eevento', 
        date: '2020-00-00', 
        time: '00:00'
    }
];



/* MODAL FUNCIONALITY */
document.querySelector('#add-event').addEventListener('click', function(){
    document.querySelector('.modal-bg').classList.add('modal-open');
});

document.querySelector('.modal-close').addEventListener('click', function(){
    document.querySelector('.modal-bg').classList.remove('modal-open');
});

/* TOOLTIP FUNCTIONALITY */
document.querySelector('#tooltip').addEventListener('click', function() {
    document.querySelector('.tooltip-bg').classList.add('modal-open');
    console.log('open')
})

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.tooltip-bg').classList.remove('modal-open');
    console.log('close')
});


/* REGISTER FUNCTION */
function registerNewEvent () {

    let InputEventName = document.getElementById('input-event-name').value;
    let InputEventDate = document.getElementById('input-event-date').value;
    let InputEventTime = document.getElementById('input-event-time').value;

    if(validateEventName(InputEventName)){
        alert('Nome do evento inválido');
        return
    }


    if(validateEmptyDate(InputEventDate, InputEventTime)) return
    
    InputEventTime = validateTime(InputEventTime);

    id +=1;
    idontknow.push({
        id: id,
        event: InputEventName,
        date: InputEventDate,
        time: InputEventTime
    })

    /* CLOSE MODAL */
    document.querySelector('.modal-bg').classList.remove('modal-open');
  
    let sectionElement = document.createElement('section')    
    sectionElement.setAttribute("class", "event-block");
    
    let eventHeader = document.createElement('div')
    eventHeader.setAttribute('class', 'event-header');
    
    sectionElement.appendChild(eventHeader);
    
    let h1Element = document.createElement('h1');
    h1Element.innerHTML = InputEventName; /*  */
    eventHeader.appendChild(h1Element);
    
    let divELementImgGroup = document.createElement('div')
    divELementImgGroup.setAttribute('class', 'img-group')
    let imgEdit = document.createElement('img')
    imgEdit.setAttribute('src', './assets/edit.svg')
    let imgTrash = document.createElement('img')
    imgTrash.setAttribute('src', './assets/trash-2.svg')
    
    divELementImgGroup.appendChild(imgEdit);
    divELementImgGroup.appendChild(imgTrash);
    eventHeader.appendChild(divELementImgGroup);    
    
    let divEventSection = document.createElement('div')
    divEventSection.setAttribute('class', 'event-section');

    let divEventInfo = document.createElement('div')
    divEventInfo.setAttribute('class', 'event-info')

    let divDateInfo = document.createElement('div')
    divDateInfo.setAttribute('class', 'date-info')
    
    let strongElement = document.createElement('strong');
    let pElement = document.createElement('p');
    strongElement.innerHTML = 'Data do evento';
    pElement.innerHTML = InputEventDate;
    divDateInfo.appendChild(strongElement)
    divDateInfo.appendChild(pElement)
    divEventInfo.appendChild(divDateInfo)


    let divTimeInfo = document.createElement('div')
    divTimeInfo.setAttribute('class', 'time-info')

    let strongElement1 = document.createElement('strong');
    let pElement1 = document.createElement('p');
    
    strongElement1.innerHTML = 'As:';
    pElement1.innerHTML = InputEventTime;
    
    divTimeInfo.appendChild(strongElement1)
    divTimeInfo.appendChild(pElement1)
    
    divEventInfo.appendChild(divTimeInfo);

    let btn = document.createElement('button');
    btn.innerHTML = 'Start';
    btn.setAttribute('class', 'start-btn');
    btn.setAttribute('id', `${idontknow[id].event}`);
    btn.setAttribute('onclick', `countDown(${id})`)
    
    let divCountDownTimer = document.createElement('div')
    divCountDownTimer.setAttribute('class', 'countdown-timer');
    
    let tableElement = document.createElement('table');
    let tableRowData = document.createElement('tr');
    let tableRowtime = document.createElement('tr');

    let thDia = document.createElement('th')
    thDia.innerHTML = 'Dia'
    tableRowData.appendChild(thDia)
    let thHora = document.createElement('th')
    thHora.innerHTML = 'Hora'
    tableRowData.appendChild(thHora)
    let thMin = document.createElement('th')
    thMin.innerHTML = 'Min'
    tableRowData.appendChild(thMin)
    let thSec = document.createElement('th')
    thSec.innerHTML = 'Sec'
    tableRowData.appendChild(thSec)
    
    tableElement.appendChild(tableRowData)

    let tdDiaValue = document.createElement('td');
    tdDiaValue.innerHTML ='00'
    tableRowtime.appendChild(tdDiaValue)
    let tdHoraValue = document.createElement('td');
    tdHoraValue.innerHTML ='00'
    tableRowtime.appendChild(tdHoraValue)
    let tdMinValue = document.createElement('td');
    tdMinValue.innerHTML ='00'
    tableRowtime.appendChild(tdMinValue)
    let tdSecValue = document.createElement('td');
    tdSecValue.innerHTML ='00'
    tableRowtime.appendChild(tdSecValue)
    tableElement.appendChild(tableRowtime);
    divCountDownTimer.appendChild(tableElement);

    divEventSection.appendChild(divEventInfo)
    divEventSection.appendChild(btn)
    divEventSection.appendChild(divCountDownTimer);

    sectionElement.appendChild(divEventSection)
    document.getElementById('main-container').appendChild(sectionElement);
}

function countDown(passedId) {  
    
    let coutdownelemtn = document.querySelector(`button#${idontknow[id].event}`).nextElementSibling.children[0].childNodes[1].childNodes;
    
    /* console.log(coutdownelemtn) */
    if (!toggleBtn) {
        document.querySelector(`button#${idontknow[id].event}`).innerHTML = 'Stop';
        toggleBtn = true;
        
        let [year, month, day] = idontknow[passedId].date.split('-');
        let [hour, minute] = idontknow[passedId].time.split(':');
        
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
            
            coutdownelemtn[0].innerHTML = dia
            coutdownelemtn[1].innerHTML = hora
            coutdownelemtn[2].innerHTML = minutos
            coutdownelemtn[3].innerHTML = segundos
        }
        intervalId = setInterval(renderTime, 1000);

    } else {
        document.querySelector(`button#${idontknow[passedId].event}`).innerHTML = 'Start';
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

function validateEmptyDate (xdate, xtime) {
    if(xdate == ''){
        alert('Empty date');
        return true;
    } 

    xtime = validateTime(xtime)
    
    let [y, mth, d] = xdate.split('-');
    let [h, min] = xtime.split(':');
    mth-=1;
        
    let current = new Date().getTime();
    let event = new Date(y, mth, d, h, min).getTime();
    
    check = event - current;
    /* console.log(check)
    console.log(typeof(check)) */
    if(check <= 0 || isNaN(check)) {
        alert('Data ou Hora Inválida!');
        return true
    } 
    else return false
}

function validateTime(InputEventTime){        
    if(InputEventTime === ''){        
        return InputEventTime = "00:00";        
    }else{
        return InputEventTime;
    }
}
