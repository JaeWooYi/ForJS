/**
 * 구조 분해 할당 -> Destructure
 * 데이터 뭉치를(그룹화) 쉽게 만들수 있다
 */

const fruit = ['🥝', '🍓', '🍎', '🍌'];
const [first, second, ...others] = fruit;
console.log(first);
console.log(second);
console.log(others);

console.log();

var point = [10, 20];
var [x, y] = point;
console.log(x);
console.log(y);
console.log('---------');
var [y, x, z = 30] = point;
console.log(x);
console.log(y);
console.log(z);
console.log('---------');
var point2 = [10, 20, 40];
var [y, x, z = 30] = point2;
console.log(x);
console.log(y);
console.log(z); // 값 지정해도 이미 값이 있으면 있는값이 우선순위가 더 높다.

console.log();

function craeateImage() {
  return ['☢︎', 'radiation'];
}
var [image, name1] = craeateImage();
console.log(image);
console.log(name1);

console.log();

var me = {
  name2: 'meme',
  image2: '⚡︎',
  eye: '👁',
};
function display(person) {
  console.log('name2 : ', person.name2);
  console.log('image2 : ', person.image2);
  console.log('eye : ', person.eye);
}
display(me);

console.log('-----------------');

function display2({ name2, image2, eye }) {
  console.log('name2 : ', name2);
  console.log('image2 : ', image2);
  console.log('eye : ', eye);
}
display2(me);

console.log();
console.log();

// const { name2, image2, eye, symbol = '❖' } = me;
// console.log(name2);
// console.log(image2);
// console.log(eye);
// console.log(symbol);

console.log();

const { name2, image2: abcde, eye, symbol = '❖' } = me;
console.log(name2);
console.log(abcde);
console.log(eye);
console.log(symbol);
