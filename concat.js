// concat.js is a function script that concatenates two separate
// arrays into a single array

function concat(oneArray, twoArray) {
  // create an array that will be filled with oneArray and twoArray
  let concatArray = [];

  // place the contents of oneArray into concatArray
  for (let i = 0; i < oneArray.length; i++) {
    concatArray.push(oneArray[i]);
  }

  // place the contents of twoArray into concatArray
  for (let j = 0; j < twoArray.length; j++) {
    concatArray.push(twoArray[j]);
  }

  return concatArray
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);