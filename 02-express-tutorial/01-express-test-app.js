const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/about", (req, res) => {
    res.status(200).send("About page");
});

app.get("/html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./test.html"));
});

app.all("*", (req, res) => {
    res.status(200).send("Page not found");
});

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});
