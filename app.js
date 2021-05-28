function clock() {
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();
    
    if (hours < 12) {
        document.getElementById('am-pm').innerHTML = 'AM'
    }else {
        document.getElementById('am-pm').innerHTML = 'PM'
    }
    
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ':' + minutes;
    document.getElementById('second').innerHTML = ':' + seconds;
    
    
}

setInterval(clock, 100);

// widget1 === widget2
var audio = new Audio('Red Dead Redemption 2 LoFi.mp3');
audio.play();
