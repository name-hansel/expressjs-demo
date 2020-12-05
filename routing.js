const express = require("express");
const app = express();
var books = require("./books");
const port = 3000;

app.use("/books", books);

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/product/:productID", (req, res) => {
  res.send(req.params);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
