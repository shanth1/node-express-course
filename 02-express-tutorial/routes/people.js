const express = require("express");
const router = express.Router();
const { people } = require("../../data");

router.get("/", (req, res) => {
    res.status(200).json({ success: true, data: people });
});

router.post("/", (req, res) => {
    const { login } = req.body;
    if (login) {
        people.push({ id: Math.random(), name: login });
        return res.json({ success: true, data: people });
    }
    return res.status(400).json({ success: false, msg: "Login is empty" });
});

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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

module.exports = router;
