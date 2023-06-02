const { createReadStream } = require("fs");

const stream = createReadStream("./01-node-tutorial/content/big.txt", {
    highWaterMark: 90000,
    encoding: "utf8",
});

//chunk/buffer size: default 64kB
//last buffer - remainder
//highWaterMark - control size

stream.on("data", (result) => {
    console.log(result);
});
stream.on("error", (error) => console.log(error));
