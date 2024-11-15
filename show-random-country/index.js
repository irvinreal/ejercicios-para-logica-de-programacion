const randomCountryBtn = document.getElementById("random-country-btn");
const randomCountrySelected = document.getElementById("random-country-selected");

async function randomCountryBtnHandler() {
  fetch("http://localhost:7500/")
    .then((res) => res.json())
    .then((randomCountry) => {
      randomCountrySelected.innerHTML = randomCountry.country;
      return randomCountry;
    });
}

randomCountryBtn.addEventListener("click", randomCountryBtnHandler);
