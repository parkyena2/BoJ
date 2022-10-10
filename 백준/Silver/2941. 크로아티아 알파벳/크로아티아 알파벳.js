const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").split("\n");

const croaStr = input[0];
const croaAlph = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
const croaAlphLen = croaAlph.length;
let result = croaStr.length;

for (let i = 0; i < croaAlphLen; i++) {
  if (croaStr.indexOf(croaAlph[i]) != -1) {
    let count = croaStr.split(croaAlph[i]).length - 1;
    result -= count;
  }
}

console.log(result);