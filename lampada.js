const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1;
}

function lamOn() {
    if( !isLampBroken() ){
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff(){
    if( !isLampBroken() ){
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg';
}



turnOn.addEventListener('click', lamOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lamOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);

