// 1.
function add(num1, num2) {
  const result = num1 + num2;
  console.log('function');
  return result;
}

const good = add(1, 2);
console.log(good);

console.log();

// 2.
let lastName = 'Y';
let firstName = 'JW';
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// 위를 함수로
function myName(firstName2, lastName2) {
  let fullName2 = firstName2 + ' ' + lastName2 + '🥲'; // let fullName2 = `${firstName2} ${lastName2}`; -> 이렇게 써 걍...
  return fullName2;
}
const full = myName('K', 'KK');
console.log(full);
