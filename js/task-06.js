const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener('blur', (e) => {

    if (Number(e.target.value.length) === Number(inputRef.dataset.length)) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
}
})