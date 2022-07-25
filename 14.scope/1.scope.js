/**
 * Scope(범위, 영역)
 * 변수를 참조할 수 있는(접근할 수 있는) 유효한 범위 -> 식별자가(변수, 함수, 클래스 이름) 유효한 범위
 * 선언된 위치에 따라 유효 범위가 결정됨
 * {}, if(){}, for(){}, function(){}, ... -> 블럭 안의 변수는 블럭 안에서만 유효 : 이름 충돌 방지, 메모리 절약
 * 블럭 외부에서는 블럭 내부의 변수를 참조 할 수 ❌!
 */
{
  const a = 'a'; // var로 변수 만들면 되는뎅? -> const, let은 안되네 왜 var만 되는거지?
  console.log(a);
  var c = 'c';
}
// console.log(a);  // 밖에서 불러보면 앱이 crashed 겠지?
console.log(c);

const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조 ❌!
function print() {
  const message = 'Scope!'; // 지역변수
  console.log(message);
}
print();

// 함수 외부에서는 함수의 매개변수를 참조 ❌!
function sum(a, b) {
  return console.log(a + b);
}
sum(10, 20);
