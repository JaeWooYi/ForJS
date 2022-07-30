/**
 * closure : 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해 쓰인다.
 * -> 캡슐화와 정보 은닉을 위해 쓰인다.
 * Class의 private사용하는 것과 똑같은 효과를 누리기 위해
 */
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

let fun1 = makeCounter();
fun1();
fun1();
fun1();

console.log();

// 사실 작성할 필요가 없다 -> 클래스를 사용하면 되니까
class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter1 = new Counter();
counter1.increase();
counter1.increase();
counter1.increase();
