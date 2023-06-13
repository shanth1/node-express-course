const express = require("express");
const { people } = require("./data");

const app = express();
app.use(express.static("./02-express-tutorial/methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

app.put("/api/people/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const selectedPerson = people.find((person) => person.id === Number(id));
    if (!selectedPerson) {
        return res
            .status(404)
            .json({ success: false, msg: `No person with id ${id}` });
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
            console.log(person);
        }
        return person;
    });

    res.status(200).send({ success: true, data: newPeople });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
