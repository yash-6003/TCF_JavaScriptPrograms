let num = 13;
let isPrime = true;

if (num < 2) isPrime = false;
else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(num, "is prime?", isPrime);
