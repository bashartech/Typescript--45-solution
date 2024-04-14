// project 32

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users.Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used.If it has, print a message that the person will need to enter a new username.If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive.If 'John' has been used, 'JOHN' should not be accepted.


let current_users = ["Saad", "mahad", "hadi", "uzair", "hamza"]
let new_users = ["Saad", "mahad", "sultan", "sammu", "bilal"]
for (let i = 0; i < new_users.length; i++) {
    if (current_users.indexOf(new_users[i]) !== -1) {
        console.log(`${new_users[i]}" need to enter a new username"`)
    }
    else {
        console.log(`${new_users[i]}" user name is available"`)
    }
}

// project 33

// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < ordinalNumbers.length; i++) {
    if (ordinalNumbers[i] == ordinalNumbers[0]) {
        console.log(ordinalNumbers[0] + "st")
    }
    if (ordinalNumbers[i] == ordinalNumbers[1]) {
        console.log(ordinalNumbers[1] + "nd")
    }
    if (ordinalNumbers[i] == ordinalNumbers[2]) {
        console.log(ordinalNumbers[2] + "rd")
    }

    if (ordinalNumbers[i] == ordinalNumbers[3]) {
        console.log(ordinalNumbers[3] + "rth")
    }
    if (ordinalNumbers[i] == ordinalNumbers[4]) {
        console.log(ordinalNumbers[4] + "th")
    }
    if (ordinalNumbers[i] == ordinalNumbers[5]) {
        console.log(ordinalNumbers[5] + "th")
    }
    if (ordinalNumbers[i] == ordinalNumbers[6]) {
        console.log(ordinalNumbers[6] + "th")
    }
    if (ordinalNumbers[i] == ordinalNumbers[7]) {
        console.log(ordinalNumbers[7] + "th")
    }
    if (ordinalNumbers[i] == ordinalNumbers[8]) {
        console.log(ordinalNumbers[8] + "th")
    }
}



// project 34

// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizzas = ["Chicken Pizza", "Afghani Pizza", "malai boti pizza"]
for (let i = 0; i < pizzas.length; i++) {
    console.log(`${pizzas[i]} is nice`)
}








