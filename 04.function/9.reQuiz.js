// 주어진 숫자만큼 0부터 순회하는 함수.
// 순회하면서 주어진 특정한 일을 수행해야 함.
// ex) 숫자 5를 전달하고, 순회하는 숫자를 전부다 출력하고 싶음.
// ex) 최대값 5가 주어지면서, 순회하는 숫자에 2배값을 다 출력하고 싶음.

// 순회하면서 나오는 수가 나오는 함수
function cycle(num) {
  console.log(num);
}

// 순회하면서 나오는 수에 *2 해주는 함수
function multiCycle(num) {
  console.log(num * 2);
}

function quizEx(num, action) {
  for (let i = 1; i < num + 1; i++) {
    action(i);
  }
}

quizEx(5, cycle);
console.log();
quizEx(3, multiCycle);
