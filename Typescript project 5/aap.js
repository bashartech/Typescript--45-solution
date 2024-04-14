// TypeScript 30 Problem
var usernames = ["admin", "Mahad", "Zohaib", "Musab", "hasan"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to check the report");
    }
    else {
        console.log("Hello ".concat(username.charAt(0).toUpperCase() + username.slice(1), ", thank you for logging in again\""));
    }
});
