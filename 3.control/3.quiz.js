// 퀴즈
let num = 3;
// num의 숫자가 짝수이면 👍🏻, 홀수면 👎🏻

// 1. if문
if (num % 2 == 0) {
  console.log('👍🏻');
} else if (num % 2 == 1) {
  console.log('👎🏻');
} else {
  console.log('너 바보니?');
}

console.log();

// 2. 삼항연산자
num % 2 == 0 ? console.log('👍🏻') : console.log('👎🏻');

console.log();

// 2.번 더 간단하게
let KKK = num % 2 == 0 ? '👍🏻' : '👎🏻';
console.log(KKK);
