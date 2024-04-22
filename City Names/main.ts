//City Names
//using return
function city_country(city:string ,country:string):string{
    return (`"${city},${country}"`)
}
let city1 = city_country("Lahore" , "Pakistan");
let city2 = city_country("Jeddah" , "Saudi Arabia");
let city3 = city_country("Sydney" , "Australia");
console.log(city1);
console.log(city2);
console.log(city3);
//second method
function cityCountry(city:string ,country:string){
    console.log (`"${city},${country}"`)
}
cityCountry("Lahore" , "Pakistan");
cityCountry("Jeddah" , "Saudi Arabia");
cityCountry("Sydney" , "Australia");
