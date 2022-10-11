const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split(" ");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").split(" ");

const R1 = parseInt(input[0]);
const S = parseInt(input[1]);

const R2 = (S * 2) - R1;

console.log(R2);