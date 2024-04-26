//Album

interface musicAlbum{
        artistName:string ,
         albumTitle:string ,
          numberOfTracks?:number
}
function make_album(artistName:string , albumTitle:string , numberOfTracks?:number):musicAlbum{
    return{artistName,
        albumTitle,
        numberOfTracks
    }
}
let album1 = make_album("Hadiqa" , "Heartbeat");
let album2 = make_album("Ali" , "Sufiyana");
let album3 = make_album("Atif" , "Lovely Tunes");
console.log(album1);
console.log(album2);
console.log(album3);
let album4 = make_album("Fawad" ,"Ehsaas" , 7);
console.log(album4);
