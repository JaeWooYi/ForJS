// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name} : π`);
//   },
// };

// const banana = {
//   name: 'banana',
//   display: function () {
//     console.log(`${this.name} : π`);
//   },
// };

// console.log(apple);
// console.log(banana);

//-----------------------------------

// μμ λκ° λλ¬΄ λΉμ·νμ§?
// μμ±μ ν¨μλ₯Ό ν΅ν΄ μ ν΄μ§ νμμμ μνλ κ°μ²΄λ₯Ό λ§λ€ μ μλ€.
// μμ μ£Όμνκ³  μμ±μ ν¨μλ₯Ό λ§λ€μ΄ λ³΄μ.

// μ²¨λΆν° λ­κ° λ€λ₯Έμ§ λ³΄μ΄μ§? λ³΄ν΅ ν¨μ μ΄λ¦ λ§λ€λ λ§¨μκΈμ μλ¬Έμλ‘ νμλ, μ΄κ±΄ λλ¬ΈμμΌ
function Fruit(name, image) {
  this.name = name;
  this.image = image;
  this.display = function () {
    console.log(`${this.name} : ${this.image}`);
  };
  return this; // μλ΅ κ°λ₯
}
// ννλ¦Ώμ λ§λ κ±°μΌ

const apple = new Fruit('apple', 'π');
const banana = new Fruit('banana', 'π');
console.log(apple);
console.log(banana);
apple.display();
banana.display();
