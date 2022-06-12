// 객체만드는 생성자 함수 만들어보자
// 이름과 이미지만 저장하는
// 이름 : 이미지 찍히는 함수까지

function MakeObj(name, image) {
  this.name = name;
  this.image = image;
  this.display = function print() {
    console.log(`${this.name} : ${this.image}`);
  };
  return this;
}

const good = new MakeObj('good', '👍');
console.log(good);
good.display();
