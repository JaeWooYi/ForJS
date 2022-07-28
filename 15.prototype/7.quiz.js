/**
 * 클래스를 베이스로한 객체 지향 프로그래밍
 */

class Animal {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }
  printName() {
    console.log(`${this.name} ${this.image}`);
  }
}

class Dog extends Animal {
  play() {
    console.log('With Play!!');
  }
}

class Tiger extends Animal {
  hunt() {
    console.log('let hunt....🐇....');
  }
}

const dog = new Dog('coco', '🐶');
const tiger = new Tiger('Big Cat', '🐯');

dog.printName();
dog.play();

console.log();

tiger.printName();
tiger.hunt();

console.log();
console.log('----------------------------------------');
console.log();

console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log();
console.log(tiger instanceof Tiger);
console.log(tiger instanceof Animal);
