const express = require("express");
const { people } = require("./data");

const app = express();
app.use(express.static("./02-express-tutorial/methods-public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send(`<h1>Home</h1>`);
});

app.get("/api/people", (req, res) => {
    res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
    console.log(req.body);
    const { login } = req.body;
    if (login === "Denis" || login === "Mark") {
        return res.send(`<h1>Home. Hi, ${login}</h1>`);
    }
    return res.status(401).send("<h1>Authorization Required</h1>");
});

app.get("*", (req, res) => {
    res.send("<h1>Not found</h1>");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
