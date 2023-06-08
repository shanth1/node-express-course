const express = require("express");
const { product, people } = require("../data");

const app = express();

app.get("/", (req, res) => {
    res.json(product);
    res.json(people);
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
