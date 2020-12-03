const express = require("express");
const app = express();
const port = 3000;
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
