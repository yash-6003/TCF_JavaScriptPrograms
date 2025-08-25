function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log("madam →", isPalindrome("madam"));
console.log("hello →", isPalindrome("hello"));

