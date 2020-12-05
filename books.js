var express = require("express");
var router = express.Router();

router.get("/:bookname", (req, res) => {
  res.send(`<h1>${req.params.bookname}</h1>`);
});

module.exports = router;
