// Great Magicians
let magicianNames: string[] = ["Henry", "David", "William", "Jimmy"];
function showMagicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}
showMagicians(magicianNames);
function makeGreat(magicians:string[]){
  for(let i=0;i<magicians.length;i++){
    magicians[i]=magicians[i] + " the Great"
    
  }
}
makeGreat(magicianNames);
showMagicians(magicianNames);