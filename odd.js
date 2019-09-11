function isOdd(num) {
  // isOdd check to see if num is odd
  // returns true if odd, returns false if even
  return !(num % 2 === 0);
}

// check the function with an even and odd number
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));