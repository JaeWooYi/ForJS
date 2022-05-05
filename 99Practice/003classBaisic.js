// 객체 만들기 클래스로 만들어봐

class Fruit {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }
  display = function () {
    console.log(`${this.name} : ${this.image}`);
  };
}

let apple = new Fruit('apple', '🍎');
console.log(apple);
apple.display();

// 그냥 진짜 간단하게 형태한번 그려봐
class Self {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

console.log();

const me = new Self('KKK', 10);
console.log(me);
