const express = require("express");
const peopleRouter = require("./02-express-tutorial/routes/people");
const loginRouter = require("./02-express-tutorial/routes/auth");

const app = express();
app.use(express.static("./02-express-tutorial/methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.use("/api/people", peopleRouter);
app.use("/login", loginRouter);

app.get("/", (req, res) => {
    res.send(`<h1>Home</h1>`);
});

app.get("*", (req, res) => {
    res.send("<h1>Not found</h1>");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
