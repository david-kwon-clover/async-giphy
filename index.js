const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");


searchButton.addEventListener("click", () => {
  const urls = fetch(`http://localhost:3000/${searchInput.value}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
});
