"use strict"
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);
console.log(A - B);