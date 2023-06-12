const express = require("express");
const { people } = require("./data");

const app = express();
app.use(express.static("./02-express-tutorial/methods-public"));

app.post("/login", (req, res) => {
    console.log(req.body);
    const { login } = req.body;
    if (login === "Denis" || login === "Mark") {
        return res.send(`<h1>Home. Hi, ${login}</h1>`);
    }
    return res.status(401).send("<h1>Authorization Required</h1>");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
