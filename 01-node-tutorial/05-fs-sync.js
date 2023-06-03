const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./01-node-tutorial/content/first.txt", "utf8");
const second = readFileSync("./01-node-tutorial/content/second.txt", "utf8");

console.log(first, second);

//* Flags:
//* a - append
writeFileSync(
    "./01-node-tutorial/content/result-sync .txt",
    `${first}, ${second}`,
    { flag: "a" },
);
