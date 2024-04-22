//How to create an object in typesript
let personDetails:{name:string,
     surname:string,
     gender:string,
      age:number ,
      nationality:string} = 
{name: "Farheen",
 surname:"Usman",
 gender:"female",
age:34,
nationality:"Pakistani"}
console.log(personDetails);
console.log(personDetails.name);
console.log(personDetails.surname);
console.log(personDetails.gender);
console.log(personDetails.age);
console.log(personDetails.nationality);
interface book{
      title :string,
      author:string,
      year:number,
      genre:string,
      pages:number
}
let book1:book={
      title:"The Alchemist",
      author:"Paulo Coelho",
      year: 1988,
      genre:"novel",
      pages: 208
}
let book2:book={
      title:"To Kill a Mockingbird",
      author:"Harper Lee",
      year: 1960,
      genre:"novel",
      pages: 281
}
console.log(book1);
console.log(book2);

