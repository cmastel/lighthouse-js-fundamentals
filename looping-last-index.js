// looping-last-index.js is a function script that loops through an
// array to determine the last index that a given value is present
// the function returns -1 if the value is not present in the array

function lastIndexOf(someArray, value) {
  // set the value of last index to -1, where it will remain if
  // no occurences of value are found in someArray
  let lastIndex = -1;
  // loop through someArray and check if each element is the same
  // as value
  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i] === value) {
      lastIndex = i; //set lastIndex to i when a match to value is found
    }
  }
  return lastIndex;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);