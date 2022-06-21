// quiz
// 1. 문자열의 모든 캐릭터를 하나씩 출력
const text = 'Hello World!';
for (let i = 0; i < text.length; i++) {
  console.log(text.charAt(i));
}

console.log();

// 2. 사용자의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, uesr3, user4';
let aa = ids.split(',');
console.log(aa);

console.log();

// 3. 1초에 한번씩 시계를(날짜포함) 출력 -> setInterval사용
const time = new Date();

let kkk = setInterval(function () {
  console.log(time.toLocaleString('kr-KR'));
}, 1000);

setTimeout(function () {
  clearInterval(kkk);
  console.log('stop');
}, 5900);
