const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").trim().split("\n");

const len = parseInt(input[0]);
const cases = input.slice(1).map(e => e.trim().split(" ").map(e => parseInt(e)));

let maxPrize = 0;

for (let i = 0; i < len; i++) {
  let prize = 0;
  
  if(cases[i][0] == cases[i][1] && cases[i][1] == cases[i][2]) {
    prize = 10000 + (cases[i][0] * 1000);
  } else if (cases[i][0] == cases[i][1] || cases[i][1] == cases[i][2]) {
    prize = 1000 + (cases[i][1] * 100);
  } else if (cases[i][0] == cases[i][2]) {
    prize = 1000 + (cases[i][0] * 100);
  } else {
    prize = Math.max(...cases[i]) * 100;
  }

  if (maxPrize < prize) {
    maxPrize = prize;
  }
}

console.log(maxPrize);