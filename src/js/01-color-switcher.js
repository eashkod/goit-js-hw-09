const bodyСolorSwitcher = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

stopBtn.setAttribute('disabled', '');

startBtn.addEventListener('click', element => {
  element.target.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');

  timerId = setInterval(() => {
    bodyСolorSwitcher.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', element => {
  element.target.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');

  clearInterval(timerId);
});
