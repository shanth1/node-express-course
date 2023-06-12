const peopleListElement = document.getElementById("people");

const fetchPeople = async () => {
    try {
        const { data } = await axios.get("/api/people");
        const people = data.data.map((person) => {
            return `<h5>name: ${person.name}</h5>`;
        });

        peopleListElement.innerHTML = people.join(" ");
    } catch (error) {
        peopleListElement.innerHTML = "<h5>Can not fetch data</h5>";
    }
};

fetchPeople();

const btnElement = document.getElementById("btn");
const loginElement = document.getElementById("login");
const infoElement = document.getElementById("info");

btnElement.addEventListener("click", async (ev) => {
    const value = loginElement.value;

    try {
        const { data } = await axios.post("/api/people", { login: value });
        const people = data.data.map((person) => {
            return `<h5>name: ${person.name}</h5>`;
        });
        infoElement.innerHTML = "ok";
        peopleListElement.innerHTML = people.join(" ");
    } catch (error) {
        infoElement.innerHTML = error.response.data.msg;
    }
});
