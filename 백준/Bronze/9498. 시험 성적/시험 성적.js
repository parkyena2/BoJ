const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf8');
input = parseInt(input);

switch (true) {
    case (input >= 90):
        console.log("A");
        break;
    case (input >= 80):
        console.log("B");
        break;
    case (input >= 70):
        console.log("C");
        break;
    case (input >= 60):
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}