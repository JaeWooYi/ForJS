// 배열생성 방법
let array = new Array(2);
array[0] = 2;
array[1] = 4;
console.log(array[0]);
console.log(array[1]);
console.log(array);

console.log();

let array2 = new Array(1, 3, 5);
console.log(array2);

console.log();

let array3 = Array.of(10, 20, 30);
console.log(array3);

console.log();

const anoterArray = [0, 10, 20, 30, 40];
console.log(anoterArray);

console.log();

console.log('기존배열로부터 새로운 배열을 만들고싶다면');
const anoterArray2 = Array.from(anoterArray);
console.log(anoterArray2);
// iterable : 순회가 가능한
const anoterArray3 = Array.from('text');
console.log(anoterArray3);

console.log();

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 한다.
// but JS에서의 배열은 연속적으로 있지 않고
// 오브젝트와 유사함
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체.
// 이걸 보완하기 위해 타입이 정해져 있는 타입 배열이 있다.(Type Collections)
let lastArray = Array.from({
  0: 'H',
  1: 'E',
  length: 2,
});
console.log(lastArray);
