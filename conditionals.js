const raining = false; 
const temperature = 12;

// Basic if statement
if (raining) {
  console.log("Don't forget your umbrella!");
}

// Adding else if and else statements
if (temperature < 0) {
  console.log("Make sure you pack a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

// && is the boolean and operator (both sides need to be true)
if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

// || is the boolean or operator (one side needs to be true)
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");
}

// ! reverses the value of raining, therefore if not raining...
if (!raining) {
  console.log("Leave your umbrella at home!")
}