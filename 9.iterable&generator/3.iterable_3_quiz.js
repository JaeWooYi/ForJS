// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
function myIterator() {
  for (let i = 0; i < 10; i++) {
    console.log(i * 2);
  }
}
myIterator();

console.log();

/**
 * 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
 * [Symbol.iterator](): Iterator{next(): {value,done}};
 */

const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}