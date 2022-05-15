// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
console.log('1--------------------------------------------');
const arrQ = ['🍌', '🍓', '🍇', '🍓'];

// console.log('바보같은 나의 답');
// function changeItem() {
//   if (arrQ.includes('🍓')) {
//     arrQ.splice(1, 1, '🥝');
//     arrQ.splice(3, 1, '🥝');
//     console.log(arrQ);
//   } else {
//     console.log('🍓를 포함하지 않습니다');
//   }
// }
// changeItem(arrQ);

// console.log('기껏생각해본거');
// console.log();
// function newChange(what) {
//   const newArrQ = Array.from(arrQ);
//   for (let i = 0; i < newArrQ.length; i++) {
//     if (newArrQ[i] == '🍓') {
//       newArrQ[i] = '🥝';
//       console.log(newArrQ);
//     } else {
//       console.log('🍓를 포함하지 않습니다');
//     }
//   }
// }
// newChange(arrQ);
// console.log();
// console.log('바뀌었나 확인');
// console.log(arrQ);

const misery = ['😣', '😇', '🥹', '😇'];
function changeMisery(anything) {
  const changedMisery = Array.from(misery);
  for (let i = 0; i < changedMisery.length; i++) {
    if (changedMisery[i] == '😇') {
      changedMisery[i] = '🫥';
    }
  }
  return changedMisery;
}
const result = changeMisery(misery);
console.log(result);
console.log(misery);

console.log('선생님의 답');
const array = ['🍌', '🍓', '🍇', '🍓'];
function replace(array1) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] == '🍓') {
      replaced[i] = '🥝';
    }
  }
  return replaced;
}
const result2 = replace(array);
console.log(result2);
// console.log(arrQ);

console.log('2--------------------------------------------');
// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

console.log('3--------------------------------------------');
// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
