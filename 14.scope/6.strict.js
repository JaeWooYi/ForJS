/**
 * strict mode
 * 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임
 */

// 이렇게 적으주면 엄격모드가 실행된다. -> 최상단 : 물론 사용하는 곳에서 선언해도 되지만 일반적으로 그냥 파일 최상단에 한데.
'use strict';

var x = 1;
// delete x;   // 엄격모드 안쓰면 가능한데, 우리는 최상단에 'use strict'; 선언했자나, 그래서 안되는거야

console.log();

function add(x) {
  var a = 2;
  //   b = x + a; // 존재 하지 않는 변수 쓰면 에러메시지뜨는데.. 요건 당연한거 아닌가? -> 'use strict'; 주석해도 에러는 안나냉
  console.log(this); // 'use strict';를 사용하면 함수 안에서 this를 출력하면 undefined가 나온다.
}
add(1);

console.log();

const arr = [10, 20, 30];
// 엄격 모드 사용하면 이것도 에러가 나는군
// for (num of arr) {  // num is not defined니까
for (let num of arr) {
  // 쓰고 싶으면 변수로 선언을 해줘약 겠지?
  console.log(num);
}
