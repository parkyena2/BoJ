const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").split("\n");

const startTime = input[0].split(" ").map(e => parseInt(e));

const startHour = startTime[0];
const startMinuit = startTime[1];
const startSecond = startTime[2];

const cookingTime = parseInt(input[1]);

const cookingHour = parseInt(cookingTime / (60 * 60));
const cookingMinuit = parseInt((cookingTime - (cookingHour * 60 * 60)) / 60);
const cookingSecond = cookingTime - (cookingHour * 60 * 60) - (cookingMinuit * 60);

let endSecond = startSecond + cookingSecond;
let OverSecond = 0;
if (endSecond >= 60) {
  OverSecond = parseInt(endSecond / 60);
  endSecond %= 60;
}

let endMinuit = startMinuit + cookingMinuit;
let OverMinuit = 0;
if (OverSecond > 0) endMinuit += OverSecond;
if (endMinuit >= 60) {
  OverMinuit = parseInt(endMinuit / 60);
  endMinuit %= 60;
}

let endHour = startHour + cookingHour;
if (OverMinuit > 0) endHour += OverMinuit;
if (endHour >= 24) endHour %= 24;

console.log(`${endHour} ${endMinuit} ${endSecond}`);