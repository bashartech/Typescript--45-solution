// TypeScript 1-10 Problems

// 1 Install Node.js, TypeScript and VS Code on your computer

// 1 project

let message = "Hello Bashar"
console.log(message)

// 2 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

// 2 project

let nam = "saad"
let messag4 = " would wou like to learn some Python today?" 
console.log("I want to ask you " + nam + " that " + messag4    )

// OR

let nam4 = "mahad";
console.log(`Hello ${nam4}, would wou like to learn some Python today?`)

// 3 project

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let nam3 = "sarim"
console.log(nam3.toLowerCase())
console.log(nam3.toUpperCase())
console.log(nam3.charAt(0).toUpperCase() + nam3.slice(1).toLowerCase())


// 4 Project

// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let quote = `Albert Einstein once said, "A person who never made a mistake never tried anything new." `
console.log(quote);


// 5 Project

// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person = "Albert Einstein" 
let quote1 = `"A person who never made a mistake never tried anything new." `  
let mesage = `${famous_person} once said ${quote1} `
console.log(mesage)

// 6 Project

//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let nam0 = "\t\n Bashar Tech    \t\n" 
console.log(nam0)
let  strippedName = nam0.trim()

console.log(strippedName)

// 7 project

// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

let a = 1
let b = 7
let c = 9
let d = 8

console.log("Addition of a and b is " , a+b )
console.log("subtraction of a and b is " , c-a )
console.log("Multiplication of a and b is " , a*d )

// 8 Project

// You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5+3)
console.log(4+4)
console.log(5+3)
console.log(4+4)

// 9 project

// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favouriteNumber = 7
console.log(`My favourite number is  ${favouriteNumber}`)

// 10 project

// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// let program1 = "favourate number"

let name1 = "saad"
let date = "10:9" 
let favouritNumber = 7
 console.log(`My favourite number is  ${favouriteNumber} and time is ${date} and name is ${name1}`)

// // let program2 = "Number Eight"

let nam2 = "mahad";
let name2 = "saad"
let date1 = "10:9"
let messag = " would wou like to learn some Python today?"
 console.log(`Hello ${nam2}, would wou like to learn some Python today ${date1}`)

console.log("Program 1 tell my favourite number which is "+favouritNumber,"and program 2 merged my name " + nam2,"with sentence"+ messag)


