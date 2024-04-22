//Shrinking Guest List
let guestList: string[] =[ 'Ahmed', 'Hamza', 'Zain', 'Maaz', 'Marium', 'Asad' ];
console.log("Table is not available I can invite only 2 persons.");
//remove 4 guests from the list
let guest1 =guestList.pop();
console.log(`Sorry ${guest1} you are not invited.`);
let guest2 =guestList.pop();
console.log(`Sorry ${guest2} you are not invited.`);
let guest3 =guestList.pop();
console.log(`Sorry ${guest3} you are not invited.`);
let guest4 =guestList.pop();
console.log(`Sorry ${guest4} you are not invited.\n`);
guestList.map((items) => console.log(`Dear ${items} you are still invited to the dinner.`))
// remove last 2 names from the list and print to make sure the list is empty
guestList.pop();
guestList.pop();
console.log(guestList);
