const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").split("\n");

const S = parseInt(input[0]);

let sum = 0;
let N = 1;

while(sum <= S) {
  sum += N;
  N++;
}

console.log(N - 2);