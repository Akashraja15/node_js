var readlineSync = require("readline-sync");
var userName = readlineSync.question("May I have your name?");
console.log("Hi" + userName + "!");
var favFood = readlineSync.question("What is your fav food?", {
  hideEchoBack: true,
});

console.log("Oh," + userName + "loves" + favFood + "!");
console.log("After");