//  Unchanged Magicians
let magicianNames: string[] = ["Henry", "David", "William", "Jimmy"];
function showMagicians(magicians: string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
}
function makeGreat(magicians:string[]):string[]{
  let greatMagicians:string[]=magicians.map(magician=> `${magician} the Great`)
   return greatMagicians;
}
let greatMagiciansNames:string[]=makeGreat(magicianNames);  

console.log("Original Magicians:");
  showMagicians(magicianNames);
  console.log("Great Magicians:")
  showMagicians(greatMagiciansNames);