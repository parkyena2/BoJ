const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").split("\n");

const len = parseInt(input[0]);
const cases = input.slice(1);
let count = 0;

for (let i = 0; i < len; i++) {
  let tmp = cases[i];
  let tmpLen = tmp.length;
  let isGroup = true;
  let isTested = [];
  
  for (let j = 0; j < tmpLen; j++) {
    let chr = tmp.slice(j, j+1);
    let index = tmp.indexOf(chr);

    if (tmp.replace(chr, "").indexOf(chr) != -1 && tmp.replace(chr, "").indexOf(chr) != index) {
      isGroup = false;
      break;
    }

    if (isTested.lastIndexOf(chr) != -1 && isTested.lastIndexOf(chr) != isTested.length-1) {
      isGroup = false;
      break;
    }

    isTested.push(chr);
  }

  if (isGroup == true) count++;

}

console.log(count);