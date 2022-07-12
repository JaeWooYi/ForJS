var map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map);
console.log();

console.log('사이즈 확인');
console.log(map.size);
console.log();

console.log('존재하는지 확인');
console.log(map.has('key1'));
console.log(map.has('key3'));
console.log();

console.log('순회');
map.forEach((value, key) => console.log(key, value));
console.log(map.keys()); // 키만 가져오기
console.log(map.values()); // 밸류만 가져오기
console.log(map.entries()); // 둘다 가져오기
console.log();

console.log('찾기');
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key3'));
console.log();

console.log('추가');
map.set('key3', '🥝');
console.log(map);
console.log();

console.log('삭제');
map.delete('key3');
console.log(map);
console.log();

console.log('전부 삭제');
map.clear();
console.log(map);
console.log();

console.log('오브젝트와의 차이점이 무엇일까?');
console.log('1. 그냥 사용가능한 함수 다른거');
var keys = { name1: 'milk', price: 100 };
var milk = { name1: 'milk2', price: 200, description: 'just milk' };
var obj = {
  [keys]: milk, // 위에 keys와 milk를 쌍으로
};
console.log(keys);
console.log(milk);
console.log();
console.log(obj);

console.log();
console.log();
console.log();

var map2 = new Map([[keys, milk]]);
console.log(map2);
console.log();

console.log('2. 접근 할수있는지 없는지 차이점');
console.log(obj[keys]);
console.log('get이라는 함수를 써야해 아래');
console.log(map2[keys]); // 이거 말고
console.log(map2.get(keys));
