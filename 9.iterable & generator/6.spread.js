/**
 * Spread 연산자, 전개구문
 * 모든 Iterable은 Spread될수 있다
 * -> 순회가 가능한 모든 것들은 최르르륵 펼칠 수 있다.
 */

function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums));

console.log();

// Rest Parameter
function sum(first, second, ...nums) {
  console.log(first, second, nums);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log();

// Array Concat
const fruit1 = ['🥝', '🍓'];
const fruit2 = ['🍌', '🍇'];
let arr1 = fruit1.concat(fruit2);
console.log(arr1);
// 다른 방법!
arr2 = [...fruit1, ...fruit2, '☣︎'];
console.log(arr2);

console.log();

// Object
const name1 = {
  name: 'kk',
  age: 30,
  random: { image: '⚡︎' },
};
const update = { ...name1, war: '☭' };
console.log(name1);
console.log(update);
