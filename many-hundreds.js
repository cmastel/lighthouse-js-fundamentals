/* many-hundreds.js is a script that determines how many full
*  containers, each containing 100 bottles, of maple syrup can
*  be sent to Mars.
*/

function howManyHundreds(bottles) {
  /* 
  *  Inputs:
  *    bottles (number) - the total number of maple syrup bottles
  *  Outputs:
  *    containers (number) - the number of full containers
  */
  let containers = Math.floor(bottles / 100);
  return containers;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

