const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
//const readFileSyncAddress = "input.txt";
//const input = fs.readFileSync(readFileSyncAddress, "utf8").split("\n");

let N = parseInt(input[0]);

function isPrime(num) {
  if (num <= 1) return false;

  if (num % 2 == 0) return (num == 2 ? true : false);

  const sqrt = parseInt(Math.sqrt(num));
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i == 0) return false;
  }

  return true;
}

let primes = [];
for (let i = 0; i <= N; i++) {
  if (isPrime(i)) primes.push(i);
}

let len = primes.length - 1;
let i = 0;

while (i <= len && N > 1) {
  if (primes.indexOf(N) != -1) {
    console.log(N);
    break;
  }

  if (N % primes[i] == 0) {
    console.log(primes[i]);
    N /= primes[i];
  } else i++;
}