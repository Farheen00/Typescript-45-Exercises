//Name Cases
var personName = "farheen usman";
// Upper Case
console.log(personName.toUpperCase());
// Lower Case
console.log(personName.toLowerCase());
// Title Case
console.log(personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
