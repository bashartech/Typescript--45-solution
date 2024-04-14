// 31 project

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users : number[] = [56]

if (users.length > 0 ){

    users.forEach(age=>{
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
})
} else {
    console.log("We need to find some users")
}
users = []

