const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").split("\n");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const result = A + B;

console.log(result);