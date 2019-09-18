/*
* The LoopyLighthouse 2 program contains a function that will log to 
* the console all the numbers between two defined limits, except it
* will replace multiples of one number with "Batty", multiples of a
* second number with "Beacon", and multiples of both numbers with
* "BattyBeacon":
*/

function loopyLighthouse(range, multiples, words) {
  /* input: range (array of two number) -> specifies the upper and 
  *         lower limits of the numbers to log
  *          multiples (array of two numbers) -> contains the numbers
  *         which will be used to determine multiples
  *         words (array of two strings) -> the first word will
  *         replace multiples of the first number in multiples, and 
  *         the second word will replace multiples of the second number
  *  output: logs to the console a list of numbers between the two 
  *         numbers contained in range, with multiples replaced by
  *         words
  */

      // for loop to iterate through range (inclusive)
  for (let i = range[0]; i <= range[1]; i++) {
    // check if i is a multiple of multiples[0] and not multiples[1]
    if ((i % multiples[0] === 0) && (i % multiples[1] != 0)) {
      console.log(words[0])
    // check if i is a multiple of multiples[1] and not multiples[0]
    } else if ((i % multiples[0] != 0) && (i % multiples[1] === 0)) {
      console.log(words[1]);
    // check if i is a multiple of 3 and 4
    } else if ((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
      console.log(words[0] + words[1]);
    // if the above conditions aren't met, it is not a multiple of multiples[0]
    // or multiples[1]
    } else {
      console.log(i);
    }
  }

}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

