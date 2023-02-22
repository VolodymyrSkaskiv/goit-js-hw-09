const refs = {
  submit: document.querySelector('button'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};

refs.submit.addEventListener('submit', createPromise);
refs.delay.addEventListener('input');
refs.step.addEventListener('input');
refs.amount.addEventListener('input');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Notiflix.Notify.success('Час вийшов');
  } else {
    // Reject
    Notiflix.Notify.failure('Час вийшов');
  }
}
