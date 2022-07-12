// 주어진 배열에서 중복을 제거하라
// output : ['🍌', '🍎', '🍇', '🍊']
var fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍊'];
function overlapDelete(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var k = 0; k < arr.length; k++) {
      console.log(arr[i], arr[k]);
    }

    if (arr[i] == arr[k]) {
    }

    newArr.push(arr[i]);
    console.log(newArr);
  }
} // 아직 함수 완료 안됐어
overlapDelete(fruits);

console.log();

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트를 만들어라
// output : [10, 30, 50]
var set1 = new Set([10, 20, 30, 40, 50]);
var set2 = new Set([10, 30, 50]);
