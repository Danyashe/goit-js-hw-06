let counterEl = document.querySelector("#value");
let counterValue = 0
const buttonDecrement = document.querySelectorAll("button")[0];
const buttonIncrement = document.querySelectorAll("button")[1];
buttonDecrement.addEventListener('click', () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
    })
buttonIncrement.addEventListener('click', () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
    })