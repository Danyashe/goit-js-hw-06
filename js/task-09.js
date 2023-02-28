function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const childBody = document.querySelector(".widget");
btnChangeColor.addEventListener('click', () => {
  spanRef.textContent = getRandomHexColor()
  childBody.parentNode.style.backgroundColor = getRandomHexColor()
})
