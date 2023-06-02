const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log("Hello");
// });

//Using Event Emitter Api
const server = http.createServer();

//emits request event
// subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
    req.on("Hello");
});

server.listen(3000);
