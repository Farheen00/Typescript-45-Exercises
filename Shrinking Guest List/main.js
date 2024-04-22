//Shrinking Guest List
var guestList = ['Ahmed', 'Hamza', 'Zain', 'Maaz', 'Marium', 'Asad'];
console.log("Table is not available I can invite only 2 persons.");
//remove 4 guests from the list
var guest1 = guestList.pop();
console.log("Sorry ".concat(guest1, " you are not invited."));
var guest2 = guestList.pop();
console.log("Sorry ".concat(guest2, " you are not invited."));
var guest3 = guestList.pop();
console.log("Sorry ".concat(guest3, " you are not invited."));
var guest4 = guestList.pop();
console.log("Sorry ".concat(guest4, " you are not invited.\n"));
guestList.map(function (items) { return console.log("Dear ".concat(items, " you are still invited to the dinner.")); });
// remove last 2 names from the list and print to make sure the list is empty
guestList.pop();
guestList.pop();
console.log(guestList);
