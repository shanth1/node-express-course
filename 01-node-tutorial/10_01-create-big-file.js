const { writeFileSync } = require("fs");

for (let index = 0; index < 100000; index++) {
    writeFileSync(
        "./01-node-tutorial/content/big.txt",
        `Hello, world! ${index} line\n`,
        {
            flag: "a",
        },
    );
}
