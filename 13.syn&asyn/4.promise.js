// 3.timeout_quiz를 promise버전으로 바꿔보자

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작습니다'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

// runInDelay(2).then('필요한 일 수행').catch('에러 처리').finally('최종적인 일(무조건 호출)')
// 무조건 성공하는 경우라면 catch와 finally는 생략이 가능하겠지?
runInDelay(2)
  .then(() => console.log('타이머 완료1'))
  .catch(e => console.error(e))
  .finally(() => console.log('finish1'));

runInDelay(0)
  .then(() => console.log('타이머 완료2'))
  .catch(e => console.error(e))
  .finally(() => console.log('finish2'));
