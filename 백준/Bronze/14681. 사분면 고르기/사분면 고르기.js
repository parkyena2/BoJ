const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const x = parseInt(input[0]);
    const y = parseInt(input[1]);
    
    switch (true) {
        case x > 0 && y > 0 :
            console.log("1");
            break;
        case x < 0 && y > 0 :
            console.log("2");
            break;
        case x < 0 && y < 0 :
            console.log("3");
            break;
        case x > 0 && y < 0 :
            console.log("4");
            break;
    }
    
    process.exit();
});