// Math
// static properties, method

console.log(Math.E); // 오일러의 상수 -> 자연로그의 밑
console.log(Math.PI); // 원주율 PI값

console.log();

// static method
// 절대값
console.log(Math.abs(-10));
// 소수점 이하를 올림
console.log(Math.ceil(1.4));
// 소수점 이하를 내림
console.log(Math.floor(1.4));
console.log();
// 소수점 이하를 반올림
console.log(Math.round(1.4));
console.log(Math.round(1.6));
// 정수만 반환
console.log(Math.trunc(1.5432));

console.log();

// 최대값, 최소값 찾기
console.log(Math.max(1, 2, 3));
console.log(Math.min(1, 2, 3));
// 거듭제곱
console.log(3 ** 2);
console.log(Math.pow(3, 2));

console.log();

// 제곱근
console.log(Math.sqrt(9));

// 랜덤한 값을 반환(******************* 유용함)
console.log(Math.random());
console.log(Math.round(Math.random() * 10 + 1));
