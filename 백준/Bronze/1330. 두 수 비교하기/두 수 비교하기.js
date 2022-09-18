const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf8').split(" ");
input = input.map(function(e) {
    return parseInt(e);
})

if (input[0] > input[1]) {
    console.log(">");
} else if (input[0] < input[1]) {
    console.log("<");
} else {
    console.log("==");
}