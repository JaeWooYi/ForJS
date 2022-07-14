// 주어진 배열에서 중복을 제거하라
// output : ['🍌', '🍎', '🍇', '🍊']
//var fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍊'];
console.log('1번');
var fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍊'];
var fruit = new Set(fruits);
console.log(fruit);

console.log();
console.log('함수로 하고싶다면');
function removeDuplication(arr) {
  return [...new Set(arr)]; // 이렇게 간단하다니
}
var ans = removeDuplication(fruits);
console.log(ans);

console.log();

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트를 만들어라
// output : [10, 30, 50]
console.log('2번');
var set1 = new Set([10, 20, 30, 40, 50]);
var set2 = new Set([10, 30, 50]);
function findInterSection(setEx1, setEx2) {
  var arr = [...setEx1].filter(item => setEx2.has(item));
  return new Set(arr);
}
var ans2 = findInterSection(set1, set2);
console.log(ans2);
