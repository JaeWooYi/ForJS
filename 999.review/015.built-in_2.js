// 랜덤한 값을 반환(******************* 유용함)
console.log(Math.random());
console.log(Math.round(Math.random() * 10 + 1));

console.log();
console.log();
console.log();
console.log();

let text = 'HI! My name is Misery!';
console.log(text);
console.log(text[0]);
console.log(text.charAt(0));
console.log();
console.log(text.indexOf('!'));
console.log(text.lastIndexOf('!'));

console.log(text.includes('a'));
console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log();

let test = text.split(' ');
let testC = test.toString();
testC = testC.replaceAll(',', '|');
console.log(testC);
