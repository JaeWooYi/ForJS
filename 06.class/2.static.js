// static 정적 프로퍼티, 메서드

class Fruit {
  // 인스턴스레벨에서는 접근할수 없어, static MAX_FRUIT = 5;는
  static MAX_FRUIT = 5;

  constructor(name, image) {
    this.name = name;
    this.image = image;
  }

  // staitc 붙음 : 클래스를 통해 호출 가능한 메서드
  static makeRandomFruit() {
    return new Fruit('banana', '🍌');
  }
  // static 안붙음 : 인스턴스 레벨의 메서드
  display = function () {
    console.log(`${this.name} : ${this.image}`);
  };
}

const apple = new Fruit('apple', '🍎');
console.log(apple); // 여기하고 오랜지 보면 인스턴스안에 static 붙은 makeRandom 함수는 들어가 있지 않음을 알 수 있다.
apple.display();
let orange = new Fruit('orange', '🍊');
console.log(orange);
orange.display();

console.log();

const banana = Fruit.makeRandomFruit();
console.log(banana);
banana.display();

console.log();
console.log(Fruit.MAX_FRUIT);

// 이건 인스턴스자나 데이터에 아무것도 들어있지 않기 때문에 오류가 나
// const kkk = Fruit.display();
// console.log(kkk);
