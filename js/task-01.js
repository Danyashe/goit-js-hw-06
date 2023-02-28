const categoriesRef = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}
    Elements: ${category.lastElementChild.children.length}`)
})