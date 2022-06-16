// 생성자 만드는 함수는 맨첫글자 대문자로!!
function MakeCreate(name, view) {
  this.name = name;
  this.view = view;
  this.func = function () {
    console.log(`${this.name} : ${this.view}`);
  };
}
const apple = new MakeCreate('apple', '🍎');
apple.func();
