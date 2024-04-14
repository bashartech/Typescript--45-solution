// 27-29 problems

// 27 project 

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien_color3 = ["green","yellow","red"]

if ( alien_color3 =  [alien_color3[0]]   ){
    console.log("The player just earned 5 points for shooting the alien")
}
if ( alien_color3 =  [alien_color3[1]]   ){
    console.log("The player just earned 10 points for shooting the alien")
}
if ( alien_color3 =  [alien_color3[2]]   ){
    console.log("The player just earned 15 points for shooting the alien")
}


// 28 project

// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.


let age = 56
if(age<2){
    console.log("Person is baby")
}
if(age>1 &&  age<4  ){
    console.log("Person is toodler")
}
if(age>3 && age<13){
    console.log("Person is a kid")
}
if(age>12 && age<20){
    console.log("Person is teenager")
}
if(age>19 && age<65){
    console.log("Person is an adult")
}
if(age>64 && age>65){
    console.log("Person is an elder")
}

// 29 project
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruit = ["Banana","Grapes","Apple"]

if (favorite_fruit[0] == favorite_fruit[9]){
console.log("You really like banana")
}
if(favorite_fruit[0] == favorite_fruit[2]){
console.log("You really like banana")
}
if(favorite_fruit[0] == favorite_fruit[1]){
console.log("You really like banana")
}
if(favorite_fruit[0] == favorite_fruit[0]){
console.log("You really like banana")
}
if(favorite_fruit[0] == favorite_fruit[3]){
console.log("You really like banana")
}
