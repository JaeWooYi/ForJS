const fruit = ['๐ฅ', '๐', '๐', '๐', '๐'];
function arrPrint(array) {
  for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
  }
}
arrPrint(fruit);
// ์ : ๊ณ ์ฐจํจ์ ์ฌ์ฉํ๊ธฐ ์ 

console.log();

// ๋ฐฐ์ด์ ๋น๊ธ ๋น๊ธ ๋๋ฉด์ ์ํ๋๊ฒ(์ฝ๋ฐฑํจ์)์ ํ ๋
// for๋ฌธ ์์ฐ๊ณ  ๊ณ ์ฐจํจ์์ธ forEach๋ฅผ ์ฌ์ฉํ๋ฉด ๋๋๊ตฌ๋
fruit.forEach(function (value, index, array) {
  // ๋ฐฐ์ด์ ์์, ์์๊ฐ ๋ค์ด์๋ ์ธ๋ฑ์ค, ๋ฐฐ์ด ์ ์ฒด----> ( index, array ์๊ถ๊ธํ๋ฉด ์ธ์์์ ๋นผ๋ฉด ๋์ง )
  console.log('-------------');
  console.log(value);
  console.log(index);
  console.log(array);
});

console.log();
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

// ์ด๋ ๊ฒ ์จ๋๋
fruit.forEach(value => {
  console.log('-------------');
  console.log(value);
});

console.log();
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log();

// ์กฐ๊ฑด์ ๋ง๋(์ฝ๋ฐฑํจ์) ์์ดํ์ ์ฐพ์๋
console.log('์กฐ๊ฑด์ ๋ง๋(์ฝ๋ฐฑํจ์) ์์ดํ์ ์ฐพ์๋');
const item1 = {
  name: 'item1',
  display: '๐',
};
const item2 = {
  name: 'item2',
  display: '๐ฃ',
};
const item3 = {
  name: 'item3',
  display: '๐ฅน',
};
const itemAll = [item1, item2, item3, item3];

// itemAll ๋ฐฐ์ด์์ ๊ฐ์ฒด๋ค์๊ฒ์ '๐ฃ'์ด ๋ค์ด์๋ ๊ฐ์ฒด๋ฅผ ์ฐพ๊ณ  ์ถ๋ค๋ฉด
console.log('์๋ ๋ด๊ฐ ๋ฐฐ์ด๊ฑฐ');
for (let i = 0; i < itemAll.length; i++) {
  if (itemAll[i].display != '๐ฃ') {
    console.log(i + '์ธ๋ฑ์ค : fuck you');
  } else {
    console.log(i + '์ธ๋ฑ์ค : correct');
  }
}
console.log();
console.log('์๋ฆฌ๊ฐ ์๋ ค์ค๊ฑฐ(๊ณ ์ฐจํจ์) ์ด๊ฑฐ');
// find() ๋ ์ ์ผ ๋จผ์  ์กฐ๊ฑด์ ๋ง๋ ์์ดํ์ ๋ฐํ
const found1 = itemAll.find(value => {
  return value.display === '๐ฃ';
});
console.log(found1);
// ์กฐ๊ฑด์ ๋ง๋ ์ธ๋ฑ์ค๋ฅผ ์ฐพ๊ณ ์ถ๋ค๋ฉด findIndex๋ฅผ ์ฐ๋ฉด ๋๋ค.
const found2 = itemAll.findIndex(value => {
  return value.display === '๐ฅน';
});
console.log(found2);

console.log();
console.log();

console.log(
  '๋ฐฐ์ด์ ์์ดํ๋ค์ด ๋ถ๋ถ์ ์ผ๋ก ์กฐ๊ฑด(์ฝ๋ฐฑํจ์)์ ๋ง๋์ง ํ์ธ -> someํจ์'
);
const someEx = itemAll.some(item => item.display === '๐ฅน');
console.log(someEx);

console.log();
console.log();

console.log('๋ฐฐ์ด์ ์์ดํ๋ค์ด ์ ๋ถ ์กฐ๊ฑด(์ฝ๋ฐฑํจ์)์ ๋ง๋์ง ํ์ธ -> everyํจ์');
const everyEx = itemAll.every(item => item.display === '๐ฅน');
console.log(everyEx);

console.log();
console.log();

console.log('์กฐ๊ฑด์ ๋ง๋ ๋ชจ๋  ์์ดํ๋ค์ ์๋ก์ด ๋ฐฐ์ด๋ก -> filterํจ์');
const filterEx = itemAll.filter(item => item.display === '๐ฅน');
console.log(filterEx);
