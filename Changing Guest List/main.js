//Changing guest list
var guestList = ["Ali", "Maaz", "Marium"];
var cannotAttend = "Ali";
var newGuest = "Hamza";
guestList[0] = newGuest;
console.log(guestList);
guestList.map(function (items) { return console.log("Dear ".concat(items, " , you are cordially invited to the dinner")); });
console.log(cannotAttend + " cannot attend the dinner");
