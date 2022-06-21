let arrayEx = new Array(2);
arrayEx[0] = 0;
arrayEx[1] = 1;
arrayEx[2] = 2;
console.log(arrayEx);

var arrayEx2 = new Array(1, 3, 5);
console.log(arrayEx2);

console.log();

var arrayEx3 = Array.of(10, 20, 30);
console.log(arrayEx3);

var arrayEx4 = [2, 4, 6, 8];
console.log(arrayEx4);

console.log();

var changeArrayEx4 = Array.from(arrayEx4);
console.log(changeArrayEx4);

var arrayEx5 = Array.from('arrayEx4');
console.log(arrayEx5);

console.log();

let lastArray = Array.from({
  0: 'K',
  1: 99,
  length: 2,
});
console.log(lastArray);
