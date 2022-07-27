/**
 * 동결! Object.freeze
 * -> 동결된 객체는 새로운 property추가 ❌, 삭제역시 ❌, 쓰기도 ❌, 속성 재정의 역시 ❌
 * 다 안되는 것 같지만 얕은 꽁꽁 얼림이다. -> dog안에 JW객체는 변경 가능 하다는 뜻인가? ⭕️
 */
const JW = { name: 'Jae Woo' };
const dog = { name: 'Nini', display: '🦮', owner: JW };
Object.freeze(dog);
dog.name = 'Kiki';
console.log(dog); // freeze하면 바뀌지 않는군.
dog.age = 3;
console.log(dog); // age가 추가 되지 않는군.
delete dog.name;
console.log(dog); // delete는 뭐 말할것도 없겠지?
JW.name = '2 Jae Woo';
console.log(dog);

console.log();
console.log('-------------------------------------');
console.log();

/**
 * 밀봉! Object.seal
 * -> 값의 수정은 가능 ⭕️, but 추가, 삭제, 속성 재정의 ❌
 */
const cat = { ...dog };
// Object.assign(cat, dog); // assign을 사용하면 cat이라는 객체에 dog에 있는 모든 property를 복사해 올 수 있따. -> 위가 훨씬 간단하지?
Object.seal(cat);
console.log(cat);
cat.name = 'Nah'; // 오 바뀌는군
console.log(cat);
delete cat.display; // 삭제는 안되네? -> 재정의만 가능한건가? -> 재정의가 수정은 아니래 ... 나는 바보야 수정만 가능
console.log(cat);
cat.display = '🐱'; // 재정의만 되나봐 -> 재정의가 수정은 아니래 ... 나는 바보야 수정만 가능
console.log(cat);

console.log();

// isFrozen을 통해 객체가 동결되었는지 아닌지 확인 가능
console.log(Object.isFrozen(dog));
console.log(Object.isFrozen(cat));
// isSealed를 통해 객체가 밀봉되었는지 아닌지 확인 가능
console.log(Object.isSealed(dog));
console.log(Object.isSealed(cat));

console.log();
console.log('-------------------------------------');
console.log();

/**
 * 확장 금지! preventExtensions -> 추가만 ❌
 */
const tiger = { name: 'BigCat' };
Object.preventExtensions(tiger);
// 확장 되는지 안되는지 확인 -> isExtensible()
console.log(Object.isExtensible(tiger));
tiger.name = 'SmallCat'; // -> 수정은 되는군
console.log(tiger);
delete tiger.name; // -> 삭제 역시 가능
console.log(tiger);
tiger.age = 10; // -> 확장이 안되는거니까, 추가가 안된다!
console.log(tiger);
