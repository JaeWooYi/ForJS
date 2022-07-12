// 주어진 숫자만큼 0부터 순회하는 함수.
// 순회하면서 주어진 특정한 일을 수행해야 함.
// ex) 숫자 5를 전달하고, 순회하는 숫자를 전부다 출력하고 싶음.
// ex) 최대값 5가 주어지면서, 순회하는 숫자에 2배값을 다 출력하고 싶음.
// hint) function iterate(max, action)

// 순회하는 숫자라는게 뭐지? 1,2,3,4,5...1,2,3,4,5...1,2,3,4,5 이런건가?

function justRoop(a) {
  for (a; a > 0; a--) {
    console.log(a);
  }
}

function roopAction(a) {
  if (a == 5) {
    for (a; a > 0; a--) {
      console.log(a * 2);
    }
  } else if (a != 5) {
    return;
  }
}

function iterate(max, action) {
  let result = action(max);
  console.log(result);
  return result;
}

iterate(5, justRoop);

console.log();

iterate(5, roopAction);

// justRoop(10);

// console.log();

// roopAction(5);

// console.log();

for (let kkk = 1; kkk <= 100; kkk++) {
  console.log(
    '나는 문제조차 이해 못하는 돌대가리 입니다. 죄송합니다. 바보라서.'
  );
  console.log('그만두겠습니다.');
}
