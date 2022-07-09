const array = [10, 20, 30];

const iterator = array.values();
// for (const goods of iterator) {
//   console.log(goods);
// }
console.log('or');

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value); // undefined야. 다음 값 없으니까.
// console.log(iterator.next().done); // 반복이 끝났다는 뜻

console.log();

const iterator2 = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}

// 위 주석들 해논이유 : 한개씩만 적용해서 봐봐 한번
