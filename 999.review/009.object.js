let test = {
  name: 'test',
  name_2: 'test_2',
  1: 1,
  ['name_2']: [1, 2, 3], // 대괄호 -> 새로운 값 넣을때
};
console.log(test);
console.log(test.name_2);
console.log(test['name_2']); // .을 안붙이면 물론 속성값도 가지고 오지?

console.log();

test.addTest = 'addTest'; // 속성을 추가하는것도 가능하다
console.log(test);

console.log();

delete test.addTest;
console.log(test); // 속성을 추가하는게 가능하다면 삭제하는것도 가능하지.

console.log();

console.log('compute');
let ex = {
  1: 'a',
  2: 'b',
};
console.log(ex[1]); // 숫자는 접근할때 대괄호로 접근해
console.log();
function getValue(obj, key) {
  return obj[key];
}
let aaa = getValue(ex, [1]);
console.log(aaa);

console.log();

function addValue(obj, key, value) {
  return (obj[key] = value);
}
let bbb = addValue(ex, [3], 'c');
console.log(ex);

console.log();

function delValue(obj, key) {
  return delete obj[key];
}
let ccc = delValue(ex, [3]);
console.log(ex);
