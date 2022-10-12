const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").split("\n");

const A = input[0].trim().length;
const oper = input[1].trim();
const B = input[2].length;

let result = "1";

switch (oper) {
  case "+" :
    if (A > B) {
      let C = A - B - 1;
      for (let i = 0; i < C; i++) result += "0";
      result += "1";
      for (let j = 1; j < B; j++) result += "0";
    }
    else if (A < B) {
      let C = B - A - 1;
      for (let i = 0; i < C; i++) result += "0";
      result += "1";
      for (let j = 1; j < A; j++) result += "0";
    }
    else {
      result = "2";
      let C = A - 1;
      for (let i = 0; i < C; i++) result += "0";
    }
    break;
  case "*" :
    let C = A + B - 2;
    for (let i = 0; i < C; i++) result += "0";
}

console.log(result);