const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").trim().split("\n");

const point1 = input[0].trim().split(" ").map(e => parseInt(e));
const point2 = input[1].trim().split(" ").map(e => parseInt(e));
const point3 = input[2].trim().split(" ").map(e => parseInt(e));

const xs = [point1[0], point2[0], point3[0]];
const ys = [point1[1], point2[1], point3[1]];

let i = 0;
let resultx;
let resulty;

while (i < 3) {
  if (xs.indexOf(xs[i]) == xs.lastIndexOf(xs[i])) {
    resultx = xs[i];
  }
  if (ys.indexOf(ys[i]) == ys.lastIndexOf(ys[i])) {
    resulty = ys[i];
  }
  i++;
}

console.log(`${resultx} ${resulty}`);