const textObj = new String('Hello!');
const text = 'Hi!';
console.log(textObj);
console.log(text);

console.log();

console.log(text[0]); // 1번째 인덱스(0부터 시작)
console.log(text.charAt(0)); // 0번째 인덱스에는 뭐가 있을까? -> 위랑 같은거야

console.log();

console.log(text.length);
console.log(textObj.indexOf('!')); // 앞에서부터 찾기
console.log(textObj.lastIndexOf('H')); // 뒤에서부터 찾기

console.log();

// 해당문자가 있는지
console.log(textObj.includes('lo'));
console.log(textObj.includes('xl'));
// 특정한문자로 시작하는지
console.log(textObj.startsWith('he'));
console.log(textObj.startsWith('He'));

console.log(textObj.endsWith('h'));
console.log(textObj.endsWith('!'));

console.log();

// 전부다 대문자로
console.log(textObj.toUpperCase());
// 전부다 소문자
console.log(textObj.toLowerCase());

// 특정위치의 문자열 삭제
console.log(textObj.substring(0, 2)); // -> 0부터 2이전까지의 인덱스 까지만 가져옴
console.log(textObj.slice(2)); // 2인덱스 전까지 삭제
console.log(textObj.slice(-2)); // 뒤에서 삭제

console.log();

// 공백 제거
const space = '            s        pa ce    ';
console.log(space.trim()); // 앞뒤 공백이 제거되는군 허나 문자열 사이의 공백은 제거 아냐

console.log();

// ***** split *****
const longText = 'RedRum BlueRum YelloRum WhideRum BlackRum';
// 공백별로 문자열을 끊어주고 싶다면
console.log(longText.split(' '));
console.log(longText.split(' ', 2)); // 끊어진거중 2덩어리만 받고싶다면
console.log();
const longText2 = 'RedRum BlueRum, YelloRum WhideRum, BlackRum';
console.log(longText2.split(', '));
