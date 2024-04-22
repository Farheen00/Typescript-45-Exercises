var animals = ["cat", "dog", "monkey"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log("A ".concat(animal, " would make a great pet"));
}
console.log("All these animals have a long tail.Any of these animals would make a great pet.");
