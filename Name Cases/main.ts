//Name Cases
let personName: string = "farheen usman";
// Upper Case
console.log(personName.toUpperCase());
// Lower Case
 console.log(personName.toLowerCase());
// Title Case
console.log(personName.replace(/\b\w/g,c=> c.toUpperCase()));