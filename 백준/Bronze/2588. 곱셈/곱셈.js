const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

let inputInt = input.map(function(e) {
    return parseInt(e);
});

const num0 = inputInt[1] % 10;
const num1 = Math.floor((inputInt[1] % 100) / 10);
const num2 = Math.floor(inputInt[1] / 100);
const result = inputInt[0] * inputInt[1];

console.log(inputInt[0] * num0);
console.log(inputInt[0] * num1);
console.log(inputInt[0] * num2);
console.log(result);
