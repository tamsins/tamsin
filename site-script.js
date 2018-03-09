console.log('tamsin!');

var firstBox = document.getElementById('first-box');
console.log(firstBox);

firstBox.innerHTML='tamsin'

firstBox.style.backgroundColor='#99cc00'

var secondBox = document.getElementById('second-box');
console.log(secondBox);

secondBox.innerHTML='Tamsin'

secondBox.style.backgroundColor='#cc0000'

var thirdBox = document.getElementById('third-box');
console.log(thirdBox);

thirdBox.innerHTML='tAmsin'

thirdBox.style.backgroundColor='#ffcc00'


function testFunction() {
    console.log('tamsin');
    firstBox.style.backgroundColor='#cc0000'
    firstBox.innerHTML='Tamsin'
}

firstBox.addEventListener('click', testFunction);

function onMouseOver() {
    secondBox.style.backgroundColor = '#ffcc00';
    secondBox.innerHTML='tAmsin'

}

secondBox.addEventListener('mouseover', onMouseOver);

function onMouseOut() {
    secondBox.style.backgroundColor = '#cc0000';
    secondBox.innerHTML='Tamsin'
}

secondBox.addEventListener('mouseout', onMouseOut);




var listOfItems = document.getElementsByClassName('item');
console.log(listOfItems);

function crossOutItem() {
    //console.log('cross this out');
    //debugger;
    var item = event.target;

    if( item.style.textDecoration == 'line-through'){
        item.style.textDecoration = 'none';
    } else {
        item.style.textDecoration = 'line-through';
    }
}


for(var count=0 ; count < listOfItems.length ; count++) {
    console.log('loop ran', count);
    var item = listOfItems[count];
    console.log(item);
    item.addEventListener('click', crossOutItem);
}

var timeBetweenUpdates = 10000;

var hoursBox = document.getElementById('hours');
var minutesBox = document.getElementById('minutes');
var secondsBox = document.getElementById('seconds');


function displayTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hoursBox.innerHTML = hours;
    minutesBox.innerHTML = minutes;
    secondsBox.innerHTML = seconds;

    console.log('the time is...', date);
    console.log(hours, minutes, seconds);
}

var clockTimer = setInterval(displayTime, timeBetweenUpdates);

