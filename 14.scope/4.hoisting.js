/**
 * Hoisting으로 인해 함수를 정의를 밑에서 해도 위에서 사용 할 수 있다.
 * 함수의 선언문은 선언 이전에도 호출 가능.
 */
print();

function print() {
  console.log('HIHIHI');
}

console.log('-------------------');

// console.log(hi); // 변수의 경우는 호이스팅이 안되나? -> let, const, class 경우 선언만 호이스팅이 되고 초기화는 되지 않는다.
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생
let hi = 'HI';
console.log(hi);

console.log('-------------------');

// var의 경우는 crash는 안나고 undefined로 뜬다.
console.log(hi2);
var hi2 = 'HI2';
console.log(hi2);

console.log('-------------------');

// 함수를 변수에 표현식으로 하면 접근이 마찬가지로 안되겠지?
// console.log(func1);
let func1 = function func1() {};

console.log('-------------------');

/**
 * 클래스도 마찬가지
 */

// let dog = new Dog('zzz', '🐶');
// console.log(dog);
// class Dog {
//   constructor(ownName, display) {
//     this.ownName = ownName;
//     this.display = display;
//   }
// }

class Cat {
  constructor(ownName, display) {
    this.ownName = ownName;
    this.display = display;
  }
}
const cat = new Cat('kkk', '🐱');
console.log(cat);

console.log('-------------------');

let x = 1;
{
  x = 2;
  console.log(x);
  x = 3; // 얘는 변수 재할당이 안되네.. 위에서 해야하는군.
}

let y = 10;
{
  console.log(y);
  //   let y = 20;    // Cannot access 'y' before initialization -----> 마찬가지로 이거뜸
}
