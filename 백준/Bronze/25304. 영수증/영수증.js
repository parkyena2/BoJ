const fs = require("fs");
const input = fs.readFileSync('/dev/stdin', 'utf8').split("\n");
const total = parseInt(input[0]);
const num = parseInt(input[1]) + 2;
let sum = 0;

for (let i = 2; i < num; i++) {
    let price = input[i].split(" ");
    sum += (parseInt(price[0]) * parseInt(price[1]));
}

if (total == sum)
    console.log("Yes");
else
    console.log("No");