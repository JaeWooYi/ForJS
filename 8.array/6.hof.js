const fruit = ['🥝', '🍓', '🍎', '🍊', '🍇'];
function arrPrint(array) {
  for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
  }
}
arrPrint(fruit);
// 위 : 고차함수 사용하기 전

console.log();

// 배열을 빙글 빙글 돌면서 원하는것(콜백함수)을 할때
// for문 안쓰고 고차함수인 forEach를 사용하면 되는구나
fruit.forEach(function (value, index, array) {
  // 배열의 요소, 요소가 들어있는 인덱스, 배열 전체----> ( index, array 안궁금하면 인자에서 빼면 되지 )
  console.log('-------------');
  console.log(value);
  console.log(index);
  console.log(array);
});

console.log();
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

// 이렇게 써도되
fruit.forEach(value => {
  console.log('-------------');
  console.log(value);
});

console.log();
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log();

// 조건에 맞는(콜백함수) 아이템을 찾을때
console.log('조건에 맞는(콜백함수) 아이템을 찾을때');
const item1 = {
  name: 'item1',
  display: '😇',
};
const item2 = {
  name: 'item2',
  display: '😣',
};
const item3 = {
  name: 'item3',
  display: '🥹',
};
const itemAll = [item1, item2, item3, item3];

// itemAll 배열안에 객체들에게서 '😣'이 들어있는 객체를 찾고 싶다면
console.log('원래 내가 배운거');
for (let i = 0; i < itemAll.length; i++) {
  if (itemAll[i].display != '😣') {
    console.log(i + '인덱스 : fuck you');
  } else {
    console.log(i + '인덱스 : correct');
  }
}
console.log();
console.log('엘리가 알려준거(고차함수) 쓴거');
// find() 는 제일 먼저 조건에 맞는 아이템을 반환
const found1 = itemAll.find(value => {
  return value.display === '😣';
});
console.log(found1);
// 조건에 맞는 인덱스를 찾고싶다면 findIndex를 쓰면 된다.
const found2 = itemAll.findIndex(value => {
  return value.display === '🥹';
});
console.log(found2);

console.log();
console.log();

console.log(
  '배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인 -> some함수'
);
const someEx = itemAll.some(item => item.display === '🥹');
console.log(someEx);

console.log();
console.log();

console.log('배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인 -> every함수');
const everyEx = itemAll.every(item => item.display === '🥹');
console.log(everyEx);

console.log();
console.log();

console.log('조건에 맞는 모든 아이템들을 새로운 배열로 -> filter함수');
const filterEx = itemAll.filter(item => item.display === '🥹');
console.log(filterEx);
