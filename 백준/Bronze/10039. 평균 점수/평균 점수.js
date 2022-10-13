const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").split("\n");

const grades = input.map(function(e) {
  e = Number(e);
  if (e < 40) e = Number(40);
  return e;
});

const sum = grades.reduce((acc, cur) => acc + cur);
const average = Math.floor(sum / 5);

console.log(average);