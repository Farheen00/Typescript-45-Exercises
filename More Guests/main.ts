// More Guests
let guestList: string[] = ["Hamza", "Maaz", "Marium"];
console.log(guestList);
console.log("We have 3 more friends to invite on dinner.\n");
//adding 3 more friends
//add at begining
guestList.unshift("Ahmed");
console.log(guestList);
//add at middle
guestList.splice(2, 0, "Zain");
console.log(guestList);
//add at last
guestList.push("Asad");
console.log(guestList);
guestList.map((items) =>
  console.log(`Dear ${items},you are cordially invited to the dinner tomorrow.`)
);
