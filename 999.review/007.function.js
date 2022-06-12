function add(num1, num2) {
  let result = num1 - num2;
  console.log('함수');
  return result;
}

let kk = add(10, 20);
console.log(kk);

console.log();

function add2(a, b) {
  let sum = console.log(a + b);
  return sum;
}
let add2Test = add2;
add2(100, 40);
add2Test(100, 50);

console.log();
// 함수 만들어봐. 양수일때만 프린트 찍히게
// 리턴을 중간에 하게 되면 함수가 종료된다.
// 사용예 : 조건이 맞지 않는 경우 함수 도입 부분에서 함수를 일찍이 종료한다.
function yangTest(aaa) {
  if (aaa <= 0) {
    console.log('not 양수');
  } else {
    console.log(aaa);
  }
}
let yangTestTest = yangTest(10);
let yangTestTest2 = yangTest(0);
