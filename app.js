const timer = document.querySelector(".timer");

let min = 0;
let sec = 0;

startTimer = () => {
  setInterval(function () {
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
    const timerCount = `${min < 10 ? "0" + min : min}:${
      sec < 10 ? "0" + sec : sec
    }`;
    timer.innerHTML = timerCount;
  }, 1000);
};
