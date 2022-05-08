const num1 = 1;
const num2 = new Number(2); // 메모리 낭비
console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);

console.log();

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

console.log();
// 숫자인지 아닌지 확인 이런거 확인할때 쓰는거양 위에있는거
if (num1 != Number.NaN) {
  console.log(1);
}
if (Number.isNaN(num1)) {
  console.log('---');
}

console.log();

// 지수표기법(매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

console.log();

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());
// 숫자를 문자열로 변환
console.log(num4.toString());
// toLocaleString -> 그 나라에 맞는 문자 표기, 아래 예시는 아랍일걸?
console.log(num4.toLocaleString('ar-EG'));

console.log();

// 원하는 자리수 까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(3));
console.log(num4.toPrecision(2));
console.log(num4.toPrecision(1));

console.log();

console.log(Number.EPSILON); // 0~1사이에서 나타낼수 있는 가장 작은 수(정수 사이에서)
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON + ' : ' + true);
}

console.log();

const num = 0.1 + 0.2 - 0.2; // 0.1 아니야?
console.log(num); // 왜 저딴 숫자가 나오지
// 이런 작은 오차를 나타내는게 위에 EPSILON이래

console.log();

// function isEqual(origin, expect) {
//   return origin == expect;
// }
// 작은 오차면 그냥 넘어가게 위 함수 변경
function isEqual(origin, expect) {
  return origin - expect < Number.EPSILON;
}
console.log(isEqual(1, 2));
console.log(isEqual(1, 1));
console.log(isEqual(num, 0.1)); // 오차때문에 다른게 나와
