/**
 * 주어진 seconds(초)가 지나면 callback함수를 호출
 * 단, seconds가 0보다 작으면 에러를 던진다!
 */
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback함수가 필요합니다');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds가 0보다 커야합니다.');
  }
  setTimeout(callback, seconds * 1000);
}

runInDelay(() => {
  console.log('타이머 완료');
}, 2);

// 에러 발생의 경우
try {
  runInDelay(() => {
    console.log('타이머 완료2');
  }, -2);
} catch (e) {
  console.log('error발생!');
}
