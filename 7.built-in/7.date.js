// 현재시간 바로 출력
console.log(new Date());

// UTC (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
// 특정시간 출력
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

console.log();

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00'));

console.log();

// 인덱스는 거진 0부터 시작
const nowTime = new Date();
nowTime.setFullYear(2023);
nowTime.setMonth(0); // 0부터 시작 : 12월은 11이겠지?

console.log(nowTime.getFullYear());
console.log(nowTime.getDate());
console.log(nowTime.getDay());
console.log(nowTime.getTime());
console.log(nowTime);

console.log();

console.log(nowTime.toString());
console.log(nowTime.toDateString());
console.log(nowTime.toTimeString());
console.log(nowTime.toISOString()); // ISO 8601 형식
console.log(nowTime.toLocaleString('en-US')); // 미국형식으로 표기
console.log(nowTime.toLocaleString('ko-KR')); // 한국이겠지 이건?
