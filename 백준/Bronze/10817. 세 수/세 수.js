const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split(" ");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

const Max = Math.max(A, B, C);

if (Max == A) console.log(Math.max(B, C));
else if (Max == B) console.log(Math.max(A, C));
else console.log(Math.max(A, B));