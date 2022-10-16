const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").trim().split(" ");

const staticCost = parseInt(input[0].trim());
const dynamicCost = parseInt(input[1].trim());
const price = parseInt(input[2].trim());

let standard = price - dynamicCost;

if (standard <= 0) {
  console.log(-1);
} else {
  let result = Math.floor(staticCost / standard);
  if (result * standard <= staticCost) result++;
  console.log(result);
}