const express = require("express");
const { people } = require("./data");

const app = express();
app.use(express.static("./02-express-tutorial/methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`<h1>Home</h1>`);
});

app.get("/api/people", (req, res) => {
    res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
    const { login } = req.body;
    if (login) {
        people.push({ id: Math.random(), name: login });
        return res.json({ success: true, data: people });
    }
    return res.status(400).json({ success: false, msg: "Login is empty" });
});

app.get("*", (req, res) => {
    res.send("<h1>Not found</h1>");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
