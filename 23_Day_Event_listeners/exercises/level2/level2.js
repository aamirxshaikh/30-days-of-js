// Generating the keyboard code code using even listener.

const keyName = document.querySelector('.key-name');
const pressAnyKey = document.getElementsByTagName('h1')[0];
const youPressed = document.querySelector('.you-pressed');
const keyCodeEl = document.querySelector('.key-code');

document.body.addEventListener('keypress', handleKeyPress);

function handleKeyPress(e) {
  const keyCode = e.keyCode;

  const key = e.key;
  const span = document.createElement('span');
  span.textContent = key;
  span.classList.add('green');
  keyCodeEl.classList.add('green');

  if (key || keyCode) {
    pressAnyKey.innerHTML = '';
    youPressed.textContent = `You pressed `;
    youPressed.appendChild(span);
    keyCodeEl.textContent = keyCode;
  }
}
