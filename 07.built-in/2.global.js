console.log(globalThis);
console.log(this); // node에서의 this는 현재 모듈에서의 정보를 표현
console.log(Infinity);
console.log(NaN);
console.log(undefined);

console.log();

// JavaScript를 한줄 한줄씩 표현할 수 있는 함수
eval('const num = 3; console.log(num);');
// isFinite 숫자가 유한한지 아닌지 평가
console.log(isFinite(100));
console.log(isFinite(Infinity));
// parseFloat -> 문자열인데 float형으로 교환
// parseInt -> 문자열인데 int형으로 교환
console.log(parseFloat('1.23'));
console.log(parseInt('13.33'));

console.log();

// URL (URI(Uniform Resource Identifier)의 하위 개념)
// 아스키 문자로만 구성되야만 한다
// 한글이나 특수문자는 이스케이프 처리를 해줘야 한다.
// Ex)
const URL = 'https://www.짱구.com';
const encoded = encodeURI(URL);
console.log(encoded);
const decoded = decodeURI(encoded);
console.log(decoded);

console.log();

// 전체 URL이 아니라 부분적인 것은 Component를 사용
const part = '짱구.com'; // http가 안보이네
let ccc = encodeURIComponent(part);
console.log(ccc);
