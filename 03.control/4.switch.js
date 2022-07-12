// 조건문 Conditional Statement
// switch : 정해진 범위안에 값에 대해 특정한 일을 해야 하는 경우

let day = 7; // 0: monday, 1: tuesday, ..., 6: sunday
let dayName;
if (day == 0) {
  dayName = 'monday';
} else if (day == 1) {
  dayName = 'tuesday';
} else if (day == 2) {
  dayName = 'wednesday';
} else if (day == 3) {
  dayName = 'thursday';
} else if (day == 4) {
  dayName = 'friday';
} else if (day == 5) {
  dayName = 'saturday';
} else if (day == 6) {
  dayName = 'sunday';
}

// 위에 너무 길어 -> switch로 바꿔보자. (솔직히 내가 보기엔 둘다 길고 더러워 보임)
switch (day) {
  case 0:
    dayName = 'monday';
    break; // break를 통해 코드가 멈추도록 한다(그 다음 케이스를 확인 안함.)
  case 1:
    dayName = 'tuesday';
    break;
  case 2:
    dayName = 'wednesday';
    break;
  case 3:
    dayName = 'thursday';
    break;
  case 4:
    dayName = 'friday';
    break;
  case 5:
    dayName = 'saturday';
    break;
  case 6:
    dayName = 'sunday';
    break;
  default:
    console.log('ediot'); // default -> 이 모든 조건이 해당하지 않는다면 (if문의 else와 같지?)
}
// break를 사용하지 않으면 끝까지가(니가 day에 무슨 수를 넣던 일요일만 나온다고.)
console.log(dayName);

console.log();

let condition = 'bad';
let text;
switch (condition) {
  case 'good':
  case 'okay':
    text = 'Happy';
    break;
  case 'bad':
    text = 'Unfortune';
    break;
}
console.log(text);
