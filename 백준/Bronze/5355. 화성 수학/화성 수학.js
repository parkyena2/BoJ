const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").split("\n");

const len = parseInt(input[0]);
const cases = input.slice(1).map(e => e.split(" ").map(el => el.trim()));

for (let i = 0; i < len; i++) {
  let caseLen = cases[i].length;
  let num = Number(cases[i][0]);

  for (let j = 1; j < caseLen; j++) {
    switch (cases[i][j]) {
      case "@":
        num *= 3;
        break;
      case "%":
        num += 5;
        break;
      case "#":
        num -= 7;
        break;
    }
  }

  console.log(num.toFixed(2));
}