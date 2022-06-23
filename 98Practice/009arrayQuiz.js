// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
console.log('1번--------------------------------------------');
let arr = ['🍌', '🍓', '🍇', '🍓'];
function arrChange() {
  let newArr = Array.from(arr);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == '🍓') {
      newArr[i] = '🥝';
    }
  }
  return newArr;
}
let changedArr = arrChange(arr);
console.log(changedArr);
console.log(arr);

console.log();
console.log('2번--------------------------------------------');
// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
let arr2 = ['🍌', '🥝', '🍇', '🥝'];
function countArr(array, display) {
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(display)) {
      cnt++;
    }
  }
  return cnt;
}
let cntArr = countArr(arr2, '🥝');
console.log(cntArr);

console.log();
console.log('3번--------------------------------------------');
// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ] -> 교집합 구하라는거 같아

let exArr1 = ['🍌', '🥝', '🍇'];
let exArr2 = ['🍌', '🍓', '🍇', '🍓'];

function inter(array1, array2) {}
//
