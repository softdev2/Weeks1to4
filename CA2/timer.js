var initialTime = Date.now();

function checkTime(){
    var timeDifference = Date.now() - initialTime;
    var formatted = convertTime(timeDifference);
    document.getElementById('time').innerHTML = '' + formatted;
}

function convertTime(miliseconds) {
    var totalSeconds = Math.floor(miliseconds/1000);
    var minutes = Math.floor(totalSeconds/60);
    var seconds = totalSeconds - minutes * 60;
    return minutes + ':' + seconds;
}
window.setInterval(checkTime, 100);