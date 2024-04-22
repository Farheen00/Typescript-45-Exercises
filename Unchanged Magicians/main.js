//  Unchanged Magicians
var magicianNames = ["Henry", "David", "William", "Jimmy"];
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "".concat(magician, " the Great"); });
    return greatMagicians;
}
var greatMagiciansNames = makeGreat(magicianNames);
console.log("Original Magicians:");
showMagicians(magicianNames);
console.log("Great Magicians:");
showMagicians(greatMagiciansNames);
