// 카운터 만들기
// 0이상의 값으로 초기화한 뒤 하나씩 숫자를 증가 할 수 있는 카운터 만들어보기
// ex) 식당에서 손님 들어오면 한사람 한사람 카운트 하는거처럼

class Counter {
  #num; // 이거의 의미가 무엇일고
  constructor(firstNum) {
    if (firstNum < 0 || isNaN(firstNum)) {
      this.#num = 0;
    } else {
      this.#num = firstNum;
    }
  }
  plus() {
    this.#num++;
  }
  get value() {
    return this.#num;
  }
}
const counter = new Counter(0);
console.log(counter);
counter.plus();
console.log(counter.value);

console.log();
console.log();
console.log();
console.log();

class myCounter {
  constructor(myNum) {
    if (myNum < 0 || isNaN(myNum)) {
      console.log('0이상의 수를 선택해 주세요');
    } else {
      this.myNum = myNum;
    }
  }
  myPlus() {
    this.myNum++;
    console.log(this.myNum);
  }
}
var myAns = new myCounter(-1);
myAns.myPlus();
myAns.myPlus();
myAns.myPlus();
myAns.myPlus();
