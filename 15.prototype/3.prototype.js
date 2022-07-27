// const dog1 = {name:'coco', image: '🐶'}
// const dog2 = {name:'momo', image: '🐩'}

function Dog(name, image) {
  this.name = name;
  this.image = image;
  // 생성한 객체 마다 다 이 함수를 가지고 있겠지? -> 인스턴스 레벨의 함수
  // 메모리 낭비 인가?
  /*
  this.printName = () => {
    console.log(`${this.name} ${this.image}`);
  };
  */
}
// 그럼 프로토타입 레벨의 함수를 만들어 볼까
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.image}`);
};

const dog1 = new Dog('coco', '🐶');
const dog2 = new Dog('momo', '🐩');
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

console.log();
console.log('----------------------');
console.log();

/**
 * 오버라이딩도 가능
 * 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
 * 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다.(섀도잉 됨)
 */
dog1.printName = function () {
  console.log('안녕!!');
};
dog1.printName();
console.log(dog1, dog2); // -> 인스턴스레벨의 함수가 되는걸 확인할 수 있지!

console.log();
console.log('----------------------');
console.log();

/**
 * 정적레벨
 */
Dog.hello = () => {
  console.log('HIHIHI!');
};
// dog1.hello();    // 이건 접근이 안되고
Dog.hello();
Dog.MAX_AGE = 20;

console.log((Dog.MAX_AGE = 20));

dog1.MAX_AGE = 15;
console.log(dog1.MAX_AGE);
