"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function carDetails(manufacturer, modelName, ...moreInfo) {
    return {
        manufacturer,
        modelName,
        ...Object.assign({}, ...moreInfo),
    };
}
let car1 = carDetails("Toyota", "Corolla", { color: "black" }, { year: "2000" });
let car2 = carDetails("Honda", "City", { color: "grey_black" }, { year: "2020" }, { automatic: true });
console.log(car1);
console.log(car2);
