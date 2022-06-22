// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

let arr = ['🍌', '🍓', '🍇', '🍓'];
function changeArr() {
  let arrChange = Array.from(arr);
  for (let i = 0; i < arrChange.length; i++) {
    if (arrChange[i] == '🍓') {
      arrChange[i] = '🥝';
    }
  }
  return arrChange;
}
var result = changeArr(arr);
console.log(result);
console.log(arr);

console.log();
