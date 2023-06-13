const express = require("express");
const { products, people } = require("./data");
const morgan = require("morgan");

const app = express();
morgan("tiny");

// app.use([logger, authorize]);
app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.send(`<h1>Home</h1>`);
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
