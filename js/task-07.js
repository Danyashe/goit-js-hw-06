const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", (e) => {
    let valueSize = e.target.value;
    textRef.style.fontSize = `${valueSize}px`;
});
