/**
 * 객체지향 프로그래밍 장점엔 뭐가 있을까?
 * -> 상속을 통한 코드의 재사용성
 *
 * 프로토타입을 베이스로한 객체 지향 프로그래밍
 */

function Animal(name, image) {
  this.name = name;
  this.image = image;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.image}`);
};

//-------------------------------------------------------------------------------------

function Dog(name, image, owner) {
  // class배울때 super()를 통해 부모생성자에 연결 했었지? 기억나니? 매일매일 새롭지?
  // call() -> super와 비슷하다고 보면된다
  Animal.call(this, name, image);
  this.owner = owner;
}

// Dog.prototype = Object.create(Object.prototype); -> 원래는 애니멀이 아니라 Object야
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log('With Play!');
};

function Tiger(name, image) {
  // call이란 함수를 통해 내 this를 연결해보자
  Animal.call(this, name, image);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('let hunt....🐇....');
};
const tiger = new Tiger('Big Cat', '🐯');
tiger.printName();
tiger.hunt();

console.log();
console.log('----------------------------------------');
console.log();

const dog1 = new Dog('coco', '🐶', 'YJW');
dog1.play();
dog1.printName();
// dog1.owner = 'YJW'; // -> ㅋㅋㅋㅋㅋㅋ 모르면 걍 넣어버려 -> 23번줄 ...
console.log(dog1.owner); // -> 얘도 나오고 싶다면?

console.log();
console.log('----------------------------------------');
console.log();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log();
console.log(tiger instanceof Dog);
console.log(tiger instanceof Animal);
console.log(tiger instanceof Tiger);
