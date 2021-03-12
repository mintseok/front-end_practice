const leftClock = document.querySelector(".timer_body"),
    clockTimer = leftClock.querySelector(".timer"),
    clockTitle = clockTimer.querySelector("#timerClock"),
    btn_add10s = document.querySelector("#add10s"),
    btn_add30s = document.querySelector("#add30s"),
    btn_add1 = document.querySelector("#add1"),
    btn_add5 = document.querySelector("#add5"),
    btn_add10 = document.querySelector("#add10"),
    btn_start = document.querySelector("#start"),
    btn_stop = document.querySelector("#stop"),
    btn_reset = document.querySelector("#reset")
    ;

let totalSeconds = 0;
let min = 0;
let sec = 0;

function showClock (total) {
    let min = parseInt(total / 60);
    let sec = total % 60;    
    clockTitle.innerText = `${
        min < 10 ? `0${min}` : min}:${
        sec < 10 ? `0${sec}` : sec
    }`;    
}

btn_add10s.addEventListener("click", () => {
    totalSeconds += 10;    
    showClock (totalSeconds);
});

btn_add30s.addEventListener("click", () => {
    totalSeconds += 30;    
    showClock (totalSeconds);
});

btn_add1.addEventListener("click", () => {
    totalSeconds += 60;    
    showClock (totalSeconds);
});
btn_add5.addEventListener("click", () => {
    totalSeconds += 300;
    showClock (totalSeconds);
});
btn_add10.addEventListener("click", () => {
    totalSeconds += 600;
    showClock (totalSeconds);
});

var clockInterval = null;

btn_start.addEventListener("click", () => {
    clockInterval = setInterval(() => {
        totalSeconds = totalSeconds - 1;
        showClock(totalSeconds);
        if (totalSeconds <= 0) {
            totalSeconds = 0;
            clockTitle.innerText = "00:00";
        }
    }, 1000);
    btn_start.hidden = true;
});

btn_stop.addEventListener("click", () => {
    clearInterval(clockInterval);
    btn_start.hidden = false;
});

btn_reset.addEventListener("click", () => {
    if (clockInterval != null){
        clearInterval(clockInterval);
        totalSeconds = 0;
        clockTitle.innerText = "00:00";
    } else {
        totalSeconds = 0;
        clockTitle.innerText = "00:00";
    }
    btn_start.hidden = false;
});