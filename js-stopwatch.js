const rightClock = document.querySelector(".stopwatch_body"),
    clockStop = rightClock.querySelector(".stopwatch"),
    clockText = clockStop.querySelector("#stopClock"),
    btn_startS = document.querySelector("#startS"),
    btn_stopS = document.querySelector("#stopS"),
    btn_resetS = document.querySelector("#resetS")
;

let totalTime = 0;
let minute = 0;
let second = 0;

function showClockS (total) {
    let min = parseInt(total / 60);
    let sec = total % 60;    
    clockText.innerText = `${
        min < 10 ? `0${min}` : min}:${
        sec < 10 ? `0${sec}` : sec
    }`;    
}

var clockRefresh = null;

btn_startS.addEventListener("click", () => {
    clockRefresh = setInterval(() => {
        totalTime = totalTime + 1;
        showClockS(totalTime);
    }, 1000);
});

btn_stopS.addEventListener("click", () => {
    clearInterval(clockRefresh);
});

btn_resetS.addEventListener("click", () => {
    if (clockRefresh != null){
        clearInterval(clockRefresh);
        totalTime = 0;
        clockText.innerText = "00:00";
    } else {
        totalTime = 0;
        clockText.innerText = "00:00";
    }
});