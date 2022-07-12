// 반복문 Loop Statemente
// for(변수선언문; 조건식; 증감식){}
// 실행순서
// 1. 변수선언
// 2. 조건식의 값이 참이라면 {} 코드블럭을 실행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될때까지 2번과 3번을 반복

// ex)
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2개씩 증가하고 싶다면
for (let i = 0; i < 5; i = i + 2) {
  console.log(i);
}

// 2중 for문
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 6; j++) {
    console.log(i + ', ' + j);
  }
}
console.log('어이없네');

// 무한루프
// for (;;) {
//   console.log(😝);
// }

// 반복문 제어 : continue, berak;
for (let z = 0; z < 20; z++) {
  if (z == 10) {
    console.log('z is 10!');
    //continue; // 조건이 맞으면 다음 반복문으로 넘어간다.(10이 안찍힌다는 말이다.)
    break; // 10찍으면 그만두고 싶어 할 때 쓰는거
  } else {
    console.log(z);
  }
}
