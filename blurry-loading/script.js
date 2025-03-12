const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let load = 0;

const interval = setInterval(blurring, 20);

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function blurring() {
  load++;
  if (load >= 100) {
    clearInterval(interval);
  }
  //   console.log(load);
  loadingText.innerHTML = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
