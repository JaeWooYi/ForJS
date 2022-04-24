// 단항연산자 Unary Operator
/**
 * 양 (+)
 * 음 (-)
 * 부정 (!)
 */

let a = 5;
a = -a; // -1 * 5
console.log(a);
a = -a; // -1 * -5
console.log(a);
a = +a; // +1 * 5
console.log(a);

console.log();

a = -a;
a = +a; // 내생각에는 -5가 결과값으로 나올거야
console.log(a);

console.log();

let booleanEx = true;
console.log(booleanEx);
console.log(!booleanEx);
console.log(!!booleanEx);

// (+)연산자를 쓸때 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인 가능.
console.clear(); // -> 터미널 깨끗이
console.log(+false); // 0
console.log(+null); // 0
console.log(+""); // 0
console.log(+true); // 1
console.log(+"aaa"); // Not A Number
console.log(+undefined); // Not A Number

// tip) 위에 console.log(!!booleanEx);에서 봤자나
// (!!)을 통해 불리언이 아닌 값을 불리언 타입으로 변환하고 싶다면 (!!)를 쓰자.
// (!)를 한번만 쓰는건 부정연산자일 뿐.
console.log(!!"kkk");
