// merge-arrays.js is a script function that merges two sorted arrays, into
// single array that is then resorted

function merge(array1, array2) {
  let arrayFinal = [];
  // place the contents of array1 into arrayFinal
  for (let i = 0; i < array1.length; i++) {
    arrayFinal.push(array1[i]);
  }
  
  // place the contents of array2 into arrayFinal
  for (let j = 0; j < array2.length; j++) {
    arrayFinal.push(array2[j]);
  }
  
  // sort arrayFinal
  arrayFinal.sort();

  return arrayFinal;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);