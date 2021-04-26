const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('keydown', onKeyboardEvent);

function onKeyboardEvent() {
    outputName.textContent = inputName.value;
}
