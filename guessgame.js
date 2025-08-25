let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = 5; // you can change this number

if (guess === randomNumber) {
  console.log("🎉 Correct! The number was", randomNumber);
} else {
  console.log("❌ Wrong guess! The number was", randomNumber);
}
