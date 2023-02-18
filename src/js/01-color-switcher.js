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
  refs.start.disabled = true; //disabled button start
  idInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeBgColor() {
  refs.start.disabled = false; //enabled button start
  clearInterval(idInterval);
}
