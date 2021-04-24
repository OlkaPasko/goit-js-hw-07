const liItemsEl = document.querySelectorAll('.item');
console.log(`В списке ${liItemsEl.length} категории.`);

liItemsEl.forEach(item => {
    const h2El = item.querySelector('h2');
    const liItemsEl = item.querySelectorAll('li');
    console.log(`Категория: ${h2El.textContent}`);
    console.log(`Количество элементов: ${liItemsEl.length}`);
});