const { readFile, writeFile } = require("fs");

readFile("./01-node-tutorial/content/first.txt", "utf8", (err, result) => {
    if (err) return;
    const first = result;
    readFile("./01-node-tutorial/content/second.txt", "utf8", (err, result) => {
        if (err) return;
        const second = result;
        console.log(first, second);

        writeFile(
            "./01-node-tutorial/content/result-async.txt",
            `${first}, ${second}`,
            (err, result) => {
                if (err) return;
                console.log(result);
            },
        );
    });
});
