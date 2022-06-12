function all(...num) {
  console.log(num);
}
let allEx = all(1, 3, 5);

console.log();
console.log();

let add = function add(a, b) {
  return a + b;
};
let mul = function mul(a, b) {
  return a * b;
};
function calc(a, b, func) {
  if (a < 0 || b < 0) {
    return false;
  }
  let result = func(a, b);
  console.log(arguments);
  console.log(result);
}
calc(1, 2, add);
