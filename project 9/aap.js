"use strict";
// project 37
function make_shirt(size = "large", message = " I love typescript") {
    console.log(`shirts are ${size} and ${message}`);
}
make_shirt();
make_shirt("medium");
make_shirt("Any Size ", "I love Programming");
// project 38
function describe_city(message, name) {
    for (let i = 0; i < message.length; i++) {
        console.log(`${message[i]} is in ${name[i]} `);
    }
}
let messages = ["Pakistan", "India", "America"];
let names = ["Karachi", "Mumbai", "New york"];
describe_city(names, messages);
