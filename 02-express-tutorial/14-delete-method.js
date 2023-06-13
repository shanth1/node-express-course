const express = require("express");
const { people } = require("./data");

const app = express();
app.use(express.static("./02-express-tutorial/methods-public"));

app.delete("/api/people/:id", (req, res) => {
    const { id } = req.params;

    const personIndex = people.findIndex((person) => person.id === Number(id));
    const selectedPerson = people[personIndex];

    if (!selectedPerson) {
        return res
            .status(404)
            .json({ success: false, msg: `No person with id ${id}` });
    }

    people.splice(personIndex, 1);
    res.status(200).send({ success: true, data: people });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
