const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  console.log("middleware running one more time");
  next();
});

app.get("/", function (req, res) {
  res.send("home page");
});

app.get("/profile", function (req, res) {
  res.send("profile page");
});

app.use((err, res, req, next) => {
  console.error(err.stack);
  res.status(500).send("something went wrong");
});

app.listen(3000);
