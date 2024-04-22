// Cars
interface car {
  manufacturer: string;
  modelName: string;
  [key: string]: any;
}
function carDetails(
  manufacturer: string,
  modelName: string,
  ...moreInfo: { [key: string]: any }[]
): car {
  return {
    manufacturer,
    modelName,
    ...Object.assign({}, ...moreInfo),
  };
}
let car1 = carDetails(
  "Toyota",
  "Corolla",
  { color: "black" },
  { year: "2000" }
);
let car2 = carDetails(
  "Honda",
  "City",
  { color: "grey_black" },
  { year: "2020" },
  { automatic: true }
);
console.log(car1);

console.log(car2);
