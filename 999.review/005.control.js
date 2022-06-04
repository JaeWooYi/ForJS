let a = 'a';
if (a === 'b') {
  console.log('O');
} else {
  console.log('X');
}
console.log();
console.log();

if (false) {
  console.log('false일때는 출력 x');
} else {
  console.log('true일때만 출력');
}

console.log();
console.log();
console.log('삼항연산자자');
console.log('형태 ----> 변수 == x ? 조건(true) : 조건(false)');
let kkk = '😣';
let check = kkk == '😣' ? 'true일까' : 'false일까';
console.log(check);

console.log();
console.log();
console.log();
console.log('quiz');
let num = 3;
if (num % 2 == 1) {
  console.log('👍');
} else {
  console.log('❌');
}
let check2 = num == 3 ? '👍' : '❌';
console.log(check2);
