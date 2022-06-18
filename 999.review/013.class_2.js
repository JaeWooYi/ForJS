class Language {
  constructor(lang1, lang2) {
    this.lang1 = lang1;
    this.lang2 = lang2;
  }
  get print() {
    return `get : ${this.lang1} , ${this.lang2}`;
  }
  set print2(value) {
    console.log(`set : ` + value);
  }
}

let lang = new Language('kor', 'eng');
console.log(lang);
console.log(lang.print);
lang.print2 = 'java';

console.log();
console.log();
console.log();
console.log();

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('냠냠');
  }
  sleep() {
    console.log('zzzz');
  }
}

class Tiger extends Animal {}
var tiger = new Tiger('white');
console.log(tiger);
tiger.eat();
tiger.sleep();
console.log();

class Dog extends Animal {
  constructor(color, master) {
    super(color);
    this.master = master;
  }
  play() {
    console.log('haha');
  }
  eat() {
    console.log('overriding 냠냠');
  }
}
var dog = new Dog('black', 'KKK');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
