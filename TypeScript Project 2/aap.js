// Typescript 11-20 Problems
// 11 project
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["saad", "bashar", "zohaib"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
// 12 project
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var name3 = ["saad", "bashar", "zohaib"];
var message = (" would you like to become a programmar");
console.log(name3[0] + message);
console.log(name3[1] + message);
console.log(name3[2] + message);
// 13 project
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var car1 = ["Audi"];
var car2 = ["Civic"];
var car3 = ["Elantra"];
console.log("Pakistans most expensive car is " + car1);
console.log("Pakistans most stylish car is " + car3);
console.log("Pakistans most Cool car is " + car2);
// 14 project
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var invited = ["Elon Musk", "Virat Kohli", "Babar Azam"];
console.log("Hello " + invited[0], "You are invited on dinner");
// 15 project
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log("Hello " + invited[2], "You are invited on dinner");
// 16 project
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("Good News! We found a bigger dinner");
invited.unshift("kohli");
invited.splice(Math.floor(invited.length / 2), 0, "afridi");
invited.push("Haris");
console.log("Dear " + invited, " Join our dinner");
// 17 project
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
console.log("I have only invite two people for dinner");
console.log(invited);
invited.pop();
console.log("You are sorry you cannot invite them to dinner");
invited.pop();
console.log("You are sorry you cannot invite them to dinner");
invited.pop();
console.log("You are sorry you cannot invite them to dinner");
invited.pop();
console.log("You are sorry you cannot invite them to dinner");
console.log(invited);
invited.pop();
console.log("You are sorry you cannot invite them to dinner");
invited.pop();
console.log("You are sorry you cannot invite them to dinner");
console.log(invited);
// 18 project
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var arr = ["Makka", "Karachi", "Tokyo", "Cancuz", "Hcbon"];
console.log(arr.join(","));
arr.sort().join();
console.log(arr.join());
console.log(arr.sort().reverse().join());
console.log(arr.join());
console.log(arr.reverse().join());
console.log(arr.reverse().join());
console.log(arr.sort().join());
console.log(arr.reverse().join());
// 19 project
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var invitd = ["Elon Musk", "Virat Kohli", "Babar Azam"];
console.log("Hello " + invitd[0], "You are invited on dinner");
console.log("All the people ".concat(invitd, " are inviting in the dinner"));
// 20 project
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var Mountains = [
    "K2",
    "Denali",
    "Mount Everest"
];
var countries = ["Pakistan", "Newzealand", "Turkey"];
var LANGUAGES = ["Arabic", "English", "Urdu"];
var list = ("Mountains ".concat(Mountains, "\n Countries ").concat(countries, "\nLanguages ").concat(LANGUAGES));
console.log(list);
// or
console.log("List of mountains");
console.log(Mountains.join("\n"));
console.log("List of Countries");
console.log(countries.join("\n"));
console.log("List of LANGUAGES");
console.log(LANGUAGES.join("\n"));
