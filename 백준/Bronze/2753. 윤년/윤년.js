const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf8');
input = parseInt(input);

if ((input % 4 == 0 && input % 100 != 0) || input % 400 == 0) {
    console.log("1");
} else {
    console.log("0");
}