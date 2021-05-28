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
// var audio = new Audio('Red Dead Redemption 2 LoFi.mp3');
// audio.play();


    var widgetIframe = document.getElementById("sc-widget"),
        widget = SC.Widget(widgetIframe);

    widget.bind(SC.Widget.Events.READY, function () {
        widget.seekTo(10000);
        widget.play();
        widget.bind(SC.Widget.Events.PLAY, function () {

        });
        
        widget.bind(SC.Widget.Events.FINISH, function () {
//             forwardSwipe();
        });
        // get current level of volume
        widget.getVolume(function (volume) {

        });
        // set new volume level
        widget.setVolume(50);
        // get the value of the current position     
    });

    document.getElementById("toggle-play").addEventListener("click", function () {
        widget.getCurrentSound(function (currentSound) {
            var songName = document.getElementById("song-name");
            widget.isPaused(function (response) {
                if (response === true) {
                    songName.textContent = "Paused: " + currentSound.title;
                } else {
                    songName.textContent = "Streaming: " + currentSound.title;
                }
            });

        });

        var state = this.className;
        if (state === "fa fa-play") {
            widget.play();
            this.className = "fa fa-pause";
        } else {
            widget.pause();
            this.className = "fa fa-play";
        }
    });

//     document.getElementById("volume-icon").addEventListener("click", function () {
//         var mute = 0;
//         var volume = document.getElementById("volume");
//         var volumeNum = document.getElementById("volume-number");
//         var volumeIcon = document.getElementById("volume-icon");

//         if (volume.value > 0) {
//             volume.value = mute;
//             volumeNum.textContent = volume.value;
//             widget.setVolume(volume.value);
//             volumeIcon.className = "volume-icon low";
//         } else if (volume.value < 1) {
//             volume.value = 50;
//             volumeNum.textContent = volume.value;
//             widget.setVolume(volume.value);
//             volumeIcon.className = "volume-icon med";
//         }
//     });

//     document.getElementById("volume").addEventListener("mousemove", function () {
//         var volumeNum = document.getElementById("volume-number");
//         var volumeIcon = document.getElementById("volume-icon");
//         volumeNum.textContent = volume.value;
//         widget.setVolume(volume.value);

//         if (volume.value < 1) {
//             volumeIcon.className = "volume-icon low";
//         } else if (volume.value < 51) {
//             volumeIcon.className = "volume-icon med";
//         } else {
//             volumeIcon.className = "volume-icon high";
//         }

//     });
    
//     document.getElementById("volume").addEventListener("touchmove", function() {
//         var volumeNum = document.getElementById("volume-number");
//         var volumeIcon = document.getElementById("volume-icon");
//         volumeNum.textContent = volume.value;
//         widget.setVolume(volume.value);

//         if (volume.value < 1) {
//             volumeIcon.className = "volume-icon low";
//         } else if (volume.value < 51) {
//             volumeIcon.className = "volume-icon med";
//         } else {
//             volumeIcon.className = "volume-icon high";
//         }

//     });

    document.getElementById("previous-button").addEventListener("click", function() {
        widget.prev();
        widget.getCurrentSound(function (currentSound) {
            var songName = document.getElementById("song-name");
            var togglePlay = document.getElementById("toggle-play");
            widget.isPaused(function (response) {
                if (response === true) {
                    songName.textContent = "Paused: " + currentSound.title;
                    togglePlay.className = "fa fa-play";
                } else {
                    songName.textContent = "Streaming: " + currentSound.title;
                    togglePlay.className = "fa fa-pause";
                }
            });          
        });
    });

    document.getElementById("next-button").addEventListener("click", function () {
        widget.next();
        widget.getCurrentSound(function (currentSound) {
            var songName = document.getElementById("song-name");
            var togglePlay = document.getElementById("toggle-play");

            widget.isPaused(function (response) {
                if (response === true) {
                    songName.textContent = "Paused: " + currentSound.title;
                    togglePlay.className = "toggle-play play"
                } else {
                    songName.textContent = "Streaming: " + currentSound.title;
                    togglePlay.className = "toggle-play pause"
                }
            });
        });
    });
