"use strict";
// project 35
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["Lion", "Tiger", "Dog"];
for (let name of animals) {
    console.log(name);
    console.log("is an animal");
    console.log("They all eat meat ");
}
// project 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`Summarizing the ${size} of the shirt and the ${message}`);
}
make_shirt("large", "hello world");
