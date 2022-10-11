const curr = new Date();
const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
const krTimeDiff = 9 * 60 * 60 * 1000;
const date = new Date(utc + krTimeDiff);

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

console.log(`${year}-${month}-${day}`);