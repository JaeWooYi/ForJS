// Set
var set1 = new Set();
var set2 = new Set([1, 2, 3]);
console.log(set1);
console.log(set2);

console.log();

console.log('사이즈 확인');
console.log(set2.size);
console.log();

console.log('아이템이 존재하는지 확인');
console.log(set2.has(2));
console.log();

console.log('순회역시 가능');
set2.forEach(item => console.log(item));
console.log('-----------');
for (const value of set2.values()) {
  console.log(value);
}
console.log();

// 추가
set2.add(4);
console.log(set2);
set2.add(4); // 셋은 중복이 허용되지 않음을 알 수 있다.
console.log(set2);
console.log();

console.log('삭제');
set2.delete(4);
console.log(set2);
console.log();

console.log('전부 삭제');
set2.clear();
console.log(set2);
console.log();

console.log('오브젝트 셋트');
var obj1 = { name1: 'apple', price: 100 };
var obj2 = { name2: 'banana', price: 200 };
var obj = new Set([obj1, obj2]);
console.log(obj);
