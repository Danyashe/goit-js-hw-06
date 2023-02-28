const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients')
ingredients.forEach(ingredient => {
  const item = document.createElement("li");
  const title = document.createElement("h2");
  title.textContent = `${ingredient}`;
  item.append(title);
  item.classList = "item";
  listRef.append(item)
});
console.log(listRef)
