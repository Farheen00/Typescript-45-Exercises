// Guest list
var guestList = ["Ali", "Maaz", "Marium"];
//  guestList.map((items) => console.log(`Dear ${items} , you are cordially invited to the dinner.`));
guestList.map(function (items) { return console.log("Dear ".concat(items, " you are cordially invited to the dinner.")); });
