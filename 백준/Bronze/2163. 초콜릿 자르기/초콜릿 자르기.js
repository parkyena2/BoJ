const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split(" ");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").split(" ");

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const size = N * M;

let cut = 0;
let hori = N;
let vert = M;
let count = 1;

while (count != size) {
  if (hori >= vert) {
    hori *= 2;
    cut++;
    count++;
  } else {
    vert *= 2;
    cut++;
    count++;
  }

  if (count == size) break;
}

console.log(cut);