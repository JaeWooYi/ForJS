// 동등 비교 관계 연산자 (Equality operator)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);

console.log();

console.log(2 == '2'); // 타입은 다르지만 담고 있는걸 숫자로 자동으로 변환하면서 비교, 그러므로 true
console.log(2 == '3'); // 타입까지 체크

console.log();

console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);

console.clear();

console.log();

const obj1 = {
  name: 'JS',
};
const obj2 = {
  name: 'JS',
};
console.log(obj1 == obj2); // 각 변수에는 다른 메모리 주소가 들어가 있어서 false가 나온다. 타입만 같을 뿐
console.log(obj1.name == obj2.name); // 같은 문자열을 가지고 있으므로
console.log(obj1.name === obj2.name);

console.log();

let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);
