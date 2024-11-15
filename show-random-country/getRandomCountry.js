import { getNameList } from "country-list";
const countriesList = getNameList();
// console.log(countriesList);
const countriesNameList = [];
let countryListLgt = 0;
for (const country in countriesList) {
  countryListLgt++;
  countriesNameList.push(country);
}

export default function generateRandomCountry() {
  const randomNumber = Math.floor(Math.random() * countriesNameList.length);
  const countryFixed = `${countriesNameList[randomNumber]
    .charAt(0)
    .toUpperCase()}${countriesNameList[randomNumber].substring(1)}`;
  return countryFixed;
}

// module.exports = generateRandomCountry;
