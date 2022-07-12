let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result); // 내생각에는 14 수학적으로 -> 곱 연산이 먼저!

console.log();

// result = a++ + b * 4; // 15 -> x , 왜 14? a가 후위 ++ 이기 때문에
// console.log(result); // 아래처럼 해야 15

console.log();

result = ++a + b * 4;
console.log(result);

// 우선순위를 조정하고 싶으면 어떻게 하나요? 초등학교 때 배웠자나 괄호
