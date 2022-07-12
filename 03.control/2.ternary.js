// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 표현식(참인경우->true) : 표현식(거짓인경우->false)
console.log('1.');
let fruit = 'apple';
if (fruit == 'apple') {
  console.log('🍎');
} else {
  console.log('🥚');
}

console.log();

console.log('2.');
console.log('위를 삼항 연산자로');
fruit == 'apple' ? console.log('🍎') : console.log('🥚');

console.log();

console.log('3.');
let image = fruit == 'apple' ? '🍎' : '🍊'; // 이런식으로 값 자체를 넣을 수도 있다.
console.log(image);
