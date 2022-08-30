'use strict';
var val1 = 25;
var val2 = 4;
var multiply = () => {
  return val1 * val2;
};
if (true) {
  var val1 = 2;
  var val2 = 3;
  var multiply = () => {
    return val1 * val2 * 3;
  };
  console.log(multiply());
}
function getProduct() {
  var val1 = 10;
  var val2 = 4;
  return multiply();
}
console.log(getProduct());
console.log(multiply());
