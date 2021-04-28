const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onKeyboardEvent);

function onKeyboardEvent() {
    outputName.textContent = inputName.value;
}
