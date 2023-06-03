const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./01-node-tutorial/test-app/index.html");
const homeStyles = readFileSync("./01-node-tutorial/test-app/style.css");
const homeLogic = readFileSync("./01-node-tutorial/test-app/script.js");
const aboutPage = readFileSync("./01-node-tutorial/test-app/about.html");
const errorPage = readFileSync("./01-node-tutorial/test-app/error.html");

const server = http.createServer((req, res) => {
    console.log("user hit the server");
    console.log(req.url);
    console.log(req.method);

    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(homePage);
        res.end();
    } else if (req.url === "/style.css") {
        res.writeHead(200, { "content-type": "text/css" });
        res.write(homeStyles);
        res.end();
    } else if (req.url === "/script.js") {
        res.writeHead(200, { "content-type": "text/javascript" });
        res.write(homeLogic);
        res.end();
    } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(aboutPage);
        res.end();
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write(errorPage);
        res.end();
    }
});

server.listen(3000);
