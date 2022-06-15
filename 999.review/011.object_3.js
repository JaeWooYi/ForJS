const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name} : 🍎`);
  },
};
// this는 내자신의 이름이야
const banana = {
  name: 'banana',
  display: function () {
    return console.log(`${this.name}`);
  },
};
let view = banana.display();
console.log();

console.log('생성자 함수를 통해 객체를 만드는 함수를 만들어 보자');
function MakeObj(name, view) {
  this.name = name;
  this.view = view;
  this.display = function () {
    console.log(`${this.name} : ${this.view}`);
  };
  return this;
}
let viewTest = new MakeObj('me', '😣');
console.log(viewTest);
viewTest.display();

// 내일 공부할때 이거 다시한번 봐봐.
