// hof - higher older function

// Map - 배열의 아이템들을 각각 다른 아이템으로 매핑할수잇는, 변환해서 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
console.log(
  '원래 내가 배운거까지만 썻을때, nums배열의 2배값이 증가된 새로운 배열을 만드라 했을때 내가 할 수 있는거.'
);
function mulNum(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let kk = array[i] * 2;
    result.push(kk);
  }
  console.log(result);
}
mulNum(nums);

console.log('---------------------------------------------------');
console.log();
// 단순히 리턴할땐 이렇게
console.log('하지만 map을 쓴다면 이렇게 간단하게 가능');
result = nums.map(item => item * 2);
console.log(result);
console.log('함수적는것도 가능 -> 짝수일때만 2배 하고싶다');
result = nums.map(item => {
  if (item % 2 == 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

console.log('---------------------------------------------------');
console.log();

console.log('map : ');
result = nums.map(item => [98, 99]);
console.log(result);

console.log('Flatmap : 중첩된 배열을 쫙 펴줌');
result = nums.flatMap(item => [99, 98]);
console.log(result);

console.log('map과 Flatmap의 차이를 봐라');
result = ['a1', 'a2', 'a3'].map(text => text.split(''));
console.log(result);
result = ['a1', 'a2', 'a3'].flatMap(text => text.split(''));
console.log(result);

console.log('---------------------------------------------------');
console.log();

console.log('sort : 배열의 아이템들을 정렬');
console.log('문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경');
const text = ['hi', 'abc'];
text.sort();
console.log(text);

console.log();
const num = [5, 1, 9, 8, 4, 10];
num.sort();
console.log(num);
console.log('1다음에 10인 이유 : 문자열 형태로 저장되기 때문에');

console.log();

console.log(
  '똑바로 순서 정하려면? 숫자형으로 해야하나? -> 기준점을 콜백으로 전달 해야한다.'
);
// 콜백함수의 결과가
// < 0 : a가 앞으로 정렬
// > 0 : b가 앞으로 정렬
num.sort((a, b) => a - b); // 순차적으로 2개씩 비교, (5,1) (1,9) (9, 8).... => ( a-b -> 에이 빼기 비가 마이너스 : 왜 걍 이거만 섯는데 이런 뜻일까 시이발)
console.log(num);

console.log();
console.log('---------------------------------------------------');
console.log();

console.log(
  'reduce : 배열의 요소를 접어서 접어서 값을 하나로 : 이게 뭔말이냐 엘리야'
);
result = [1, 3, 5, 7, 9].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0); // 씨이발 뭔 뜻인진 모르겠는데 0으로 초기화 하는거래(sum이라는 변수가)
console.log(result);

console.log();
console.log('풀어쓰면 이렇게 된대');
result = [1, 3, 5, 7, 9].reduce((sum, value) => (sum += value), 0);
console.log(result);
