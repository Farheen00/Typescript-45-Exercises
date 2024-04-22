// Sandwiches

function sandwiches(...items: string[]) {
  console.log("Sandwich Order:");
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
}
sandwiches("chicken", "cheese");
sandwiches("egg", "chicken", "cheese", "tomato");
sandwiches("egg", "vegetables", "mayo");
