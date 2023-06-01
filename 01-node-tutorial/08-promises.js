const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFile(
            "./01-node-tutorial/content/first.txt",
            "utf8",
        );
        const second = await readFile(
            "./01-node-tutorial/content/second.txt",
            "utf8",
        );
        await writeFile(
            "./01-node-tutorial/content/result-async.txt",
            `writeFilePromise: ${first}, ${second}`,
        );
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};
start();

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, "utf8", (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// };

// getText("./01-node-tutorial/content/first.txt")
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));
