const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").trim().split("\n");

const cases = input.map(e => e.trim().split(" ").map(e => parseInt(e)));

let i = 0;
while (1) {
  if (cases[i][0] == 0 && cases[i][1] == 0) break;
  let result = (cases[i][0] > cases[i][1]) ? "Yes" : "No";
  console.log(result);
  i++;
}