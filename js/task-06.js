const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const valTarget = parseInt(inputField.attributes['data-length'].value);
    const valCurrent = event.currentTarget.value.length;

    if (valTarget === valCurrent) {
        removeAddCl('invalid', 'valid');
    } else {
        removeAddCl('valid', 'invalid');
    }
}

function removeAddCl (rmv, add) {
    inputField.classList.remove(rmv);
    inputField.classList.add(add);
}