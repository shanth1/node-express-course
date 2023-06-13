const express = require("express");
const { people } = require("./data");

const app = express();
app.use(express.static("./02-express-tutorial/methods-public"));

//parse json
app.use(express.json());

app.post("/api/people", (req, res) => {
    const { login } = req.body;
    if (login) {
        people.push({ id: Math.random(), name: login });
        return res.json({ success: true, data: people });
    }
    return res.status(400).json({ success: false, msg: "Login is empty" });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
