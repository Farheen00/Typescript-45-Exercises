let animals: string[] = ["cat", "dog", "monkey"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}

console.log(
  "All these animals have a long tail.Any of these animals would make a great pet."
);
