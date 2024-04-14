// project 39
//     City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    for (var i = 0; i < city.length; i++) {
        console.log("\"".concat(city[i], ",").concat(country[i], "\""));
    }
}
var cities = ["Lahore", "Dehli", "Dubai"];
var countries = ["Pakistan", "India", "UAE"];
city_country(cities, countries);
