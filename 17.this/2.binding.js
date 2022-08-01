/**
 * this binding
 * Java, C#, C++ 대부분 객체지향 프로그래밍 언어에서는
 * this는 항상 자신의 인스턴스 자체를 가르킨다.
 * 정적으로 인스턴스가 만들어지는 시점에 this가 결정된다.
 *
 * 하지만 javascript에서는 누가 호출하냐에 따라 this가 달라질 수 있다.
 * 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정 된다.
 */

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`Cat name : ${this.name}`);
  };
}
function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`Dog name : ${this.name}`);
  };
}

const cat1 = new Cat('nabi');
const dog1 = new Dog('mong');
cat1.printName();
dog1.printName();

console.log();

dog1.printName = cat1.printName;
cat1.printName();
dog1.printName();

console.log();

function printOnMonitor(printName) {
  console.log('ready moditor -> pass callback execution');
  printName();
}
printOnMonitor(cat1.printName);
