//Album
interface musicAlbum{
        artistName:string ,
         albumTitle:string ,
          numberOfTracks?:number
}
            
function make_album(artistName, albumTitle, numberOfTracks?):musicAlbum {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks
    };
}
var album1 = make_album("Hadiqa", "Heartbeat");
var album2 = make_album("Ali", "Sufiyana");
var album3 = make_album("Atif", "Lovely Tunes");
console.log(album1);
console.log(album2);
console.log(album3);
var album4 = make_album("Fawad", "Ehsaas", 7);
console.log(album4);
