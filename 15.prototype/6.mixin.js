/**
 * 오브젝트는 단 하나의 prototype을 가리킬 수 있다.(부모는 단 하나!) -> java에서도 extends 하나밖에 못 하자나
 * 여러개의 함수를 상속하고 싶다면?
 * -> Mixin을 쓰면 된다
 */

const pray = {
  pray: function () {
    console.log(`${this.name} pray for me....`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} go sleep..`);
  },
};

function Me(name) {
  this.name = name;
}

// assign() -> Me의 prototype에 pray, sleep객체를 할당 하겠다!
Object.assign(Me.prototype, pray, sleep);

const me = new Me('YJW');
console.log(me);
me.pray();
me.sleep();

console.log();
console.log('-----------------------------------------------------');
console.log();

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, pray, sleep);
const tiger = new Tiger('Big Cat');
tiger.pray();
tiger.sleep();
