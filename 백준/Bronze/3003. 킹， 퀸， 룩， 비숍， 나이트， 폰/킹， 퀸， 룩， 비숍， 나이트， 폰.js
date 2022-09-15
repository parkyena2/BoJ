const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const chess = [1, 1, 2, 2, 2, 8];
const length = input.length;

const result = chess.map(function(e, i) {
    return e - input[i];
})

console.log(...result);