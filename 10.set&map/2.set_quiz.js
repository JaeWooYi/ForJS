console.log('오브젝트 셋트 quiz');
var obj1 = { name1: 'apple', price: 100 };
var obj2 = { name2: 'banana', price: 200 };
var objs = new Set([obj1, obj2]);
console.log(objs);

// obj1의 price를 300으로 변경
// objs에 위에 변경된 obj1을 추가하면
// 과연 set이 어떻게 변경될까?

obj1.price = 300;
objs.add(obj1);
console.log(objs);

// 덮어 써진다. -> 쉘로카피

console.log();

console.log('오브젝트 셋트 quiz2');
var obj3 = { name3: 'banana', price: 200 };
objs.add(obj3);
console.log(objs);
// 하나가 추가되네? -> 객체기때문에 메모리에 참조 주소가 다르다.
obj3.price = 600;
console.log(objs); // -> 바뀌는걸 알 수 있지?
