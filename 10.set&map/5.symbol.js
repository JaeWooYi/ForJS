/**
 * Sysbol(심벌) -> 유일한 키를 생성할때 쓸 수 있따.
 */

var mapEx = new Map();
var key1 = 'key';
var key2 = 'key';
mapEx.set(key1, 'HI'); // !!!!!!!!!!!!!!
var key3 = mapEx.get(key2);
console.log(mapEx.get(key2)); // !!!!!!!!!!!!!!
console.log('key3 : ' + key3);
console.log('key1 : ' + key1);
console.log('key2 : ' + key2);
console.log(key1 === key2); // true // !!!!!!!!!!!!!!

console.log();
console.log('----------------------------');
console.log();

var keySymbol_1 = Symbol('keySymbol_1');
var keySymbol_2 = Symbol('keySymbol_2');
mapEx.set(keySymbol_1, 'HI'); // !!!!!!!!!!!!!!
console.log(mapEx.get(keySymbol_2)); // !!!!!!!!!!!!!!
console.log(keySymbol_1 === keySymbol_2); // true   // !!!!!!!!!!!!!!

// !!!!!!!!!!!!!! -> 차이점 대조해봐
// 심벌을 사용하면 서로 다른 값이 생성되는것을 볼 수 있다.

console.log();
console.log('----------------------------');
console.log();

console.log(
  '동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for 을 사용하면 된다.'
);
// 전역 심벌 레지스트리(Global Symbol Registry)
var k1 = Symbol.for('key!');
var k2 = Symbol.for('key!');
console.log(k1 === k2);
console.log('해당 심벌의 문자열을 알고싶다면 아래 함수를 써라!');
console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(k2));

console.log();
console.log(
  'Global Symbol Registry에 보관되어져 있지 않기 때문에 undefined 나온다'
);
console.log(Symbol.keyFor(keySymbol_1)); // 위에 만든거(keySymbol_1) -> 심벌이 아니라서 에러가 난다

console.log();

// obj에서도 심벌 이용 가능
var obj1 = { [k1]: 'Hello' };
var obj2 = { [k1]: 'Hello', [Symbol('keykey')]: 1 }; // 외부에서 접근못하게 하려면  // *******
console.log(obj1);
console.log(obj2);
console.log(obj2[k1]);
console.log(obj2[Symbol('key')]); // *******

// // ******* -> 다른 심벌이기때문에 접근 할 수 없다.
