const sayHello = function(name) {
  console.log("Hello " + name);
}

sayHello('Miranda');
sayHello('Caliban');
sayHello('Ferdinand');

const returnSayHello = function(name) {
  return "Hello, " + name;
}
const greeting = returnSayHello("John");
console.log(greeting);