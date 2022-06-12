// 주어진 숫자만큼 0부터 순회하는 함수.
// 순회하면서 주어진 특정한 일을 수행해야 함.
// ex) 숫자 5를 전달하고, 순회하는 숫자를 전부다 출력하고 싶음.
// ex) 최대값 5가 주어지면서, 순회하는 숫자에 2배값을 다 출력하고 싶음.
// hint) function iterate(max, action)

console.log('1번문제');
function act(num) {
  for (let i = 1; i < num + 1; i++) {
    let result = i * 2;
    console.log(result);
  }
}
function loop(num, action) {
  let logLoop = action(num);
  return logLoop;
}
loop(5, act);
console.log();

console.log('2번문제');
let my = {
  name: 'jw',
  age: 10,
};
console.log(my);
function change(obj) {
  return { ...obj, name: 'kk' };
}
let test = change(my);
console.log(test);
