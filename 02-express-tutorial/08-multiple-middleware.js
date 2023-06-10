const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");
const { products, people } = require("./data");

const app = express();

app.use([logger, authorize]);

app.get("/", (req, res) => {
    res.send(`<h1>Home. Hi, ${req.user.name}</h1>`);
});

app.get("/about", (req, res) => {
    res.send("<h1>About</h1>");
});

app.get("/contacts", (req, res) => {
    res.send("<h1>Contacts</h1>");
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/people", (req, res) => {
    res.json(people);
});

app.get("*", (req, res) => {
    res.send("<h1>Not found</h1>");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
