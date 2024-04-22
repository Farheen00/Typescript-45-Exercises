//City Names
//using return
function city_country(city, country) {
    return ("\"".concat(city, ",").concat(country, "\""));
}
var city1 = city_country("Lahore", "Pakistan");
var city2 = city_country("Jeddah", "Saudi Arabia");
var city3 = city_country("Sydney", "Australia");
console.log(city1);
console.log(city2);
console.log(city3);
//second method
function cityCountry(city, country) {
    console.log("\"".concat(city, ",").concat(country, "\""));
}
cityCountry("Lahore", "Pakistan");
cityCountry("Jeddah", "Saudi Arabia");
cityCountry("Sydney", "Australia");
