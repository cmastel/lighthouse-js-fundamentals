function range(start, end, step) {
  let someArray = [];
  // check conditions that should return an empty array
  if (start === undefined || end === undefined || step === undefined) {
    return someArray;
  } else if (start > end) {
    return someArray;
  } else if (step <= 0) {
    return someArray;
  } 
  
  // initialize the array with the start value
  someArray.push(start);
  // add additional elements to the array until the next would element would
  // be greater than teh end parameter
  let i = 0;
  while ((someArray[i] + step) <= end) {
    someArray.push(someArray[i] + step);
    i++;
  }
  return someArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));