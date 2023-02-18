const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};
let idInterval;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.start.addEventListener('click', startChangeBgColor);
refs.stop.addEventListener('click', stopChangeBgColor);

function startChangeBgColor() {
  console.log('onChangeBgColor');
  refs.start.disabled = true;
  idInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeBgColor() {
  refs.start.disabled = false;

  clearInterval(idInterval);
  console.log('offChangeBgColor');
}
