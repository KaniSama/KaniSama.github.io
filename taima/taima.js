//name = taima.js
var timerSetTimeButton = document.getElementById('timerSetTimeButton');
var timerResetButton = document.getElementById('timerResetButton');
var output = {
    hours: document.getElementById('timerHoursText'),
    minutes: document.getElementById('timerMinutesText'),
    seconds: document.getElementById('timerSecondsText')
}

timerSetTimeButton.addEventListener("click", timerStart);
timerResetButton.addEventListener("click", reset);

timerSet = false;

var time = {
    overall : 0,
    seconds : 0,
    minutes : 0,
    hours : 0
}



function timerStart() {
    
    time.hours = document.getElementById('hourSelector').value;
    time.minutes = document.getElementById('minuteSelector').value;
    time.seconds = document.getElementById('secondSelector').value;
    time.overall = convertTimeToSeconds(time.hours, time.minutes, time.seconds);

    interval = setInterval(timerTick, 1000);
    if (timerSet) {
        clearInterval(interval);
    }

    timerSet = !timerSet;
}

function timerTick() {
    time.overall -= 1;
    /*if (timerSet) {
        setTimeout(timerTick, 1000);
    }*/
    convertSecondsToTime(time, time.overall);
    outputs();
}

function convertSecondsToTime(timeobj, overtime) {
    timeobj.seconds = overtime % 60;
    timeobj.minutes = Math.floor(overtime / 60) % 60;
    timeobj.hours = Math.floor(overtime / 60 / 60);
}
function convertTimeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

function outputs() {
    output.hours.innerHTML = time.hours;
    output.minutes.innerHTML = time.minutes;
    output.seconds.innerHTML = time.seconds;
}

function reset() {
    location.reload();
}