/**
 * 논리 연산자 Logical Operator
 * && : 그리고
 * || : 또는
 * 특징 : 단축평가(short-circuit evaluation
 */

var obj1 = { name1: 'dog' };
var obj2 = { name2: 'cat', owner: 'KK' };
if (obj1 && obj2) {
  console.log('twice true');
}

console.log();

let result1 = obj1 && obj2;
console.log(result1); // 뒤에꺼 까지 확인

let result2 = obj1 || obj2;
console.log(result2); // 앞만 확인하면 되자나

let result3 = false || obj2;
console.log(result3); // 앞은 false니까 뒤에꺼 나오지

console.log();

/**
 * 활용예
 * 조건이 true일때 && 무언가 해야할 경우
 * 조건이 false일때 || 무언가 해야할 경우
 */
console.log('* 활용예');
function changeOwenr(animal) {
  if (!animal.owner) {
    throw new Error('앱 강제 종료 : no animal일시');
  }
  animal.owner = 'changeOwner!';
}
function makenewOwner(animal) {
  if (animal.owner) {
    throw new Error('앱 강제 종료 : animal이 이미 있어');
  }
  animal.owner = 'newOwner!';
}
obj1.owner && changeOwenr(obj1);
obj2.owner && changeOwenr(obj2);
console.log(obj1);
console.log(obj2);

console.log();

obj1.owner || makenewOwner(obj1);
obj2.owner || makenewOwner(obj2);
console.log(obj1);
console.log(obj2);

console.log();

/**
 * null or undefined일 경우 확인할때 사용 가능
 */
var item1 = { price: 1 };
var price1 = item1.price;
console.log(price1);
var item2;
//var price2 = item2.price; // -> 이렇게 하면 죽으니까 어플이 아래처럼
var price2 = item2 && item2.price;
console.log(price2);

console.log();

/**
 * 기본값 설정
 * 아래 두 함수는 차이점이 있다.
 * default parameter 전달하지 않거나, undefined 설정
 * || 값이 falshy한 경우 설정(할당) : 0, -0, undefined, ''
 */
function print1(message) {
  const text = message || 'default';
  console.log(text);
}
print1();

console.log();

function print2(message = 'sad') {
  const text = message || 'default';
  console.log(text);
}
print2();
print2(undefined); // undefined넣어도 sad가 나오자나

console.log();

print1(null);
print1(0);
print1(10);
print1('say it!');
console.log('--------------');
print2(null);
print2(0);
print2(10);
print2('say it!');

console.log();

function print3(message) {
  const text = message || 'default';
  console.log(text);
}
print3();
print3(null);
print3(undefined);
print3(0);
print3(10);
print3('say it!');
