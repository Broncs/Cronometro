const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");

const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-reset");

let min = 00;
let sec = 00;
let interval;

// start buttton
btnStart.addEventListener("click", startTime);

// reset button
btnReset.addEventListener("click", resetTimer);

// stop button
btnStop.addEventListener("click", stopTimer);

function startTime() {
  interval = setInterval(() => {
    if (sec < 9) {
      sec += 01;
      seconds.innerHTML = "0" + sec;
    }
    if (sec >= 9) {
      sec += 01;
      seconds.innerHTML = sec;
    }
    if (sec === 99) {
      sec = 0;
      min += 1;
      if (min <= 9) {
        minutes.innerHTML = "0" + min;
      } else {
        minutes.innerHTML = min;
      }
    }
  }, 10);
}

function resetTimer() {
  clearInterval(interval);
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  min = 00;
  sec = 00;
}

function stopTimer() {
  clearInterval(interval);
}
