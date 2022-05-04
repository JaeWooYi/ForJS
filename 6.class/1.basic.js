// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수( 오래된, 고전적인 방법)
// 2. 클래스를 이용한다(최신)

/*
function Fruit(name, image) {
  this.name = name;
  this.image = image;
  this.display = function print() {
    console.log(`${name} : ${image}`);
  };
  return this;  // 생략되있음
}

const apple = new Fruit('apple', '🍎');
console.log(apple);
apple.display();
*/
/** 위에걸 클래스로 변환 해 볼거야 */

// 형태

// 클래스
class Fruit {
  // 생성자 : 나중에 new 키워드로 객체를 생성할 때 호출 되는 함수
  constructor(name, image) {
    this.name = name;
    this.image = image;
    // 1. 함수도 여기 넣어도 상관은 없음
  }
  // 2. 하지만 보통 생성자 밖에서 함수 정의한다
  display = function () {
    // this 붙일 필요 없어 -> 보통 함수 만들때 처럼 function 앞에 붙이면 문법 오류나! 기억해 , = function 도 생략해도되.
    console.log(`${this.name} : ${this.image}`);
  };
}

// 사용법은 생성자 함수랑 같음
// ------------------!! banan, orage -> Fruit의 인스턴스(객체)이다.
const banana = new Fruit('banana', '🍌');
const orange = new Fruit('orange', '🍊');
console.log(orange);
console.log(banana);
banana.display();
orange.display();

// ------------------!! 이건 그냥 객체이다. 그 어떤 클래스의 인스턴스가 아니다
const example = {
  name: 'kk',
  age: 10,
};
