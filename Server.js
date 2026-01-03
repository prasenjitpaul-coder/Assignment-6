const http = require('http');
const fs = require("fs");
const path = require("path")


function server(req, res) {
    let filePath = "";
    let statusCode = 200;
if (req.url === "/submitted-data" && req.method === "POST") {
            res.writeHead(302,{Location: '/'});
           
             return res.end();
        }
    
    if (req.url === "/style.css") {
        fs.readFile(path.join(__dirname, "style.css"), (err, data) => {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });
        return;
    }



    if (req.url === "/" || req.url === "/home") {
        filePath = "home.html";

    } else if (req.url === "/about") {
        filePath = "about.html"
    } else if (req.url === "/contact") {
        filePath = "contact.html"
     
       
    } 
    else {
        filePath = "404.html";
        statusCode = 404;

    }
    fs.readFile(path.join(__dirname, filePath), (err, data) => {
        if (err) {
            res.writeHead(500, { "content-type": "text/plain" });
            res.end("Server-Error");

        } else {
            res.writeHead(statusCode, { "content-type": "text/html" });
            res.end(data);
        }
    });


}




let port = 3000;
const app = http.createServer(server);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
