// 접근 제어자를 통해 외부에서 변경이 불가능하게 만들 수 있다. --캡슐화
// java에서는 private이 있지
// JS에서는 # 이 private
class Fruit {
  // Fruit이라는 필드에
  #name;
  #image;
  #type = '과일';
  // 가 있다
  constructor(name, image) {
    this.#name = name;
    this.#image = image;
  }
  #display = () => {
    console.log(`${this.#name} : ${this.#image}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.name = 'orange'; // #안쓰면 바뀌는데?
// console.log(apple.name); // orange 나오자나 뭔데
console.log(apple);
// apple.display();    // #붙여서 외부에서 호출도 안됨.
