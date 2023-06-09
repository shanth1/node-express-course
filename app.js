const express = require("express");
const { products, people } = require("./data");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1><a href='/api/products'>products</a>");
});

app.get("/api/people", (req, res) => {
    const { search, limit } = req.query;

    let sortedPeople = [...people];
    if (search) {
        sortedPeople = people.filter((person) =>
            person.name.startsWith(search),
        );
    }
    if (limit) {
        sortedPeople = people.slice(0, Number(limit));
    }
    if (sortedPeople.length < 1) {
        return res.json(people);
    }
    return res.json(sortedPeople);
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
