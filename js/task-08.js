const refs = {
    input : document.querySelector('input'),
    btnRender : document.querySelector('[data-action="render"]'),
    btnDestroy : document.querySelector('[data-action="destroy"]'),
    boxes : document.querySelector('#boxes'),
};

refs.btnRender.addEventListener('click', onBtnRenderClick);
refs.btnDestroy.addEventListener('click', onBtnDestroyClick);

function createBoxes(amount) {
    const childBoxes = [];
    let sizeSide = 30;
    const sizeStep = 10;

    if (boxes.lastChild) {
        sizeSide = parseInt(refs.boxes.lastChild.style.width) + sizeStep;
    }

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${sizeSide}px`;
        box.style.height = `${sizeSide}px`;
        box.style.border = '2px solid black';

        childBoxes.push(box);

        sizeSide += sizeStep;
    }
    refs.boxes.append(...childBoxes);
}

function onBtnRenderClick() {
    createBoxes(refs.input.value);
}

function onBtnDestroyClick() {
    refs.boxes.innerHTML = '';
}