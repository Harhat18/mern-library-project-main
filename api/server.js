const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("hoşgeldiniz");
// });

// app.get("/haberler", (req, res) => {
//   res.send("<h1>Haberler1</h1>");
// });

app.listen(3000, () => {
  console.log("server çalıştı");
});
