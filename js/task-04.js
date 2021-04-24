const btnInc = document.querySelector('[data-action="increment"]');
const btnDec = document.querySelector('[data-action="decrement"]');
const lblTxt = document.querySelector('#value');

btnInc.addEventListener('click', onIncBtnClick);
btnDec.addEventListener('click', onDecBtnClick);

let counterValue = parseInt(lblTxt.textContent);

function onIncBtnClick() {
    counterValue += 1;
    refreshVal();
}

function onDecBtnClick() {
    counterValue -= 1;
    refreshVal();
}

function refreshVal() {
    lblTxt.textContent = counterValue;
}