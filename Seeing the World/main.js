var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Seeing the world
var places = ["Paris", "Dubai", "Medina", "London", "America"];
console.log("Original Order:", places);
console.log("Alphabetical order without modifying original:", __spreadArray([], places, true).sort());
console.log("Original  Order:", places);
console.log(" Reverse Alphabetical order without modifying original:", __spreadArray([], places, true).sort().reverse());
console.log("Original Order", places);
console.log("Reverse original order:", places.reverse());
console.log("Back to original order:", places.reverse());
console.log("Alphabetical order:", places.sort());
console.log(" Reverse Alphabetical order:", places.sort().reverse());
