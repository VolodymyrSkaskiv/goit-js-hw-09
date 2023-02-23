import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// import { Block } from 'notiflix/build/notiflix-block-aio';

const refs = {
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
  }

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      if (deltaTime < 1000) {
        timer.stop();
      }

      const time = convertMs(deltaTime);
      this.onTick(time);
      deltaTime -= 1000; //Зменшуємо час на 1с
    }, 1000);
  }

  stop() {
    this.isActive = false;
    Notiflix.Notify.success('Час вийшов');
    clearInterval(this.intervalId);
  }
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

let deltaTime;

const newTime = flatpickr('input#datetime-picker', options);
console.log(newTime);
refs.input.addEventListener('input', inputDateTime);
refs.start.addEventListener('click', () => {
  timer.start();
});

refs.start.disabled = true; //робимо кнопку неактивною

function inputDateTime() {
  const currentTime = Date.now(); //Поточний час в мілісекундах
  const startTime = new Date(refs.input.value).getTime(); //вибраний час переводимо в мілісекунди

  if (startTime < currentTime) {
    Notiflix.Notify.failure('Please choose a date in the future');

    return;
  }
  refs.start.disabled = false;

  return (deltaTime = startTime - currentTime);
}
const timer = new Timer({
  onTick: updateClockface,
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function updateClockface({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}
