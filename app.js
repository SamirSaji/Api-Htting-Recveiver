const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/", (req, res) => {
  let data = JSON.stringify(req.body);
  let date = new Date().getTime();
  console.log(req.body);
  fs.writeFile(`./randomDataFiles/${date}.txt`, data, err => {
    if (err) throw err;

    console.log("The file has been saved!");
  });

  res.send("receiver page");
});

app.listen(5000);
console.log("running receiver port 5000");
