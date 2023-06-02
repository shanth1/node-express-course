const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (login, password) => {
    console.log("data received");
    console.log(login, password);
});

customEmitter.emit("response", "denis", 1234);

customEmitter.on("response", () => {
    console.log("same logic that not will listen");
});
