//Hello Admin
let usernames: string[] = ["admin", "Farheen", "Ali", "Maaz", "Marium", "Mehreen"];
for(let username of usernames)
if(username==="admin")
{console.log(`Hello ${username},would you like to see a status report?`);
}
else{console.log(`Hello ${username},thankyou for logging in again.`);
}
