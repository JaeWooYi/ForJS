/**
 * 옵셔널 체이닝 연산자(Optional Chaining Operator)
 * ES11에 추가됨
 * ?. 이렇게 생김
 */
var item = { price: 1 };
var price = item || item.price;
console.log(price);

console.log();

console.log('위에걸 간편하게 줄여서');
var item2 = { price: 1 };
var price = item2?.price;
console.log(price);

console.log();

console.log('사용예');
var obj = { display: '☣︎', owner: { name: 'KK' } };
function print(obj) {
  var ownerName = obj && obj.owner && obj.owner.name;
  console.log(ownerName);
}
print();
print(obj);

console.log('위랑 비교해봐 코드 쪼금이라도 줄었지');

var obj2 = { display: '☣︎', owner: { name: 'KK' } };
function print2(obj) {
  var ownerName = obj?.owner?.name;
  console.log(ownerName);
}
print2();
print2(obj);
