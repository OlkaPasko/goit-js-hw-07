const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onKeyboardEvent);

function onKeyboardEvent(event) {
    outputName.textContent = event.currentTarget.value;
}
