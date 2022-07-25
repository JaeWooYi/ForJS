function a() {
  for (let i = 0; i < 10000000000; i++); // 이거를 통해서 함수가 순차적으로 진행되는걸 알수있지? -> 3이 늦게나오자나
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('start!');
const result = c();
console.log(result);
