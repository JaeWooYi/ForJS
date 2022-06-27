/**
 *  Iterable하다는것은 순회가 가능하다는 것
 * [Symbol.iterator]() : Iterator;
 * 심볼 정의를 가진 객체나, 특정 함수가 Iterator를 리턴한다는 것은 순회 가능 한
 * 객체인 것을 알 수 있다.
 * 순회가 가능 하면 무엇을 할 수 있을까요? for..of, spread
 */

const array = [10, 20, 30];
for (const goods of array) {
  console.log(goods);
}

console.log();

for (const goods of array.values()) {
  console.log(goods);
}

console.log();

for (const goods of array.keys()) {
  console.log(goods);
}

console.log();

for (const goods of array.entries()) {
  console.log(goods);
}

console.log();

// obj is not iterable 오류 나 -> 객체는 안되는군
// const obj = {
//   0: 10,
//   1: 20,
// };
// for (const item of obj) {
//   console.log(item);
// }

// for..of는 못써도 for..in은 되는구나!!
const obj = {
  0: 10,
  1: 20,
};
// obj안에 있는 key를 출력한다.
for (const item in obj) {
  console.log(item);
}
