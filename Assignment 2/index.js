const express = require("express");
const app = express();
const path = require("path");

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(HTTP_PORT, () => {
  console.log("Express http server listening on", HTTP_PORT);
});