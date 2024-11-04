const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const gifSection = document.querySelector(".gifSection");

searchButton.addEventListener("click", () => {
  gifSection.innerHTML = "";
  const urls = fetch(`http://localhost:3000/${searchInput.value}`)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((element) => {
        const gifCard = document.createElement("div");
        gifCard.innerHTML = `<img src=${element} >`;
        gifSection.appendChild(gifCard);
      })
    )
    .catch((error) => console.log(error));
});
