// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('Tiger eat');
//   }
//   sleep() {
//     console.log('Tiger sleep');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('Dog eat');
//   }
//   sleep() {
//     console.log('Dog sleep');
//   }
//   joy() {
//     console.log('Dog joy');
//   }
// }

// 위 Tiger, Dog에 공통된 속성이  있자나 -> eat, sleep : 상속을 배울때군
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('eat');
  }
  sleep() {
    console.log('sleep');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('Yello');
console.log(tiger);
tiger.eat();
tiger.sleep();

console.log();

class Dog extends Animal {
  constructor(color, master) {
    super(color); // 내가 상속 받고 있는 부모 생성자의 컬러를 저장해주고
    this.master = master;
  }
  play() {
    console.log('Joy me');
  }
  // 오버라이딩도 되는군
  eat() {
    // super.eat(); // super.eat()을 통해 부모꺼 실행먼저하고 내꺼 실행도 가능
    console.log('Dog eat!');
  }
}
let dog = new Dog('Black', 'YJW');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();
