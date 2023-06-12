const express = require("express");
const { people } = require("./data");

const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>Home</h1>`);
});

app.get("/api/people", (req, res) => {
    res.status(200).json({ success: true, data: people });
});

app.get("*", (req, res) => {
    res.send("<h1>Not found</h1>");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
