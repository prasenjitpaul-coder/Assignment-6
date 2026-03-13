const http = require("http");
const fs = require("fs");
const path = require("path");


const server = http.createServer((req, res) => {

  let filePath;
  let statusCode = 200;


  if (req.url === "/" || req.url === "/home") {
    filePath = "home.html";

  } else if (req.url === "/about") {
    filePath = "about.html";

  } else if (req.url === "/contact") {
    filePath = "contact.html";

  } else if (req.url === "/style.css") {

    filePath = "style.css";

  } else {

    filePath = "404.html";
    statusCode = 404;
  }


  fs.readFile(path.join(__dirname, filePath), (err, data) => {

    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("Internal Server Error");
    }


    let contentType = "text/html";
    if (filePath.endsWith(".css")) {
      contentType = "text/css";
    }

    res.writeHead(statusCode, { "Content-Type": contentType });
    res.end(data);
  });

});


const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});