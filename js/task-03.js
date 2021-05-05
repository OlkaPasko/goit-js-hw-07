import images from './data/images.js';

// Используй массив объектов images
// для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

const makeLiElements = images => {
    return images.map(({ url, alt }) => {
        return `<li><img src='${url}' alt='${alt}'></li>`;
        
        // const liEl = document.createElement('li');
        // const imgEl = document.createElement('img');
        
        // imgEl.src = url;
        // imgEl.alt = alt;

        // liEl.append(imgEl);

        // return liEl;
    });
};

const ulEl = document.querySelector('#gallery');

const liElements = makeLiElements(images);
// const liElementsToString = liElements.map(liEl => liEl.outerHTML);
const liElementsToString = liElements.join();

ulEl.insertAdjacentHTML('afterbegin', liElementsToString);


