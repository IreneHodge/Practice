//jshint esversion:6
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("Contact me at irenehodge90@gmail.com");
});

app.get("/about", (req, res) => {
  res.send("I'm Irene.");
});

app.listen(port, () => {
  console.log("You are connected");
});
