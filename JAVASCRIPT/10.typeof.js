// typeof : 데이터 타입을 확인 할 수 있음.
// 특정 데이터 값을 문자열로 반환해주는 연산자야.
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; // <- 할당된 값에 따라 타입이 결정된다.
console.log(typeof variable);

variable = {};  // {} -> object
console.log(typeof variable);

variable = function(){};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log();

console.log(typeof 123);
console.log(typeof '123');
