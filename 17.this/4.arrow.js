/**
 * 자바스크립트에서 함수는 만능 슈퍼맨
 * 함수처럼 사용도 가능하고, 생성자 함수로 사용(클래스) 가능
 * 하지만, 이걸 사용하기 위해선 불필요한 무거운 프로토타입 객체가 생긴다.
 */

const dog = {
  name: 'mong',
  // 객체 안에서 함수를 사용하는 것은 사실 좋지 않아.
  play: function () {
    console.log('Im happy');
  },

  // 에로우 함수를 가지고 생성자 함수를 사용 할 수 없는걸 확인 할 수 있다.
  //   play: () => {
  //     console.log('Im happy');
  //   },
};
dog.play();

console.log();

const obj = new dog.play();
console.log(obj);

console.log();

/**
 * ES6 메서드가 나왔어
 * -> 객체 안에서 함수를 사용하는 것은 사실 좋지 않기 때문에
 */
const cat = {
  name: 'nabi',

  // 객체의 메서드라고 부른다 -> 함수 바로만드는거 : 오브젝트에 속한 함수
  play() {
    console.log('happy happy');
  },
};
cat.play();

// 이거는 위에 와 다르게 사용 못하는걸 확인할 수 있다.
// const obj2 = new cat.play(); // -> 생성자 함수로 사용 할 수 없다. ❌

console.log();

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔
 * 2. 생성자 함수로 사용이 불가능 -> 무거운 프로토타입을 만들지 ❌!
 * 3. 함수 자체 arguments를 가지고 있지 ❌
 * 4. this에 대한 binding이 정적으로 결정
 *  -> 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩.
 */

function sum(a, b) {
  console.log(arguments);
}
sum(10, 20);

console.log();

const add = (a, b) => {
  console.log(arguments); // arrow함수 외부 arguments를 참조만 한다.
};
add(30, 40);

console.log();

const printArrow = () => {
  console.log(this); // -> node에서 globalThis인 module를 출력 하는것을 확인 할 수 있다.
};
printArrow();
cat.printArrow = printArrow;
cat.printArrow();
