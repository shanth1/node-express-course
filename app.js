const express = require("express");
const { products, people } = require("./data");

const app = express();

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
