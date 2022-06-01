let a;
a = 0;
console.log(a);

let b = 'b';
console.log(b);

const c = 'c';
console.log(c);

let num = -123;
let num2 = 1.23;
console.log(num);
console.log(num2);
let bigint = 1111123214124135315134134124214151514n;
console.log(bigint);
console.log();
console.log();
console.log();
console.log();

let stringEx = 'Hello';
// Hell / lo로 개행시키고 싶다면
stringEx = 'Hell \n lo';
console.log(stringEx);
// Hell / lo를 개행말고 그저 탭
stringEx = 'Hell \t lo';
console.log(stringEx);
console.log();
console.log();
console.log();

let id = 'YYY';
let greetings = '"hi",' + id + '🚑\n Have a good day!';
console.log(greetings);

console.log();

greetings = `'HI!, ${id}'🚑     
Have a good day!`;
console.log(greetings);
