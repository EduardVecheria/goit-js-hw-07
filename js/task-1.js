const categoriEl = document.querySelectorAll(`#categories .item`)
console.log(`Number of categories: ${categoriEl.length}`);
categoriEl.forEach(elements => {
    const title = elements.querySelector(`h2`).textContent;
    const number = elements.querySelectorAll(`ul li`).length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${number}`);
});
