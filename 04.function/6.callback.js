// 콜백함수
const add = function (a, b) {
  console.log(arguments);
  return a + b;
};
const multiplication = (a, b) => a * b;

// 전달된 action은 콜백 함수
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달됨.
// 그래서 함수는 고차함수(calculator)안에서 호출이 나중에 콜백이 된다.
function calculator(a, b, action) {
  if (a <= 0 || b <= 0) {
    // 만약 a나 b가 0보다 작으면
    return; // 계산하지 않고 싶어
  }
  let result = action(a, b);
  console.log(arguments);
  console.log(result);
  return result;
}

calculator(-1, -2, add);
console.log();
calculator(1, 2, multiplication);
