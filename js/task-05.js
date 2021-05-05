const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onKeyboardEvent);

function onKeyboardEvent(event) {
    const val = event.currentTarget.value;

    outputName.textContent = val ? val : 'незнакомец';
}
