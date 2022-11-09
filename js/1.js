"use strict";

//#17
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const value of Object.values(colors)) {
  hexColors.push(value.hex);
  rgbColors.push(value.rgb);
}
console.log(hexColors);

//18
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const value of Object.values(products)) {
    if (value.name === productName) {
      return value.price;
    }
  }
  return null;
}
console.log(getProductPrice("Radar"));

//19
function getAllPropValues(propName) {
  const productArray = [];

  for (let product of products) {
    for (let key in product) {
      if (key === propName) {
        productArray.push(product[propName]);
      }
    }
  }

  // for (let product of products){
  //   if (Object.keys(product).includes(propName)){
  //    productArray.push(product[propName]);}}

  return productArray;
}
console.log(getAllPropValues("name"));

//20
function calculateTotalPrice(productName) {
  let total = 0;
  for (let value of products) {
    //for (let value of Object.values(products)) {

    if (value.name === productName) {
      total += value.price * value.quantity;
    }
  }
  return total;
}
console.log("20. Radar " + calculateTotalPrice("Radar"));
