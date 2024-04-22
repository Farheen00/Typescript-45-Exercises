//No Users
//if the list is not empty
let usernames: string[] = ["admin", "Farheen", "Ali", "Maaz", "Marium", "Mehreen"];
for(let username of usernames)
if(username==="admin")
{console.log("Hello admin,would you like to see a status report?");
}
else {console.log(`Hello ${username},thankyou for logging in again.`);
}
//if the list is empty
usernames =[];
if (usernames =[])
{console.log("We need to find some users!");
}

