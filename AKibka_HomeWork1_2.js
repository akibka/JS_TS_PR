let number1 = prompt("Enter your first number", "");
let number2 = prompt("Enter your second number", "");
number1 = parseFloat (number1);
number2 = parseFloat (number2);
let _sum = number1 + number2;
let _prd = number1 * number2;
let _diff = Math.abs (number1 - number2);
let _quot = number1 / number2;
alert ("Sum: " + _sum + ",\nProduct: " + _prd + ",\nDifference: " + _diff + ",\nQuotient: " + _quot);

//I tried to simplify it without such variables like _sum, _prd, etc., But it didn't allow me properly calculate Sum or Prd
//Example 1: alert("Sum: " + number1 + number2) -> 5+2 = 52
//Example 2: alert("Product: " + number1 * number2) -> NaN


