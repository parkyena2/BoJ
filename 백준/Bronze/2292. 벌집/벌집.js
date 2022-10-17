const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").trim().split(" ");

let dest = parseInt(input[0]);

let start = 1;
let stap = 1;
while (start < dest) {
  start += stap * 6;
  stap++;
}

console.log(stap);