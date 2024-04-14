// 31 project
var users = [];
if (users.length > 0) {
    users.forEach(function (age) {
        if (age < 2) {
            console.log("Person is baby");
        }
        if (age > 1 && age < 4) {
            console.log("Person is toodler");
        }
        if (age > 3 && age < 13) {
            console.log("Person is a kid");
        }
        if (age > 12 && age < 20) {
            console.log("Person is teenager");
        }
        if (age > 19 && age < 65) {
            console.log("Person is an adult");
        }
        if (age > 64 && age > 65) {
            console.log("Person is an elder");
        }
    });
}
else {
    console.log("We need t0 find some users");
}
users = [];
