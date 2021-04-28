const inputSlider = document.querySelector('#font-size-control');
const txtTarget = document.querySelector('#text');

txtTarget.style.fontSize = `${inputSlider.value}px`;

inputSlider.addEventListener('input', onInputSlider);

function onInputSlider(event) {
    txtTarget.style.fontSize = `${event.currentTarget.value}px`;
}

