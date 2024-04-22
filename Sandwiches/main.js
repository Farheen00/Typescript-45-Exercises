// Sandwiches
function sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
sandwiches("chicken", "cheese");
sandwiches("egg", "chicken", "cheese", "tomato");
sandwiches("egg", "vegetables", "mayo");
