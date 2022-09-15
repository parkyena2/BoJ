/*
두 값을 받는다
두 값을 정수로 변환
곱하는 수를 자릿수로 분리
곱해지는 수를 자릿수로 곱해서 한 줄씩 출력
출력했던 수에 10의 n승을 곱해 모두 더해 출력
*/

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