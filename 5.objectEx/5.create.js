// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name} : 🍎`);
//   },
// };

// const banana = {
//   name: 'banana',
//   display: function () {
//     console.log(`${this.name} : 🍌`);
//   },
// };

// console.log(apple);
// console.log(banana);

//-----------------------------------

// 위에 두개 너무 비슷하지?
// 생성자 함수를 통해 정해진 틀안에서 원하는 객체를 만들 수 있다.
// 위에 주석하고 생성자 함수를 만들어 보자.

// 첨부터 뭐가 다른지 보이지? 보통 함수 이름 만들때 맨앞글자 소문자로 하자나, 이건 대문자야
function Fruit(name, image) {
  this.name = name;
  this.image = image;
  this.display = function () {
    console.log(`${this.name} : ${this.image}`);
  };
  return this; // 생략 가능
}
// 템플릿을 만든거야

const apple = new Fruit('apple', '🍎');
const banana = new Fruit('banana', '🍌');
console.log(apple);
console.log(banana);
apple.display();
banana.display();
