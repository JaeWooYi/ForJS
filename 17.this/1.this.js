/**
 * 글로벌 컨텍스트에서 This란
 *  - 브라우져 : window
 *  - 노드 : module
 */

// 여기서 this는 module을 가르킨다.
const x = 0;
module.exports.x = x;
console.log(this);

// node에서 사용 할 수 있는 전역 객체가 출력된다. -> globalThis
console.log(globalThis);
// globalThis.setTimeout();
// setTimeout();    -> globalThis는 생략이 가능하다.

console.clear();

/**
 * 함수 내부에서의 this
 * 'use strict';(최상단 선언) -> 엄격모드에서는 undefined
 * 느슨한 모드에서는 globalThis를 가리키는걸 확인 할 수 있다.
 */
function fun() {
  console.log(this);
}
fun();

console.log();

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가르킨다.
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('nabi1');
const cat2 = new Cat('nabi2');
cat1.printName();
cat2.printName();
