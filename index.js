const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

searchInput.addEventListener("input", () => {
    console.log("typing");
})

searchButton.addEventListener("click", () => {
    console.log("button pressed");
})