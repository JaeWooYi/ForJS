// 논리연산자 Logical Operater
// && : and
// || : or
// ! : denial(부정) -> 단항연산자에서 옴
// !! : 특정값을 boolean으로 변환
let num = 8;
if (num >= 0 && num < 9) {
  console.log('😃');
}

console.log();

let num2 = 0;
if (num2 != 8) {
  console.log('🥹');
}

console.log();

// 결론 : &&일때 둘중 하나라도 false면 false
console.log(true && true); // 내 생각 true
console.log(true && false); // 내 생각 false
console.log(false && true); // 내 생각 false
console.log(false && false); // 내 생각 false

console.log();

// 결론 : ||일때 둘중 하나라도 true면 true
console.log(true || true); // 내 생각 true
console.log(true || false); // 내 생각 true
console.log(false || true); // 내 생각 true
console.log(false || false); // 내 생각 false

console.log();

console.log(!'a'); // 부정
console.log(!!'a'); // 부정의 부정 -> true
