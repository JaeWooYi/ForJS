/**
 * 배열의 함수들
 * 배열 자체를 변경하는지, 새로운 배열을 반환 하는지
 */

const img = ['🍎', '🍌', '🍊', '🥚'];

/** 특정 오브젝트가 배열인지 아닌지 확인 하는법 */
console.log(Array.isArray(img));
console.log(Array.isArray({}));

console.log();

/** 특정 아이템의 위치 찾기 */
console.log(img.indexOf('🥚'));

console.log();

/** 배열안에 특정 아이템이 있는지 확인 */
console.log(img.includes('🍊'));

console.log();

// 배열에 아이템 추가 - 제일 뒤
let len = img.push('🥲', '😂'); // 배열 자체를 수정
console.log(img);
console.log(len);
console.log(img.length);

console.log();

// 배열에 아이템 추가 - 제일 앞
img.unshift('❌', '😣');
console.log(img);
console.log(img.length);

console.log();

// 맨뒤 제거
console.log('맨뒤 제거');
let lastItem = img.pop();
console.log('제거된거 :' + lastItem);
console.log(img);

console.log();

// 맨앞 제거
let frontDel = img.shift();
console.log('맨앞 삭제된거 : ' + frontDel);
console.log(img);

console.log();

// 중간에 추가 또는 제거
console.log('중간에 제거');
let kkk = img.splice(1, 2); // 1인덱스부터 시작해서 2개를 삭제
console.log('중간에 삭제된거 : ' + kkk);
console.log(img);
console.log('중간에 추가');
let yyy = img.splice(2, 0, '🍆', '🥑'); // 2인덱스부터 하나도 삭제하지 않고 '', ''를 추가하겠다.
console.log(img);

console.log();

img.splice(2, 2, '🥝', '🍇'); // 2인덱스부터 2개 삭제하고 '', ''를 추가하겠다.
console.log(img);

console.log();

// 잘라진 새로운 배열을 만듬
let newArr = img.slice(0, 2); // 0인덱스부터 2인덱스 전까지(0 ~ 1)
console.log(newArr);
console.log(img);
