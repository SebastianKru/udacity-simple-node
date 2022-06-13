const express = require("express");
const app = express();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule! v2!');
    await sleep(5000);
  }
}

main();

app.listen(8080, () => {
  console.log("Server running on port 8080");
});



app.get("sumo/", (req, res, next) => {
  res.status(200).send("Sumo fighters here!");
}); 

app.get("health/", (req, res, next) => {
  res.status(200).send("Healthy");
}); 