// 만약 리턴이없으면 JS에서 (return undefined;) 을 자동으로 붙여준다.
// returnt undefine; 은 걍 return;의 약자야

function add(a, b) {
  console.log('a : ' + a);
  console.log('b : ' + b);
  return a + b;
}

const result = add(1, 2);
console.log(result);

console.log();

// 단순 출력이라면 리턴없이 써두대 아래처럼
function print(text) {
  console.log(text);
}
print('abab');
let outcome = print('test');
console.log(outcome);

console.log();

// 함수 만들어봐. 양수일때만 프린트 찍히게
// 리턴을 중간에 하게 되면 함수가 종료된다.
// 사용예 : 조건이 맞지 않는 경우 함수 도입 부분에서 함수를 일찍이 종료한다.
function plusNumber(number) {
  if (number <= 0) {
    return console.log('마이너스 숫자값 or 0');
  }
  console.log(number);
}
plusNumber(2);
plusNumber(0);
plusNumber(-1);
