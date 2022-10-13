const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").trim().split("\n");

const len = parseInt(input[0]);
const cases = input.slice(1).map(e => e.split(" ").map(e => parseInt(e)));

function gcd(num1, num2) {
  let bigger = (num1 > num2) ? num1 : num2;
  let smaller = (num1 < num2) ? num1 : num2;

  while (bigger % smaller != 0) {
    let tmp = smaller;
    smaller = bigger % smaller;
    bigger = tmp;
  }

  return num1 * num2 / smaller;
}


for(let i = 0; i < len; i++) {
  console.log(gcd(cases[i][0], cases[i][1]));
}