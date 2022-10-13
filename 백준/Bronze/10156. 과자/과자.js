const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").trim().split(" ");

const K = parseInt(input[0]);
const N = parseInt(input[1]);
const M = parseInt(input[2]);

let result = (K * N) - M;
if (result < 0) result = 0;

console.log(result);