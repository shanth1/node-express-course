const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Home");
        res.end();
    } else if (req.url === "/about") {
        res.end("about");
    } else {
        res.end(`
        <h1>Ops!</h1>
        <p>Page not found</p>
        <a href='/'>go back</a>
        `);
    }
});

server.listen(3000);
