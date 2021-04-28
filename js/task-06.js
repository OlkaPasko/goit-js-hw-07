const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const valTarget = parseInt(inputField.attributes['data-length'].value);
    const valCurrent = event.currentTarget.value.length;

    if (valTarget === valCurrent) {
        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
    } else {
        inputField.classList.remove('valid');
        inputField.classList.add('invalid');
    }
}