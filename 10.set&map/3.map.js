var map = new Map([
  ['key1', '๐'],
  ['key2', '๐'],
]);
console.log(map);
console.log();

console.log('์ฌ์ด์ฆ ํ์ธ');
console.log(map.size);
console.log();

console.log('์กด์ฌํ๋์ง ํ์ธ');
console.log(map.has('key1'));
console.log(map.has('key3'));
console.log();

console.log('์ํ');
map.forEach((value, key) => console.log(key, value));
console.log(map.keys()); // ํค๋ง ๊ฐ์ ธ์ค๊ธฐ
console.log(map.values()); // ๋ฐธ๋ฅ๋ง ๊ฐ์ ธ์ค๊ธฐ
console.log(map.entries()); // ๋๋ค ๊ฐ์ ธ์ค๊ธฐ
console.log();

console.log('์ฐพ๊ธฐ');
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key3'));
console.log();

console.log('์ถ๊ฐ');
map.set('key3', '๐ฅ');
console.log(map);
console.log();

console.log('์ญ์ ');
map.delete('key3');
console.log(map);
console.log();

console.log('์ ๋ถ ์ญ์ ');
map.clear();
console.log(map);
console.log();

console.log('์ค๋ธ์ ํธ์์ ์ฐจ์ด์ ์ด ๋ฌด์์ผ๊น?');
console.log('1. ๊ทธ๋ฅ ์ฌ์ฉ๊ฐ๋ฅํ ํจ์ ๋ค๋ฅธ๊ฑฐ');
var keys = { name1: 'milk', price: 100 };
var milk = { name1: 'milk2', price: 200, description: 'just milk' };
var obj = {
  [keys]: milk, // ์์ keys์ milk๋ฅผ ์์ผ๋ก
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

console.log('2. ์ ๊ทผ ํ ์์๋์ง ์๋์ง ์ฐจ์ด์ ');
console.log(obj[keys]);
console.log('get์ด๋ผ๋ ํจ์๋ฅผ ์จ์ผํด ์๋');
console.log(map2[keys]); // ์ด๊ฑฐ ๋ง๊ณ 
console.log(map2.get(keys));
