//  project 40

// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


function make_album(names, albumTitles, tracks) {
    for (let i = 0; i < names.length; i++) {
        if (tracks !== undefined && tracks[i] !== undefined) {
            console.log(names[i] + ', ' + albumTitles[i] + ', ' + tracks[i]);
        } else {
            console.log(names[i] + ', ' + albumTitles[i]);
        }
    }
}

let names = ["Babar", "Kohli", "Amir"];
let dictionaries = ["Album1", "Album2", "Album3"];
let tracks = [12, 23, 34];

make_album(names, dictionaries, tracks);



    
// project 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
    let magicians_name = ["Brook","Hooks"]
    function show_magician (magicians_name){
        for(let i = 0;i<magicians_name.length;i++)
        console.log(`${magicians_name[i]}`)
}show_magician(magicians_name)

// project 42

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great (magicians_name){
    for(let i = 0;i<magicians_name.length;i++)
    console.log(`The Great ${magicians_name[i]}`)
}make_great(magicians_name)



