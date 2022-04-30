function iterate(max, action) {
  for (let i = 1; i < max; i++) {
    action(i);
  }
}

function conlog(k) {
  console.log(k);
}

function doubleConLog(k) {
  console.log(k * 2);
}

// iterate(4, conlog);

iterate(4, doubleConLog);

console.log();

// 실사용예래 돌대가리 씹쌔끼야. 벌레같은 너새끼한테는 봐도 뭐 도움 안되겠지만 따라서라도 쳐봐라 이 병신아.
// setTimeout() 이런거 원래 있는 함수야 이 씹 빡대가리야. 븅신새끼 이런거 말해줘도 아냐 뭐?
setTimeout(() => {
  console.log('5초 후 이 함수 실행');
}, 5000);
