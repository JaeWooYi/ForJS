// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
const fruitArray = ['🍌', '🍓', '🍇', '🍓'];
function replace(array) {
  const newArr = Array.from(array);
  for (var i = 0; i < array.length; i++) {
    if (array[i] == '🍓') {
      newArr[i] = '🥝';
    }
  }
  return newArr;
}
let x = replace(fruitArray);
console.log(x);

console.log();
console.log();
console.log();

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
const cntArr = ['🍌', '🥝', '🍇', '🥝'];
function cntItem(array, img) {
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == img) {
      cnt++;
    }
  }
  return cnt++;
}
var x2 = cntItem(cntArr, '🥝');
console.log(x2);

console.log();
console.log();
console.log();

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
let arrayA = ['🍌', '🥝', '🍇'];
let arrayB = ['🍌', '🍓', '🍇', '🍓'];
function sameItem(array1, array2) {
  testArr = [];
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
      testArr.push(array1[i]);
    }
  }
  return testArr;
}
let x3 = sameItem(arrayA, arrayB);
console.log(x3);

console.log();
console.log();
console.log();

/**
 * 퀴즈4 : 5이상(보다 큰)의 숫자들의 평균
 * const nums = [3, 16, 5, 25, 4, 34, 21];
 * 일때
 */
const nums = [3, 16, 5, 25, 4, 34, 21];
function average(array) {
  let sum = 0;
  let ave = 0;
  for (let i = 0; i < array.length; i++) {
    ave = (sum += array[i]) / (i + 1);
  }
  return ave;
}
let x4 = average(nums);
console.log(x4);
