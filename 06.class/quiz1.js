// 카운터 만들기
// 0이상의 값으로 초기화한 뒤 하나씩 숫자를 증가 할 수 있는 카운터 만들어보기
// ex) 식당에서 손님 들어오면 한사람 한사람 카운트 하는거처럼

class Counter {
  #num;
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
counter.plus();
console.log(counter.value);
counter.plus();
console.log(counter.value);

/** 내가 푼 답 */
// class Counter {
//   constructor(num) {
//     this.num = num;
//   }
//   plus() {
//     this.num++;
//     console.log(this.num);
//   }
// }
// let good = new Counter(0);
// console.log(good);
// good.plus();
// good.plus();
// good.plus();
// good.plus();
// good.plus();
