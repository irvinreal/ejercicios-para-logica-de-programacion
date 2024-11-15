import express from "express";
import generateRandomCountry from "./getRandomCountry.js";

const PORT = 7500;
const app = express();

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const country = generateRandomCountry();
  console.log(country);
  return res.status(200).json({ status: "Successfull", country });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
