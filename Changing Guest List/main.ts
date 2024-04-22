//Changing guest list
 let guestList: string[] = ["Ali", "Maaz", "Marium"];
let cannotAttend: string = "Ali";
let newGuest: string = "Hamza";
guestList[0] = newGuest
console.log(guestList);
guestList.map((items) => console.log(`Dear ${items} , you are cordially invited to the dinner`));
console.log(cannotAttend +" cannot attend the dinner");