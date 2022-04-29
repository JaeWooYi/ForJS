// 함수 선언문 : function name(){}
// 함수 표현식 : const name = function (){}

let add = function (a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(2, 4));

console.log();

// 화살표 함수 : const name = () => {}
let add2 = (c, d) => {
  console.log(arguments);
  return c + d;
};
console.log(add2(1, 3));

// 생성자 함수 : const object = new Function(); -> 객체 편에서 다뤄준다 함.

console.log();

// Tip : (함수)(); -> 함수를 괄호로 묶고 ();뒤에 써주면 바로 실행 가능
// IIFE (Immediately-Invoked Function Expressions)
(function run() {
  console.log('😂');
})();
