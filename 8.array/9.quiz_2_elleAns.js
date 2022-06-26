console.log('1번');
function replace(array, from, to) {
  return array.map(item => (item == from ? to : item));
}
const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

console.log();
console.log('-------------------');
console.log();
console.log('2번');

let array2 = ['🍌', '🥝', '🍇', '🥝'];
function count(array, item) {
  return array.reduce((count, value) => {
    if (value == item) {
      count++;
    }
    return count;
  }, 0);
}
let cntElle = count(array2, '🥝');
console.log(cntElle);

console.log();
console.log('or');
console.log();

function count2(array, item) {
  return array.filter(value => value == item).length;
}
let cntElle2 = count2(array2, '🥝');
console.log(cntElle2);

console.log();
console.log('-------------------');
console.log();
console.log('3번');

function match(input, search) {
  return input.filter(item => search.includes(item));
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

console.log();
console.log('-------------------');
console.log();
console.log('4번');
// 5보다 큰 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
function over5ave(array) {
  let newArr = [];
  let sum = 0;
  let ave = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      newArr.push(array[i]);
    }
  }
  for (let k = 0; k < newArr.length; k++) {
    ave = (sum += newArr[k]) / (k + 1);
  }
  return ave;
}
let x = over5ave(nums);
console.log(x);

console.log();

console.log('elle ans1');
const ave2 = nums
  .filter(num => num > 5)
  .reduce((avg, num, index, array) => avg + num / array.length, 0);
console.log(ave2);
