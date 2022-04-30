// 조건문 Conditional Statement

// 형태
// 1. if(조건) {},
// 2. if(조건) {} else {},
// 3. if(조건1) {} else if(조건2) {} else {}

console.log('1.');
let fruit = 'orange';
if (fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('🍊');
}

console.log();

console.log('2.');
let fruit2 = 'banana';
if (fruit2 === 'apple') {
  console.log('🍎');
} else if (fruit2 === 'orange') {
  console.log('🍊');
} else if (fruit2 === 'banana') {
  console.log('🍌');
} else {
  console.log('no fruit');
}

console.log();

console.log('3.');
if (false) {
  // (false, 0, '', null, undefined) -> 전부다 false
  console.log('출력되지 않게 하려면 조건이 false면 된다.');
}
if (true) {
  // (true, 1, '비어있지 않는 문자열') -> 전부다 true
  console.log('출력되지 되려면 조건이 true면 된다.');
}
