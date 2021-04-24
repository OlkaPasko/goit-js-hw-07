import ingredients from './data/ingredients.js';

const makeLiIngredients = ingredients => {
    return ingredients.map(ingredient => {
        const liEl = document.createElement('li');
        liEl.textContent = ingredient;

        return liEl;
    });
};

const liElements = makeLiIngredients(ingredients);

const ulEl = document.querySelector('#ingredients');
ulEl.append(...liElements);
