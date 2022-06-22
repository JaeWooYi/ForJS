var arrEx = [1, 3, 5, 7, 9];
var arr1 = arrEx[0];
console.log(arr1);

console.log();

for (let i = 0; i < arrEx.length; i++) {
  console.log(arrEx[i]);
}

arrEx[0] = 'a';
console.log(arrEx);

console.log();

delete arrEx[0];
console.log(arrEx);

console.log();
console.log();
console.log();

const arrEx2 = ['a', 'b', 'c'];
console.log(Array.isArray(arrEx2));
let z = 'z';
console.log(Array.isArray(z));

console.log();

console.log(arrEx2.indexOf('c'));
console.log(arrEx2.includes('d'));

console.log();

arrEx2.push('☣︎');
console.log(arrEx2);
arrEx2.pop();
console.log(arrEx2);
arrEx2.shift();
console.log(arrEx2);

console.log();

console.log('---------------');

let arr = ['☢︎', '☠︎', '⚡︎', '☭', '⚠︎'];
let arr2 = arr.splice(0, 3);
console.log(arr);
console.log(arr2);
let arr3 = arr2.splice(2, 0, '10', '20');
console.log(arr2);

console.log('---------------');
console.log();

let exJoin = [1, 3, 5, [2, 4, 8, [7, 9]]];
exJoin = exJoin.flat(2);
console.log(exJoin);
let exJoin2 = exJoin.join(' | '); // join안에 '|'로 하면 ','대신 '|'로 구분 가능
console.log(exJoin2);
