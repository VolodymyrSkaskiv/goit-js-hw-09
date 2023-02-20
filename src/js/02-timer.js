import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
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
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;

    const time = getTimeComponents(0);
    this.onTick(time);
  }
}

flatpickr('input#datetime-picker', {});
refs.input.addEventListener('input', inputDateTime);

function inputDateTime(date) {}
