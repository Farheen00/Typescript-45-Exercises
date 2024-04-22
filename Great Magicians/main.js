// Great Magicians
var magicianNames = ["Henry", "David", "William", "Jimmy"];
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
showMagicians(magicianNames);
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
makeGreat(magicianNames);
showMagicians(magicianNames);
