// project 32
console.log("hello");
var current_users = ["Saad", "mahad", "hadi", "uzair", "hamza"];
var new_users = ["Saad", "mahad", "sultan", "sammu", "bilal"];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.indexOf(new_users[i]) !== -1) {
        console.log("".concat(new_users[i], "\" need to enter a new username\""));
    }
    else {
        console.log("".concat(new_users[i], "\" user name is available\""));
    }
}
// project 33
var ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinalNumbers.length; i++) {
    if (ordinalNumbers[i] == ordinalNumbers[0]) {
        console.log(ordinalNumbers[0] + "st");
    }
    if (ordinalNumbers[i] == ordinalNumbers[1]) {
        console.log(ordinalNumbers[1] + "nd");
    }
    if (ordinalNumbers[i] == ordinalNumbers[2]) {
        console.log(ordinalNumbers[2] + "rd");
    }
    if (ordinalNumbers[i] == ordinalNumbers[3]) {
        console.log(ordinalNumbers[3] + "rth");
    }
    if (ordinalNumbers[i] == ordinalNumbers[4]) {
        console.log(ordinalNumbers[4] + "th");
    }
    if (ordinalNumbers[i] == ordinalNumbers[5]) {
        console.log(ordinalNumbers[5] + "th");
    }
    if (ordinalNumbers[i] == ordinalNumbers[6]) {
        console.log(ordinalNumbers[6] + "th");
    }
    if (ordinalNumbers[i] == ordinalNumbers[7]) {
        console.log(ordinalNumbers[7] + "th");
    }
    if (ordinalNumbers[i] == ordinalNumbers[8]) {
        console.log(ordinalNumbers[8] + "th");
    }
}
// project 34
var pizzas = ["Chicken Pizza", "Afghani Pizza", "malai boti pizza"];
for (var i = 0; i < pizzas.length; i++) {
    console.log("".concat(pizzas[i], " is nice"));
    // console.log(`${pizzas[1]} is nice`)
    // console.log(`${pizzas[2]} is nice`)
}
