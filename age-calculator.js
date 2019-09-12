// age-calculator.js is a script that outputs a person's age

function ageCalculator(name, yearOfBirth, currentYear) {
  /*
  * Inputs:
  *    name (string) - name of the person
  *    yearOfBirth (number) - year the person was born
  *    currentYear (number) - current year used to determine age
  * Outputs:
  *    return (string) - "Suzie is 32 years old. 
  */ 
  let age = currentYear - yearOfBirth;
  return(name + " is " + age + " years old.");
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));