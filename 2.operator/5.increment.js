// 증가 & 감소 연산자 ( Increment & Decremnet Operator)
let a = 0;
console.log(a);
a++; //a = a + 1;
console.log(a);

a--; // a = a - 1
console.log(a);

console.clear();

// 주의사항!!
// a++, ++a : 필요한 연산을 하고 그 뒤 값을 증가, 값을 먼저 증가시키고 필요한 연산을 한다.
let num1 = 5;
let numTest1 = num1++;
console.log(numTest1); // 5
console.log(num1); // 6

console.log();

let num2 = 3;
let numTest2 = ++num2;
console.log(numTest2); // 4
console.log(num2); // 4

console.log();

// 바로 출력을 해도 마찬가지야
let goodNum = 7;
console.log(goodNum++);
console.log(goodNum);
// 이미 위에서 goodNum에 8이 들어가있지?
console.log(++goodNum);
