const pizza = {
  img: '๐',
  price: '100won',
};
const apple = {
  img: '๐',
  price: '200won',
};
const bone = {
  img: '๐ฆด',
  price: '10000000000000won',
};
const store1 = [pizza, apple];
const store2 = Array.from(store1);
console.log('store1 -- ', store1);
console.log('store2 -- ', store2);
console.log();
console.log('store2์ bone์ถ๊ฐํด์ ์ถ๋ ฅํด๋ด');
store2.push(bone);
console.log('store2 -- ', store2);

console.log();

console.log(
  'ํผ์์ ๊ฐ๊ฒฉ์ ์ธ์ํ๊ณ  store1๊ณผ store2๋ฅผ ์ถ๋ ฅํด๋ด ๋ฌด์จ ๋ณํ๊ฐ ์๊ฒผ์์ง ์๊ฐํด๋ณด๊ณ '
);
pizza.price = '10000won';
console.log(store1);
console.log(store2);
console.log(
  'store1, store2 ๋ฐฐ์ด์์ ํผ์์ ๊ฐ๊ฒฉ์ด ๋ฐ๋์ด์๋ค? -> ์ด๊ฑธ shallow copy๋ผ๊ณ  ํ๋ฐ'
);

/**
 * ์์ ๋ณต์ฌ(shallow copy) - ๊ฐ์ฒด๋ ๋ฉ๋ชจ๋ฆฌ ์ฃผ์๊ฐ ์ ๋ฌ ๋๊ธฐ ๋๋ฌธ์
 * ์๋ฐ์คํฌ๋ฆฝํธ์์ ๋ณต์ฌ ํ ๋๋ ํญ์ ์์ ๋ณต์ฌ๊ฐ ์ด๋ฃจ์ด ์ง๋ค.
 */
