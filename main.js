//Import the functions defined in add.js file
const calculation =require('./calculation')
//Test the calculation
console.log("Addition:", calculation.add(2, 3));
console.log("Subtraction:", calculation.subtract(2, 3));
console.log("Multiplication:", calculation.multiply(2, 3));
console.log("Division:", calculation.divide(2, 3));