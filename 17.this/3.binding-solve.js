function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`Cat name : ${this.name}`);
  };
  /**
   * 영원히 영원히 정적으로 바인드 할수 있는방법 몇가지
   * 1. bind 함수를 이용해 수동적으로 바인딩 해주기 -> 근데 함수 만들때마다 이러면 번거롭겠지?
   */
  //   this.printName = this.printName.bind(this);

  /**
   * 2. 간편한 방법
   * this.printName = function () {
   * 이렇게 말고
   * this.printName = () => {}
   * 화살표 함수로 만들면 된다.
   * !!!!!! arrow함수는 동적으로 this를 판별 하는게 아니라 arrow함수를 만드는 순간,
   *        렉시컬 환경에서의 this를 기억한다.
   * -> 화살표 함수 밖에서 제일 근접한 스코프에 this를 가르킨다.
   */
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`Dog name : ${this.name}`);
  };
}

const cat1 = new Cat('nabi');
const dog1 = new Dog('mong');
cat1.printName();
dog1.printName();

console.log();

dog1.printName = cat1.printName;
cat1.printName();
dog1.printName();

console.log();

function printOnMonitor(printName) {
  console.log('ready moditor -> pass callback execution');
  printName();
}
printOnMonitor(cat1.printName);
