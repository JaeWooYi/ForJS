// while(조건) {}
// 조건이 false될 때까지 {} 코드를 반복 실행
// while은 따로 변수를 초기화 하거나 증가하는 부분이 들어있지 않아 외부에서 해줘야 함.

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;
while (isActive) {
  console.log('continue alive');
  if (i == 10) {
    console.log('kill me');
    break;
  }
  i++;
}

console.log();

// do-while은 while을 실행하고 나서 do(조건)을 실행(false임에도 처음 한번은 실행 됐지? 처음 한번은 무조건 실행시키는거야)
let isUnActive = false;
do {
  console.log('continue alive');
} while (isUnActive);
