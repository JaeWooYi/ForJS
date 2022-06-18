// constructor를 이용한 생성자 함수를 만들어보자
class ClassEx {
  constructor(name, view) {
    this.name = name;
    this.view = view;
  }
  display() {
    console.log(`${this.name} : ${this.view}`);
  }
}
let constructorEx = new ClassEx('apple', '🍎');
console.log(constructorEx);
constructorEx.display();

console.log();
console.log();
console.log();

class Fruit {
  static MAX_FRUIT = 5;
  constructor(name, view) {
    this.name = name;
    this.view = view;
  }
  static makeRandomeFruit() {
    return new Fruit('banana', '🍌');
  }
  display = function () {
    console.log(`${this.name} : ${this.view}`);
  };
}
let apple = new Fruit('apple', '🍎');
console.log(apple);
apple.display();

console.log();
let bana = Fruit.makeRandomeFruit();
console.log(bana);
console.log(Fruit.MAX_FRUIT);
