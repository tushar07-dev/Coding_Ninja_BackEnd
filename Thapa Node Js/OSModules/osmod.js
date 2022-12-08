const os = require('os');

console.log(os.arch());

const freeMemory = os.freemem();
console.log(freeMemory/1024/1024/1024);

const TotalMemory = os.totalmem();
console.log(TotalMemory/1024/1024/1024);

const hostname = os.hostname();
console.log(hostname);