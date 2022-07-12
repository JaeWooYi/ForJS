// 매개변수의 기본값은(아무것도 없으면) undefined
// 매개변수 기본값 Default Parameter 라고 부른다.
function add(a, b) {
  // 만약 여기서 함수 만들때 기본값을 설정하고 싶다면 ex) a = 1, b = 2 이런식으로 써주면 된다.(Default Parameter)
  console.log('a : ' + a);
  console.log('b : ' + b);
  console.log(arguments); // 이거하면 위에처럼 귀찮게 안써도 되는구나
  return a + b;
}
console.log(add());

console.log();

// 만약 정해주지 않은 인자가 더 들어오면?
// 정해주지 않은 인자는 무시하고, a와 b에 정해준 값만 들어가는군
console.log(add(1, 2, 3));

// 결론 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments라는 객체에 저장된다.

console.log();

console.log('Rest Parameter');
// Rest 매개변수(Rest Parameters란 뭘까?)
function sum(...numbers) {
  // ...은 인자개수를 규정하지 않을때(배열로 받고 싶을떄)
  console.log(numbers);
}
sum(1, 2, 3, 4, 5);
