// project 43

// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let magician of magicians) {
        const greatMagician: string = magician + " the Great";
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}

function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians: string[] = ["Alice", "Bob", "Charlie"];

// Create a copy of the original list of magicians
let originalMagicians: string[] = magicians.slice();

// Call makeGreat() with a copy of the original array
let greatMagicians: string[] = makeGreat(originalMagicians);

// Show the original magicians
console.log("Original Magicians:");
showMagicians(originalMagicians);

// Show the great magicians
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);


// project 44

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    console.log("Bread: Wheat");
    console.log("Items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different number of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Tomato");
orderSandwich("Tuna");


// project 45

// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}

// Call the function with required information and additional name-value pairs
let myCar: Car = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Print the returned object to ensure all information was stored correctly
console.log("\nCar Information:");
console.log(myCar);