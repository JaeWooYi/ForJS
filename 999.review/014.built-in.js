let number = 123;
console.log(number);
console.log(number.toString());

var text = '    hello';
console.log(text.trim());
// trim() 공백 제거

console.log();

console.log(globalThis);

console.log();
console.log(this);
console.log(Infinity);
console.log(NaN);

console.log();

eval('const num = 3; console.log(num)');
console.log();

let k = 3.14;
k = parseInt(k);
console.log(k);

console.log();

let url = 'https://www.ex.com';
console.log(url);
let encode = encodeURI(url);
console.log(encode);
let decode = encodeURI(encode);
console.log(decode);

console.log();

const part = '짱구.com'; // http가 안보이네
console.log(part);
let ccc = encodeURIComponent(part);
console.log(ccc);

console.log();

let boolEx = true;
console.log(boolEx.valueOf());

console.log();

function abc(a) {
  if (a > 0) {
    return true;
  } else if (a < 0) {
    return false;
  }
}

let boolEx2 = abc(-1);
console.log(boolEx2.valueOf());
