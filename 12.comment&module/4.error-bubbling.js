// Bubbling up, Propagating

function a() {
  throw new Error('error!');
}

function b() {
  // -> 에러를 잡고 싶은 데에서 try - catch를 해주면 된다
  try {
    a();
  } catch (e) {
    console.log('에러 해결 불가능');
    throw e; // -> 처리 불가면 에러를 또 던저
  }
  //   a(); // 이거 주석하고 위에 주석 풀고 한번 실행해봐 -> 에러를 어디서 잡는지
}

function c() {
  b();
}

try {
  c();
} catch (e) {
  console.log('Catched!');
}
console.log('done!');
