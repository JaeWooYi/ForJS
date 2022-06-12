// 1. 주어진 숫자만큼 0부터 순회하는 함수.
// 2. 순회하면서 주어진 특정한 일을 수행해야 함.
// ex) 숫자 5를 전달하고, 순회하는 숫자를 전부다 출력하고 싶음.

// 3. ex) 최대값 5가 주어지면서, 순회하는 숫자에 2배값을 다 출력하고 싶음.

function justNum(num) {
  console.log(num);
}

function multNum(num) {
  console.log(num * 2);
}

function quiz(max, action) {
  for (let i = 0; i < max + 1; i++) {
    action(i);
  }
}

quiz(10, multNum);
