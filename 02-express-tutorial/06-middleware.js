const express = require("express");
const { products, people } = require("./data");

const app = express();

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
};

app.get("/", logger, (req, res) => {
    res.send("<h1>Home</h1>");
});

app.get("/about", logger, (req, res) => {
    res.send("<h1>About</h1>");
});

app.get("/contacts", logger, (req, res) => {
    res.send("<h1>Contacts</h1>");
});

app.get("*", logger, (req, res) => {
    res.send("<h1>Not found</h1>");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
