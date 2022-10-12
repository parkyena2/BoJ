const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split(" ");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").split(" ");

const A = parseInt(input[0]);
const I = parseInt(input[1]);

// parseInt(B / A) = I
// B >= A * (I - 1) + 1

const result = (A * (I - 1)) + 1;
console.log(result);