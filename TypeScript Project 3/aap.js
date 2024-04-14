// Assignment Of Question 21-26
// 21 project
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var item1 = {
    countries: "Pakistan",
    languages: "Urdu"
};
var item2 = {
    countries: "China",
    languages: "Chinese"
};
console.log(item1);
console.log(item2);
// 22 project
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// I am using 19 problem
var invitd2 = ["Elon Musk", "Virat Kohli", "Babar Azam"];
console.log("Hello " + invitd2[0], "You are invited on dinner");
console.log("All the people ".concat(invitd2, " are inviting in the dinner"));
// 23 project
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car11 = "audi";
var car12 = "Civic";
var car13 = "Alto";
var car14 = "City";
var car15 = "Picanto";
var car16 = "Civic";
var car17 = "Alto";
var car18 = "City";
var car19 = "Picanto";
var car20 = "elantra";
console.log(car11 == "audi");
console.log(car12 == "Civic");
console.log(car13 == "Alto");
console.log(car14 == "City");
console.log(car15 == "Picanto");
console.log(car16 == "audi");
console.log(car17 == "civic");
console.log(car13 == "alto");
console.log(car18 == "city");
console.log(car19 == "picanto");
console.log(car20 == "Elantra");
// 24 project
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var obj1 = 3 + 4;
var obj2 = 4 + 4;
console.log(obj1 == 7);
console.log(obj2 == 5);
var obj3 = 5 < 6;
console.log(obj3 == 6 > 5);
// 25 project
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = ["green", "Yellow", "red"];
if (alien_color = [alien_color[0]]) {
    console.log("The player just earned 5 points");
}
else {
    console.log();
}
// 26 project see b part
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
var alien_color1 = ["green"];
if (alien_color1 = [alien_color1[0]]) {
    console.log("The player just earned 5 points for shooting the alien");
}
else if (alien_color1 = [alien_color1[0]]) {
    console.log("The player just earned 10 points for shooting the alien");
}
// or with all question
var alien_color2 = "green";
if (alien_color2 == "green") {
    console.log("The player just earned 5 points for shooting the alien");
}
else {
    console.log("The player just earned 10 points for shooting the alien");
}
if (alien_color2 == "red") {
    console.log("The player just earned 5 points for shooting the alien");
}
else {
    console.log("The player just earned 10 points for shooting the alien");
}
