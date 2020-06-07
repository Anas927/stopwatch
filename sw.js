window.onload = function() {
    var seconds = 00;
    var tens = 00;
    var ats = document.getElementById("tens");
    var as = document.getElementById("seconds");
    var buttonstart = document.getElementById('start');
    var buttonstop = document.getElementById('stop');
    var buttonreset = document.getElementById('reset');
    var Interval;

    buttonstart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    buttonstop.onclick = function() {
        clearInterval(Interval);
    }
    buttonreset.onclick = function() {
        clearInterval(Interval);
        tens = 00;
        seconds = 00;
        ats.innerHTML = tens;
        as.innerHTML = seconds;
    }

    function startTimer() {
        tens++;
        if (tens < 9) {
            ats.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            ats.innerHTML = tens;
        }
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            as.innerHTML = "0" + seconds;
            tens = 0;
            ats.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            as.innerHTML = seconds;
        }
    }

}