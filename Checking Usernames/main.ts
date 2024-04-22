// Checking Usernames
let currentUsers: string[] = ["admin", "user1", "user2", "maaz", "ali"];
let newUsers: string[] = ["Marium", "User2", "Farheen", "User3", "ALI"];

for (let newUser of newUsers) {
  let lowerCaseNewUser = newUser.toLowerCase();
  if (currentUsers.includes(lowerCaseNewUser)) {
    console.log(`Sorry the username ${newUser} already exits.`);
  } else {
    console.log(`The username ${newUser} is available.`);
  }
}
