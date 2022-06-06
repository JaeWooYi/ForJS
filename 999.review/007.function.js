function add(num1, num2) {
  let result = num1 - num2;
  console.log('함수');
  return result;
}

let kk = add(10, 20);
console.log(kk);

console.log();

function add2(a, b) {
  let sum = console.log(a + b);
  return sum;
}
let add2Test = add2;
add2(100, 40);
add2Test(100, 50);
