const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};
let idInterval;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.start.addEventListener('click', onChangeBgColor);
refs.stop.addEventListener('click', offChangeBgColor);

function onChangeBgColor() {
  console.log('onChangeBgColor');
  idInterval = setInterval(
    (document.body.style.backgroundColor = getRandomHexColor()),
    1000
  );
  //   document.body.style.backgroundColor = getRandomHexColor();
  // setInterval({body.bgColor.value = getRandomHexColor()},1000)
}

function offChangeBgColor() {
  clearInterval(idInterval);
  console.log('offChangeBgColor');
}
