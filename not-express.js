var http = require("http");
http
  .createServer(function (req, res) {
    res.write("Hello World!");
    res.end();
  })
  .listen(3000, function () {
    console.log("Server at 3000");
  });
