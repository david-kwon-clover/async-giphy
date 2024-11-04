const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const gifSection = document.querySelector(".gifSection");
const errorMessage = document.querySelector(".errorMessage")

searchButton.addEventListener("click", () => {
  gifSection.innerHTML = "";
  const urls = fetch(`http://localhost:3000/${searchInput.value}`)
    .then((response) => {
      if(!response.ok) {
        throw new Error("Sorry failed to fetch data..");
      }
      return response.json();
    })
    .then((data) =>
      data.forEach((element) => {
        const gifCard = document.createElement("div");
        gifCard.innerHTML = `<img src=${element} >`;
        gifSection.appendChild(gifCard);
      })
    )
    .catch((error) => errorMessage.innerHTML = error.message);
});
