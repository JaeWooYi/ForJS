// 산술연산자 (Arithmetic operators)
/**
 * +
 * -
 * *
 * /
 * %
 * **(지수-거듭제곱)
 */
console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2);

console.log();

// 지수연산자를 사용하기 전에 사용했던 방법.
console.log(Math.pow(5, 2));

console.log();

// (+)연산자의 주의점
let text = "Hi" + ", " + "Blue..";
console.log(text);
// 숫자와 문자열을 더하면?
text = "Hi" + 2;
console.log(text);
console.log(typeof text); // 숫자와 문자열을 더하면 문자열로 나와.
