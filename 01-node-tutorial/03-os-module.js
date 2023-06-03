const os = require("os");

// info about a user
const user = os.userInfo();

// system uptime in seconds
const uptime = os.uptime();

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
};

console.log(currentOS);
