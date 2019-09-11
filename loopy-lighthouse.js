/*
* The LoopyLighthouse program prints the number from 100 to 200
* with the following three exceptions:
* 1. If the number is a multiple of 3, it will print "Loopy" instead
* 2. If the number is a multiple of 4, it will print "Lighthouse" instead
* 3. If the number is a multiple of both 3 and 4, it will print 
*    "LoopyLighthouse" instead
*/

// for loop to iterate from 100 through to 200 (inclusive)
for (let i = 100; i <= 200; i++) {
  // check if i is a multiple of 3 and not 4
  if ((i % 3 === 0) && (i % 4 != 0)) {
    console.log("Loopy")
  // check if i is a multiple of 4 and not 3
  } else if ((i % 3 != 0) && (i % 4 === 0)) {
    console.log("Lighthouse");
  // check if i is a multiple of 3 and 4
  } else if ((i % 3 === 0) && (i % 4 === 0)) {
    console.log("LoopyLighthouse");
  // if the above conditions aren't met, it is not a multiple of 3 or 4
  } else {
    console.log(i);
  }
}