const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Printing ingredients with a while loop:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
console.log("");

// Write a for loop that prints out the contents of ingredients:
console.log("Printing ingredients with a for loop:");
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("");

// Write a loop (while or for) that prints out the contents of the ingredients backwards:
console.log("Printing the list of ingredients backwards");
for (i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}