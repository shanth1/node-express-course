const path = require("path");

//platform separator
console.log(path.sep);

//normalize resolving path
const filePath = path.join("/content", "subFolder1", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log("base name:", base);

//absolute path
const absolute = path.resolve(__dirname, "content", "subFolder1", "test.txt");
console.log(absolute);
