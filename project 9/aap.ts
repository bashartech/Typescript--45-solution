// project 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(
  size: string = "large",
  message: string = " I love typescript"
) {
  console.log(`shirts are ${size} and ${message}`);
}

make_shirt();
make_shirt("medium");
make_shirt("Any Size ", "I love Programming");

// project 38

// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(message: string[], name: string[]) {
  for (let i = 0; i < message.length; i++) {
    console.log(`${message[i]} is in ${name[i]} `);
  }
}
let messages = ["Pakistan", "India", "America"];
let names = ["Karachi", "Mumbai", "New york"];
describe_city(names, messages);
